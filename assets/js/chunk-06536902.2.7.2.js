(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06536902","chunk-2d0ccbb8"],{"0b05":function(t,e,a){var s={"./images/games/bf1/logo.png":"d141","./images/games/bf6/logo.png":"a542","./images/games/bfv/logo.png":"28dd","./images/logo.png":"9d64"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id="0b05"},"1c8a":function(t,e,a){t.exports=a.p+"assets/img/bf.350c4f88.jpg"},"28dd":function(t,e,a){t.exports=a.p+"assets/img/logo.f39797a8.png"},"2ba4":function(t,e,a){var s=a("40d5"),i=Function.prototype,o=i.apply,r=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(s?r.bind(o):function(){return r.apply(o,arguments)})},"47b0":function(t,e,a){},"4bde":function(t,e,a){},"4ed5":function(t){t.exports=JSON.parse('{"defaultIndex":0,"default":"bf1","child":[{"value":"bf1","full_name":"bf1","bk_file":"images/games/bf1","bk_src":"//media.contentapi.ea.com/content/dam/gin/images/2017/01/battlefield-1-keyart-5452x3859.jpg.adapt.crop1x1.767p.jpg","logo_src":"//media.contentapi.ea.com/content/dam/gin/common/logos/layer-1.png","app_assets_bk_file":"assets/images/games/bf1/bf.jpg","app_assets_logo_file":"assets/images/games/bf1/logo.png"},{"value":"bfv","full_name":"bfv","bk_file":"images/games/bfv","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2018/05/bfv-campaignart-standard-large.jpg.adapt.crop1x1.767p.jpg","bk_width":150,"logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/bfv-logo-white.png","app_assets_bk_file":"assets/images/games/bfv/bf.jpg","app_assets_logo_file":"assets/images/games/bfv/logo.png"},{"value":"bf6","full_name":"bf2042","bk_file":"images/games/bf6","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg","logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg","app_assets_bk_file":"assets/images/games/bf6/bf.jpg","app_assets_logo_file":"assets/images/games/bf6/logo.png"}]}')},"762c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("br"),e("Row",[e("Col",{attrs:{xs:{push:1},lg:{push:0}}},[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),e("BreadcrumbItem",[t._v(t._s(t.$t("report.info.reportHacker")))])],1)],1)],1),e("br"),e("Tabs",{attrs:{type:"card"},on:{"on-tab-remove":t.doCancel},model:{value:t.tabs.count,callback:function(e){t.$set(t.tabs,"count",e)},expression:"tabs.count"}},[t._l(t.tabs.list.length,(function(s,i){return e("TabPane",{key:i,attrs:{disabled:"",label:t.tabs.list[i].formItem.originId?t.tabs.list[i].formItem.originId:s.toString()}},[0==t.tabs.list[i].statusOk?[e("Form",{ref:"formValidate_"+i,refInFor:!0,attrs:{"label-width":t.isMobile?null:150,model:t.tabs.list[i].formItem,rules:t.tabs.list[i].ruleValidate,"label-position":t.isMobile?"top":"left"}},[e("Card",{attrs:{"dis-hover":"",padding:t.isMobile?20:50}},[e("FormItem",{attrs:{prop:"gameName",label:""+t.$t("report.labels.game")}},[e("RadioGroup",{staticClass:"game-type",attrs:{size:"large",type:"button"},model:{value:t.tabs.list[i].formItem.gameName,callback:function(e){t.$set(t.tabs.list[i].formItem,"gameName",e)},expression:"tabs.list[index].formItem.gameName"}},t._l(t.games,(function(s){return e("Radio",{key:s.value,class:t.tabs.list[i].formItem.gameName==s.value?"gametype-select":"",style:"background-image: url("+a("e153")("./"+s.bk_file+"/bf.jpg")+")",attrs:{label:s.value,disabled:s.disabled,"aria-radio":""}},[e("Tooltip",{attrs:{content:t.$t("basic.games."+s.value),placement:"top-start"}},[s.logo_src?e("img",{attrs:{height:"35",src:a("0b05")("./"+s.bk_file+"/logo.png")}}):e("span",[t._v(t._s(s.full_name))])])],1)})),1),t.tabs.list[i].formItem.gameName?e("p",[t._v(" "+t._s(t.$t("basic.games."+t.tabs.list[i].formItem.gameName)))]):t._e()],1),e("FormItem",{attrs:{prop:"originId",label:t.$t("report.labels.hackerId")}},[e("Alert",{directives:[{name:"show",rawName:"v-show",value:t.failedOfNotFound,expression:"failedOfNotFound"}],staticClass:"notFoundHint",attrs:{type:"error","show-icon":""}},[e("b",[t._v(t._s(t.$t("report.info.notFoundHintTitle")))]),e("span",{attrs:{slot:"desc"},slot:"desc"},[e("p",{staticStyle:{"font-size":"14px","margin-left":"10px"}},[t._v(" Q:"+t._s(t.$t("report.info.notFoundHintQuestion1"))+" ")]),e("p",{staticStyle:{"font-size":"12px","margin-left":"20px"}},[t._v(" A:"+t._s(t.$t("report.info.notFoundHintAnswer1"))+" ")]),e("p",{staticStyle:{"font-size":"14px","margin-left":"10px"}},[t._v(" Q:"+t._s(t.$t("report.info.notFoundHintQuestion2"))+" ")]),e("p",{staticStyle:{"font-size":"12px","margin-left":"20px"}},[t._v(" A:"+t._s(t.$t("report.info.notFoundHintAnswer2"))+" ")])])]),e("Row",{attrs:{gutter:30}},[e("Col",{attrs:{xs:{span:16},lg:{span:10}}},[e("AutoComplete",{attrs:{data:t.tabs.list[i].players.list,maxlength:"280",clearable:"",transfer:!0,"show-word-limit":"",icon:"ios-search",size:"large",placeholder:t.$t("report.info.onlyOneId")},on:{"on-search":t.handleSearchReportId},model:{value:t.tabs.list[i].formItem.originId,callback:function(e){t.$set(t.tabs.list[i].formItem,"originId",e)},expression:"tabs.list[index].formItem.originId"}},[t.tabs.list&&t.tabs.list[i].players.length>0?t._l(t.tabs.list[i].players,(function(a,s){return e("div",{key:s},[a&&a.originName?e("Option",{attrs:{value:a.originName}},[e("Row",[e("Col",{attrs:{flex:"auto"}},[e("Avatar",{attrs:{src:a.avatarLink}}),e("span",[t._v("  "+t._s(a.originName))])],1)],1)],1):t._e()],1)})):t._e()],2)],1),e("Col",{attrs:{xs:{span:8},lg:{span:14}}},[e("OcrWidget",{attrs:{data:{index:i}},on:{ok:t.onOcrOutput}},[e("Button",{attrs:{size:"large"}},[e("Icon",{attrs:{type:"md-qr-scanner"}}),t._v(" OCR ")],1)],1)],1)],1),e("Card",{staticClass:"report-hackrid",attrs:{"dis-hover":""}},[e("div",{attrs:{slot:"title"},slot:"title"},[t.tabs.list[i].formItem.originId?e("h1",[t._v(t._s(t.tabs.list[i].formItem.originId))]):e("span",[t._v("ID")])]),e("p",{staticClass:"hint"},[t._v(" "+t._s(t.$t("report.info.idNotion1"))+" ")]),e("p",{staticClass:"hint"},[t._v(" "+t._s(t.$t("report.info.idNotion2"))+" ")])])],1),e("FormItem",{attrs:{prop:"checkbox",label:t.$t("report.labels.cheatMethod")}},[e("CheckboxGroup",{model:{value:t.tabs.list[i].formItem.checkbox,callback:function(e){t.$set(t.tabs.list[i].formItem,"checkbox",e)},expression:"tabs.list[index].formItem.checkbox"}},t._l(t.cheatMethodsGlossary,(function(a){return e("Checkbox",{key:a.value,staticStyle:{"margin-bottom":"10px"},attrs:{border:"",indeterminate:!1,label:a.value}},[e("Tag",{attrs:{color:"primary"}},[t._v(t._s(t.$t(`cheatMethods.${a.value}.title`)))]),e("Divider",{attrs:{type:"vertical"}}),e("span",[t._v(t._s(t.$t(`cheatMethods.${a.value}.describe`)))])],1)})),1)],1)],1),e("br"),e("Card",{attrs:{"dis-hover":"",padding:t.isMobile?20:50}},[e("FormItem",{attrs:{label:t.$t("detail.info.videoLink")}},[e("Row",{attrs:{gutter:30}},[e("Col",{attrs:{xs:{span:24},lg:{span:12}}},[e("Alert",{attrs:{type:"warning"}},[t._v(" "+t._s(t.$t("report.info.uploadManual1"))+" "),e("a",{attrs:{target:"_blank",href:"https://streamable.com/"}},[t._v("https://streamable.com/")]),t._v("，"+t._s(t.$t("report.info.uploadManual2"))+" ")]),t._l(t.tabs.list[i].formItem.videoLink,(function(a,s){return e("FormItem",{key:s,attrs:{prop:`videoLink[${s}]`,rules:{validator:t.checkVideoLink,trigger:"blur"}}},[e("Row",{attrs:{gutter:0}},[e("Col",{attrs:{flex:"auto"}},[e("Input",{staticStyle:{"margin-bottom":"5px"},attrs:{clearable:"",placeholder:t.$t("report.info.required")},model:{value:t.tabs.list[i].formItem.videoLink[s],callback:function(e){t.$set(t.tabs.list[i].formItem.videoLink,s,e)},expression:"tabs.list[index].formItem.videoLink[blinkindex]"}})],1),e("Col",[t.tabs.list[i].formItem.videoLink.length>0?e("Divider",{attrs:{type:"vertical"}}):t._e(),t.tabs.list[i].formItem.videoLink.length>0?e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"dashed"},on:{click:function(e){return t.tabs.list[i].formItem.videoLink.splice(s,1)}}},[e("Icon",{attrs:{type:"md-trash"}})],1):t._e()],1)],1)],1)})),t.tabs.list[i].formItem.videoLink.length<10?e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"primary",long:""},on:{click:t.handleVideoLink}},[e("Icon",{attrs:{type:"md-add"}}),e("span",[t._v("  ("+t._s(t.tabs.list[i].formItem.videoLink.length||0)+" / 10)")])],1):t._e(),e("span",[t._v(t._s(t.$t("report.info.uploadManual3")))])],2)],1)],1),e("FormItem",{attrs:{prop:"description",label:t.$t("report.labels.description")}},[e("Card",{attrs:{padding:0,"dis-hover":""}},[e("Textarea",{attrs:{placeholder:t.$t("report.info.description"),index:i,height:"520px"},model:{value:t.tabs.list[i].formItem.description,callback:function(e){t.$set(t.tabs.list[i].formItem,"description",e)},expression:"tabs.list[index].formItem.description"}})],1),e("br"),t.tabs.list[i].formItem.description?e("Card",{staticClass:"timeline-description",attrs:{padding:0,"dis-hover":""}},[e("Html",{attrs:{html:t.tabs.list[i].formItem.description,data:{videoLink:t.tabs.list[i].formItem.videoLink,selfUserName:"selfUserName",playerUserName:"playerUserName"}}})],1):t._e()],1)],1),e("br"),e("Card",{attrs:{"dis-hover":"",padding:t.isMobile?20:50}},[e("FormItem",{attrs:{prop:"captcha",label:t.$t("captcha.title")}},[e("Input",{attrs:{type:"text",placeholder:t.$t("captcha.title")},model:{value:t.tabs.list[i].formItem.captcha,callback:function(e){t.$set(t.tabs.list[i].formItem,"captcha",e)},expression:"tabs.list[index].formItem.captcha"}},[e("div",{staticClass:"captcha-input-append",attrs:{slot:"append",alt:t.$t("captcha.get")},slot:"append"},[e("Captcha",{ref:"report_"+i,refInFor:!0,attrs:{id:"report_"+i}})],1)])],1),e("FormItem",[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"dashed",size:"large",disabled:t.tabs.list.length<=1},on:{click:t.doCancel}},[t._v(" "+t._s(t.$t("basic.button.cancel"))+" ")]),e("Divider",{attrs:{type:"vertical"}}),e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"primary",size:"large"},on:{click:function(e){return t.doReport(i)}}},[t._v(" "+t._s(t.$t("basic.button.report"))+" ")])],1)],1),e("br"),e("Spin",{directives:[{name:"show",rawName:"v-show",value:t.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}})],1)]:-1==t.tabs.list[i].statusOk?e("div",{staticClass:"ivu-alert-error",attrs:{shadow:""}},[e("div",{staticClass:"report-done"},[e("Icon",{attrs:{type:"md-bug",size:"200",color:"error"}}),e("h1",{staticClass:"tip"},[t._v(t._s(t.$t("report.messages.failureTitle")))]),e("p",{staticClass:"tip"},[t._v(t._s(t.$t("report.messages.failureSubtitle",{msg:t.tabs.list[i].statusMsg||":("})))]),e("Divider",{attrs:{dashed:""}}),e("Row",{attrs:{gutter:10,type:"flex",justify:"center",align:"middle"}},[e("Col",[e("router-link",{attrs:{to:{name:"home"}}},[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}]},[t._v(t._s(t.$t("report.button.leave")))])],1)],1)],1)],1)]):1==t.tabs.list[i].statusOk?e("div",{staticClass:"ivu-alert-success",attrs:{shadow:""}},[e("div",{staticClass:"report-done"},[e("Icon",{attrs:{type:"md-cloud-done",size:"200",color:"success"}}),e("h1",{staticClass:"tip"},[t._v(t._s(t.$t("report.messages.successTitle")))]),e("p",{staticClass:"tip"},[t._v(t._s(t.$t("report.messages.successSubtitle")))]),e("Divider",{attrs:{dashed:""}}),e("Row",{attrs:{gutter:10,type:"flex",justify:"center",align:"middle"}},[e("Col",[e("router-link",{attrs:{to:{path:"/report",params:{t:(new Date).getTime()}}}},[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}]},[t._v(t._s(t.$t("report.button.continue")))])],1)],1),e("Col",[e("router-link",{attrs:{to:{name:"home"}}},[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"primary"}},[t._v(t._s(t.$t("report.button.leave")))])],1)],1)],1)],1)]):t._e()],2)})),e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{slot:"extra",size:"small",disabled:""},on:{click:t.handleTabsAdd},slot:"extra"},[e("Icon",{attrs:{type:"md-add"}})],1)],2)],1)])},i=[],o=(a("14d9"),a("d9e2"),a("890e")),r=a("1b08"),n=a("e7f8"),c=a("e4b4"),l=(a("4ed5"),a("5d71")),p=a("54c4"),d=a("4360"),m=new o["a"]({data(){return{voiceReportManagement:c["n"],games:[],tabs:{count:0,list:[]},spinShow:!1,failedOfNotFound:!1,cheatMethodsGlossary:[]}},components:{Textarea:l["a"],Html:r["a"],OcrWidget:p["a"],Captcha:n["a"]},created(){const t=d["a"].state.configuration["voice_message"];this.http=c["d"].call(this),this.voiceReportManagement.addVoice("success",this.voiceReportManagement.voiceData({src:[a("628d")],volume:t&&t.value||1})),this.handleTabsAdd(),this.loadData()},watch:{$route:"loadData"},methods:{loadData(){c["m"].initUtil().then(t=>{this.cheatMethodsGlossary=t.cheatMethodsGlossary,this.games=t.gameName})},handleSearchReportId(t){!t||t.length<4||c["c"].get(c["b"]["search"],{params:{param:t,scope:"current",limit:"6"}}).then(t=>{const e=t.data;1!==e.success?this.catch(t):this.tabs.list[Number(this.tabs.count)].players=e.data}).catch(t=>{this.tabs.list[Number(this.tabs.count)].players=[]})},handleTabsAdd(){let t={players:{list:[]},formItem:{gameName:"",originId:"",videoLink:[],checkbox:[],description:"",captcha:"",originUserId:"",originPersonaId:"",avatarLink:""},ruleValidate:{gameName:[{required:!0,trigger:"change"}],originId:[{required:!0,trigger:"blur"}],checkbox:[{required:!0,type:"array",min:1,trigger:"change"}],description:[{required:!0,type:"string",min:5,trigger:"change"}],captcha:[{required:!0,trigger:"blur"}]},statusOk:0,captchaUrl:{}};this.tabs.list.push(t)},handleVideoLink(){const t=this.tabs.list[this.tabs.count];t.formItem.videoLink.splice(t.formItem.videoLink.length+1,0,"")},checkVideoLink(t,e,a){const s=this.$i18n.t("report.messages.videoBadFormat"),i=e;if(!i)return a(this.$i18n.t("report.messages.videoEmpty"));const o=c["i"].check("link",i);0==o.code?a():a(new Error(this.$i18n.t(s)))},doCancel(){this.tabs.list.length<=1||(this.tabs.count=0,this.tabs.list.splice(this.tabs.count,1))},async doReport(t){let e=this.tabs.list[t];this.$refs["formValidate_"+t][0]&&this.$refs["formValidate_"+t][0].validate(a=>{a&&(this.handleReport(e,t),this.refreshCaptcha())})},handleReport(t,e){const a=t.formItem.checkbox,{gameName:s,captcha:i,originId:o}=t.formItem,r=t.formItem.description.trim(),n=t.formItem.videoLink.filter(t=>""!=t||void 0!=t||null!=t).toString().trim();this.spinShow=!0,this.http.post(c["b"]["player_report"],{data:{data:{game:s,originName:o,cheatMethods:a,videoLink:n,description:r},encryptCaptcha:this.$refs["report_"+e][0].hash,captcha:i}}).then(t=>{const a=t.data;if(1===a.success)this.tabs.list[e].statusOk=1,this.voiceReportManagement.play("success"),this.$Message.success(this.$i18n.t("report.info.success")).then(()=>{this.$router.push({name:"cheater",params:{ouid:a.data.originPersonaId}})});else switch(a.code){case"judgement.notFound":this.$Message.error(this.$i18n.t("report.messages.originIdNotExist")),this.failedOfNotFound=!0;break;case"judgement.permissionDenied":this.$Message.error(this.$i18n.t("report.messages.permissionDenied"));break;case"originId":this.$Message.error(this.$i18n.t("report.info.originId")),this.tabs.list[e].statusOk=-1;break;case"captcha.bad":this.tabs.list[e].formItem.captcha="";break;default:this.$Message.error("failed "+a.message),this.tabs.list[e].statusOk=-1}this.tabs.list[e].statusMsg=a.message}).finally(()=>{this.tabs.list[e].formItem.captcha="",this.spinShow=!1})},onOcrOutput(t){t.value&&(this.tabs.list[t.index].formItem.originId=t.value)}}}),u=m,h=(a("a9ff"),a("2877")),f=Object(h["a"])(u,s,i,!1,null,"4110426f",null);e["default"]=f.exports},"7f4b":function(t,e,a){"use strict";a("47b0")},a542:function(t,e){t.exports="data:image/png;base64,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"},a9ff:function(t,e,a){"use strict";a("4bde")},ab36:function(t,e,a){var s=a("861d"),i=a("9112");t.exports=function(t,e){s(e)&&"cause"in e&&i(t,"cause",e.cause)}},aeb0:function(t,e,a){var s=a("9bf2").f;t.exports=function(t,e,a){a in t||s(t,a,{configurable:!0,get:function(){return e[a]},set:function(t){e[a]=t}})}},b980:function(t,e,a){var s=a("d039"),i=a("5c6c");t.exports=!s((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},d141:function(t,e,a){t.exports=a.p+"assets/img/logo.6ffd12a1.png"},d9e2:function(t,e,a){var s=a("23e7"),i=a("da84"),o=a("2ba4"),r=a("e5cb"),n="WebAssembly",c=i[n],l=7!==Error("e",{cause:7}).cause,p=function(t,e){var a={};a[t]=r(t,e,l),s({global:!0,constructor:!0,arity:1,forced:l},a)},d=function(t,e){if(c&&c[t]){var a={};a[t]=r(n+"."+t,e,l),s({target:n,stat:!0,constructor:!0,arity:1,forced:l},a)}};p("Error",(function(t){return function(e){return o(t,this,arguments)}})),p("EvalError",(function(t){return function(e){return o(t,this,arguments)}})),p("RangeError",(function(t){return function(e){return o(t,this,arguments)}})),p("ReferenceError",(function(t){return function(e){return o(t,this,arguments)}})),p("SyntaxError",(function(t){return function(e){return o(t,this,arguments)}})),p("TypeError",(function(t){return function(e){return o(t,this,arguments)}})),p("URIError",(function(t){return function(e){return o(t,this,arguments)}})),d("CompileError",(function(t){return function(e){return o(t,this,arguments)}})),d("LinkError",(function(t){return function(e){return o(t,this,arguments)}})),d("RuntimeError",(function(t){return function(e){return o(t,this,arguments)}}))},e153:function(t,e,a){var s={"./images/games/bf1/bf.jpg":"e953","./images/games/bf6/bf.jpg":"1c8a","./images/games/bfv/bf.jpg":"e124"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id="e153"},e5cb:function(t,e,a){"use strict";var s=a("d066"),i=a("1a2d"),o=a("9112"),r=a("3a9b"),n=a("d2bb"),c=a("e893"),l=a("aeb0"),p=a("7156"),d=a("e391"),m=a("ab36"),u=a("0d26"),h=a("b980"),f=a("83ab"),g=a("c430");t.exports=function(t,e,a,b){var v="stackTraceLimit",k=b?2:1,I=t.split("."),y=I[I.length-1],x=s.apply(null,I);if(x){var C=x.prototype;if(!g&&i(C,"cause")&&delete C.cause,!a)return x;var w=s("Error"),_=e((function(t,e){var a=d(b?e:t,void 0),s=b?new x(t):new x;return void 0!==a&&o(s,"message",a),h&&o(s,"stack",u(s.stack,2)),this&&r(C,this)&&p(s,this,_),arguments.length>k&&m(s,arguments[k]),s}));if(_.prototype=C,"Error"!==y?n?n(_,w):c(_,w,{name:!0}):f&&v in x&&(l(_,x,v),l(_,x,"prepareStackTrace")),c(_,x),!g)try{C.name!==y&&o(C,"name",y),C.constructor=_}catch(M){}return _}}},e7f8:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"captcha-view",style:`cursor: ${t.captchaTime.count<=0?"pointer":"not-allowed"};height: ${t.height}`,on:{click:t.refreshCaptcha}},[t.content?e("div",{class:""+(t.captchaTime.count<=0?"disable":""),domProps:{innerHTML:t._s(t.content)}}):e("span",{staticClass:"tip"},[t.disable?e("div",{staticStyle:{"min-width":"80px"}},[e("Icon",{attrs:{type:"md-close",size:"20"}})],1):[t._v(" "+t._s(t.$t("captcha.get"))+" "),t.postload?e("span",[e("Icon",{attrs:{type:"md-refresh spin-icon-load",size:"20"}})],1):t._e()]],2),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.content&&t.captchaTime.count<=0,expression:"content && captchaTime.count <= 0"}],staticClass:"captcha-view-icon"},[t.disable?e("Icon",{attrs:{type:"md-close",size:"20"}}):e("Icon",{class:[t.postload?"spin-icon-load":""],attrs:{type:"md-refresh",size:"20"}})],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.captchaTime.count>0,expression:"captchaTime.count > 0"}],staticClass:"count"},[t._v(t._s(t.captchaTime.count)+"s")])],1)},i=[],o=a("e4b4"),r={name:"Captcha",props:{id:{type:String,default:"0"},disable:{type:Boolean,default:!1},seconds:{type:Number,default:60},height:{type:String,default:"40px"}},data(){return{postload:!1,hash:"",content:"",capthcaHash:{},captchaTime:{fun:null,count:0,lock:!1}}},created(){let t=o["j"].session().get("captcha");t?this.capthcaHash=t.data:o["j"].session().set("captcha",{[`${this.id}_${this.$route.name}`]:this.seconds})},destroyed(){clearInterval(this.captchaTime.fun),this.captchaTime.fun=null},methods:{async refreshCaptcha(){let t=await o["j"].session().get("captcha"),e=this;t.code<=0&&(t={data:{value:this.seconds}}),this.disable||this.postload||this.captchaTime.count>0||(this.postload=!0,o["c"].get(o["b"]["captcha"],{params:{t:Math.random()}}).then(a=>{if(1===a.data.success)return e.capthcaHash=Object.assign({[e.$route.name]:0}),this.hash=a.data.data["hash"],this.content=a.data.data["content"],Object.keys(t.data.value).indexOf(this.$route.name)>=0&&(this.captchaTime.count=t.data.value[this.$route.name]),void this.capthcaTimeout(this.captchaTime.count||this.seconds);this.$Message.error(a.data.code)}).finally(t=>{setTimeout((function(){e.postload=!1}),800)}))},capthcaTimeout(t){const e=this;let a;e.captchaTime.lock||(e.captchaTime.count=t,a=setInterval((function(){if(e.captchaTime.count<=0)return clearInterval(a),void(e.captchaTime.lock=!1);e.captchaTime.count-=1,e.capthcaHash=Object.assign({[`${e.id}_${e.$route.name}`]:e.captchaTime.count}),o["j"].session().set("captcha",e.capthcaHash)}),1e3),e.captchaTime.lock=!0)}},computed:{isCaptcha(){return this.hash&&this.content}}},n=r,c=(a("7f4b"),a("2877")),l=Object(c["a"])(n,s,i,!1,null,null,null);e["a"]=l.exports},e953:function(t,e,a){t.exports=a.p+"assets/img/bf.41bffcdf.jpg"}}]);
//# sourceMappingURL=chunk-06536902.2.7.2.js.map