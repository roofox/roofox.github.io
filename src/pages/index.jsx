import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import styled from 'styled-components'
import MainLayout from "../components/layouts/MainLayout"
import SiteMetadata from "../components/SiteMetadata"
import DateTime from '../components/DateTime';

const Post = styled.section`
  flex: 1 0 100%;
  margin: 1rem 0 2rem;
  font-size: 1.4375rem;
  background-color: transparent;

  @media only screen and (max-width: 29.999rem) {
    > a {
      font-size: 1rem;
    }
  }
`

const PostTitle = styled(Link)``

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
    <MainLayout>
      <SiteMetadata pathname="/" />
      <article>
        <h1>Últimas publicaciones</h1>
        {posts.map(post => (
          <Post key={post.node.frontmatter.path}>
            <DateTime format="MMMM d, yyyy" align="left">{post.node.frontmatter.date}</DateTime>
            <PostTitle to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </PostTitle>
          </Post>
        ))}
      </article>
    </MainLayout>
  )

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___layout] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            categories
            description
            path
          }
        }
      }
    }
  }
`

export default IndexPage
