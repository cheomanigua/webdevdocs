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
check_alt "MX" "Continuum" "Debian" "stretch"
check_alt "mx-linux" "Continuum" "Debian" "stretch"
```

- Save the file as `setup_13.x` and make it ejecutable: `chmod +x setup_13.x`, then:
- `sudo ./setup_13.x`
- `sudo apt install -y nodejs`

## Troubleshooting

### npm ERR! code ELIFECYCLE

If you get this error when `npm start`, follow these steps:

1. `$ npm cache clean --force`
2. `$ rm -rf node_modules`
3. `npm install`

