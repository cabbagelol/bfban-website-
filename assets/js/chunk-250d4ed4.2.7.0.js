(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-250d4ed4"],{"0b05":function(e,t,a){var s={"./images/games/bf1/logo.png":"d141","./images/games/bf6/logo.png":"a542","./images/games/bfv/logo.png":"28dd","./images/logo.png":"9d64"};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id="0b05"},"1c8a":function(e,t,a){e.exports=a.p+"assets/img/bf.350c4f88.jpg"},"20aa":function(e,t,a){"use strict";a("525c")},"28dd":function(e,t,a){e.exports=a.p+"assets/img/logo.f39797a8.png"},2953:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("br"),t("Row",[t("Col",{attrs:{xs:{push:1},lg:{push:0}}},[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:{name:"home"}}},[e._v(e._s(e.$t("header.index")))]),t("BreadcrumbItem",{attrs:{to:{name:"profile",params:{pagename:"account"}}}},[e._v(e._s(e.$t("header.profile")))]),t("BreadcrumbItem",[e._v(e._s(e.$t("profile.admin.title")))])],1)],1)],1),t("br"),t("Card",{staticClass:"admin",attrs:{"dis-hover":"",padding:0}},[t("Row",{attrs:{gutter:0}},[t("Col",{attrs:{xs:{span:24},sm:{span:6}}},[t("Menu",{staticClass:"admin-menu",attrs:{mode:e.isMobile?"horizontal":"vertical","open-names":e.openMuen,"active-name":e.adminMenuValue},on:{"on-select":e.onMenuActive}},e._l(e.adminMuen,(function(a,s){return t("MenuGroup",{key:s,attrs:{title:e.$t("profile.admin.menu."+a.title)}},e._l(a.child,(function(a,s){return t("MenuItem",{key:s,attrs:{name:a.value}},[a.icon?t("Icon",{attrs:{type:a.icon}}):e._e(),e._v(" "+e._s(e.$t("profile.admin.menu."+a.title))+" ")],1)})),1)})),1)],1),t("Col",{staticStyle:{padding:"20px"},attrs:{xs:{span:24},sm:{span:18}}},["user"==e.adminMenuValue?t("user"):"comment"==e.adminMenuValue?t("comment"):"admin_log"==e.adminMenuValue?t("log"):"judgement_log"==e.adminMenuValue?t("judgementLog"):e._e()],1)],1)],1)],1)},i=[],r=(a("14d9"),function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("Row",{attrs:{gutter:10,type:"flex",align:"middle"}},[t("Col",[t("Button",{on:{click:function(t){e.addUserModel=!0}}},[t("Icon",{attrs:{type:"md-add"}})],1)],1),t("Col",{attrs:{flex:"1"}}),t("Col",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.load,expression:"load"}]},[t("Icon",{attrs:{type:"ios-loading"}})],1)]),t("Col",[t("Input",{staticStyle:{width:"280px"},attrs:{type:"text",search:"","enter-button":"",placeholder:"input user name"},on:{"on-enter":e.onSearchUser,"on-search":e.onSearchUser},model:{value:e.userValue,callback:function(t){e.userValue=t},expression:"userValue"}})],1)],1),t("br"),t("Page",{staticClass:"page",attrs:{size:"small","show-sizer":"","show-total":"","show-elevator":"","page-size":e.limit,current:e.skip,total:e.total},on:{"on-change":e.handlePageChange,"on-page-size-change":e.handlePageSizeChange}}),t("br"),e._l(e.userListData,(function(a,s){return t("Card",{key:s,staticClass:"admin-user",attrs:{"dis-hover":""}},[t("Row",{attrs:{gutter:10,type:"flex",justify:"center",align:"middle"}},[t("Col",{attrs:{flex:"1"}},[t("BusinessCard",{attrs:{id:a.id}},[t("b",[e._v(e._s(a.username))])]),t("div",[e._v(" Id:"+e._s(a.id)+" "),t("divider",{attrs:{type:"vertical"}}),e._v(" Valid:"+e._s(a.valid)+" ")],1)],1),t("Col",[a.privilege?t("PrivilegesTag",{ref:`tag_${a.id}_privilegesTag`,refInFor:!0,attrs:{data:a.privilege}}):e._e()],1),t("Col",[t("Button",{attrs:{type:"dashed",size:"small",disabled:!e.isAdmin},on:{click:function(t){return e.onEditUser(s)}}},[t("Icon",{attrs:{type:"ios-create"}})],1),t("Divider",{attrs:{type:"vertical"}}),t("Button",{attrs:{type:"error",size:"small",disabled:!e.isAdmin},on:{click:function(t){return e.openDelUserModel(s)}}},[t("Icon",{attrs:{type:"md-trash"}})],1)],1)],1)],1)})),e.userListData.length<=0?t("Card",{attrs:{"dis-hover":"",align:"center"}},[e._v(":(")]):e._e(),t("Modal",{attrs:{width:"980",title:e.editUserData.username},on:{"on-ok":e.onEditUserSubmit},model:{value:e.userEditModel,callback:function(t){e.userEditModel=t},expression:"userEditModel"}},[t("Form",{ref:"formValidate",attrs:{model:e.editUserData,"label-position":"top"}},[t("Row",{attrs:{gutter:20}},[t("Col",{attrs:{span:"12"}},[t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{span:"24"}},[t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{span:"6"}},[t("FormItem",{attrs:{prop:"id"}},[t("Input",{attrs:{readonly:""},model:{value:e.editUserData.id,callback:function(t){e.$set(e.editUserData,"id",t)},expression:"editUserData.id"}})],1)],1),t("Col",{attrs:{span:"18"}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{maxlength:"40"},model:{value:e.editUserData.username,callback:function(t){e.$set(e.editUserData,"username",t)},expression:"editUserData.username"}})],1)],1)],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"lastSigninIP",prop:"username"}},[t("Input",{attrs:{readonly:"",disabled:""},model:{value:e.editUserData.attr.lastSigninIP,callback:function(t){e.$set(e.editUserData.attr,"lastSigninIP",t)},expression:"editUserData.attr.lastSigninIP"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"registerIP",prop:""}},[t("Input",{attrs:{readonly:"",disabled:""},model:{value:e.editUserData.attr.registerIP,callback:function(t){e.$set(e.editUserData.attr,"registerIP",t)},expression:"editUserData.attr.registerIP"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"createTime",prop:""}},[t("Input",{attrs:{readonly:"",disabled:""},model:{value:e.editUserData.createTime,callback:function(t){e.$set(e.editUserData,"createTime",t)},expression:"editUserData.createTime"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"signoutTime",prop:""}},[t("Input",{attrs:{readonly:"",disabled:""},model:{value:e.editUserData.signoutTime,callback:function(t){e.$set(e.editUserData,"signoutTime",t)},expression:"editUserData.signoutTime"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"originEmail"}},[t("Input",{attrs:{readonly:""},model:{value:e.editUserData.originEmail,callback:function(t){e.$set(e.editUserData,"originEmail",t)},expression:"editUserData.originEmail"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"originName"}},[t("Input",{attrs:{readonly:""},model:{value:e.editUserData.originName,callback:function(t){e.$set(e.editUserData,"originName",t)},expression:"editUserData.originName"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"originPersonaId"}},[t("Input",{attrs:{readonly:""},model:{value:e.editUserData.originPersonaId,callback:function(t){e.$set(e.editUserData,"originPersonaId",t)},expression:"editUserData.originPersonaId"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"originUserId"}},[t("Input",{attrs:{readonly:""},model:{value:e.editUserData.originUserId,callback:function(t){e.$set(e.editUserData,"originUserId",t)},expression:"editUserData.originUserId"}})],1)],1)],1)],1),t("Col",{attrs:{span:"12"}},[t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"change Name Left"}},[t("InputNumber",{attrs:{max:5,min:0},model:{value:e.editUserData.attr.changeNameLeft,callback:function(t){e.$set(e.editUserData.attr,"changeNameLeft",t)},expression:"editUserData.attr.changeNameLeft"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.account.form.language")}},[t("Select",{staticClass:"switch-language",attrs:{prefix:"md-globe",placement:"top-end"},model:{value:e.editUserData.attr.language,callback:function(t){e.$set(e.editUserData.attr,"language",t)},expression:"editUserData.attr.language"}},e._l(e.languages,(function(a){return t("Option",{key:a.name,attrs:{value:a.name}},[e._v(" "+e._s(a.label)+" ")])})),1)],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.account.form.showOrigin")}},[t("i-switch",{model:{value:e.editUserData.attr.showOrigin,callback:function(t){e.$set(e.editUserData.attr,"showOrigin",t)},expression:"editUserData.attr.showOrigin"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.account.form.allowDM")}},[t("i-switch",{model:{value:e.editUserData.attr.allowDM,callback:function(t){e.$set(e.editUserData.attr,"allowDM",t)},expression:"editUserData.attr.allowDM"}})],1)],1)],1),t("FormItem",{attrs:{label:"privileges",prop:"privileges"}},[t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{span:"24"}},[t("PrivilegesTag",{ref:"privilegesTag",attrs:{data:e.editUserData.privilege}})],1),t("Col",{attrs:{span:"24"}},[t("Row",{attrs:{gutter:10}},[t("Col",[t("Select",{staticStyle:{width:"160px"},model:{value:e.editPrivilegesForm.activeName,callback:function(t){e.$set(e.editPrivilegesForm,"activeName",t)},expression:"editPrivilegesForm.activeName"}},e._l(e.editPrivilegesForm.action,(function(a,s){return t("Option",{key:s,attrs:{value:a}},[e._v(" "+e._s(a)+" ")])})),1)],1),t("Col",{attrs:{flex:"1"}},[t("Select",{model:{value:e.editPrivilegesForm.roleName,callback:function(t){e.$set(e.editPrivilegesForm,"roleName",t)},expression:"editPrivilegesForm.roleName"}},e._l(e.editPrivilegesForm.role,(function(a,s){return t("Option",{key:s,attrs:{value:a}},[e._v(" "+e._s(e.$t("basic.privilege."+a))+" ")])})),1)],1),t("Col",[t("Button",{on:{click:e.onEditPrivileges}},[e._v(e._s(e.$t("basic.button.commit")))])],1)],1)],1)],1)],1),t("FormItem",{attrs:{label:"introduction",prop:"introduction"}},[t("Card",{attrs:{"dis-hover":"",padding:0}},[t("Textarea",{ref:"userIntroductionTextarea",attrs:{content:e.editUserData.attr.introduction}})],1)],1)],1)],1)],1)],1),t("Modal",{attrs:{loading:e.addUserLoad},model:{value:e.addUserModel,callback:function(t){e.addUserModel=t},expression:"addUserModel"}},[t("Form",{ref:"addUserFormValidate",attrs:{model:e.addUserData,rules:e.addUserRuleValidate,"label-position":"top"}},[t("Alert",{attrs:{type:"info",icon:"info"}},[e._v(" 添加未绑定用户 "),t("template",{slot:"desc"},[e._v(" 在当前添加的用户，无法操作任何评论、判决、回复等操作，因为他未通过origin的邮箱绑定，需要用户登录账户完成最后平台绑定。 ")])],2),t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:e.$t("signup.form.username"),prop:"username"}},[t("Input",{attrs:{maxlength:"40",placeholder:e.$t("signup.placeholder.username")},model:{value:e.addUserData.username,callback:function(t){e.$set(e.addUserData,"username",t)},expression:"addUserData.username"}})],1)],1),t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:e.$t("signup.form.password"),prop:"password"}},[t("Input",{attrs:{password:"",minlength:"6",placeholder:e.$t("signup.placeholder.password")},model:{value:e.addUserData.password,callback:function(t){e.$set(e.addUserData,"password",t)},expression:"addUserData.password"}})],1)],1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{loading:e.addUserLoad},on:{click:e.onAddUserSubmit}},[e._v(e._s(e.$t("basic.button.submit")))])],1)],1),t("Modal",{attrs:{loading:e.delUserLoad,width:"360"},model:{value:e.delUserModel,callback:function(t){e.delUserModel=t},expression:"delUserModel"}},[t("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[t("Icon",{attrs:{type:"ios-information-circle"}}),t("span",[e._v("Delete User Account")])],1),t("Card",{attrs:{"dis-hover":"",align:"center"}},[t("BusinessCard",{attrs:{id:e.editUserData.id}},[t("h2",[t("a",{attrs:{href:"javascript:void(0)"}},[t("b",[e._v(e._s(e.editUserData.username))])])])]),t("p",[e._v(e._s(e.editUserData.id))])],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Row",{attrs:{type:"flex",align:"middle"}},[t("Col",[t("Select",{staticStyle:{width:"150px"},model:{value:e.delTypeValue,callback:function(t){e.delTypeValue=t},expression:"delTypeValue"}},e._l(e.delTypes,(function(a,s){return t("Option",{key:s,attrs:{value:a}},[e._v(" "+e._s(a)+" ")])})),1)],1),t("Divider",{attrs:{type:"vertical"}}),t("Col",{attrs:{flex:"2"}},[t("Button",{attrs:{type:"error",long:"",loading:e.delUserLoad},on:{click:e.onDeleteUser}},[e._v(e._s(e.$t("basic.button.submit")))])],1)],1)],1)],1)],2)}),o=[],n=a("e4b4"),l=a("a7d7"),d=a("6ea1"),m=a("d78a"),c=(a("2ef0"),a("5d71")),u=a("890e"),g=new u["a"]({data(){return{delUserModel:!1,delUserLoad:!1,delTypes:["logic","real","restore"],delTypeValue:"logic",addUserLoad:!1,load:!1,userValue:"",userListData:[],editUserData:{attr:{language:"",introduction:""},temporaryPrivilege:{},privilege:[]},editPrivilegesForm:{id:"",roleName:"",role:["normal","admin","bot","super","dev","blacklisted","freezed"],activeName:"grant",action:["grant","revoke"]},addUserData:{username:"",password:""},addUserRuleValidate:{username:[{required:!0,min:4,max:40,trigger:"blur"}],password:[{required:!0,min:6,max:40,trigger:"blur"}]},userEditModel:!1,addUserModel:!1,languages:l.child,skip:1,limit:20,order:"desc",total:0}},components:{Textarea:c["a"],PrivilegesTag:m["a"],BusinessCard:d["a"]},created(){this.http=n["d"].call(this),this.onSearchUser()},methods:{async onEditUserSubmit(){this.load=!0,await this.setUserAttr();for(const e in this.editUserData.temporaryPrivilege)this.editUserData.id&&await this.setUser(this.editUserData.id,this.editUserData.temporaryPrivilege[e],e);await this.onSearchUser(),this.load=!1},onAddUserSubmit(){const{username:e,password:t}=this.addUserData;this.$refs.addUserFormValidate.validate(a=>{a?(this.addUserLoad=!0,this.http.post(n["b"]["admin_addUser"],{data:{data:{username:e,password:t,language:this.$i18n.locale}}}).then(e=>{const t=e.data;1!=t.success?this.$Message.error(t.code):this.$Message.success(t.code)}).finally(()=>{this.addUserLoad=!1,this.addUserModel=!1})):this.$Message.error("Fail!")})},onDeleteUser(){const{id:e}=this.editUserData;this.delUserLoad=!0,this.http.post(n["b"]["admin_delUser"],{data:{data:{type:this.delTypeValue,id:e}}}).then(e=>{const t=e.data;1!=t.success?this.$Message.error(t.code):this.$Message.success(t.code)}).finally(()=>{this.onSearchUser(),this.delUserLoad=!1,this.delUserModel=!1})},openDelUserModel(e){this.editUserData=this.userListData[e],this.delUserModel=!0},onEditPrivileges(){if(!this.editPrivilegesForm.roleName||!this.editUserData.privilege)return;const e=this.editUserData.privilege.indexOf(this.editPrivilegesForm.roleName);switch(this.editPrivilegesForm.activeName){case"grant":e>=0?this.$Message.error("already exist"):(this.editUserData.privilege.push(this.editPrivilegesForm.roleName),this.editUserData.temporaryPrivilege[this.editPrivilegesForm.roleName]="grant");break;case"revoke":e?(this.editUserData.privilege.splice(e,1),this.editUserData.temporaryPrivilege[this.editPrivilegesForm.roleName]="revoke"):this.$Message.error("not role");break}this.$refs.privilegesTag&&this.$refs.privilegesTag.update()},async onSearchUser(){const e=this;let t={name:"",skip:this.skip-1,limit:this.limit};return new Promise((a,s)=>{e.load=!0,this.userValue&&(t.name=this.userValue),this.onReset(),e.http.get("admin/searchUser",{params:t}).then(t=>{const a=t.data;if(1==a.success)return e.userListData=a.data,void(e.total=a.total);e.$Message.error(a.code)}).finally(()=>{e.load=!1,a()})})},onEditUser(e){this.userEditModel=!0,this.editUserData=Object.assign(this.editUserData,this.userListData[e]),this.$refs.privilegesTag&&this.$refs.privilegesTag.update(this.editUserData.privilege),this.$refs.userIntroductionTextarea&&this.$refs.userIntroductionTextarea.updateContent(this.editUserData.attr.introduction)},async setUser(e,t,a){await this.http.post("admin/setUser",{data:{data:{id:e,action:t,role:a}}}).then(e=>{const t=e.data;1!=t.success&&this.$Message.error(t.code)})},async setUserAttr(){return new Promise((e,t)=>{let a=this.editUserData.attr;delete a.valid,delete a.language,delete a.registerIP,delete a.lastSigninIP,delete a.freezeOfNoBinding,this.http.post("admin/setUserAttr",{data:{data:{id:this.editUserData.id,username:this.editUserData.username,attr:a}}}).then(a=>{const s=a.data;1!=s.success?(this.$Message.error(s.code),t()):e()})})},handlePageChange(e){this.skip=e,this.onSearchUser()},handlePageSizeChange(e){this.skip=e,this.onSearchUser()},onReset(){this.skip=1,this.limit=20,this.order="desc",this.total=0}},computed:{}}),p=g,h=(a("f5c4"),a("2877")),v=Object(h["a"])(p,r,o,!1,null,"1835818e",null),f=v.exports,b=function(){var e=this,t=e._self._c;return t("div",[t("Row",{attrs:{type:"flex",align:"middle"}},[t("Col",{attrs:{flex:"auto",xs:{span:22,push:1,pull:1},lg:{span:24,push:0,pull:0}}},[t("RadioGroup",{staticClass:"game-type",attrs:{type:"button"},on:{"on-change":e.handleChanges},model:{value:e.gameName,callback:function(t){e.gameName=t},expression:"gameName"}},[t("Radio",{attrs:{label:"all",value:"all"}},[e._v(" "+e._s(e.$t("basic.games.all"))+" ")]),e._l(e.games,(function(s){return t("Radio",{key:s.value,class:e.gameName==s.value?"gametype-select":"",style:"background-image: url("+a("e153")("./"+s.bk_file+"/bf.jpg")+");",attrs:{label:s.value,disabled:s.disabled,"aria-radio":""}},[t("Tooltip",{attrs:{content:e.$t("basic.games."+s.value),placement:"top-start"}},[s.logo_src?t("img",{attrs:{height:"35",src:a("0b05")("./"+s.bk_file+"/logo.png")}}):t("span",[e._v(e._s(s.full_name))])])],1)}))],2)],1),t("Col",[t("Select",{model:{value:e.typeValue,callback:function(t){e.typeValue=t},expression:"typeValue"}},e._l(e.typeArray,(function(a,s){return t("Option",{key:s,attrs:{value:a}},[e._v(e._s(a))])})),1)],1),t("Divider",{attrs:{type:"vertical"}}),t("Col",[t("Button",{attrs:{loading:e.load},on:{click:e.getCommentList}},[t("Icon",{attrs:{type:"ios-loading"}})],1)],1)],1),t("br"),t("Page",{staticClass:"page",attrs:{size:"small","show-sizer":"","show-total":"","show-elevator":"","page-size":e.limit,current:e.skip,total:e.total},on:{"on-change":e.handlePageChange,"on-page-size-change":e.handlePageSizeChange}}),t("br"),e.commentList.length>0?t("Card",{attrs:{"dis-hover":"",padding:5}},e._l(e.commentList,(function(a,s){return t("div",{key:s},[t("Row",{attrs:{type:"flex",align:"middle"}},[t("Col",[t("Tag",[e._v("COMMENT")])],1),t("Col",{attrs:{flex:"1"}},[t("div",[t("Time",{attrs:{time:a.createTime,type:"date"}}),e._v(": "),t("BusinessCard",{attrs:{id:a.byUserId}},[t("a",{attrs:{href:"javascript:void(0)"}},[t("b",[e._v(e._s(a.username))])])]),e._v(" "+e._s(e.$t("detail.info.reply"))+" "),t("router-link",{attrs:{to:{name:"player",params:{ouid:a.toOriginPersonaId}}}},[t("span",[e._v(e._s(a.toOriginName))])]),e._v(" ("+e._s(a.cheatGame)+") ")],1)]),t("Col",[t("Dropdown",{attrs:{placement:"bottom-end"}},[t("a",{attrs:{href:"javascript:void(0)"}},[t("Icon",{attrs:{type:"ios-eye",size:"25"}})],1),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",[t("div",{on:{click:function(t){return e.openCommentMode(s)}}},[e._v(" Edit Comment ")])]),t("DropdownItem",{attrs:{to:{name:"player",params:{ouid:a.toOriginPersonaId}}}},[e._v(" Open Player Page ")])],1)],1)],1)],1)],1)})),0):t("Card",{attrs:{"dis-hover":""}},[e._v(" "+e._s(e.$t("basic.tip.notcontent"))+" ")]),t("br"),t("Page",{staticClass:"page",attrs:{size:"small","show-sizer":"","show-total":"","show-elevator":"","page-size":e.limit,current:e.skip,total:e.total},on:{"on-change":e.handlePageChange,"on-page-size-change":e.handlePageSizeChange}}),t("Modal",{attrs:{"footer-hide":""},model:{value:e.commentEditModel,callback:function(t){e.commentEditModel=t},expression:"commentEditModel"}},[t("Form",{ref:"commentFormValidate",attrs:{model:e.editCommentFrom,rules:e.commentRuleValidate,"label-position":"top"}},[t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{prop:"content"}},[t("Card",{attrs:{"dis-hover":"",padding:0}},[t("Textarea",{ref:"commentTextarea",attrs:{maxlength:65535},model:{value:e.editCommentFrom.content,callback:function(t){e.$set(e.editCommentFrom,"content",t)},expression:"editCommentFrom.content"}})],1)],1)],1),t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{prop:"videoLink",label:"videoLink"}},[t("Input",{attrs:{maxlength:255},model:{value:e.editCommentFrom.videoLink,callback:function(t){e.$set(e.editCommentFrom,"videoLink",t)},expression:"editCommentFrom.videoLink"}})],1)],1)],1)],1),t("div",{attrs:{solt:"footer"}},[t("Row",[t("Col",{attrs:{flex:"1"}}),t("Col",[t("Button",{attrs:{type:"primary",loading:e.commentEditLoad},on:{click:e.commentSubmit}},[e._v(" "+e._s(e.$t("basic.button.submit"))+" ")])],1)],1)],1)],1)],1)},C=[],U={data(){return{commentEditModel:!1,commentEditLoad:!1,editCommentFrom:{id:0,content:"",videoLink:""},commentRuleValidate:{content:[{required:!0,trigger:"blur"}],videoLink:[{required:!0,trigger:"blur"}]},load:!1,gameName:"all",games:[],commentList:[],typeValue:"report",typeArray:["report","reply","judgement","banAppeal"],skip:1,limit:20,order:"desc",total:0}},components:{BusinessCard:d["a"],Textarea:c["a"]},created(){this.http=n["d"].call(this),this.loadData()},watch:{$route:"loadData"},methods:{async loadData(){await n["j"].initUtil().then(e=>{this.games=e.gameName}),this.getCommentList()},openCommentMode(e){this.editCommentFrom=this.commentList[e],this.$refs.commentTextarea&&this.$refs.commentTextarea.updateContent(this.editCommentFrom.content),this.commentEditModel=!0},handlePageChange(e){this.skip=e,this.getCommentList()},handlePageSizeChange(e){this.limit=e,this.getCommentList()},handleChanges(){this.getCommentList()},commentSubmit(){this.editCommentFrom.id&&this.editCommentFrom.content&&this.editCommentFrom.videoLink&&this.http.post(n["b"]["admin_setComment"],{data:{data:{id:this.editCommentFrom.id,content:this.editCommentFrom.content,videoLink:this.editCommentFrom.videoLink}}}).then(e=>{const t=e.data;1!=t.success?this.$Message.error(t.code):this.$Message.success(t.code)}).finally(()=>{this.commentEditModel=!1,this.load=!1,this.getCommentList()})},getCommentList(){this.load=!0,this.http.get(n["b"]["admin_commentAll"],{params:{type:this.typeValue,game:this.gameName,skip:this.skip-1,limit:this.limit,order:this.order}}).then(e=>{const t=e.data;if(1==t.success)return this.commentList=t.data,void(this.total=t.total);this.$Message.error(t.code)}).finally(()=>{this.load=!1})}}},D=U,y=Object(h["a"])(D,b,C,!1,null,null,null),k=y.exports,w=function(){var e=this,t=e._self._c;return t("div",[t("Row",[t("Col",{attrs:{flex:"1"}},[t("Input",{attrs:{type:"text",search:"","enter-button":"",placeholder:"input user name"},on:{"on-enter":e.getAdminjudgementLog,"on-search":e.getAdminjudgementLog},model:{value:e.userValue,callback:function(t){e.userValue=t},expression:"userValue"}})],1)],1),t("br"),t("Card",{attrs:{"dis-hover":"",padding:5}},[e.operationLogs.length>0?e._l(e.operationLogs,(function(a){return t("div",{key:a.id},[t("Row",{attrs:{type:"flex",align:"middle"}},[t("Col",{attrs:{flex:"1"}},[t("div",[t("Time",{attrs:{time:a.createTime,type:"date"}}),e._v(": "),t("BusinessCard",{attrs:{id:a.byUserId}},[t("b",[e._v(e._s(a.adminName))])]),e._v("  "),t("Tag",[e._v(" "+e._s(a.action)+" ")]),e._v("  "),t("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(a.userName))]),e._v("  "),t("Tag",[e._v(e._s(a.role))]),e._v("  ")],1)])],1)],1)})):[e._v(" "+e._s(e.$t("basic.tip.notcontent"))+" ")]],2)],1)},I=[],M={data(){return{load:!1,operationLogs:[],userValue:""}},components:{BusinessCard:d["a"]},created(){this.http=n["d"].call(this)},methods:{getAdminjudgementLog(){this.load||(this.load=!0,this.http.get(n["b"]["getUserOperationLogs"],{params:{name:this.userValue}}).then(e=>{const t=e.data;1==t.success&&(this.operationLogs=t.data)}).finally(()=>{this.load=!1}))}}},x=M,L=Object(h["a"])(x,w,I,!1,null,null,null),P=L.exports,_=function(){var e=this,t=e._self._c;return t("div",[t("Row",[t("Col",{attrs:{flex:"1"}},[t("Page",{staticClass:"page",attrs:{size:"small","show-sizer":"","show-total":"","show-elevator":"","page-size":e.limit,current:e.skip,total:e.total},on:{"on-change":e.handlePageChange,"on-page-size-change":e.handlePageSizeChange}})],1),t("Col",[t("Button",{attrs:{size:"small",loading:e.load},on:{click:e.getAdminjudgementLog}},[e._v(e._s(e.$t("basic.button.submit")))])],1)],1),t("br"),t("Card",{attrs:{"dis-hover":"",padding:5}},[e.judgementLog.length>0?e._l(e.judgementLog,(function(a,s){return t("div",{key:s},[t("Row",{attrs:{type:"flex",align:"middle"}},[t("Col",[t("Tag",[e._v("Log")])],1),t("Col",{attrs:{flex:"1"}},[t("div",[t("Time",{attrs:{time:a.createTime,type:"date"}}),e._v(": "),t("BusinessCard",{attrs:{id:a.byUserId}},[t("b",[e._v(e._s(a.username))])]),t("span",[e._v(" "+e._s(e.$t("detail.info.judge"))+" ")]),t("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(a.toOriginPersonaId))]),t("span",[e._v(" "+e._s(a.cheatMethods.toString())+" "+e._s(e.$t(`basic.action.${a.judgeAction}.text`))+" ")])],1)]),t("Col",[t("router-link",{attrs:{to:{name:"player",params:{ouid:a.toOriginPersonaId}}}},[t("Icon",{attrs:{type:"ios-eye",size:"25"}})],1)],1)],1)],1)})):[e._v(" "+e._s(e.$t("basic.tip.notcontent"))+" ")]],2),t("br"),t("Page",{staticClass:"page",attrs:{size:"small","show-sizer":"","show-total":"","show-elevator":"","page-size":e.limit,current:e.skip,total:e.total},on:{"on-change":e.handlePageChange,"on-page-size-change":e.handlePageSizeChange}})],1)},A=[],F={data(){return{load:!1,judgementLog:[],limit:100,skip:1,total:0}},components:{BusinessCard:d["a"]},created(){this.http=n["d"].call(this),this.getAdminjudgementLog()},methods:{getAdminjudgementLog(){this.load||(this.load=!0,this.http.get(n["b"]["admin_judgementLog"],{params:{limit:this.limit,skip:this.skip,total:this.total}}).then(e=>{const t=e.data;1==t.success&&(this.judgementLog=t.data,this.total=t.total)}).finally(()=>{this.load=!1}))},handlePageSizeChange(e){this.limit=e,this.getAdminjudgementLog()},handlePageChange(e){this.skip=e,this.getAdminjudgementLog()}}},T=F,B=Object(h["a"])(T,_,A,!1,null,null,null),z=B.exports,E=new u["a"]({name:"profile",data(){return{privileges:[],openMuen:["comment","comm","log"],adminMenuValue:"user",adminMuen:[{title:"management",child:[{title:"user",value:"user"},{title:"comment",value:"comment"}]},{title:"log",icon:"ios-paper",child:[{title:"adminLog",value:"admin_log"},{title:"judgementLog",value:"judgement_log"}]}]}},components:{user:f,comment:k,log:P,judgementLog:z},methods:{onMenuActive(e){this.adminMenuValue=e,this.$router.push({name:"admin",params:{pagename:e}})}},created(){const{pagename:e}=this.$route.params;void 0!=e?this.onMenuActive(e):this.onMenuActive("account")},computed:{}}),N=E,j=(a("eeeb"),Object(h["a"])(N,s,i,!1,null,"e651a3ce",null));t["default"]=j.exports},"2c56":function(e,t,a){},"39b7":function(e,t,a){},"525c":function(e,t,a){},"6ea1":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("Poptip",{attrs:{padding:e.padding,width:e.width,trigger:"hover",placement:"bottom",transfer:!0},on:{"on-popper-show":e.getUserInfo}},[e._t("default"),t("div",{staticClass:"business",attrs:{slot:"content"},slot:"content"},[e.loadErr?[t("Row",[t("Col",{attrs:{align:"center"}},[t("Icon",{attrs:{type:"md-alert",size:"40",color:"red"}})],1)],1)]:[t("div",{staticClass:"business-img"},[t("img",{attrs:{src:a("e124")}})]),t("Row",[t("Col",{attrs:{flex:"1"}},[t("h2",[e._v(" "+e._s(e.userInfo.username)+" ")]),e.userInfo.privilege?t("PrivilegesTag",{attrs:{data:e.userInfo.privilege}}):e._e()],1),t("Col",[e._v(" # "+e._s(e.userInfo.id)+" ")])],1),t("br"),t("Card",{attrs:{"dis-hover":""}},[t("p",{domProps:{innerHTML:e._s(e.userInfo.introduction||"(✿◡‿◡)")}})]),t("br"),t("Row",[t("Col",{attrs:{flex:"auto"}}),t("Col",[t("router-link",{attrs:{to:{path:"/account/"+e.userInfo.id,query:{repeat:!0}}}},[t("Button",[t("Icon",{attrs:{type:"ios-send",size:"20"}})],1)],1)],1)],1)],t("Spin",{directives:[{name:"show",rawName:"v-show",value:e.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}},[t("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"50"}}),t("p",[e._v("ヾ(◍°∇°◍)ﾉﾞ load...")])],1)],2)],2)},i=[],r=a("e4b4"),o=a("d78a"),n={props:{width:{type:Number,default:400},id:Number,padding:{type:String,default:"0"}},data(){return{localBusinessMap:{},userInfo:{},spinShow:!1,loadErr:!1,type:"user"}},components:{PrivilegesTag:o["a"]},methods:{getUserInfo(){const e="business";let t=r["h"].session().get(e);if(0==t.code&&(this.localBusinessMap=t.data.value,this.localBusinessMap[this.id]&&(this.userInfo=this.localBusinessMap[this.id])),!(Object.keys(this.userInfo).length>0))switch(this.spinShow=!0,this.type){case"user":r["c"].get(r["b"]["user_info"],{params:{id:this.id}}).then(t=>{const a=t.data;1==a.success?(this.userInfo=a.data,this.localBusinessMap[this.userInfo.id]=this.userInfo,r["h"].session().set(e,this.localBusinessMap)):this.catch()}).catch(()=>{this.loadErr=!0}).finally(()=>{this.spinShow=!1});break}}}},l=n,d=(a("20aa"),a("2877")),m=Object(d["a"])(l,s,i,!1,null,null,null);t["a"]=m.exports},a542:function(e,t){e.exports="data:image/png;base64,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"},d141:function(e,t,a){e.exports=a.p+"assets/img/logo.6ffd12a1.png"},e153:function(e,t,a){var s={"./images/games/bf1/bf.jpg":"e953","./images/games/bf6/bf.jpg":"1c8a","./images/games/bfv/bf.jpg":"e124"};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id="e153"},e953:function(e,t,a){e.exports=a.p+"assets/img/bf.41bffcdf.jpg"},eeeb:function(e,t,a){"use strict";a("39b7")},f5c4:function(e,t,a){"use strict";a("2c56")}}]);
//# sourceMappingURL=chunk-250d4ed4.2.7.0.js.map