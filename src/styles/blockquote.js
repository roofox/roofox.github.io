export default (p) => `
blockquote:not([data-name="title"]) {
  border-left: 1rem solid ${p.theme.primaryColor1};
  font-style: italic;
  margin: 0;
  padding: 0 0 0 2rem;
  position: relative;

  @media (max-width: 700px) {
    padding: 0 0 0 1rem;
  }
}
`
