---
title: "GraphQL"
description: "Basic GraphQL code and workflow"
---

## How to query several images from source files

**Case example**: How to get all files with extension ".webp" and ".jpeg" from directory "images"

1. On *gatsby-configure.js*, configure *gatsby-source-filesystem* plugin in order to fetch data from particular directories, in this case */images/*

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
  ],
}
```

2. Create the query. Note that in order to filter by directory, we actually use the *name* you specified in the *gatsby-config.js* file by using the filter *sourceInstanceName* in the query:
```js
export const query = graphql`
  query MyQuery {
    allFile(filter: {sourceInstanceName: {eq: "images"}, extension: {regex: "/(jpeg)|(webp)/"}}) {
      edges {
        node {
          name
          relativePath
        }
      }
      totalCount
    }
  }
`
```

Note that *relativePath* will yield the actual name of the file.


## How to query siteMetadata from gatsby-config.js

**Note**: This will work only in files under `pages/` directory.

```js
import React from "react"
import { graphql } from 'gatsby'

const IndexPage = () => {
	return (
		<header>
			<h1>{data.site.siteMetadata.title}</h1>
		</header>
	)
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
```
