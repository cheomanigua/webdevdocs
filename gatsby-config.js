module.exports = {
  siteMetadata: {
    title: `GNU/Linux Reference Documentation`,
    name: `Code Bushi`,
    siteUrl: `https://linuxdocs.netlify.com`,
    description: `Reference documentation for Linux distros, web development, React, Gatsby and several technologies`,
    social: [
      {
        name: `github`,
        url: `https://github.com/codebushi/gatsby-theme-document`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/HuntaroSan`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: [
      "/introduction",
      "/css",
      "/javascript",
      "/nodejs",
      "/react",
      "/gatsby",
      "/hugo",
      "/git",
      "/vim",
      "/openssh",
      "/seo",
      ],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
