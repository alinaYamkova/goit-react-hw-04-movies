(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{62:function(t,e,a){"use strict";function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return c}))},72:function(t,e,a){"use strict";a.r(e);var c=a(62),n=a(59),s=a.n(n),r=a(60),i=a(53),o=a(54),u=a(58),l=a(57),h=a(0),p=a(3),b=a(61),j=a.n(b),m=a(15),d=a.n(m),f=a(1),v=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={cast:[],movieId:[]},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=Object(r.a)(s.a.mark((function t(){var e,a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.mach.papams.moviesId,"9599265593b07045c4126c91624e271e",a="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),t.next=5,j.a.get("".concat(a,"?api_key=").concat("9599265593b07045c4126c91624e271e","&language=en-US"));case 5:c=t.sent,console.log(c.data.results),this.setState({casts:c.data.results});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.cast;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Cast"}),Object(f.jsx)("ul",{className:d.a.castList,children:t&&t.map((function(t){var e,a=t.id,n=t.name,s=t.profile_path,r=t.character,i="https://image.tmdb.org/t/p/w500".concat(s);return Object(f.jsxs)("li",{className:d.a.castItem,children:[s&&Object(f.jsx)("img",(e={src:i},Object(c.a)(e,"src","https://image.tmdb.org/t/p/w300".concat(s)),Object(c.a)(e,"alt",n),Object(c.a)(e,"className",d.a.castImage),e)),Object(f.jsxs)("div",{className:"cast_descript",children:[Object(f.jsx)("h3",{children:n}),Object(f.jsxs)("p",{children:["Character: ",r]})]})]},a)}))})]})}}]),a}(h.Component);e.default=Object(p.f)(v)}}]);
//# sourceMappingURL=cast.8781a60b.chunk.js.map