---
title: "Layout"
description: "Basic layout for a Gastby project"
---

#### Tree (parent directory is "src")

- components/
  - header.js
  - layout.js
- css/
  - style.css
- pages/
  - index.js
  
#### components/header.js

```jsx
import React from 'react'

const Header = () => <div  id="home">
  <nav>
    <div className="logo">
        <a href="#home">Doctor Flash</a>
    </div>
      <ul className="menu">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
  </nav>
  
  <header className="showcase">
    <div className="container showcase-inner">
      <h1>Data Recovery</h1>
      <p>Flash memory data recovery: Pendrives, SD/MicroSD, CFast, Compact Flash, SSD hard drives.</p>
      <a href="#contact" className="btn">Read More</a>
    </div>
  </header>

</div>
  
export default Header;
```

#### components/layout.js

```jsx
import React from 'react'
import Header from './header'
import '../css/style.css'

const Layout = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
)

export default Layout;
```

#### css/style.css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  font-family: "DosisBold", "Courier New", Courier, monospace; 
}
```

#### pages/index.jsx

```jsx
import React from 'react'
import Layout from '../components/layout'

export default () => 
<Layout>

  <About />
  <Services />
  <Contact />
  
</Layout>
```
