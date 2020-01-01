---
title: "Lists and Keys"
description: "How to work with lists and keys in React"
---

In this example a list of objects is rendered

*App.css*

```css
.icon {
  display: inline-block;
  height: auto;
  width: 60%;
}
```

*components/images.js*

```jsx
import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'

export {
  image1, image2
}
```


*components/shop.js*
```jsx
import React from 'react';

function Shop(props) {
  const sidebar = (
    <ul>
      {props.cards.map((card) =>
        <li key={card.id}>
          {card.title}
        </li>
      )}
    </ul>
  );
  const content = props.cards.map((card) =>
    <div key={card.id}>
      <h3>{card.title}</h3>
      <p>{card.content}</p>
       <img src={card.image} 
       alt={card.title} 
       style={{ maxWidth:'50px', height:'auto', paddingLeft:'10px'}}
       />                              
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export default Shop;
```


*Apps.js*

```jsx
import React from 'react';
import './App.css';
import {image1, image2}  from './components/images';
import Shop from './components/shop';

const techs = [
  {id: 1, 
    title: 'Mug', 
    content: 'Beautiful mug for a present', 
    image: image1},
  {id: 2, 
    title: 'Shirt', 
    content: 'Get your shirt now', 
    image: image2}
];

function App() {
  return (
    
    <div className="App">
      <Shop cards={techs}/>
    </div>
  );
}

export default App;
```
