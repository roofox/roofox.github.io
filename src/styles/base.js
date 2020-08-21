import { css } from "styled-components"
import media from "../utils/media-query"

export default css`
  html {
    font-size: 16px;
    background-color: ${(p) => p.theme.bodyBackgroundColor};

    ${media.lessThan("md")`
      font-size: 14px;
    `}

    ${media.lessThan("sm")`
      font-size: 10px;
    `}
  }

  body {
    font-family: ${(p) => p.theme.bodyFontFamily};
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
`
