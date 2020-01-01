---
title: "Images"
description: "How to work with images in Image2"
---

## Importing and exporting images

**Mission**: Render an object with images.

*src/App.css*

```css
.icon {
  display: inline-block;
  height: auto;
  width: 60%;
}
```

*src/components/images.js*

```jsx
import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'
import image3 from '../images/image3.svg'

export {
  image1, image2, image3
}
```

*src/Apps.js*

```jsx
import React from 'react';
import './App.css';
import {image1, image2, image3}  from './components/images';

const jamstack = [
  { id: 1, src: image1, title: 'Image1', description: 'Image1' },
  { id: 2, src: image2, title: 'Image2', description: 'Image2' },
  { id: 3, src: image3, title: 'Image3', description: 'Image3' },
];

function App() {
  return (
    <div className="icon">
      { jamstack.map(({id, src, title, description}) =>
                   <img key={id} src={src} title={title} alt={description}
                     style={{ maxWidth:'50px', height:'auto', paddingLeft:'10px'}} />)}
    </div>
  );
}

export default App;
```
