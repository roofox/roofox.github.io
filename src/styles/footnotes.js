export default (p) => `
.footnotes  {
  // text-decoration: underline;
  // background: none;

  font-size: 1rem;

  p {
    display: inline;
    font-size: 1rem!important;
  }

  a.footnote-backref {
    text-decoration: none;
    color: ${p.theme.bodyColor};
    // background-color: ${p.theme.primaryColor2};
    padding: 0.3125rem;

    &:hover{
      background-color: ${p.theme.primaryColor2};
    }
  }
}
`
