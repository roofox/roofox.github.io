const IS_DEV = process.env.NODE_ENV !== 'production';

const config = {
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
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: "Merriweather",
    //         variants: ["400", "300", "900"],
    //       },
    //       {
    //         family: "Kanit",
    //         variants: ["700"],
    //       },
    //       {
    //         family: "Space Mono",
    //         variants: ["400", "700", "400", "700"],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              showCaptions: true,
              markdownCaptions: true,
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
              },
            },
          },
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
            },
          },
          "gatsby-remark-numbered-footnotes",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1E88E5`,
        theme_color: `#1E88E5`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: IS_DEV,
        fileName: IS_DEV,
        pure: !IS_DEV,
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-98315944-2",
        head: false,
      },
    },
  ],
}

module.exports = config