"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{79:function(e,r,n){n.d(r,{Jn:function(){return v},Lj:function(){return o},SF:function(){return d},t_:function(){return p},tx:function(){return f}});var t=n(861),a=n(757),c=n.n(a),s=n(243),i=n(596);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="a78f00a7379230bfb7a39dfb77750ae2",o=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),(0,i.Am)("Movie not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?query=".concat(r,"&api_key=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),(0,i.Am)("Movie not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r,"?api_key=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),(0,i.Am)("Sorry, no info");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits?api_key=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),(0,i.Am)("Sorry, no info");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),(0,i.Am)("Sorry, no info");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},305:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(861),a=n(439),c=n(757),s=n.n(c),i=n(79),u=n(791),o=n(87),p=n(689),v="MovieCard_btn__aIaYc",d="MovieCard_container__MjFJd",f="MovieCard_info__PWsIF",l=n(184),h=function(){var e,r,n=(0,u.useState)([]),c=(0,a.Z)(n,2),h=c[0],x=c[1],m=(0,p.UO)().movieId,j=(0,p.TH)();(0,u.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Jn)(m);case 2:r=e.sent,x(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]);var w=(0,u.useRef)(null===(e=j.state)||void 0===e?void 0:e.from),_=h.title,k=h.poster_path,b=h.overview,y=h.genres,g=h.vote_average;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:v,children:(0,l.jsx)(o.rU,{to:null!==(r=w.current)&&void 0!==r?r:"/",children:"\u2190 Go back"})}),(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(k),alt:""})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:_}),(0,l.jsxs)("p",{children:["User Score: ",Math.round(10*g),"%"]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:b}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:null===y||void 0===y?void 0:y.map((function(e){return e.name}))})]})]}),(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"reviews",children:"Review"})})]})]}),(0,l.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=305.81cb6245.chunk.js.map