import React from "react"
import { Link, graphql } from "gatsby"
import { Col, Row } from 'react-styled-flexboxgrid'
import MainLayout from '../components/layouts/MainLayout';

class BlogPostTemplate extends React.Component {
  render() {
    const {
      data: {
        markdownRemark: post
      },
      pageContext: {
        previous,
        next
      }
    } = this.props;

    return (
      <MainLayout>
        <Row>
          <Col>
            <h2 style={{ fontFamily: 'Noto Serif JP'}}>{post.frontmatter.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{post.frontmatter.date}</p>
          </Col>
        </Row>
        <Row>
          <Col
            lg
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Row>
        <Row>
          <Col>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </Col>
          <Col>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </Col>
        </Row>
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
