(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a0fd244"],{"1da5":function(t,e,i){"use strict";var n=i("6b0f"),a=i.n(n);a.a},"1f2c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"errPage-container"},[i("el-button",{staticClass:"pan-back-btn",attrs:{icon:"el-icon-arrow-left"},on:{click:t.back}},[t._v(" 返回 ")]),i("el-row",[i("el-col",{attrs:{span:12}},[i("h1",{staticClass:"text-jumbo text-ginormous"},[t._v(" Oops! ")]),i("h2",{staticClass:"mt-4"},[t._v("Unauthorized Page!")]),i("h2",[t._v("您没有权限访问该页面!")])]),i("el-col",{attrs:{span:12}},[i("img",{attrs:{src:t.errGif,width:"313",height:"428",alt:"Girl has dropped her ice cream."}})])],1)],1)},a=[],o=i("d9ae"),s=i.n(o),r={name:"Page401",data:function(){return{errGif:s.a+"?"+ +new Date}},methods:{back:function(){this.$route.query.noGoBack?this.$router.push({path:"/dashboard"}):this.$router.go(-1)}}},l=r,c=(i("cadb"),i("2877")),u=Object(c["a"])(l,n,a,!1,null,"2bd266d6",null);e["a"]=u.exports},"6b0f":function(t,e,i){},8256:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v(" upload ")]),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v(" Click upload ")])],1),i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(" Cancel ")]),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(" Confirm ")])],1)],1)},s=[],r={name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every((function(e){return t.listObj[e].hasSuccess}))},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map((function(e){return t.listObj[e]}));this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(t,e){for(var i=e.uid,n=Object.keys(this.listObj),a=0,o=n.length;a<o;a++)if(this.listObj[n[a]].uid===i)return this.listObj[n[a]].url=t.files.file,void(this.listObj[n[a]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,i=Object.keys(this.listObj),n=0,a=i.length;n<a;n++)if(this.listObj[i[n]].uid===e)return void delete this.listObj[i[n]]},beforeUpload:function(t){var e=this,i=window.URL||window.webkitURL,n=t.uid;return this.listObj[n]={},new Promise((function(a){var o=new Image;o.src=i.createObjectURL(t),o.onload=function(){e.listObj[n]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},a(!0)}))}}},l=r,c=(i("1da5"),i("2877")),u=Object(c["a"])(l,o,s,!1,null,"c7837094",null),d=u.exports,m=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],h=m,f=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],p=f,b=[];function g(){return window.tinymce}var y=function(t,e){var i=document.getElementById(t),n=e||function(){};if(!i){var a=document.createElement("script");a.src=t,a.id=t,document.body.appendChild(a),b.push(n);var o="onload"in a?s:r;o(a)}function s(e){e.onload=function(){this.onerror=this.onload=null;var t=!0,i=!1,n=void 0;try{for(var a,o=b[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;s(null,e)}}catch(r){i=!0,n=r}finally{try{t||null==o.return||o.return()}finally{if(i)throw n}}b=null},e.onerror=function(){this.onerror=this.onload=null,n(new Error("Failed to load "+t),e)}}function r(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e=!0,i=!1,n=void 0;try{for(var a,o=b[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var s=a.value;s(null,t)}}catch(r){i=!0,n=r}finally{try{e||null==o.return||o.return()}finally{if(i)throw n}}b=null}}}i&&n&&(g()?n(null,i):b.push(n))},v=y,w="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",k={name:"Tinymce",components:{editorImage:d},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;v(w,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["zh"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:p,menubar:this.menubar,plugins:h,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",i.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}},_=k,C=(i("d403"),Object(c["a"])(_,n,a,!1,null,"0a27d97b",null));e["a"]=C.exports},8562:function(t,e,i){},a110:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.role?t._e():i("div",[i("Page401")],1),t.role?i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"emailContainer",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("h3",{staticClass:"text-center mt-3 pb-4"},[t._v("修改邮件 & 公告")]),i("el-form",{ref:"postForm",staticClass:"row",attrs:{model:t.postForm}},[i("el-form-item",{staticClass:"col-6",attrs:{"label-width":"90px",label:"标题:"}},[i("el-input",{attrs:{name:"title",required:""},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}})],1),i("el-form-item",{staticClass:"col-3",attrs:{"label-width":"90px",label:"重要性:"}},[i("el-rate",{staticStyle:{display:"inline-block"},attrs:{max:3,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":3},model:{value:t.postForm.importance,callback:function(e){t.$set(t.postForm,"importance",e)},expression:"postForm.importance"}})],1),i("el-form-item",{staticClass:"col-3",attrs:{"label-width":"90px",label:"类型:"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.type,callback:function(e){t.$set(t.postForm,"type",e)},expression:"postForm.type"}},[i("el-option",{attrs:{label:"邮件",value:"邮件"}}),i("el-option",{attrs:{label:"公告",value:"公告"}})],1)],1),i("el-form-item",{staticClass:"col-12",attrs:{"label-width":"90px",label:"简介:"}},[i("el-input",{attrs:{name:"summary",required:""},model:{value:t.postForm.summary,callback:function(e){t.$set(t.postForm,"summary",e)},expression:"postForm.summary"}})],1),i("el-form-item",{staticClass:"col-12",staticStyle:{"margin-bottom":"30px"}},[i("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),i("el-form-item",{staticClass:"col-12"},[i("el-button",{staticClass:"float-right mr-2",attrs:{type:"warning"},nativeOn:{click:function(e){return t.$router.push("/dashboard/emaillist")}}},[t._v("返 回 ")]),i("el-button",{staticClass:"float-right mr-2",attrs:{type:"primary"},nativeOn:{click:function(e){return t.updateEmail(e)}}},[t._v("确 定")])],1)],1)],1):t._e()])},a=[],o=i("8256"),s=i("1f2c"),r={components:{Tinymce:o["a"],Page401:s["a"]},data:function(){return{loading:!1}},computed:{postForm:function(){return this.$store.state.emailTemplateData},role:function(){return"Admin/管理员"===this.$store.state.role}},methods:{updateEmail:function(){var t=this;this.loading=!0,this.$store.dispatch("updateEmailTemplate",this.postForm).then((function(){t.$message.success("修改成功！"),t.$emit("closeDialog"),t.loading=!1,t.$router.push("/dashboard/emaillist")})).catch((function(){t.$message.error("修改失败！")}))}}},l=r,c=(i("f3d2"),i("2877")),u=Object(c["a"])(l,n,a,!1,null,"50bc2f29",null);e["default"]=u.exports},c1e9:function(t,e,i){},cadb:function(t,e,i){"use strict";var n=i("e5c3"),a=i.n(n);a.a},d403:function(t,e,i){"use strict";var n=i("8562"),a=i.n(n);a.a},d9ae:function(t,e,i){t.exports=i.p+"img/401.089007e7.gif"},e5c3:function(t,e,i){},f3d2:function(t,e,i){"use strict";var n=i("c1e9"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-7a0fd244.e11d8a41.js.map