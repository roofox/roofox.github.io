import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kanit:700');
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP');

  /*
  div {
    outline: 1px dashed grey;
  }
  */

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
    font-size: 20px;
  }
  
  body {
    font-family: "Noto Serif JP";
    font-size: 1.1rem;
  }

  h1, h2 {
    /* margin: 0;
    padding: 0; */
    font-family: Kanit;
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
`
export default GlobalStyle
