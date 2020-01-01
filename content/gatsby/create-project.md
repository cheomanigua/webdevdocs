---
title: "Creating projects"
description: "How to create Gastsby projects"
---
import { Message } from '@theme-ui/components';

There are two quick ways to create a project in Gatsby:

## 1. Gatsby CLI

The most straight forward way to create a project is by installing a Gatsby starter using [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/):

`$ gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world`

This will create a *gatsby-starter-hello-world* project into the *hello-world* directory.

To run the development server, get into the root of the *hello-world* directory:

`cd hello-world`

Then run the development server:

`$ gatsby develop` 

To visit the site, go to [http://localhost:8000](http://localhost:8000)

<Message variant='important'>
  🔔️ <b>Note</b> <br/>
  If you don't specify the GitHub repository when creating the project, it will automatically download the <a href="https://github.com/gatsbyjs/gatsby-starter-default" target="__blank">Gatsby's default starter</a>.
</Message>

## 2. Clone a Gatsby repository

You can clone a Gatsby project repository and use [npm](https://www.npmjs.com/) to install and configure all the necessary packages:
 
```
git clone https://github.com/gatsbyjs/gatsby-starter-hello-world hello-world
cd hello-world
rm -rf .git # So you can have your own changes stored in VCS
npm install # or yarn install
npm run develop # or gatsby develop
```

<Message variant='important'>
  🔔️ <b>Note</b> <br/>
  <i>npm install</i> will install all packages listed on <strong>package-lock.json</strong> file. More info at <a href="https://docs.npmjs.com/cli/install" target="__blank">npm-install</a>.
</Message>

# Production builds

## Create a production build

`$ gatsby build`

Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.

## Serve the production build locally

`$ gatsby serve`

Gatsby starts a local HTML server for testing your built site. Remember to build your site using `gatsby build` before using this command.
