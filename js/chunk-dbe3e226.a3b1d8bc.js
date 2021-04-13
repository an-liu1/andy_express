(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbe3e226"],{3803:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-pagination",{attrs:{background:"",layout:e.pagerLayout,"current-page":e.currentPage},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})},l=[],s=a("750b"),i={name:"pagination",props:["pager","data","limitNumber"],setup:function(e,t){var a=t.emit,r=Object(s["a"])((function(){return e.data.length>=e.limitNumber?e.pager:"prev, pager, jumper, ->, total, slot"})),l=Object(s["f"])(),i=function(e){l.value=e,a("pagechange",e)};return{pagerLayout:r,currentPage:l,handleCurrentChange:i}}},n=i,o=a("2877"),c=Object(o["a"])(n,r,l,!1,null,null,null);t["a"]=c.exports},9540:function(e,t,a){},c769:function(e,t,a){"use strict";var r=a("9540"),l=a.n(r);l.a},cf3b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ml-4"},[a("div",[a("el-breadcrumb",{staticClass:"border el-breadcrumb-outer",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{staticClass:"mt-3 ml-3"},[e._v("订单详情")]),a("el-breadcrumb-item",{staticClass:"mt-3"},[a("span",{staticStyle:{color:"#f39c12"}},[a("i",{staticClass:"fas fa-warehouse"}),e._v(" 售后服务")])]),!1===e.addAfterSaleSign?a("el-button",{staticClass:"mt-2 float-right mr-3",attrs:{type:"primary"},on:{click:function(t){e.addAfterSaleSign=!e.addAfterSaleSign}}},[e._v(" 申请售后 "),a("i",{staticClass:"el-icon-service"})]):e._e()],1),a("el-collapse-transition",[!0===e.addAfterSaleSign?a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"mt-5"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm form",attrs:{model:e.ruleForm,"label-position":"left","label-width":"130px"}},[a("el-form-item",{attrs:{label:"*售后服务单号:"}},[a("el-select",{attrs:{placeholder:"请选择单号"},model:{value:e.ruleForm.order_id,callback:function(t){e.$set(e.ruleForm,"order_id",t)},expression:"ruleForm.order_id"}},e._l(e.orderIdList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.id,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"*售后服务类型:",prop:"aftersale_type"}},[a("el-radio-group",{model:{value:e.ruleForm.aftersale_type,callback:function(t){e.$set(e.ruleForm,"aftersale_type",t)},expression:"ruleForm.aftersale_type"}},[a("el-radio",{attrs:{label:"损坏"}},[e._v("损坏")]),a("el-radio",{attrs:{label:"丢失"}},[e._v("丢失")]),a("el-radio",{attrs:{label:"其他"}},[e._v("其他")])],1)],1),a("el-form-item",{attrs:{label:"*售后服务标题:",prop:"aftersale_title"}},[a("el-input",{model:{value:e.ruleForm.aftersale_title,callback:function(t){e.$set(e.ruleForm,"aftersale_title",t)},expression:"ruleForm.aftersale_title"}})],1),a("el-form-item",{attrs:{label:"*售后服务内容:",prop:"aftersale_content"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3}},model:{value:e.ruleForm.aftersale_content,callback:function(t){e.$set(e.ruleForm,"aftersale_content",t)},expression:"ruleForm.aftersale_content"}})],1),a("el-form-item",{attrs:{label:"*售后服务照片:"}},[a("el-upload",{attrs:{drag:"",action:"https://upload-z2.qiniup.com",data:e.token,"on-success":e.handleAvatarSuccess,"on-remove":e.handleRemove,"before-upload":e.beforeAvatarUpload,"list-type":"picture"}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v(" 拖拽照片 或者 "),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip text-danger",staticStyle:{"font-size":"14px"},attrs:{slot:"tip"},slot:"tip"},[a("i",{staticClass:"fas fa-exclamation-circle mr-2"}),e._v("上传照片只支持PNG，GIF，JPEG 和 JPG格式，大小不超过1MB。*每次只能上传一张图片 ")])])],1)],1),a("div",{staticStyle:{width:"100%","margin-bottom":"20px"}},[a("div",{staticStyle:{overflow:"hidden",position:"relative",margin:"auto",left:"0",top:"0",width:"172px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.addAfterSale}},[e._v(" 上传 ")]),a("el-button",{attrs:{type:"warning"},on:{click:function(t){e.addAfterSaleSign=!e.addAfterSaleSign}}},[e._v(" 取消 ")])],1)])],1):e._e()]),a("div",{staticClass:"mt-5 mb-5"},[a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"",border:"","default-sort":{prop:"aftersalenumber",order:"ascending"}}},[a("el-table-column",{attrs:{prop:"orderId",label:"订单号",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.orderId.substr(-10)))])]}}])}),a("el-table-column",{attrs:{prop:"aftersale_type",label:"售后类型",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return["损坏"===r.aftersale_type?a("span",{staticClass:"text-danger"},[e._v("损坏")]):e._e(),"丢失"===r.aftersale_type?a("span",{staticClass:"text-danger"},[e._v("丢失")]):e._e(),"其他"===r.aftersale_type?a("span",{staticClass:"text-danger"},[e._v("其他")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"aftersale_title",label:"售后标题",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.aftersale_title))])]}}])}),a("el-table-column",{attrs:{prop:"aftersale_content",label:"售后内容",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.aftersale_content))])]}}])}),a("el-table-column",{attrs:{prop:"aftersale_image",label:"事故图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.aftersale_image.length>1?a("el-carousel",{attrs:{height:"150px","indicator-position":"none"}},e._l(r.aftersale_image,(function(t,l){return a("el-carousel-item",{key:l},[a("img",{staticClass:"img-fluid pointer",attrs:{src:t.src},on:{click:function(t){return e.showMultiple(r,l)}}})])})),1):a("el-image",{staticClass:"img-fluid",staticStyle:{height:"150px"},attrs:{src:r.aftersale_image[0].src,"preview-src-list":[r.aftersale_image[0].src],fit:"cover"}}),a("vue-easy-lightbox",{attrs:{visible:e.lightboxVisible,imgs:e.img,index:e.index},on:{hide:e.handleHide}})]}}])}),a("el-table-column",{attrs:{prop:"updatedAt",label:"更新时间",align:"center",sortabl:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(e._f("moment")(a.updatedAt,"timezone","Asia/Shanghai","YYYY-MM-DD HH:mm:ss"))+" ")]}}])}),a("el-table-column",{attrs:{prop:"compensation",label:"解决方法及赔偿",fixed:"right",align:"center",width:"260",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.solution?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 float-left"},[a("el-tag",{attrs:{type:"success"}},[e._v(" 解决方法:")])],1),a("div",{staticClass:"col-7"},[a("span",{staticClass:"float-left"},[e._v(e._s(r.solution))])])]),a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-4 float-left"},[a("el-tag",{attrs:{type:"warning"}},[e._v(" 赔偿金额:")])],1),a("div",{staticClass:"col-7"},[a("span",{staticClass:"float-left"},[e._v(e._s(r.compensation))])])]),a("p",{staticClass:"mt-2",staticStyle:{cursor:"pointer"},on:{click:function(t){e.dialogVisible=!0}}},[a("span",[a("b",[e._v("如果不满意售后服务，可点击添加客服微信: ")]),e._v(" MUAMUAYVETTE"),a("i",{staticClass:"fas fa-search ml-1"})])]),r.is_solve?a("div",{staticClass:"mt-3 text-success"},[e._v(" 售后服务已解决 "),a("i",{staticClass:"el-icon-circle-check"})]):a("div",{staticClass:"mt-3"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleConfirmService(r.id)}}},[e._v("同意")])],1)]):a("div",[a("span",{staticClass:"text-warning"},[e._v("正在尽力解决中")]),a("p",{staticClass:"mt-2",staticStyle:{cursor:"pointer"},on:{click:function(t){e.dialogVisible=!0}}},[a("span",[a("b",[e._v("请点击添加客服微信 : ")]),e._v(" MUAMUAYVETTE"),a("i",{staticClass:"fas fa-search ml-1"})])])])]}}])})],1),a("pagination",{staticClass:"mt-5 float-right",attrs:{data:e.tableData,pager:"prev, pager, next, jumper, ->, total, slot",limitNumber:"5"},on:{pagechange:e.pageChange}})],1)]),a("el-dialog",{attrs:{title:"扫描添加客服微信",visible:e.dialogVisible,width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{staticClass:"mx-auto d-block",attrs:{src:"/images/weixinCode.png"}})])],1)])},l=[],s=a("750b"),i=a("3803"),n=a("6121"),o={components:{pagination:i["a"]},setup:function(e,t){var a=t.root,r=a.$store,l=a.$message,i=Object(s["f"])(!1),o=Object(s["f"])(!1),c=Object(s["c"])("reload");Object(s["d"])((function(){r.dispatch("getUserAfterSale",{page:0,size:5}),r.dispatch("getOrderForm",{status:"已签收",page:0,size:10,status1:"已发货"}),r.dispatch("getUpToken")}));var u=Object(s["a"])((function(){return r.state.aftersalelist})),f=Object(s["a"])((function(){return u.value.map((function(e,t){return{aftersalenumber:t+1,id:e._id,orderId:e.order_id,aftersale_type:e.aftersale_type,aftersale_title:e.aftersale_title,aftersale_content:e.aftersale_content,aftersale_image:e.aftersale_image.map((function(e){return{src:n["a"]+e}})),compensation:e.compensation,solution:e.solution,is_solve:e.is_solve,updatedAt:e.updatedAt}}))})),d=function(e){r.dispatch("getUserAfterSale",{page:e-1,size:5})},p=Object(s["f"])(!1),m=Object(s["f"])(0),g=Object(s["f"])(""),_=function(){p.value=!1},v=function(e,t){p.value=!0,g.value=e.aftersale_image,m.value=t},b=Object(s["f"])([]),h=Object(s["a"])((function(){return r.state.token})),y=function(e){var t=!0,a=["image/gif","image/jpeg","image/jpg","image/png"],r=e.size/1024/1024<1;return-1==a.indexOf(e.type)&&(l.error("上传文件应该是图片格式！"),t=!1),r||(l.error("图片大小超过1MB了哦！"),t=!1),t},C=function(e){var t=k.aftersale_image.indexOf(e.response.key);k.aftersale_image.splice(t,1)},S=function(e){r.dispatch("getUpToken").then((function(){k.aftersale_image.push(e.key),b.value.push(e.key)}))},x=Object(s["a"])((function(){return r.state.selforderlist.filter((function(e){return!1===e.is_aftersale})).map((function(e){return{id:e._id}}))})),k=Object(s["e"])({order_id:"",aftersale_type:"损坏",aftersale_title:"",aftersale_content:"",aftersale_image:[]}),w=Object(s["f"])(!1),A=function(){o.value=!0,""==k.order_id||""==k.aftersale_type||""==k.aftersale_title||""==k.aftersale_content||0==k.aftersale_image.length?(l.error("请填写完整内容!"),o.value=!1):r.dispatch("createAfterSale",k).then((function(){l.success("申请售后服务成功！"),o.value=!1,c()})).catch((function(){o.value=!1}))},j=function(e){r.dispatch("conformAfterSale",e).then((function(){l.success("同意售后方案提交成功！"),o.value=!1,c()})).catch((function(){o.value=!1}))};return{loading:o,orderIdList:x,afterSaleList:u,tableData:f,lightboxVisible:p,img:g,index:m,showMultiple:v,handleHide:_,pageChange:d,addAfterSaleSign:w,ruleForm:k,addAfterSale:A,handleConfirmService:j,imageUrl:b,beforeAvatarUpload:y,handleRemove:C,handleAvatarSuccess:S,token:h,imageDomain:n["a"],dialogVisible:i}}},c=o,u=(a("c769"),a("2877")),f=Object(u["a"])(c,r,l,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-dbe3e226.a3b1d8bc.js.map