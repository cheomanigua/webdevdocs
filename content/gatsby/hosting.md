---
title: "Hosting Gatsby sites"
description: "Basic GraphQL code and workflow"
---
import { Message } from '@theme-ui/components';

## Hosting on Netlify

You can host your site in **<a href="https://netlify.com" target="_blank">Netlify</a>** if you have the **source code** of your site in **<a href="https://github.com" target="_blank">Github</a>**. 

Note that if you have deployed the site as explained in the section below "<a href="#hostinggithub">Hosting on Github Pages</a>", you won't be able to host in Netlify.

* First you have to 
[create a repository](https://help.github.com/en/github/getting-started-with-github/create-a-repo) on Github
* Then move to the root directory of your Gatsby project in your local machine and download [this .gitignore file](https://drive.google.com/file/d/1Gjd28wj7tGGPjzh0JFAy3LNhOZovSG5r/view?usp=sharing)
* Issue these commands:

```
$ git init
$ git add .
$ git commit -m "first commit"
$ git remote add origin https://github.com/mygitaccount/myrepository.git
$ git push -u origin master
```

* Next, you have to follow these steps to deploy the Github repository on Netlify:
  * Login into your **Netlify** account.
  * Click on '*New site from Git*'
  * Select '*Github*' as repository provider
  * Connect and authorize to your **Github**
  * Choose the repository where your **Gatsby** site is located
  * Click on '*Deploy site*'

#### Updating repository
```
$ git add . 
$ git commit -m "changed some stuff"
$ git push
```

**Note**: Netlify will automatically detect the changes on the Github repository and will deploy the changes on your Netlify site. Awesome !!! This is called continuous deployment (Git-triggered builds). you can disable this setting from Netlify dashboard.

## Hosting on Zeit Now

You can push your Gatsby project of your local machine directly into <a href="https://zeit.co" target="_blank">**Zeit Now**</a> hosting, by using <a href="https://zeit.co/download" target="_blank">Now CLI</a> command line utility and running the command: `$ now`.

However, I prefer **Zeit Now** to get push commits updates from GitHub. Keep reading...

You can host your site in **<a href="https://zeit.co/" target="_blank">Zeit Now</a>** if you have the **source code** of your site in **<a href="https://github.com" target="_blank">Github</a>**.
 
Note that if you have deployed the site as explained in the section below "<a href="#hostinggithub">Hosting on Github Pages</a>", you won't be able to host in Zeit.

* First you have to 
[create a repository](https://help.github.com/en/github/getting-started-with-github/create-a-repo) on Github
* Then move to the root directory of your Gatsby project in your local machine and download [this .gitignore file](https://drive.google.com/file/d/1Gjd28wj7tGGPjzh0JFAy3LNhOZovSG5r/view?usp=sharing)
* Issue these commands:

```
$ git init
$ git add .
$ git commit -m "first commit"
$ git remote add origin https://github.com/mygitaccount/myrepository.git
$ git push -u origin master
```
* Next, you have to follow these steps to deploy the Github repository on Zeit:
  * Login into your **Zeit Now** account.
  * Click on '*New Project*' arrow button.
  * Select '*From GitHub*' as repository provider
  * Click on 'select' button next to the repository
  * Click 'Import'

Every time you git push, Zeit will automatically detect the changes on the Github repository and will deploy the changes on your Zeit site. Awesome !!! This is called continuous deployment (Git-triggered builds). You can disable this setting from the Zeit dashboard.

#### Deleting an existing project

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  The only way to delete a project hosted in <strong>Zeit Now</strong> dashboard is by using the <a href="https://zeit.co/download" target="_blank">Now CLI</a> command line utility.
</Message>

In order to install [Now CLI](https://zeit.co/download) in your local machine, issue these commands:

```
npm i -g now
now login
```

- Once installed, you can list the existing projects of your **Zeit Now** dashboard:

`now ls`

- To delete a particular project (both in your local machine and at **Zeit Now** cloud dashboard), issue:

`now projects rm <your-project-name>`



## <a id="hostinggithub"></a>Hosting on Github Pages

* Go to your project root directory and prepare Git:

```
$ git init
$ git add -A && git commit -m "My first commit"
```

* Install gh-pages:

`$ npm install gh-pages --save-dev`

* Modify `package.json` file with:

```js
scripts: {
  // ...you'll see build, develop, format, etc above this....
  "deploy": "gatsby build --prefix-paths && gh-pages -d public",
}
```

* Add a path prefix to the configuration `gatsby-config.js` to let GatsbyJS know it's not in the root:

```jsx
{
  siteMetadata: {
    title: `Your site Name`,
  },
  pathPrefix: "/your-repo-name",
}
```

* Deploy:

```
$ git remote add origin http://github.com/username/repo-name.git
$ npm run deploy
```

* Visit your site:

https://yourusername.github.io/repo-name/


* Update site with new commits:

```
$ git add -A && git commit -m "My second commit"
$ npm run deploy
```

