(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6067e70d"],{"14d0":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[e.isFull?e._e():[a("br"),a("Row",[a("Col",{attrs:{xs:{push:1},lg:{push:0}}},[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{to:{name:"home"}}},[e._v(e._s(e.$t("header.index")))]),a("BreadcrumbItem",{attrs:{to:{name:"player_list"}}},[e._v(e._s(e.$t("list.title")))]),a("BreadcrumbItem",{attrs:{to:{name:"player"}}},[e._v(e._s(e.$t("detail.info.cheatersInfo")))]),a("BreadcrumbItem",[e._v(e._s(e.$t("detail.info.appeal")))])],1)],1)],1),a("br")],a("Card",{attrs:{"dis-hover":""}},[a("h2",[a("a",{attrs:{href:"javascript:void(0)"}},[e._v("#")]),e._v(" "+e._s(e.$t("detail.appeal.modal.modalTitle"))+" ")]),a("br"),a("h3",[e._v(" "+e._s(e.$t("detail.appeal.modal.describe"))+" ")]),a("br"),a("Row",{staticStyle:{padding:"0 15px"},attrs:{gutter:30}},[a("Col",{attrs:{flex:"1"}},[a("ul",[a("h3",[e._v(" "+e._s(e.$t("detail.appeal.modal.effectiveEvidence.title"))+" "),a("Icon",{attrs:{type:"md-done-all",color:"#19be6b"}})],1),a("ol",[a("li",[e._v(e._s(e.$t("detail.appeal.modal.effectiveEvidence.1")))]),a("li",[e._v(e._s(e.$t("detail.appeal.modal.effectiveEvidence.2")))]),a("li",[e._v(e._s(e.$t("detail.appeal.modal.effectiveEvidence.3")))])]),a("br"),a("h3",[e._v(" "+e._s(e.$t("detail.appeal.modal.auxiliaryProof.title"))+" "),a("Icon",{attrs:{type:"md-done-all",color:"#19be6b"}})],1),a("ol",[a("li",[e._v(e._s(e.$t("detail.appeal.modal.auxiliaryProof.1")))]),a("li",[e._v(e._s(e.$t("detail.appeal.modal.auxiliaryProof.2")))])])])]),a("Col",{attrs:{flex:"1"}},[a("h3",[e._v(" "+e._s(e.$t("detail.appeal.modal.evidenceInvalid.title"))+" "),a("Icon",{attrs:{type:"ios-alert-outline",color:"red"}})],1),a("ol",[a("li",[e._v(e._s(e.$t("detail.appeal.modal.evidenceInvalid.1")))]),a("li",[e._v(e._s(e.$t("detail.appeal.modal.evidenceInvalid.2")))]),a("li",[e._v(e._s(e.$t("detail.appeal.modal.evidenceInvalid.3")))]),a("li",[e._v(e._s(e.$t("detail.appeal.modal.evidenceInvalid.4")))])])])],1)],1),a("br"),a("Card",{attrs:{"dis-hover":""}},[a("Form",{attrs:{"label-position":"top"}},[a("Row",{attrs:{gutter:30}},[a("Col",{attrs:{flex:"1"}},[a("FormItem",{attrs:{label:e.$t("detail.appeal.info.player"),prop:"id"}},[a("Input",{attrs:{type:"text",readonly:"",size:"large",value:e.cheater.id,placeholder:e.$t("detail.placeholder.player")}})],1)],1),a("Col",{attrs:{flex:"1"}},[a("FormItem",{attrs:{label:e.$t("detail.appeal.info.originName"),prop:"originName"}},[a("Input",{attrs:{type:"text",value:e.cheater.originName,readonly:"",size:"large"}})],1)],1)],1),a("FormItem",{attrs:{label:e.$t("detail.appeal.deal.type")}},[a("Select",{model:{value:e.appeal.type,callback:function(t){e.$set(e.appeal,"type",t)},expression:"appeal.type"}},e._l(e.appealType,(function(t,l){return a("Option",{key:l,attrs:{value:t.value,label:e.$t(t.name)}},[a("Row",[a("Col",{attrs:{flex:"1"}},[e._v(e._s(e.$t(t.name)))]),a("Col",[e._v(e._s(t.value))])],1)],1)})),1)],1)],1),"moss"===e.appeal.type?a("Form",{ref:"detailAppealForm_moss",attrs:{"label-position":"top",rel:"moss_appeal",model:e.appeal.fromData}},[a("Row",{attrs:{gutter:30}},[a("Col",{attrs:{xs:{span:24},lg:{span:12}}},[a("FormItem",{attrs:{label:e.$t("detail.appeal.deal.firstPersonRecording"),rules:{required:!0,trigger:"blur"},prop:"extendedLinks.videoLink"}},[a("EditLinks",{attrs:{links:e.appeal.fromData.extendedLinks.btrLink,max:10,placeholder:e.$t("detail.appeal.placeholder.videolink")},model:{value:e.appeal.fromData.extendedLinks.videoLink,callback:function(t){e.$set(e.appeal.fromData.extendedLinks,"videoLink",t)},expression:"appeal.fromData.extendedLinks.videoLink"}})],1),a("FormItem",{attrs:{label:e.$t("detail.appeal.deal.btrLink"),rules:{required:!0,trigger:"blur"},prop:"extendedLinks.btrLink"}},[a("EditLinks",{attrs:{links:e.appeal.fromData.extendedLinks.btrLink,max:100,placeholder:e.$t("detail.appeal.placeholder.btrlink")},model:{value:e.appeal.fromData.extendedLinks.btrLink,callback:function(t){e.$set(e.appeal.fromData.extendedLinks,"btrLink",t)},expression:"appeal.fromData.extendedLinks.btrLink"}})],1)],1),a("Col",{attrs:{xs:{span:24},lg:{span:12}}},[a("FormItem",{attrs:{label:e.$t("detail.appeal.deal.userGeneratedMossFile"),rules:{required:!0,validator:e.checkAppealAttachmentsFile,trigger:"change"},prop:"extendedLinks.appendix"}},[a("Upload",{attrs:{multiple:"",type:"drag",action:"",accept:"application/*","before-upload":e.handleFileMossUpload}},[a("div",{class:e.appeal.appendixStateStyle,staticStyle:{padding:"20px 0"}},[a("Icon",{attrs:{type:"md-document",size:"52"}})],1)])],1)],1)],1),a("FormItem",{attrs:{label:e.$t("detail.appeal.info.content"),rules:{required:!0,min:10,trigger:"change"},prop:"content"}},[a("Card",{attrs:{"dis-hover":"",padding:0}},[a("Textarea",{ref:"moss_textareaAppealContent",attrs:{toolbar:["bold","link"],height:"420px",maxlength:4e4,"show-maxlength-label":!0,placeholder:e.$t("detail.appeal.placeholder.content")},model:{value:e.appeal.fromData.content,callback:function(t){e.$set(e.appeal.fromData,"content",t)},expression:"appeal.fromData.content"}})],1)],1)],1):e._e(),"farm"===e.appeal.type?a("Form",{attrs:{"label-position":"top",rel:"farm_appeal"}},[a("Row",{attrs:{gutter:30}},[a("Col",{attrs:{xs:{span:24},lg:{span:12}}},[a("FormItem",{attrs:{label:e.$t("detail.appeal.deal.btrLink"),rules:{required:!0,trigger:"blur"},prop:"extendedLinks.btrLink"}},[a("EditLinks",{attrs:{links:e.appeal.fromData.extendedLinks.btrLink,max:100,placeholder:e.$t("detail.appeal.placeholder.btrlink")},model:{value:e.appeal.fromData.extendedLinks.btrLink,callback:function(t){e.$set(e.appeal.fromData.extendedLinks,"btrLink",t)},expression:"appeal.fromData.extendedLinks.btrLink"}})],1)],1)],1),a("FormItem",{attrs:{label:e.$t("detail.appeal.info.content"),rules:{required:!0,min:10,trigger:"change"},prop:"content"}},[a("Card",{attrs:{"dis-hover":"",padding:0}},[a("Textarea",{ref:"farm_textareaAppealContent",attrs:{toolbar:["bold","link"],height:"420px",maxlength:4e4,"show-maxlength-label":!0,placeholder:e.$t("detail.appeal.placeholder.content")},model:{value:e.appeal.fromData.content,callback:function(t){e.$set(e.appeal.fromData,"content",t)},expression:"appeal.fromData.content"}})],1)],1)],1):e._e(),"none"===e.appeal.type?a("Form",{attrs:{"label-position":"top",rel:"none_appeal"}},[a("Alert",{attrs:{"show-icon":"",type:"error"}},[e._v(" 此分类属于非常规申诉，在上方没有你所选对应类型时使用,在下方文本提交特殊材料，如果你属于'刷枪'或'自证'请重新更正申诉类型；使用不合适的申诉类型将导致案件被锁定，遭到管理永久无视此案件申诉 ")]),a("FormItem",{attrs:{label:e.$t("detail.appeal.info.content"),rules:{required:!0,min:10,trigger:"change"},prop:"content"}},[a("Card",{attrs:{"dis-hover":"",padding:0}},[a("Textarea",{ref:"none_textareaAppealContent",attrs:{toolbar:[[{list:"ordered"},{list:"bullet"}],["bold","hr"],["link","image"]],height:"520px",maxlength:6e4,"show-maxlength-label":!0,placeholder:e.$t("detail.appeal.placeholder.content")},model:{value:e.appeal.fromData.content,callback:function(t){e.$set(e.appeal.fromData,"content",t)},expression:"appeal.fromData.content"}})],1)],1)],1):e._e(),a("Spin",{directives:[{name:"show",rawName:"v-show",value:!e.isLogin,expression:"!isLogin"}],attrs:{size:"large",fix:""}},[a("div",[a("Icon",{attrs:{type:"md-lock",size:"100"}})],1),a("br"),a("Button",{attrs:{to:{name:"signin"}}},[e._v(e._s(e.$t("header.signin")))])],1),a("Spin",{directives:[{name:"show",rawName:"v-show",value:e.isLogin&&1!=e.cheater.status||null==e.cheater,expression:"isLogin && cheater.status != 1 || cheater == null"}],attrs:{size:"large",fix:""}},[a("div",[a("Icon",{attrs:{type:"md-lock",size:"100"}})],1),a("br")])],1),a("br"),a("Row",[a("Col",{attrs:{flex:"1"}}),a("Col",[a("ButtonGroup",[a("Button",{attrs:{size:"large",to:{name:"player"}}},[e._v(e._s(e.$t("basic.button.cancel")))]),a("Button",{attrs:{size:"large"},on:{click:function(t){return e.resetAppealForm()}}},[e._v(e._s(e.$t("basic.button.reset")))])],1),a("Divider",{attrs:{type:"vertical"}}),a("Button",{attrs:{size:"large",type:"primary",loading:e.appeal.load,disabled:!e.isLogin||1!=e.cheater.status||null==e.cheater},on:{click:e.handleAppeal}},[e._v(" "+e._s(e.$t("basic.button.commit"))+" ")])],1)],1)],2)])},i=[],s=a("e4b4"),r=a("ad43"),n=a("02bc"),o=a("5d71"),p=a("e7f8"),d=a("1b08"),c=a("945e"),h=new r["a"]({data(){var e;return{appealType:[{name:"detail.appeal.deal.moss",value:"moss"},{name:"detail.appeal.deal.farm",value:"farm"},{name:"detail.appeal.deal.other",value:"none"}],appeal:{load:!1,fromData:{extendedLinks:{videoLink:"",btrLink:"",mossDownloadUrl:""},content:""},disable:null!==(e=this.$store.state.configuration.detailLeftAppealPanel)&&void 0!==e&&e,appendix:null,appendixStateStyle:"",toPlayerId:0,type:""},cheater:{}}},components:{Empty:n["a"],Textarea:o["a"],Captcha:p["a"],Html:d["a"],EditLinks:c["a"]},watch:{$route:"loadData"},created(){this.http=s["e"].call(this),this.appeal.type=this.appealType[0].value,this.loadData()},methods:{async loadData(){this.http=s["e"].call(this),await this.getPlayerInfo()},async getPlayerInfo(){return new Promise(e=>{let t={history:!0,personaId:this.$route.params.ouid};this.$route.query.oldUrl&&this.$route.params.ouid&&(t={history:!0,userId:this.$route.params.ouid},delete t.personaId),this.cheater={},this.http.get(s["c"]["cheaters"],{params:t}).then(e=>{const t=e.data;if(1===t.success)return t.data.history=t.data.history.sort((function(e,t){let a=new Date(e.fromTime).getTime(),l=new Date(t.fromTime).getTime();return a>l?1:-1})),void(this.cheater=t.data);switch(t.code){case"player.bad":case"player.notFound":this.$router.push({name:"player_list"});break}this.$Message.info(this.$t("basic.tip.notFound"))}).finally(()=>{e()})})},checkAppealAttachmentsFile(e,t,a){const l=this.appeal.appendix,i="moss"==this.appeal.type;return i&&!l?a("not file"):i&&"ivu-alert-warning"==this.appeal.appendixStateStyle?a("Non compliant attachments"):void a()},handleFileMossUpload(e){const t=this;t.clearFileMoss(),s["h"].verifyFileIsMoss(e).then(a=>{0==a.code?(t.appeal.appendixStateStyle="ivu-alert-success",t.appeal.appendix=e,t.$Message.success(a.message)):(t.appeal.appendixStateStyle="ivu-alert-warning",a.message&&t.$Message.error(a.message))})},clearFileMoss(){this.appeal.appendix=null,this.appeal.appendixStateStyle=""},handleAppeal(){try{const e=this.appeal.type,t=this.appeal.content||this.$refs[e+"_textareaAppealContent"].editorContent;this.appeal.load=!0,this.$refs["detailAppealForm_"+e].validate(async a=>{if(!a)return;let l={data:{data:{toPlayerId:this.cheater.id,appealType:this.appeal.type,content:t}}};switch(e){case"moss":l.data.data=Object.assign(l.data.data,{extendedLinks:{videoLink:this.appeal.fromData.extendedLinks.videoLink,btrLink:this.appeal.fromData.extendedLinks.btrLink}}),await s["n"].on(this.appeal.appendix).then(e=>{e&&e.code>=1?l.data.data=Object.assign(l.data.data,{extendedLinks:{mossDownloadUrl:e.filename}}):this.$Message.error(e.message||e.code)}).catch(e=>{this.$Message.error(e.message||e.code)}).finally(()=>{this.appeal.load=!1,s["g"].playSendVoice()});break;case"farm":l.data.data=Object.assign(l.data.data,{extendedLinks:{btrLink:this.appeal.fromData.extendedLinks.btrLink}});break;case"none":default:}const i=await this.http.post(s["c"]["player_banAppeal"],l),r=i.data;1===r.success?(this.$Message.success(this.$t(`basic.tip['${r.code}']`)),this.appeal.show=!1):this.$Message.error(this.$t(`basic.tip['${r.code}']`,{message:r.message||""}))})}catch(e){this.$Message.error(e.message||e.code),this.$emit("success")}finally{this.appeal.load=!1,s["g"].playSendVoice()}return!1},resetAppealForm(){const e=this;this.clearFileMoss(),this.appealType.forEach(t=>{const a=t["value"]+"_appeal",l=t["value"]+"_textareaAppealContent";e.$refs[a]&&e.$refs[a].resetFields(),e.$refs[l]&&e.$refs[l].updateContent("")})}}}),m=h,u=a("2877"),v=Object(u["a"])(m,l,i,!1,null,"f2fa4454",null);t["default"]=v.exports},"945e":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Form",[e.linkList.length<=0?a("Empty",{attrs:{notHint:!1}}):e._l(e.linkList,(function(t,l){return a("FormItem",{key:l,attrs:{prop:"linkList["+l+"].value",rules:{validator:function(t,a,i){e.checkVideoLink(t,e.linkList[l].value,i)},trigger:"change"}}},[a("Row",{attrs:{gutter:5}},[a("Col",{attrs:{flex:"1"}},[a("Input",{staticStyle:{"margin-bottom":"5px"},attrs:{type:"url",pattern:"*://.*",clearable:!e.isReadonly,readonly:e.isReadonly,placeholder:e.placeholder},on:{"on-change":e.onInputChange},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"i.value"}})],1),e.isReadonly?a("Col",[a("a",{attrs:{href:t.value,target:"_new"}},[a("Button",[a("Icon",{attrs:{type:"md-share"}})],1)],1)]):a("Col",[e.linkList.length>=0?a("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"dashed"},on:{click:function(t){return e.del(l)}}},[a("Icon",{attrs:{type:"md-trash"}})],1):e._e()],1)],1)],1)})),e.isReadonly?e._e():a("Button",{attrs:{long:"",disabled:e.linkList.length>=e.max},on:{click:e.add}},[a("Icon",{attrs:{type:"md-add"}}),e._v(" ("+e._s(e.linkList.length)+"/"+e._s(e.max)+") ")],1)],2)],1)},i=[],s=a("ad43"),r=a("02bc"),n=a("e4b4"),o=new s["a"]({props:{placeholder:"",isReadonly:!1,max:{type:Number,default:3},links:{type:String,default:""}},data(){return{linkList:[]}},watch:{},components:{Empty:r["a"]},created(){this.init()},methods:{init(){this.linkList=[],this.links&&"string"==typeof this.links&&this.links.split(",").forEach(e=>{this.linkList.push({value:e})}),this.links&&"object"==typeof this.links&&this.links.forEach(e=>{this.linkList.push({value:e})})},add(){this.linkList.length>=this.max||this.linkList.push({value:""})},del(e){this.linkList.splice(e,1),this.upData()},onInputChange(){this.upData()},upData(){let e=[];for(let t of this.linkList){let a=n["k"].check("link",t.value);t.value&&0==a.code&&e.push(t.value)}this.$emit("input",e.toString())},checkVideoLink(e,t,a){const l=this.$i18n.t("report.messages.videoBadFormat"),i=t;if(!i)return a(this.$i18n.t("report.messages.videoEmpty"));const s=n["k"].check("link",i);0==s.code?a():a(new Error(this.$i18n.t(l)))}}}),p=o,d=a("2877"),c=Object(d["a"])(p,l,i,!1,null,"09e7a5bc",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-6067e70d.2.9.14.js.map