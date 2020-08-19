import { css } from "styled-components"

export default css`
  html {
    font-size: 16px;

    @media (max-width: 700px) {
      font-size: 15px;
    }
  }

  body {
    font-family: ${(p) => p.theme.bodyFontFamily};
    background-color: ${(p) => p.theme.bodyBackgroundColor};
    color: ${(p) => p.theme.bodyColor};
  }

  ::-webkit-scrollbar {
    background-color: ${(p) => p.theme.bodyBackgroundColor};
    /* color: #aba499; */
  }
  ::-webkit-scrollbar-thumb {
    /* background-color: #454a4d; */
    background-color: ${(p) => p.theme.primaryColor1};
  }

  ::selection {
    background-color: #ffd166 !important;
    color: #e8e6e3 !important;
  }
  ::-moz-selection {
    background-color: #ffd166 !important;
    color: #e8e6e3 !important;
  }
`;
