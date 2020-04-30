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

### Nodemon, a useful dependency
- **[nodemon](https://www.npmjs.com/package/nodemon)**: Tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Installation: `npm i -D nodemon`
Usage: `nodemon index.js`

You can also install nodemon as a development dependency:

`npm install --save-dev nodemon`

With a local installation, nodemon will not be available in your system path. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as `npm start`) or using `npx nodemon`.

#### Better usage

In the `package.json` created, we must modify some things. Within `"scrips":`, we remove `"test": "echo \"Error: no test specified\" && exit 1"`, and add `"start":` and `"dev":`, so the `"script":` section ends up like this:

```
"scripts": {
    "start": "node server",
    "dev": "nodemon server"
  },
```

To run the app during development, we type: `npm run dev`

### Other dependencies

- **[socket.io](https://www.npmjs.com/package/socket.io)**: Nodejs realtime framework server for dealing with web sockets.
- **[moment](https://www.npmjs.com/package/moment)**: A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Module that loads environment variables from a `.env` file into [process.env](https://nodejs.org/docs/latest/api/process.html#process_process_env).
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: Library to help you hash passwords for Node.js.
- **[passport](https://www.npmjs.com/package/passport)**: Express-compatible authentication middleware for Node.js.
- **[passport-local](https://www.npmjs.com/package/passport-local)**: [Passport](https://www.npmjs.com/package/passport) strategy for authenticating with a local username and password.
- **[express-session](https://www.npmjs.com/package/express-session)**: Simple session middleware for Express in a Node.js module.
- **[express-flash](https://www.npmjs.com/package/express-flash)**: Flash Messages for your Express Application.


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
