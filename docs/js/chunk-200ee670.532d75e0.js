(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-200ee670"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_comp"},[n("div",{staticClass:"header_container"},[n("h1",{staticClass:"name"},[n("router-link",{staticStyle:{"text-decoration":"none",color:"#FFFFFF"},attrs:{to:"/"}},[t._v("Taichi Uchida")])],1),n("nav",{staticClass:"nav_for_sections"},[n("ul",{staticClass:"header_ul"},t._l(t.sections,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/"+e,id:e+"_nav"}},[t._v(t._s(e))])],1)})),0)])])])},i=[],a={name:"Header",components:{},data:function(){return{sections:["works","about","gallery"]}}},o=a,c=(n("8baf"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,null,null);e["a"]=s.exports},"0713":function(t,e,n){},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),o=n("1d80"),c=n("4840"),s=n("8aa5"),u=n("50c4"),l=n("14c3"),f=n("9263"),d=n("d039"),p=[].push,h=Math.min,g=4294967295,v=!d((function(){return!RegExp(g,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),a=void 0===n?g:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,a);var c,s,u,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,d+"g");while(c=f.call(v,r)){if(s=v.lastIndex,s>h&&(l.push(r.slice(h,c.index)),c.length>1&&c.index<r.length&&p.apply(l,c.slice(1)),u=c[0].length,h=s,l.length>=a))break;v.lastIndex===c.index&&v.lastIndex++}return h===r.length?!u&&v.test("")||l.push(""):l.push(r.slice(h)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,n):r.call(String(i),e,n)},function(t,i){var o=n(r,t,this,i,r!==e);if(o.done)return o.value;var f=a(t),d=String(this),p=c(f,RegExp),m=f.unicode,x=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),y=new p(v?f:"^(?:"+f.source+")",x),b=void 0===i?g:i>>>0;if(0===b)return[];if(0===d.length)return null===l(y,d)?[d]:[];var E=0,k=0,_=[];while(k<d.length){y.lastIndex=v?k:0;var S,C=l(y,v?d:d.slice(k));if(null===C||(S=h(u(y.lastIndex+(v?0:k)),d.length))===E)k=s(d,k,m);else{if(_.push(d.slice(E,k)),_.length===b)return _;for(var T=1;T<=C.length-1;T++)if(_.push(C[T]),_.length===b)return _;k=E=S}}return _.push(d.slice(E)),_}]}),!v)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("17c2"),o=n("9112");for(var c in i){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),a=n("ae40"),o=i("forEach"),c=a("forEach");t.exports=o&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1822:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"works"},[n("router-view"),n("Header"),n("div",{staticClass:"works_container",attrs:{id:"works_container"}},[n("div",{staticClass:"container"},t._l(t.works,(function(e){return n("div",{key:e.key,staticClass:"_work"},[n("h1",{staticClass:"work_title"},[t._v(t._s(e.name))]),n("p"),n("div",{staticClass:"img_container"},[n("div",{staticClass:"img_wrapper",on:{click:function(n){return t.openWork(e)}}},[n("v-lazy-image",{staticClass:"img first",attrs:{src:e.images[0]}})],1)])])})),0)]),n("Footer")],1)},i=[],a=(n("4160"),n("ac1f"),n("1276"),n("159b"),n("0418")),o=n("fd2d"),c={name:"Works",components:{Header:a["a"],Footer:o["a"]},data:function(){return{colors:[[0,.0902,.498],[0,.7333,1]],works:[{name:"Playing TOKYO - DJ VJ Session",tag:"playing_tokyo",messages:["RhizomatiksによるオンラインイベントPlayingTOKYOにてVJを担当した."],images:[n("3bcc"),n("fabc"),n("043a"),n("d89c")],tools:"TouchDesigner",date:"2020.09.25",url:"https://playing.super-flying.tokyo/"},{name:"Unperpendiculaire mesdemoiselle",tag:"unperpendiculaire_mesdemoiselle",messages:["Objet αによるエレクトロアコースティックライブのVJ・映像制作を担当した."],images:[n("b073")],cooperators:[{name:"Hiroshi Nakamura",direction:"Saxophone and Electronics",url:""},{name:"Wataru Iwata",direction:"Piano and Electronics",url:""},{name:"Kosaku Namikawa (TParty)",direction:"LiveStreaming",url:"https://twitter.com/73_ch"},{name:"Yuga Tsukuda (TParty)",direction:"3D Modeling",url:"https://yuga-tsukuda.amebaownd.com/"}],tools:"TouchDesinger",date:"2020.06.06",url:"https://youtu.be/XqVY7cO24AU"},{name:"Staying TOKYO - DJ VJ Session",tag:"staying_tokyo",messages:["若手VJ参加募集に応募し, RhizomatiksによるオンラインイベントStayingTOKYOにてVJを担当した."],images:[n("e97e"),n("b2e7")],tools:"TouchDesinger",date:"2020.05.22",url:"https://staying.super-flying.tokyo/"},{name:"Kasuga Shinkan 2020 Information",tag:"kasuga_shinkan_2020_information",messages:["筑波大学春日エリアをメインの活動場所とする情報メディア創成学類と図書館情報学類が行った春日新歓2020のWebサイト.","COVID-19の影響で学校に来られない新入生が学校生活に関わる様々な情報を得られるようにと作成を始めた.","デザインとフロントエンドの実装を担当し、委員会用ページの制作も行った."],images:[n("1867"),n("d581")],cooperators:[{name:"Kazuki Yamaura (University of Tsukuba)",direction:"Backend",url:"https://twitter.com/kzkymur"}],tools:"Vue.js, Adobe.XD",date:"2020.04",url:"https://kasugashinkan.com/?#/"}]}},mounted:function(){var t=document.getElementsByClassName("work_title");t.forEach((function(t){var e=t.innerHTML.split("");t.innerHTML="",e.forEach((function(e,n){var r=document.createElement("span");r.innerHTML=e,r.style.color="rgba(0, 0, 0, 0.0)",t.appendChild(r);var i=r.animate([{color:"rgba(0, 0, 0, 0.0)",backgroundColor:"rgb(0, 0, 0)"},{color:"rgba(0, 0, 0, 1.0)"}],{duration:200,delay:20*n});i.onfinish=function(){r.style.color="rgba(0, 0, 0, 1.0)"}}))}))},methods:{openLink:function(t){""!=t&&window.open(t)},openWork:function(t){this.$router.props=t,this.$router.push({path:"/works/"+t.tag})}}},s=c,u=(n("58e0"),n("2877")),l=Object(u["a"])(s,r,i,!1,null,"cd990dca",null);e["default"]=l.exports},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"58e0":function(t,e,n){"use strict";var r=n("0713"),i=n.n(r);i.a},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,o,c=String(i(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):a:t?c.slice(s,s+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),o=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},6860:function(t,e,n){},"760c":function(t,e,n){"use strict";var r=n("c3f5"),i=n.n(r);i.a},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8baf":function(t,e,n){"use strict";var r=n("6860"),i=n.n(r);i.a},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(t){var e,n,i,c,f=this,d=u&&f.sticky,p=r.call(f),h=f.source,g=0,v=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),n=new RegExp("^(?:"+h+")",p)),l&&(n=new RegExp("^"+h+"$(?!\\s)",p)),s&&(e=f.lastIndex),i=a.call(d?n:f,v),d?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&o.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),a=n("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var n=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,l=a(e,0)?e[0]:s,f=a(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,l,f)}))}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),o=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(p,h,g,v){for(var m,x,y=a(p),b=i(y),E=r(h,g,3),k=o(b.length),_=0,S=v||c,C=e?S(p,k):n?S(p,0):void 0;k>_;_++)if((d||_ in b)&&(m=b[_],x=E(m,_,y),t))if(e)C[_]=x;else if(x)switch(t){case 3:return!0;case 5:return m;case 6:return _;case 2:s.call(C,m)}else if(l)return!1;return f?-1:u||l?l:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c3f5:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),o=n("9263"),c=n("9112"),s=a("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var h=a(t),g=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),v=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!v||"replace"===t&&(!u||!l||d)||"split"===t&&!p){var m=/./[h],x=n(h,""[t],(function(t,e,n,r,i){return e.exec===o?g&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=x[0],b=x[1];r(String.prototype,t,y),r(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&c(RegExp.prototype[h],"sham",!0)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer_comp"},[n("div",{staticClass:"footer_container"},[n("p",{staticClass:"copy"},[t._v("@2020 Taichi Uchida")])])])}],a={name:"Footer"},o=a,c=(n("760c"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,null,null);e["a"]=s.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-200ee670.532d75e0.js.map