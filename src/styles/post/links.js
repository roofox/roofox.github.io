import { Base64 } from "js-base64"
import { css } from "styled-components"

export default css`
a {
  /* text-decoration: none; */
  /* color: ${(p) => p.theme.bodyColor}; */
}

a:not(.gatsby-resp-image-link):not(.anchor):not(.footnote-ref):not(.footnote-backref):not(.index-link) {
  background: linear-gradient(to bottom, ${(p) => p.theme.primaryColor1} 0%, ${(p) => p.theme.primaryColor1} 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 3px 3px;
  color: ${(p) => p.theme.bodyColor};
  text-decoration: none;
  padding-bottom: 0.5000rem;

  &:hover {
    background-image: url("data: image/svg+xml;base64,${(p) =>Base64.encode(`<svg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'><style type='text/css'>.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path fill='none' stroke='${p.theme.primaryColor1}' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/></svg>`)}");
    background-position: 0 100%;
    background-size: auto 6px;
    background-repeat: repeat-x;
    text-decoration: none;
    z-index: 99;
  }
}
`
