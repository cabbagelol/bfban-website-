(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3113e6a8"],{"0717":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Tag",{attrs:{color:t.getActionClass()}},[t._v(" "+t._s(t.$t("basic.action."+t.util.queryAction(t.judgeAction)+".text"))+" "),a("Poptip",{attrs:{trigger:"hover",transfer:!0,"word-wrap":"",width:"200",content:t.$t("basic.action."+t.util.queryAction(t.judgeAction)+".describe")}},[a("span",{staticClass:"judge-action-before-icon"},[a("Icon",{attrs:{type:"md-help"}})],1)])],1)},s=[],r=a("e4b4"),n={props:{judgeAction:{type:String,default:""}},created(){const t=this;r["q"].initUtil().then(e=>{t.action=e.action})},data(){return{util:r["q"],action:[]}},methods:{getActionClass(){const t="#535353";let e=this.action.filter(t=>t.value==this.util.queryAction(this.judgeAction));return e.length<=0?t:e[0]["class"]}}},o=n,l=(a("4cba"),a("2877")),c=Object(l["a"])(o,i,s,!1,null,"2bc53bb6",null);e["a"]=c.exports},1809:function(t,e,a){"use strict";a("e968")},"28dd":function(t,e,a){t.exports=a.p+"assets/img/logo.f39797a8.png"},"2bf3":function(t,e,a){t.exports=a.p+"assets/img/index-gl_zh-CN.07e3ae23.png"},3198:function(t,e,a){},"44f0":function(t,e,a){var i={"./bf1/logo.png":"d141","./bf6/logo.png":"a542","./bfv/logo.png":"28dd"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="44f0"},"4cba":function(t,e,a){"use strict";a("3198")},7784:function(t,e,a){var i={"./index-gl_en-US.png":"c0b1","./index-gl_zh-CN.png":"2bf3"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="7784"},"8d91":function(t,e,a){},9648:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Poptip",{staticClass:"time-view",attrs:{transfer:"",trigger:t.trigger}},[a("u",{staticClass:"spelling time-view time-view-slot"},[t._t("default")],2),t.time?a("Form",{staticClass:"time-view-form",attrs:{slot:"content",labelPosition:"top",width:"100"},slot:"content"},[a("FormItem",{attrs:{label:t.$t("detail.dateView.primitive")}},[a("Alert",{attrs:{"show-icon":"",type:"info"}},[t._v(t._s(t.$t("detail.dateView.primitiveDescription")))]),a("Select",{model:{value:t.primitiveValue,callback:function(e){t.primitiveValue=e},expression:"primitiveValue"}},[a("Option",{attrs:{value:"primitive",label:t.timeMap.primitive.toString()}},[a("p",[t._v("primitive value")]),a("Input",{attrs:{value:t.timeMap.primitive.toString(),readonly:""}})],1),a("Option",{attrs:{value:"primitiveDateString",label:t.timeMap.primitiveDateString.toString()}},[a("p",[t._v("primitive date string value")]),a("Input",{attrs:{value:t.timeMap.primitiveDateString.toString(),readonly:""}})],1)],1)],1),a("FormItem",{attrs:{label:t.$t("detail.dateView.localTimeZoneName")}},[a("Tag",{attrs:{type:"border"}},[t._v(t._s(t.timeMap.timeFormatName))])],1),a("FormItem",{attrs:{label:t.$t("detail.dateView.localeTime")}},[a("Alert",{attrs:{"show-icon":"",type:"info"}},[t._v(t._s(t.$t("detail.dateView.localeTimeDescription")))]),a("Input",{attrs:{value:t.timeMap.localeDateString.toString(),readonly:""}})],1)],1):t._e()],1)},s=[],r=(a("5b81"),{props:{time:[String,Number,Date],trigger:{type:String,default:"click"}},data(){return{timeMap:null,primitiveValue:"primitive",options:{hour:"numeric",minute:"numeric",second:"numeric",weekday:"long",year:"numeric",month:"long",day:"numeric"}}},watch:{time:function(){this.loadData()}},created(){this.loadData()},methods:{loadData(){this.time&&(this.timeMap={primitive:this.onTime(this.time),primitiveDateString:this.toDateString(this.onTime(this.time)),conversionDate:new Date(this.onTime(this.time)).toLocaleDateString(),conversionLocalDate:this.toLocaleString(new Date(this.onTime(this.time)).getTime()),timeFormatName:this.getTimeFormatName(),localeDateString:this.toLocaleDateString(this.onTime(this.time))})},toLocaleString(t){const e=new Date(t);return e.toLocaleString()},onTime(t){return t.toString().replaceAll("\n"," ").replaceAll("&nbsp;"," ")},getTimeFormatName(){return Intl.DateTimeFormat().resolvedOptions().timeZone},toLocaleDateString(t){const e=new Date(t);return e.toLocaleDateString(void 0,this.options)},toDateString(t){const e=new Date(t);return e.toDateString(void 0,this.options)}}}),n=r,o=(a("1809"),a("2877")),l=Object(o["a"])(n,i,s,!1,null,"27885742",null);e["a"]=l.exports},a240:function(t,e,a){t.exports=a.p+"assets/img/hero-grid-overlay.890f5154.png"},a542:function(t,e,a){t.exports=a.p+"assets/img/logo.dbc12e75.png"},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[t._m(0),i("div",{staticClass:"content"},[i("div",{staticClass:"ivu-alert-with-banner home-banner"},[i("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[i("Col",{attrs:{xs:{span:22,offset:1},sm:{span:12,offset:1},md:{span:22,offset:1},lg:{span:9}}},[i("h1",{staticClass:"title"},[t._v(t._s(t.title))]),i("h2",[t._v(" "+t._s(t.$t("home.cover.h2.hint"+t.hintRandom))+" "),i("icon",{attrs:{type:"md-refresh"},on:{click:function(e){return t.onHomeHintRandom()}}})],1),i("h3",[t._v(t._s(t.$t("home.cover.h3"))+" "),i("br"),t._v(t._s(t.$t("home.cover.h4")))]),i("br"),t.isLogin?i("router-link",{attrs:{to:{name:"profile",params:{pagename:"information"}}}},[i("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"primary",size:"large"}},[t._v(t._s(t.$t("header.profile")))])],1):i("router-link",{attrs:{to:{name:"signup"}}},[i("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"primary",size:"large"}},[t._v(t._s(t.$t("signup.title")))])],1)],1),i("Col",{staticClass:"mobile-hide",attrs:{lg:{span:13,push:0},type:"flex",align:"center",justify:"center"}},[i("img",{staticClass:"ivu-row-top img",attrs:{src:t.bannerImage}})])],1)],1)]),i("div",{staticClass:"content"},[i("Row",{attrs:{gutter:15}},[i("Col",{attrs:{xs:{span:11,offset:1},lg:{span:5,pull:0}}},[i("Card",{attrs:{"dis-hover":"",to:{name:"site_stats"}}},[i("h3",[t._v(t._s(t.number.format(t.statistics.reports)||0))]),i("span",[t._v(t._s(t.$t("home.cover.dataReceived")))]),t.statisticsInfoLoad?i("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1),i("Col",{attrs:{xs:{span:11,offset:0},lg:{span:5,offset:0}}},[i("router-link",{attrs:{to:{name:"site_stats"}}},[i("Card",{attrs:{"dis-hover":""}},[i("h3",[t._v(t._s(t.number.format(t.statistics.confirmed)||0))]),i("span",[t._v(t._s(t.$t("home.cover.confirmData")))]),t.statisticsInfoLoad?i("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1),i("Col",{staticClass:"mobile-hide",attrs:{lg:{span:4,offset:0}}},[i("router-link",{attrs:{to:{name:"site_stats"}}},[i("Card",{attrs:{"dis-hover":""}},[i("h3",[t._v(t._s(t.number.format(t.statistics.players)||0))]),i("span",[t._v(t._s(t.$t("sitestats.players")))]),t.statisticsInfoLoad?i("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1),i("Col",{staticClass:"mobile-hide",attrs:{lg:{span:4,offset:0}}},[i("router-link",{attrs:{to:{name:"site_stats"}}},[i("Card",{attrs:{"dis-hover":""}},[i("h3",[t._v(t._s(t.number.format(t.statistics.registers)||0))]),i("span",[t._v(t._s(t.$t("sitestats.registers")))]),t.statisticsInfoLoad?i("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1),i("Col",{staticClass:"mobile-hide",attrs:{lg:{span:4,offset:0}}},[i("router-link",{attrs:{to:{name:"site_stats"}}},[i("Card",{attrs:{"dis-hover":""}},[i("h3",[t._v(t._s(t.number.format(t.statistics.banAppeals)||0))]),i("span",[t._v(t._s(t.$t("sitestats.banAppeals")))]),t.statisticsInfoLoad?i("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1),i("Col",{attrs:{xs:{span:23,offset:1},lg:{span:24,push:0}}},[i("br"),i("TimeView",{attrs:{time:t.bannerTime}},[t._v(t._s(t.$t("home.cover.endTime",{time:t.bannerTime})))])],1)],1)],1)]),t.activities_l.length>0?i("div",{staticClass:"home-activity-box mobile-hide ivu-primary"},[i("div",{staticClass:"container"},[i("Row",[i("Col",{attrs:{xs:{span:23,offset:1},lg:{span:10,offset:1}}},[i("h1",{attrs:{align:"left"}},[t._v(t._s(t.$t("home.activity.title")))]),i("h4",{attrs:{align:"left"},domProps:{innerHTML:t._s(t.$t("home.activity.description",{report:t.number.format(t.statistics.reports,t.currentLan)||0,cheater:t.number.format(t.statistics.confirmed,t.currentLan)||0}))}})]),i("Col",{attrs:{lg:{span:9,push:3},type:"flex",align:"right",justify:"center"}},[i("router-link",{attrs:{to:{name:"player_list"}}},[i("Button",{directives:[{name:"voice-button",rawName:"v-voice-button"}],attrs:{type:"dashed"}},[t._v(" "+t._s(t.$t("home.activity.more"))+" ")])],1)],1)],1)],1),i("div",{staticClass:"lean-box"},[i("div",{staticClass:"wrapper",style:"animation: rowup "+2.8*t.activities_l.length+"s linear infinite;"},t._l(t.activities_l,(function(e){return i("div",{key:e.id,staticClass:"icon-pair"},t._l(e,(function(e){return i("Card",{key:e.id,staticClass:"icon"},[i("Avatar",{staticStyle:{"margin-top":"-55px"},attrs:{size:"80",src:e.playerAvatarLink}},[t._v(" "+t._s(e.username||e.byUserName||e.toPlayerName||"null")+" ")]),i("br"),i("Row",{staticClass:"text-start",attrs:{type:"flex",align:"top"}},[i("Col",{attrs:{flex:"1"}},[i("Tag",{attrs:{fade:"",type:"border",color:"default"}},[t._v(t._s(t.$t("detail.timeline.types."+e.type)))])],1),i("Col",[e.createTime?i("Time",{attrs:{time:e.createTime}}):t._e()],1)],1),i("div",{staticClass:"text-start"},["report"===e.type?i("span",[i("router-link",{attrs:{to:{name:"space",params:{uId:""+e.byUserId}}}},[i("u",[t._v(t._s(e.byUserName))])]),t._v(" "+t._s(t.$t("home.activity.activities.report"))+" "),i("router-link",{attrs:{to:{name:"player",query:{game:e.game,status:-1}}}},[i("Tooltip",{attrs:{content:t.$t("basic.games."+e.game)}},[i("Tag",{attrs:{type:"border"}},[i("img",{attrs:{height:"12",src:a("44f0")("./"+e.game+"/logo.png")}})])],1)],1),i("router-link",{attrs:{to:{name:"player",params:{game:""+e.game,ouid:""+e.playerOriginPersonaId}}}},[i("u",[t._v(t._s(e.toPlayerName))])]),t._v(" "+t._s(t.$t("detail.info.cheatMethod"))+" "),t._l(e.playerCheatMethods,(function(e,a){return i("Tag",{key:a,attrs:{type:"border",color:"orange"}},[i("Poptip",{attrs:{trigger:"hover",transfer:!0,"word-wrap":"",width:"200",content:t.$t("cheatMethods."+t.util.queryCheatMethodsGlossary(e)+".describe")}},[t._v(" "+t._s(t.$t("cheatMethods."+t.util.queryCheatMethodsGlossary(e)+".title"))+" ")])],1)}))],2):t._e(),"register"===e.type?i("span",[i("router-link",{attrs:{to:{name:"space",params:{uId:""+e.id}}}},[i("u",[t._v(t._s(e.username||e.byUserName||e.toPlayerName||"null"))])]),t._v(" "+t._s(t.$t("home.activity.activities.join"))+" ")],1):t._e(),"verify"===e.type||"judgement"===e.type?i("span",[i("router-link",{attrs:{to:{name:"space",params:{uId:""+e.byUserId}}}},[i("u",[t._v(t._s(e.byUserName))])]),t._v(" "+t._s(t.$t("detail.info.judge"))+" "),i("router-link",{attrs:{to:{name:"player",params:{ouid:""+e.playerOriginPersonaId}}}},[i("u",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(e.toPlayerName))])]),i("judgeActionTypeView",{attrs:{judgeAction:e.action}}),t._v(" "+t._s(t.$t("detail.info.cheatMethod"))+" "),t._l(e.playerCheatMethods,(function(e,a){return i("Tag",{key:a,attrs:{type:"border",color:"orange"}},[i("Poptip",{attrs:{trigger:"hover",transfer:!0,"word-wrap":"",width:"200",content:t.$t("cheatMethods."+t.util.queryCheatMethodsGlossary(e)+".describe")}},[t._v(" "+t._s(t.$t("cheatMethods."+t.util.queryCheatMethodsGlossary(e)+".title"))+" ")])],1)}))],2):t._e(),"banAppeal"===e.type?i("span",[i("router-link",{attrs:{to:{name:"space",params:{uId:""+e.byUserId}}}},[i("u",[t._v(t._s(e.byUserName))])]),t._v(" "+t._s(t.$t("detail.appeal.info.content"))+" ")],1):t._e()])],1)})),1)})),0)]),t.activityLoad?i("Spin",{attrs:{size:"large",fix:""}}):t._e()],1):t._e()])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"styles_herosection user-select-none"},[i("div",{staticClass:"styles_bg"}),i("img",{staticClass:"styles_bg_img",attrs:{src:a("a240")}})])}],r=a("e4b4"),n=a("ad43"),o=a("d78a"),l=a("0717"),c=a("9648"),m=new n["a"]({data(){return{util:r["q"],number:r["k"],bannerImage:"",bannerTime:"",hintRandom:0,statisticsInfoLoad:!1,activityLoad:!1,activities:[],activities_l:[],statistics:{reports:0,confirmed:0}}},components:{PrivilegesTag:o["a"],judgeActionTypeView:l["a"],TimeView:c["a"]},watch:{$route:"loadData"},created(){this.loadData(),this.getStatisticsInfo(),this.getActivity()},methods:{async loadData(){await r["q"].initUtil().then(t=>{this.cheaterStatus=t.cheaterStatus,this.cheatMethodsGlossary=t.cheatMethodsGlossary,this.gameName=t.gameName}),this.bannerTime=new Intl.DateTimeFormat(this.$i18n.locale||"en-US").format(r["o"].appStart()),this.onHomeHintRandom(!0);try{this.bannerImage=a("7784")(`./index-gl_${this.$i18n.locale||"en-US"}.png`)}catch(t){this.bannerImage=a("c0b1")}},onHomeHintRandom(t=!1){let e=Math.floor(3*Math.random());t||e!=this.hintRandom?this.hintRandom=e:this.onHomeHintRandom()},getActivity(){this.activityLoad=!0,r["e"].get(r["c"]["activity"],{}).then(t=>{const e=t.data;if(1===e.success){let t=e.data,a=[];for(let e=0;e<t.length;e+=3)a.push(t.slice(e,e+3));this.activities_l=a}}).finally(()=>{this.activityLoad=!1})},getStatisticsInfo(){this.statisticsInfoLoad=!0,r["e"].get(r["c"]["statistics"],{params:{reports:!0,players:!0,confirmed:!0,registers:!0,banAppeals:!0,from:new Date(r["o"].appStart()).getTime()}}).then(t=>{const e=t.data;1===e.success&&(this.statistics=e.data)}).finally(()=>{this.statisticsInfoLoad=!1})}},computed:{user(){return this.$store.state.user||{}},title(){const t=this.$t("home.cover.h1");return`${t.charAt(0).toUpperCase()}${t.slice(1).toLocaleLowerCase()}`}}}),p=m,u=(a("de16"),a("2877")),d=Object(u["a"])(p,i,s,!1,null,null,null);e["default"]=d.exports},c0b1:function(t,e,a){t.exports=a.p+"assets/img/index-gl_en-US.c56a8fa2.png"},d141:function(t,e,a){t.exports=a.p+"assets/img/logo.6ffd12a1.png"},de16:function(t,e,a){"use strict";a("8d91")},e968:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3113e6a8.2.9.17.js.map