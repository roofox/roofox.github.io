import React from 'react';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  50% {     
    -webkit-clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 70% 100%); 
    -moz-clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 70% 100%); 
    clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 70% 100%); 
  }
`;

const Text = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:700');

  position: relative;
  color: #CE0058;
  padding: 20px 50px;
  font-family: "Space Mono";
  font-size: 5rem;
  text-align: left;

  @media only screen and (max-width: 61.999rem) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 29.999rem) {
    font-size: 1.5rem;
  }

  &:before {
    background: #CE0058;
    color: white;
    content: '${(p) => p.children}';
    overflow: hidden;
    position: absolute;  
    top: 0;  
    left: 0;
    text-align: center;
    padding: 20px 50px;
    -webkit-clip-path: polygon(0% 0% , 30% 0%, 30% 100%, 0% 100%);  
    clip-path: polygon(0% 0% , 30% 0%, 30% 100%, 0% 100%);
    animation: ${slide} 4s 1s linear infinite;
  }
`

const Cover7cfc = ({ text }) => (
  <Text>
    {text.toUpperCase()}
  </Text>
)

export default Cover7cfc

