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
                description
                path
                layout
                cover
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
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node
      // const next = index === 0 ? null : posts[index - 1].node

      if (post.node.frontmatter.layout === "post") {
        createPage({
          path: post.node.fields.slug,
          slug: post.node.fields.slug,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
          },
        })
      } else if (post.node.frontmatter.layout === "quote") {
        createPage({
          path: post.node.fields.slug,
          slug: post.node.fields.slug,
          component: quote,
          context: {
            page: post.node.frontmatter,
            html: post.node.html
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
