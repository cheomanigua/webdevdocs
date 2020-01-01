---
title: "Markdown"
description: "Set up gatsby-transformer-remark in order to use .md markdown files"
---
import { Message } from '@theme-ui/components';

## Markdown with gatsby-transformer-remark

* Install plugins **gatsby-source-filesystem** and **gatsby-transformer-remark**:

`npm install --save gatsby-source-filesystem gatsby-transformer-remark`

* Activate plugins by adding the following code on **gatsby-config.js**:

```js
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
```

* Configure **gatsby-node.js**

Create **gatsby-node.js** file and add this code:

```js
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}

```

* Create and configure a markdown template file

Create and edit **src/template/blog-post.js**:

```js
import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
	const post = data.markdownRemark
	return (
        <div>
		<h1>{post.frontmatter.title}</h1>
		<div dangerouslySetInnerHTML={{ __html: post.html }} />
	</div>
  )
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`

```

* Create a markdown file

<Message variant='warning'>
  💣️ <b>Warning</b> <br/>
  You must create at least one markdown file before launching the server. Otherwise, you will get the run time error: <i>GraphQL Error Unknown field allMarkdownRemark on type RootQueryType</i>
</Message>

## Markdown tips

* When you have to add a text like this: `\<text\>`, you must escape the characters `\<` and `\>`. For instance, you must type like this: `\\\<text\\\>`. Otherwise, the server will crash and throw an error.
* Lists needs a space between the asterisk and the content. Let's add an example where the dot is a space for visibility sake:

`*.This is an example`

* Nested lists must have two spaces in order to work. Let's add an example where the dots are spaces for visibility sake:

```
*.Parent
..*.Children
....*.Grandchildren
