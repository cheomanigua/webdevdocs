---
title: "Express"
description: "Express framework reference pages"
---

Express is a fast, unopinionated, minimalist web framework for Node.js

You need Node.js installed in order to install Express. For further information on how to install Node.js, please visit [our article on Node.js](nodejs)

## Installation (basic)

```
mkdir myexpress
cd myexpress
npm init
npm i express
```

## Other

### Custom setup

Normally, the entry point for an **Express** application is the file `server.js`, so during **Express** installation we type `server.js` instead of the default `index.js`. We can change the entry point later on in the `package.json` file by editing the `"main":` entry and replacing `index.js` for `server.js`.

Afterward, we create the `server.js` file in our Express application root directory.

### Running Express

As we created a `"dev":` script in the `package.json` file, we can start the server by issuing:

`npm run dev`

### Basic index.js/server.js file content

```js
const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Set static foloder
app.use(express.static(path.join(__dirname, 'public')))

// Listening port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
```
