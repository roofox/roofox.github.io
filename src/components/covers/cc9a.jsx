import React from 'react';
import styled from 'styled-components';
import { adjustHue } from 'polished';

const backgroundColor = '#eee';
const shadowColor = '#1ce';

const shadow = (color, depth) => {
  let val = `0 0 ${color}`;

  for (let i=0; i <= depth; i++) {
    const hue = adjustHue(i * 0.1, color);
    val = `${val}, -${i}px ${i * 0.5}px ${hue}`
  }

  const extra1 = `, 0 -1px ${color}`;
  const extra2 = `, 1px 0 ${color}`;
  const extra3 = `, 1px 1px ${color}`;

  return `${val}${extra1}${extra2}${extra3}`
};

const Container = styled.section`
  width: 100%;
  max-width: ${p => p.theme.contentMaxWidth};
  background: #fff;
  margin: 0;
  padding-bottom: 130px;
  display: flex;
  align-content: ffcenter;
  justify-content: center;
  overflow: hidden;
`

const Blockquote = styled.blockquote`
  /*@import url("https://fonts.googleapis.com/css?family=Montserrat");*/

  font: italic 900 60px/1 Montserrat, sans-serif;
  color: ${backgroundColor};
  margin: auto;
  text-shadow: ${shadow(shadowColor, 1000)};

  @media only screen and (max-width: 61.999rem) {
    font-size: 45px;
  }

  @media only screen and (max-width: 29.999rem) {
    font-size: 40px;
  }

  span {
    opacity: 1;
    position: relative;
    display: block;

    ${new Array(7).map(
      (_, i) => `
        &:nth-child(${i}) {
          transform: translate3d(20px * ${i}, 0, 0);
          transition-delay: .1s * (7 - ${i});
        }
      `
    )}
  }
`

const Covercc9a = ({ text }) => (
  <Container>
    <Blockquote data-name="title">
      {
        text.split(" ")
          .reduce((acc, item, index) => {
            if (item.length < 3) {
              acc[index - 1] = `${acc[index - 1]} ${item}`;
              return acc;
            }
            return acc.concat(item);
          }, [])
          .map((word, index) => (
            <span
              key={`${word}-${index}`}
              style={{ transform: `translate3d(${20 * index}px, 0, 0)` }}
            >
              {word}
            </span>
          ))
      }
    </Blockquote>
  </Container>
)

export default Covercc9a;

