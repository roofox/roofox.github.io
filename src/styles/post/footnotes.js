import { css } from 'styled-components';

export default css`
  .footnotes {
    font-size: 1rem;

    &:before {
      content: "Referencias";
      font-family: Kanit;
      color: #e8e6e3;
      font-size: 3rem;
      line-height: 1.15;
      margin: 0;
      padding: 2rem 0;
    }

    p {
      display: inline;
      font-size: 1rem !important;
    }

    a.footnote-backref {
      text-decoration: none;
      color: ${(p) => p.theme.colors.body};
      padding: 0.3125rem;

      &:hover {
        background-color: ${(x) => x.theme.colors.secondary};
      }
    }
  }

  sup {
    top: -0.5em;

    .footnote-ref {
      color: ${(x) => x.theme.colors.secondary};
      text-decoration: none;

      &:before {
        content: "[";
      }
      &:after {
        content: "]";
      }
    }
  }
`
