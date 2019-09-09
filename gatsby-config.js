module.exports = {
  siteMetadata: {
    title: `ROOFOX.dev`,
    description: `Blog de ROOFOX.dev`,
    author: `@roofoxdex`,
    siteUrl: "https://roofox.dev",
    twitter: "http://t.co/roofoxdev",
    disqusShortname: "roofox-dev",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        strategy: "img",
        plugins: [
          "gatsby-remark-draw",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: true,
              aliases: {
                shell: "bash",
                hosts: "bash",
              }
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: true,
      },
    },
    "gatsby-plugin-catch-links",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}