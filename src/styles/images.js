import { css } from "styled-components"
import media from "../utils/media-query"

export default css`
  .gatsby-resp-image-figure {
    margin: 0;
  }

  .gatsby-resp-image-wrapper {
    > a {
      img {
      }
    }

    & + em {
      text-align: center;
      display: block;
      font-size: 1rem;
    }

    & + .gatsby-resp-image-figcaption p {
      text-align: center;
      display: block;
      font-size: 1rem;
      font-style: italic;
      margin-top: 10px;

      ${media.lessThan("md")`
        margin-top: 0;
      `}
    }
  }
`
