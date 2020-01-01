---
title: "CSS Modules"
description: "Quick tutorial on how to setup and use CSS Modules"
---

import { Message } from '@theme-ui/components';

<Message variant='important'>
  💡 <b>Tip</b> <br/>
 A <strong>CSS Module</strong> is a CSS file in which <pre>all class names and</pre> animation names are scoped locally by default.
</Message>

I'll present a small example of how to use **CSS Modules** to create a *menu*.

*src/components/menu.module.css*
```css
.menuheader div {
  padding-bottom: 50px;
}

.menuheader ul {
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  background-color: coral;
}

.menuheader li {
	float: left;
}

.menuheader li a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  margin-bottom: -12px;
  text-decoration: none;
}

.menuheader li a:hover {
  text-decoration: underline;
  background-color: gray;
}
```

*src/components/menu.js*
```js
import { Link } from "gatsby"
import React from "react"
import styles from "./menu.module.css"

const Menu = () => (
  <div className={styles.menuheader}>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
)
export default Menu
```

*src/components/layout.js*
```js
...

import Header from "./header"
import Menu from "./menu"
import "./layout.css"

const Layout = ({ children }) => (

...
```
*src/pages/index.js*
```js
...

import Layout from "../components/layout"

...

const IndexPage = () => (
  <Layout>
...
  </Layout>
)

export default IndexPage
```
