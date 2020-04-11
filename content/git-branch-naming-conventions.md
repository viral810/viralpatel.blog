---
slug: "git-branch-naming-conventions"
title: Git branch naming conventions
date: "2020-04-10"
cover: https://miro.medium.com/max/1400/1*jddX16Eg_sD5LSBddFVMtA.jpeg
tags:
  - "git"
thumbnail: ./thumbnails/git.png
---

As you have spent a couple of years in software or web development and if Git has become part of your work routine, this small tip of the day is going to help you optimize your workflow and increase productivity. The benefit of adopting this habit is long term and will add a lot of value.

> *There are only two hard things in Computer Science: cache invalidation and naming things.*
> *— Phil Karlton*

As we have all struggled naming things whether it is variables, classes or even at times naming our projects is hard. I bet a lot of developers still struggle to name their git branches as well or do not put enough thought into naming them since they are not something that will come and bite us in the future but trust me even if they do not bite, it still leaves certain marks on our projects.

I have a convention that I follow myself to make it easy to find branches later in the future and identifying intention behind creating this branch just by looking at their name.

Feel free to modify this convention best to your workflow and the way your mental modal works and identifies words.

    git checkout -b YOUR_INITIAL/TYPE_OF_WORK/JIRATICKETNUMBER-BRANCH-NAME

I know this might look a bit tedious to create branches with such long names but again the idea is to be able to interpret intention behind created branch just by looking at their name or you can even search with the pattern.

For example, I name my branches as,

    vp/feature/124-create-login-page

This can help you a few months/years down the road to find the branches you’ve worked on easier either through Github UI shown in the screenshot,

![Github screenshot](https://cdn-images-1.medium.com/max/2000/1*nADxFk5S0QUGu1rVQFMiMQ.png)

OR by the command line

    git branch --list | grep "vp/feature/"

    git branch --list "vp/feature/*"

## Summary

To break it down the convention,

    YOUR_INITIAL/TYPE_OF_WORK/JIRATICKETNUMBER-BRANCH-NAME

YOUR_INITIAL: It can be anything you want, your first name, your GitHub username

TYPE_OF_WORK: It can be of any category i.e. feature, fix, refactor, task, prototype, throwaway

JIRATICKETNUMBER-BRANCH-NAME: You can have a JIRA ticket number or if you are not using a ticket-based system it can be MMYY timestamp format followed with the branch name.

I’d love to know what do you guys use for naming your branches and how do you optimize your workflow.

> PS: Cover Photo by Yancy Min on Unsplash.
