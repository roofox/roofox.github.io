import { css } from "styled-components"
import media from "../utils/media-query"

export default css`
  code {
    font-family: ${(p) => p.theme.codeFontFamily};
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0 0.8rem;
    border-radius: 0.3em;
    white-space: normal;
    background: #2d2d2d;
    color: ${(p) => p.theme.primaryColor2};

    @media (max-width: 700px) {
      font-size: 1.4375rem !important;
    }

    @media (max-width: 700px) {
      font-size: 1rem !important;
    }
  }

  h1 > code[class*="language-"] {
    font-size: 2.5rem;

    @media (max-width: 700px) {
      font-size: 2rem !important;
    }
  }

  .line-numbers-rows {
    border-right-color: ${(p) => p.theme.bodyColor};

    span::before {
      color: #fff;
    }
  }

  .gatsby-highlight {
    background: #2d2d2d;
    margin: 0.5em 0;
    overflow: auto;
    position: relative;

    &:before {
      content: attr(data-language);
      border-bottom-left-radius: 0.25rem;
      font-family: ${(p) => p.theme.codeFontFamily};
      color: #fff;
      font-size: 0.75rem;
      letter-spacing: 0.075em;
      line-height: 1;
      position: absolute;
      right: 0px;
      text-align: right;
      text-transform: uppercase;
      top: 0px;
      z-index: 5;
      background: ${(p) => p.theme.primaryColor1};
      padding: 0.25rem 0.5rem;
    }

    > pre[class*="language-"] {
      color: #ccc;
      background: transparent;
      font-family: ${(p) => p.theme.codeFontFamily};
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      overflow: initial;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;

      /* Line Numbers */

      &.line-numbers {
        padding-left: 2.8em;
        overflow: auto;

        position: relative;
        counter-reset: linenumber > code {
          position: relative;
          white-space: inherit;
        }

        .line-numbers-rows {
          position: absolute;
          border-right: 0.125rem solid ${(p) => p.theme.primaryColor1};
          top: 0;
          pointer-events: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          > span {
            display: block;
            counter-increment: linenumber;

            &:before {
              content: counter(linenumber);
              color: #fff;
              display: block;
              padding-right: 0.8em;
              text-align: right;
            }
          }
        }
      }

      @media (max-width: 700px) {
        font-size: 0.8rem !important;
      }
    }
  }

  /* Prism tokens */

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #0077b6;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #ef476f;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`;
