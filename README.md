
Welcome to 
[GNU/Linux Reference documentation](https://gnulinux.netlify.com/), 
powered by 
[Gatsby](https://www.gatsbyjs.org/), customized using the theme made 
by [codebushi](https://github.com/codebushi/gatsby-theme-document), 
and styled under the influence of 
[React](https://reactjs.org/docs/getting-started.html) 
documentation pages.

This is a GNU/Linux reference documentation site. 
You'll find information about different Linux distros, 
technologies, libraries and frameworks.

<Message variant='important'>
  🔔️ <b>Important</b> <br/>
  This documentation is not intended to be used as a tutorial. 
  However, you'll find now and then some step by step 
  instructions along with typical documentation content.
</Message>

Among distro tips, there is information on MX Linux, 
CentOS, Fedora, Debian, Arch Linux and Clear Linux. 
In addition, there is information about well known 
technologies like Wordpress and LAMP/LEMP stacks and 
also about new libraries and frameworks for JAMStack: 
React and Gatsby.

## Getting Started

Using the Gatsby CLI

```bash
gatsby new document-site https://github.com/codebushi/gatsby-theme-document-example
cd document-site
gatsby develop
```

Your new site will be up at http://localhost:8000

Try changing the logo by editing the file at `src/gatsby-theme-document/logo.mdx`.

## Adding Content

Document is built with [MDX](https://mdxjs.com/). Content can be added by creating or editing the MDX files in the content folder `content/index.mdx`.

With MDX, you can add JSX or even React components to your markdown files. Images can also be added to any `.mdx` file, and will be automatically optimized using [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/).

### Left Sidebar

The left sidebar navigation is automatically populated by the pages in the content folder. To sort the top level navigation, edit the `forcedNavOrder` option in the `gatsby-config.js` file.

The logo will link to the `index.mdx` page. To make the `index.mdx` page visible in the left navigation, set `ignoreIndex` to `false`.

Sub navigation items are created by making a folder with the same name as the top level `.mdx` file. The sub navigation is ordered alphabetically.

### Right Sidebar

The contents of the right sidebar will be automatically populated by any heading tags `h1, h2, h3, etc.` that are added to the page. They will anchor link to the corresponding heading.

## Theme Colors

Document is also built with [Theme UI](https://theme-ui.com). The icon in the top right of the site will cycle through the various color modes that are available.

To edit or add colors modes, edit the file at `src/gatsby-plugin-theme-ui/colors.js`. To learn more about color modes, check out the [Theme UI docs](https://theme-ui.com/color-modes).

The contents of the MDX files are also styled with Theme UI and can be edited at `src/gatsby-plugin-theme-ui/index.js`. The styles for the heading tags are found at `src/gatsby-plugin-theme-ui/headingsjs`. Learn more about [styling MDX](https://theme-ui.com/styling-mdx) from the Theme UI docs.

## Syntax Colors

Document uses [@theme-ui/prism](https://theme-ui.com/prism) for syntax highlighting. Different presets can be used by editing the file at `src/gatsby-plugin-theme-ui/index.js`. The desired preset must be included at the top of the file and spread into the `pre` styles

```javascript
import dracula from '@theme-ui/prism/presets/dracula.json';

styles: {
  pre: {
    ...dracula,
  }
}
```

The code blocks will not change color based on the color modes. For a complete list of all available prism presets, check out the Theme UI [syntax themes](https://theme-ui.com/prism#syntax-themes).

## Social Media Icons

The social media icons in the header can be edited in the `gatsby-config.js` file, under social. Currently, you can only add Twitter and Github links.

## SEO, Site Image, and Manifest Icons

Document uses React Helmet to add meta tags to the website's `<head>` tag. When adding/editing a file in the content folder, be sure to include the Title and Description in the frontmatter. These are automatically used to generate the title and description meta tags for the page.

```md
---
title: "Document by Code Bushi"
description: "This is the meta description"
---
```

There is also an image at `src/site-image.jpg` which is used for the Open Graph image tag, as well as the Twitter card. Another image at `src/site-icon.png` is used by the [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/) to generate a Favicon and other device icons.
