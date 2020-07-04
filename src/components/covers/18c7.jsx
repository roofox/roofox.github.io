import React from 'react';
import styled from 'styled-components';

const clipHeight = '50px';
const leftOffset = 29;

const Container = styled.div`
    background-color: #5138BE;
    color: #FFFFFF;
    display: flex;
`;

const Words = styled.ul`
    margin: 0 auto;
    padding: 80px 0;
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    font-size: 68px;
    font-weight: 900;
    letter-spacing: -2px;
    text-transform: uppercase;
    // Sort out nasty text fuzz
    transform: translate3d(0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -webkit-font-kerning: normal;
    -webkit-text-size-adjust: 100%;

    &:hover {
        p {
            transform: translate3d(0, -${p => p.clipHeight}, 0);
        }
    }
`;

const Line = styled.li`
    height: ${({ clipHeight }) => clipHeight};
    overflow: hidden;
    position: relative;

    // Change the perspective of each alternating line
    &:nth-child(odd) {
        transform: skew(60deg, -30deg) scaleY(.66667);
    }
    &:nth-child(even) {
        transform: skew(0deg, -30deg) scaleY(1.33333);
    }

    // Loop over the total lines and apply a left offset
    // @for $i from 1 through $total-lines+1 {
    //     &:nth-child(#{$i}) {
    //         left: $left-offset * $i;
    //     }
    // }
    ${
        ({ lines, leftOffset }) => [...Array(lines).keys()].map(index => (
            `
            &:nth-child(${index + 1}}) {
                left: ${leftOffset * (index + 1)}px;
            }
            `
        ))
    }
`;

const Word = styled.p`
    height: ${p => p.clipHeight};
    line-height: $line-height;
    padding: 0 10px;
    transition: all .4s ease-in-out;
    transform: translate3d(0, 0, 0);
    vertical-align: top;
    white-space: nowrap;
    line-height: 1rem!important;
`;

const Cover18c7 = ({ text }) => (
    <Container>
        <Words clipHeight={clipHeight}>
            {
                text.split(' ').map((word, index, { length }) => {
                    return (
                        <Line
                            key={`${word}-${index}`}
                            clipHeight={clipHeight}
                            leftOffset={leftOffset}
                            lines={length}
                        >
                            <Word clipHeight={clipHeight}>
                                {
                                    `${index === 0 ? ' ' : `${word}`}(${index})`
                                }
                            </Word>
                            <Word clipHeight={clipHeight}>
                                {
                                    `${(index + 1) === length ? ' ' : `${word}`}(${index})`
                                }
                            </Word>
                        </Line>
                    )
                })
            }
        </Words>
    </Container>
);

export default Cover18c7

