---
title: "Grid one column"
description: "One column grid layout for modern landing pages"
---

import { Message } from '@theme-ui/components';

<Message variant='info'>
  One column grid layout for modern landing pages.
</Message>

#### .html

```html
<body>
  <div class="wrapper" id="home">
    <header>
      <nav>
        <a href="#home" id="logo"></a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </nav>
      <div class="bg-image"></div>
      <div class="content-wrap">
        <h1></h1>
        <p></p>
        <a href="#" class="btn"></a>
      </div>
    </header>

    <main>
      <!-- Section A -->
      <section></section>
      
      <!-- Section B -->
      <section id="about">
        <div class="card">
          <img src="" alt="">
          <div class="card-content">
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div class="card">
          <img src="" alt="">
          <div class="card-content">
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div class="card">
          <img src="" alt="">
          <div class="card-content">
            <h3 ></h3>
            <p></p>
          </div>
        </div>
      </section>

      <!-- Section C -->
      <section></section>

      <!-- Section D -->
      <section id="contact">
        <div class="box">
          <h3></h3>
          <p></p>
        </div>
        <div class="box">
          <h3></h3>
          <p></p>
        </div>
      </section>
    </main>
    
    <!-- Footer -->
    <footer id="main-footer">
      <div>Acme Web Solutions &#169; 2020</div>
      <div>Project by <a href="#" target="_blank">Digital Realm</a></div>
    </footer> 
  </div>
</body>
```

#### .css

```css
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  /* font-size: 62.5%;
  font-family: "DosisBold", "Courier New", Courier, monospace;  */
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #333;
  color: #fff;
  font-size: 1.1em;
  line-height: 1.5;
  text-align: center;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr); 
}

.wrapper > section {
  padding: 1em;
}

header {
  height: 70vh;
  color: #fff;

}

header .bg-image {
  position: absolute;
  background: #333 url('');
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

section {
  background: #fff;
  color: #000;
  padding: 5rem 2em 5rem 2rem;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

h1, h2, h3 {
  margin: 0;
  padding: 1em 0;
}

p {
  margin: 0;
  padding: 1em 0;
}

.content-wrap {
  margin: 10rem 2rem;
}

/* Card */
.card {
  margin: 1em 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-content {
  padding: 2px 16px;
}
/* Card end */

.box{
  padding: 1em 1em;
  color: #fff;
  background: #333;
}

.box:first-child {
  background: #2690d4;
}

/* Footer */
#main-footer {
  padding: 2em;
  background: #000;
  color: #fff;
  text-align: center;
}

#main-footer a {
  color: #2690d4;
  text-decoration: none;
}
/* Footer end*/

@media(min-width: 600px) {
  #about {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }

  nav>ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  nav li {
    padding-bottom: 0;
  }

  #contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
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
