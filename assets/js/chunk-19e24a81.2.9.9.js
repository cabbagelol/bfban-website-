(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19e24a81"],{"00fd":function(t,e,a){var s=a("9e69"),r=Object.prototype,i=r.hasOwnProperty,o=r.toString,n=s?s.toStringTag:void 0;function l(t){var e=i.call(t,n),a=t[n];try{t[n]=void 0;var s=!0}catch(l){}var r=o.call(t);return s&&(e?t[n]=a:delete t[n]),r}t.exports=l},"0b05":function(t,e,a){var s={"./images/games/bf1/logo.png":"d141","./images/games/bf6/logo.png":"a542","./images/games/bfv/logo.png":"28dd","./images/logo.png":"9d64"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="0b05"},"0b07":function(t,e,a){var s=a("34ac"),r=a("3698");function i(t,e){var a=r(t,e);return s(a)?a:void 0}t.exports=i},1368:function(t,e,a){var s=a("da03"),r=function(){var t=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function i(t){return!!r&&r in t}t.exports=i},"1a8c":function(t,e){function a(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=a},"1c8a":function(t,e,a){t.exports=a.p+"assets/img/bf.350c4f88.jpg"},"1cec":function(t,e,a){var s=a("0b07"),r=a("2b3e"),i=s(r,"Promise");t.exports=i},"29f3":function(t,e){var a=Object.prototype,s=a.toString;function r(t){return s.call(t)}t.exports=r},"2b3e":function(t,e,a){var s=a("585a"),r="object"==typeof self&&self&&self.Object===Object&&self,i=s||r||Function("return this")();t.exports=i},"34ac":function(t,e,a){var s=a("9520"),r=a("1368"),i=a("1a8c"),o=a("dc57"),n=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,c=Function.prototype,d=Object.prototype,p=c.toString,u=d.hasOwnProperty,m=RegExp("^"+p.call(u).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(t){if(!i(t)||r(t))return!1;var e=s(t)?m:l;return e.test(o(t))}t.exports=h},3698:function(t,e){function a(t,e){return null==t?void 0:t[e]}t.exports=a},3729:function(t,e,a){var s=a("9e69"),r=a("00fd"),i=a("29f3"),o="[object Null]",n="[object Undefined]",l=s?s.toStringTag:void 0;function c(t){return null==t?void 0===t?n:o:l&&l in Object(t)?r(t):i(t)}t.exports=c},"476a":function(t,e,a){"use strict";a("4d3c")},"4d3c":function(t,e,a){},5172:function(t,e,a){},"585a":function(t,e,a){(function(e){var a="object"==typeof e&&e&&e.Object===Object&&e;t.exports=a}).call(this,a("c8ba"))},"5d71":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{position:"relative"}},[e("quill-editor",{ref:"myTextEditor",staticClass:"editor",style:"height:"+t.height,attrs:{content:t.editorContent,options:t.editorOption,disabled:t.disabled,maxlength:t.maxlength,useCustomImageHandler:""},on:{change:t.onEditorChange,ready:t.onEditorReady}}),t.showMaxlengthLabel?e("Row",{staticStyle:{margin:"0px 10px"},attrs:{gutter:10}},[e("Col",{attrs:{flex:"1"}},[null!=t.editorContent&&t.editorContent.length>=t.maxlength?[e("Alert",{attrs:{"show-icon":"",type:"error"}},[t._v(t._s(t.$t("textarea.textOverflowHint")))])]:t._e()],2),e("Col",[e("Tooltip",{attrs:{placement:"left-start",content:t.$t("textarea.textHelpHint"),"max-width":"300",transfer:!0}},[e("Icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"md-help-circle"}}),null!=t.editorContent&&t.editorContent.length==t.maxlength?[e("b",{staticStyle:{color:"darkred"}},[t._v(t._s(t.editorContent.length||0))])]:null!=t.editorContent&&t.editorContent.length>=t.maxlength/2&&t.editorContent.length<t.maxlength?[e("span",{staticStyle:{color:"goldenrod"}},[t._v(t._s(t.editorContent.length||0))])]:null!=t.editorContent?[t._v(t._s(t.editorContent.length||0))]:[t._v("0")],t._v(" /"+t._s(t.maxlength)+" ")],2)],1)],1):t._e(),e("UploadWidget",{ref:"uploadWidget",on:{finish:t.onInsert}})],1)},r=[],i=(a("14d9"),a("e4b4")),o=a("b2d4"),n=a("9339"),l=a.n(n),c=a("953d");HTMLElement.prototype.prevListAll=HTMLElement.prototype.prevListAll||function(){for(var t=this.parentElement,e=t.children,a=[],s=0;s<e.length;s++){var r=e[s];if(r==this)break;a.push(r)}return a};let d=c["Quill"].import("blots/block/embed");class p extends d{static create(t){let e=super.create();return e.setAttribute("src",t),e}static value(t){return{url:t.getAttribute("data-src")}}}p.blotName="image",p.tagName="img";var u=p,m=(a("5172"),{props:{index:null,showMaxlengthLabel:{type:Boolean,default:!1},maxlength:{type:Number,default:0},height:{type:String,default:"200px"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},content:{type:String,default:""},toolbar:null},components:{quillEditor:c["quillEditor"],UploadWidget:o["a"]},data(){return{editorContent:"",editorOption:{placeholder:this.placeholder,modules:{clipboard:{matchers:[[Node.ELEMENT_NODE,this.handlePaste]]},toolbar:{container:this.toolbar||[[{list:"ordered"},{list:"bullet"}],["bold"],["link","image"]],handlers:{image:()=>{this.$refs["uploadWidget"].onPanelChange(),this.$refs["uploadWidget"].currentIndex=0,this.$refs["uploadWidget"].currentFileType="",this.$refs["uploadWidget"].updataIcon=!1}}}}}}},created(){this.http=i["d"].call(this),this.content&&(this.editorContent=this.content),l.a.register(u,!0)},methods:{onPanelChange(t){this.updataPlane=t},handlePaste(t,e){let a=[];return e.ops.forEach(t=>{t.attributes&&"string"===typeof t.attributes.link?a.push({insert:t.attributes.link}):t.insert&&"string"===typeof t.insert&&a.push({insert:t.insert})}),e.ops=a,e},updateContent(t){(!t||!this.maxlength||t.length<this.maxlength)&&(this.editorContent=t)},async onInsert(t){try{var e;const a=this.quill,s=a.getSelection(!0);if(this.insertLoad=!0,0==await i["i"].authImage(t))return this.$Message.error("Image unavailable :("),void(this.insertLoad=!1);a.insertEmbed(s.index,null!==(e="image")&&void 0!==e?e:this.$refs["uploadWidget"].currentFileType,t),this.updataPlane=!1,this.insertLoad=!1,a.setSelection(s.index+1)}catch(a){this.$Message.error(a),this.$refs["uploadWidget"].updataIcon=!1,this.insertLoad=!1}},onEditorReady(){},onEditorChange(t){this.editorContent="",this.disabled&&!t.html||(this.editorContent=this.onContentOverflowProcessing(t.html,!0),this.$emit("input",this.editorContent))},onContentOverflowProcessing(t,e=!1){const a=this.quill;let s="";return null!=t&&t.length>this.maxlength?(s=t.substring(0,this.maxlength),a.deleteText(this.maxlength+1,a.getLength()),a.update()):s=t,s}},computed:{editor(){return this.$refs.myTextEditor.quill}},mounted(){this.quill=this.editor}}),h=m,b=(a("476a"),a("2877")),g=Object(b["a"])(h,s,r,!1,null,null,null);e["a"]=g.exports},"5edf":function(t,e,a){},"762c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("br"),e("Row",[e("Col",{attrs:{xs:{push:1},lg:{push:0}}},[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),e("BreadcrumbItem",[t._v(t._s(t.$t("report.info.reportHacker")))])],1)],1)],1),e("br"),e("Tabs",{attrs:{type:"card"},on:{"on-tab-remove":t.doCancel},model:{value:t.tabs.count,callback:function(e){t.$set(t.tabs,"count",e)},expression:"tabs.count"}},[t._l(t.tabs.list.length,(function(s,r){return e("TabPane",{key:r,attrs:{disabled:"",label:t.tabs.list[r].formItem.originId?t.tabs.list[r].formItem.originId:s.toString()}},[0==t.tabs.list[r].statusOk?[e("Form",{ref:"formValidate_"+r,refInFor:!0,attrs:{"label-width":t.isMobile?null:150,model:t.tabs.list[r].formItem,rules:t.tabs.list[r].ruleValidate,"label-position":t.isMobile?"top":"left"}},[e("Card",{attrs:{"dis-hover":"",padding:t.isMobile?20:50}},[e("FormItem",{attrs:{prop:"gameName",label:""+t.$t("report.labels.game")}},[e("RadioGroup",{staticClass:"game-type",attrs:{size:"large",type:"button"},model:{value:t.tabs.list[r].formItem.gameName,callback:function(e){t.$set(t.tabs.list[r].formItem,"gameName",e)},expression:"tabs.list[index].formItem.gameName"}},t._l(t.games,(function(s){return e("Radio",{key:s.value,class:t.tabs.list[r].formItem.gameName==s.value?"gametype-select":"",style:"background-image: url("+a("e153")("./"+s.bk_file+"/bf.jpg")+")",attrs:{label:s.value,disabled:s.disabled,"aria-radio":""}},[e("Tooltip",{attrs:{content:t.$t("basic.games."+s.value),placement:"top-start"}},[s.logo_src?e("img",{attrs:{height:"35",src:a("0b05")("./"+s.bk_file+"/logo.png")}}):e("span",[t._v(t._s(s.full_name))])])],1)})),1),t.tabs.list[r].formItem.gameName?e("p",[t._v(" "+t._s(t.$t("basic.games."+t.tabs.list[r].formItem.gameName)))]):t._e()],1),e("FormItem",{attrs:{prop:"originId",label:t.$t("report.labels.hackerId")}},[e("Alert",{directives:[{name:"show",rawName:"v-show",value:t.failedOfNotFound,expression:"failedOfNotFound"}],staticClass:"notFoundHint",attrs:{type:"error","show-icon":""}},[e("b",[t._v(t._s(t.$t("report.info.notFoundHintTitle")))]),e("span",{attrs:{slot:"desc"},slot:"desc"},[e("p",{staticStyle:{"font-size":"14px","margin-left":"10px"}},[t._v(" Q:"+t._s(t.$t("report.info.notFoundHintQuestion1"))+" ")]),e("p",{staticStyle:{"font-size":"12px","margin-left":"20px"}},[t._v(" A:"+t._s(t.$t("report.info.notFoundHintAnswer1"))+" ")]),e("p",{staticStyle:{"font-size":"14px","margin-left":"10px"}},[t._v(" Q:"+t._s(t.$t("report.info.notFoundHintQuestion2"))+" ")]),e("p",{staticStyle:{"font-size":"12px","margin-left":"20px"}},[t._v(" A:"+t._s(t.$t("report.info.notFoundHintAnswer2"))+" ")])])]),e("Row",{attrs:{gutter:30}},[e("Col",{attrs:{xs:{span:16},lg:{span:10}}},[e("AutoComplete",{attrs:{data:t.tabs.list[r].players.list,maxlength:"280",clearable:"",transfer:!0,"show-word-limit":"",icon:"ios-search",size:"large",placeholder:t.$t("report.info.onlyOneId")},on:{"on-search":t.handleSearchReportId},model:{value:t.tabs.list[r].formItem.originId,callback:function(e){t.$set(t.tabs.list[r].formItem,"originId",e)},expression:"tabs.list[index].formItem.originId"}},[t.tabs.list&&t.tabs.list[r].players.length>0?t._l(t.tabs.list[r].players,(function(a,s){return e("div",{key:s},[a&&a.originName?e("Option",{attrs:{value:a.originName}},[e("Row",[e("Col",{attrs:{flex:"auto"}},[e("Avatar",{attrs:{src:a.avatarLink}}),e("span",[t._v("  "+t._s(a.originName))])],1)],1)],1):t._e()],1)})):t._e()],2)],1),e("Col",{attrs:{xs:{span:8},lg:{span:14}}},[e("OcrWidget",{attrs:{data:{index:r}},on:{ok:t.onOcrOutput}},[e("Button",{attrs:{size:"large"}},[e("Icon",{attrs:{type:"md-qr-scanner"}}),t._v(" OCR ")],1)],1)],1)],1),e("Card",{staticClass:"report-hackrid",attrs:{"dis-hover":""}},[e("div",{attrs:{slot:"title"},slot:"title"},[t.tabs.list[r].formItem.originId?e("h1",[t._v(t._s(t.tabs.list[r].formItem.originId))]):e("span",[t._v("ID")])]),e("p",{staticClass:"hint"},[t._v(" "+t._s(t.$t("report.info.idNotion1"))+" ")]),e("p",{staticClass:"hint"},[t._v(" "+t._s(t.$t("report.info.idNotion2"))+" ")])])],1),e("FormItem",{attrs:{prop:"checkbox",label:t.$t("report.labels.cheatMethod")}},[e("CheckboxGroup",{model:{value:t.tabs.list[r].formItem.checkbox,callback:function(e){t.$set(t.tabs.list[r].formItem,"checkbox",e)},expression:"tabs.list[index].formItem.checkbox"}},t._l(t.cheatMethodsGlossary,(function(a){return e("Checkbox",{key:a.value,staticStyle:{"margin-bottom":"10px"},attrs:{border:"",indeterminate:!1,label:a.value}},[e("Tag",{attrs:{color:"primary"}},[t._v(t._s(t.$t(`cheatMethods.${a.value}.title`)))]),e("Divider",{attrs:{type:"vertical"}}),e("span",[t._v(t._s(t.$t(`cheatMethods.${a.value}.describe`)))])],1)})),1)],1)],1),e("br"),e("Card",{attrs:{"dis-hover":"",padding:t.isMobile?20:50}},[e("FormItem",{attrs:{label:t.$t("detail.info.videoLink")}},[e("Row",{attrs:{gutter:30}},[e("Col",{attrs:{xs:{span:24},lg:{span:12}}},[e("Alert",{attrs:{type:"warning"}},[t._v(" "+t._s(t.$t("report.info.uploadManual1"))+" "),e("a",{attrs:{target:"_blank",href:"https://streamable.com/"}},[t._v("https://streamable.com/")]),t._v("，"+t._s(t.$t("report.info.uploadManual2"))+" ")]),t._l(t.tabs.list[r].formItem.videoLink,(function(a,s){return e("FormItem",{key:s,attrs:{prop:`videoLink[${s}]`,rules:{validator:t.checkVideoLink,trigger:"blur"}}},[e("Row",{attrs:{gutter:0}},[e("Col",{attrs:{flex:"auto"}},[e("Input",{staticStyle:{"margin-bottom":"5px"},attrs:{clearable:"",placeholder:t.$t("report.info.required")},model:{value:t.tabs.list[r].formItem.videoLink[s],callback:function(e){t.$set(t.tabs.list[r].formItem.videoLink,s,e)},expression:"tabs.list[index].formItem.videoLink[blinkindex]"}})],1),e("Col",[t.tabs.list[r].formItem.videoLink.length>0?e("Divider",{attrs:{type:"vertical"}}):t._e(),t.tabs.list[r].formItem.videoLink.length>0?e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"dashed"},on:{click:function(e){return t.tabs.list[r].formItem.videoLink.splice(s,1)}}},[e("Icon",{attrs:{type:"md-trash"}})],1):t._e()],1)],1)],1)})),t.tabs.list[r].formItem.videoLink.length<3?e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"primary",long:""},on:{click:t.handleVideoLink}},[e("Icon",{attrs:{type:"md-add"}}),e("span",[t._v("  ("+t._s(t.tabs.list[r].formItem.videoLink.length||0)+" / 3)")])],1):t._e(),e("span",[t._v(t._s(t.$t("report.info.uploadManual3")))])],2)],1)],1),e("FormItem",{attrs:{prop:"description",label:t.$t("report.labels.description")}},[e("Card",{attrs:{padding:0,"dis-hover":""}},[e("Textarea",{attrs:{placeholder:t.$t("report.info.description"),index:r,height:"520px",maxlength:6e4,showMaxlengthLabel:!0},model:{value:t.tabs.list[r].formItem.description,callback:function(e){t.$set(t.tabs.list[r].formItem,"description",e)},expression:"tabs.list[index].formItem.description"}})],1),e("br"),t.tabs.list[r].formItem.description?e("Card",{staticClass:"timeline-description",attrs:{padding:0,"dis-hover":""}},[e("Html",{attrs:{html:t.tabs.list[r].formItem.description,data:{videoLink:t.tabs.list[r].formItem.videoLink,selfUserName:"selfUserName",playerUserName:"playerUserName"}}})],1):t._e()],1)],1),e("br"),e("Card",{attrs:{"dis-hover":"",padding:t.isMobile?20:50}},[e("FormItem",{attrs:{prop:"captcha",label:t.$t("captcha.title")}},[e("Input",{attrs:{type:"text",placeholder:t.$t("captcha.title")},model:{value:t.tabs.list[r].formItem.captcha,callback:function(e){t.$set(t.tabs.list[r].formItem,"captcha",e)},expression:"tabs.list[index].formItem.captcha"}},[e("div",{staticClass:"captcha-input-append",attrs:{slot:"append",alt:t.$t("captcha.get")},slot:"append"},[e("Captcha",{ref:"report_"+r,refInFor:!0,attrs:{id:"report_"+r}})],1)])],1),e("FormItem",[e("Row",{attrs:{gutter:10,type:"flex",align:"middle"}},[e("Col",[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"dashed",size:"large",disabled:t.tabs.list.length<=1},on:{click:t.doCancel}},[t._v(" "+t._s(t.$t("basic.button.cancel"))+" ")])],1),e("Divider",{attrs:{type:"vertical"}}),e("Col",[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{size:"large"},on:{click:function(e){return t.resetFieldsReport(r)}}},[t._v(" "+t._s(t.$t("basic.button.reset"))+" ")])],1),e("Col",[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{loading:t.tabs.list[r].load,type:"primary",size:"large"},on:{click:function(e){return t.doReport(r)}}},[t._v(" "+t._s(t.$t("basic.button.report"))+" ")])],1)],1)],1)],1),e("br"),e("Spin",{directives:[{name:"show",rawName:"v-show",value:t.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}})],1)]:-1==t.tabs.list[r].statusOk?e("div",{staticClass:"ivu-alert-error",attrs:{shadow:""}},[e("div",{staticClass:"report-done"},[e("Icon",{attrs:{type:"md-bug",size:"200",color:"error"}}),e("h1",{staticClass:"tip"},[t._v(t._s(t.$t("report.messages.failureTitle")))]),e("p",{staticClass:"tip"},[t._v(t._s(t.$t("report.messages.failureSubtitle",{msg:t.tabs.list[r].statusMsg||":("})))]),e("Divider",{attrs:{dashed:""}}),e("Row",{attrs:{gutter:10,type:"flex",justify:"center",align:"middle"}},[e("Col",[e("router-link",{attrs:{to:{name:"home"}}},[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}]},[t._v(t._s(t.$t("report.button.leave")))])],1)],1)],1)],1)]):1==t.tabs.list[r].statusOk?e("div",{staticClass:"ivu-alert-success",attrs:{shadow:""}},[e("div",{staticClass:"report-done"},[e("Icon",{attrs:{type:"md-cloud-done",size:"200",color:"success"}}),e("h1",{staticClass:"tip"},[t._v(t._s(t.$t("report.messages.successTitle")))]),e("p",{staticClass:"tip"},[t._v(t._s(t.$t("report.messages.successSubtitle")))]),e("Divider",{attrs:{dashed:""}}),e("Row",{attrs:{gutter:10,type:"flex",justify:"center",align:"middle"}},[e("Col",[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}]},[e("a",{attrs:{href:"/report"}},[t._v(t._s(t.$t("report.button.continue")))])])],1),e("Col",[e("router-link",{attrs:{to:{name:"home"}}},[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"primary"}},[t._v(t._s(t.$t("report.button.leave")))])],1)],1)],1)],1)]):t._e()],2)})),e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{slot:"extra",size:"small",disabled:""},on:{click:t.handleTabsAdd},slot:"extra"},[e("Icon",{attrs:{type:"md-add"}})],1)],2)],1)])},r=[],i=(a("14d9"),a("d9e2"),a("ad43")),o=a("1b08"),n=a("e7f8"),l=a("e4b4"),c=a("5d71"),d=a("54c4"),p=a("4360"),u=a("1cec"),m=a.n(u),h=new i["a"]({data(){return{voiceReportManagement:l["n"],games:[],tabs:{count:0,list:[]},spinShow:!1,failedOfNotFound:!1,cheatMethodsGlossary:[]}},components:{Textarea:c["a"],Html:o["a"],OcrWidget:d["a"],Captcha:n["a"]},created(){const t=p["a"].state.configuration["voice_message"];this.http=l["d"].call(this),this.voiceReportManagement.addVoice("success",this.voiceReportManagement.voiceData({src:[a("628d")],volume:t&&t.value||1})),this.handleTabsAdd(),this.loadData()},watch:{$route:"loadData"},methods:{loadData(){l["m"].initUtil().then(t=>{this.cheatMethodsGlossary=t.cheatMethodsGlossary,this.games=t.gameName})},handleSearchReportId(t){!t||t.length<4||l["c"].get(l["b"]["search"],{params:{param:t,type:"player",scope:"current",limit:"6"}}).then(t=>{const e=t.data;1!==e.success?this.catch(t):this.tabs.list[Number(this.tabs.count)].players=e.data}).catch(t=>{this.tabs.list[Number(this.tabs.count)].players=[]})},handleTabsAdd(){let t={load:!1,players:{list:[]},formItem:{gameName:"",originId:"",videoLink:[],checkbox:[],description:"",captcha:"",originUserId:"",originPersonaId:"",avatarLink:""},ruleValidate:{gameName:[{required:!0,trigger:"change"}],originId:[{required:!0,trigger:"blur"}],checkbox:[{required:!0,type:"array",min:1,trigger:"change"}],description:[{required:!0,type:"string",min:5,trigger:"change"}],captcha:[{required:!0,trigger:"blur"}]},statusOk:0,captchaUrl:{}};this.tabs.list.push(t)},handleVideoLink(){const t=this.tabs.list[this.tabs.count];t.formItem.videoLink.splice(t.formItem.videoLink.length+1,0,"")},checkVideoLink(t,e,a){const s=this.$i18n.t("report.messages.videoBadFormat"),r=e;if(!r)return a(this.$i18n.t("report.messages.videoEmpty"));if(e.length>255)return a("The address is too long and it is recommended that evidence of the link be placed in the 'description'");const i=l["i"].check("link",r);0==i.code?a():a(new Error(this.$i18n.t(s)))},doCancel(){this.tabs.list.length<=1||(this.tabs.count=0,this.tabs.list.splice(this.tabs.count,1))},async doReport(t){const e=this;let a=this.tabs.list[t];try{if(!this.$store.state.$userinfo&&!this.$store.state.$userinfo.origin.originUserId)return this.$Message.error({content:this.$i18n.t("report.messages.tipBind"),duration:3}),void setTimeout(()=>{e.$router.push({path:"/profile/information"})},3e3);this.$refs["formValidate_"+t][0]&&this.$refs["formValidate_"+t][0].validate(async s=>{s?(a.load=!0,await e.handleReport(a,t),await e.refreshCaptcha(),a.load=!1):e.$Message.error(this.$t("report.messages.videoBadFormat"))})}catch(s){this.$Message.error(s.toString())}finally{a.load=!1}},resetFieldsReport(t){this.$refs["formValidate_"+t][0].resetFields()},handleReport(t,e){const a=t.formItem.checkbox,{gameName:s,captcha:r,originId:i}=t.formItem,o=t.formItem.description.trim(),n=t.formItem.videoLink.filter(t=>""!=t||void 0!=t||null!=t).toString().trim();return this.spinShow=!0,new m.a(t=>{this.http.post(l["b"]["player_report"],{data:{data:{game:s,originName:i,cheatMethods:a,videoLink:n,description:o},encryptCaptcha:this.$refs["report_"+e][0].hash,captcha:r}}).then(t=>{const a=t.data;if(1===a.success)this.tabs.list[e].statusOk=1,this.voiceReportManagement.play("success"),this.$Message.success(this.$i18n.t("report.info.success")).then(()=>{this.$router.push({name:"cheater",params:{ouid:a.data.originPersonaId}})});else switch(a.code){case"judgement.notFound":this.$Message.error(this.$i18n.t("report.messages.originIdNotExist")),this.failedOfNotFound=!0;break;case"judgement.permissionDenied":this.$Message.error(this.$i18n.t("report.messages.permissionDenied"));break;case"originId":this.$Message.error(this.$i18n.t("report.info.originId")),this.tabs.list[e].statusOk=-1;break;case"captcha.bad":this.tabs.list[e].formItem.captcha="";break;default:this.$Message.error("failed "+a.message),this.tabs.list[e].statusOk=-1;break}this.tabs.list[e].statusMsg=a.message}).finally(()=>{t(),this.tabs.list[e].formItem.captcha="",this.spinShow=!1})})},onOcrOutput(t){t.value&&(this.tabs.list[t.index].formItem.originId=t.value)}}}),b=h,g=(a("becb"),a("2877")),f=Object(g["a"])(b,s,r,!1,null,"2723eeea",null);e["default"]=f.exports},9520:function(t,e,a){var s=a("3729"),r=a("1a8c"),i="[object AsyncFunction]",o="[object Function]",n="[object GeneratorFunction]",l="[object Proxy]";function c(t){if(!r(t))return!1;var e=s(t);return e==o||e==n||e==i||e==l}t.exports=c},"9e69":function(t,e,a){var s=a("2b3e"),r=s.Symbol;t.exports=r},becb:function(t,e,a){"use strict";a("5edf")},da03:function(t,e,a){var s=a("2b3e"),r=s["__core-js_shared__"];t.exports=r},dc57:function(t,e){var a=Function.prototype,s=a.toString;function r(t){if(null!=t){try{return s.call(t)}catch(e){}try{return t+""}catch(e){}}return""}t.exports=r},e153:function(t,e,a){var s={"./images/games/bf1/bf.jpg":"e953","./images/games/bf6/bf.jpg":"1c8a","./images/games/bfv/bf.jpg":"e124"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="e153"},e953:function(t,e,a){t.exports=a.p+"assets/img/bf.41bffcdf.jpg"}}]);
//# sourceMappingURL=chunk-19e24a81.2.9.9.js.map