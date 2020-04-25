---
title: "Express"
sescription: "Express framework reference pages"
---

Express is a fast, unopinionated, minimalist web framework for Node.js

You need Node.js installed in order to install Express. For further information on how to install Node.js, please visit [our article on Node.js](nodejs.md)

## Installation (basic)

```
mkdir myexpress
cd myexpress
npm init
npm i express
```

### Userful dependency
- **nodemon**: Restart the server everytime we edit a file (for development)

`npm i -D nodemon`

In the `package.json` created, we must modify some things. Within `"scrips":`, we remove `"test": "echo \"Error: no test specified\" && exit 1"`, and add `"start":` and `"dev":`, so the `"script":` section ends up like this:

```
"scripts": {
    "start": "node server",
    "dev": "nodemon server"
  },
```

### Other dependencies

- **socket.io**: Framework for dealing with web sockets
- **moment**: Format date and time

`npm i socket.io moment`

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
