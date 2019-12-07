---
slug: How-to-dockerize-a-Rails-application
title: How to dockerize a Rails application
date: "2019-12-07"
category: "devops"
tags:
  - docker
  - rails
  - devops
  - tutorial
  - postgresql
thumbnail: ./thumbnails/docker-blue.png
---

**Introduction**

Microservices architecture is a particular way of designing software applications so that it can be deployed independently, test independently,  and scaled independently. Read  [What are microservices?](https://microservices.io/)  to get more deep understanding about this particular architecture pattern.

One of the first few steps you as a developer or ops person can do to move towards microservices architecture is to start *containerizing*  your applications.

If  `Rails` is part of your stack, this blog will explain you how to dockerize your Rails application.  This blog is not a `docker`  tutorial, yet you will be instructed with some best practices with docker. With assumption  that docker is installed on your system and you have a working rails application with PostgreSQL database. If you haven’t installed **Docker** already, download it from [official docker website](https://www.docker.com/products/docker-desktop).

## Create `Dockerfile` in the root folder of the project
`Dockerfile` describes all the steps that are required to create an image and would usually be contained within the root directory of the source code repository for your application.

```sh
# rails-app/
cd rails-app/
touch Dockerfile
```

First step of writing any `Dockerfile` is to choose the base image. We are going to use official ruby docker image but a **slim** version.

```dockerfile
FROM ruby:2.6.3-slim
```

Applying labels to images and containers allows you to add metadata via key/value pairs that can later be used to search for and identify Docker images and containers. You can see the labels applied to any image using the docker inspect command.

```dockerfile
LABEL "maintainer"="viral@fakemail.com"
LABEL "app_type"="backend"
LABEL "service_type"="API"
```

 Maintainer is a deprecated field in the Dockerfile specification.

Docker runs all processes within the container as `root` but it is recommended to use `USER` instruction to potentially avoid any security risks. Production containers should almost always be run under the context of a non-privileged user.

```dockerfile
USER root
```

One of the most important instruction `ENV` allows you to set shell environment variables that can be used by your running application for configuration and during the build process to simplify the Dockerfile.

```dockerfile
ENV APP /usr/src/app
ENV RAIL_ENV development
```

Now, we are going to introduce `RUN` instruction. We will be using these commands to create the file structure you need, and install required software dependecies. You will also be able to use shell environment variables defined in the previous step. Let’s write few `RUN` instructions required for our rails application.

```dockerfile
RUN mkdir -p $APP
RUN apt-get -y update && apt-get install -y --no-install-recommends \
    libgmp-dev \
	  gcc make git \
    postgresql-client \
    dnsutils \
	  libpq-dev libglib2.0-dev build-essential patch zlib1g-dev liblzma-dev \
    && rm -rf /var/lib/apt/lists/*
```

First instruction creates an app directory and second instruction runs few commands and installs require software, a Postgres client into a single step.

> Remember that every instruction creates a new Docker image layer, so it often makes sense to combine a few logically grouped commands onto a single line. It is even possible to use the ADD instruction in combination with the RUN instruction to copy a complex script to your image and then execute that script with only two commands in the *Dockerfile*.

Next instruction, `WORKDIR`, is use to change the working directory in the image for the remaining build instructions.

```dockerfile
WORKDIR $APP
```

`COPY` instruction copies file from the host machine to your container image.

```dockerfile
COPY Gemfile $APP/Gemfile
COPY Gemfile.lock $APP/Gemfile.lock
RUN gem install bundler -v 1.17.3
RUN bundle install
COPY . $APP
```

Install required gems from `Gemfile`. Remember we are in currently root folder of the app because of the `WORKDIR` instruction use.

This completes installing required dependency. Now we only need to boot up the application and expose the public endpoint so that public internet can access our application. Before we do that, it is important remove any unnecessary dependency to reduce our overall image size which eventually comes in handy when downloading and running applications.

```dockerfile
RUN apt-get purge -y --auto-remove \
      gcc make git \
      libpq-dev libglib2.0-dev build-essential patch zlib1g-dev liblzma-dev \
		&& rm -rf /var/lib/apt/lists/*
```

`CMD` instruction which defines the command that launches the process that you want to run within the container.

```dockerfile
CMD [ "bundle", "exec", "puma", "-C", "config/puma.rb", "config.ru" ]
```

And finally we use `EXPOSE` instruction to expose application running process.

```dockerfile
EXPOSE 3000
```

Here is your final `Dockerfile` looks like

```dockerfile
FROM ruby:2.6.3-slim

LABEL “maintainer”=“viral@fakemail.com”
LABEL “app_type”=“backend”
LABEL “service_type”=“API”

USER root

ENV APP /usr/src/app
ENV RAIL_ENV development

RUN mkdir -p $APP
RUN apt-get -y update && apt-get install -y —no-install-recommends \
    libgmp-dev \
    gcc make git \
    postgresql-client \
    dnsutils \
    libpq-dev libglib2.0-dev build-essential patch zlib1g-dev liblzma-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR $APP

COPY Gemfile $APP/Gemfile
COPY Gemfile.lock $APP/Gemfile.lock
RUN gem install bundler -v 1.17.3
RUN bundle install
COPY . $APP

RUN apt-get purge -y —auto-remove \
      gcc make git \
      libpq-dev libglib2.0-dev build-essential patch zlib1g-dev liblzma-dev \
    && rm -rf /var/lib/apt/lists/*


CMD [ “bundle”, “exec”, “puma”, “-C”, “config/puma.rb”, “config.ru” ]
```

Build your docker image by running,
```sh
docker build -t user/repo_name:tag .
```

But wait, before you can run this docker image locally, make sure your database yaml file is configured properly.

```yaml
# database.yaml
default: &default
  adapter: postgresql
  encoding: unicode
  host: db
  username: postgres
  password:
  # For details on connection pooling, see Rails configuration guide
  # https://guides.rubyonrails.org/configuring.html#database-pooling
  pool: <%= ENV.fetch(“RAILS_MAX_THREADS”) { 5 } %>

development:
  <<: *default
  database: rails_docker_blog_development
```

Now copy this `docker-compose` file to your root folder of the project.  And run `docker-compose up -d --build`

```yaml
version: ‘3’
services:
  db:
    image: postgres
    volumes:
      - ./tmp/db:/var/lib/postgresql/data
  web:
    build: .
    command: bash -c “rm -f tmp/pids/server.pid && bundle exec puma -C config/puma.rb config.ru”
    environment:
      - RAILS_ENV=development
    volumes:
      - .:/usr/src/app
    ports:
      - “3000:3000”
    depends_on:
      - db
```

Finally, you need to create the database. In another terminal, run:

```sh
docker-compose run web rake db:create
```

That’s it.

That’s it. Your app should now be running on port 3000 on your Docker daemon.

On Docker Desktop for Mac and Docker Desktop for Windows, go to http://localhost:3000 on a web browser to see the Rails Welcome.

If you are using  [Docker Machine](https://docs.docker.com/machine/overview/) , then docker-machine ip MACHINE_VM returns the Docker host IP address, to which you can append the port `<Docker-Host-IP>:3000`.

![](https://docs.docker.com/compose/images/rails-welcome.png)
