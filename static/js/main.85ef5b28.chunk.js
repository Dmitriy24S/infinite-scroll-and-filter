(this["webpackJsonpinfinite-scroll-page"]=this["webpackJsonpinfinite-scroll-page"]||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(8),o=c.n(i),r=(c(14),c(6)),a=c.n(r),l=c(7),u=c(9),j=c(3),d=c(0);var f=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),r=o[0],f=o[1],b=1,p=function(){var e=Object(u.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,fetch("https://jsonplaceholder.typicode.com/posts?_limit=".concat(5,"&_page=").concat(b));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s((function(e){return[].concat(Object(l.a)(e),Object(l.a)(c))})),f(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function O(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(r||(f(!0),console.log("Fetch more list items!"),r||r||setTimeout((function(){b++,p()}),1e3)))}Object(n.useEffect)((function(){S(c)}),[c]),Object(n.useEffect)((function(){p()}),[]),Object(n.useEffect)((function(){return window.addEventListener("scroll",O),function(){return window.removeEventListener("scroll",O)}}),[]);var h=Object(d.jsxs)("div",{className:"loader",children:[Object(d.jsx)("div",{className:"circle"}),Object(d.jsx)("div",{className:"circle"}),Object(d.jsx)("div",{className:"circle"})]}),m=Object(n.useState)(""),v=Object(j.a)(m,2),x=v[0],w=v[1],g=function(e){w(e.target.value),k();console.log(x.match(/^\s+$/))},N=Object(n.useState)([]),E=Object(j.a)(N,2),y=E[0],S=E[1],k=function(){if(null===x.match(/^\s+$/)){var e=c.filter((function(e){return e.title.indexOf(x)>-1||e.body.indexOf(x)>-1}));S(e)}},I=Object(d.jsx)("div",{className:"scrollBtn",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"to top"});return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Infinite Scroll & Filter"}),Object(d.jsx)("div",{className:"filter-container",children:Object(d.jsx)("input",{type:"text",placeholder:"filter posts...",value:x,onChange:g,onInput:g,onPaste:g})}),Object(d.jsx)("div",{className:"posts-container",children:y.map((function(e){return Object(d.jsxs)("article",{className:"post",children:[Object(d.jsx)("span",{className:"post-number",children:e.id}),Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)("p",{children:e.body})]},e.id)}))}),I,r&&h]})};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.85ef5b28.chunk.js.map