(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-678e2f7c","chunk-2d0da581"],{"0c26":function(t,e,a){"use strict";a("32b8")},"32b8":function(t,e,a){},"6acc":function(t){t.exports=JSON.parse('{"defaultIndex":0,"default":"bf1","child":[{"value":"bf1","full_name":"bf1","bk_file":"images/games/bf1","bk_src":"//media.contentapi.ea.com/content/dam/gin/images/2017/01/battlefield-1-keyart-5452x3859.jpg.adapt.crop1x1.767p.jpg","logo_src":"//media.contentapi.ea.com/content/dam/gin/common/logos/layer-1.png","app_assets_bk_file":"assets/images/games/bf1/bf.jpg","app_assets_logo_file":"assets/images/games/bf1/logo.png"},{"value":"bfv","full_name":"bfv","bk_file":"images/games/bfv","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2018/05/bfv-campaignart-standard-large.jpg.adapt.crop1x1.767p.jpg","bk_width":150,"logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/bfv-logo-white.png","app_assets_bk_file":"assets/images/games/bfv/bf.jpg","app_assets_logo_file":"assets/images/games/bfv/logo.png"},{"value":"bf6","full_name":"bf2042","bk_file":"images/games/bf6","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg","logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg","app_assets_bk_file":"assets/images/games/bf6/bf.jpg","app_assets_logo_file":"assets/images/games/bf6/logo.png"}]}')},"840b":function(t,e,a){},b3a8:function(t,e,a){"use strict";a("840b")},c24f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("Row",[a("Col",{attrs:{flex:"1",xs:{push:1},lg:{push:0}}},[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),a("BreadcrumbItem",[t._v(t._s(t.$t("account.title")))])],1)],1),t.currentUser&&t.currentUser.userinfo?a("Col",[a("Poptip",{attrs:{trigger:"hover",disabled:t.isChat}},[a("Button",{attrs:{disabled:t.isChat},on:{click:t.openMessage}},[a("Icon",{attrs:{type:"ios-chatbubbles"}}),t._v(" "+t._s(t.$t("account.message.chat"))+" ")],1),a("div",{attrs:{slot:"content"},slot:"content"},[t.account.attr.allowDM?t._e():a("Alert",{attrs:{"show-icon":"",type:"error"}},[t._v(" "+t._s(t.$t("account.message.hint.taOffChat"))+" ")]),t.account.id==t.currentUser.userinfo.userId?a("Alert",{attrs:{"show-icon":"",type:"error"}},[t._v(" "+t._s(t.$t("account.message.hint.selfTalk"))+" ")]):t._e()],1)],1)],1):t._e()],1),a("br"),t.account?[a("div",{attrs:{"dis-hover":"",bordered:""}},[a("Confetti",{attrs:{y:20,emojiCount:300,switch:new Date(t.account.joinTime).getTime()<new Date("2020 01-01").getTime()||t.account.id<=1e3}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{attrs:{justify:"center",align:"middle"}},[a("br"),a("UserAvatar",{attrs:{src:t.account.userAvatar?""+t.account.userAvatar:""}}),a("div",{staticClass:"account-username"},[a("h1",{attrs:{title:t.$t("account.username")}},[t._v(" "+t._s(t.account.username||"username")+" ")]),t.account.attr.introduction?[a("span",{staticStyle:{opacity:".6"},domProps:{innerHTML:t._s(t.account.attr.introduction)}})]:t._e()],2),a("Row",{attrs:{gutter:10,type:"flex",justify:"center",align:"middle"}},[a("Col",[t.account.privilege?a("PrivilegesTag",{attrs:{data:t.account.privilege}}):a("p",[t._v("-")]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.role")))])],1),a("Divider",{attrs:{type:"vertical"}}),a("Col",[t.account.joinTime?a("Tag",{attrs:{type:"border",size:"large",color:"primary"}},[a("TimeView",{attrs:{time:t.account.joinTime||new Date}},[a("Time",{attrs:{time:t.account.joinTime||new Date}})],1)],1):a("p",[t._v("-")]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.joinedAt")))])],1),a("Divider",{attrs:{type:"vertical"}}),a("Col",[t.account.lastOnlineTime?a("Tag",{attrs:{type:"border",size:"large",color:"#df22ff"}},[a("TimeView",{attrs:{time:t.account.lastOnlineTime||new Date}},[a("Time",{attrs:{time:t.account.lastOnlineTime||new Date}})],1)],1):a("p",[t._v("-")]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.lastOnlineTime")))])],1),t.account.attr&&t.account.attr.achievements&&Object.keys(t.account.attr.achievements).length>0?[a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("AchievementsTag",{attrs:{data:t.account.attr.achievements,size:"17px","max-overflow":3}}),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("profile.achievement.title")))])],1)]:t._e(),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("Poptip",{attrs:{transfer:!0}},[a("h3",[t._v(t._s(t.account.reportNum||"-")+" "),a("Icon",{attrs:{type:"md-more"}})],1),t.account.statusNum?a("Row",{staticStyle:{"text-align":"center"},attrs:{slot:"content",gutter:15,type:"flex",justify:"center",align:"middle"},slot:"content"},[t.isLogin?[a("Col",[a("b",[t._v(t._s(t.account.statusNum["0"]||"-"))]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("basic.status.0.text")))])]),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("b",[t._v(t._s(t.account.statusNum["1"]||"-"))]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("basic.status.1.text")))])]),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("b",[t._v(t._s(t.account.statusNum["4"]||"-"))]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("basic.status.4.text")))])]),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("b",[t._v(t._s(t.account.reportNum-(t.account.statusNum["0"]+t.account.statusNum["1"]+t.account.statusNum["4"])))]),a("p",{staticClass:"account-info-p"},[t._v("···")])]),a("Col",[t._v("=")]),a("Col",[a("b",[t._v(t._s(t.account.reportNum||"-"))]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.reportNum")))])])]:t._e(),a("Spin",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],attrs:{size:"large"}},[a("div",[a("Icon",{attrs:{type:"md-lock",size:"30"}})],1),a("Button",{attrs:{to:{name:"signin"}}},[t._v(t._s(t.$t("header.signin")))])],1)],2):t._e()],1),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.reportNum")))])],1),a("Divider",{attrs:{type:"vertical"}}),a("Col",[t.url?a("vue-qr",{attrs:{text:t.url,size:60,margin:3}}):t._e()],1)],2)],1)],1)],1)],1),a("br"),a("div",{staticClass:"content"},[a("Row",{attrs:{gutter:t.isAttachedContent?0:15}},[a("Col",{staticStyle:{width:"100%"},attrs:{xm:{span:24},lg:{span:24}}},[a("Card",{attrs:{"dis-hover":"",padding:0}},[a("Table",{attrs:{"show-header":"",border:!1,"no-data-text":t.$t("basic.tip.noReports"),columns:t.report.columns,data:t.report.data}})],1),a("br"),a("Row",[a("Col",{attrs:{xs:{span:23,push:1},lg:{span:24,push:0}}},[a("Page",{staticClass:"page",attrs:{"show-total":"","page-size":t.limit,current:t.page,total:t.total,size:"small"},on:{"on-change":t.getUserReports}})],1)],1)],1)],1)],1),a("Modal",{on:{"on-ok":t.onPushMessage},model:{value:t.message.show,callback:function(e){t.$set(t.message,"show",e)},expression:"message.show"}},[a("Form",[a("FormItem",{attrs:{label:t.$i18n.t("account.message.chat")}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.message.content,callback:function(e){t.$set(t.message,"content",e)},expression:"message.content"}})],1)],1)],1)]:[a("div",{attrs:{align:"center"}},[a("Empty")],1)]],2)},i=[],o=a("ad43"),r=a("02bc"),n=a("658f"),c=a.n(n),l=a("808f"),u=a("9648"),p=a("eb8a"),m=a("22ca"),d=a("e4b4"),g=a("d78a"),h=a("fb1c"),f=a("6acc"),v=new o["a"]({name:"space",data(){return{games:f.child,load:!1,account:{username:"",originId:"",privilege:"",createDatetime:"",attr:{allowDM:!1}},report:{columns:[{title:this.$i18n.t("account.reported"),key:"originName",fixed:"left",minWidth:200,maxWidth:300,ellipsis:!0,tooltip:!0,render:(t,e)=>{const a=this;return t("row",{props:{type:"flex",align:"middle"}},[t("col",[t("Avatar",{props:{src:e.row.avatarLink},style:{margin:"0 10px 0 0"}})]),t("col",[t("a",{attr:{title:e.row.originName},style:{overflow:"hidden",display:"block",width:"100px","text-overflow":"ellipsis","white-space":"nowrap"},on:{click(){a.$router.push({name:"player",params:{ouid:e.row.originPersonaId}})}}},e.row.originName)])])}},{title:this.$i18n.t("signup.form.originId"),key:"originPersonaId",ellipsis:!0,width:200,align:"center",render:(t,e)=>t("div",[t("p",e.row.originPersonaId)])},{title:this.$i18n.t("account.status"),key:"status",width:200,align:"center",render:(t,e)=>t("div",[t(p["a"],{props:{status:e.row.status}},e.row.status)])},{title:this.$i18n.t("list.colums.reportTime"),key:"createTime",sortable:!0,minWidth:150,render:(t,e)=>t("Tag",{props:{color:"primary"}},[t(u["a"],{props:{time:e.row.createTime}},[t("Time",{props:{time:e.row.createTime,type:"datetime"}})])])},{title:this.$i18n.t("list.colums.updateTime"),key:"updateTime",align:"center",width:200,sortable:!0,render:(t,e)=>t("tag",{props:{color:"primary"}},[t(u["a"],{props:{time:e.row.createTime}},[t("Time",{props:{time:e.row.updateTime}})])])}],data:[]},limit:20,page:1,total:100,cheaterStatus:[],url:"",message:{id:"",show:!1,load:!1,content:""}}},watch:{$route:"loadData"},components:{PrivilegesTag:g["a"],AchievementsTag:h["a"],Empty:r["a"],UserAvatar:l["a"],cheaterStatusView:p["a"],TimeView:u["a"],Confetti:m["a"],vueQr:c.a},created(){this.http=d["e"].call(this),this.loadData()},methods:{async loadData(){const{uId:t}=this.$route.params;await d["o"].initUtil().then(t=>{this.cheaterStatus=t.cheaterStatus,this.url=window.location.href}),this.getUserInfo(t)},getUserInfo(t){this.$Loading.start(),this.http.get(d["c"]["user_info"],{params:{id:t}}).then(t=>{const e=t.data;this.$route.query.repeat&&this.openMessage(),1!==e.success?(this.account="",this.$Message.warning(e.code)):this.account=e.data}).catch(t=>{this.$Loading.error()}).finally(()=>{this.getUserReports()})},openMessage(){this.account.attr.allowDM?this.account.id!=this.currentUser.userinfo.userId?this.message.show=!0:this.$Message.error(this.$i18n.t("account.message.hint.selfTalk")):this.$Message.error(this.$i18n.t("account.message.hint.taOffChat"))},onPushMessage(){const{uId:t}=this.$route.params;t&&this.http.post(d["c"]["user_message"],{data:{data:{toUserId:this.message.id||t,type:"direct",content:this.message.content}}}).then(t=>{if(1!=t.data.success)switch(t.data.error){case"message.denied":this.$Message.error(this.$i18n.t("account.message.hint.denied"));break;case"message.blocked":this.$Message.error(this.$i18n.t("account.message.hint.taOffChat"));break;default:this.$Message.error(t.data.message)}else this.$Message.success(t.data.message)}).finally(()=>{this.message.load=!1,this.message.show=!1})},getUserReports(t){const{uId:e}=this.$route.params;e&&(this.load=!0,d["d"].get(d["c"]["user_reports"],{params:{id:e,skip:(t||1)-1,limit:this.limit}}).then(t=>{const e=t.data;let a=[];1===e.success&&(e.data.forEach(t=>a.push(t)),this.report.data=a,this.total=e.total)}).finally(()=>{this.$Loading.finish(),this.load=!1}))}},computed:{isAttachedContent(){return!this.account.attr.introduction&&!this.account.origin},isChat(){return!this.account.attr.allowDM||this.account.id==this.currentUser.userinfo.userId}}}),_=v,b=(a("0c26"),a("2877")),w=Object(b["a"])(_,s,i,!1,null,null,null);e["default"]=w.exports},eb8a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.status>=0?a("Tag",{attrs:{color:t.cheaterStatusClass(t.status||0)}},[t._v(" "+t._s(t.$t("basic.status."+(t.status||0)+".text"))+" "),a("span",{staticClass:"judge-action-before-icon"},[a("Poptip",{attrs:{trigger:"hover",transfer:!0,"word-wrap":"",width:"200",content:t.$t("basic.status."+(t.status||0)+".describe")}},[a("Icon",{attrs:{type:"md-help"}})],1)],1)]):t._e()},i=[],o=a("e4b4"),r={props:{status:{type:Number,default:0}},data(){return{util:o["o"],cheaterStatus:[]}},watch:{$route:"loadData"},created(){this.loadData()},methods:{async loadData(){await o["o"].initUtil().then(t=>{this.cheaterStatus=t.cheaterStatus})},cheaterStatusClass(t){const e="#535353";if(null==t)return e;let a=this.cheaterStatus.filter(e=>e.value==t);return a.length<=0?e:a[0]["class"]||e}}},n=r,c=(a("b3a8"),a("2877")),l=Object(c["a"])(n,s,i,!1,null,"f0c53fe2",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-678e2f7c.2.9.14.js.map