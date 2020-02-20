---
title: "SEO"
description: "Adding SEO functionality to a gatsby site"
---

### Plugins

- *react-helmet*
- *gatsby-plugin-react-helmet*
- *gatsby-plugin-feed*
- *gatsby-plugin-google-analytics*
- *gatsby-plugin-sitemap*
- *gatsby-plugin-robots-txt*
- *gatsby-plugin-canonical-urls*


### Plugins installation

- `npm install --save gatsby-plugin-react-helmet react-helmet`
- `npm install --save gatsby-plugin-robots-txt`
- `npm install --save gatsby-plugin-sitemap` 

### Plugins configuration

- Edit `gatsby-config.js`

```js
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.example.com',
    title: "Desarrollo Web y Marketing",
    description: "Nuestro estudio diseña y desarrolla sitios webs rápidos y con un marketing y SEO de alta calidad.",
    author: "Sergio Sanchez",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    { 
      resolve: `gatsby-source-filesystem`,
      options: {      
        path: `${__dirname}/src/images/`,
      } 
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/category/*`, `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
```

References:
- <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/" target="_blank">https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet</a>
- <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/" target="_blank">https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt</a>
- <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/" target="_blank">https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap</a>


### src/components/SEO.js

```js
import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, lang}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultLang,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        lang: lang || defaultLang,
      }

      return (
        <>
          <Helmet 
            htmlAttributes={{
              lang,
            }}
            title={seo.title}>
            <meta name="description" content={seo.description} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  lang: `es`,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`
```
