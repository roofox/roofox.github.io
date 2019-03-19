import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import MainLayout from '../components/layouts/MainLayout';
import DateTime from '../components/DateTime'

const Post = styled.article`
  flex: 1 0 100%;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: ${p => p.theme.contentMaxWidth};

  @media only screen and (max-width: 61.999rem) {
    max-width: 100%;
  }

  @media only screen and (max-width: 29.999rem) {
    max-width: 100%;

    p {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
`

const PostMeta = styled.section``

const PostTitle = styled.h1`
  font-family: "Noto Serif JP";
`

const PostContent = styled.section``

class BlogPostTemplate extends React.Component {
  render() {
    const {
      data: {
        markdownRemark: post
      }
    } = this.props;

    return (
      <MainLayout>
        <Post>
          <PostMeta>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <DateTime format="MMMM D, YYYY">
              {post.frontmatter.date}
            </DateTime>
          </PostMeta>
          <PostContent
            /* eslint react/no-danger: 0 */
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Post>
      </MainLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
