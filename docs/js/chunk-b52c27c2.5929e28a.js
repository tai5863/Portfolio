(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b52c27c2"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_comp"},[n("div",{staticClass:"header_container"},[n("h1",{staticClass:"name"},[n("router-link",{staticStyle:{"text-decoration":"none",color:"#FFFFFF"},attrs:{to:"/"}},[t._v("Taichi Uchida")])],1),n("nav",{staticClass:"nav_for_sections"},[n("ul",{staticClass:"header_ul"},t._l(t.sections,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/"+e,id:e+"_nav"}},[t._v(t._s(e))])],1)})),0)])])])},a=[],i=(n("4de4"),n("fb6a"),{name:"Header",components:{},data:function(){return{sections:["works","about","picture"]}},watch:{$route:function(t){for(var e=["/works","/about","/picture"],n=[],r=0;r<e.length;r++)n.push(e[r].slice(1));if("/"!=t.path){var a=t.path.slice(1),i=n.filter((function(t){return t!=a})),o=document.getElementById(a+"_nav");o.style.color="black";for(var c=0;c<i.length;c++){var s=document.getElementById(i[c]+"_nav");s.style.color="rgba(0, 0, 0, 0.3)"}}else for(var l=0;l<n.length;l++){var u=document.getElementById("photos_nav");if(u){var f=document.getElementById(n[l]+"_nav");f.style.color="rgba(0, 0, 0, 0.3)"}}}}}),o=i,c=(n("8baf"),n("2877")),s=Object(c["a"])(o,r,a,!1,null,null,null);e["a"]=s.exports},"1a29":function(t,e,n){t.exports=n.p+"img/git-icon.e699b21f.png"},3581:function(t,e,n){t.exports=n.p+"img/MyProfile.10dead1e.jpg"},"4e3f":function(t,e,n){},"4e52":function(t,e,n){"use strict";var r=n("4e3f"),a=n.n(r);a.a},5896:function(t,e,n){t.exports=n.p+"img/instagram-icon.1585d731.png"},"5d67":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mixed_color_noise_comp",staticStyle:{position:"absolute","z-index":"-1000"}},[n("canvas",{attrs:{id:"canvas"}})])}],i=(n("d3b7"),n("cfc3"),n("8b09"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),{name:"MixedColorNoise",props:{colors:Array},data:function(){var t=null,e=this.colors;return{canvas:t,renderColors:e}},mounted:function(){this.canvas=document.getElementById("canvas"),this.runAll()},methods:{runAll:function(){var t=this.canvas,e=t.getContext("webgl"),n=this,r=function(){t.width=document.body.scrollWidth,t.height=document.body.scrollHeight};addEventListener("resize",r),r();var a=0,i=function(){a+=.005};addEventListener("mousewheel",i),e.viewport(0,0,t.width,t.height);var o=l("vs","mixed_color_noise_fs"),c=u(o,["col1","col2","time","scale","noiseScale","wheel","resolution"]);function s(){var r=[-1,1,0,1,1,0,-1,-1,0,1,-1,0],i=[0,2,1,1,2,3],s=f(r),l=d(i),u=e.getAttribLocation(o,"position");function m(r){e.useProgram(o),e.uniform3fv(c["col1"],n.renderColors[0]),e.uniform3fv(c["col2"],n.renderColors[1]),e.uniform1f(c["time"],r),e.uniform1f(c["scale"],1),e.uniform1f(c["noiseScale"],3),e.uniform1f(c["wheel"],a),e.uniform2fv(c["resolution"],[t.width,t.height]),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}e.bindBuffer(e.ARRAY_BUFFER,s),e.enableVertexAttribArray(u),e.vertexAttribPointer(u,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l);var h=(new Date).getTime(),_=0,v=0;function g(){e.viewport(0,0,t.width,t.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);var n=(new Date).getTime(),r=5e-5*(n-h);_+=r,_-v>1.5&&(v+=1.5),h=n,m(_),e.flush(),setTimeout(g,1e3/60)}g()}function l(t,n){function r(t){var n,r=document.getElementById(t);if(r){switch(r.type){case"x-shader/x-vertex":n=e.createShader(e.VERTEX_SHADER);break;case"x-shader/x-fragment":n=e.createShader(e.FRAGMENT_SHADER);break;default:return}if(e.shaderSource(n,r.text),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))return n;throw e.getShaderInfoLog(n)}}var a=r(t),i=r(n),o=e.createProgram();if(e.attachShader(o,a),e.attachShader(o,i),e.linkProgram(o),e.getProgramParameter(o,e.LINK_STATUS))return e.useProgram(o),o;alert(e.getProgramInfoLog(o))}function u(t,n){for(var r={},a=0;a<n.length;a++)r[n[a]]=e.getUniformLocation(t,n[a]);return r}function f(t){var n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),n}function d(t){var n=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Int16Array(t),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),n}s()}}}),o=i,c=n("2877"),s=Object(c["a"])(o,r,a,!1,null,null,null);e["a"]=s.exports},6860:function(t,e,n){},"8baf":function(t,e,n){"use strict";var r=n("6860"),a=n.n(r);a.a},c9f3:function(t,e,n){t.exports=n.p+"img/twitter-icon.19de2589.png"},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("Header"),n("MixedColorNoise",{attrs:{colors:t.colors}}),n("div",{staticClass:"about_container"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"intro_container"},[n("h1",{staticClass:"name"},[t._v("Taichi Uchida")]),n("h2",{staticClass:"position"},[t._v("Visual Artist / Programmer")]),n("p",{staticClass:"intro"},[t._v("2001年、京都府出身。2019年より筑波大学情報メディア創成学類に所属。目に見える何かを作ることが好き。プログラミングを用いた映像表現やWebフロント、写真などに興味を持つ。")]),n("p",{staticClass:"skills"},[t._v("WebGL / TouchDesigner / GLSL")]),n("nav",{staticClass:"accounts"},[n("ul",{staticClass:"footer_ul"},t._l(t.items,(function(e){return n("li",{key:e.id},[n("a",[n("img",{staticClass:"icon",attrs:{src:e.icon,border:"0",width:"25"},on:{click:function(n){return t.openLink(e.link)}}})])])})),0)])])])])],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"photo_container"},[r("img",{staticClass:"photo",attrs:{src:n("3581")}})])}],i=n("0418"),o=n("5d67"),c={name:"About",components:{Header:i["a"],MixedColorNoise:o["a"]},data:function(){return{colors:[[1,0,0],[1,1,1]],items:[{icon:n("c9f3"),link:"https://twitter.com/_t_ai__"},{icon:n("5896"),link:"https://www.instagram.com/_t_ai__/"},{icon:n("1a29"),link:"https://github.com/tai5863/"}]}},destroyed:function(){window.scroll(0,0)},methods:{openLink:function(t){window.open(t)}}},s=c,l=(n("4e52"),n("2877")),u=Object(l["a"])(s,r,a,!1,null,"68f20953",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-b52c27c2.5929e28a.js.map