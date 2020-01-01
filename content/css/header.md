---
title: "Header"
description: "Header with transparent to solid navbar and hero image"
---

import { Message } from '@theme-ui/components';

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  <strong>Flexbox</strong> is used to layout sections whereas <strong>Grid</strong> is used to layout the entire page. It's important to keep this distinction.
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
  background: transparent;
  padding-bottom: 0.5rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: .5s;
  padding: .5rem .5rem;
}

nav a:hover {
  background: rgb(47, 153, 223);
  transition: .5s;
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
  transition: .5s;
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
    document.querySelector('nav').style.transition = "1s";
  }
}
```
