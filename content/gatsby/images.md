---
title: "Images"
description: "Working with images in Gatsby"
---

import { Message } from '@theme-ui/components';

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  <b>Query</b>: is used for files under <b>pages/</b> directories.<br/>.
  <b>StaticQuery</b>: is used for files under <b>components/</b> or any other directory. <a href="https://www.gatsbyjs.org/docs/static-query/" target="_blank" rel="noopener">More info...</a><br/>
  Instead of <b>StaticQuery</b>, you can use the hook <b>useStaticQuery</b>, which is easier. <a href="https://www.gatsbyjs.org/docs/use-static-query/" target="_blank" rel="noopener">More info...</a>
</Message>

With Gatsby, we can make images to load faster by optimized handling and sizing.

1. Install `gatsby-image` and other, necessary dependencies like `gatsby-plugin-sharp`, `gatsby-transformer-sharp` and `gatsby-source-filesystem`

`$ npm i gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem`

2. Add the newly installed plugins and transformer plugins to your `gatsby-config.js`

```js
module.exports = {
  plugins: [`gatsby-plugin-sharp`, `gatsby-transformer-sharp`],
}
```

3. Configure `gatsby-source-filesystem` to load images from a folder. In order to use GraphQL to query the image files, the files need to be in a location that is known to Gatsby. This requires an update to `gatsby-config.js` to configure the plugin. Feel free to replace the `path` option with wherever your images are located relative to your project.

```js
module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { 
      resolve: `gatsby-source-filesystem`,
      options: {      
        path: `${__dirname}/src/images/`,
      } 
   	}
  ],
}
```

4. Write a **GraphQL** query using one of the included <a href="https://www.gatsbyjs.org/packages/gatsby-image/#fragments" target="_blank">GraphQL “fragments”</a> which specify the fields needed by `gatsby-image` to create a responsive, optimized image. This example will use `GatsbyImageSharpFluid`. An example of a GraphQL query is below where the path listed is the path relative to the location specified in the `gatsby-source-filesystem` options.

```js
file(relativePath: { eq: "default.jpg" }) {
  childImageSharp {
    # Specify the image processing specifications right in the query.
    fluid {
      ...GatsbyImageSharpFluid
    }
  }
}
```

5. Import `Img` to display the fragment in **JSX**. There are additional features available with the `Img` tag as well.

```js
import Img from "gatsby-image"

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img
      fluid={data.file.childImageSharp.fluid}
      alt="Gatsby Docs are awesome"
    />
  </div>
)
```

This GraphQL query creates multiple sizes of the image and when the page is rendered the image that is appropriate for the current screen resolution (e.g. desktop, mobile, and everything in between) is used. The `gatsby-image` component automatically enables a blur-up effect as well as lazy loading images that are not currently on screen.


#### Quering several image files

```js
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MyComponent = () => (
  
  <StaticQuery 
    query = {graphql`
      query {
        image1: file(relativePath: {eq: "image1.jpeg"}) {
          childImageSharp {
            fluid (maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        image2: file(relativePath: {eq: "image2.jpg"}) {
          childImageSharp {
            fluid (maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        image3: file(relativePath: {eq: "image3.jpeg"}) {
          childImageSharp {
            fluid (maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
  
    render={data => (
      <section id="services">
        <Img fluid={data.image1.childImageSharp.fluid} />
        <Img fluid={data.image2.childImageSharp.fluid} />
        <Img fluid={data.image3.childImageSharp.fluid} />
      </section>
    )}
  />
)

export default MyComponent
```


**More info at**:

* [https://www.gatsbyjs.org/packages/gatsby-image/](https://www.gatsbyjs.org/packages/gatsby-image)

* [Image Optimization Made Easy with Gatsby.js](https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e)

* [An Intro to Gatsby Image](https://codebushi.com/using-gatsby-image)


## Importing small icon images (png, svg)

It is advised not to use GraphQL queries, as small images lose plenty of definition.

#### /components/images.js

```js
import html from '../images/svg/html.svg'
import css from '../images/svg/css.svg'
import javascript from '../images/svg/javascript.svg'

export {html, css, javascript}
```

#### technologies.js
```js
import React from "react"
import {html, css, javascript} from '../components/images'

const Technologies = () => 
    <div className="technologies">
      <img src={html} alt="html"/>
      <img src={css} alt="css"/>
      <img src={javascript} alt="javascript"/>
    </div>

export default Technologies;
```
