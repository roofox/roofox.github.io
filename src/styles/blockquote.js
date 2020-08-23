import { css } from "styled-components"
import media from "../utils/media-query"

export default css`
  blockquote:not([data-name="title"]) {
  font-family: "${(p) => p.theme.quoteFontFamily}";
    border-left: 1rem solid ${(p) => p.theme.primaryColor1};
    font-style: italic;
    margin: 0;
    padding: 0 0 0 1rem;
    position: relative;

    > p {
      font-size: 1.25rem;
    }

    ${media.lessThan("md")`
      padding-right: 0.5rem;
      border-left-width: 0.5rem;

      > p {
        font-size: 1.1rem;
        line-height: 1.5;
      }
    `}
  }
`
