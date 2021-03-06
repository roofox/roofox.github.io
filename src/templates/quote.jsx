import React from "react"
import MainLayout from "../components/layouts/MainLayout"
import SiteMetadata from "../components/SiteMetadata"
import styled from "styled-components"
import media from '../utils/media-query'

const Post = styled.article`
  flex: 1 0 100%;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: ${(p) => p.theme.breakpoints.lg};

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

const Container = styled.div`
  blockquote {
    color: #595959;
    position: relative;
    font-family: "Hoefler Text", Georgia, Garamond, Times, serif;
    letter-spacing: 0.1em;
    text-align: left;
    line-height: 110%;
    font-size: 1.7em;
    margin-left: 10rem;
    border: 0;

    ${media.lessThan("md")`
    margin-left: 6rem;
  `}

    ${media.lessThan("sm")`
    margin-left: 0rem;
    margin-top: 3rem;
  `}

  &:before {
      content: "’’";
      position: absolute;
      top: 5rem;
      left: -9rem;
      pointer-events: none;
      font-size: 8em;
      letter-spacing: -16px;
      font-style: normal;
      font-weight: bold;
      color: rgb(123, 154, 185);

      ${media.lessThan("md")`
      font-size: 8em;
      left: -7rem;
    `}

      ${media.lessThan("sm")`
      content: "";
    `}
    }
  }
`

const Quote = styled.div`
  color: #595959;
  position: relative;
  font-family: "Hoefler Text", Georgia, Garamond, Times, serif;
  letter-spacing: 0.1em;
  text-align: left;
  line-height: 110%;
  font-size: 1.7em;
  margin-left: 10rem;

  ${media.lessThan("md")`
    margin-left: 6rem;
  `}

  ${media.lessThan("sm")`
    margin-left: 0rem;
    margin-top: 3rem;
  `}

  &:before {
    content: "’’";
    position: absolute;
    top: 5rem;
    left: -9rem;
    pointer-events: none;
    font-size: 8em;
    letter-spacing: -16px;
    font-style: normal;
    font-weight: bold;
    color: rgb(123, 154, 185);

    ${media.lessThan("md")`
      font-size: 8em;
      left: -7rem;
    `}

    ${media.lessThan("sm")`
      content: "";
    `}
  }
`

// const Cite = styled.cite`
//   color: #e8e6e3;
//   font-family: ${(p) => p.theme.fonts.families.body};
//   font-style: italic;
//   font-weight: lighter;
//   letter-spacing: 0.1em;
//   text-align: center;
//   line-height: 110%;
//   font-size: 3rem;
//   line-height: 1.25;
//   text-shadow: 10px 13px 5px #020202;

//   ${media.lessThan("md")`
//     font-size: 2.5rem;
//   `}

//   ${media.lessThan("sm")`
//     font-size: 1rem;
//   `}
// `

const QuoteTemplate = ({ pageContext: { page, html } }) => (
  <MainLayout>
    <SiteMetadata pathname={page.path} />
    <Post>
      <Container />
      <Quote dangerouslySetInnerHTML={{ __html: html }} />
        {/* <Cite data-text={page.title}>{page.title}</Cite> */}
      {/* </Quote> */}
      {/* </Container> */}
    </Post>
    {/* <div
      /* eslint react/no-danger: 0 * /
      dangerouslySetInnerHTML={{ __html: html }}
    /> */}
  </MainLayout>
)

export default QuoteTemplate
