(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",function(){return w});var r=t(9),a=t.n(r),o=t(0),i=t.n(o),l=t(239),m=t(261),c=t(157),d=t(187),s=t(176),p=c.c.article.withConfig({displayName:"blog-post__Post",componentId:"sc-197d81a-0"})(["flex:1 0 100%;justify-content:flex-start;padding:0;margin:0;width:100%;max-width:",";p,ul{font-size:1.4375rem;line-height:2.5875rem;text-align:justify;}@media only screen and (max-width:61.999rem){max-width:100%;}@media only screen and (max-width:29.999rem){max-width:100%;p,ul{font-size:1rem;line-height:2rem;}}"],function(e){return e.theme.contentMaxWidth}),u=c.c.section.withConfig({displayName:"blog-post__PostMeta",componentId:"sc-197d81a-1"})(["position:relative;"]),f=c.c.hr.withConfig({displayName:"blog-post__Hr",componentId:"sc-197d81a-2"})(["border:0;margin-top:1rem;width:40%;border-color:",";border-style:solid;border-top-width:0.25rem;@media only screen and (max-width:29.999rem){width:100%;}"],function(e){return e.theme.primaryColor1}),g=c.c.section.withConfig({displayName:"blog-post__PostContent",componentId:"sc-197d81a-3"})([""]),h=c.c.section.withConfig({displayName:"blog-post__PostComments",componentId:"sc-197d81a-4"})(["width:100%;"]),y=c.c.div.withConfig({displayName:"blog-post__LoadingComments",componentId:"sc-197d81a-5"})(['&::before{content:"Cargando comentarios...";}']),x=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={displayComments:!1},t}return a()(n,e),n.prototype.render=function(){var e=this,n=this.props,r=n.data,a=r.markdownRemark,o=r.site.siteMetadata.disqusShortname,c=n.pathContext.cover,x={identifier:a.id,title:a.frontmatter.title};console.log(x,o);var w=t(382)("./"+c).default;return i.a.createElement(d.a,null,i.a.createElement(p,null,i.a.createElement(u,null,i.a.createElement(w,{text:a.frontmatter.title}),i.a.createElement(f,null),i.a.createElement(s.a,{format:"MMMM D, YYYY"},a.frontmatter.date)),i.a.createElement(g,{dangerouslySetInnerHTML:{__html:a.html}}),i.a.createElement(h,null,i.a.createElement(m.a,{onEnter:function(){e.setState({displayComments:!0})}},this.state.displayComments?i.a.createElement(l.DiscussionEmbed,{shortname:o,config:x}):i.a.createElement(y,null)))))},n}(i.a.Component);n.default=x;var w="2794571263"},174:function(e){e.exports={data:{site:{siteMetadata:{title:"ROOFOX.dev"}}}}},175:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://roofox.dev",title:"ROOFOX.dev",twitter:"http://t.co/roofoxdev"}}}}},176:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(1),i=t.n(o),l=t(199),m=t(157),c=t(236),d=t.n(c),s=m.c.time.withConfig({displayName:"DateTime__Time",componentId:"sc-1yp8wzw-0"})(["font-size:1rem;width:100%;display:block;text-align:center;padding:0.25rem 0;"]),p=function(e){var n=e.children,t=e.format;return a.a.createElement(s,null,Object(l.format)(n,t,{locale:d.a}))};p.propTypes={children:i.a.string.isRequired,format:i.a.string.isRequired},n.a=p},187:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(157),i=t(174),l=t(56),m=o.c.header.withConfig({displayName:"Heading__Header",componentId:"mzeed8-0"})(["display:flex;justify-content:center;"]),c=o.c.div.withConfig({displayName:"Heading__HeaderContainer",componentId:"mzeed8-1"})(["max-width:76rem;flex:1;"]),d=o.c.h1.withConfig({displayName:"Heading__Title",componentId:"mzeed8-2"})(["text-align:center;"]),s=Object(o.c)(l.Link).withConfig({displayName:"Heading__Link",componentId:"mzeed8-3"})(["background-image:none !important;font-size:3rem;"]),p=function(e){var n=e.site.siteMetadata.title;return a.a.createElement(m,null,a.a.createElement(c,null,a.a.createElement(d,null,a.a.createElement(s,{to:"/"},n))))},u=function(){return a.a.createElement(l.StaticQuery,{query:"2968191912",render:p,data:i})},f=t(175),g=t(196),h=function(e){var n=e.pathname;return a.a.createElement(l.StaticQuery,{query:"2812037760",render:function(e){var t=e.site.siteMetadata,r=t.siteUrl,o=t.title,i=t.twitter;return a.a.createElement(g.Helmet,{defaultTitle:o,titleTemplate:"%s | "+o},a.a.createElement("html",{lang:"en"}),a.a.createElement("link",{rel:"canonical",href:""+r+n}),a.a.createElement("meta",{name:"docsearch:version",content:"2.0"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover,user-scalable=0"}),a.a.createElement("meta",{property:"og:url",content:r}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:locale",content:"en"}),a.a.createElement("meta",{property:"og:site_name",content:o}),a.a.createElement("meta",{property:"og:image:width",content:"512"}),a.a.createElement("meta",{property:"og:image:height",content:"512"}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:site",content:i}))},data:f})},y=o.c.footer.withConfig({displayName:"Footer__Container",componentId:"xbtfn2-0"})(["width:100%;height:4rem;padding:0 ",";overflow:hidden;margin-top:0rem;display:flex;flex-direction:column;align-items:center;"],function(e){return e.theme.sidePadding}),x=o.c.div.withConfig({displayName:"Footer__Content",componentId:"xbtfn2-1"})(["flex:1 0 100%;justify-content:flex-start;padding:0;margin:0;width:100%;max-width:",";display:flex;justify-content:center;align-items:center;}"],function(e){return e.theme.contentMaxWidth}),w=function(e){var n=e.children;return a.a.createElement(y,null,a.a.createElement(x,null,n))},b={mediaWidth:"62rem",primaryColor1:"#3f51b5"};b.primaryColor1="#1E88E5",b.primaryColor2="#1a237e",b.primaryColor2="#1565C0",b.greyColor1="#f5f5f5",b.greyColor2="#eeeeee",b.greyColor3="#9e9e9e",b.headerFontFamily="Kanit",b.bodyFontFamily="Merriweather",b.logoFontFamily="Yellowtail",b.navbarWidth="16rem",b.sidePadding="2rem",b.contentMaxWidth="calc(75rem - "+b.navbarWidth+")",b.navbarBackgroundColor=b.primaryColor1,b.smallViewport="34rem",b.tabletViewport="48rem",b.mediumViewport="62rem",b.largeViewport="75rem";var v=b,C=t(198),E=t.n(C);function k(){var e=E()(["\n  @import url('https://fonts.googleapis.com/css?family=Kanit:700');\n  @import url('https://fonts.googleapis.com/css?family=Merriweather');\n  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP');\n\n  /*\n  header,\n  article,\n  main,\n  div {\n    outline: 1px dashed grey;\n  }\n  //*/\n\n  /*\n  base: 16px\n\n  0.0625rem   \t 1px\n  0.1250rem    \t 2px\n  0.1875rem   \t 3px\n  0.2500rem   \t 4px\n  0.3125rem   \t 5px\n  0.3750rem    \t 6px\n  0.4375rem   \t 7px\n  0.5000rem    \t 8px\n  0.5625rem   \t 9px\n  0.6250rem    \t10px\n  0.6875rem   \t11px\n  0.7500rem   \t12px\n  0.8125rem   \t13px\n  0.8750rem    \t14px\n  0.9375rem   \t15px\n  1.0000rem    \t16px\n  */\n\n  html {\n    font-size: 16px;\n\n    @media (max-width: 700px) {\n      font-size: 15px;\n    }\n  }\n  \n  body {\n    font-family: ",";\n  }\n\n  h1, h2 {\n    font-family: ",";\n    font-size: 3rem;\n    line-height: 2.5rem!important;\n    margin: 0;\n    padding: 2rem 0;\n\n    & a {\n      text-decoration: none;\n    }\n\n    @media (max-width: 700px) {\n      font-size: 2rem;\n      padding: 1rem 0;\n    }\n  }\n\n  a:not(.gatsby-resp-image-link) {\n    background: linear-gradient(to bottom, "," 0%, ",' 100%);\n    background-position: 0 100%;\n    background-repeat: repeat-x;\n    background-size: 3px 3px;\n    color: #000;\n    text-decoration: none;\n    padding-bottom: 0.5000rem;\n\n    &:hover {\n      background-image: url("data: image/svg+xml;base64,','");\n      background-position: 0 100%;\n      background-size: auto 6px;\n      background-repeat: repeat-x;\n      text-decoration: none;\n    }\n  }\n\n  img {\n    border: 0.2rem solid ',";\n  }\n\n  .gatsby-highlight  {\n    position: relative;\n\n    &::before {\n      content: attr(data-language);\n      background: ",';\n      border-bottom-left-radius: 0.25rem;\n      color: #FFF;\n      font-size: 0.75rem;\n      font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n      letter-spacing: 0.075em;\n      line-height: 1;\n      padding: 0.25rem 0.5rem;\n      position: absolute;\n      right: 0;\n      text-align: right;\n      text-transform: uppercase;\n      top: 0;\n      z-index: 5;\n    }\n  }\n\n  /* pre[class*="language-"]:before, pre[class*="language-"]:after {} */\n\n  pre[class*="language-"] {\n    :before {\n      content: none;\n    }\n\n    :after {\n      content: none;\n    }\n\n    &.line-numbers.line-numbers {\n      code {\n        padding-left: 1rem;\n        border-left-color: ',";\n        border-left-width: 2rem;\n      }\n      .line-numbers-rows {\n        width: 2rem!important;\n        border-right-color: ",';\n\n        span::before {\n          color: #FFF;\n          text-align: center;\n          width: 100%;\n        }\n      }\n    }\n  }\n\n  /* pre[class*="language-"] > code {\n    border-left-width: 1rem;\n  } */\n\n  /*\n  :not(pre) > code[class*="language-"] {\n    color: ',';\n  }\n\n  .gatsby-highlight pre[class*="language-"].line-numbers {\n    padding-left: 5.8em;\n  }\n\n  .gatsby-highlight pre[class*="language-"]>code {\n    padding-left: 1rem;\n    border-left-width: 1rem;\n    border-left-color: ',';\n\n    @media (max-width: 700px) {\n      font-size: 0.75rem;\n    }\n  }\n\n  .gatsby-highlight {\n    border-radius: 0.3em;\n    margin: 0;\n    padding: 0em;\n    overflow: auto;\n  }\n\n  .gatsby-highlight pre[class*="language-"].line-numbers {\n    padding: 0;\n    padding-left: 2.8em;\n    overflow: initial;\n  }\n\n  .gatsby-highlight-code-line {\n    background-color: ',';\n  }\n  */\n\n  blockquote:not([data-name="title"]) {\n    border-left: 1rem solid ',";\n    font-style: italic;\n    margin: 0;\n    padding: 0 0 0 2rem;\n    position: relative;\n\n    @media (max-width: 700px) {\n      padding: 0 0 0 1rem;\n    }\n  }\n"]);return k=function(){return e},e}var _=Object(o.b)(k(),function(e){return e.theme.bodyFontFamily},function(e){return e.theme.headerFontFamily},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},window.btoa("<svg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'><style type='text/css'>.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path fill='none' stroke='#1E88E5' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/></svg>"),function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1},function(e){return e.theme.primaryColor1}),M=o.c.main.withConfig({displayName:"MainLayout__Main",componentId:"sc-1qmnxwi-0"})(["padding:0 ",";overflow:hidden;margin-top:0rem;display:flex;flex-direction:column;align-items:center;"],function(e){return e.theme.sidePadding});n.a=function(e){var n=e.children;return a.a.createElement(o.a,{theme:v},a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(_,null),a.a.createElement(u,null),a.a.createElement(M,null,n,a.a.createElement(w,null,a.a.createElement("p",null,"Blog escrito por Sergio Flores")))))}},237:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(157),i=Object(o.d)(["50%{-webkit-clip-path:polygon(70% 0%,100% 0%,100% 100%,70% 100%);}"]),l=o.c.div.withConfig({displayName:"sc-7cfc__Text",componentId:"sc-1rvopkp-0"})(["@import url('https://fonts.googleapis.com/css?family=Space+Mono:700');position:relative;color:#262626;padding:20px 50px;font-family:\"Space Mono\";font-size:5rem;text-align:left;@media only screen and (max-width:61.999rem){font-size:3rem;}@media only screen and (max-width:29.999rem){font-size:1.5rem;}&:before{background:#262626;color:white;content:'","';overflow:hidden;position:absolute;top:0;left:0;text-align:center;padding:20px 50px;-webkit-clip-path:polygon(0% 0%,30% 0%,30% 100%,0% 100%);clip-path:polygon(0% 0%,30% 0%,30% 100%,0% 100%);animation:"," 4s 1s linear infinite;}"],function(e){return e.children},i);n.default=function(e){var n=e.text;return a.a.createElement(l,null,n.toUpperCase())}},238:function(e,n,t){"use strict";t.r(n);t(77);var r=t(0),a=t.n(r),o=t(157),i=t(383),l=o.c.section.withConfig({displayName:"cc9a__Container",componentId:"p93cdn-0"})(["width:100%;max-width:",";background:#fff;margin:0;padding-bottom:130px;display:flex;align-content:ffcenter;justify-content:center;overflow:hidden;"],function(e){return e.theme.contentMaxWidth}),m=o.c.blockquote.withConfig({displayName:"cc9a__Blockquote",componentId:"p93cdn-1"})(["font:italic 900 60px/1 Montserrat,sans-serif;color:",";margin:auto;text-shadow:",";@media only screen and (max-width:61.999rem){font-size:45px;}@media only screen and (max-width:29.999rem){font-size:40px;}span{opacity:1;position:relative;display:block;","}"],"#eee",function(e,n){for(var t="0 0 "+e,r=0;r<=n;r++)t=t+", -"+r+"px "+.5*r+"px "+Object(i.a)(.1*r,e);return t+", 0 -1px "+e+", 1px 0 "+e+", 1px 1px "+e}("#1ce",1e3),new Array(7).map(function(e,n){return"\n        &:nth-child("+n+") {\n          transform: translate3d(20px * "+n+", 0, 0);\n          transition-delay: .1s * (7 - "+n+");\n        }\n      "}));n.default=function(e){var n=e.text;return a.a.createElement(l,null,a.a.createElement(m,{"data-name":"title"},n.split(" ").reduce(function(e,n,t){return n.length<3?(e[t-1]=e[t-1]+" "+n,e):e.concat(n)},[]).map(function(e,n){return a.a.createElement("span",{key:e+"-"+n,style:{transform:"translate3d("+20*n+"px, 0, 0)"}},e)})))}},382:function(e,n,t){var r={"./7cfc":237,"./7cfc.jsx":237,"./cc9a":238,"./cc9a.jsx":238};function a(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=382}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-bcd74aa76c903fd5a80b.js.map