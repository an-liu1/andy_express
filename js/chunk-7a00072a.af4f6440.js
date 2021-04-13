(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a00072a"],{3803:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-pagination",{attrs:{background:"",layout:t.pagerLayout,"current-page":t.currentPage},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})},n=[],s=a("750b"),c={name:"pagination",props:["pager","data","limitNumber"],setup:function(t,e){var a=e.emit,r=Object(s["a"])((function(){return t.data.length>=t.limitNumber?t.pager:"prev, pager, jumper, ->, total, slot"})),n=Object(s["f"])(),c=function(t){n.value=t,a("pagechange",t)};return{pagerLayout:r,currentPage:n,handleCurrentChange:c}}},i=c,o=a("2877"),l=Object(o["a"])(i,r,n,!1,null,null,null);e["a"]=l.exports},"42ff":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 ml-4"},[a("div",[a("el-breadcrumb",{staticClass:"border el-breadcrumb-outer",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{staticClass:"mt-3 ml-3"},[t._v("订单详情")]),a("el-breadcrumb-item",{staticClass:"mt-3"},[a("span",{staticStyle:{color:"#f39c12"}},[a("i",{staticClass:"fas fa-file-signature"}),t._v(" 签收评价")])]),a("div",{staticClass:"float-right mt-2 mr-3"},[a("el-input",{staticClass:"filter-item searchInputWidth",attrs:{type:"text",placeholder:"搜索","prefix-icon":"el-icon-search",clearable:""},on:{input:t.handleQuery},model:{value:t.keyWord,callback:function(e){t.keyWord=e},expression:"keyWord"}})],1)],1),a("el-table",{staticClass:"borderRadius mt-5",attrs:{data:t.TableData,border:"","row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"orderId",label:"订单号",align:"center",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.orderId.substr(-10)))])]}}])}),a("el-table-column",{attrs:{prop:"expressCompany",label:"国际快递公司",align:"center",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.expressCompany))])]}}])}),a("el-table-column",{attrs:{prop:"trackingNumber",label:"国际单号",align:"center",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.trackingNumber))])]}}])}),a("el-table-column",{attrs:{prop:"trackingContact",label:"收件人",align:"center",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.trackingContact))])]}}])}),a("el-table-column",{attrs:{prop:"trackingAddress",label:"收件地址",align:"center",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.trackingAddress))])]}}])}),a("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"packageTime",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(t._f("moment")(r.packageTime,"timezone","Asia/Shanghai","YYYY-MM-DD HH:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"快递寄送情况",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[a("el-link",{attrs:{type:"warning",target:"_blank",href:t.returnTrackingLink(r.expressCompany,r.trackingNumber)}},[t._v("点击查询")])],1)]}}])}),a("el-table-column",{attrs:{prop:"status",label:"签收",width:"160",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("el-checkbox",{model:{value:r.signstatus,callback:function(e){t.$set(r,"signstatus",e)},expression:"row.signstatus"}}),!0===r.signstatus?a("div",[t._v(" 留下您的评价吧： "),a("el-rate",{attrs:{"show-score":"",colors:t.colors},model:{value:r.commentvalue,callback:function(e){t.$set(r,"commentvalue",e)},expression:"row.commentvalue"}})],1):t._e()]}}])})],1),a("div",{staticClass:"mt-5 float-right"},[!0===t.SignSwitch?a("el-button",{attrs:{type:"primary"},on:{click:t.submitSignComment}},[t._v("确认签收")]):a("el-button",{attrs:{type:"primary",disabled:""}},[t._v("确认签收")])],1),a("pagination",{staticClass:"mt-5 float-right",attrs:{data:t.TableData,pager:"prev, pager, next, jumper, ->, total, slot",limitNumber:"5"},on:{pagechange:t.pageChange}})],1)])},n=[],s=a("750b"),c=a("3803"),i={components:{pagination:c["a"]},setup:function(t,e){var a=e.root,r=a.$store,n=a.$message;Object(s["d"])((function(){r.dispatch("getOrderForm",{status:"已发货",page:"0",size:"5"})}));var c=Object(s["f"])(!1),i=Object(s["c"])("reload"),o=Object(s["a"])((function(){return r.state.selforderlist})),l=Object(s["f"])(""),u=Object(s["f"])([]),p=function(){var t={keyword:{searchString:l.value},status:"已发货",page:"0",size:"5"};r.dispatch("searchOrdersForUser",t).then((function(t){u.value=t.data})).catch((function(){}))},d=Object(s["a"])((function(){var t=[];return t=""!=l.value?u.value:o.value,t.map((function(t){return{orderId:t._id,expressCompany:t.orderExpressRetail,trackingNumber:t.orderShippingNumber,trackingContact:"".concat(t.shippingRecevier,", ").concat(t.shippingPhone),trackingAddress:"".concat(t.shippingAddress,", ").concat(t.shippingCity,", ").concat(t.shippingProvince,", ").concat(t.shippingCountry,", ").concat(t.shippingPostcode),packageTime:t.updatedAt,signstatus:!1,commentvalue:0}}))})),g=function(t){var e=t.row;return!0===e.signstatus?"warning-row":""},m=Object(s["e"])(["#99A9BF","#F7BA2A","#FF9900"]),f=function(t){""===l.value?r.dispatch("getOrderForm",{status:"已发货",page:t-1,size:5}):r.dispatch("searchOrdersForUser",{keyword:{searchString:l.value},status:"已发货",page:t-1,size:5}).then((function(t){u.value=t.data})).catch((function(){}))},b=Object(s["f"])(!1);Object(s["g"])((function(){0==d.value.filter((function(t){return 1==t.signstatus})).length?b.value=!1:b.value=!0}));var v=function(){c.value=!0;var t=d.value.filter((function(t){return!0===t.signstatus})).map((function(t){return{id:t.orderId,is_delivery:1,orderEvaluate:t.commentvalue}}));r.dispatch("isDeliveryAndRank",t).then((function(){n.success("感谢您的签收以及评分！"),c.value=!1,i()})).catch((function(){c.value=!1}))},h=function(t,e){if("DHL"===t){var a="https://www.dhl.com/en/express/tracking.html?AWB=",r="&brand=DHL";return a+e+r}if("UPS"===t){var s="https://www.ups.com/track?loc=en_CA&tracknum=",c="&requester=WT/trackdetails";return s+e+c}if("FedEx"===t){var i="https://www.fedex.com/apps/fedextrack/index.html?tracknumbers=",o="&cntry_code=ca";return i+e+o}if("TNT"===t){var l="https://www.tnt.com/express/en_ca/site/tracking.html?searchType=con&cons=";return l+e}if("EMS"===t){var u="https://t.17track.net/en#nums=";return u+e}"Special"===t&&n.error("暂无Special速递查询信息")};return{loading:c,keyWord:l,handleQuery:p,pageChange:f,TableData:d,packageTrackingList:o,tableRowClassName:g,colors:m,SignSwitch:b,submitSignComment:v,returnTrackingLink:h}}},o=i,l=(a("9508"),a("2877")),u=Object(l["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},"822f":function(t,e,a){},9508:function(t,e,a){"use strict";var r=a("822f"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-7a00072a.af4f6440.js.map