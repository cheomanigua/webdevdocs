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


