/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.jsx`)
  const quote = path.resolve(`./src/templates/quote.jsx`)

  return graphql(
    `
      {
        allMarkdownRemark(
          # filter: { frontmatter: { layout: { eq: "post" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              html
              frontmatter {
                title
                date
                updated_date
                description
                path
                layout
                cover
                # quote props
                quote_text
                quote_author
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const edges = result.data.allMarkdownRemark.edges

    edges.forEach((edge, index) => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node
      // const next = index === 0 ? null : posts[index - 1].node

      console.log(JSON.stringify(edge.node.frontmatter, null, 2))

      if (edge.node.frontmatter.layout === "post") {
        createPage({
          path: edge.node.fields.slug,
          slug: edge.node.fields.slug,
          component: blogPost,
          context: {
            slug: edge.node.fields.slug,
          },
        })
      } else if (edge.node.frontmatter.layout === "quote") {
        createPage({
          path: edge.node.fields.slug,
          slug: edge.node.fields.slug,
          component: quote,
          context: {
            page: edge.node.frontmatter,
            html: edge.node.html,
          },
        })
      }
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = node.frontmatter.path

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
