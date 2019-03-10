import React from "react"
import { StaticQuery, graphql } from "gatsby"

const MainLayout = ({
  site: {
    siteMetadata: {
      title
    }
  }
}) => (
  <h1>{title}</h1>
)

const query = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={MainLayout}
  />
)
