(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b381b"],{2953:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("Row",[t("Col",{attrs:{xs:{push:1},lg:{push:0}}},[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:{name:"home"}}},[e._v(e._s(e.$t("header.index")))]),t("BreadcrumbItem",{attrs:{to:{name:"profile",params:{pagename:"account"}}}},[e._v(e._s(e.$t("header.profile")))]),t("BreadcrumbItem",[e._v(e._s(e.$t("admin.title")))])],1)],1)],1),t("br"),t("Card",{attrs:{"dis-hover":"",padding:0}},[t("Row",{attrs:{gutter:0}},[t("Col",{attrs:{xs:{span:24},sm:{span:6}}},[t("Menu",{attrs:{"open-names":e.openMuen,"active-name":e.adminMenuValue},on:{"on-select":e.onMenuActive}},e._l(e.adminMuen,(function(a,r){return t("MenuGroup",{key:r,attrs:{title:a.title}},e._l(a.child,(function(a,r){return t("MenuItem",{key:r,attrs:{name:a.value}},[a.icon?t("Icon",{attrs:{type:a.icon}}):e._e(),e._v(" "+e._s(a.title)+" ")],1)})),1)})),1)],1),t("Col",{staticStyle:{padding:"20px"},attrs:{xs:{span:24},sm:{span:18}}},["user"==e.adminMenuValue?t("user"):"comment"==e.adminMenuValue?t("comment"):"admin_log"==e.adminMenuValue?t("log"):e._e()],1)],1)],1)],1)},s=[],i=function(){var e=this,t=e._self._c;return t("div",[t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{flex:"1"}},[t("Input",{attrs:{placeholder:"Enter ..."},model:{value:e.userValue,callback:function(t){e.userValue=t},expression:"userValue"}})],1),t("Col",[t("Button",{on:{click:e.onSearchUser}},[e._v("搜索")])],1)],1),t("br"),e._l(e.userListData,(function(a,r){return t("Card",{key:r,attrs:{"dis-hover":""}},[t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{flex:"1"}},[t("h1",[e._v(e._s(a.username))]),t("span",[e._v(e._s(a.id))])]),t("Col",[t("PrivilegesTag",{attrs:{data:a.privilege}})],1),t("Col",[t("Button",{attrs:{type:"dashed"},on:{click:function(t){return e.onEditUser(r)}}},[e._v("SET")])],1)],1)],1)})),e.userListData.length<=0?t("div",[e._v(":(")]):e._e(),t("Modal",{attrs:{title:e.editUserData.username},on:{"on-ok":e.onSubmit},model:{value:e.userModel,callback:function(t){e.userModel=t},expression:"userModel"}},[t("Form",{ref:"formValidate",attrs:{model:e.editUserData,"label-position":"top"}},[t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{model:{value:e.editUserData.username,callback:function(t){e.$set(e.editUserData,"username",t)},expression:"editUserData.username"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{prop:"username",label:"password"}},[t("Input",{attrs:{readonly:"",disabled:""},model:{value:e.editUserData.password,callback:function(t){e.$set(e.editUserData,"password",t)},expression:"editUserData.password"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{prop:"username",label:"avatar"}},[t("Input",{model:{value:e.editUserData.avatar,callback:function(t){e.$set(e.editUserData,"avatar",t)},expression:"editUserData.avatar"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"lastSigninIP",prop:"username"}},[t("Input",{attrs:{readonly:"",disabled:""},model:{value:e.editUserData.attr.lastSigninIP,callback:function(t){e.$set(e.editUserData.attr,"lastSigninIP",t)},expression:"editUserData.attr.lastSigninIP"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"registerIP",prop:""}},[t("Input",{attrs:{readonly:"",disabled:""},model:{value:e.editUserData.attr.registerIP,callback:function(t){e.$set(e.editUserData.attr,"registerIP",t)},expression:"editUserData.attr.registerIP"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"createTime",prop:""}},[t("Input",{attrs:{readonly:"",disabled:""},model:{value:e.editUserData.createTime,callback:function(t){e.$set(e.editUserData,"createTime",t)},expression:"editUserData.createTime"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"signoutTime",prop:""}},[t("Input",{attrs:{readonly:"",disabled:""},model:{value:e.editUserData.signoutTime,callback:function(t){e.$set(e.editUserData,"signoutTime",t)},expression:"editUserData.signoutTime"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"change Name Left"}},[t("InputNumber",{attrs:{max:5,min:0},model:{value:e.editUserData.attr.changeNameLeft,callback:function(t){e.$set(e.editUserData.attr,"changeNameLeft",t)},expression:"editUserData.attr.changeNameLeft"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.account.form.language")}},[t("Select",{staticClass:"switch-language",attrs:{prefix:"md-globe",placement:"top-end"},model:{value:e.editUserData.attr.language,callback:function(t){e.$set(e.editUserData.attr,"language",t)},expression:"editUserData.attr.language"}},e._l(e.languages,(function(a){return t("Option",{key:a.name,attrs:{value:a.name}},[e._v(" "+e._s(a.label)+" ")])})),1)],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.account.form.showOrigin")}},[t("i-switch",{model:{value:e.editUserData.attr.showOrigin,callback:function(t){e.$set(e.editUserData.attr,"showOrigin",t)},expression:"editUserData.attr.showOrigin"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:e.$t("profile.account.form.allowDM")}},[t("i-switch",{model:{value:e.editUserData.attr.allowDM,callback:function(t){e.$set(e.editUserData.attr,"allowDM",t)},expression:"editUserData.attr.allowDM"}})],1)],1)],1),t("FormItem",{attrs:{label:"privileges",prop:"privileges"}},[t("Row",{attrs:{gutter:10}},[t("Col",{attrs:{span:"24"}},[t("PrivilegesTag",{ref:"privilegesTag",attrs:{data:e.editUserData.privilege}})],1),t("Col",{attrs:{span:"24"}},[t("Row",{attrs:{gutter:10}},[t("Col",[t("Select",{staticStyle:{width:"120px"},model:{value:e.editPrivilegesForm.activeName,callback:function(t){e.$set(e.editPrivilegesForm,"activeName",t)},expression:"editPrivilegesForm.activeName"}},e._l(e.editPrivilegesForm.action,(function(a,r){return t("Option",{key:r,attrs:{value:a}},[e._v(" "+e._s(a)+" ")])})),1)],1),t("Col",[t("Select",{staticStyle:{width:"120px"},model:{value:e.editPrivilegesForm.roleName,callback:function(t){e.$set(e.editPrivilegesForm,"roleName",t)},expression:"editPrivilegesForm.roleName"}},e._l(e.editPrivilegesForm.role,(function(a,r){return t("Option",{key:r,attrs:{value:a}},[e._v(" "+e._s(a)+" ")])})),1)],1),t("Col",[t("Button",{on:{click:e.onEditPrivileges}},[e._v("ok")])],1)],1)],1)],1)],1)],1)],1)],2)},n=[],l=a("e4b4"),o=a("a7d7"),d=a("d78a"),u={data(){return{userValue:"",userListData:[],editUserData:{attr:{language:""},temporaryPrivilege:{},privilege:[]},editPrivilegesForm:{id:"",roleName:"",role:["normal","admin","bot","super","dev","blacklisted","freezed"],activeName:"grant",action:["grant","revoke"]},userModel:!1,languages:o.child}},components:{PrivilegesTag:d["a"]},created(){this.http=l["d"].call(this)},methods:{async onSubmit(){this.load=!0,await this.setUserAttr();for(const e in this.editPrivilegesForm)this.editUserData.id&&e&&this.editPrivilegesForm[e]&&await this.setUser(this.editUserData.id,e,this.editPrivilegesForm[e]);this.load=!1},onEditPrivileges(){if(!this.editPrivilegesForm.roleName||!this.editUserData.privilege)return;const e=this.editUserData.privilege.indexOf(this.editPrivilegesForm.roleName);switch(this.editPrivilegesForm.activeName){case"grant":e>=0?this.$Message.error("already exist"):(this.editUserData.privilege.push(this.editPrivilegesForm.roleName),this.editUserData.temporaryPrivilege[this.editPrivilegesForm.roleName]="grant");break;case"revoke":e?(this.editUserData.privilege.splice(e,1),this.editUserData.temporaryPrivilege[this.editPrivilegesForm.roleName]="revoke"):this.$Message.error("not role");break}this.$refs.privilegesTag&&this.$refs.privilegesTag.update()},onSearchUser(){this.http.get("admin/searchUser",{params:{name:this.userValue}}).then(e=>{const t=e.data;1==t.success&&(this.userListData=t.data)})},onEditUser(e){this.userModel=!0,this.editUserData=Object.assign(this.editUserData,this.userListData[e]),this.$refs.privilegesTag&&this.$refs.privilegesTag.update(this.editUserData.privilege)},async setUser(e,t,a){return await this.http.post("admin/setUser",{data:{data:{id:e,action:t,role:a}}}).then(e=>{const t=e.data;t.success})},async setUserAttr(){return await this.http.post("admin/setUser",{data:{data:{id:this.editPrivilegesForm.id,attr:this.editUserData.attr,username:this.editUserData.username}}}).then(e=>{const t=e.data;t.success})}},computed:{}},c=u,m=a("2877"),p=Object(m["a"])(c,i,n,!1,null,"4df98c78",null),g=p.exports,v=function(){var e=this,t=e._self._c;return t("div",[e._v(" under construction ")])},h=[],U={data(){return{}},created(){this.http=l["d"].call(this)},methods:{setComment(){this.http.post("admin/setComment",{data:{data:{id:"",content:"content",videoLink:""}}}).then(e=>{const t=e.data;t.success})}}},f=U,D=Object(m["a"])(f,v,h,!1,null,null,null),b=D.exports,_=function(){var e=this,t=e._self._c;return t("div",[e._v(" under construction ")])},k=[],w={data(){return{}},created(){this.http=l["d"].call(this)},methods:{}},P=w,I=Object(m["a"])(P,_,k,!1,null,null,null),x=I.exports,F={name:"profile",data(){return{privileges:[],openMuen:["comment","comm","log"],adminMenuValue:"user",adminMuen:[{title:"management",child:[{title:"User",value:"user"},{title:"Comment",value:"comment"}]},{title:"log",icon:"ios-paper",child:[{title:"admin log",value:"admin_log"}]}]}},components:{user:g,comment:b,log:x},created(){this.$route.params.pagename},methods:{onMenuActive(e){this.adminMenuValue=e}},computed:{isLogin(){return Boolean(this.$store.state.user)},isAdmin(){const e=this.$store.state.user,t=!!e&&e.userinfo.privilege.concat("").includes("admin");return Boolean(t)},currentUser(){return this.$store.state.user}}},C=F,$=Object(m["a"])(C,r,s,!1,null,"19e61546",null);t["default"]=$.exports}}]);
//# sourceMappingURL=chunk-2d0b381b.2.6.0.js.map