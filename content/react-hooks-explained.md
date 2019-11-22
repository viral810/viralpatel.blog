---
slug: react-hooks-explained
title: Why use React Hooks? Explained
date: "2019-03-03"
tags: 
  - "react"
  - "javascript"
  - "functional"
  - "hooks"
  - "stateless"
thumbnail: ./thumbnails/react.png
---

### Start with why?

If you want to use Hooks in `React` in your application. Make sure you update your react version to `>=16.8` since it was introduced in `React v16.8`.

Before React Hooks was a feature in React the only way to use state in your component was to write your component as ES6 Class. Now, with React hooks you can use state and other React features without writing a class.

[Click here to watch a youtube video from React Conf 2018](https://www.youtube.com/watch?v=dpw9EHDh2bM)

#### Completely opt-in

You can try Hooks in a few components without rewriting any existing code. But you don't have to learn or usee Hooks right now if you don't want to. It is 100% backwards-compatible.

#### Hooks don't replace your knowledge of React concepts

Hooks only is an alternative way to use React concepts you already know: props, state, context, refs, and lifecycle but without classes. Hooks allow you to reuse stateful logic without changing your component hierarchy

##### How do lifecycle methods correspond to Hooks?

- Function components don't need a constructor. You can initialize the state in the `useState` call. If a computing the initial state is expensive, you can pass a function to `useState`.

- Instead of using `shouldComponentUpdate` lifecycle, use `React.memo`

- Hook called `useEffect` can express all combinations of all the standard lifecycles like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`

- There are no hooks yet for handling exceptions in your component.

#### Next steps

Hope this article helps you understanding a motivation behind why Hooks were introduced but many details will be probably unclear. Click [this link to deep dive into Hooks](https://reactjs.org/docs/hooks-overview.html)
