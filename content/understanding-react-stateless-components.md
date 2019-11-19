---
slug: understanding-react-stateless-components
title: Understanding React stateless components
date: "2019-02-25"
tags: ["react", "javascript", "functional"]
thumbnail: ./thumbnails/react.png
---

Since React v14, a simpler way was introduced to define stateless functional components. These component use plain Javascript functions. With React 16.6+, you can declare "pure" functional components via `React.memo`

The simplest way to define a stateless component is to write a Pure Javascript function.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

Here's why React's stateless components are amazing,

### Props are Read-Only

Whether you declare a component as a function or a class, it must never modify its own props. Consider the following function:

```js
function sum(a, b) {
  return a + b
}
```

Here's an anti-pattern

```js
function withdraw(account, amount) {
  account.total -= amount
}
```

### No Class Needed

Plain functions are generally preferable over ES6 classes and eliminiating the class related cruft like extends and the constructor in the example above a nice win.

### No this keyword

The enitre component becomes easier to understand without the `this` keyword. All the annoying and confusing quirks with Javascript's `this` keyword can be avoided.

Dumping classes eliminates the need for calling bind to pass the `this` context around. Given how confusing Javascript's `this` keyword is to many developers, avoiding it is a nice win.

### Enforced Best Practices

Stateless functional components are useful for dumb components. Presentational components focus on the UI rather than behavior so it's important to avoid using state in presentational components. Instead, state should be managed by higher-level "container" components, or via state management libraries like Redux.

Stateless components don't support state or lifecycle methods. This is a good thing. Why? Because it protects from laziness. Stateless functional components programatically enforce keeping the component pure. You're forced to put state management where it belongs: in higher level container components.

### Easy to Understand

When you see a stateless functional component, you know it's simply a function that takes props and spits out HTML. It's pure function.

### Easy to Test

Since it is a pure function, your assertions are very straightforward: Given these values for props, I expect it to return this markup.

### Performance

Finally, stateless functional components offer improved performance as well. Since there's no state or lifecycle methods to worry about.

To consider downsides of using React's stateless components, [visit this link](https://medium.freecodecamp.org/7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c)
