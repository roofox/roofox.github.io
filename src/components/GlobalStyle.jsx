import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kanit:700');
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP');

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Noto Serif JP";
  }

  h2 {
    margin: 0;
    padding: 0;
    font-family: Kanit;
  }
`
export default GlobalStyle
