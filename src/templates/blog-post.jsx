import React from "react"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import { Waypoint } from "react-waypoint"
import styled from 'styled-components'
import MainLayout from '../components/layouts/MainLayout';
import DateTime from '../components/DateTime'
import SiteMetadata from "../components/SiteMetadata"
import media from '../utils/media-query';
import styles from "../styles"

const Post = styled.article`
  flex: 1 0 100%;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: ${(p) => p.theme.breakpoints.lg};

  ${() => styles.post.map((x) => x)}

  p,
  ul {
    font-size: 1.4375rem;
    line-height: 2.5875rem;
    text-align: justify;

    ${media.lessThan("sm")`
      margin: 0.5rem 0;
      font-size: 1.3rem;
      line-height: 1.8;
    `}

    ${media.lessThan("xs")`
      margin: 0.5rem 0;
      font-size: 1rem;
      line-height: 1.8;
    `}
  }

  p {
    em {
      font-weight: 100;
    }
  }
`

const PostMeta = styled.section`
  position: relative;
`

const Hr = styled.hr`
  border: 0;
  margin-top: 1rem;
  width: 100%;
  border-color: ${p => p.theme.primaryColor1};
  border-style: solid;
  border-top-width: 0.25rem;

  @media only screen and (max-width: 29.999rem) {
    width: 100%;
  }
`

const PostContent = styled.section``

const PostComments = styled.section`
  width: 100%;
`;

const LoadingComments = styled.div`
  &::before {
    content: "Cargando comentarios...";
  }
`

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayComments: false,
    };
  }

  render() {
    const {
      data: {
        markdownRemark: post,
        site: {
          siteMetadata: { disqusShortname },
        },
      },
    } = this.props

    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    }

    const Cover = post.frontmatter.cover
      ? require(`../components/covers/${post.frontmatter.cover}`).default
      : ({ text }) => <h1>{text}</h1>

    return (
      <MainLayout>
        <SiteMetadata pathname={post.frontmatter.path} />
        <Post>
          <PostMeta>
            <Cover text={post.frontmatter.title} />
            <Hr />
            <DateTime format="MMMM d, yyyy">{post.frontmatter.date}</DateTime>
          </PostMeta>
          <PostContent
            /* eslint react/no-danger: 0 */
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <PostComments>
            <Waypoint
              onEnter={() => {
                this.setState({ displayComments: true })
              }}
            >
              {this.state.displayComments ? (
                <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              ) : (
                <LoadingComments />
              )}
            </Waypoint>
          </PostComments>
        </Post>
      </MainLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        disqusShortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        path,
        cover
      }
    }
  }
`
