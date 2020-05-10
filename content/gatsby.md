---
title: "Gatsby"
description: "Gatsby framework reference pages"
---
import { Message } from '@theme-ui/components';


[Gatsby](https://www.gatsbyjs.org/) is a free and open source framework based on [React](https://reactjs.org/) that helps developers build blazing fast **websites** and **apps**

### Installation
*Gatsby* can be installed by using either [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/lang/en/). **npm** comes pre-installed with [Node.js](https://nodejs.org/en/). If you have not yet installed Node.js, follow the tutorial at [Node.js installation](/nodejs).


### Gatsby installation
`$ sudo npm install --global gatsby-cli`

### Adding page metadata
In order to add metadata to a page (title, description or viewport metatag), you must follow these steps:

1. Install these packages:

  `npm install --save gatsby-plugin-react-helmet react-helmet`

2. Add the plugin in `gatsby-config.js`:

```jsx
{
  plugins: [`gatsby-plugin-react-helmet`]
}
```

3. Use `React Helmet` in your pages:

```jsx
import React from 'react'
import {Helmet} from 'react-element'
class Application extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
    )
  }
}
```

#### Responsive pages

In order to enable responsible pages in HTML, you must add this metatag in your `Helmet`:

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### Importing images

`<div styles={{backgroundImage: `url(${myimage})` }} title='My Image'>`

`<img src={myimage} alt='My Image' />`

### Importing vanilla Javascript snippets

Add the javascript snippet under the <a href="https://www.gatsbyjs.org/docs/browser-apis/#onClientEntry" target="_black">onClientEntry</a> function at **gatsby-browser.js**:

```js
exports.onClientEntry = () => {
  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      document.querySelector('nav').style.background = "#333";
      document.querySelector('nav').style.transition = "1s";
    } else {
      document.querySelector('nav').style.background = "transparent";
    }
  }
}
```


#### Commenting Gatsby JSX code

`{/* Gatsby code comment here */}`


### Errors

<Message variant='warning'>
Error: ENOSPC: System limit for number of file watchers reached, watch 'path/to/your/project'
</Message>

The current limit can be viewed by running:

`cat /proc/sys/fs/inotify/max_user_watches`

The limit can be increased to its maximum by editing `/etc/sysctl.conf` and adding this line to the end of the file:

`fs.inotify.max_user_watches=524288`

<a href="https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc" target="_blank">Reference</a>

### When to use Gatsby instead of React or Next.js

![Gatsby](/src/gatsby-react-nextjs.jpg)