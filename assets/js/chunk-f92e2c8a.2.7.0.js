(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f92e2c8a"],{"2bf3":function(t,e,a){t.exports=a.p+"assets/img/index-gl_zh-CN.1881c836.png"},"689f":function(t){t.exports=JSON.parse('{"static":false,"child":[{"name":"菜萌","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1214617226&s=100&t=1384608689","identity":["BFBAN(WEB/APP)开发者"],"content":"我非常喜欢《战地风云》，但是一直因为作弊者的问题被影响正常游戏，在某个时刻我参与了BFBAN，维护不同端，或许能为BFBAN添瓦. \\n\\n祝愿BFBAN能守护一片无作弊者环境","showLang":["zh-CN"]},{"name":"摸鱼校尉弦声声","avatar":"https://i0.hdslb.com/bfs/face/b55d20e2ba53717ac0e92a6645859c016cfc6ec1.jpg","identity":["服主","Bilibili Up"],"content":"制外挂总要付出代价\\n你可能会被诋毁嘲笑这毫无意义，但这件事，你不是一个人在战斗\\n之前网站上有一些鉴定错误的现象\\n比如不是外挂标记为实锤，或者是外挂没有实锤，大家发现都可以私信我们\\n大家如果想加入联BAN可以私信联合视频的UP主\\n游戏不限，只要能抵制外挂做贡献就可以，任何形式抵制外挂都欢迎，有战地的私服更好","showLang":["zh-CN"]}]}')},7784:function(t,e,a){var s={"./index-gl_en-US.png":"c0b1","./index-gl_zh-CN.png":"2bf3"};function i(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="7784"},"84fb":function(t,e,a){"use strict";a("d106")},aab5:function(t,e,a){"use strict";a("efc5")},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"ivu-alert-with-banner home-banner",staticStyle:{"background-image":"url('../assets/images/index-bk.png')"}},[e("Row",[e("Col",{attrs:{xs:{span:22,offset:1},sm:12,md:12,lg:{span:9,offset:0}}},[e("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("home.cover.h1"))+" ")]),e("h2",[t._v(t._s(t.$t("home.cover.h2")[Math.floor(2*Math.random())]))]),e("h3",[t._v(t._s(t.$t("home.cover.h3")))]),e("br"),e("p",[t._v(t._s(t.$t("home.cover.h4")))]),e("Divider"),e("router-link",{attrs:{to:{name:"signup"}}},[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"primary"}},[t._v(t._s(t.$t("signup.title")))])],1),e("Divider",{attrs:{type:"vertical"}}),e("router-link",{attrs:{to:{name:"about"}}},[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"text"}},[e("Icon",{attrs:{type:"ios-help-circle-outline"}}),t._v(" "+t._s(t.$t("home.cover.subButton"))+" ")],1)],1),e("Row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:10}},[e("Col",{attrs:{span:"12"}},[e("router-link",{attrs:{to:{name:"site_stats"}}},[e("Card",{attrs:{"dis-hover":""}},[e("h3",[t._v(t._s(t.statistics.reports||0))]),e("span",[t._v(t._s(t.$t("home.cover.dataReceived")))])])],1)],1),e("Col",{attrs:{span:"12"}},[e("router-link",{attrs:{to:{name:"site_stats"}}},[e("Card",{attrs:{"dis-hover":""}},[e("h3",[t._v(t._s(t.statistics.confirmed||0))]),e("span",[t._v(t._s(t.$t("home.cover.confirmData")))])])],1)],1)],1),e("br"),e("p",[t._v(t._s(t.$t("home.cover.endTime",{time:t.bannerTime})))]),e("br")],1),e("Col",{staticClass:"mobile-hide",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{span:"16",lg:{span:14,push:1},type:"flex",align:"center",justify:"center"}},[e("Card",{attrs:{"dis-hover":"",padding:0}},[e("img",{staticClass:"ivu-row-top",staticStyle:{"margin-bottom":"-10px","border-radius":"5px"},attrs:{src:t.bannerImage,width:"100%"}})])],1)],1)],1)])]),e("div",{staticClass:"home-box mobile-hide ivu-primary"},[e("div",{staticClass:"container"},[e("Row",[e("Col",{attrs:{lg:{span:10,push:0}}},[e("h1",{attrs:{align:"left"}},[t._v(t._s(t.$t("home.activity.title")))]),e("h5",{attrs:{align:"left"},domProps:{innerHTML:t._s(t.$t("home.activity.description",{report:t.statistics.reports||0,cheater:t.statistics.confirmed||0}))}})]),e("Col",{attrs:{lg:{span:11,push:3},type:"flex",align:"right",justify:"center"}},[e("router-link",{attrs:{to:{name:"player_list"}}},[e("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"dashed"}},[t._v(" "+t._s(t.$t("home.activity.more"))+" ")])],1)],1)],1)],1),e("div",{staticClass:"lean-box"},[e("div",{staticClass:"wrapper",style:"animation: rowup "+2.8*t.activities_l.length+"s linear infinite;"},t._l(t.activities_l,(function(a){return e("div",{key:a.id,staticClass:"icon-pair"},t._l(a,(function(a){return e("Card",{key:a.id,staticClass:"icon"},[e("div",{staticStyle:{"margin-top":"-80px"},attrs:{align:"center"}},[e("Avatar",{attrs:{size:"80",src:a.playerAvatarLink}},[t._v(" "+t._s(a.username||a.byUserName||a.toPlayerName||"null")+" ")]),e("p",[e("br"),"judgement"==a.type?e("Tag",{attrs:{color:"success"}},[t._v(" "+t._s(t.$t("basic.privilege.admin"))+" ")]):t._e(),t._v(" "+t._s(a.username||a.byUserName||a.toPlayerName||"null")+" "),e("Divider",{attrs:{type:"vertical"}}),a.createTime?e("Time",{attrs:{time:a.createTime}}):t._e()],1)],1),"report"===a.type?e("span",[e("router-link",{attrs:{to:{name:"account",params:{uId:""+a.byUserId}}}},[t._v(" "+t._s(a.byUserName)+" ")]),t._v(" "+t._s(t.$t("home.activity.activities.report"))+" "),e("Tag",[t._v(" "+t._s(t.$t("basic.games."+a.game))+" ")]),e("router-link",{attrs:{to:{name:"player",params:{game:""+a.game,ouid:""+a.playerOriginPersonaId}}}},[t._v(" "+t._s(a.toPlayerName)+" ")])],1):t._e(),"register"===a.type?e("span",[e("router-link",{attrs:{to:{name:"account",params:{uId:""+a.byUserId}}}},[t._v(" "+t._s(a.byUserName)+" ")]),t._v(" "+t._s(t.$t("home.activity.activities.join"))+" ")],1):t._e(),"verify"===a.type||"judgement"===a.type?e("span",[e("router-link",{attrs:{to:{name:"account",params:{uId:""+a.byUserId}}}},["admin"===a.privilege?e("Tag",{attrs:{color:"success"}},[t._v(" "+t._s(t.$t("basic.privilege.admin"))+" ")]):t._e(),e("b",[t._v(t._s(a.byUserName))])],1),t._v(" "+t._s(t.$t("detail.info.judge"))+" "),e("router-link",{attrs:{to:{name:"player",params:{ouid:""+a.playerOriginPersonaId}}}},[t._v(" "+t._s(a.toPlayerName)+" ")]),e("Tag",{attrs:{color:"warning"}},[t._v(" "+t._s(t.$t(`basic.action.${a.action}.text`))+" ")]),a.cheatMethods?e("span",[t._v(" ，"+t._s(t.$t("detail.info.cheatMethod"))+" "),e("b",[t._v(t._s(t.convertCheatMethods(a.cheatMethods)))])]):t._e()],1):t._e()])})),1)})),0)]),t.activityLoad?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1),e("div",{staticClass:"container"},[e("Tell",{staticClass:"mobile-hide content"})],1)])},i=[],r=(a("14d9"),a("890e")),n=function(){var t=this,e=t._self._c;return t.tellStatic&&t.tellShow?e("div",{staticClass:"tells"},[e("row",{attrs:{gutter:30}},[e("Col",{attrs:{flex:"auto"}},t._l(t.tells,(function(a,s){return e("div",{key:s},[a.showLang.filter(e=>t.$i18n.locale==e).length>0?e("Card",{staticClass:"tell-item",attrs:{bordered:!1,"dis-hover":""}},[e("div",{attrs:{align:"center"}},[e("Avatar",{attrs:{src:a.avatar,size:"100"}}),e("h2",[t._v(t._s(a.name))])],1),e("div",[e("Icon",{attrs:{type:"ios-quote",size:"20"}}),e("span",{domProps:{innerHTML:t._s(a.content)}})],1),e("Divider"),t._l(a.identity,(function(a,s){return e("div",{key:s},[e("Tag",[t._v(t._s(a))])],1)}))],2):t._e()],1)})),0)],1)],1):t._e()},o=[],c=a("689f"),l={data(){return{tells:c.child,tellStatic:c.static}},computed:{tellShow(){return this.tells.filter(t=>this.$i18n.locale==t.showLang).length>0}}},d=l,v=(a("aab5"),a("2877")),u=Object(v["a"])(d,n,o,!1,null,null,null),m=u.exports,p=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t._v(" = "),t._l(t.weekday,(function(a,s){return e("card",{key:s},[t._v(" "+t._s(a)+" ")])}))],2)},h=[],_=a("e4b4"),g=new r["a"]({name:"Weekly",data(){return{weekday:[]}},created(){this.getWeekly()},methods:{getWeekly(){_["c"].request("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",{headers:{Origin:"api.vc.bilibili.com"},method:_["c"].GET,params:{host_uid:"387820951",need_top:1}}).then(t=>{this.weekday=t.data.data.cards})}}}),y=g,b=Object(v["a"])(y,p,h,!1,null,"5f0eb52e",null),f=b.exports,w=new r["a"]({data(){return{bannerImage:"",bannerTime:_["k"].appStart(),activityLoad:!1,activities:[],activities_l:[],statistics:{}}},components:{Tell:m,Weekly:f},watch:{$route:"loadData"},created(){this.loadData(),this.getStatisticsInfo(),this.getActivity()},methods:{async loadData(){await _["m"].initUtil().then(t=>{this.cheaterStatus=t.cheaterStatus,this.cheatMethodsGlossary=t.cheatMethodsGlossary,this.gameName=t.gameName});try{this.bannerImage=a("7784")(`./index-gl_${this.$i18n.locale||"en-US"}.png`)}catch(t){this.bannerImage=a("c0b1")}},getActivity(){this.activityLoad=!0,_["c"].get(_["b"]["activity"],{}).then(t=>{const e=t.data;if(1===e.success){let t=e.data,a=[];for(let e=0;e<t.length;e+=3)a.push(t.slice(e,e+3));this.activities_l=a}}).finally(()=>{this.activityLoad=!1})},getStatisticsInfo(){_["c"].get(_["b"]["statistics"],{params:{reports:"show",players:!0,confirmed:!0,registers:!0,banappeals:!0,details:!0,from:new Date("2018-01-01").getTime()}}).then(t=>{const e=t.data;1===e.success&&(this.statistics=e.data)})}}}),C=w,k=(a("84fb"),Object(v["a"])(C,s,i,!1,null,null,null));e["default"]=k.exports},c0b1:function(t,e,a){t.exports=a.p+"assets/img/index-gl_en-US.c15a2334.png"},d106:function(t,e,a){},efc5:function(t,e,a){}}]);
//# sourceMappingURL=chunk-f92e2c8a.2.7.0.js.map