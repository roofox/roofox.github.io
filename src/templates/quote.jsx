import React from "react"
import MainLayout from "../components/layouts/MainLayout"
import SiteMetadata from "../components/SiteMetadata"
import styled from "styled-components"
import media from '../utils/media-query'
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
  }

  ${media.lessThan("md")`
    max-width: 100%;
    p, ul {
      margin: 1rem 0;
    }
  `}

  ${media.lessThan("sm")`
    max-width: 100%;
    p, ul {
      margin: 0.5rem 0;
    }
  `}
`

const Quote = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "Playfair Display", Georgia, Garamond, Times, serif;
  letter-spacing: 0.1em;
  text-align: center;
  font-style: italic;
  font-size: 4rem;
  margin-top: 8rem;
  text-shadow: 10px 13px 5px #020202;

  ${media.lessThan("md")`
    font-size: 2.5rem;
  `}

  &:before {
    content: "’’";
    position: absolute;
    width: 100%;
    top: -8rem;
    margin: 0 auto;
    pointer-events: none;
    font-size: 10rem;
    letter-spacing: normal;
    font-style: normal;
    font-weight: bold;
    color: rgb(123, 154, 185);
    text-shadow: 10px 13px 5px #020202;
  }
`

const Cite = styled.cite`
  color: #e8e6e3;
  display: block;
  font-family: ${(p) => p.theme.fonts.families.body};
  font-style: italic;
  font-weight: lighter;
  margin: 2rem 1rem;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 110%;
  font-size: 1rem;
  line-height: 1.25;
  text-shadow: 10px 13px 5px #020202;

  &:before {
    content: "— ";
  }

  &:after {
    content: " —";
  }

  ${media.lessThan("sm")`
    font-size: 1rem;
  `}
`

const Square = styled.span`
  display: block;
  text-align: center!important;
  font-size: 1rem!important;
  margin: 1rem 0;
`;

const QuoteTemplate = ({ pageContext }) => (
  <MainLayout>
    <SiteMetadata pathname={pageContext.page.path} />
    <Post>
      <Quote>{pageContext.page.quote_text}</Quote>
      <Cite>{pageContext.page.quote_author}</Cite>
      <Square>◼</Square>
      <Square>◼</Square>
      <Square>◼</Square>
      <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
    </Post>
  </MainLayout>
)

export default QuoteTemplate
