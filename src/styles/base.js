export default (p) => `
html {
  font-size: 16px;

  @media (max-width: 700px) {
    font-size: 15px;
  }
}

body {
  font-family: ${p.theme.bodyFontFamily};
  background-color: ${p.theme.bodyBackgroundColor};
  color: ${p.theme.bodyColor};
}
`
