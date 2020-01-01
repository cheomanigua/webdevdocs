---
title: "Events"
description: "React Events reference page"
---

## Handling Events

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

On the code below I show three different ways to achieve the same result: Clicking a button to change state. **Note** that with function `handleClick1` is necessary to call `bind` on the Class constructor. Out of  the three different methods, the best one is `handleClick1`.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class HandlingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn1: true,
      isToggleOn2: true,
      isToggleOn3: true
    };
    this.handleClick1 = this.handleClick1.bind(this);
  }
  
  handleClick1() {
    this.setState(state => ({
      isToggleOn1: !state.isToggleOn1
    }));
  }
  
  /* You can use class fields to correctly bind callbacks
  if you don’t want to call bind from the constructor. */
  handleClick2 = () => {
    this.setState(state => ({
      isToggleOn2: !state.isToggleOn2
    }));
  }
  
  handleClick3() {
    this.setState(state => ({
      isToggleOn3: !state.isToggleOn3
    }));
  }  

  render() {
    return (
      <div>
        
        <div>
          <button onClick={this.handleClick1}>
            {this.state.isToggleOn1 ? 'ON 1' : 'OFF 1'}
          </button>
        </div>
        
        <div>
          {/* best solution if you do not want to call bind*/}
          <button onClick={this.handleClick2}>
            {this.state.isToggleOn2 ? 'ON 2' : 'OFF 2'}
          </button>
        </div>
        
        <div>
          {/* You can use an arrow function in the callback, 
          the problem is that a different callback is created
          each time the HandlingEvents renders */}
          <button onClick={(e) => this.handleClick3(e)}>
            {this.state.isToggleOn3 ? 'ON 3' : 'OFF 3'}
          </button>
        </div>
        
      </div>
    );
  }
}

ReactDOM.render(
  <HandlingEvents />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```


### Changing text in button and HTML element when clicking a button:
This is a code example of changing the text of a button and a HTML element when clicking in a button.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'wonderful',
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
   
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    
    this.state.isToggleOn
      ? this.setState({ word: "miserable" })
      : this.setState({ word: "wonderful" });
  }
  
  render() {
    return (
      <div>
        <h2>It is a {this.state.word} day</h2>
        
        <button onClick={this.handleClick}>
            {this.state.isToggleOn
               ? 'Toggle to "miserable"' 
               : 'Toggle to "wonderful"'}
        </button>
        
      </div>
    );
  }
}

ReactDOM.render(
  <ClickMe />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```



Info: https://reactjs.org/docs/handling-events.html

Info: https://www.w3schools.com/react/react_events.asp
