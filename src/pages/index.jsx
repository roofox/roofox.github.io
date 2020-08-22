import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import styled from 'styled-components'
import MainLayout from "../components/layouts/MainLayout"
import SiteMetadata from "../components/SiteMetadata"
import DateTime from '../components/DateTime';
import Date from '../components/Date';

const Post = styled.section`
  width: 100%;
  max-width: ${(p) => p.theme.contentMaxWidth};
  display: flex;
  /* flex: 1 0 100%; */
  margin: 1rem 0 2rem;
  font-size: 1.4375rem;
  /* background-color: transparent; */
  background-color: green;

  @media only screen and (max-width: 29.999rem) {
    > a {
      font-size: 1rem;
    }
  }
`

const Column = styled.div`
  font-family: "Amaranth", sans-serif;
  margin-right: 40px;
  text-align: center;
`

const PostTitle = styled(Link)`
  font-size: 2rem;
`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <MainLayout>
    <SiteMetadata pathname="/" />
    <article>
      <h1>Últimas publicaciones</h1>
      {posts.map((post) => (
        <Post key={post.node.frontmatter.path}>
          <Column>
            <Date format="MMMM d, yyyy" align="left">
              {post.node.frontmatter.date}
            </Date>
          </Column>
          <Column stlye={{ alignSelf: "center" }}>
            <PostTitle to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </PostTitle>
          </Column>
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
      filter: { frontmatter: { draft: { ne: true } } }
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
