(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7328e7e6"],{"1f28":function(e,t,r){},"60c8":function(e,t,r){"use strict";var n=r("1f28"),o=r.n(n);o.a},ebe0:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5 ml-4"},[r("div",[r("el-breadcrumb",{staticClass:"border el-breadcrumb-outer",attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{staticClass:"mt-3 ml-3"},[e._v("订单详情")]),r("el-breadcrumb-item",{staticClass:"mt-3"},[r("span",{staticStyle:{color:"#f39c12"}},[r("i",{staticClass:"fas fa-pallet"}),e._v(" 已入库")])]),r("div",{staticClass:"float-right mt-2 mr-3"},[r("el-input",{staticClass:"filter-item searchInputWidth",attrs:{type:"text",placeholder:"搜索","prefix-icon":"el-icon-search",clearable:""},on:{input:e.handleQuery},model:{value:e.keyWord,callback:function(t){e.keyWord=t},expression:"keyWord"}})],1)],1),r("div",{staticClass:"mt-5"},[r("el-table",{staticClass:"borderRadius",attrs:{data:e.tableData,"highlight-current-row":"","max-height":"600px",border:""},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{fixed:"",prop:"id",label:"货物号",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.id.substr(-10)))])]}}])}),r("el-table-column",{attrs:{fixed:"",prop:"goodname",label:"货物名称",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.goodname))])]}}])}),r("el-table-column",{attrs:{fixed:"",prop:"goodNumber",label:"货物数量",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.goodNumber))])]}}])}),r("el-table-column",{attrs:{fixed:"",prop:"localExpressNumber",label:"国内快递单号",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.localExpressNumber))])]}}])}),r("el-table-column",{attrs:{prop:"picture",label:"包裹图片",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[r("el-image",{attrs:{src:t.picture,fit:"fill","preview-src-list":[t.picture],lazy:""}})]}}])}),r("el-table-column",{attrs:{prop:"warehousenumber",label:"库位号",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.warehousenumber))])]}}])}),r("el-table-column",{attrs:{prop:"weight",label:"重量(kg)",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.weight))])]}}])}),r("el-table-column",{attrs:{prop:"length",label:"尺寸(cm)",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.length?r("p",[e._v("长度："+e._s(n.length))]):e._e(),n.width?r("p",[e._v("宽度："+e._s(n.width))]):e._e(),n.height?r("p",[e._v("高度："+e._s(n.height))]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"goodPaidWeight",label:"计费重量(kg)",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",{staticClass:"text-danger"},[e._v(e._s(n.goodPaidWeight))])]}}])}),r("el-table-column",{attrs:{prop:"type",label:"类别",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[0===n.type?r("span",[e._v("粉末货物")]):e._e(),1===n.type?r("span",[e._v("液体货物")]):e._e(),2===n.type?r("span",[e._v("食品货物")]):e._e(),3===n.type?r("span",[e._v("敏感类")]):e._e(),4===n.type?r("span",[e._v("普通货物")]):e._e(),5===n.type?r("span",[e._v("体积货物")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"storageTime",label:"入库时间",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(e._f("moment")(n.storageTime,"timezone","Asia/Shanghai","YYYY-MM-DD HH:mm:ss")))])]}}])}),r("el-table-column",{attrs:{prop:"goodStatus",label:"货物状态",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",{staticClass:"text-success"},[e._v(e._s(n.goodStatus))])]}}])}),r("el-table-column",{attrs:{prop:"goodNotes",label:"客户备注",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.goodNotes))])]}}])}),r("el-table-column",{attrs:{prop:"note",label:"客服备注",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.note))])]}}])})],1)],1),r("div",{staticClass:"mt-5 mb-5 float-right"},[e.multipleSelection.length>0?r("div",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.shippingCountryDialogVisible=!0}}},[e._v("提交打包")]),r("el-button",{attrs:{type:"warning"},on:{click:function(t){e.returnDialogVisible=!0}}},[e._v("选择退货")])],1):r("div",[r("el-button",{attrs:{type:"primary",disabled:""}},[e._v("提交打包")]),r("el-button",{attrs:{type:"warning",disabled:""}},[e._v("选择退货")])],1)]),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:"请选择运送到的国家",visible:e.shippingCountryDialogVisible,width:"420px",center:""},on:{"update:visible":function(t){e.shippingCountryDialogVisible=t}}},[r("el-select",{staticStyle:{"margin-left":"100px"},attrs:{placeholder:"请选择国家"},model:{value:e.shippingCountry,callback:function(t){e.shippingCountry=t},expression:"shippingCountry"}},e._l(e.shippingCountryOptions,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.shippingCountryDialogVisible=!1}}},[e._v("取消")]),""!==e.shippingCountry?r("el-button",{attrs:{type:"primary"},on:{click:e.createOrder}},[e._v("确定")]):r("el-button",{attrs:{type:"primary",disabled:""}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"温馨提示",visible:e.returnDialogVisible,width:"400px",center:""},on:{"update:visible":function(t){e.returnDialogVisible=t}}},[r("p",{staticClass:"dialog-notice"},[r("i",{staticClass:"fas fa-exclamation-circle"}),e._v(" 所有选择的商品将寄往同一地址 ")]),!0===e.returnAddressDialogVisible?r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.returnDialogVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.returnAddressDialogVisible=!1}}},[e._v("确定")])],1):e._e(),!1===e.returnAddressDialogVisible?r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"mt-4"},[r("el-form",{attrs:{model:e.returnAddressForm,"label-position":"left","label-width":"100px"}},[r("el-form-item",{attrs:{label:"*付款方式:"}},[r("el-select",{model:{value:e.returnAddressForm.returnPayMethod,callback:function(t){e.$set(e.returnAddressForm,"returnPayMethod",t)},expression:"returnAddressForm.returnPayMethod"}},[r("el-option",{attrs:{value:"0",label:"到付"}},[e._v("到付")]),r("el-option",{attrs:{value:"1",label:"自付"}},[e._v("自付")])],1)],1),r("el-form-item",{attrs:{label:"*退货国家:"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.returnAddressForm.returnShippingCountry,callback:function(t){e.$set(e.returnAddressForm,"returnShippingCountry",t)},expression:"returnAddressForm.returnShippingCountry"}})],1),r("el-form-item",{attrs:{label:"*退货省份:"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.returnAddressForm.returnShippingProvince,callback:function(t){e.$set(e.returnAddressForm,"returnShippingProvince",t)},expression:"returnAddressForm.returnShippingProvince"}})],1),r("el-form-item",{attrs:{label:"*退货城市:"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.returnAddressForm.returnShippingCity,callback:function(t){e.$set(e.returnAddressForm,"returnShippingCity",t)},expression:"returnAddressForm.returnShippingCity"}})],1),r("el-form-item",{attrs:{label:"*具体地址:"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.returnAddressForm.returnShippingAddress,callback:function(t){e.$set(e.returnAddressForm,"returnShippingAddress",t)},expression:"returnAddressForm.returnShippingAddress"}})],1),r("el-form-item",{attrs:{label:"*地址邮编:"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.returnAddressForm.returnShippingPostcode,callback:function(t){e.$set(e.returnAddressForm,"returnShippingPostcode",t)},expression:"returnAddressForm.returnShippingPostcode"}})],1),r("el-form-item",{attrs:{label:"*收件人:"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.returnAddressForm.returnShippingRecevier,callback:function(t){e.$set(e.returnAddressForm,"returnShippingRecevier",t)},expression:"returnAddressForm.returnShippingRecevier"}})],1),r("el-form-item",{attrs:{label:"*联系电话:"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.returnAddressForm.returnShippingPhone,callback:function(t){e.$set(e.returnAddressForm,"returnShippingPhone",t)},expression:"returnAddressForm.returnShippingPhone"}})],1),r("el-form-item",{attrs:{label:"快递备注:"}},[r("el-input",{attrs:{placeholder:"可备注快递公司",autocomplete:"off"},model:{value:e.returnAddressForm.returnShippingNotes,callback:function(t){e.$set(e.returnAddressForm,"returnShippingNotes",t)},expression:"returnAddressForm.returnShippingNotes"}})],1),r("el-form-item",[r("el-button",{on:{click:function(t){e.returnAddressDialogVisible=!0}}},[e._v("取消")]),""!=e.returnAddressForm.returnShippingCountry&&""!=e.returnAddressForm.returnShippingProvince&&""!=e.returnAddressForm.returnShippingCity&&""!=e.returnAddressForm.returnShippingAddress&&""!=e.returnAddressForm.returnShippingPostcode&&""!=e.returnAddressForm.returnShippingRecevier&&""!=e.returnAddressForm.returnShippingPhone?r("el-button",{attrs:{type:"primary"},on:{click:e.submitReturn}},[e._v("确认")]):r("el-button",{attrs:{type:"primary",disabled:""}},[e._v("确认")])],1)],1)],1):e._e()])],1)])},o=[],i=r("750b"),s=r("6121"),a={components:{},setup:function(e,t){var r=t.root,n=r.$store,o=r.$message,a=Object(i["c"])("reload"),l=Object(i["f"])(!1),u=Object(i["f"])(!1);Object(i["d"])((function(){n.dispatch("goodGet",{status:"已入库",page:"0",size:"10000"})}));var p=Object(i["a"])((function(){return n.state.goodlist})),d=Object(i["f"])(""),c=Object(i["f"])([]),g=function(){var e={keyword:{searchString:d.value},status:"已入库",page:"0",size:"10000"};n.dispatch("searchGoodsForUser",e).then((function(e){c.value=e.data})).catch((function(){}))},m=Object(i["a"])((function(){var e=[];return e=""!=d.value?c.value:p.value,e.map((function(e){return{id:e._id,localExpressNumber:e.localExpressNumber,goodname:e.goodName,picture:s["a"]+e.goodImg,warehousenumber:e.packageLocation,weight:e.goodWeight,length:e.goodSize_length,width:e.goodSize_width,height:e.goodSize_height,type:e.goodType,operation:"0",goodNotes:e.goodNotes,note:e.note,isStorage:e.isStorage,storageTime:e.storageTime,goodStatus:e.goodStatus,returnExpressNumber:e.returnExpressNumber,returnExpressCompany:e.returnExpressCompany,goodPaidWeight:e.goodPaidWeight,goodNumber:e.goodNumber}}))})),h=Object(i["f"])([]),b=function(e){h.value=e},f=Object(i["f"])(!1),v=Object(i["f"])(""),S=Object(i["e"])([{label:"加拿大",value:"Canada"},{label:"美国",value:"USA"}]),y=function(){var e=h.value.map((function(e){return{goodId:e.id,goodName:e.goodname,goodLocation:e.warehousenumber,goodNumber:e.goodNumber}})),t={orderGoodsList:e,shippingCountry:v.value};""===t.shippingCountry?o.error("请填写收货国家"):(f.value=!1,n.dispatch("createOrderForm",t).then((function(){o.success("打包申请提交成功！"),a()})).catch((function(){})))},_=Object(i["f"])(!1),C=Object(i["f"])(!0),A=function(){u.value=!0,C.value=!1},k=function(){C.value=!1,u.value=!1},w=Object(i["a"])((function(){return 20*h.value.filter((function(e){return"待打包"===e.goodStatus})).length})),F=Object(i["e"])({returnPayMethod:"0",returnShippingCountry:"",returnShippingProvince:"",returnShippingCity:"",returnShippingAddress:"",returnShippingPostcode:"",returnShippingPhone:"",returnShippingRecevier:"",returnShippingNotes:""}),x=function(){C.value=!0,_.value=!1,l.value=!0;var e=h.value.map((function(e){return e.id})),t={returnedGoods:e,returnShippingCountry:F.returnShippingCountry,returnShippingProvince:F.returnShippingProvince,returnShippingCity:F.returnShippingCity,returnShippingAddress:F.returnShippingAddress,returnShippingPostcode:F.returnShippingPostcode,returnShippingPhone:F.returnShippingPhone,returnShippingRecevier:F.returnShippingRecevier,returnPayMethod:F.returnPayMethod,returnShippingNotes:F.returnShippingNotes};""==t.returnShippingCountry||""==t.returnShippingProvince||""==t.returnShippingCity||""==t.returnShippingAddress||""==t.returnShippingPostcode||""==t.returnShippingRecevier||""==t.returnShippingPhone?o.error("请填写完整的退货信息"):n.dispatch("returnGoods",t).then((function(){o.success("退货商品已发送到后台等待我们打包！"),l.value=!1,a()})).catch((function(){l.value=!1}))};return{loading:l,keyWord:d,handleQuery:g,goodList:p,tableData:m,handleSelectionChange:b,multipleSelection:h,shippingCountryDialogVisible:f,shippingCountry:v,shippingCountryOptions:S,createOrder:y,returnDialogVisible:_,returnAddressDialogVisible:C,returnAddressForm:F,serviceChargeAmount:w,serviceChargeSign:u,handleServiceCharge:A,handletoReturnAddress:k,submitReturn:x}}},l=a,u=(r("60c8"),r("2877")),p=Object(u["a"])(l,n,o,!1,null,"c42e9d36",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7328e7e6.9041093f.js.map