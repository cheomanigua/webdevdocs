---
title: "Themes"
description: "Gatsby Themes tutorial"
---


There are two ways to create Gatsby sites:
- Using a Starter: Standalone application where the theme and style is isolated and not upgradable.
- Using a Theme: Bare basic Starter where the theme and style comes from a plugin and hence is upgradablevia npm or yarn.

In this page we are going to explain how to customize a Theme component.

#### Customizing a component

For this example, we are going to customize the `SideNav` component from `gatsby-theme-documentation` Theme on the Starter project.

**Theme source file**: `root/node_modules/gatsby-theme-documentation/src/components/sidenav.js`

**Starter destination route**: `root/src/gatsby-theme-documentation/components/`

In order to shadow (override) the **Theme** file `sidenav.js` we must create/copy the file `sidenav.js` into **Starter destination route** and edit it.

Probably we will need to create the `/components/` directory in **Starter destination route**.

🔗 [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/)
