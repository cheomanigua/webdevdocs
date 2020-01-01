---
title: "React"
description: "React framework reference pages"
---
import { Message } from '@theme-ui/components';

[React](https://reactjs.org/) is a JavaScript library (not a framework) created by Facebook with the purpose of building user interfaces in the front end.

With React you can create components, which are reusable HTML elements, to build user interfaces quickly. React store and handle data using **state** and **props**.

React uses a special syntax called [JSX](https://reactjs.org/docs/introducing-jsx.html). You can put any JavaScript expressions within braces inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.

## Installation

There are several [scenarios](https://reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains) on how React can be used. As per solely learning React, we are going to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).

*Create React App* can be installed by using either [npm/npx](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/lang/en/), which come pre-installed with [Noje.js](https://nodejs.org/en/). If you have not installed Node.js yet, follow the tutorial at [Node.js installation](/nodejs).

### npx
```
npx create-react-app my-app
cd my-app
npm start # development mode
```
Go to [http://localhost:3000/](http://localhost:3000/)

### npm
```
npm init react-app my-app
cd my-app
npm start # development mode
```
Go to [http://localhost:3000/](http://localhost:3000/)

### Yarn
```
yarn create react-app my-app
cd my-app
yarn start # development mode
```
Go to [http://localhost:3000/](http://localhost:3000/)


## Build app
`npm run build` or `yarn build`

### Add JSX to a Project
- `npm init -y`
- `npm install babel-cli@6 babel-preset-react-app@3`

### Run JSX Preprocessor
- Create a folder called `src` and run this terminal command:

`npx babel --watch src --out-dir . --presets react-app/prod`


# Concepts

## Components and props

<Message variant='important'>
  🔔️ <b>Note</b> <br/>
  Always start component names with a capital letter
</Message>

React treats components starting with lowercase letters as DOM tags. For example, `<div >` represents an HTML div tag, but `<Welcome />` represents a component and requires `Welcome` to be in scope.

There are two types of componets:

### 1. Function component
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 2. Class component
```js
class Welcome extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>;
    );
  }
}
```

#### 

### Rendering a Function component
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

ReactDOM.render(element,document.getElementById('root'));
```


## Class component

### setState()

#### 1.Do Not Modify State Directly

For example, this will not re-render a component:
```js
// Wrong
this.state.comment = 'Hello';
```
Instead, use `setState()`:
```js
// Correct
this.setState({comment: 'Hello'});
```
The only place where you can assign `this.state` is the constructor.

#### 2. State Updates May Be Asynchronous

- Wrong:
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
- Correct:
```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
or
```js
// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```
More information at [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) at [React](https://reactjs.org) documentation pages.


### Arrow functions

Normal function:

`<button onClick={props.greetHandler}>`

Arrow function:

`<button onClick={() => props.greetHandler()}>`
