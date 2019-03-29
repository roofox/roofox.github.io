import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @keyframes noise {
    0% {
      background-position: -60px -66px;
    }
    10% {
      background-position: -23px -99px;
    }
    20% {
      background-position: 46px 9px;
    }
    30% {
      background-position: 91px 0px;
    }
    40% {
      background-position: 41px 63px;
    }
    50% {
      background-position: -87px -18px;
    }
    60% {
      background-position: -8px -94px;
    }
    70% {
      background-position: 94px 97px;
    }
    80% {
      background-position: -19px -74px;
    }
    90% {
      background-position: 13px 47px;
    }
  }

  @keyframes bar {
    0% {
      height: 434px;
      top: 27%;
      opacity: 0.57;
    }
    10% {
      height: 251px;
      top: 17%;
      opacity: 0.06;
    }
    20% {
      height: 57px;
      top: 97%;
      opacity: 0.23;
    }
    30% {
      height: 243px;
      top: 68%;
      opacity: 0.28;
    }
    40% {
      height: 101px;
      top: 23%;
      opacity: 0.68;
    }
    50% {
      height: 486px;
      top: 68%;
      opacity: 0.64;
    }
    60% {
      height: 232px;
      top: 82%;
      opacity: 0.59;
    }
    70% {
      height: 596px;
      top: 10%;
      opacity: 0.1;
    }
    80% {
      height: 201px;
      top: 60%;
      opacity: 0.66;
    }
    90% {
      height: 72px;
      top: 92%;
      opacity: 0.45;
    }
  }

  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font: 2.3rem "Michroma", helvetica, sans-serif;
  letter-spacing: 0.6em;
  background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=000000ff&noise=ffffff&density=61&opacity=20);
  text-shadow: 2px 0 1px #f6050a, -2px 0 1px #1cf2f2;
  animation: noise 5s infinite;

  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    max-height: 300px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    background: url(http://api.thumbr.it/whitenoise-361x370.png?background=000000ff&noise=ffffff&density=61&opacity=40);
    -moz-animation: bar 0.5s infinite;
    -webkit-animation: bar 0.5s infinite;
    animation: bar 0.5s infinite;
  }
`

const Span = styled.span`
  @keyframes glitch {
    0% {
      transform: skew(81deg);
    }
    5% {
      transform: skew(11deg);
    }
    10% {
      transform: skew(-33deg);
    }
    15% {
      transform: skew(-57deg);
    }
    20% {
      transform: skew(-88deg);
    }
    25% {
      transform: skew(10deg);
    }
    30% {
      transform: skew(45deg);
    }
    35% {
      transform: skew(-86deg);
    }
    40% {
      transform: skew(-19deg);
    }
    45% {
      transform: skew(73deg);
    }
    50% {
      transform: skew(22deg);
    }
    55% {
      transform: skew(-82deg);
    }
    60% {
      transform: skew(20deg);
    }
    65% {
      transform: skew(-1deg);
    }
    70% {
      transform: skew(11deg);
    }
    75% {
      transform: skew(70deg);
    }
    80% {
      transform: skew(-48deg);
    }
    85% {
      transform: skew(87deg);
    }
    90% {
      transform: skew(73deg);
    }
    95% {
      transform: skew(20deg);
    }
  }

  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  animation: glitch 3s infinite alternate;
`

const Cover7cfc = ({ text }) => (
  <Container>
    <Span>{text}</Span>
  </Container>
)

export default Cover7cfc

