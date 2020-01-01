---
title: "Header"
description: "Header with transparent to solid navbar and hero image"
---

import { Message } from '@theme-ui/components';

<Message variant='info'>
  Header element with <strong>navbar</strong> that starts transparent and becomes solid when scrolling down. Hero image.
</Message>

#### .html

```html
<header>
  <nav>
    <a href="#home" id="logo">DOCTOR FLASH</a>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  <div class="bg-image"></div>
  <div class="content-wrap">
    <h1>Data Recovery</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum itaque excepturi nobis fugit voluptatibus
      deserunt laborum iste dolore cupiditate!</p>
    <a href="#about" class="btn">Read More</a>
  </div>
</header>
```

#### .css

```css
header {
  height: 70vh;
  color: #fff;
}

header .bg-image {
  position: absolute;
  background: #333 url('hero-image.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70vh;
  z-index:-1;
  opacity: 0.4;
}

nav {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}

nav ul {
  padding: 0;
  margin: 0;
  width: 50%;
  list-style: none;
}

nav li {
  padding-bottom: 0.5rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: .5rem .5rem;
  transition: .5s;
}

nav a:hover {
  background: rgb(47, 153, 223);
}

.btn {
  display: inline-block;
  background: #333;
  color: #fff;
  text-decoration: none;
  padding: 1em 2em;
  border: 1px solid #666;
  margin: .5em 0;
  transition: .5s;
}

.btn:hover {
  background: #eaeaea;
  color: #333;
}
```

#### .javascript

```js
window.onscroll = () => {
  if (window.pageYOffset > 150) {
    document.querySelector('nav').style.background = "#333";
    document.querySelector('nav').style.transition = "1s";
  } else {
    document.querySelector('nav').style.background = "transparent";
  }
}
```
