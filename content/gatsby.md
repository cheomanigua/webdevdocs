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

#### Commenting Gatsby JSX code

`{/* Gatsby code comment here */}`
