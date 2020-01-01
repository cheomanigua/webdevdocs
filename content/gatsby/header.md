---
title: "Header.js"
description: "Example of a header file with Gatsby Background Image"
---

This is an example of a header file with a background image queried with GraphQL and using Gatsby Background Image.

```js
import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        desktop: file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
            fluid(quality: 72, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      `}

      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="header"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <nav className="nav main-nav">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/shop">SHOP</Link>
                </li>
                <li>
                  <Link to="/blog">BLOG</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link> 
                </li>
              </ul>
            </nav>
            <h1 className="title-name title-name-large">{data.site.siteMetadata.title}</h1>
          </BackgroundImage>
        )
      }
    }
  />
)

const Header = styled(BackgroundSection)`
  background-color: rgba(0, 0, 0, .6);
  background-blend-mode: multiply;
  background-position: top;
  background-size: cover;
  padding-bottom: 30px;
`
export default Header
```
