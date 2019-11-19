---
slug: "useful-git-aliases"
title: Setup aliases and shortcuts for git commands
date: "2019-02-25"
cover: "5.jpg"
tags:
  - "react"
  - "javascript"
  - "functional"
thumbnail: ./thumbnails/git.png
---

Here is how you setup aliases and shortcuts for git commands. Edit `.gitconfig` file in your `$HOME` directory.

```yml
[alias]
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
  type = cat-file -t
  dump = cat-file -p
```

Refer to the branch you've checked out when you use `git push` and/or `git pull`

```yml
[push]
  default = current
```

Here are some more goodies in your aliases list. Thank me later :sunglasses:

```yml
[alias]
  # Adds and commits files with a single command
  add-commit = !git add -A && git commit

  # Delete all local branches but master and the current one, only if they are fully merged with master.
  br-delete-useless = "!f(){\git branch | grep -v "master" | grep -v ^* | xargs git branch -d;\}; f"

  # Delete all local branches but master and the current one.
  br-delete-useless-force = "!f(){\git branch | grep -v "master" | grep -v ^* | xargs git branch -D;\}; f"
```
