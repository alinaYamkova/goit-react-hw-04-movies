(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{101:function(t,e,a){"use strict";a.r(e);var r,n=a(57),s=a.n(n),c=a(58),o=a(52),i=a(53),u=a(55),p=a(54),m=a(0),f=a(56),d=a(95),l=a.n(d),h=new Uint8Array(16);function v(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(h)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var y=function(t){return"string"===typeof t&&g.test(t)},b=[],j=0;j<256;++j)b.push((j+256).toString(16).substr(1));var w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(b[t[e+0]]+b[t[e+1]]+b[t[e+2]]+b[t[e+3]]+"-"+b[t[e+4]]+b[t[e+5]]+"-"+b[t[e+6]]+b[t[e+7]]+"-"+b[t[e+8]]+b[t[e+9]]+"-"+b[t[e+10]]+b[t[e+11]]+b[t[e+12]]+b[t[e+13]]+b[t[e+14]]+b[t[e+15]]).toLowerCase();if(!y(a))throw TypeError("Stringified UUID is invalid");return a};var O=function(t,e,a){var r=(t=t||{}).random||(t.rng||v)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){a=a||0;for(var n=0;n<16;++n)e[a+n]=r[n];return e}return w(r)},x=a(1),_=function(t){Object(u.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={casts:[]},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=Object(c.a)(s.a.mark((function t(){var e,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(this.props),e=this.props.mach.params.movieId,t.next=4,f.a.getMovies(e);case 4:a=t.sent,this.setState({casts:a});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.casts;return Object(x.jsx)("div",{children:Object(x.jsx)("ul",{className:l.a.castList,children:t.map((function(t){var e=t.profile_path,a=t.name,r=t.character;return Object(x.jsxs)("li",{className:l.a.castItem,children:[Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e),alt:"actor",className:l.a.castImage}),Object(x.jsx)("p",{className:l.a.name,children:a}),Object(x.jsx)("p",{className:l.a.character,children:r||"unknown"})]},O())}))})})}}]),a}(m.Component);e.default=_},95:function(t,e,a){t.exports={castList:"cast_castList__1qrY2",castItem:"cast_castItem__1EgEH",castImage:"cast_castImage__1xzBB"}}}]);
//# sourceMappingURL=Cast.27c9c0fb.chunk.js.map