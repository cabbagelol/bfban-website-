(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48022d21"],{"0d7f":function(e,t,a){},"195a":function(e){e.exports=JSON.parse('{"sendTypes":[{"title":"direct","privilege":["normal","admin","root","super"]},{"title":"warn","privilege":["super"]},{"title":"fatal","privilege":["super"]},{"title":"toAll","privilege":["super"]},{"title":"toAdmins","privilege":["super","admin"]},{"title":"toNormals","privilege":["super","admin"]},{"title":"command","privilege":["root","dev"]}],"typeDictionary":["direct","warn","fatal"]}')},"2b11":function(e,t,a){},5052:function(e,t,a){"use strict";a("0d7f")},"686c":function(e,t,a){"use strict";a("f89a")},"72c3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("Row",[t("Col",{attrs:{xs:{push:1},lg:{push:0}}},[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:{name:"home"}}},[e._v(e._s(e.$t("header.index")))]),t("BreadcrumbItem",[e._v(e._s(e.$t("header.profile")))])],1)],1)],1),t("br"),t("Card",{attrs:{"dis-hover":""}},[t("Form",{attrs:{"label-position":"top"}},[t("Row",{attrs:{gutter:15}},[t("Col",[t("Avatar",{attrs:{size:48}},[e._v(e._s(e.currentUser.userinfo.username[0]))])],1),t("Col",{attrs:{flex:"1"}},[t("h3",[e._v(" "+e._s(e.currentUser.userinfo.username)+" ")]),t("p",[e._v(e._s(e.$t("profile.meet",{name:e.currentUser.userinfo.username}))+" ("+e._s(e.currentUser.userinfo.userId)+")")])]),e.currentUser.userinfo.privilege?t("Col",[t("p",[t("b",[e._v(e._s(e.$t("profile.account.form.privilege")))])]),t("PrivilegesTag",{attrs:{data:e.currentUser.userinfo.privilege}})],1):e._e()],1)],1),t("br"),t("Row",{attrs:{gutter:30}},[t("Col",{attrs:{xs:{span:24},sm:{span:6}}},[t("List",{attrs:{border:"",size:"small"}},e._l(e.muen,(function(a,s){return t("ListItem",{key:a.value},[t("a",{on:{click:function(t){return e.upDateUri(e.muen[s].value)}}},[e.muen[s].value==e.muenIndex?t("b",[e._v(" "+e._s(e.$t("profile."+e.muen[a.value].title+".title"))+" ")]):t("span",[e._v(e._s(e.$t("profile."+e.muen[a.value].title+".title")))])])])})),1),t("br"),t("List",{attrs:{border:"",size:"small"}},[t("ListItem",[t("router-link",{attrs:{to:{name:"account",params:{uId:""+e.currentUser.userinfo.userId}}}},[e._v(" "+e._s(e.$t("header.userCenter"))+" "),t("Icon",{attrs:{type:"ios-link"}})],1)],1)],1),t("br"),t("Divider",[e._v(e._s(e.$t("home.bulletin.title")))]),t("Bulletin")],1),t("Col",{attrs:{xs:{span:24},sm:{span:18}}},[0==e.muenIndex?t("account"):e._e(),1==e.muenIndex?t("appearance"):e._e(),2==e.muenIndex?t("message"):e._e(),3==e.muenIndex?t("enhance"):e._e(),4==e.muenIndex?t("media"):e._e()],1)],1)],1),t("br")],1)},o=[],r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[t("div",{staticClass:"md",domProps:{innerHTML:e._s(e.data)}})])},i=[],n={data(){return{data:"⛑"}}},l=n,c=(a("686c"),a("2877")),m=Object(c["a"])(l,r,i,!1,null,null,null),d=m.exports,u=a("d78a"),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"theme"},[t("RadioGroup",{attrs:{size:"large","button-style":"solid"},model:{value:e.themeIndex,callback:function(t){e.themeIndex=t},expression:"themeIndex"}},e._l(e.themes.child,(function(a,s){return t("Badge",{key:s,staticClass:"theme-card",attrs:{text:a.version}},[t("Card",{attrs:{"dis-hovershow":""},on:{click:function(t){e.themeIndex=s}}},[t("div",[t("span",[e._v(e._s(a.authorInfo.authorName))]),t("Divider",{attrs:{type:"vertical"}}),t("span",[e._v(e._s(a.authorInfo.authorUpdate))])],1)]),t("Row",[t("Col",{attrs:{flex:"auto"}},[t("Radio",{attrs:{label:s,align:"center"}},[t("span",[e._v(e._s(a.name))])])],1),t("Col")],1)],1)})),1),t("Divider"),t("div",[t("Row",[t("Col",{attrs:{span:"12"}},[t("Button",{on:{click:e.changeTheme}},[e._v(e._s(e.$t("basic.button.save")))])],1),t("Col",{attrs:{span:"12",align:"right"}},[e._v(" 🦖 ")])],1)],1)],1)},h=[],g=a("e4b4"),f=a("bce8"),v={name:"appearance",data(){return{themes:f,themeIndex:0}},created(){this.getTheme()},methods:{async getTheme(){let e=await g["f"].get("theme");if(e.data&&e.data.value)return this.themes.child.forEach((t,a)=>{t.name==e.data.value.name&&(this.themeIndex=a)}),void await this.$store.dispatch("setTheme",e.data.value);f.child.filter((e,t)=>{e.name==f.default&&(this.themeIndex=t)}),await this.$store.dispatch("setTheme",this.$store.state.$theme)},changeTheme(e){g["f"].set("theme",this.themes.child[this.themeIndex||0]),location.reload()}}},_=v,b=(a("f4e8"),Object(c["a"])(_,p,h,!1,null,"6e41e086",null)),w=b.exports,y=function(){var e=this,t=e._self._c;return t("div",[t("Form",{attrs:{model:e.formItem,"label-position":"top"}},[t("Row",{attrs:{gutter:30}},[t("Col",{attrs:{span:"12"}},[t("FormItem",[t("div",{attrs:{slot:"label"},slot:"label"},[t("Icon",{attrs:{type:"md-key"}}),e._v(" "+e._s(e.$t("signup.form.username")))],1),t("Input",{attrs:{placeholder:"",disabled:""},model:{value:e.formItem.username,callback:function(t){e.$set(e.formItem,"username",t)},expression:"formItem.username"}},[t("a",{attrs:{slot:"append"},on:{click:function(t){e.modal_setusername.show=!e.modal_setusername.show}},slot:"append"},[t("Icon",{attrs:{type:"md-create",size:"15"}})],1)])],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",[t("div",{attrs:{slot:"label"},slot:"label"},[t("Icon",{attrs:{type:"md-lock"}}),e._v(" "+e._s(e.$t("signup.form.password")))],1),t("Input",{attrs:{disabled:"",type:"password"},model:{value:e.formItem.password,callback:function(t){e.$set(e.formItem,"password",t)},expression:"formItem.password"}},[t("a",{attrs:{slot:"append"},on:{click:function(t){e.modal_changePassword.show=!e.modal_changePassword.show}},slot:"append"},[t("Icon",{attrs:{type:"md-create",size:"15"}})],1)])],1)],1),t("Col",{attrs:{span:"12"}},[t("Card",{attrs:{"dis-hover":""}},[t("FormItem",{attrs:{label:e.$t("account.joinedAt")}},[t("Tag",[t("Time",{attrs:{time:e.formItem.joinTime||(new Date).getTime()}})],1)],1)],1)],1),t("Col",{attrs:{span:"12"}},[t("Card",{attrs:{"dis-hover":""}},[t("FormItem",{attrs:{label:e.$t("account.lastOnlineTime")}},[t("Tag",[t("Time",{attrs:{time:e.formItem.lastOnlineTime||(new Date).getTime()}})],1)],1)],1)],1)],1),t("Divider",{attrs:{dashed:""}}),t("FormItem",{attrs:{label:e.$t("profile.account.form.introduction")}},[t("Card",{attrs:{"dis-hover":"",padding:0}},[t("Textarea",{attrs:{toolbar:[[{list:"ordered"},{list:"bullet"}],["bold"]],height:"200px"},model:{value:e.formItem.introduction,callback:function(t){e.$set(e.formItem,"introduction",t)},expression:"formItem.introduction"}})],1)],1),t("Divider",{attrs:{dashed:""}}),null==e.formItem.origin.originName||null==e.formItem.origin.originUserId?[t("Alert",{attrs:{"show-icon":"",type:"error"}},[e._v(" "+e._s(e.$t("account.bindOrigin.title"))+" "),t("Icon",{attrs:{slot:"icon",type:"ios-bulb-outline"},slot:"icon"}),t("template",{slot:"desc"},[t("p",[e._v(e._s(e.$t("account.bindOrigin.content")))]),t("br"),t("router-link",{attrs:{to:"/bindOrigin"}},[t("Button",[e._v(e._s(e.$t("account.bindOrigin.travel")))])],1)],1)],2)]:[t("Row",{attrs:{gutter:30}},[t("Col",{attrs:{flex:"1"}},[t("FormItem",{attrs:{label:e.$t("signup.form.originEmail")}},[t("Input",{attrs:{type:"text",disabled:"",autosize:{minRows:2,maxRows:5},placeholder:""},model:{value:e.formItem.origin.originName,callback:function(t){e.$set(e.formItem.origin,"originName",t)},expression:"formItem.origin.originName"}})],1)],1),t("Col",{attrs:{flex:"1"}},[t("FormItem",{attrs:{label:e.$t("signup.form.originName")}},[t("Input",{attrs:{type:"text",disabled:"",autosize:{minRows:2,maxRows:5},placeholder:""},model:{value:e.formItem.origin.originUserId,callback:function(t){e.$set(e.formItem.origin,"originUserId",t)},expression:"formItem.origin.originUserId"}})],1)],1)],1)],t("Divider",{attrs:{dashed:""}}),t("Row",{attrs:{gutter:30}},[t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.account.form.language")}},[t("Select",{staticClass:"switch-language",attrs:{prefix:"md-globe",placement:"top-end"},on:{"on-change":e.switchLanguage},model:{value:e.formItem.attr.language,callback:function(t){e.$set(e.formItem.attr,"language",t)},expression:"formItem.attr.language"}},e._l(e.languages,(function(a){return t("Option",{key:a.name,attrs:{value:a.name}},[e._v(e._s(a.label))])})),1),t("Alert",{attrs:{"show-icon":""}},[e._v(e._s(e.$t("profile.account.form.languageSyncDescribe")))])],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.account.form.showOrigin")}},[t("Alert",{attrs:{"show-icon":""}},[e._v(e._s(e.$t("profile.account.form.showOriginDescribe")))]),t("i-switch",{model:{value:e.formItem.attr.showOrigin,callback:function(t){e.$set(e.formItem.attr,"showOrigin",t)},expression:"formItem.attr.showOrigin"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.account.form.allowDM")}},[t("Alert",{attrs:{"show-icon":""}},[e._v(e._s(e.$t("profile.account.form.allowDMdescribe")))]),t("i-switch",{model:{value:e.formItem.attr.allowDM,callback:function(t){e.$set(e.formItem.attr,"allowDM",t)},expression:"formItem.attr.allowDM"}})],1)],1)],1),t("Affix",{attrs:{"offset-bottom":5}},[t("Card",{attrs:{padding:10}},[t("Row",[t("Col",{attrs:{flex:"1"}}),t("Col",[t("Button",{attrs:{type:"primary",loading:e.formLoad},on:{click:e.onSave}},[e._v(" "+e._s(e.$t("basic.button.save"))+" ")])],1)],1)],1)],1)],2),t("Modal",{on:{"on-cancel":function(t){e.modal_setusername.index=0}},model:{value:e.modal_setusername.show,callback:function(t){e.$set(e.modal_setusername,"show",t)},expression:"modal_setusername.show"}},[t("p",{attrs:{slot:"header"},slot:"header"},[t("Icon",{attrs:{type:"ios-information-circle"}}),t("span",[e._v(e._s(e.$t("profile.account.modifyName.title")))])],1),t("div",[t("Steps",{attrs:{current:e.modal_setusername.index,size:"small"}},[t("Step",{attrs:{title:e.$t("profile.account.modifyName.steps[0].title")}}),t("Step",{attrs:{title:e.$t("profile.account.modifyName.steps[1].title")}}),t("Step",{attrs:{title:e.$t("profile.account.modifyName.steps[2].title")}})],1),t("Form",{ref:"formValidate",attrs:{"label-position":"top"}},[0==e.modal_setusername.index?t("div",[t("br"),t("Alert",{attrs:{type:"warning"}},[t("template",{slot:"desc"},[t("p",{domProps:{innerHTML:e._s(e.$t("profile.account.modifyName.specification1"))}}),t("p",[e._v(" "+e._s(e.$t("profile.account.modifyName.residueDegree",{changeNameLeft:e.formItem.attr.changeNameLeft||0}))+" ")]),t("br"),t("b",[e._v(" "+e._s(e.$t("profile.account.modifyName.specification2")))])])],2)],1):e._e(),1==e.modal_setusername.index?t("div",[t("br"),t("FormItem",{attrs:{label:e.$t("signup.form.username")}},[t("Input",{attrs:{size:"large",disabled:""},model:{value:e.formItem.username,callback:function(t){e.$set(e.formItem,"username",t)},expression:"formItem.username"}})],1),t("FormItem",{attrs:{label:e.$t("signup.form.newUsername")}},[t("Input",{attrs:{size:"large",placeholder:e.$t("signup.form.newUsername")},model:{value:e.formItem.newname,callback:function(t){e.$set(e.formItem,"newname",t)},expression:"formItem.newname"}})],1),t("FormItem",{attrs:{label:e.$t("captcha.title"),prop:"captcha"}},[t("Input",{attrs:{type:"text",size:"large",maxlength:"4",placeholder:e.$t("captcha.title")},model:{value:e.captchaUrl.value,callback:function(t){e.$set(e.captchaUrl,"value",t)},expression:"captchaUrl.value"}},[t("div",{staticClass:"captcha-input-append",attrs:{slot:"append",alt:e.$t("captcha.get")},slot:"append"},[t("Captcha",{ref:"captcha"})],1)])],1)],1):e._e(),2==e.modal_setusername.index?t("div",{attrs:{align:"center"}},[t("br"),t("Icon",{attrs:{type:"ios-cloud-done",size:"200",color:"#19be6b"}}),t("br")],1):e._e()])],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[e.modal_setusername.index>0&&e.modal_setusername.index<=1?t("Button",{attrs:{size:"large",disabled:""==e.formItem.newname,loading:e.modal_setusername.load},on:{click:function(t){e.modal_setusername.index=e.setUserName()}}},[e._v("下一步 ")]):e._e(),e.modal_setusername.index<=0?t("Button",{attrs:{type:"warning",size:"large",disabled:0==e.formItem.attr.changeNameLeft},on:{click:function(t){e.modal_setusername.index=1}}},[e._v("是的，更变账户名称 ")]):e._e()],1)]),t("Modal",{model:{value:e.modal_changePassword.show,callback:function(t){e.$set(e.modal_changePassword,"show",t)},expression:"modal_changePassword.show"}},[t("p",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("reset.title")))]),t("div",[t("Form",{ref:"formValidate",attrs:{"label-position":"top"}},[t("FormItem",{attrs:{label:e.$t("reset.form.oldPassword")}},[t("Input",{attrs:{placeholder:"******",minlength:"6"},model:{value:e.modal_changePassword.oldpassword,callback:function(t){e.$set(e.modal_changePassword,"oldpassword",t)},expression:"modal_changePassword.oldpassword"}})],1),t("FormItem",{attrs:{label:e.$t("reset.form.newPassword")}},[t("Input",{attrs:{placeholder:"******",minlength:"6"},model:{value:e.modal_changePassword.newpassword,callback:function(t){e.$set(e.modal_changePassword,"newpassword",t)},expression:"modal_changePassword.newpassword"}})],1),t("FormItem",{attrs:{label:e.$t("captcha.title"),prop:"captcha"}},[t("Input",{attrs:{type:"text",size:"large",maxlength:"4",placeholder:e.$t("captcha.title")},model:{value:e.captchaUrl.value,callback:function(t){e.$set(e.captchaUrl,"value",t)},expression:"captchaUrl.value"}},[t("div",{staticClass:"captcha-input-append",attrs:{slot:"append",alt:e.$t("captcha.get")},slot:"append"},[t("Captcha",{ref:"captcha"})],1)])],1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{size:"large",disabled:!e.modal_changePassword.oldpassword&&!e.modal_changePassword.newpassword&&!e.captchaUrl.value,loading:e.modal_changePassword.load},on:{click:function(t){return e.handChangePassword()}}},[e._v(" "+e._s(e.$t("reset.title"))+" ")])],1)])],1)},I=[],$=a("5d71"),x=a("e7f8"),C={name:"account",data(){return{privileges:[],languages:[],formLoad:!1,modal_changePassword:{load:!1,show:!1,newpassword:"",oldpassword:""},modal_setusername:{load:!1,show:!1,index:0},captchaUrl:{value:"",content:""}}},components:{Textarea:$["a"],Captcha:x["a"]},created(){this.http=g["d"].call(this),this.ready()},methods:{async ready(){const e=await Promise.resolve().then(a.t.bind(null,"a7d7",3)),t=await Promise.resolve().then(a.t.bind(null,"7292",3));this.privileges=this.privileges.concat(t.child),this.languages=this.languages.concat(e.child)},handChangePassword(){const{newpassword:e="",oldpassword:t=""}=this.modal_changePassword;this.modal_changePassword.load=!0,this.http.post(g["b"]["user_changePassword"],{data:{data:{newpassword:e,oldpassword:t},encryptCaptcha:this.captchaUrl.hash,captcha:this.captchaUrl.value}}).then(e=>{const t=e.data;if(1===t.success)return this.$Message.success(t.message),this.$store.dispatch("signout").then(()=>{this.signout()}),this.modal_changePassword.show=!1,void this.$router.push({name:"signin"});this.$Message.error(t.message)}).finally(()=>{this.modal_changePassword.load=!1})},signout(){g["c"].post(g["b"]["account_signout"],{headers:{"x-access-token":this.$store.state.user.token}}).then(e=>{const t=e.data;1==t.success&&this.$router.push("/signin")})},switchLanguage(e){this.formItem.attr.language=e},setUserName(){this.modal_setusername.load=!0,this.formItem.newname&&this.http.post(g["b"]["user_changeName"],{data:{data:{newname:this.formItem.newname},encryptCaptcha:this.captchaUrl.hash,captcha:this.captchaUrl.value}}).then(e=>{const t=e.data;1===t.success?(this.modal_setusername.index+=1,this.getUserinfo(),this.$Message.success(t.code)):this.$Message.error(t.message)}).finally(()=>{this.modal_setusername.load=!1})},onSave(){const{introduction:e,attr:t={language:this.$root.$i18n.locale,showOrigin:!1,allowDM:!1}}=this.formItem;this.formLoad=!0,this.http.post(g["b"]["user_me"],{data:{data:{introduction:e,attr:t}}}).then(e=>{const t=e.data;1===t.success&&(t.data.attr.language&&this.$store.dispatch("setLang",t.data.attr.language),this.$Message.success(t.code))}).finally(()=>{this.formLoad=!1})},getUserinfo(){this.http.get(g["b"]["user_me"],{}).then(e=>{const t=e.data;1===t.success&&(this.$store.dispatch("setUserInfo",t.data),this.formItem=t.data)})}},computed:{formItem(){return Object.assign({introduction:"",password:"******",origin:{originName:"",originEmail:""},newname:"",username:"",attr:{language:""}},this.$store.state.$userinfo)},currentUser(){return this.$store.state.user||{token:""}}}},k=C,T=Object(c["a"])(k,y,I,!1,null,"cfc3d8b8",null),U=T.exports,L=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("Tabs",{attrs:{value:e.tagsName}},[t("TabPane",{attrs:{label:e.$t("profile.message.tabsList.itemName"),name:"message0"}},[t("Card",{attrs:{"dis-hover":"",padding:0}},[t("p",{attrs:{slot:"title"},slot:"title"}),t("div",{attrs:{slot:"extra"},slot:"extra"},[t("Button",{attrs:{size:"small",disabled:!e.selectWindow},on:{click:e.setMessageEdit}},[e._v(" "+e._s(e.$t("profile.message.control"))+" ")]),t("Divider",{attrs:{type:"vertical"}}),t("Button",{attrs:{type:"primary",size:"small",loading:e.messageLoad},on:{click:e.getMessage}},[e._v(" "+e._s(e.$t("profile.message.load"))+" ")])],1),e.messageList[e.selectWindow]?t("Row",[t("Col",{staticClass:"message-user"},[e._l(e.messageUser,(function(a,s){return t("div",{key:s},[t("Row",{staticClass:"message-user-item",style:"font-weight: "+(e.selectWindow==a.value?"bold":""),attrs:{gutter:10,type:"flex",justify:"center",align:"middle"}},[t("Col",[e.messageList[a.type]?t("Badge",{attrs:{count:e.messageList[a.type]["num"]||0}},[t("Avatar",{attrs:{icon:"md-notifications"}})],1):t("Avatar",{attrs:{icon:"md-notifications"}},[e._v(" "+e._s(a.text[0])+" ")])],1),t("Col",{attrs:{flex:"1"}},[t("p",[t("b",[e._v(e._s(a.text.toString()))])])]),t("Col",[t("a",{on:{click:function(t){e.selectWindow=a.value}}},[e._v(e._s(e.$t("profile.message.look")))])])],1)],1)}))],2),t("Col",{staticClass:"message-content",attrs:{flex:"1"}},[e.control.open?t("Row",{staticClass:"message-content-control"},[t("Col",[t("Checkbox",{on:{"on-change":e.onBatchAll},model:{value:e.control.all,callback:function(t){e.$set(e.control,"all",t)},expression:"control.all"}}),t("Divider",{attrs:{type:"vertical"}})],1),t("Col",{attrs:{flex:"1"}},[t("Select",{staticStyle:{width:"200px"},attrs:{size:"small"},model:{value:e.control.model,callback:function(t){e.$set(e.control,"model",t)},expression:"control.model"}},e._l(e.control.list,(function(a){return t("Option",{key:a.value,attrs:{value:a.value}},[e._v(" "+e._s(e.$t("profile.message.tabsList.form."+a.label))+" ")])})),1)],1),t("Col",[t("Button",{attrs:{size:"small",disabled:e.control.model<0,loading:e.control.load},on:{click:e.onBatchOperation}},[e._v(" "+e._s(e.$t("basic.button.submit"))+" ")])],1)],1):e._e(),e._l(e.messageList[e.selectWindow].child,(function(a,s){return t("div",{key:s,staticClass:"message-content-item"},[t("Row",{attrs:{gutter:18}},[e.control.open?t("Col",[t("Checkbox",{model:{value:a.choose,callback:function(t){e.$set(a,"choose",t)},expression:"child.choose"}})],1):e._e(),t("Col",[t("Avatar",{attrs:{src:"/assets/img/logo.75abcc53.png"}})],1),t("Col",{attrs:{flex:"1"}},[t("Row",[t("Col",{attrs:{flex:"1"}},[t("Time",{attrs:{time:a.time}})],1),t("Col",[0==a.haveRead?t("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.onMessageMark(a.id,0)}}},[t("Icon",{attrs:{type:"md-eye",size:"20"}})],1):e._e(),t("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.onMessageMark(a.id,2)}}},[t("Icon",{attrs:{type:"md-trash",color:"red",size:"20"}})],1)])],1),t("Card",{attrs:{"dis-hover":"",padding:5}},[e._v(e._s(a.content))])],1)],1),t("divider",{attrs:{size:"small"}})],1)})),"direct"==e.messageList[e.selectWindow].type?t("div",{staticClass:"message-content-footer"},[t("Button",{attrs:{long:"",type:"primary"}},[t("router-link",{attrs:{to:{path:"/account/"+e.selectWindow,query:{repeat:!0}}}},[t("Icon",{attrs:{type:"ios-send",size:"20"}})],1)],1)],1):e._e()],2)],1):[t("div",{staticClass:"message-content-not"},[e._v(e._s(e.$t("basic.tip.notcontent")))])]],2)],1),e.isAdmin?t("TabPane",{attrs:{label:e.$t("profile.message.tabsSend.itemName"),name:"message1"}},[t("Card",{attrs:{"dis-hover":""}},[t("Form",{attrs:{slot:"title",model:e.message,rules:e.message.ruleValidate},slot:"title"},[t("Row",{attrs:{gutter:30}},[t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.message.tabsSend.messageMethod"),prop:"type"}},[t("Select",{attrs:{transfer:!0},model:{value:e.message.type,callback:function(t){e.$set(e.message,"type",t)},expression:"message.type"}},e._l(e.message.list,(function(a,s){return t("Option",{directives:[{name:"show",rawName:"v-show",value:a.privilege.filter(t=>e.currentUser.userinfo.privilege.includes(t)).length,expression:"item.privilege.filter(p => currentUser.userinfo.privilege.includes(p) ).length"}],key:s,attrs:{value:a.title,label:e.$t("profile.message.types."+a.title+".text")}},[e._v(" "+e._s(e.$t("profile.message.types."+a.title+".text"))+" "),t("p",{staticStyle:{margin:"5px 0","font-size":"10px"}},[e._v(" "+e._s(e.$t("profile.message.types."+a.title+".describe"))+" ")]),t("PrivilegesTag",{attrs:{data:a.privilege}})],1)})),1)],1)],1),e.message.typeDictionary.includes(e.message.type)?t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.message.tabsSend.messageID"),prop:"id"}},[t("AutoComplete",{attrs:{data:e.message.playerList,placeholder:e.$t("profile.message.tabsSend.messageID")},model:{value:e.message.id,callback:function(t){e.$set(e.message,"id",t)},expression:"message.id"}},e._l(e.message.playerList,(function(a,s){return t("Option",{key:s,attrs:{value:a.id}},[t("Avatar",{attrs:{src:a.avatarLink||""}},[e._v(e._s(a.username[0]))]),e._v("  "),t("span",[e._v(e._s(a.username))]),t("Tag",{staticStyle:{float:"right"}},[e._v(" "+e._s(a.id)+" ")])],1)})),1)],1)],1):e._e()],1),t("FormItem",{attrs:{label:e.$t("profile.message.tabsSend.content"),prop:"content"}},[t("Input",{attrs:{"show-word-limit":"",type:"textarea",placeholder:e.$t("profile.message.placeholder"),maxlength:1e3,autosize:{minRows:5,maxRows:10}},model:{value:e.message.content,callback:function(t){e.$set(e.message,"content",t)},expression:"message.content"}})],1)],1),t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{flex:"1"}}),t("Col",[t("Button",{attrs:{type:"primary",loading:e.message.load,disabled:!e.message.type||!e.message.content},on:{click:e.putMessage}},[e._v(e._s(e.$t("basic.button.commit")))])],1)],1)],1)],1):e._e()],1)],1)},M=[],P=a("890e"),D=a("195a"),O=new P["a"]({name:"message",data(){return{that:this,tagsName:"message0",messageLoad:!1,selectWindow:"",message:{list:D.sendTypes,typeDictionary:D.typeDictionary,ruleValidate:{type:[{required:!0,trigger:"blur"}],id:[{required:!0,trigger:"blur"}],content:[{required:!0,trigger:"blur"}]},messages:[],playerList:[],show:!1,load:!1,type:"",id:"",content:""},messageUser:[],messageList:{},control:{load:!1,open:!1,all:!1,model:-1,list:[{value:0,label:"read"},{value:2,label:"del"}]}}},components:{PrivilegesTag:u["a"]},watch:{$route:"loadData"},created(){this.http=g["d"].call(this),this.loadData()},methods:{async loadData(){await this.getMessage(),this.message.type=this.message.list[0].title,this.messageUser.length>0&&(this.selectWindow=this.messageUser[0].value)},resetMessageFrom(){this.message.id="",this.message.content="",this.message.type=this.message.list[0].title},onBatchAll(){this.messageList[this.selectWindow].child.forEach(e=>{e.choose=this.control.all})},onBatchOperation(){let e=[];this.messageList[this.selectWindow].child.forEach(t=>{if(t.choose)switch(this.control.model){case 0:0==t.haveRead&&e.push(this.onMessageMark(t.id,this.control.model));break;case 1:e.push(this.onMessageMark(t.id,this.control.model));break}}),this.control.load=!0,new Promise.all(e,()=>{}).finally(()=>{this.control.load=!1})},async onMessageMark(e,t){await this.http.post(g["b"]["user_message_mark"],{params:{id:e,type:["read","unread","del"][t]}}),this.getMessage()},getPlayerList(e){this.message.load=!0,this.message.playerList=[],e.length<=2||"number"==typeof e||g["c"].get(g["b"]["users"],{params:{param:e.trim()}}).then(e=>{const t=e.data;1==t.success&&(this.message.playerList=t.data),this.message.load=!1})},putMessage(){const{uId:e}=this.$route.params;this.http.post(g["b"]["user_message"],{data:{data:{toUserId:this.message.id||e,type:this.message.type,content:this.message.content}}}).then(e=>{1==e.data.success?this.$Message.success(e.data.message):this.$Message.error(e.data.message)}).finally(()=>{this.resetMessageFrom(),this.message.load=!1,this.message.show=!1})},setMessageEdit(){this.control.open=!this.control.open},async getMessage(){return this.messageLoad=!0,await this.http.get(g["b"]["user_message"]).then(e=>{const t=e.data;if(1==t.success){this.message.messages=t.data.messages;let e=[],a={};t.data.messages.forEach(t=>{let s=0;switch(t.type){case"warn":e.forEach(e=>{e.type==t.type&&(s+=1)}),s<=0&&e.push({text:"@"+this.$i18n.t("profile.message.types."+t.type),value:t.type,type:t.type});break;case"reply":case"direct":e.forEach(e=>{e.value==t.byUserId&&(s+=1)}),s<=0&&e.push({text:t.byUserId,value:t.byUserId,type:t.type});break}let o="warn"==t.type?t.type:t.byUserId;a[o]||(a[o]={child:[],num:0}),a[o].child.push(Object.assign({time:t.createTime,content:t.content,choose:!1},t)),a[o].type=t.type,a[o].num=a[o].child.length||0}),this.messageList=a,this.messageUser=e}}).finally(()=>{this.messageLoad=!1}),!0}},computed:{isAdmin(){const e=this.$store.state.user,t=!!e&&e.userinfo.privilege.concat("").includes("admin");return Boolean(t)},currentUser(){return this.$store.state.user}}}),z=O,N=(a("5052"),Object(c["a"])(z,L,M,!1,null,"008e5dfc",null)),R=N.exports,B=function(){var e=this,t=e._self._c;return t("div",e._l(e.enhance,(function(a,s){return t("div",{key:s},[t("Card",[t("Row",[t("Col",{attrs:{flex:"auto"}},[t("h1",[e._v(e._s(a.name))]),t("p",[e._v(e._s(a.dis))])]),t("Col",[t("i-switch",{attrs:{disabled:""},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"i.value"}})],1)],1)],1),t("br")],1)})),0)},F=[],S={data(){return{enhance:[{name:"底部工具栏",dis:"网站顶部附属的工具栏，为用户提供玩家持续关注等功能",value:!1},{name:"未处理提醒",dis:"为管理员提供自动刷新，关注未处理玩家做出站内提醒",value:!1},{name:"桌面通知",dis:"需要安装客户端，桌面级提醒通知",value:!1},{name:"多标签举报",dis:"允许同页面上，创建多个举报表单",value:!0},{name:"同步语言",dis:"个人信息的语言同步客户端",value:!1},{name:"游览标记",dis:"记录访问过玩家，并在列表中标记它，如果同时启动[未处理提醒]会标记自动刷新出现的新玩家",value:!1},{name:"历史",dis:"记录访问过玩家，在历史列表中可以再次访问",value:!1},{name:"交互声音",dis:"不同交互提供不同的声音",value:!1}]}}},A=S,j=Object(c["a"])(A,B,F,!1,null,null,null),W=j.exports,E=a("1770"),H={name:"profile",data(){return{privileges:[],muenIndex:0,muen:[{title:"account",value:"0"},{title:"appearance",value:"1"},{title:"message",value:"2"},{title:"enhance",value:"3"},{title:"media",value:"4"}]}},components:{Bulletin:d,appearance:w,account:U,message:R,enhance:W,media:E["a"],PrivilegesTag:u["a"]},created(){const e=this.$route.params.pagename;if(void 0==e)return void this.upDateUri(0,!0);let t=this.muen.filter(t=>t.title.toLocaleLowerCase()==e)[0].value;this.upDateUri(t||this.muenIndex)},methods:{upDateUri(e,t=!1){this.muenIndex=e,this.$router.push({path:(t?"profile/":"")+this.muen[e].title.toLowerCase()})}},computed:{isLogin(){return Boolean(this.$store.state.user)},isAdmin(){const e=this.$store.state.user,t=!!e&&e.userinfo.privilege.concat("").includes("admin");return Boolean(t)},currentUser(){return this.$store.state.user}}},q=H,V=Object(c["a"])(q,s,o,!1,null,"5d1c5ec5",null);t["default"]=V.exports},ae97:function(e,t,a){},c72a:function(e,t,a){"use strict";a("2b11")},e7f8:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"captcha-view",style:`cursor: ${e.captchaTime.count<=0?"pointer":"not-allowed"};height: ${e.height}`,on:{click:e.refreshCaptcha}},[e.content?t("div",{class:""+(e.captchaTime.count<=0?"disable":""),domProps:{innerHTML:e._s(e.content)}}):t("span",{staticClass:"tip"},[e.disable?t("div",{staticStyle:{"min-width":"80px"}},[t("Icon",{attrs:{type:"md-close",size:"20"}})],1):[e._v(" "+e._s(e.$t("captcha.get"))+" ")]],2),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.content&&e.captchaTime.count<=0,expression:"content && captchaTime.count <= 0"}],staticClass:"captcha-view-icon"},[e.disable?t("Icon",{attrs:{type:"md-close",size:"20"}}):t("Icon",{attrs:{type:"md-refresh",size:"20"}})],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.captchaTime.count>0,expression:"captchaTime.count > 0"}],staticClass:"count"},[e._v(e._s(e.captchaTime.count)+"s")])],1)},o=[],r=a("e4b4"),i={name:"Captcha",props:{id:{type:String,default:"0"},disable:{type:Boolean,default:!1},seconds:{type:Number,default:60},height:{type:String,default:"40px"}},data(){return{postload:!1,hash:"",content:"",capthcaHash:{},captchaTime:{fun:null,count:0,lock:!1}}},created(){let e=r["f"].session().get("captcha");e?this.capthcaHash=e.data:r["f"].session().set("captcha",{[`${this.id}_${this.$route.name}`]:this.seconds})},destroyed(){clearInterval(this.captchaTime.fun),this.captchaTime.fun=null},methods:{async refreshCaptcha(){let e=await r["f"].session().get("captcha"),t=this;e.code<=0&&(e={data:{value:this.seconds}}),this.disable||this.postload||this.captchaTime.count>0||(this.postload=!0,r["c"].get(r["b"]["captcha"],{params:{t:Math.random()}}).then(e=>{1===e.data.success&&(t.capthcaHash=Object.assign({[t.$route.name]:0}),this.hash=e.data.data["hash"],this.content=e.data.data["content"])}).finally(a=>{setTimeout((function(){t.postload=!1}),800),Object.keys(e.data.value).indexOf(this.$route.name)>=0&&(this.captchaTime.count=e.data.value[this.$route.name]),this.capthcaTimeout(this.captchaTime.count||this.seconds)}))},capthcaTimeout(e){const t=this;let a;t.captchaTime.lock||(t.captchaTime.count=e,a=setInterval((function(){if(t.captchaTime.count<=0)return clearInterval(a),void(t.captchaTime.lock=!1);t.captchaTime.count-=1,t.capthcaHash=Object.assign({[`${t.id}_${t.$route.name}`]:t.captchaTime.count}),r["f"].session().set("captcha",t.capthcaHash)}),1e3),t.captchaTime.lock=!0)}},computed:{isCaptcha(){return this.hash&&this.content}}},n=i,l=(a("c72a"),a("2877")),c=Object(l["a"])(n,s,o,!1,null,null,null);t["a"]=c.exports},f4e8:function(e,t,a){"use strict";a("ae97")},f89a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-48022d21.2.0.2.js.map