/**
 * @url: https://codepen.io/nathantaylor/pen/wrBQWd
 */
import React from "react"
import styled, { keyframes, css } from "styled-components"
import media from '../../utils/media-query'

const metric = "s"
const time = 1;
const d = "0.08em";
const n = 3;
const e = "cubic-bezier(0.860, 0.000, 0.070, 1.000)"
const primaryColor = "#CE0058"
const secondaryColor = "#000"
const shadowColor = "lightblue"
const backgroundColor = "#fff"

const effect = keyframes`
0% {
  transform: translate3d(0,0,0);
  text-shadow: 0em 0em 0 ${shadowColor};
  color: ${primaryColor};
}

30% {
  transform: translate3d(0,0,0);
  text-shadow: 0em 0em 0 ${shadowColor};
  color: ${secondaryColor};
}

70% {
  transform: translate3d(${d},-${d},0);
  text-shadow: -${d} ${d} ${shadowColor};
  color: ${primaryColor};
}

100% {
  transform: translate3d(${d},-${d},0);
  text-shadow: -${d} ${d} ${shadowColor};
  color: ${secondaryColor};
}
`

const Container = styled.div`
  background-color: ${backgroundColor};
  user-select: none;
  overflow: hidden;
`

const Paragraph = styled.span`
  font-family: Futura, sans-serif;
  font-weight: 900;
  font-size: 6rem;
  padding: 6rem;
  text-align: center;
  display: inline-block;

  ${media.lessThan("xs")`
    font-size: 1rem;
    padding: 1rem;
  `}

  ${media.between("xs", "sm")`
    font-size: 2rem;
    padding: 2rem;
  `}

  ${media.between("sm", "md")`
    font-size: 3rem;
    padding: 3rem;
  `}

  ${media.between("md", "lg")`
    font-size: 4rem;
    padding: 4rem;
  `}

  ${media.between("lg", "xl")`
    font-size: 5rem;
    padding: 5rem;
  `}
`

const Letter = styled.span`
  position: relative;
  animation: ${effect} ${time}s infinite alternate ${e};
  text-transform: uppercase;

  ${[...Array(n).keys()].map(
    (i) =>
      css`
        &:nth-last-child(${i + 1}n) {
          animation-delay: -${(time * (i + 1)) / n / 2}${metric};
        }
      `
  )}
`

const Covercc9a = ({ text }) => (
  <Container>
    <Paragraph>
      {text
        .split("")
        .map((letter, index) => (<Letter key={`${letter}-${index}`}>{letter}</Letter>))
        }
    </Paragraph>
  </Container>
)

export default Covercc9a
