"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[343],{674:function(n,e,t){t.d(e,{e:function(){return P}});var r,a,o,i,c,u,s,p,l=t(168),d=t(444),f=d.ZP.img(r||(r=(0,l.Z)(["\n  width: 395px;\n  height: 535px;\n  object-fit: cover;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n"]))),h=d.ZP.div(a||(a=(0,l.Z)(["\n  padding-top: 12px;\n  padding-left: 12px;\n"]))),g=d.ZP.h2(o||(o=(0,l.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 14px;\n  letter-spacing: 0.04em;\n"]))),x=d.ZP.p(i||(i=(0,l.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.04em;\n"]))),v=d.ZP.span(c||(c=(0,l.Z)(["\n  background-color: orange;\n  padding: 3px 12px;\n  color: #000;\n  border-radius: 5px;\n"]))),m=t(184),b=function(n){n.id;var e,t=n.title,r=n.poster,a=n.releaseDate,o=n.voteAverage,i=void 0===o?1:o;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:(0,m.jsx)(f,{src:(e=r,"".concat("https://image.tmdb.org/t/p/").concat("w300").concat(e)),alt:t,loading:"lazy"})}),(0,m.jsxs)(h,{children:[(0,m.jsx)(g,{children:t.toUpperCase()}),(0,m.jsxs)(x,{children:[new Date(a).getFullYear(),(0,m.jsx)(v,{children:i.toFixed(1)})]})]})]})},Z=t(731),w=(0,d.ZP)(Z.OL)(u||(u=(0,l.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: ",";\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"])),(function(n){return n.theme.fontWeights.heading})),y=d.ZP.ul(s||(s=(0,l.Z)(["\n  display: grid;\n  max-width: 960px;\n  grid-gap: 32px 16px;\n  justify-content: center;\n  grid-auto-rows: auto;\n  padding-top: ",";\n  padding-bottom: ",";\n  margin-left: auto;\n  margin-right: auto;\n  grid-template-columns: repeat(3, 1fr);\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]})),k=d.ZP.li(p||(p=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  // align-items: center;\n  border-radius: 6px;\n  border: 1px solid #000;\n  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"]))),j=t(739),P=function(n){var e=n.collection,t=(0,j.TH)(),r="/"===t.pathname?"/movie/":"";return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(y,{children:e.map((function(n){var e=n.id,a=n.title,o=n.poster_path,i=n.release_date,c=n.vote_average;return(0,m.jsx)(k,{children:(0,m.jsx)(w,{to:"".concat(r).concat(e),state:{from:t},children:(0,m.jsx)(b,{title:a,id:e,poster:o,releaseDate:i,voteAverage:c})})},e)}))})})}},343:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,o,i,c,u=t(885),s=t(168),p=t(444),l=t(705),d=(0,p.ZP)(l.l0)(r||(r=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid #000;\n  margin: 0 auto;\n"]))),f=(0,p.ZP)(l.gN)(a||(a=(0,s.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),h=p.ZP.button(o||(o=(0,s.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n"]))),g=(p.ZP.span(i||(i=(0,s.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),t(719)),x=t(184),v={query:""},m=function(n){var e=n.onSubmit;return(0,x.jsx)(l.J9,{initialValues:v,onSubmit:function(n,t){var r=t.resetForm;""!==n.query.trim()&&(e(n.query),r())},children:(0,x.jsxs)(d,{children:[(0,x.jsx)(h,{type:"submit",children:(0,x.jsx)(g.wTD,{})}),(0,x.jsx)(f,{name:"query",type:"text"})]})})},b=t(731),Z=t(739),w=t(791),y=t(364),k=t(674),j=p.ZP.div(c||(c=(0,s.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),P=function(){var n,e=(0,b.lr)(),t=(0,u.Z)(e,2),r=t[0],a=t[1],o=null!==(n=r.get("query"))&&void 0!==n?n:"",i=(0,w.useState)([]),c=(0,u.Z)(i,2),s=c[0],p=c[1];(0,w.useEffect)((function(){o&&(0,y.V0)(o).then((function(n){return p(n.results)}))}),[o]);return(0,x.jsxs)(j,{children:[(0,x.jsx)(m,{onSubmit:function(n){var e;a(""!==(e=n)?{query:e}:{})}}),(0,x.jsx)(k.e,{collection:s}),(0,x.jsx)(Z.j3,{})]})}},364:function(n,e,t){t.d(e,{Df:function(){return u},V0:function(){return s},Xm:function(){return d},in:function(){return l},sJ:function(){return p}});var r=t(861),a=t(757),o=t.n(a),i=t(44);i.Z.defaults.baseURL="https://api.themoviedb.org/";var c="6fe1e9d5fbaeb01db6cc1b91ad7172fe",u=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.prev=1,t="3/trending/movie/day?api_key=".concat(c,"&page=").concat(e),n.next=5,i.Z.get(t);case 5:return r=n.sent,n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a,u=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,n.prev=1,r="3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"),n.next=5,i.Z.get(r);case 5:return a=n.sent,n.abrupt("return",a.data);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"),n.next=4,i.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"),n.next=4,i.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"),n.next=4,i.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=343.e5df8745.chunk.js.map