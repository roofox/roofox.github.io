import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import styled from 'styled-components'
import { Base64 } from "js-base64"
import MainLayout from "../components/layouts/MainLayout"
import SiteMetadata from "../components/SiteMetadata"
import DateTime from '../components/DateTime';
import media from "../utils/media-query"

const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${(p) => p.theme.contentMaxWidth};
`

const Title = styled.h1`
  font-family: ${(p) => p.theme.headerFontFamily};
  font-size: 3rem;

  ${media.lessThan("md")`
    font-size: 2rem;
    text-align: center;
  `}
`

const Post = styled(Link)`
  width: 100%;
  max-width: calc(${(p) => p.theme.contentMaxWidth} - 18rem);
  display: flex;
  flex: 1 0 100%;
  margin-bottom: 2rem;
  font-size: 1.4375rem;
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: 7px 7px 10px #020202;
  color: #e8e6e3;
  text-decoration: none;
  transition: all 500ms;

  &:hover {
    box-shadow: 7px 7px 20px #020202;
    background-color: transparent;
  }

  ${media.lessThan("sm")`
    margin-bottom: 1rem;
    font-size: 1rem;
  `}
`

const PostMeta = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 0;
  padding: 0 1rem;
  width: 100%;
`

const PostTitle = styled.div`
  /* background-color: red; */
`

const Icon = styled.div`
  background-color: rgb(255, 255, 255, 0.2);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 80px;
  height: 80px;

  ${media.lessThan("sm")`
    width: 40px;
    height: 40px;
  `}

  ${media.lessThan("sm")`
    width: 60px;
    height: 60px;
  `}
`

const QuoteIcon = styled(Icon)`
  background-image: url("data: image/svg+xml;base64,${(p) =>Base64.encode(`<svg viewBox="0 0 1941 1941" xmlns="http://www.w3.org/2000/svg"><path fill='${p.theme.primaryColor2}' d="M906.667 448v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136V448q0-80 56-136t136-56h384q80 0 136 56t56 136zm896 0v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136V448q0-80 56-136t136-56h384q80 0 136 56t56 136z"/></svg>`)}");
`

const PostIcon = styled(Icon)`
  background-image: url("data: image/svg+xml;base64,${(p) =>Base64.encode(`<svg viewBox="0 0 2091 2091" xmlns="http://www.w3.org/2000/svg"><path fill='${p.theme.primaryColor1}' stroke-width='2' d="M1037.333 1440l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5V672q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"/></svg>`)}");
  background-position-x: 5px;

  ${media.lessThan("sm")`
    background-position-x: 2px;
  `}
`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <MainLayout>
    <SiteMetadata pathname="/" />
    <Content>
      <Title>Últimas publicaciones</Title>
      {posts.map((post) => (
        <Post
          key={post.node.frontmatter.path}
          className="index-link"
          to={post.node.frontmatter.path}
        >
          {post.node.frontmatter.layout === "post" ? (
            <PostIcon />
          ) : (
            <QuoteIcon />
          )}
          <PostMeta>
            <PostTitle>{post.node.frontmatter.title}</PostTitle>
            <DateTime format="MMMM d, yyyy" align="left">
              {post.node.frontmatter.date}
            </DateTime>
          </PostMeta>
        </Post>
      ))}
    </Content>
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
            layout
          }
        }
      }
    }
  }
`

export default IndexPage
