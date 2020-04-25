module.exports = {
  siteMetadata: {
    title: `GNU/Linux Reference Documentation`,
    name: `WebDevDocs`,
    siteUrl: `https://linuxdocs.netlify.com`,
    description: `Reference documentation for web development, React, Gatsby and several technologies`,
    social: [
      {
        name: `github`,
        url: `https://github.com/cheomanigua/`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/Luminisense`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: [
      "/introduction",
      "/css",
      "/javascript",
      "/nodejs",
      "/express",
      "/react",
      "/gatsby",
      "/hugo",
      "/git",
      "/vim",
      "/openssh",
      "/seo",
"/devops",
      ],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
