(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14f86bc2"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_comp"},[n("div",{staticClass:"header_container"},[n("h1",{staticClass:"name"},[n("router-link",{staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{to:"/"}},[t._v("Taichi Uchida")])],1),n("nav",{staticClass:"nav_for_sections"},[n("ul",{staticClass:"header_ul"},t._l(t.sections,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/"+e,id:e+"_nav"}},[t._v(t._s(e))])],1)})),0)])])])},i=[],o={name:"Header",components:{},data:function(){return{sections:["works","about","gallery"]}}},a=o,c=(n("8baf"),n("2877")),s=Object(c["a"])(a,r,i,!1,null,null,null);e["a"]=s.exports},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),a=n("1d80"),c=n("4840"),s=n("8aa5"),u=n("50c4"),l=n("14c3"),f=n("9263"),p=n("d039"),d=[].push,g=Math.min,h=4294967295,v=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),o=void 0===n?h:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);var c,s,u,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,p+"g");while(c=f.call(v,r)){if(s=v.lastIndex,s>g&&(l.push(r.slice(g,c.index)),c.length>1&&c.index<r.length&&d.apply(l,c.slice(1)),u=c[0].length,g=s,l.length>=o))break;v.lastIndex===c.index&&v.lastIndex++}return g===r.length?!u&&v.test("")||l.push(""):l.push(r.slice(g)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var f=o(t),p=String(this),d=c(f,RegExp),m=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),x=new d(v?f:"^(?:"+f.source+")",y),b=void 0===i?h:i>>>0;if(0===b)return[];if(0===p.length)return null===l(x,p)?[p]:[];var k=0,_=0,E=[];while(_<p.length){x.lastIndex=v?_:0;var w,S=l(x,v?p:p.slice(_));if(null===S||(w=g(u(x.lastIndex+(v?0:_)),p.length))===k)_=s(p,_,m);else{if(E.push(p.slice(k,_)),E.length===b)return E;for(var T=1;T<=S.length-1;T++)if(E.push(S[T]),E.length===b)return E;_=k=w}}return E.push(p.slice(k)),E}]}),!v)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),a=n("9112");for(var c in i){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=n("ae40"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1822:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"works"},[n("router-view"),n("Header"),n("div",{staticClass:"works_container",attrs:{id:"works_container"}},[n("div",{staticClass:"container"},t._l(t.works,(function(e){return n("div",{key:e.key,staticClass:"_work"},[n("h1",{staticClass:"work_title"},[t._v(t._s(e.name))]),n("p"),n("div",{staticClass:"img_container"},[n("div",{staticClass:"img_wrapper",on:{click:function(n){return t.openWork(e)}}},[n("v-lazy-image",{staticClass:"img first",staticStyle:{width:"100%"},attrs:{src:e.images[0]}})],1)])])})),0)]),n("Footer")],1)},i=[],o=(n("4160"),n("ac1f"),n("1276"),n("159b"),n("0418")),a=n("fd2d"),c={name:"Works",components:{Header:o["a"],Footer:a["a"]},data:function(){return{format:"jpg",colors:[[0,.0902,.498],[0,.7333,1]],works:[{name:"Playing TOKYO - DJ VJ Session",tag:"playing_tokyo",messages:["RhizomatiksによるオンラインイベントPlayingTOKYOにてVJを担当した."],images:[n("ad0b")("./playing_tokyo01."+localStorage.format),n("f837")("./playing_tokyo02."+localStorage.format),n("3758")("./playing_tokyo04."+localStorage.format)],tools:"TouchDesigner",date:"2020.09.25",url:"https://playing.super-flying.tokyo/"},{name:"Unperpendiculaire mesdemoiselle",tag:"unperpendiculaire_mesdemoiselle",messages:["Objet αによるエレクトロアコースティックライブのVJ・映像制作を担当した."],images:[n("b073")],cooperators:[{name:"Hiroshi Nakamura",direction:"Saxophone and Electronics",url:""},{name:"Wataru Iwata",direction:"Piano and Electronics",url:""},{name:"Kosaku Namikawa (TParty)",direction:"LiveStreaming",url:"https://twitter.com/73_ch"},{name:"Yuga Tsukuda (TParty)",direction:"3D Modeling",url:"https://yuga-tsukuda.amebaownd.com/"}],tools:"TouchDesinger",date:"2020.06.06",url:"https://youtu.be/XqVY7cO24AU"},{name:"Staying TOKYO - DJ VJ Session",tag:"staying_tokyo",messages:["若手VJ参加募集に応募し, RhizomatiksによるオンラインイベントStayingTOKYOにてVJを担当した."],images:[n("f5d7"),n("3993")],tools:"TouchDesinger",date:"2020.05.22",url:"https://staying.super-flying.tokyo/"},{name:"Kasuga Shinkan 2020 Information",tag:"kasuga_shinkan_2020_information",messages:["筑波大学春日エリアをメインの活動場所とする情報メディア創成学類と図書館情報学類が行った春日新歓2020のWebサイト.","COVID-19の影響で学校に来られない新入生が学校生活に関わる様々な情報を得られるようにと作成を始めた.","デザインとフロントエンドの実装を担当し、委員会用ページの制作も行った."],images:[n("a0d3"),n("bc85")],cooperators:[{name:"Kazuki Yamaura (University of Tsukuba)",direction:"Backend",url:"https://twitter.com/kzkymur"}],tools:"Vue.js, Adobe.XD",date:"2020.04",url:"https://kasugashinkan.com/?#/"}]}},mounted:function(){var t=document.getElementsByClassName("work_title");t.forEach((function(t){var e=t.innerHTML.split("");t.innerHTML="",e.forEach((function(e,n){var r=document.createElement("span");r.innerHTML=e,r.style.color="rgba(0, 0, 0, 0.0)",t.appendChild(r);var i=r.animate([{color:"rgba(0, 0, 0, 0.0)",backgroundColor:"rgb("+255*Math.random(n)+", "+255*Math.random(n+1)+", "+255*Math.random(n+2)+")"},{color:"rgba(0, 0, 0, 1.0)"}],{duration:200,delay:20*n});i.onfinish=function(){r.style.color="rgba(0, 0, 0, 1.0)"}}))}))},methods:{openLink:function(t){""!=t&&window.open(t)},openWork:function(t){this.$router.props=t,this.$router.push({path:"/works/"+t.tag})}}},s=c,u=(n("1e03"),n("2877")),l=Object(u["a"])(s,r,i,!1,null,"a79fbfbe",null);e["default"]=l.exports},"1e03":function(t,e,n){"use strict";var r=n("9a91"),i=n.n(r);i.a},3758:function(t,e,n){var r={"./playing_tokyo04.jpg":"59fd","./playing_tokyo04.webp":"a612"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="3758"},3993:function(t,e,n){t.exports=n.p+"img/staying_tokyo02.8e4d5279.jpg"},"3ff3":function(t,e,n){t.exports=n.p+"img/playing_tokyo02.9d22ca11.webp"},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),a=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"4f09":function(t,e,n){t.exports=n.p+"img/playing_tokyo01.d84b2545.webp"},"59fd":function(t,e,n){t.exports=n.p+"img/playing_tokyo04.48790514.jpg"},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,a,c=String(i(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):o:t?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},6860:function(t,e,n){},"760c":function(t,e,n){"use strict";var r=n("c3f5"),i=n.n(r);i.a},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8baf":function(t,e,n){"use strict";var r=n("6860"),i=n.n(r);i.a},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,c=o,s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(t){var e,n,i,c,f=this,p=u&&f.sticky,d=r.call(f),g=f.source,h=0,v=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,h++),n=new RegExp("^(?:"+g+")",d)),l&&(n=new RegExp("^"+g+"$(?!\\s)",d)),s&&(e=f.lastIndex),i=o.call(p?n:f,v),p?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&a.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9a91":function(t,e,n){},"9bc4":function(t,e,n){t.exports=n.p+"img/playing_tokyo02.9727f9e9.jpg"},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a0d3:function(t,e,n){t.exports=n.p+"img/kasuga_shinkan01.c3e3148e.jpg"},a612:function(t,e,n){t.exports=n.p+"img/playing_tokyo04.8d19b98d.webp"},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad0b:function(t,e,n){var r={"./playing_tokyo01.jpg":"e842","./playing_tokyo01.webp":"4f09"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="ad0b"},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b073:function(t,e,n){t.exports=n.p+"img/unperpendiculaire_mesdemoiselle01.34fbef37.jpg"},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f;return function(d,g,h,v){for(var m,y,x=o(d),b=i(x),k=r(g,h,3),_=a(b.length),E=0,w=v||c,S=e?w(d,_):n?w(d,0):void 0;_>E;E++)if((p||E in b)&&(m=b[E],y=k(m,E,x),t))if(e)S[E]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:s.call(S,m)}else if(l)return!1;return f?-1:u||l?l:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bc85:function(t,e,n){t.exports=n.p+"img/kasuga_shinkan02.6bb329f0.jpg"},c3f5:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),a=n("9263"),c=n("9112"),s=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var g=o(t),h=!i((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),v=h&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!h||!v||"replace"===t&&(!u||!l||p)||"split"===t&&!d){var m=/./[g],y=n(g,""[t],(function(t,e,n,r,i){return e.exec===a?h&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=y[0],b=y[1];r(String.prototype,t,x),r(RegExp.prototype,g,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&c(RegExp.prototype[g],"sham",!0)}},e842:function(t,e,n){t.exports=n.p+"img/playing_tokyo01.440cd812.jpg"},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f5d7:function(t,e,n){t.exports=n.p+"img/staying_tokyo01.57962041.jpg"},f837:function(t,e,n){var r={"./playing_tokyo02.jpg":"9bc4","./playing_tokyo02.webp":"3ff3"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="f837"},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer_comp"},[n("div",{staticClass:"footer_container"},[n("p",{staticClass:"copy"},[t._v("@2020 Taichi Uchida")])])])}],o={name:"Footer"},a=o,c=(n("760c"),n("2877")),s=Object(c["a"])(a,r,i,!1,null,null,null);e["a"]=s.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-14f86bc2.f7d478a1.js.map