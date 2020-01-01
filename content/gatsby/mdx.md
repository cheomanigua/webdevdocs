---
title: "MDX"
description: "Set up gatsby-mdx in order to use .mdx markdown files"
---
import { Message } from '@theme-ui/components';


## Markdown with gatsby-plugin-mdx 

### Installation 

`$ sudo npm install --save gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react`

**Note** that `gatsby-plugin-mdx` requires `gatsby-source-filesystem` to be present and configured to process local markdown files in order to generate the resulting Gatsby nodes.

### Configuration

Edit `gatsby-config.js` file and add:


```js
{
  resolve: 'gatsby-plugin-mdx',
  options: {
    extensions: ['.mdx', '.md'],
    defaultLayouts: {
      default: require.resolve('./src/components/layout.js'),
    },
  },
},
```

You must add the relative path for your `layout.js file`. In this example is `./src/components/layout.js`.

From this point on, you can create **MDX** files with either `.mdx` or `.md` extensions.

Further information at <a href="https://www.npmjs.com/package/gatsby-plugin-mdx" target="_blank">gatsby-plugin-mdx - npm</a>


### Markdown tips

* When you have to add a text like this: `\<text\>`, you must escape the characters `\<` and `\>`. For instance, you must type like this: `\\\<text\\\>`. Otherwise, the server will crash and throw an error.
* Lists needs a space between the asterisk and the content. Let's add an example where the dot is a space for visibility sake:

`*.This is an example`

* Nested lists must have two spaces in order to work. Let's add an example where the dots are spaces for visibility sake:


```
*.Parent
..*.Children
....*.Grandchildren
```


### MDX Syntax

|  Tag 	|  Syntax 	|
|---	|---	|
| h1  	|  # 	|
| h2  	|  ## 	|
| h3  	|  ### 	|
| h4  	|  #### 	|
| h5  	|  ##### 	|
| h6  	|  ###### 	|
| thematicBreak  	|  *** 	|
| blockquote  	| >  	|
| ul  	| -  	|
| ol  	| 1.  	|
| code  	| \`\`\`text\`\`\`  	|
| em  	| \_text\_  	|
| strong  	| \*\*text\*\*  	|
| delete  	| \~\~text\~\~  	|
| inlineCode  	| \`text\`  	|
| hr  	| ---  	|
| a  	| \[MDX\](https://mdxjs.com)  	|
| image  	| 	!\[alt\](https://mdx-logo.now.sh)  	|

<Message variant='info'>
  📄 To check all MDX syntax, visit <a href="https://mdxjs.com/getting-started#table-of-components" target="_blank">mdx</a> documentation.
</Message>