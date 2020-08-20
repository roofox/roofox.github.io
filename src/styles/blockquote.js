import { css } from "styled-components"
import media from "../utils/media-query"

export default css`
  blockquote:not([data-name="title"]) {
    border-left: 1rem solid ${(p) => p.theme.primaryColor1};
    font-style: italic;
    margin: 0;
    padding: 0 0 0 2rem;
    position: relative;
    font-size: 0.8rem;

    ${media.lessThan("md")`
      padding: 0 0 0 1rem;
      border-left-width: 0.5rem;
    `}
  }
`
