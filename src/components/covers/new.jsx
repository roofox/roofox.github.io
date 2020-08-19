/**
 * @url: https://fossheim.io/writing/posts/react-text-splitting-animations/
 */
import React from "react"
import styled, { keyframes } from "styled-components"

const Header = styled.h1`
  font-size: 5em;
  text-align: center;
  font-weight: 600;
  color: #353239;
`

const SpanAnimation = keyframes`
0% {
    bottom: -0.2em;
    opacity: 1;
}

50% {
    bottom: 0.2em;
}

100% {
    bottom: 0;
    opacity: 1;
}
`

const SpanContainer = styled.span``;

const Letter = styled.span`
  color: tomato;
  position: relative;
  bottom: -1em;
  opacity: 0;
  animation: ${SpanAnimation} 0.75s forwards;

  &:nth-child(2n) {
    color: lightseagreen;
  }
  &:nth-child(3n) {
    color: orange;
  }
  &:nth-child(4n) {
    color: dodgerblue;
  }
  &:nth-child(5n) {
    color: blueviolet;
  }
`

const SplitText = (props) => (
  <SpanContainer aria-label={props.copy} role={props.role}>
    {props.copy.split("").map((char, index) => {
      let style = { "animationDelay": 0.5 + index / 10 + "s" }
      return (
        <Letter aria-hidden="true" key={index} style={style}>
          {char}
        </Letter>
      )
    })}
  </SpanContainer>
)

const CoverNew = ({ text }) => (
  <Header>
    <SplitText copy={text} role="heading" />
  </Header>
)

export default CoverNew
