(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{102:function(t,e,r){"use strict";r.r(e);var n=r(38),o=r.n(n),a=r(39),i=r(16),c=r(17),s=r(19),u=r(18),l=r(44),h=r(0),f=r(37),p=r(96),v=r.n(p),d=r(1),m=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(i.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={cast:[]},t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var t=Object(a.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.match.params.movieId;case 2:return e=t.sent,t.next=5,Object(f.a)(e);case 5:r=t.sent,this.setState({cast:r.data.cast});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.cast;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Cast"}),t.length>0&&Object(d.jsx)("ul",{children:t.filter((function(t){return t.popularity>5})).map((function(t){return Object(d.jsxs)("li",{className:v.a.list,children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:"portrait ".concat(t.name)}),Object(d.jsx)("p",{className:v.a.name,children:t.name}),Object(d.jsxs)("p",{className:v.a.role,children:["Role: ",t.character||"minor roles"]})]},t.id)}))})]})}}]),r}(h.Component),y=r(97),b=r.n(y),g=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(i.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={review:[]},t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var t=Object(a.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.match.params.movieId;case 2:return e=t.sent,t.next=5,Object(f.d)(e);case 5:r=t.sent,this.setState({review:r.data.results});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.review;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Reviews"}),0===t.length?Object(d.jsx)("p",{className:b.a.content,children:"'We don't have any reviews for this movie'"}):Object(d.jsx)("ul",{className:b.a.list,children:t.map((function(t){return Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{className:b.a.name,children:t.author}),Object(d.jsx)("p",{className:b.a.content,children:t.content})]},t.id)}))})]})}}]),r}(h.Component),j=r(9),O=r(2),w=r(98),x=r.n(w),_=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(i.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={movieId:""},t.onBack=function(){var e,r=t.props,n=r.history,o=r.location;n.push((null===o||void 0===o||null===(e=o.state)||void 0===e?void 0:e.from)||"/"),n.push({search:o.search})},t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var t=Object(a.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,Object(f.b)(e);case 3:r=t.sent,this.setState({movieId:r.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.movieId,e=this.props.match,r=e.url,n=e.path;return Object(d.jsx)(d.Fragment,{children:""!==t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:x.a.row,children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title}),Object(d.jsxs)("div",{className:x.a.list,children:[Object(d.jsx)(l.a,{onClick:this.onBack,"aria-label":"Go back",children:"\u2190 Go back"}),Object(d.jsx)("h2",{children:"".concat(t.title," (").concat(t.release_date.slice(0,4),")")}),Object(d.jsx)("p",{children:"rating - "+t.vote_average}),Object(d.jsx)("h3",{children:"Overview:"}),Object(d.jsx)("p",{children:t.overview}),t.genres.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Genres:"}),Object(d.jsx)("ul",{className:x.a.list,children:t.genres.map((function(t){return Object(d.jsx)("li",{children:t.name},t.id)}))})]})]})]}),Object(d.jsxs)("ul",{className:x.a.list,children:[Object(d.jsx)(j.c,{to:"".concat(r,"/cast"),children:"Cast"}),Object(d.jsx)(j.c,{to:"".concat(r,"/reviews"),children:"Reviews"})]}),Object(d.jsx)(O.b,{path:"".concat(n,"/cast"),component:m}),Object(d.jsx)(O.b,{path:"".concat(n,"/reviews"),component:g})]})})}}]),r}(h.Component);e.default=_},37:function(t,e,r){"use strict";r.d(e,"e",(function(){return i})),r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return u})),r.d(e,"d",(function(){return l}));var n=r(43),o=r.n(n),a="35e0acb18456e1bafb134cbae820a65c",i=o.a.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(a)),c=function(t){return o.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(a,"&language=en-US"))},s=function(t){return o.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a,"&language=en-US"))},u=function(t,e){return o.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&").concat(t,"&page=").concat(e,"&include_adult=false"))},l=function(t){return o.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}},38:function(t,e,r){t.exports=r(40)},39:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},40:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(C){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?v:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",v="completed",d={};function m(){}function y(){}function b(){}var g={};g[a]=function(){return this};var j=Object.getPrototypeOf,O=j&&j(j(N([])));O&&O!==r&&n.call(O,a)&&(g=O);var w=b.prototype=m.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=w.constructor=b,b.constructor=y,y.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),s(w,c,"Generator"),w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},44:function(t,e,r){"use strict";var n=r(46),o=r(47),a=(r(0),r(45)),i=r.n(a),c=r(1),s=["children","onClick"],u=function(t){var e=t.children,r=t.onClick,a=Object(o.a)(t,s);return Object(c.jsx)("button",Object(n.a)(Object(n.a)({type:"button",className:i.a.Button,onClick:r},a),{},{children:e}))};u.defaultProps={onClick:function(){return null},children:null},e.a=u},45:function(t,e,r){t.exports={Button:"Button_Button__3mBgY"}},46:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return a}))},47:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.d(e,"a",(function(){return n}))},96:function(t,e,r){t.exports={list:"Cast_list__1CbNp",name:"Cast_name__1rEGt",role:"Cast_role__1DVNG"}},97:function(t,e,r){t.exports={list:"Reviews_list__2cRPg",name:"Reviews_name__2JIKW",content:"Reviews_content__kBknj"}},98:function(t,e,r){t.exports={list:"MovieDetailsPage_list__2MC_L",row:"MovieDetailsPage_row__8_l8v"}}}]);
//# sourceMappingURL=5.ab2bf2ea.chunk.js.map