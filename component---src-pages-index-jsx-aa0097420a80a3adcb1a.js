(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",function(){return g});var r=t(0),a=t.n(r),o=t(11),i=t.n(o),l=t(191),m=t(218),c=t(215),d=t(204),s=l.c.section.withConfig({displayName:"pages__Post",componentId:"sc-1p0quar-0"})(["flex:1 0 100%;margin:1rem 0;font-size:1.4375rem;background-color:white;@media only screen and (max-width:29.999rem){> a{font-size:1rem;}}"]),p=Object(l.c)(i.a).withConfig({displayName:"pages__PostTitle",componentId:"sc-1p0quar-1"})([""]),g="1257290968";n.default=function(e){var n=e.data.allMarkdownRemark.edges;return a.a.createElement(m.a,null,a.a.createElement(c.a,{pathname:"/"}),a.a.createElement("article",null,a.a.createElement("h1",null,"Últimas publicaciones"),n.map(function(e){return a.a.createElement(s,{key:e.node.frontmatter.path},a.a.createElement(d.a,{format:"MMMM D, YYYY"},e.node.frontmatter.date),a.a.createElement(p,{to:e.node.frontmatter.path},e.node.frontmatter.title))})))}},203:function(e){e.exports={data:{site:{siteMetadata:{title:"ROOFOX.dev"}}}}},204:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(3),i=t.n(o),l=t(225),m=t(191),c=t(262),d=t.n(c),s=m.c.time.withConfig({displayName:"DateTime__Time",componentId:"sc-1yp8wzw-0"})(["font-size:1rem;width:100%;display:block;text-align:center;padding:0.25rem 0;"]),p=function(e){var n=e.children,t=e.format;return a.a.createElement(s,null,Object(l.format)(n,t,{locale:d.a}))};p.propTypes={children:i.a.string.isRequired,format:i.a.string.isRequired},n.a=p},215:function(e,n,t){"use strict";var r=t(216),a=t(0),o=t.n(a),i=t(263),l=t(89);n.a=function(e){var n=e.pathname;return o.a.createElement(l.StaticQuery,{query:"2812037760",render:function(e){var t=e.site.siteMetadata,r=t.siteUrl,a=t.title,l=t.twitter;return o.a.createElement(i.Helmet,{defaultTitle:a,titleTemplate:"%s | "+a},o.a.createElement("html",{lang:"en"}),o.a.createElement("link",{rel:"canonical",href:""+r+n}),o.a.createElement("meta",{name:"docsearch:version",content:"2.0"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover,user-scalable=0"}),o.a.createElement("meta",{name:"description",content:"roofox.dev"}),o.a.createElement("meta",{property:"og:url",content:r}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:locale",content:"en"}),o.a.createElement("meta",{property:"og:site_name",content:a}),o.a.createElement("meta",{property:"og:image:width",content:"512"}),o.a.createElement("meta",{property:"og:image:height",content:"512"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:site",content:l}))},data:r})}},216:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://roofox.dev",title:"ROOFOX.dev",twitter:"http://t.co/roofoxdev"}}}}},218:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(191),i=t(203),l=t(89),m=o.c.header.withConfig({displayName:"Heading__Header",componentId:"mzeed8-0"})(["display:flex;justify-content:center;"]),c=o.c.div.withConfig({displayName:"Heading__HeaderContainer",componentId:"mzeed8-1"})(["max-width:76rem;flex:1;"]),d=o.c.h1.withConfig({displayName:"Heading__Title",componentId:"mzeed8-2"})(["text-align:center;"]),s=Object(o.c)(l.Link).withConfig({displayName:"Heading__Link",componentId:"mzeed8-3"})(["background-image:none !important;font-size:3rem;"]),p=function(e){var n=e.site.siteMetadata.title;return a.a.createElement(m,null,a.a.createElement(c,null,a.a.createElement(d,null,a.a.createElement(s,{to:"/"},n))))},g=function(){return a.a.createElement(l.StaticQuery,{query:"2968191912",render:p,data:i})},u=o.c.footer.withConfig({displayName:"Footer__Container",componentId:"xbtfn2-0"})(["width:100%;height:4rem;padding:0 ",";overflow:hidden;margin-top:0rem;display:flex;flex-direction:column;align-items:center;"],function(e){return e.theme.sidePadding}),f=o.c.div.withConfig({displayName:"Footer__Content",componentId:"xbtfn2-1"})(["flex:1 0 100%;justify-content:flex-start;padding:0;margin:0;width:100%;max-width:",";display:flex;justify-content:center;align-items:center;}"],function(e){return e.theme.contentMaxWidth}),h=function(e){var n=e.children;return a.a.createElement(u,null,a.a.createElement(f,null,n))},y={mediaWidth:"62rem",primaryColor1:"#3f51b5"};y.primaryColor1="#1E88E5",y.primaryColor2="#1a237e",y.primaryColor2="#1565C0",y.greyColor1="#f5f5f5",y.greyColor2="#eeeeee",y.greyColor3="#9e9e9e",y.headerFontFamily="Kanit",y.bodyFontFamily="Merriweather",y.logoFontFamily="Yellowtail",y.navbarWidth="16rem",y.sidePadding="2rem",y.contentMaxWidth="calc(75rem - "+y.navbarWidth+")",y.navbarBackgroundColor=y.primaryColor1,y.smallViewport="34rem",y.tabletViewport="48rem",y.mediumViewport="62rem",y.largeViewport="75rem";var x=y,w=t(221);function b(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  @import url('https://fonts.googleapis.com/css?family=Kanit:700');\n  @import url('https://fonts.googleapis.com/css?family=Merriweather');\n  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP');\n\n  /*\n  header,\n  article,\n  main,\n  div {\n    outline: 1px dashed grey;\n  }\n  //*/\n\n  /*\n  base: 16px\n\n  0.0625rem   \t 1px\n  0.1250rem    \t 2px\n  0.1875rem   \t 3px\n  0.2500rem   \t 4px\n  0.3125rem   \t 5px\n  0.3750rem    \t 6px\n  0.4375rem   \t 7px\n  0.5000rem    \t 8px\n  0.5625rem   \t 9px\n  0.6250rem    \t10px\n  0.6875rem   \t11px\n  0.7500rem   \t12px\n  0.8125rem   \t13px\n  0.8750rem    \t14px\n  0.9375rem   \t15px\n  1.0000rem    \t16px\n  */\n\n  html {\n    font-size: 16px;\n\n    @media (max-width: 700px) {\n      font-size: 15px;\n    }\n  }\n  \n  body {\n    font-family: ",";\n  }\n\n  h1, h2 {\n    font-family: ",";\n    font-size: 3rem;\n    line-height: 2.5rem!important;\n    margin: 0;\n    padding: 2rem 0;\n\n    & a {\n      text-decoration: none;\n    }\n\n    @media (max-width: 700px) {\n      font-size: 2rem;\n      padding: 1rem 0;\n    }\n  }\n\n  a:not(.gatsby-resp-image-link) {\n    background: linear-gradient(to bottom, "," 0%, ",' 100%);\n    background-position: 0 100%;\n    background-repeat: repeat-x;\n    background-size: 3px 3px;\n    color: #000;\n    text-decoration: none;\n    padding-bottom: 0.5000rem;\n\n    &:hover {\n      background-image: url("data: image/svg+xml;base64,','");\n      background-position: 0 100%;\n      background-size: auto 6px;\n      background-repeat: repeat-x;\n      text-decoration: none;\n    }\n  }\n\n  img {\n    border: 0.2rem solid ',";\n  }\n\n  .gatsby-highlight  {\n    position: relative;\n\n    &::before {\n      content: attr(data-language);\n      background: ",';\n      border-bottom-left-radius: 0.25rem;\n      color: #FFF;\n      font-size: 0.75rem;\n      font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n      letter-spacing: 0.075em;\n      line-height: 1;\n      padding: 0.25rem 0.5rem;\n      position: absolute;\n      right: 0;\n      text-align: right;\n      text-transform: uppercase;\n      top: 0;\n      z-index: 5;\n    }\n  }\n\n  /* pre[class*="language-"]:before, pre[class*="language-"]:after {} */\n\n  pre[class*="language-"] {\n    :before {\n      content: none;\n    }\n\n    :after {\n      content: none;\n    }\n\n    &.line-numbers.line-numbers {\n      code {\n        padding-left: 1rem;\n        border-left-color: ',";\n        border-left-width: 2rem;\n      }\n      .line-numbers-rows {\n        width: 2rem!important;\n        border-right-color: ",';\n\n        span::before {\n          color: #FFF;\n          text-align: center;\n          width: 100%;\n        }\n      }\n    }\n  }\n\n  /* pre[class*="language-"] > code {\n    border-left-width: 1rem;\n  } */\n\n  /*\n  :not(pre) > code[class*="language-"] {\n    color: ',';\n  }\n\n  .gatsby-highlight pre[class*="language-"].line-numbers {\n    padding-left: 5.8em;\n  }\n\n  .gatsby-highlight pre[class*="language-"]>code {\n    padding-left: 1rem;\n    border-left-width: 1rem;\n    border-left-color: ',';\n\n    @media (max-width: 700px) {\n      font-size: 0.75rem;\n    }\n  }\n\n  .gatsby-highlight {\n    border-radius: 0.3em;\n    margin: 0;\n    padding: 0em;\n    overflow: auto;\n  }\n\n  .gatsby-highlight pre[class*="language-"].line-numbers {\n    padding: 0;\n    padding-left: 2.8em;\n    overflow: initial;\n  }\n\n  .gatsby-highlight-code-line {\n    background-color: ',';\n  }\n  */\n\n  blockquote:not([data-name="title"]) {\n    border-left: 1rem solid ',";\n    font-style: italic;\n    margin: 0;\n    padding: 0 0 0 2rem;\n    position: relative;\n\n    @media (max-width: 700px) {\n      padding: 0 0 0 1rem;\n    }\n  }\n"]);return b=function(){return e},e}var v=Object(o.b)(b(),function(e){return e.theme.bodyFontFamily},function(e){return e.theme.headerFontFamily},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},w.Base64.encode("<svg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'><style type='text/css'>.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path fill='none' stroke='#1E88E5' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/></svg>"),function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1}),E=o.c.main.withConfig({displayName:"MainLayout__Main",componentId:"sc-1qmnxwi-0"})(["padding:0 ",";overflow:hidden;margin-top:0rem;display:flex;flex-direction:column;align-items:center;"],function(e){return e.theme.sidePadding});n.a=function(e){var n=e.children;return a.a.createElement(o.a,{theme:x},a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null),a.a.createElement(g,null),a.a.createElement(E,null,n,a.a.createElement(h,null,a.a.createElement("p",null,"Blog escrito por Sergio Flores")))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-aa0097420a80a3adcb1a.js.map