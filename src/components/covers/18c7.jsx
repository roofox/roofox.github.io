import React from "react"
import styled, { keyframes, css } from "styled-components"
import { adjustHue } from "polished"

const metric = "s";
const time = "1";
const d = "0.08em"
const n = 3;
const e = "cubic-bezier(0.860, 0.000, 0.070, 1.000)";
const front = "black"
const back = "lightblue"

const effect = keyframes`
0%{
  transform: translate3d(0,0,0);
  text-shadow: 0em 0em 0 ${back};
  color: ${front};
}
30%{
  transform: translate3d(0,0,0);
  text-shadow: 0em 0em 0 ${back};
  color: ${front};
}
70%{
  transform: translate3d(${d},-${d},0);
  text-shadow: -${d} ${d} ${back};
  color: ${front};
}
100%{
  transform: translate3d(${d},-${d},0);
  text-shadow: -${d} ${d} ${back};
  color: ${front};
}
`;

const Container = styled.div`
  background: white;
`;

const Paragraph = styled.h1`
  font-family: Futura, sans-serif;
  font-weight: 900;
  font-size: 80px;
  padding: 80px;
`;

const Letter = styled.span`
  position: relative;
  display: inline-block;
  animation: ${effect} ${time}s infinite alternate ${e};

  ${[...Array(n).keys()].map((i) => 
    css`
      &:nth-last-child(${i + 1}n) {
        animation-delay: -${(time * i) / n / 2}${metric};
      }
    `
  )}
  /* @for $i from 1 through $n {
    &:nth-last-child(#{$i}n) {
      animation-delay: -$t * $i/$n/2;
    }
  } */
`

const Covercc9a = ({ text }) => (
  <Container>
    <Paragraph>
      <Letter>U</Letter>
      <Letter>N</Letter>
      <Letter>A</Letter>
      <Letter>B</Letter>
      <Letter>R</Letter>
      <Letter>E</Letter>
      <Letter>V</Letter>
      <Letter>E</Letter>
      <br />
      <Letter>H</Letter>
      <Letter>I</Letter>
      <Letter>S</Letter>
      <Letter>T</Letter>
      <Letter>O</Letter>
      <Letter>R</Letter>
      <Letter>I</Letter>
      <Letter>A</Letter>
      <br />
      <Letter>D</Letter>
      <Letter>E</Letter>
      <Letter>D</Letter>
      <Letter>E</Letter>
      <Letter>B</Letter>
      <Letter>I</Letter>
      <Letter>A</Letter>
      <Letter>N</Letter>
    </Paragraph>
  </Container>
)

export default Covercc9a
