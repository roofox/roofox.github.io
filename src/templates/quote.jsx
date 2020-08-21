import React from "react"
import MainLayout from "../components/layouts/MainLayout"
// import DateTime from "../components/DateTime"
// import SiteMetadata from "../components/SiteMetadata"
import styled from "styled-components"
import { mix, darken, lighten } from "polished";
import media from '../utils/media-query'
/*
content: "’’";
pointer-events: none;
font-size: 8em;
letter-spacing: -16px;
font-style: normal;
font-weight: bold;
color: rgb(123,154,185);
*/

const Post = styled.article`
  flex: 1 0 100%;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: ${(p) => p.theme.contentMaxWidth};

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
  /* background-color: blue; */
`

const Quote = styled.div`
  color: #595959;
  /* background-color: white; */
  position: relative;
  font-family: "Hoefler Text", Georgia, Garamond, Times, serif;
  letter-spacing: 0.1em;
  text-align: left;
  line-height: 110%;
  font-size: 1.7em;
  margin-left: 10rem;

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
  }
`

const color = "#242423";
const amount = 0.3;

const Cite = styled.cite`
  color: #595959;
  font-family: ${(p) => p.theme.bodyFontFamily};
  font-style: italic;
  font-weight: lighter;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 110%;
  font-size: 3rem;
  line-height: 1.25;
  text-shadow: 10px 13px 5px #020202;
`

const QuoteTemplate = ({ pageContext: { page } }) => (
  <MainLayout>
    <Post>
      <Container>
        <Quote>
          <Cite data-text={page.title}>{page.title}</Cite>
        </Quote>
      </Container>
    </Post>
  </MainLayout>
)

export default QuoteTemplate
