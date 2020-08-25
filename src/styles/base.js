import { css } from "styled-components"
import media from "../utils/media-query"

export default css`
  html {
    font-size: ${(p) => p.theme.fonts.sizes.base};
    background-color: ${(p) => p.theme.colors.background};

    ${media.lessThan("md")`
      font-size: ${(p) => p.theme.fonts.sizes.medium};
    `}

    ${media.lessThan("sm")`
      font-size: ${(p) => p.theme.fonts.sizes.small};
    `}
  }

  body {
    font-family: ${(p) => p.theme.fonts.families.body};
    color: ${(p) => p.theme.colors.body};
  }

  ::-webkit-scrollbar {
    background-color: ${(p) => p.theme.colors.background};
    /* color: #aba499; */
  }
  ::-webkit-scrollbar-thumb {
    /* background-color: #454a4d; */
    background-color: ${(p) => p.theme.colors.primary};
  }

  ::selection {
    background-color: ${(p) => p.theme.colors.selection.background} !important;
    color: ${(p) => p.theme.colors.selection.text} !important;
  }
  ::-moz-selection {
    background-color: ${(p) => p.theme.colors.selection.background} !important;
    color: ${(p) => p.theme.colors.selection.text} !important;
  }
`
