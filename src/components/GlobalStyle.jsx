import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kanit:700');
  @import url('https://fonts.googleapis.com/css?family=Merriweather');
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP');

  /*
  header,
  article,
  main,
  div {
    outline: 1px dashed grey;
  }
  //*/

  /*
  base: 16px

  0.0625rem   	 1px
  0.1250rem    	 2px
  0.1875rem   	 3px
  0.2500rem   	 4px
  0.3125rem   	 5px
  0.3750rem    	 6px
  0.4375rem   	 7px
  0.5000rem    	 8px
  0.5625rem   	 9px
  0.6250rem    	10px
  0.6875rem   	11px
  0.7500rem   	12px
  0.8125rem   	13px
  0.8750rem    	14px
  0.9375rem   	15px
  1.0000rem    	16px
  */

  html {
    font-size: 16px;
  }
  
  body {
    font-family: ${p => p.theme.bodyFontFamily};
    font-size: 1.1rem;
  }

  h1, h2 {
    font-family: ${p => p.theme.headerFontFamily};
    font-size: 3rem;
    line-height: 2.5rem!important;

    & a {
      text-decoration: none;
    }
  }

  p, ul {
    font-size: 1.4375rem;
    line-height: 2.5875rem;
    text-align: justify;
  }

  a:not(.gatsby-resp-image-link) {
    background: linear-gradient(to bottom, ${p => p.theme.primaryColor1} 0%, ${p => p.theme.primaryColor1} 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 3px 3px;
    color: #000;
    text-decoration: none;
    padding-bottom: 0.5000rem;

    &:hover {
      background-image: url("data: image/svg+xml;base64,${btoa(`<svg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'><style type='text/css'>.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path fill='none' stroke='#1E88E5' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/></svg>`)}");
      background-position: 0 100%;
      background-size: auto 6px;
      background-repeat: repeat-x;
      text-decoration: none;
    }
    /*
    color: ${p => p.theme.primaryColor1};
    text-decoration: none;    
    border-bottom: 0.1rem solid ${p => p.theme.primaryColor1};
    padding-bottom: 0px;
    font-weight: 700;

    &:not(.gatsby-resp-image-link):hover {
      border-bottom-color: ${p => p.theme.primaryColor2};
      border-bottom-style: dashed;
      color: ${p => p.theme.primaryColor2};
    }

    &:visited {
      color: ${p => p.theme.primaryColor1};
    }
    */
  }

  img {
    border: 0.2rem solid ${p => p.theme.primaryColor1};
  }

  /**
  * If you already use line highlighting
  */

  /* Adjust the position of the line numbers */
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  /**
  * If you only want to use line numbering
  */

  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

  .gatsby-highlight-code-line {
    background-color: ${p => p.theme.primaryColor1};
  }

  @media (max-width: 700px) {
    html {
      font-size: 15px;
    }
  }

  blockquote:not([data-name="title"]) {
    border-left: 1rem solid ${p => p.theme.primaryColor1};
    font-style: italic;
    margin: 0;
    padding: 0 0 0 2rem;
    position: relative;
  }
`
export default GlobalStyle
