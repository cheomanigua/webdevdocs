---
title: "Hooks"
description: "React Hooks reference page"
---

Hooks are functions that let you “hook into” React **state** and **lifecycle** features from **function components**. 

Hooks don’t work inside **classes**.

Hooks let you add React **state** and other React features to function without writing a class. 

#### Rules of Hooks
- Only call Hooks **at the top level**. Don’t call Hooks inside loops, conditions, or nested functions.
- Only call Hooks **from React function components**. Don’t call Hooks from regular **JavaScript** functions.

## State Hook (state feature)

`useState` is a hook that let you add some **state** to a function component.

### Counter example with State Hooks

```js
import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  // Prevent 'count' from setting negative value
  function decrease() {
    count === 0 ? setCount(count => 0) : setCount(count - 1)
  }

  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => decrease()}>-</button>
      </div>
      <div>
        <button onClick={() => setCount(count => 0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
```

#### This is the Class equivalent of Counter function code above:

```js
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }))
    if (this.state.count === 0) {
      this.setState(state => ({
      count: state.count = 0
    }))
    }
  }
  
  reset() {
    this.setState(state => ({
      count: state.count = 0
    }))
  }
    
  render() {
    return (
      <div>
        <div>Counter: {this.state.count}</div>
        <div>
          <button onClick={this.increment}> + </button>
          <button onClick={this.decrement}> - </button>
        </div>
        <div><button onClick={this.reset}>Reset</button></div>
      </div>
    );
  }
}
export default Counter;
```

More information at [Using the State Hook](https://reactjs.org/docs/hooks-state.html) at [React](https://reactjs.org) documentation pages.


## Effect Hook (lifecycle feature)

`useEffect` is a hook that let you perform **side effects** in function components

### Clock example with State and Effect Hooks

```js
import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [date]);

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <p style=>{date.toLocaleTimeString()}</p>
      <p style=>{date.toLocaleDateString()}</p>
    </div>
  );
}

export default Clock;
```

#### This is the Class equivalent of Clock function code above:
```js
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const fecha = this.state.date;
    return (
      <div>
        <p>{fecha.toLocaleTimeString()}</p>
        <p>{fecha.toLocaleDateString()}</p>
      </div>
    );
  }
}

export default Clock;
```


More information at [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html) at [React](https://reactjs.org) documentation pages.
