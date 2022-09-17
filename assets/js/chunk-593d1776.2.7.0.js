(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-593d1776"],{"34c3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("br"),e("Row",[e("Col",{attrs:{xs:{push:1},lg:{push:0}}},[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),e("BreadcrumbItem",[t._v(t._s(this.$route.name==t.bindOriginName?t.$t("bindOrigin.title"):t.$t("signup.title")))])],1)],1)],1),e("br"),e("Row",[e("Col",{attrs:{xs:{span:22,push:1,pull:1},lg:{span:24,push:0,pull:0}}},[e("Card",{attrs:{shadow:""}},[e("Steps",{staticClass:"mobile-hide",attrs:{current:t.stepsIndex}},[e("Step",{attrs:{title:t.$t("signup.steps[0].title"),content:t.$t("signup.steps[0].supplement")}}),e("Step",{attrs:{title:t.$t("signup.steps[1].title"),content:t.$t("signup.steps[1].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[2].title"),content:t.$t("signup.steps[2].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[3].title"),content:t.$t("signup.steps[3].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[4].title"),content:t.$t("signup.steps[4].title")}})],1),e("Divider",{staticClass:"mobile-hide",attrs:{dashed:""}}),e("Card",{attrs:{"dis-hover":"",padding:50}},[e("Form",{ref:"formValidate",attrs:{"label-position":"top",model:t.signup,rules:t.ruleValidate}},[t.backBindOriginMsg?e("Alert",{attrs:{type:"error","show-icon":""}},[e("b",[t._v(t._s(t.$t("signup.failed"))+" :")]),t._v(" "+t._s(t.backBindOriginMsg)+" ")]):t._e(),[e("Alert",{attrs:{type:"info","show-icon":""}},[e("div",{domProps:{innerHTML:t._s(t.$t("signup.eaPrivacy"))}}),t._v(" "+t._s(t.$t("signup.checkAllEmail"))+" ")]),e("br")],0==t.stepsIndex?[e("FormItem",{attrs:{label:t.$t("signup.form.username"),prop:"username"}},[e("Input",{attrs:{maxlength:"40",size:"large",placeholder:t.$t("signup.placeholder.username")},model:{value:t.signup.username,callback:function(e){t.$set(t.signup,"username",e)},expression:"signup.username"}})],1),e("FormItem",{attrs:{label:t.$t("signup.form.password"),prop:"password"}},[e("Input",{attrs:{type:"password",password:"",minlength:"6",size:"large",placeholder:t.$t("signup.placeholder.password")},model:{value:t.signup.password,callback:function(e){t.$set(t.signup,"password",e)},expression:"signup.password"}})],1)]:t._e(),1===t.stepsIndex?[e("FormItem",{attrs:{label:t.$t("signup.form.originEmail"),prop:"originEmail"}},[e("Input",{attrs:{size:"large",placeholder:t.$t("signup.placeholder.originEmail")},model:{value:t.signup.originEmail,callback:function(e){t.$set(t.signup,"originEmail",e)},expression:"signup.originEmail"}})],1),e("FormItem",{attrs:{label:t.$t("signup.form.originName"),prop:"originName"}},[e("Input",{attrs:{size:"large",placeholder:t.$t("signup.placeholder.originName")},model:{value:t.signup.originName,callback:function(e){t.$set(t.signup,"originName",e)},expression:"signup.originName"}})],1)]:t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.stepsIndex,expression:"stepsIndex === 2"}]},[e("FormItem",{attrs:{label:t.$t("captcha.title")}},[e("Input",{attrs:{type:"text",size:"large",maxlength:"4",placeholder:t.$t("captcha.title")},model:{value:t.signup.captcha,callback:function(e){t.$set(t.signup,"captcha",e)},expression:"signup.captcha"}},[e("div",{staticClass:"captcha-input-append",attrs:{slot:"append",alt:t.$t("captcha.get")},slot:"append"},[e("Captcha",{ref:"captcha"})],1)])],1)],1),3===t.stepsIndex?[e("EmailTip",{attrs:{email:t.signup.originEmail},on:{refreshCaptcha:t.$refs.captcha.refreshCaptcha}})]:t._e(),4===t.stepsIndex?[e("div",{attrs:{align:"center"}},[e("Icon",{attrs:{type:"md-checkmark-circle-outline",size:"180",color:"#42b983"}})],1)]:t._e(),e("Row",[e("Col",{attrs:{flex:"auto"}},[t.stepsIndex>=0&&t.stepsIndex<=2?e("Button",{attrs:{disabled:this.$route.name==t.bindOriginName?t.stepsIndex<=1:0==t.stepsIndex,size:"large"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.stepsIndex--}}},[t._v(t._s(t.$t("basic.button.prev"))+" ")]):t._e(),e("Divider",{attrs:{type:"vertical"}}),2!=t.stepsIndex&&t.stepsIndex>=0&&t.stepsIndex<=2?e("Button",{attrs:{size:"large",type:"primary"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.stepsIndex++}}},[t._v(t._s(t.$t("basic.button.next"))+" ")]):t._e()],1),e("Col",{attrs:{flex:"auto",align:"right",type:"flex"}},[2==t.stepsIndex&&t.$route.name!=t.bindOriginName?[e("Button",{attrs:{long:"",disabled:!t.signup.captcha,loading:t.spinShow,size:"large",type:"primary"},on:{click:function(e){return t.handleSignup("formValidate")}}},[t._v(t._s(t.$t("basic.button.submit"))+" ")])]:2==t.stepsIndex&&t.$route.name==t.bindOriginName?[e("Button",{attrs:{long:"",disabled:!t.signup.captcha,loading:t.spinShow,size:"large",type:"primary"},on:{click:t.bindOrigin}},[t._v(t._s(t.$t("basic.button.submit"))+" ")])]:t._e()],2)],1)],2)],1),e("br"),4!=t.stepsIndex||3!=t.stepsIndex?e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",[e("router-link",{attrs:{to:{name:"signin"}}},[t._v(t._s(t.$t("signup.form.submitHint")))])],1),e("Divider",{attrs:{type:"vertical"}}),e("Col",[e("router-link",{attrs:{to:{name:"forgetPassword"}}},[t._v(t._s(t.$t("signup.form.forgetPasswordHint")))])],1)],1):t._e()],1)],1)],1)],1)])},i=[],n=(s("14d9"),s("890e")),r=s("e4b4"),c=s("872c"),o=s("47f2"),p=s("e7f8"),l=s("2ef0"),u=s.n(l),d=new n["a"]({data(){return{stepsIndex:0,ruleValidate:{username:[{required:!0,min:4,max:40,trigger:"blur"}],password:[{required:!0,min:6,max:40,trigger:"blur"}],originEmail:[{required:!0,trigger:"blur"}],originName:[{required:!0,trigger:"blur"}]},signup:{username:"",password:"",originEmail:"",originName:"",captcha:""},backBindOriginMsg:"",spinShow:!1,bindOriginName:"bindOrigin"}},components:{EmailTip:o["a"],Captcha:p["a"]},created(){const{query:t,name:e}=this.$route;this.http=r["d"].call(this),e==this.bindOriginName&&(this.stepsIndex=1,delete this.ruleValidate.username,delete this.ruleValidate.password),this.registerVerify(t.code)},methods:{handleSignup(t){const e=this;this.$refs[t].validate(t=>{let{username:s,password:a,originEmail:i,originName:n,captcha:o}=u.a.each(this.signup,(t,e,s)=>{s[e]=t.trim()});t?s&&!Object(c["c"])(s)&&a&&!Object(c["c"])(a)&&4===o.length?(this.spinShow=!0,r["c"].post(r["b"]["account_signup"],{data:{data:{username:s,password:a,originEmail:i,originName:n,language:r["e"].exchangeLangField(this.$root.$i18n.locale)},encryptCaptcha:this.$refs.captcha.hash,captcha:o}}).then(t=>{const s=t.data;if(1==s.success)return e.stepsIndex+=1,void e.$Message.success(s.code);e.$Message.error(s.code),e.backBindOriginMsg=t.message}).catch(t=>{e.$Message.error(t),e.signup.captcha="",e.signup.originEmail="",e.signup.originName="",e.stepsIndex=0}).finally(()=>{this.spinShow=!1,this.$refs.captcha.refreshCaptcha()})):this.$Message.error("请规范填写"):this.$Message.error("Fail!")})},async registerVerify(t){t&&r["c"].get(r["b"]["account_signupVerify"],{params:{code:t,lang:this.$root.$i18n.locale}}).then(t=>{const e=t.data;1===e.success?(this.stepsIndex=4,setInterval((function(){this.$router.push("/signin")}),3e3)):(this.$Message.error({content:e.code||e.msg,duration:3}),this.signup.password="",this.signup.captcha="",this.$refs["captcha"].refreshCaptcha())})},bindOrigin(){const t=this;let{originEmail:e,originName:s,captcha:a}=this.signup;t.$refs["formValidate"].validate(i=>{i&&(t.spinShow=!0,t.http.post(r["b"]["user_bindOrigin"],{data:{data:{originEmail:e,originName:s,language:r["e"].exchangeLangField(t.$i18n.locale)},encryptCaptcha:this.$refs.captcha.hash,captcha:a}}).then(e=>{const s=e.data;if(1==s.success)return t.stepsIndex++,void t.$Message.success(s.message);if("string"==typeof s.code){switch(s.code){case"bindOrigin.gameNotShowed":t.$Message.error(this.$i18n.t("signup.gameNotShowed"));break;case"bindOrigin.originNotFound":t.$Message.error(this.$i18n.t("signup.playerNotFound"));break;case"bindOrigin.originBindingExist":t.$Message.error(this.$i18n.t("signup.originIdExist"));break;case"bindOrigin.bad":t.$Message.error(this.$i18n.t("signup.failed"));break;default:t.$Message.error(s.code);break}t.backBindOriginMsg=`${s.code} / ${s.message}`,t.$refs.captcha.refreshCaptcha()}}).catch(e=>{t.backBindOriginMsg=this.$i18n.t("signup.failed")}).finally(()=>{t.spinShow=!1}))})},bindOriginVerify(t){t&&this.http.get(r["b"]["user_bindOriginVerify"],{params:{code:t}}).then(t=>{const e=t.data;1===e.success?(this.stepsIndex=3,this.$Message.success(e.message),setInterval(()=>this.$router.back(),3e3)):this.$Message.error(e.code)}).finally(()=>{})}}}),h=d,g=s("2877"),m=Object(g["a"])(h,a,i,!1,null,null,null);e["default"]=m.exports},"47f2":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("Alert",{attrs:{type:"success","show-icon":""}},[t._v(" "+t._s(t.$("signup.checkAllEmail"))+" ")])],1)},i=[],n={name:"EmailTip",props:{email:String}},r=n,c=s("2877"),o=Object(c["a"])(r,a,i,!1,null,"32964e9f",null);e["a"]=o.exports},aca2:function(t,e,s){},e7f8:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"captcha-view",style:`cursor: ${t.captchaTime.count<=0?"pointer":"not-allowed"};height: ${t.height}`,on:{click:t.refreshCaptcha}},[t.content?e("div",{class:""+(t.captchaTime.count<=0?"disable":""),domProps:{innerHTML:t._s(t.content)}}):e("span",{staticClass:"tip"},[t.disable?e("div",{staticStyle:{"min-width":"80px"}},[e("Icon",{attrs:{type:"md-close",size:"20"}})],1):[t._v(" "+t._s(t.$t("captcha.get"))+" ")]],2),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.content&&t.captchaTime.count<=0,expression:"content && captchaTime.count <= 0"}],staticClass:"captcha-view-icon"},[t.disable?e("Icon",{attrs:{type:"md-close",size:"20"}}):e("Icon",{attrs:{type:"md-refresh",size:"20"}})],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.captchaTime.count>0,expression:"captchaTime.count > 0"}],staticClass:"count"},[t._v(t._s(t.captchaTime.count)+"s")])],1)},i=[],n=s("e4b4"),r={name:"Captcha",props:{id:{type:String,default:"0"},disable:{type:Boolean,default:!1},seconds:{type:Number,default:60},height:{type:String,default:"40px"}},data(){return{postload:!1,hash:"",content:"",capthcaHash:{},captchaTime:{fun:null,count:0,lock:!1}}},created(){let t=n["i"].session().get("captcha");t?this.capthcaHash=t.data:n["i"].session().set("captcha",{[`${this.id}_${this.$route.name}`]:this.seconds})},destroyed(){clearInterval(this.captchaTime.fun),this.captchaTime.fun=null},methods:{async refreshCaptcha(){let t=await n["i"].session().get("captcha"),e=this;t.code<=0&&(t={data:{value:this.seconds}}),this.disable||this.postload||this.captchaTime.count>0||(this.postload=!0,n["c"].get(n["b"]["captcha"],{params:{t:Math.random()}}).then(s=>{if(1===s.data.success)return e.capthcaHash=Object.assign({[e.$route.name]:0}),this.hash=s.data.data["hash"],this.content=s.data.data["content"],Object.keys(t.data.value).indexOf(this.$route.name)>=0&&(this.captchaTime.count=t.data.value[this.$route.name]),void this.capthcaTimeout(this.captchaTime.count||this.seconds);this.$Message.error(s.data.code)}).finally(t=>{setTimeout((function(){e.postload=!1}),800)}))},capthcaTimeout(t){const e=this;let s;e.captchaTime.lock||(e.captchaTime.count=t,s=setInterval((function(){if(e.captchaTime.count<=0)return clearInterval(s),void(e.captchaTime.lock=!1);e.captchaTime.count-=1,e.capthcaHash=Object.assign({[`${e.id}_${e.$route.name}`]:e.captchaTime.count}),n["i"].session().set("captcha",e.capthcaHash)}),1e3),e.captchaTime.lock=!0)}},computed:{isCaptcha(){return this.hash&&this.content}}},c=r,o=(s("f31d"),s("2877")),p=Object(o["a"])(c,a,i,!1,null,null,null);e["a"]=p.exports},f31d:function(t,e,s){"use strict";s("aca2")}}]);
//# sourceMappingURL=chunk-593d1776.2.7.0.js.map