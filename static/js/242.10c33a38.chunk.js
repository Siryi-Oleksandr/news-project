"use strict";(self.webpackChunknews_project=self.webpackChunknews_project||[]).push([[242],{755:function(n,t,e){e.d(t,{Z:function(){return L}});var i,r,o,a,c,l,s,d,x,p,u,h,f=e(168),g=e(444),m=g.ZP.ul(i||(i=(0,f.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n"]))),Z=g.ZP.li(r||(r=(0,f.Z)(["\n  width: 100%;\n\n  &:not(:last-child) {\n    @media screen and (max-width: 767px) {\n      margin: 0 auto;\n      margin-bottom: 20px;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 395px;\n  }\n"]))),j=e(439),b=e(791),v=e(736),w=e(466),y=g.ZP.div(o||(o=(0,f.Z)(["\n  position: relative;\n  margin-bottom: 20px;\n  overflow: hidden;\n\n  > img {\n    object-fit: cover;\n    min-width: 288px;\n    height: 395px;\n    border-radius: 4px;\n  }\n"]))),z=g.ZP.p(a||(a=(0,f.Z)(["\n  position: absolute;\n  display: flex;\n  min-width: 96px;\n  height: auto;\n  padding: 4px 14px;\n  margin: 0;\n  left: 0px;\n  top: 40px;\n  background: rgba(68, 64, 247, 0.7);\n  border-radius: 0px 4px 4px 0px;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  justify-content: center;\n\n  color: ",";\n"])),w.zQ),P=g.ZP.button(c||(c=(0,f.Z)(["\n  position: absolute;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n\n  min-width: 40px;\n  min-height: 10px;\n  margin: 0;\n  padding: 6px 12px 6px 12px;\n  right: 12px;\n  bottom: 12px;\n\n  background: ",";\n  border-radius: 20px;\n\n  font-weight: 500;\n  font-size: 12px;\n  line-height: calc(16 / 12);\n  text-align: left;\n  cursor: pointer;\n\n  /* transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */\n"])),w.zQ),k=g.ZP.div(l||(l=(0,f.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n\n  flex-direction: column;\n"]))),C=g.ZP.h2(s||(s=(0,f.Z)(["\n  margin-bottom: 20px;\n\n  font-size: 32px;\n  font-weight: 700;\n  line-height: calc(44 / 32);\n  letter-spacing: -0.01em;\n"]))),_=g.ZP.p(d||(d=(0,f.Z)(["\n  font-size: 16px;\n  line-height: calc(22 / 16);\n"]))),A=g.ZP.span(x||(x=(0,f.Z)(["\n  font-size: 14px;\n  line-height: calc(19 / 14);\n  text-align: right;\n\n  color: ",";\n"])),w.X_),R=g.ZP.div(p||(p=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),S=g.ZP.a(u||(u=(0,f.Z)(["\n  font-size: 18px;\n  line-height: calc(24 / 18);\n\n  color: ",";\n"])),w.z),N=g.ZP.button(h||(h=(0,f.Z)(["\n  text-decoration: underline;\n  cursor: pointer;\n  color: ",";\n  background-color: transparent;\n  border: none;\n  outline: none;\n"])),w.z),Q=e(820),T=e(682),F=e(184),I="favorite_articles";var J=function(n){var t=n.article,e=t.id,i=t.url,r=t.abstract,o=t.title,a=t.section,c=t.published_date,l=t.mediaUrl,s=(0,b.useContext)(v.Z),d=s.addToFavoriteArticle,x=s.deleteArticle,p=s.addToReadArticle,u=(0,b.useState)((function(){return function(n){var t=JSON.parse(window.localStorage.getItem(I));if(t)return t.some((function(t){return t.id===n}));return!1}(e)})),h=(0,j.Z)(u,2),f=h[0],g=h[1];return(0,F.jsxs)("article",{children:[(0,F.jsxs)(y,{children:[(0,F.jsx)("img",{src:null!==l&&void 0!==l?l:T,alt:o}),(0,F.jsx)(z,{children:a}),f?(0,F.jsxs)(P,{type:"button",onClick:function(){x(e),g(!1)},children:["Remove from favorite",(0,F.jsx)(Q.M_L,{size:"1.5em",fill:w.z})]}):(0,F.jsxs)(P,{type:"button",onClick:function(){d(t),g(!0)},children:["Add to favorite",(0,F.jsx)(Q.lo,{size:"1.5em",fill:w.z})]})]}),(0,F.jsxs)(k,{children:[(0,F.jsx)(C,{children:o}),(0,F.jsx)(_,{children:r})]}),(0,F.jsxs)(R,{children:[(0,F.jsx)(A,{children:c}),(0,F.jsx)(S,{target:"_blank",rel:"noreferrer",href:i,children:(0,F.jsx)(N,{type:"button",onClick:function(){p(t)},children:"Read more"})})]})]})};var L=function(n){var t=n.articles;return(0,F.jsx)(m,{children:t.map((function(n){return(0,F.jsx)(Z,{children:(0,F.jsx)(J,{article:n})},n.id)}))})}},891:function(n,t,e){e.d(t,{Z:function(){return l}});var i,r=e(682),o=e(168),a=e(444).ZP.div(i||(i=(0,o.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 30px;\n\n  width: 395px;\n  text-align: center;\n"]))),c=e(184);var l=function(){return(0,c.jsxs)(a,{children:[(0,c.jsx)("h1",{children:"We haven\u2019t found news from this category"}),(0,c.jsx)("img",{src:r,alt:"Not found any articles"})]})}},242:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var i=e(755),r=e(891),o=e(791),a=e(736),c=e(184);var l=function(){var n=(0,o.useContext)(a.Z).favoriteArticles,t=0===n.length;return(0,c.jsx)("div",{children:t?(0,c.jsx)(r.Z,{}):(0,c.jsx)(i.Z,{articles:n})})}}}]);
//# sourceMappingURL=242.10c33a38.chunk.js.map