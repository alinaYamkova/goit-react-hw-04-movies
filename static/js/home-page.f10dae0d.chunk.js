(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{60:function(e,t,i){e.exports={link:"moviePreview_link__Q8ui9",preview:"moviePreview_preview__3qZZx",image:"moviePreview_image__1R_Vx",Title:"moviePreview_Title__3w7xS"}},61:function(e,t,i){e.exports={titleRelise:"moviesList_titleRelise__29dVE",titleOverview:"moviesList_titleOverview__3-6bt",popularity:"moviesList_popularity__l6mbu",movieList:"moviesList_movieList__3SqxH",listBox:"moviesList_listBox__3AWwS"}},63:function(e,t,i){"use strict";function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}i.d(t,"a",(function(){return s}))},64:function(e,t,i){"use strict";i(0);var r=i(10),n=i(8),s=i(60),o=i.n(s),a=i(1),c=function(e){var t=e.movies,i=e.location,s=t.id,c=t.poster_path,l=t.title,u=t.name;return Object(a.jsx)("li",{className:o.a.preview,children:Object(a.jsxs)(r.b,{className:o.a.link,to:{pathname:"".concat(n.a.moviesPage,"/").concat(s),state:{from:i}},children:[Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:l||u,className:o.a.image},s),Object(a.jsx)("h2",{className:o.a.Title,children:l||u})]})})},l=i(61),u=i.n(l);t.a=function(e){var t=e.movies;return Object(a.jsx)("div",{className:u.a.listBox,children:Object(a.jsx)("ul",{className:u.a.movieList,children:t.map((function(e){return Object(a.jsx)(c,{movies:e},e.id)}))})})}},98:function(e,t,i){"use strict";i.r(t);var r=i(63),n=i(57),s=i.n(n),o=i(58),a=i(52),c=i(53),l=i(55),u=i(54),v=i(0),m=i(56),p=i(64),b=i(59),j=i.n(b),O=i(1),f=function(e){Object(l.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(a.a)(this,i);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[]},e}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.getPopulars();case 2:t=e.sent,this.setState({movies:t}),console.log(t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:j.a.homePageTitle,children:"Popular movies today"}),Object(O.jsx)(p.a,Object(r.a)({movies:e},this.props))]})}}]),i}(v.Component);t.default=f}}]);
//# sourceMappingURL=home-page.f10dae0d.chunk.js.map