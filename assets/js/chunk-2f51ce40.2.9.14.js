(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f51ce40","chunk-2d0e5d80","chunk-2d0da581"],{"0b05":function(t,e,a){var s={"./images/games/bf1/logo.png":"d141","./images/games/bf6/logo.png":"a542","./images/games/bfv/logo.png":"28dd","./images/logo.png":"9d64"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id="0b05"},1399:function(t,e,a){},"1c8a":function(t,e,a){t.exports=a.p+"assets/img/bf.350c4f88.jpg"},"1cca":function(t,e,a){t.exports=a.p+"assets/media/bf1_mian_theme.1a70392a.mp3"},"27d5":function(t,e,a){"use strict";a("1399")},"28c9":function(t,e,a){t.exports=a.p+"assets/media/bfv_mian_theme.fa208bd5.mp3"},"28dd":function(t,e,a){t.exports=a.p+"assets/img/logo.f39797a8.png"},"2be5":function(t,e,a){t.exports=a.p+"assets/media/bf2042_mian_theme.39a3519a.mp3"},"3a4b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("br"),s("Row",[s("Col",{attrs:{xs:{push:1},lg:{push:0}}},[s("Breadcrumb",[s("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),s("BreadcrumbItem",[t._v(t._s(t.$t("list.title")))])],1)],1)],1),s("br"),s("Row",[s("Col",{attrs:{flex:"auto",xs:{span:22,push:1,pull:1},lg:{span:24,push:0,pull:0}}},[s("RadioGroup",{directives:[{name:"voice-button",rawName:"v-voice-button"}],staticClass:"game-type",attrs:{size:"large",type:"button"},on:{"on-change":t.handleChanges},model:{value:t.gameName,callback:function(e){t.gameName=e},expression:"gameName"}},[s("Radio",{attrs:{label:"all",value:"all"}},[s("Badge",{attrs:{count:t.getTotalNum("*"),"overflow-count":9e4,type:"normal"}},[t._v(" "+t._s(t.$t("basic.games.all"))+" ")])],1),t._l(t.games,(function(e){return s("Radio",{key:e.value,class:t.gameName==e.value?"gametype-select":"",style:"background-image: url("+a("e153")("./"+e.bk_file+"/bf.jpg")+");",attrs:{label:e.value,disabled:e.disabled,"aria-radio":""}},[s("Badge",{attrs:{count:t.getTotalNum(e.value),"overflow-count":9e4,type:"info"}},[s("Tooltip",{attrs:{content:t.$t("basic.games."+e.value),placement:"top-start"}},[e.logo_src?s("img",{attrs:{height:"35",src:a("0b05")("./"+e.bk_file+"/logo.png")}}):s("span",[t._v(t._s(e.full_name))])])],1)],1)}))],2)],1),t.isLogin?s("Col",{staticClass:"mobile-hide"},[s("router-link",{attrs:{to:{name:"profile",params:{pagename:"voice"}}}},[s("Button",{attrs:{type:"text",shape:"circle"}},[s("Icon",{attrs:{type:"md-musical-notes",size:"20"}})],1)],1)],1):t._e()],1),s("Row",[s("Col",{attrs:{xs:{span:22,push:1,pull:1},lg:{span:24,push:0,pull:0}}},[s("RadioGroup",{directives:[{name:"voice-button",rawName:"v-voice-button"}],staticStyle:{"margin-top":"12px"},attrs:{type:"button"},on:{"on-change":t.handleStatusChange},model:{value:t.statusGroup,callback:function(e){t.statusGroup=e},expression:"statusGroup"}},[s("Radio",{attrs:{label:"-1"}},[s("Badge",{attrs:{"overflow-count":9e5,size:"small",type:"info"}},[t._v(" "+t._s(t.$t("basic.status.all.text"))+" ")])],1),t._l(t.cheaterStatus,(function(e){return s("Radio",{key:e.value,attrs:{label:""+e.value}},[s("Badge",{attrs:{count:t.getcHeaterStatusNum(e.value),"overflow-count":9e5,type:"info"}},[t._v(" "+t._s(t.$t("basic.status["+e.value+"].text"))+t._s(e[t.$i18n.locale])+" ")])],1)}))],2)],1)],1),s("Row",{attrs:{gutter:10}},[s("Col",{attrs:{xs:{span:24,push:0,pull:0},lg:{span:17,push:0,pull:0}}},[s("Card",{staticClass:"list",attrs:{"dis-hover":""}},[s("Page",{staticClass:"page",attrs:{size:"small","show-sizer":"","show-total":"","show-elevator":"","page-size":t.limit,current:t.skip,total:t.total},on:{"on-change":t.handlePageChange,"on-page-size-change":t.handlePageSizeChange}}),s("Spin",{directives:[{name:"show",rawName:"v-show",value:t.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:"","show-elevator":""}}),s("AdsGoogle",{staticStyle:{"margin-bottom":"8px"},attrs:{id:"7930151828"}}),t._l(t.data,(function(e,a){return s("div",{directives:[{name:"voice-button",rawName:"v-voice-button"}],key:e.originUserId,staticClass:"item-card"},[s("Badge",{staticStyle:{width:"100%"},attrs:{text:e.viewNum>100&&e.commentsNum>10?"hot":""}},[s("Card",{attrs:{"dis-hover":"",padding:10}},[s("Row",{attrs:{gutter:10,type:"flex"}},[s("Col",{attrs:{xs:{span:5,push:0,pull:0},lg:{span:3,push:0,pull:0}}},[e.avatarLink?s("Avatar",{staticClass:"default-avatar",attrs:{src:e.avatarLink,alt:"avatar",size:"55"},on:{"on-error":function(e){return t.onAvatarError(a)}}}):t._e()],1),s("Col",{attrs:{xs:{span:18,push:0,pull:0},lg:{span:17,push:0,pull:0}}},[s("div",{staticStyle:{display:"flex","flex-direction":"column"}},[s("Tooltip",{attrs:{content:t.$t("list.colums.playerId")}},[s("h2",{staticClass:"text-distinguishing-letter"},[s("router-link",{style:""==e.avatarLink?"color: rgba(255,0,0,1);text-decoration: line-through;":"",attrs:{to:{name:"player",params:{ouid:""+e.originPersonaId}}}},[s("code",[t._v(t._s(e.originName))])])],1)])],1),s("div",[t._v(" "+t._s(t.$t("list.colums.reportTime"))+" "),s("TimeView",{attrs:{time:e.createTime}},[e.createTime?s("Time",{attrs:{time:e.createTime}}):t._e()],1),s("Divider",{attrs:{type:"vertical"}}),t._v(" "+t._s(t.$t("list.colums.updateTime"))+" "),s("TimeView",{attrs:{time:e.updateTime}},[e.updateTime?s("Time",{attrs:{time:e.updateTime}}):t._e()],1)],1)]),s("Col",{staticClass:"mobile-hide",attrs:{xs:{span:24,push:0,pull:0},lg:{span:3,push:0,pull:0}}},[s("Row",{staticStyle:{height:"100%"},attrs:{type:"flex",justify:"end",align:"middle"}},[s("Col",{staticClass:"item-text",attrs:{flex:"auto",align:"right"}},[s("span",[t._v(t._s(e.viewNum||0))]),s("Icon",{staticClass:"item-icon",attrs:{type:"md-eye",size:"17"}})],1),s("Col",{staticClass:"item-text",attrs:{flex:"auto",align:"right"}},[s("span",[t._v(t._s(e.commentsNum||0))]),s("Icon",{staticClass:"item-icon",attrs:{type:"md-chatboxes",size:"17"}})],1)],1)],1),s("Col",{staticClass:"mobile-hide",attrs:{xs:{span:24,push:0,pull:0},lg:{span:1,push:0,pull:0},align:"center"}},[s("Progress",{attrs:{vertical:"",percent:1==e.status?99:100,"hide-info":"",status:"wrong"}})],1)],1)],1)],1)],1)})),t.data.length<=0?s("Card",{attrs:{"dis-hover":"",padding:10,align:"center"}},[s("Empty")],1):t._e(),s("AdsGoogle",{staticStyle:{"margin-bottom":"8px"},attrs:{id:"7930151828"}}),s("Page",{staticClass:"page",attrs:{size:"small","show-sizer":"","show-total":"","show-elevator":"","page-size":t.limit,current:t.skip,total:t.total},on:{"on-change":t.handlePageChange,"on-page-size-change":t.handlePageSizeChange}})],2)],1),s("Col",{attrs:{xs:{span:22,push:1,pull:1},lg:{span:7,push:0,pull:0}}},[s("br"),s("AdsGoogle",{attrs:{id:"1760339032"}}),s("Affix",{attrs:{"offset-top":20}},[s("Card",{attrs:{"dis-hover":""}},[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"md-funnel"}}),t._v(" "+t._s(t.$t("list.colums.screenTitle"))+" ")],1),s("Form",[s("FormItem",{attrs:{label:t.$t("list.reportTime")}},[s("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"daterange",placement:"bottom-end","split-panels":"",options:t.timeOptions,value:t.createTime,placeholder:t.$t("list.reportTime")},on:{"on-change":t.handleCDatepicker}})],1),s("FormItem",{attrs:{label:t.$t("list.updateTime")}},[s("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"daterange",placement:"bottom-end","split-panels":"",options:t.timeOptions,value:t.updateTime,placeholder:t.$t("list.updateTime")},on:{"on-change":t.handleUDatepicker}})],1),s("FormItem",[s("Select",{on:{"on-change":t.handleChanges},model:{value:t.sortByValue,callback:function(e){t.sortByValue=e},expression:"sortByValue"}},t._l(t.sortBy,(function(e){return s("Option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(t.$t("list.filters.sortBy."+e.value))+" ")])})),1)],1)],1)],1)],1)],1)],1)],1)])},i=[],o=a("e4b4"),l=a("95e3"),n=a("6acc"),r=a("ad43"),u=a("02bc"),c=a("7f22"),m=a("9648"),p=a("2ef0"),g=a.n(p),d=a("4360"),h=new r["a"]({data(){return{games:[],data:[],spinShow:!0,gameName:"all",statusGroup:"-1",timeOptions:{disabledDate(t){return t&&t.valueOf()>Date.now()},shortcuts:[{text:this.$i18n.t("sitestats.timeRange.daily"),value(){const t=new Date,e=new Date;return e.setTime(e.getTime()-864e5),[e,t]}},{text:this.$i18n.t("sitestats.timeRange.weekly"),value(){const t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),[e,t]}},{text:this.$i18n.t("sitestats.timeRange.monthly"),value(){const t=new Date,e=new Date;return e.setTime(e.getTime()-2592e6),[e,t]}},{text:this.$i18n.t("sitestats.timeRange.yearly"),value(){const t=new Date,e=new Date;return e.setTime(e.getTime()-31104e6),[e,t]}}]},createTime:[],updateTime:[],skip:1,limit:20,total:0,gameSum:[],totalSum:[],sortBy:[{value:"createTime"},{value:"updateTime"},{value:"viewNum"},{value:"commentsNum"}],sortByValue:"createTime",cheaterStatus:null}},components:{Empty:u["a"],AdsGoogle:c["a"],TimeView:m["a"]},watch:{$route:"loadData",gameName:function(t,e){t&&"all"!=t&&d["a"].state.configuration.voice&&d["a"].state.configuration["voice_backgroundMusic"].state&&(o["o"].onStopAll(),setTimeout((function(){o["o"].play(t)}),800))}},created(){this.loadData()},methods:{getTotalNum(t){let e={};switch(t){case"*":this.gameSum.forEach(t=>e.num+=t.count);break;default:e=g.a.find(this.gameSum,["game",t])}return e?e.num:0},getcHeaterStatusNum(t){let e=g.a.find(this.totalSum,["status",t]);return e?e.num:0},async loadData(){await o["n"].initUtil().then(t=>{this.cheaterStatus=t.cheaterStatus,this.games=t.gameName});const t=d["a"].state.configuration["voice_backgroundMusic"];o["o"].addVoice("bf1",o["o"].voiceData({src:[a("1cca")],volume:t&&t.value||1,pool:!0})),o["o"].addVoice("bfv",o["o"].voiceData({src:[a("28c9")],volume:t&&t.value||1,pool:!0})),o["o"].addVoice("bf6",o["o"].voiceData({src:[a("2be5")],volume:t&&t.value||1,pool:!0})),this.getCheaterList(),this.getPlayerStatistics()},getPlayerStatistics(){const t=this;let e={data:[]},a=0;n.child.forEach(t=>{e.data.push({game:t.value,status:-1}),a++}),l.child.forEach((t,a)=>{e.data.push({game:"all"==this.gameName?"*":this.gameName,status:t.value})}),o["c"].post(o["b"]["playerStatistics"],{data:e}).then(e=>{const s=e.data;let i=[],o=[];1===s.success&&([].concat(s.data).splice(0,a).forEach((e,a)=>{i.push({game:t.games[a].value.toString(),num:Number(e.count)})}),this.gameSum=i,[].concat(s.data).splice(a,s.data.length-1).forEach((e,a)=>{o.push({status:t.cheaterStatus.filter(t=>t.value==e.status)[0].value,num:Number(e.count)})}),this.totalSum=o)}).catch(t=>{this.$Message.error(t.message)})},async getCheaterList(){const{game:t="all",status:e=-1,createTime:a,updateTime:s,skip:i=this.skip,sort:l="updateTime",limit:n=this.limit}=this.$route.query;let r={params:{game:t,skip:(i-1)*n,sortBy:l,status:e,limit:n}};if(a){const t=a.split(","),e=new Date(t[0]).getTime(),s=new Date(t[1]).getTime();r["params"]["createTimeFrom"]=e,r["params"]["createTimeTo"]=s}if(s){const t=s.split(","),e=new Date(t[0]).getTime(),a=new Date(t[1]).getTime();r["params"]["updateTimeFrom"]=e,r["params"]["updateTimeTo"]=a}return this.gameName=t,this.statusGroup=e,a&&(this.createTime=a.split(",")),s&&(this.updateTime=s.split(",")),this.skip=Number.parseInt(i),this.limit=Number.parseInt(n),this.sortByValue=l,this.spinShow=!0,new Promise((t,e)=>{o["c"].get(o["b"]["players"],r).then(e=>{const a=e.data;1===a.success?(this.data=a.data.result||[],this.total=a.data.total,t(a)):this.catch(e)}).catch(t=>{this.$Message.error(t.code),e(t)}).finally(()=>{this.spinShow=!1})})},routerQuery(){const t=this.gameName,e=this.statusGroup,a=this.createTime?this.createTime.toString():"",s=this.updateTime?this.updateTime.toString():"",i=this.skip,o=this.limit,l=this.sortByValue;let n={};return n["status"]=e,","!==a&&(n["createTime"]=a),","!==s&&(n["updateTime"]=s),1!==i&&(n["skip"]=i),n["limit"]=o,""!==l&&(n["sort"]=l),""!==t&&(n["game"]=t),n},handleChanges(){const t=this.routerQuery();this.$router.push({name:this.$router.name,query:t})},handleStatusChange(){this.skip=1,this.handleChanges()},handleCDatepicker(t){this.createTime=t,this.skip=1,this.handleChanges()},handleUDatepicker(t){this.updateTime=t,this.skip=1,this.handleChanges()},handlePageChange(t){this.skip=t,this.handleChanges()},handlePageSizeChange(t){this.limit=t,this.handleChanges()},onAvatarError(t){this.data[t].avatarLink=""}},computed:{getAllStatusNum(){let t={num:0};switch(this.gameName){case"all":for(let e of this.gameSum)t.num+=e.num||0;break;default:t=g.a.find(this.gameSum,["game",this.gameName])}return t?t.num:0}}}),f=h,v=(a("27d5"),a("2877")),b=Object(v["a"])(f,s,i,!1,null,"4e600b57",null);e["default"]=b.exports},"560f":function(t,e,a){"use strict";a("861d4")},"6acc":function(t){t.exports=JSON.parse('{"defaultIndex":0,"default":"bf1","child":[{"value":"bf1","full_name":"bf1","bk_file":"images/games/bf1","bk_src":"//media.contentapi.ea.com/content/dam/gin/images/2017/01/battlefield-1-keyart-5452x3859.jpg.adapt.crop1x1.767p.jpg","logo_src":"//media.contentapi.ea.com/content/dam/gin/common/logos/layer-1.png","app_assets_bk_file":"assets/images/games/bf1/bf.jpg","app_assets_logo_file":"assets/images/games/bf1/logo.png"},{"value":"bfv","full_name":"bfv","bk_file":"images/games/bfv","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2018/05/bfv-campaignart-standard-large.jpg.adapt.crop1x1.767p.jpg","bk_width":150,"logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/bfv-logo-white.png","app_assets_bk_file":"assets/images/games/bfv/bf.jpg","app_assets_logo_file":"assets/images/games/bfv/logo.png"},{"value":"bf6","full_name":"bf2042","bk_file":"images/games/bf6","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg","logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg","app_assets_bk_file":"assets/images/games/bf6/bf.jpg","app_assets_logo_file":"assets/images/games/bf6/logo.png"}]}')},"7f22":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isSkipAds?t._e():a("Card",{staticClass:"ad-container mobile-hide",class:t.adId&&t.ads[t.adId].class||[],style:t.ads[t.adId].style,attrs:{"dis-hover":"",padding:0}},[t.adId?a("ins",{attrs:{"data-ad-client":"ca-pub-6625226616103631","data-ad-slot":t.adId,"data-ad-format":"auto","data-full-width-responsive":"true"}}):t._e()])},i=[],o={name:"AdsGoogle",props:{id:[Number,String],default:()=>"7930151828"},watch:{id:{handler(t){this.isSkipAds||(this.adId=t.toString())}}},data(){return{adId:"",ads:{7930151828:{style:"width: 100%;height: 100px;",class:[]},1760339032:{style:"width: 100%;height: 300px;margin-bottom: 10px;",class:[]}}}},created(){this.isSkipAds||(this.adId=this.id.toString())},computed:{isSkipAds(){return this.$route.query["skipAds"]||!1}}},l=o,n=(a("560f"),a("2877")),r=Object(n["a"])(l,s,i,!1,null,null,null);e["a"]=r.exports},"861d4":function(t,e,a){},"95e3":function(t){t.exports=JSON.parse('{"title":"cheaterStatus","child":[{"value":0,"class":"green","values":["0"]},{"value":5,"class":"#535353","values":["5"]},{"value":6,"class":"#FF6E40","values":["6"]},{"value":1,"class":"red","values":["1"]},{"value":2,"class":"green","values":["2"]},{"value":3,"class":"warning","values":["3"]},{"value":4,"class":"grey","values":["4"]},{"value":8,"class":"green","values":["8"]},{"value":9,"class":"green","values":["9"]}]}')},a542:function(t,e,a){t.exports=a.p+"assets/img/logo.dbc12e75.png"},d141:function(t,e,a){t.exports=a.p+"assets/img/logo.6ffd12a1.png"},e124:function(t,e,a){t.exports=a.p+"assets/img/bf.b384c970.jpg"},e153:function(t,e,a){var s={"./images/games/bf1/bf.jpg":"e953","./images/games/bf6/bf.jpg":"1c8a","./images/games/bfv/bf.jpg":"e124"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id="e153"},e953:function(t,e,a){t.exports=a.p+"assets/img/bf.41bffcdf.jpg"}}]);
//# sourceMappingURL=chunk-2f51ce40.2.9.14.js.map