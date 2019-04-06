(function(t){function e(e){for(var n,o,c=e[0],i=e[1],u=e[2],f=0,d=[];f<c.length;f++)o=c[f],r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04ef":function(t,e,a){t.exports=a.p+"img/wheel-outside.b02eb1da.png"},"2a10":function(t,e,a){},"47e8":function(t,e,a){"use strict";var n=a("b156"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("2f62"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],c=(a("5c0b"),a("2877")),i={},u=Object(c["a"])(i,s,o,!1,null,null,null),l=u.exports,f=a("bc3a"),d=a.n(f),p=a("a7fe"),h=a.n(p),v=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Wheel",{attrs:{datatype:t.type}}),a("Result"),a("div",{staticClass:"btn-container"},[a("div",{staticClass:"btn",class:{isActive:2017===t.type},on:{click:function(e){return t.changeData(2017)}}},[t._v("2017")]),a("div",{staticClass:"btn",class:{isActive:2018===t.type},on:{click:function(e){return t.changeData(2018)}}},[t._v("2018")])])],1)},g=[],b=a("cebc"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wheel-container"},[n("img",{attrs:{src:a("04ef"),alt:""}}),n("div",{staticClass:"wheel-content",style:{transform:"rotate("+-t.deg/2+"deg)"}},t._l(t.rawData,function(e,a){return n("Sector",{key:a,attrs:{datatype:t.datatype,deg:t.deg,prize:e}})}),1),n("Pointer",{attrs:{deg:t.deg}})],1)},y=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pointer-container"},[a("img",{staticClass:"pointer",style:{transform:"rotate("+t.rotateDeg+"deg)"},attrs:{src:"/hand.svg"}}),a("div",{staticClass:"press-btn",on:{"!click":function(e){return e.preventDefault(),t.startWheelGame(e)}}},[t._v("press")])])},D=[],C=(a("6c7b"),a("ac6a"),{name:"Pointer",data:function(){return{rotateDeg:0}},props:["deg"],computed:{},methods:{startWheelGame:function(){var t=this;if(t.$store.dispatch("setResult",null),0!=this.$store.state.totalCnt){var e=new Array(this.$store.state.totalCnt),a=0;this.$store.state.rawData.forEach(function(t){t.total>0&&(e.fill(t.index,a,a+t.total),a+=t.total)});var n=e[Math.floor(Math.random()*this.$store.state.totalCnt)],r=this.$store.state.rawData[n];setTimeout(function(){t.$store.dispatch("setResult",r),t.$store.dispatch("updateTotal",{resultIndex:n,total:r.total-1}),t.$store.dispatch("getAllCount")},1800),this.rotateDeg=this.rotateDeg+1440+n*this.deg-this.rotateDeg%360}}}}),O=C,x=(a("687f"),Object(c["a"])(O,w,D,!1,null,"6cc74a6e",null)),j=x.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sector-container",class:{active:t.result&&t.result.index==t.prize.index},style:{transform:"rotate("+t.deg*t.prize.index+"deg) skewY(-"+(90-t.deg)+"deg)"}},[a("div",{staticClass:"sector-content",style:{transform:t.transformStyle}},[a("i",{staticClass:"material-icons"},[t._v(t._s(t.prize.icon))]),a("div",{staticClass:"sector-text"},[t._v(t._s(t.prize.text))]),a("span",[t._v("("+t._s(t.prize.total)+")")])]),t._m(0)])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sector-decoration"},[a("span")])}],A={name:"Sector",props:["prize","deg","datatype"],methods:{},computed:Object(b["a"])({},Object(r["b"])(["result"]),{transformStyle:function(){return 2017===this.datatype?"skewY(".concat(90-this.deg,"deg) rotate(").concat(this.deg/2,"deg) translate(8px,-75px)"):"skewY(".concat(90-this.deg,"deg) rotate(").concat(this.deg/2,"deg) translate(-5px,-130px)")}}),mounted:function(){},created:function(){}},E=A,S=(a("a191"),Object(c["a"])(E,T,$,!1,null,"4fb8ae15",null)),R=S.exports,P={name:"Wheel",data:function(){return{}},props:["datatype"],components:{Pointer:j,Sector:R},computed:Object(b["a"])({},Object(r["b"])(["rawData"]),{deg:function(){return 360/this.rawData.length}}),methods:{getData:function(){this.$store.dispatch("getData",this.datatype)}},created:function(){this.getData()}},k=P,z=(a("47e8"),Object(c["a"])(k,_,y,!1,null,"e106aa2c",null)),L=z.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.result?a("div",{staticClass:"result-container"},[t._m(0),a("div",{staticClass:"result"},[a("span",[t._v("YOU GET A FREE...")]),a("div",{staticClass:"result-text"},[t._v(t._s(t.result.text))])])]):t._e()},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("\n    WELL\n    "),a("br"),t._v("DONE!\n  ")])}],U={name:"Result",data:function(){return{}},props:[],computed:Object(b["a"])({},Object(r["b"])(["result"])),methods:{}},Y=U,G=(a("a4c4"),Object(c["a"])(Y,W,M,!1,null,"32522b4d",null)),N=G.exports,I={name:"home",data:function(){return{type:2017}},components:{Wheel:L,Result:N},computed:Object(b["a"])({},Object(r["b"])(["rawData"])),methods:{changeData:function(t){this.type!=t&&(this.type=t,this.$store.dispatch("getData",this.type),this.$store.dispatch("setResult",null))}}},J=I,F=(a("9dba"),Object(c["a"])(J,m,g,!1,null,"64d42fe9",null)),q=F.exports;n["a"].use(v["a"]);var B=new v["a"]({routes:[{path:"/",name:"home",component:q}]});n["a"].use(r["a"]);var H=new r["a"].Store({strict:!0,state:{rawData:[],totalCnt:0,result:null},actions:{getData:function(t,e){var a=2017===e?"/data.json":"/data20.json";d.a.get(a).then(function(e){t.commit("RAWDATA",e.data.prizes),t.dispatch("getAllCount")})},getAllCount:function(t){var e=0;t.state.rawData.forEach(function(t){e+=t.total}),t.commit("TOTALCNT",e)},updateTotal:function(t,e){t.commit("UPDATETOTAL",e)},setResult:function(t,e){t.commit("RESULT",e)}},mutations:{RAWDATA:function(t,e){t.rawData=e},TOTALCNT:function(t,e){t.totalCnt=e},UPDATETOTAL:function(t,e){t.rawData[e.resultIndex].total=e.total},RESULT:function(t,e){t.result=e}},getters:{rawData:function(t){return t.rawData},totalCnt:function(t){return t.totalCnt},result:function(t){return t.result}}});n["a"].config.productionTip=!1,n["a"].use(r["a"]),n["a"].use(h.a,d.a),new n["a"]({router:B,store:H,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(t,e,a){},"687f":function(t,e,a){"use strict";var n=a("751e"),r=a.n(n);r.a},"751e":function(t,e,a){},"912e":function(t,e,a){},"9dba":function(t,e,a){"use strict";var n=a("efc4"),r=a.n(n);r.a},a191:function(t,e,a){"use strict";var n=a("912e"),r=a.n(n);r.a},a4c4:function(t,e,a){"use strict";var n=a("2a10"),r=a.n(n);r.a},b156:function(t,e,a){},efc4:function(t,e,a){}});
//# sourceMappingURL=app.023dfd16.js.map