import { css } from "styled-components"

export default css`
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

    & + .gatsby-resp-image-figcaption {
      text-align: center;
      display: block;
      font-size: 1rem;
      font-style: italic;
      margin-top: 10px;
    }
  }
`;
