(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-a7ca9b5c":"bf5471a7","chunk-b223e090":"b0b9c2d4","chunk-d4fa4a7e":"efa3d7c7","chunk-f84d66ec":"439f585a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-a7ca9b5c":1,"chunk-b223e090":1,"chunk-d4fa4a7e":1,"chunk-f84d66ec":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-a7ca9b5c":"5cda6452","chunk-b223e090":"bee0c436","chunk-d4fa4a7e":"c3652244","chunk-f84d66ec":"b46967d1"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Portfolio/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0175":function(e,t,n){},3559:function(e,t,n){"use strict";var r=n("dd3d"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{mode:"out-in"}},[n("router-view")],1)},o=[],c={name:"App"},u=c,i=(n("c441"),n("2877")),s=Object(i["a"])(u,a,o,!1,null,"6922f2f8",null),l=s.exports,f=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HomeHeader"),e._m(0)],1)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home_container"},[n("div",{staticClass:"name_container"},[n("h1",{staticClass:"name"},[e._v("Taichi Uchida")]),n("div",{attrs:{id:"load"}})])])}],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home_header_comp"},[n("div",{staticClass:"home_header_container"},[n("nav",{staticClass:"nav_for_sections"},[n("ul",{staticClass:"header_ul"},e._l(e.sections,(function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/"+t,id:"home_"+t+"_nav"}},[e._v(e._s(t))])],1)})),0)])])])},m=[],v={name:"HomeHeader",components:{},data:function(){return{sections:["works","about","gallery"]}}},b=v,g=(n("8a2c"),Object(i["a"])(b,h,m,!1,null,null,null)),y=g.exports,_={neme:"Home",components:{HomeHeader:y}},k=_,w=(n("3559"),Object(i["a"])(k,d,p,!1,null,"27a5e560",null)),C=w.exports,O=(n("c975"),function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")}),j=O();r["a"].use(f["a"]);var E=[{path:"/",name:"Home",component:C},{path:"/works",name:"Works",component:function(){return n.e("chunk-f84d66ec").then(n.bind(null,"1822"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-d4fa4a7e").then(n.bind(null,"f820"))}},{path:"/gallery",name:"Gallery",component:function(){return n.e("chunk-a7ca9b5c").then(n.bind(null,"0d77"))}},{path:"/works/:tag",name:"Work",component:function(){return n.e("chunk-b223e090").then(n.bind(null,"f126"))}}];localStorage.format=j?"webp":"jpg";var x=new f["a"]({mode:"hash",base:"/Portfolio/",routes:E}),P=x,S=n("8dc2");n("6672");r["a"].use(S["VLazyImagePlugin"]),r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(e){return e(l)}}).$mount("#app")},6672:function(e,t,n){},"8a2c":function(e,t,n){"use strict";var r=n("0175"),a=n.n(r);a.a},be5a:function(e,t,n){},c441:function(e,t,n){"use strict";var r=n("be5a"),a=n.n(r);a.a},dd3d:function(e,t,n){}});
//# sourceMappingURL=app.60fe4427.js.map