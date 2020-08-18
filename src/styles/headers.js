export default (p) => `
h1, h2 {
  font-family: ${p.theme.headerFontFamily};
  color: ${p.theme.bodyColor};
  font-size: 3rem;
  line-height:  1.15; // 3rem!important;
  margin: 0;
  padding: 2rem 0;

  & a {
    text-decoration: none;
  }

  @media (max-width: 700px) {
    font-size: 2rem;
    padding: 1rem 0;
  }
}
`
