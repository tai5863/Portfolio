(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],f=0,l=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"edce3646"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"9e6e998c"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],f=u.getAttribute("data-href");if(f===r||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(e);var l=new Error;u=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:f})}),12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"149f":function(e,t,n){e.exports=n.p+"img/DSC_0280.8a3b1656.jpg"},"1a29":function(e,t,n){e.exports=n.p+"img/git-icon.2882b10b.png"},2552:function(e,t,n){e.exports=n.p+"img/DSC_0334.4063f694.jpg"},"26a4":function(e,t,n){e.exports=n.p+"img/DSC_0467.6b4b5c64.jpg"},3099:function(e,t,n){e.exports=n.p+"img/DSC_0188.1aefdaec.jpg"},3581:function(e,t,n){e.exports=n.p+"img/MyProfile.de6f59a1.jpg"},"4ca6":function(e,t,n){e.exports=n.p+"img/DSC_0337.f30fd06b.jpg"},"52ed":function(e,t,n){e.exports=n.p+"img/DSC_0341.38ed7815.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("WebGL"),n("transition",{attrs:{name:"trans"}},[n("router-view")],1),n("div",{staticClass:"photos_loader"},[n("ul",e._l(e.images,(function(e,t){return n("span",{key:e},[n("img",{staticClass:"img",attrs:{id:"img"+t,src:e}})])})),0)]),n("Footer")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header_comp"},[n("div",{staticClass:"header_container"},[n("nav",{staticClass:"nav_for_sections"},[n("ul",{staticClass:"header_ul"},e._l(e.sections,(function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/"+t,id:t+"_nav"}},[e._v(e._s(t))])],1)})),0)]),n("nav",{staticClass:"nav_for_small"},[n("input",{staticClass:"nav-unshown",attrs:{id:"nav-input",type:"checkbox"}}),e._m(0),n("label",{staticClass:"nav-unshown",attrs:{id:"nav-close",for:"nav-input"}}),n("div",{attrs:{id:"nav-content"}},[n("ul",{staticClass:"header_ul"},e._l(e.sections,(function(t){return n("li",{key:t.id,on:{click:e.closeNav}},[n("router-link",{attrs:{to:"/"+t,id:t+"_nav_for_small"}},[e._v(e._s(t))])],1)})),0),n("nav",{staticClass:"me_accounts"},[n("ul",{staticClass:"footer_ul"},e._l(e.items,(function(t){return n("li",{key:t.id},[n("a",[n("img",{staticClass:"icon",attrs:{src:t.icon,border:"0",width:"25"},on:{click:function(n){return e.openLink(t.link)}}})])])})),0)])])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{id:"nav-open",for:"nav-input"}},[n("span")])}],s=(n("4de4"),n("fb6a"),{name:"Header",data:function(){return{sections:["photos","works","about"],items:[{icon:n("c9f3"),link:"https://twitter.com/_t_ai__"},{icon:n("5896"),link:"https://www.instagram.com/_t_ai__/"},{icon:n("1a29"),link:"https://github.com/tai5863/"}]}},watch:{$route:function(e){for(var t=["/photos","/works","/about"],n=[],r=0;r<t.length;r++)n.push(t[r].slice(1));if("/"!=e.path){var a=e.path.slice(1),o=n.filter((function(e){return e!=a})),i=document.getElementById(a+"_nav");i.style.color="white";for(var c=0;c<o.length;c++){var s=document.getElementById(o[c]+"_nav");s.style.color="rgba(255, 255, 255, 0.3)"}}else for(var u=0;u<n.length;u++){var f=document.getElementById("photos_nav");if(f){var l=document.getElementById(n[u]+"_nav");l.style.color="rgba(255, 255, 255, 0.3)"}}}},methods:{openLink:function(e){window.open(e)},closeNav:function(){console.log("close");var e=document.getElementById("nav-input");e.checked=!1}}}),u=s,f=(n("8baf"),n("2877")),l=Object(f["a"])(u,i,c,!1,null,null,null),d=l.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"webgl_comp"},[n("canvas",{staticStyle:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",width:"100vw",height:"100vh"},attrs:{id:"canvas"}})])}],v=(n("d3b7"),n("cfc3"),n("8b09"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),{name:"WebGL",data:function(){var e=null;return{canvas:e}},mounted:function(){this.canvas=document.getElementById("canvas"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.runAll()},methods:{runAll:function(){var e,t,n;n=this.canvas;var r=function(){n.width=window.innerWidth,n.height=window.innerHeight};function a(){var r=e.createTransformFeedback();e.bindTransformFeedback(e.TRANSFORM_FEEDBACK,r);var a=["vPosition","vVelocity"],d=o("vs_transform"),p=o("fs_transform"),m=c(d,p,a),v=[];v[0]=0,v[1]=1;var b=[];b[0]=3,b[1]=3;var h=[];h[0]=e.getUniformLocation(m,"time"),d=o("vs_main"),p=o("fs_main");var g=i(d,p),_=[];_[0]=0,_[1]=1,_[2]=2,_[3]=3,_[4]=4;var A=[];A[0]=3,A[1]=3,A[2]=3,A[3]=3,A[4]=4;var E=[];E[0]=e.getUniformLocation(g,"mvpMatrix"),E[1]=e.getUniformLocation(g,"invMatrix");for(var R=cube(.03),F=s(R.p),y=s(R.n),S=[F,y],C=l(R.i),w=1e5,B=[],x=[],T=[],D=[],P=[],k=3,j=3,O=4,L=0;L<w;L++){var I=10,U=Math.random()*I-I/2,M=Math.random()*I-I/2,N=Math.random()*I-I/2;B[L*k]=U,B[L*k+1]=M,B[L*k+2]=N,x[L*j]=Math.random(),x[L*j+1]=Math.random(),x[L*j+2]=Math.random();var Y=[Math.random(),0,Math.random(),1];T[L*O]=Y[0],T[L*O+1]=Y[1],T[L*O+2]=Y[2],T[L*O+3]=Y[3]}D=new Float32Array(3*w),P=new Float32Array(3*w);var H=s(T),V=s(B),$=s(x),K=u(D),W=u(P),G=function(){var e=V,t=$;V=K,$=W,K=e,W=t},q=new matIV,Z=q.identity(q.create()),J=q.identity(q.create()),z=q.identity(q.create()),X=q.identity(q.create()),Q=q.identity(q.create()),ee=q.identity(q.create());e.enable(e.DEPTH_TEST),e.enable(e.CULL_FACE),e.disable(e.RASTERIZER_DISCARD);var te=Date.now(),ne=0;function re(){ne=(Date.now()-te)/1e3,1,q.lookAt([0,0,15],[0,0,0],[0,1,0],J),q.perspective(90,n.width/n.height,.01,1e3,z),q.multiply(z,J,X),e.useProgram(m),e.uniform1f(h[0],ne),e.bindBuffer(e.ARRAY_BUFFER,V),e.enableVertexAttribArray(v[0]),e.vertexAttribPointer(v[0],b[0],e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,$),e.enableVertexAttribArray(v[1]),e.vertexAttribPointer(v[1],b[1],e.FLOAT,!1,0,0),e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,0,K),e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,1,W),e.enable(e.RASTERIZER_DISCARD),e.beginTransformFeedback(e.POINTS),e.drawArrays(e.POINTS,0,w),e.disable(e.RASTERIZER_DISCARD),e.endTransformFeedback(),e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,0,null),e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,1,null),G(),e.clearColor(0,0,0,1),e.clearDepth(1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.viewport(0,0,n.width,n.height),e.useProgram(g),f(S,_,A),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,C),e.bindBuffer(e.ARRAY_BUFFER,V),e.enableVertexAttribArray(_[2]),e.vertexAttribPointer(_[2],A[2],e.FLOAT,!1,0,0),e.vertexAttribDivisor(2,1),e.bindBuffer(e.ARRAY_BUFFER,$),e.enableVertexAttribArray(_[3]),e.vertexAttribPointer(_[3],A[3],e.FLOAT,!1,0,0),e.vertexAttribDivisor(3,1),e.bindBuffer(e.ARRAY_BUFFER,H),e.enableVertexAttribArray(_[4]),e.vertexAttribPointer(_[4],A[4],e.FLOAT,!1,0,0),e.vertexAttribDivisor(4,1),q.multiply(X,Z,Q),q.inverse(Z,ee),e.uniformMatrix4fv(E[0],!1,Q),e.uniformMatrix4fv(E[1],!1,ee),e.drawElementsInstanced(e.TRIANGLES,R.i.length,e.UNSIGNED_SHORT,0,w),e.flush(),t&&requestAnimationFrame(re)}t=!0,re()}function o(t){var n,r=document.getElementById(t);if(r){switch(r.type){case"x-shader/x-vertex":n=e.createShader(e.VERTEX_SHADER);break;case"x-shader/x-fragment":n=e.createShader(e.FRAGMENT_SHADER);break;default:return}if(e.shaderSource(n,r.text),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))return n;alert(e.getShaderInfoLog(n))}}function i(t,n){var r=e.createProgram();if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS))return e.useProgram(r),r;alert(e.getProgramInfoLog(r))}function c(t,n,r){var a=e.createProgram();if(e.attachShader(a,t),e.attachShader(a,n),e.transformFeedbackVaryings(a,r,e.SEPARATE_ATTRIBS),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS))return e.useProgram(a),a;alert(e.getProgramInfoLog(a))}function s(t){var n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),n}function u(t){var n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t),e.DYNAMIC_COPY),e.bindBuffer(e.ARRAY_BUFFER,null),n}function f(t,n,r){for(var a in t)e.bindBuffer(e.ARRAY_BUFFER,t[a]),e.enableVertexAttribArray(n[a]),e.vertexAttribPointer(n[a],r[a],e.FLOAT,!1,0,0)}function l(t){var n=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Int16Array(t),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),n}window.addEventListener("resize",r),e=n.getContext("webgl2"),e?(console.log("ready"),a()):alert("webgl2 unsupported")}}}),b=v,h=Object(f["a"])(b,p,m,!1,null,"7a8b3d66",null),g=h.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer_comp"},[n("div",{staticClass:"footer_container"},[n("h2",{staticClass:"me_name"},[n("router-link",{staticClass:"home",attrs:{to:"/"}},[e._v("Taichi Uchida")])],1)])])},A=[],E={name:"Footer"},R=E,F=(n("760c"),Object(f["a"])(R,_,A,!1,null,null,null)),y=F.exports,S={name:"App",components:{Header:d,WebGL:g,Footer:y},data:function(){return{images:[n("989f"),n("f544"),n("8f1a"),n("26a4"),n("f6c3"),n("9a36"),n("844d"),n("e67f"),n("52ed"),n("e805"),n("4ca6"),n("de00"),n("ef4c"),n("149f"),n("3099"),n("2552"),n("8dc6"),n("95b4"),n("3581")]}}},C=S,w=(n("034f"),Object(f["a"])(C,a,o,!1,null,null,null)),B=w.exports,x=n("8c4f"),T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",{staticClass:"home_title"},[e._v("Portfolio")]),n("div",{staticClass:"message_container begin"},[n("p",{staticClass:"message begin"},[e._v("これは、僕のポートフォリオです。")])])])}],P={neme:"Home"},k=P,j=(n("94c7"),Object(f["a"])(k,T,D,!1,null,"7a80669b",null)),O=j.exports;r["a"].use(x["a"]);var L=[{path:"/",name:"Home",component:O},{path:"/photos",name:"Photos",component:function(){return n.e("about").then(n.bind(null,"fcb2"))}},{path:"/works",name:"Works",component:function(){return n.e("about").then(n.bind(null,"1822"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=new x["a"]({mode:"history",base:"/portfolio/",routes:L}),U=I;r["a"].config.productionTip=!1,new r["a"]({router:U,render:function(e){return e(B)}}).$mount("#app")},5896:function(e,t,n){e.exports=n.p+"img/instagram-icon.14b0426f.png"},6860:function(e,t,n){},"760c":function(e,t,n){"use strict";var r=n("c3f5"),a=n.n(r);a.a},"844d":function(e,t,n){e.exports=n.p+"img/DSC_0300.192ffa77.jpg"},"85ec":function(e,t,n){},"8baf":function(e,t,n){"use strict";var r=n("6860"),a=n.n(r);a.a},"8dc6":function(e,t,n){e.exports=n.p+"img/DSC_0335.1ae0a9ad.jpg"},"8f1a":function(e,t,n){e.exports=n.p+"img/DSC_0583.4d770020.jpg"},"94c7":function(e,t,n){"use strict";var r=n("9a8b"),a=n.n(r);a.a},"95b4":function(e,t,n){e.exports=n.p+"img/DSC_0514.2f5af5f7.jpg"},"989f":function(e,t,n){e.exports=n.p+"img/DSC_0312.c6541238.jpg"},"9a36":function(e,t,n){e.exports=n.p+"img/DSC_0355.b42f79cf.jpg"},"9a8b":function(e,t,n){},c3f5:function(e,t,n){},c9f3:function(e,t,n){e.exports=n.p+"img/twitter-icon.770e218b.png"},de00:function(e,t,n){e.exports=n.p+"img/DSC_0032.d6b2e640.jpg"},e67f:function(e,t,n){e.exports=n.p+"img/DSC_0306.d4925a4a.jpg"},e805:function(e,t,n){e.exports=n.p+"img/DSC_0255.a1bd92c0.jpg"},ef4c:function(e,t,n){e.exports=n.p+"img/DSC_0278.bad57df3.jpg"},f544:function(e,t,n){e.exports=n.p+"img/DSC_0487.4a63e264.jpg"},f6c3:function(e,t,n){e.exports=n.p+"img/DSC_0469.ffb048a1.jpg"}});
//# sourceMappingURL=app.1052ed54.js.map