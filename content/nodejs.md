---
title: "Node.js"
sescription: "Node.js framework reference pages"
---

[Node.js](https://nodejs.org/en/) is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.

## Installation

### NodeJS installation

**Note**: For instructions on how to install *NodeJS* on [MX Linux](https://mxlinux.org/), please check further down.

**Node.js v13.x** (check last version [here](https://github.com/nodesource/distributions/tree/master/deb)):

```
Ubuntu
$ curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
$ sudo apt-get install -y nodejs

Debian, as root
# curl -sL https://deb.nodesource.com/setup_13.x | bash -
# apt-get install -y nodejs

Fedora, as root
# curl -sL https://rpm.nodesource.com/setup_13.x | bash -
$ sudo dnf install -y nodejs
```

### How to install Node.js on MX Linux:

- Copy the content of [https://deb.nodesource.com/setup_13.x](https://deb.nodesource.com/setup_13.x) (check last version [here](https://github.com/nodesource/distributions/tree/master/deb))
- Create a new text file and paste the content
- Add the following lines:

```
check_alt "MX" "patito feo" "Debian" "stretch"
check_alt "mx-linux" "patito feo" "Debian" "stretch"
```

- Save the file as `setup_13.x` and make it ejecutable: `chmod +x setup_13.x`, then:
- `sudo ./setup_13.x`
- `sudo apt install -y nodejs`

### Install the Yarn package manager (optional):

```
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

## Troubleshooting

### npm ERR! code ELIFECYCLE

If you get this error when `npm start`, follow these steps:

1. `$ npm cache clean --force`
2. `$ rm -rf node_modules`
3. `npm install`

# Express

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
