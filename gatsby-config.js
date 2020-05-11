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
      "/devops",
      "/gatsby",
      "/hugo",
      "/git",
      "/vim",
      "/visualestudio",
      "/openssh",
      "/seo",
      ],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
