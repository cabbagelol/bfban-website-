(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1218ad9b","chunk-2d0afaa9","chunk-2d0ccbb8"],{"0b05":function(t,e,a){var s={"./images/games/bf1/logo.png":"d141","./images/games/bf6/logo.png":"a542","./images/games/bfv/logo.png":"28dd","./images/logo.png":"9d64"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id="0b05"},"0efd":function(t){t.exports=JSON.parse('{"child":[{"value":0,"values":["0","wallhack"]},{"value":5,"values":["5","gadgetModify","suspect"]},{"value":6,"values":["6","teleport"]},{"value":1,"values":["1","guilt"],"action":"guilt"},{"value":2,"values":["2","invisable","discuss"],"action":"discuss"},{"value":3,"values":["3","magicBullet","innocent"],"action":"innocent"},{"value":4,"values":["4","damageChange","trash"],"action":"suspect"}]}')},"1a33":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("br"),e("Row",[e("Col",{attrs:{xs:{push:1},lg:{push:0}}},[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),e("BreadcrumbItem",[t._v(t._s(t.$t("list.title")))])],1)],1)],1),e("br"),e("Row",[e("Col",{attrs:{flex:"auto",xs:{span:22,push:1,pull:1},lg:{span:24,push:0,pull:0}}},[e("RadioGroup",{staticClass:"game-type",attrs:{size:"large",type:"button"},on:{"on-change":t.handleChanges},model:{value:t.gameName,callback:function(e){t.gameName=e},expression:"gameName"}},[e("Radio",{attrs:{label:"all",value:"all"}},[e("Badge",{attrs:{count:t.getTotalNum("*"),"overflow-count":9e4,type:"normal"}},[t._v(" "+t._s(t.$t("basic.games.all"))+" ")])],1),t._l(t.games,(function(s){return e("Radio",{key:s.value,class:t.gameName==s.value?"gametype-select":"",style:"background-image: url("+a("e153")("./"+s.bk_file+"/bf.jpg")+");",attrs:{label:s.value,disabled:s.disabled,"aria-radio":""}},[e("Badge",{attrs:{count:t.getTotalNum(s.value),"overflow-count":9e4,type:"info"}},[e("Tooltip",{attrs:{content:t.$t("basic.games."+s.value),placement:"top-start"}},[s.logo_src?e("img",{attrs:{height:"35",src:a("0b05")("./"+s.bk_file+"/logo.png")}}):e("span",[t._v(t._s(s.full_name))])])],1)],1)}))],2)],1),6==t.statusGroup||0==t.statusGroup?e("Col",[e("i-switch",{on:{"on-change":t.autoUpdateList},model:{value:t.bot.autoUpdate,callback:function(e){t.$set(t.bot,"autoUpdate",e)},expression:"bot.autoUpdate"}})],1):t._e()],1),e("Row",[e("Col",{attrs:{xs:{span:22,push:1,pull:1},lg:{span:24,push:0,pull:0}}},[e("RadioGroup",{staticStyle:{"margin-top":"12px"},attrs:{type:"button"},on:{"on-change":t.handleStatusChange},model:{value:t.statusGroup,callback:function(e){t.statusGroup=e},expression:"statusGroup"}},[e("Radio",{attrs:{label:"-1"}},[e("Badge",{attrs:{"overflow-count":9e5,size:"small",type:"info"}},[t._v(" "+t._s(t.$t("basic.status.all"))+" ")])],1),t._l(t.cheaterStatus,(function(a){return e("Radio",{key:a.value,attrs:{label:""+a.value}},[e("Badge",{attrs:{count:t.getcHeaterStatusNum(a.value),"overflow-count":9e5,type:"info"}},[t._v(" "+t._s(t.$t(`basic.status[${a.value}]`))+t._s(a[t.$i18n.locale])+" ")])],1)}))],2)],1)],1),e("Row",{attrs:{gutter:10}},[e("Col",{attrs:{xs:{span:22,push:1,pull:1},lg:{span:17,push:0,pull:0}}},[e("Card",{staticClass:"list",attrs:{"dis-hover":""}},[e("Page",{staticClass:"page",attrs:{size:"small","show-sizer":"","show-total":"","show-elevator":"","page-size":t.limit,current:t.skip,total:t.total},on:{"on-change":t.handlePageChange,"on-page-size-change":t.handlePageSizeChange}}),e("Spin",{directives:[{name:"show",rawName:"v-show",value:t.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:"","show-elevator":""}}),t._l(t.data,(function(a,s){return e("div",{key:a.originUserId,staticClass:"item-card"},[e("Badge",{staticStyle:{width:"100%"},attrs:{text:a.viewNum>100&&a.commentsNum>10?"hot":""}},[e("Card",{attrs:{"dis-hover":"",padding:10}},[e("Row",{attrs:{gutter:10,type:"flex"}},[e("Col",{attrs:{xs:{span:8,push:0,pull:0},lg:{span:3,push:0,pull:0}}},[a.avatarLink?e("Avatar",{attrs:{src:a.avatarLink,alt:"avatar",size:"55"},on:{"on-error":function(e){return t.onAvatarError(s)}}}):[e("Avatar",{staticStyle:{"background-color":"rgba(255,0,0,0.37)"},attrs:{icon:"ios-person",size:"55"}})]],2),e("Col",{attrs:{xs:{span:17,push:0,pull:0},lg:{span:17,push:0,pull:0}}},[e("div",{staticStyle:{display:"flex","flex-direction":"column"}},[e("Tooltip",{attrs:{content:t.$t("list.colums.playerId")}},[e("h2",[e("router-link",{style:""==a.avatarLink?"color: rgba(255,0,0,1);text-decoration: line-through;":"",attrs:{to:{name:"player",params:{ouid:""+a.originPersonaId}}}},[t._v(" "+t._s(a.originName)+" ")])],1)])],1),e("div",[t._v(" "+t._s(t.$t("list.colums.reportTime"))+" "),a.createTime?e("Time",{attrs:{time:a.createTime}}):t._e(),e("Divider",{attrs:{type:"vertical"}}),t._v(" "+t._s(t.$t("list.colums.updateTime"))+" "),a.updateTime?e("Time",{attrs:{time:a.updateTime}}):t._e()],1)]),e("Col",{staticClass:"mobile-hide",attrs:{xs:{span:24,push:0,pull:0},lg:{span:3,push:0,pull:0}}},[e("Row",{staticStyle:{height:"100%"},attrs:{type:"flex",justify:"end",align:"middle"}},[e("Col",{staticClass:"item-text",attrs:{flex:"auto",align:"right"}},[e("span",[t._v(t._s(a.viewNum||0))]),e("Icon",{staticClass:"item-icon",attrs:{type:"md-eye",size:"17"}})],1),e("Col",{staticClass:"item-text",attrs:{flex:"auto",align:"right"}},[e("span",[t._v(t._s(a.commentsNum||0))]),e("Icon",{staticClass:"item-icon",attrs:{type:"md-chatboxes",size:"17"}})],1)],1)],1),e("Col",{staticClass:"mobile-hide",attrs:{xs:{span:24,push:0,pull:0},lg:{span:1,push:0,pull:0},align:"center"}},[e("Progress",{attrs:{vertical:"",percent:1==a.status?99:100,"hide-info":"",status:"wrong"}})],1)],1)],1)],1)],1)})),t.data.length<=0?e("Card",{attrs:{"dis-hover":"",padding:10,align:"center"}},[t._v(" (｀ﾍ´)=3=3=3=3=3=3 ")]):t._e(),e("Page",{staticClass:"page",attrs:{size:"small","show-sizer":"","show-total":"","show-elevator":"","page-size":t.limit,current:t.skip,total:t.total},on:{"on-change":t.handlePageChange,"on-page-size-change":t.handlePageSizeChange}})],2)],1),e("Col",{attrs:{xs:{span:22,push:1,pull:1},lg:{span:7,push:0,pull:0}}},[e("br"),e("Affix",{attrs:{"offset-top":20}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"md-funnel"}}),t._v(" "+t._s(t.$t("list.colums.screenTitle"))+" ")],1),e("Form",[e("FormItem",{attrs:{label:t.$t("list.reportTime")}},[e("DatePicker",{staticStyle:{width:"100%"},attrs:{value:t.createTime,"split-panels":"",placeholder:t.$t("list.reportTime")},on:{"on-change":t.handleCDatepicker}})],1),e("FormItem",{attrs:{label:t.$t("list.updateTime")}},[e("DatePicker",{staticStyle:{width:"100%"},attrs:{value:t.updateTime,"split-panels":"",placeholder:t.$t("list.updateTime")},on:{"on-change":t.handleUDatepicker}})],1),e("FormItem",[e("Select",{on:{"on-change":t.handleChanges},model:{value:t.sortByValue,callback:function(e){t.sortByValue=e},expression:"sortByValue"}},t._l(t.sortBy,(function(a){return e("Option",{key:a.value,attrs:{value:a.value}},[t._v(" "+t._s(t.$t("list.filters.sortBy."+a.value))+" ")])})),1)],1)],1)],1)],1)],1)],1)],1)])},i=[],o=(a("14d9"),a("890e")),l=a("e4b4"),n=a("0efd"),r=a("4ed5"),u=a("2ef0"),g=a.n(u),p=new o["a"]({data(){return{games:[],data:[],spinShow:!0,gameName:"all",statusGroup:"",createTime:"",updateTime:"",skip:1,limit:10,total:0,gameSum:[],totalSum:[],sortBy:[{value:"createTime"},{value:"updateTime"},{value:"viewNum"},{value:"commentNum"}],sortByValue:"createTime",cheaterStatus:null,bot:{autoUpdate:!1,time:1e4}}},created(){this.loadData()},watch:{$route:"loadData"},methods:{autoUpdateList(){const t=this;l["a"].updateConfiguration("autoUpdatePlayerList",this.bot.autoUpdate),t.bot.autoUpdate?t.bot.fun=setInterval((function(){t.getCheaterList()}),t.bot.time):clearInterval(this.bot.fun)},getTotalNum(t){let e={};switch(t){case"*":this.gameSum.forEach(t=>e.num+=t.count);break;default:e=g.a.find(this.gameSum,["game",t])}return e?e.num:0},getcHeaterStatusNum(t){let e=g.a.find(this.totalSum,["status",t]);return e?e.num:0},async loadData(){await l["j"].initUtil().then(t=>{this.cheaterStatus=t.cheaterStatus,this.games=t.gameName}),this.getCheaterList(),this.getPlayerStatistics()},getPlayerStatistics(){const t=this;let e={data:[]},a=0;r.child.forEach(t=>{e.data.push({game:t.value,status:-1}),a++}),n.child.forEach((t,a)=>{e.data.push({game:"all"==this.gameName?"*":this.gameName,status:a})}),l["c"].post(l["b"]["playerStatistics"],{data:e}).then(e=>{const s=e.data;let i=[],o=[];1===s.success&&([].concat(s.data).splice(0,a).forEach((e,a)=>{i.push({game:t.games[a].value.toString(),num:Number(e.count)})}),this.gameSum=i,[].concat(s.data).splice(a,s.data.length-1).forEach((e,a)=>{o.push({status:t.cheaterStatus.filter(t=>t.value==a)[0].value,num:Number(e.count)})}),this.totalSum=o)}).catch(t=>{this.$Message.error(t.message)})},async getCheaterList(){const{game:t="all",status:e=-1,createTime:a,updateTime:s,skip:i=this.skip,sort:o="updateTime",limit:n=this.limit}=this.$route.query;let r={params:{game:t,skip:(i-1)*n,sort:o,status:e,tz:"",limit:n}};return a&&(r["params"]["createTime"]=new Date(a).getTime()),s&&(r["params"]["updateTime"]=new Date(s).getTime()),this.gameName=t,this.statusGroup=e,this.createTime=a,this.updateTime=s,this.skip=Number.parseInt(i),this.limit=Number.parseInt(n),this.sortByValue=o,this.spinShow=!0,new Promise((t,e)=>{l["c"].get(l["b"]["players"],r).then(e=>{const a=e.data;1===a.success?(this.data=a.data.result||[],this.total=a.data.total,t(a)):this.catch(e)}).catch(t=>{this.$Message.error(t.code),e(t)}).finally(()=>{this.spinShow=!1})})},routerQuery(){const t=this.gameName,e=this.statusGroup,a=this.createTime,s=this.updateTime,i=this.skip,o=this.limit,l=this.sortByValue;let n={};return n["status"]=e,","!==a&&(n["createTime"]=a),","!==s&&(n["updateTime"]=s),1!==i&&(n["skip"]=i),n["limit"]=o,""!==l&&(n["sort"]=l),""!==t&&(n["game"]=t),n},handleChanges(){const t=this.routerQuery();this.$router.push({name:this.$router.name,query:t})},handleStatusChange(){this.skip=1,this.handleChanges()},handleCDatepicker(t){this.createTime=t,this.skip=1,this.handleChanges()},handleUDatepicker(t){this.updateTime=t,this.skip=1,this.handleChanges()},handlePageChange(t){this.skip=t,this.handleChanges()},handlePageSizeChange(t){this.limit=t,this.handleChanges()},onAvatarError(t){this.data[t].avatarLink=""}},computed:{getAllStatusNum(){let t={num:0};switch(this.gameName){case"all":for(let e of this.gameSum)t.num+=e.num||0;break;default:t=g.a.find(this.gameSum,["game",this.gameName])}return t?t.num:0}}}),c=p,m=(a("fb4e"),a("2877")),h=Object(m["a"])(c,s,i,!1,null,"b394dff2",null);e["default"]=h.exports},"1c8a":function(t,e,a){t.exports=a.p+"assets/img/bf.350c4f88.jpg"},"28dd":function(t,e,a){t.exports=a.p+"assets/img/logo.f39797a8.png"},4910:function(t,e,a){},"4ed5":function(t){t.exports=JSON.parse('{"defaultIndex":2,"default":"bf1","child":[{"value":"bf1","full_name":"bf1","bk_file":"images/games/bf1","bk_src":"//media.contentapi.ea.com/content/dam/gin/images/2017/01/battlefield-1-keyart-5452x3859.jpg.adapt.crop1x1.767p.jpg","logo_src":"//media.contentapi.ea.com/content/dam/gin/common/logos/layer-1.png","app_assets_bk_file":"assets/images/report/battlefield-1-png-logo.png","app_assets_logo_file":"assets/images/report/battlefield-1-png-logo.png"},{"value":"bfv","full_name":"bfv","bk_file":"images/games/bfv","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2018/05/bfv-campaignart-standard-large.jpg.adapt.crop1x1.767p.jpg","bk_width":150,"logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/bfv-logo-white.png","app_assets_bk_file":"assets/images/report/battlefield-v-png-logo.png","app_assets_logo_file":"assets/images/report/battlefield-v-png-logo.png"},{"value":"bf6","full_name":"bf2046","bk_file":"images/games/bf6","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg","logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg","app_assets_bk_file":"assets/images/report/battlefield-2042-logo.png","app_assets_logo_file":"assets/images/report/battlefield-2042-logo.png"}]}')},a542:function(t,e){t.exports="data:image/png;base64,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"},d141:function(t,e,a){t.exports=a.p+"assets/img/logo.6ffd12a1.png"},e124:function(t,e,a){t.exports=a.p+"assets/img/bf.b384c970.jpg"},e153:function(t,e,a){var s={"./images/games/bf1/bf.jpg":"e953","./images/games/bf6/bf.jpg":"1c8a","./images/games/bfv/bf.jpg":"e124"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id="e153"},e953:function(t,e,a){t.exports=a.p+"assets/img/bf.41bffcdf.jpg"},fb4e:function(t,e,a){"use strict";a("4910")}}]);
//# sourceMappingURL=chunk-1218ad9b.2.7.0.js.map