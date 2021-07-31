import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

// import gatsbyIcon from "../assets/gatsby-icon.png"

const SiteMetadata = ({ pathname, title }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title
            twitter
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { siteUrl, title: siteTitle, twitter },
      },
    }) => (
      <Helmet
        defaultTitle={siteTitle}
        title={title}
        titleTemplate={`%s | ${siteTitle}`}
      >
        <html lang="es" />
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
        <meta name="docsearch:version" content="2.0" />
        <meta name="title" content={title}></meta>
        <meta name="description" content={title} />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content={title} />
        {/*<meta property="og:image" content={`${siteUrl}${gatsbyIcon}`} />*/}
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={twitter} />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@700&family=Merriweather:ital,wght@0,400;0,900;1,300&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    )}
  />
)

export default SiteMetadata
