---
slug: tests-are-executable-documentation
title: Tests are executable documentation
date: "2020-02-08"
tags:
  - tdd
  - ruby
thumbnail: ./thumbnails/rails.png
---

> A well-written test case tells a clear story, communicating the intent of code. Learn how to write expressive tests and why duplication isn't always a bad thing in your test cases. - phrase from ThoughtBot blog about TDD.

**Well written Tests** are always a source of truth for a living documentation for that perticular project. Other form of documentation such as git wikis, code comments, code commits, pull request descriptions, google doc, Slack comments can easily get out of the sync with the production code.

**Well written Tests** guides your example documentantion which can be used by the developers using your library. Developers of your library should never have to read your source code, code comments to figure out how to use your library. If you see yourself reading source code or code comments of other libraries you are using, it is an indication to you that the library does not have a well written test suite or example documentation to go through.

You should be revealing your **intents** through your tests. Developers using your library should never have to worry about how it is **implemented**. They should be able to use your library by reading your tests and examples only. We need to seperate the intent from the implementation.