---
title: "Typography"
description: "Tutorial on how to configure and use Typography"
---

### Installing the Typography plugin

`$ npm install gatsby-plugin-typography react-typography typography --save`

### Enable Typography plugin
* Edit `gatsby-config.js` and add the following lines between `plugins: [ ... ]`:

```js
{
  resolve: `gatsby-plugin-typography`,
  options: {
    pathToConfigModule: `src/utils/typography`,
  }
}
```

### Create Typography configuration file
* Create and edit the file `src/utils/typography.js`

```js
import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Avenir Next","Helvetica Neue","Segoe UI","Helvetica","Arial","sans-serif",],
  bodyFontFamily: ["Georgia", "serif"],
})

export default typography
```

### Installing Typography themes

You can check all **Typography** themes <a href="https://kyleamathews.github.io/typography.js">here</a>.

`$ npm install typography-theme-funston --save`

### Create Typography configuration file for themes
* Create and edit the file `src/utils/typography.js`

```js
import Typography from "typography";
import funstonTheme from 'typography-theme-funston'
const typography = new Typography(
  funstonTheme
);

export default typography;
```
