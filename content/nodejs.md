---
title: "Node.js"
description: "Node.js framework reference pages"
---

[Node.js](https://nodejs.org/en/) is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.

## Installation

### NodeJS installation

**Note**: For instructions on how to install *NodeJS* on [MX Linux](https://mxlinux.org/), please check further down.

**Node.js v14.x** (check last version [here](https://github.com/nodesource/distributions/tree/master/deb)):

```
Ubuntu
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt-get install -y nodejs

Debian, as root
# curl -sL https://deb.nodesource.com/setup_14.x | bash -
# apt-get install -y nodejs

Fedora, as root
# curl -sL https://rpm.nodesource.com/setup_14.x | bash -
$ sudo dnf install -y nodejs
```

### How to install Node.js on MX Linux:

- Copy the content of [https://deb.nodesource.com/setup_13.x](https://deb.nodesource.com/setup_14.x) (check last version [here](https://github.com/nodesource/distributions/tree/master/deb))
- Create a new text file and paste the content
- Add the following lines:

```
check_alt "MX" "patito feo" "Debian" "stretch"
check_alt "mx-linux" "patito feo" "Debian" "stretch"
```

- Save the file as `setup_14.x` and make it ejecutable: `chmod +x setup_14.x`, then:
- `sudo ./setup_14.x`
- `sudo apt install -y nodejs`

### Install the Yarn package manager (optional):

```
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

### NPM

#### How to generate a package.json

```
npm init

or

npm init -y
```

#### How to install packages

```
# As normal dependency
npm i <package>

# As development dependency
npm i -D <package>

# Globally
npm i -g <package>
```

#### How to check for installed packages

```
# Globally installed
npm list -g --depth 0`

# Locally installed
npm list --depth 0
```


## Troubleshooting

### npm ERR! code ELIFECYCLE

If you get this error when `npm start`, follow these steps:

1. `$ npm cache clean --force`
2. `$ rm -rf node_modules`
3. `npm install`

## Dependencies

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
- **[helmet](https://www.npmjs.com/package/helmet)**: Helps secure Express/Connect apps with various HTTP headers.
- **[body-parser](https://www.npmjs.com/package/body-parser)**: Node.js body parsing middleware (included in Express by default)
- **[cors](https://www.npmjs.com/package/cors)**: node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **[compression](https://www.npmjs.com/package/compression)**: Node.js compression middleware.
- **[morgan](https://www.npmjs.com/package/morgan)**: HTTP request logger middleware for node.js.
