import { css } from "styled-components"
import media from "../utils/media-query"

export default css`
  html {
    background-color: ${(p) => p.theme.colors.backgroundPrimary};
    font-size: ${(p) => p.theme.fonts.sizes.base};

    ${media.lessThan("md")`
      font-size: ${(p) => p.theme.fonts.sizes.medium};
    `}

    ${media.lessThan("sm")`
      font-size: ${(p) => p.theme.fonts.sizes.small};
    `}
  }

  body {
    color: ${(p) => p.theme.colors.body};
    font-family: ${(p) => p.theme.fonts.families.body};
  }

  ::-webkit-scrollbar {
    background-color: ${(p) => p.theme.colors.backgroundPrimary};
  }
  ::-webkit-scrollbar-thumb {
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
