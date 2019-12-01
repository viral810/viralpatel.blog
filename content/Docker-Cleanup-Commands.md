---
slug: docker-cleanup-commands
title: Docker Cleanup Commands
date: "2019-11-30"
category: "devops"
tags:
  - "docker"
thumbnail: ./thumbnails/docker-blue.png
---

If you see **Docker** claiming lot of space on your computer and if you want to reclaim all of your space back from Docker, use following Docker commands for cleanup. Make sure you are aware that this will delete images and containers from your machine, make sure you do not run this on production machines unless you know what you are doing  😎.

## How to remove docker’s unused data?
```sh
docker system prune —force
```

**To delete everything**
```sh
docker system prune -a --volumes
```


## How to delete all docker containers including its volumes use?
```sh
docker rm -vf $(docker ps -a -q)
```

## How to delete all docker images?
```sh
docker rmi -f $(docker images -a -q)
```

These commands helped me to reclaim more than **10GB** of data for only few months of work with Docker.

