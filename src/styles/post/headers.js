import { css } from "styled-components"
import media from "../../utils/media-query"

export default css`
  h1,
  h2 {
    font-family: ${(p) => p.theme.fonts.families.header};
    color: ${(p) => p.theme.colors.body};
    font-size: 3rem;
    line-height: 1.15;
    margin: 0;
    padding: 2rem 0;

    > a {
      text-decoration: none;
      font-family: ${(p) => p.theme.fonts.families.header};
    }

    ${media.lessThan("md")`
      padding: 1rem 0;
    `}

    ${media.lessThan("xs")`
      padding: 1rem 0;
      font-size: 2rem;
    `}
  }
`
