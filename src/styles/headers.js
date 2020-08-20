import { css } from "styled-components"

export default css`
  h1,
  h2 {
    font-family: ${(p) => p.theme.headerFontFamily};
    color: ${(p) => p.theme.bodyColor};
    font-size: 3rem;
    line-height: 1.15;
    margin: 0;
    padding: 2rem 0;

    & a {
      text-decoration: none;
    }

    @media (max-width: 700px) {
      font-size: 2rem;
      padding: 1rem 0;
      line-height: 1.4;
    }
  }
`
