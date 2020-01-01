---
title: "Props"
description: "React Props reference page"
---

Props are React properties added as arguments to Functions components. 

- Props are used to pass the data as params (parameters) from one React component to another component.
- Props are only passed from top to bottom in React's component tree. There is no way to pass props up to a parent component.
- React's props are read only. There is no way in React to set props.

```js
import React from 'react';

function Props() {
  const Name = 'Pepe';
  const Surname = 'Monagas';
  const Name2 = 'Pepe2';
  const Surname2 = 'Monagas2';

  return (
    <div>     
      <Greeting name={Name} surname={Surname} />
      <Greeting2 name={Name2} surname={Surname2} />
    </div>
  );
}

const Greeting = props => <p>Hello, my name is {props.name} {props.surname}</p>

// React props destructuring version
const Greeting2 = ({name, surname}) => <p>Hello, my name is {name} {surname} </p>;

export default Props;
```
