(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f858052e"],{"2e3f":function(t,e,a){},"4e55":function(t,e,a){"use strict";var i=a("2e3f"),s=a.n(i);s.a},"57e8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-area"},[a("div",{staticClass:"header-top-area"},[a("div",{staticClass:"headerTop row"},[a("div",{staticClass:"lang col-4 pl-md-5"},[a("i",{staticClass:"fas fa-language"}),a("span",{staticClass:"pl-2 langSpan",on:{click:t.toCH}},[t._v("中文")]),t._v(" | "),a("span",{staticClass:"langSpan",on:{click:t.toEN}},[t._v(" EN")])]),a("div",{staticClass:"topLogo col-4 text-center"},[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:"/images/logo.png",alt:"logo",height:"50"},on:{click:function(e){return t.$router.push("/")}}})]),a("div",{staticClass:"user col-4 text-right pr-md-5"},[a("div",[a("i",{staticClass:"far fa-user-circle"}),t.userExist?t._e():a("span",{staticClass:"pl-2"},[a("a",{attrs:{href:"/#/login/login"}},[t._v("登录")]),t._v(" | "),a("a",{attrs:{href:"/#/login/register"}},[t._v(" 注册")])]),t.userExist?a("span",{staticClass:"pl-2"},[a("a",{attrs:{href:"/#/dashboard"}},[t._v("Welcome, "+t._s(t.userExist))])]):t._e()])])]),a("div",{staticClass:"mainNav"},[a("nav",[a("ul",[a("li",{on:{click:function(e){return t.$router.push("/home")}}},[a("a",{attrs:{href:"#"}},[t._v(t._s(t.$t("lang.home"))+" ")])]),a("el-divider",{attrs:{direction:"vertical"}}),a("li",{on:{click:function(e){return t.$router.push("/collaborate")}}},[a("a",{attrs:{href:"#"}},[t._v(t._s(t.$t("lang.coo")))])]),a("el-divider",{attrs:{direction:"vertical"}}),a("li",{on:{click:function(e){return t.$router.push("/aboutus")}}},[a("a",{attrs:{href:"#"}},[t._v(t._s(t.$t("lang.about")))])]),a("el-divider",{attrs:{direction:"vertical"}}),a("li",{on:{click:function(e){return t.$router.push("/member")}}},[a("a",{attrs:{href:"#"}},[t._v("会员")])]),a("el-divider",{attrs:{direction:"vertical"}}),a("li",{staticClass:"active",on:{click:function(e){return t.$router.push("/moreInfo")}}},[a("a",{attrs:{href:"#"}},[t._v("帮助中心")])])],1)])])]),a("div",{staticClass:"helpcenter"},[a("div",{staticClass:"banner1"},[t._m(0),a("div",{staticClass:"row helpNav"},t._l(t.helpNav,(function(e,i){return a("div",{key:i,staticClass:"col-4 box wow zoomIn"},[a("div",{staticClass:"container mb-5",class:t.active==e.routeLink?"active":"",on:{click:function(a){return t.helpNavRouter(e.routeLink)}}},[a("img",{staticClass:"mt-3",attrs:{src:"/images/"+e.img,alt:"item.img"}}),a("p",{staticClass:"mt-3 mb-3"},[t._v(t._s(e.title))])])])})),0)])]),a("router-view",{staticClass:"mb-5",attrs:{id:"helpitem"}}),a("footer1"),a("back-top",{attrs:{color:"#409EFF",size:1.1,slow:10,bottom:"5%"}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pageText wow fadeInDown"},[a("p",{staticClass:"mb-4"},[t._v("帮助中心")])])}],r=a("e00f"),n={name:"MoreInfo",components:{footer1:r["a"]},data:function(){return{helpNav:[{title:"相关服务",img:"service.png",routeLink:"/moreInfo"},{title:"相关收费",img:"fee.png",routeLink:"/moreInfo/relevantcharges"},{title:"海关及税收",img:"tax.png",routeLink:"/moreInfo/taxation"},{title:"货类相关",img:"good.png",routeLink:"/moreInfo/relevantgoods"},{title:"渠道相关",img:"channel.png",routeLink:"/moreInfo/relevantchannel"},{title:"售后须知",img:"aftersale.png",routeLink:"/moreInfo/aftersaleinfo"}],active:"/moreInfo"}},computed:{userExist:function(){return this.$store.state.userSelf.username}},watch:{$route:function(t){this.active=t.path}},methods:{helpNavRouter:function(t){this.$router.push(t),document.getElementById("helpitem").scrollIntoView()},toCH:function(){this.$i18n.locale="zh-CN",localStorage.setItem("lang","zh-CN")},toEN:function(){this.$i18n.locale="en-US",localStorage.setItem("lang","en-US")}}},o=n,l=(a("4e55"),a("2877")),c=Object(l["a"])(o,i,s,!1,null,"a4fda838",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-f858052e.ef7d0575.js.map