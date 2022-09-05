(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8a66fbe"],{"34c3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("Row",[e("Col",{attrs:{xs:{span:22,push:1,pull:1},lg:{span:24,push:0,pull:0}}},[e("Card",{attrs:{shadow:""}},[e("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(this.$route.name==t.bindOriginName?t.$t("bindOrigin.title"):t.$t("signup.title")))]),e("Steps",{staticClass:"mobile-hide",attrs:{current:t.stepsIndex}},[e("Step",{attrs:{title:t.$t("signup.steps[0].title"),content:t.$t("signup.steps[0].supplement")}}),e("Step",{attrs:{title:t.$t("signup.steps[1].title"),content:t.$t("signup.steps[1].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[2].title"),content:t.$t("signup.steps[2].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[3].title"),content:t.$t("signup.steps[3].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[4].title"),content:t.$t("signup.steps[4].title")}})],1),e("Divider",{staticClass:"mobile-hide"}),e("Form",{ref:"formValidate",staticStyle:{position:"relative"},attrs:{"label-position":"top",model:t.signup,rules:t.ruleValidate}},[0==t.stepsIndex?[e("FormItem",{attrs:{label:t.$t("signup.form.username"),prop:"username"}},[e("Input",{attrs:{maxlength:"40",size:"large",placeholder:t.$t("signup.placeholder.username")},model:{value:t.signup.username,callback:function(e){t.$set(t.signup,"username",e)},expression:"signup.username"}})],1),e("FormItem",{attrs:{label:t.$t("signup.form.password"),prop:"password"}},[e("Input",{attrs:{type:"password",password:"",minlength:"6",size:"large",placeholder:t.$t("signup.placeholder.password")},model:{value:t.signup.password,callback:function(e){t.$set(t.signup,"password",e)},expression:"signup.password"}})],1)]:t._e(),1===t.stepsIndex?[e("FormItem",{attrs:{label:t.$t("signup.form.originEmail"),prop:"originEmail"}},[e("Input",{attrs:{size:"large",placeholder:t.$t("signup.placeholder.originEmail")},model:{value:t.signup.originEmail,callback:function(e){t.$set(t.signup,"originEmail",e)},expression:"signup.originEmail"}})],1),e("FormItem",{attrs:{label:t.$t("signup.form.originName"),prop:"originName"}},[e("Input",{attrs:{size:"large",placeholder:t.$t("signup.placeholder.originName")},model:{value:t.signup.originName,callback:function(e){t.$set(t.signup,"originName",e)},expression:"signup.originName"}})],1)]:t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.stepsIndex,expression:"stepsIndex === 2"}]},[e("FormItem",{attrs:{label:t.$t("captcha.title")}},[e("Input",{attrs:{type:"text",size:"large",maxlength:"4",placeholder:t.$t("captcha.title")},model:{value:t.signup.captcha,callback:function(e){t.$set(t.signup,"captcha",e)},expression:"signup.captcha"}},[e("div",{staticClass:"captcha-input-append",attrs:{slot:"append",alt:t.$t("captcha.get")},slot:"append"},[e("Captcha",{ref:"captcha"})],1)])],1)],1),3===t.stepsIndex?[e("EmailTip",{attrs:{email:t.signup.originEmail},on:{refreshCaptcha:t.refreshCaptcha}})]:t._e(),4===t.stepsIndex?[e("div",{attrs:{align:"center"}},[e("Icon",{attrs:{type:"md-checkmark-circle-outline",size:"180",color:"#42b983"}})],1)]:t._e(),e("Row",[e("Col",{attrs:{flex:"auto"}},[t.stepsIndex>=0&&t.stepsIndex<=2?e("Button",{attrs:{disabled:0===t.stepsIndex||this.$route.name==t.bindOriginName,size:"large"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.stepsIndex--}}},[t._v(t._s(t.$t("basic.button.prev"))+" ")]):t._e(),e("Divider",{attrs:{type:"vertical"}}),2!=t.stepsIndex&&t.stepsIndex>=0&&t.stepsIndex<=2?e("Button",{attrs:{size:"large",type:"primary"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.stepsIndex++}}},[t._v(t._s(t.$t("basic.button.next"))+" ")]):t._e()],1),e("Col",{attrs:{flex:"auto",align:"right",type:"flex"}},[2==t.stepsIndex?e("Button",{attrs:{long:"",disabled:!t.signup.captcha,loading:t.spinShow,size:"large",type:"primary"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSignup("formValidate")}}},[t._v(t._s(t.$t("basic.button.submit"))+" ")]):t._e()],1)],1),4!=t.stepsIndex||3!=t.stepsIndex?e("Divider",[e("router-link",{attrs:{to:{name:"signin"}}},[t._v(t._s(t.$t("signup.form.submitHint")))]),e("Divider",{attrs:{type:"vertical"}}),e("router-link",{attrs:{to:{name:"forgetPassword"}}},[t._v(t._s(t.$t("signup.form.forgetPasswordHint")))])],1):t._e()],2)],1)],1)],1)],1),e("br")])},i=[],n=s("890e"),r=s("e4b4"),c=s("872c"),p=s("47f2"),o=s("e7f8"),l=s("2ef0"),u=s.n(l),h=new n["a"]({data(){return{stepsIndex:0,ruleValidate:{username:[{required:!0,min:4,max:40,trigger:"blur"}],password:[{required:!0,min:6,max:40,trigger:"blur"}],originEmail:[{required:!0,trigger:"blur"}],originName:[{required:!0,trigger:"blur"}]},signup:{username:"",password:"",originEmail:"",originName:"",captcha:""},spinShow:!1,bindOriginName:"bindOrigin"}},components:{EmailTip:p["a"],Captcha:o["a"]},created(){const{query:t,name:e}=this.$route;this.http=r["c"].call(this),e==this.bindOriginName&&(this.stepsIndex=1,delete this.ruleValidate.username,delete this.ruleValidate.password),this.registerVerify(t.code)},methods:{handleSignup(t){const e=this;this.$refs[t].validate(t=>{let{username:s,password:a,originEmail:i,originName:n,captcha:p}=u.a.each(this.signup,(t,e,s)=>{s[e]=t.trim()});t?this.$route.name!=this.bindOriginName?s&&!Object(c["c"])(s)&&a&&!Object(c["c"])(a)&&4===p.length?(this.spinShow=!0,r["b"].post(r["a"]["account_signup"],{data:{data:{username:s,password:a,originEmail:i,originName:n,language:this.$root.$i18n.locale},encryptCaptcha:this.$refs.captcha.hash,captcha:p}}).then(t=>{const s=t.data;if(1===s.success)return e.stepsIndex+=1,void this.$Message.success(s.message)}).catch(t=>{this.$Message.error(t.toString()),e.signup.captcha="",e.signup.originEmail="",e.signup.originName="",e.stepsIndex=0}).finally(()=>{this.spinShow=!1})):this.$Message.error("请规范填写"):this.bindOrigin({originEmail:i,originName:n,captcha:p}):this.$Message.error("Fail!")})},registerVerify(t){t&&r["b"].get(r["a"]["account_signupVerify"],{params:{code:t,lang:this.$root.$i18n.locale}}).then(t=>{const e=t.data;1===e.success?(this.stepsIndex=4,setInterval((function(){this.$router.push("/signin")}),3e3)):(this.$Message.error(e.code||e.msg),this.signup.password="",this.signup.captcha="",this.refreshCaptcha())})},bindOrigin({originEmail:t,originName:e,captcha:s}){this.spinShow=!0,this.http.post(r["a"]["user_bindOrigin"],{data:{data:{originEmail:t,originName:e,language:this.$root.$i18n.locale},encryptCaptcha:this.captchaUrl.hash,captcha:s}}).then(t=>{const e=t.data;1===e.success?(this.stepsIndex++,this.$Message.success(e.message)):this.$Message.error(e.code)}).finally(()=>{this.spinShow=!1})},bindOriginVerify(t){t&&this.http.get(r["a"]["user_bindOriginVerify"],{params:{code:t}}).then(t=>{const e=t.data;1===e.success?(this.stepsIndex=3,this.$Message.success(e.message),setInterval(()=>this.$router.back(),3e3)):this.$Message.error(e.code)}).finally(()=>{})}}}),d=h,g=s("2877"),m=Object(g["a"])(d,a,i,!1,null,null,null);e["default"]=m.exports},"47f2":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("Alert",{attrs:{type:"success","show-icon":""}},[t._v(" 注意 "),e("template",{slot:"desc"},[e("p",[t._v(' 我们向您的邮箱发送了一封验证邮件，邮箱是"'+t._s(t.email||"")+'", 请留意标题"BFBAN"的邮件. ')]),e("br"),e("b",[t._v("没有收到此邮件?")]),e("p",[t._v("尝试在您的邮箱面板内的垃圾桶查阅，这可能被认为是垃圾广告.")]),e("p",[t._v("如果无法接受邮件，请"),e("a",{on:{click:function(e){t.refreshCaptcha(),t.stepsIndex=0}}},[t._v("重新注册")]),t._v(".")])])],2)],1)},i=[],n={name:"EmailTip",props:{email:String},methods:{refreshCaptcha(){this.$emit("refreshCaptcha")}}},r=n,c=s("2877"),p=Object(c["a"])(r,a,i,!1,null,"3e190c8d",null);e["a"]=p.exports},"4cf6":function(t,e,s){"use strict";s("f4e1")},"890e":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var a=s("ade3"),i=(s("9224"),s("0efc"));class n extends i["a"]{constructor(t){return super(),Object(a["a"])(this,"BFBANLOG",window.BFBANLOG),t}}},e7f8:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"captcha-view",style:`cursor: ${t.captchaTime.count<=0?"pointer":"not-allowed"};`,on:{click:t.refreshCaptcha}},[t.content?e("div",{style:t.captchaTime.count<=0?"opacity: .3":"",domProps:{innerHTML:t._s(t.content)}}):e("span",{staticClass:"tip"},[t._v(" "+t._s(t.$t("captcha.get"))+" ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.captchaTime.lock,expression:"captchaTime.lock"}],staticClass:"count"},[t._v(t._s(t.captchaTime.count)+"s")])])},i=[],n=s("e4b4"),r={name:"Captcha",data(){return{hash:"",content:"",capthcaHash:{},captchaTime:{fun:null,count:0,lock:!1}}},created(){let t=n["e"].get("captcha");t?this.capthcaHash=t.data:n["e"].set("captcha",{[this.$route.name]:30})},destroyed(){clearInterval(this.captchaTime.fun),this.captchaTime.fun=null},methods:{async refreshCaptcha(){let t=await n["e"].get("captcha"),e=this;t.code<=0&&(t={data:{value:30}}),this.captchaTime.count>0||n["b"].get(n["a"]["captcha"],{params:{t:Math.random()}}).then(t=>{1===t.data.success&&(e.capthcaHash=Object.assign({[e.$route.name]:0}),this.hash=t.data.data["hash"],this.content=t.data.data["content"])}).finally(e=>{Object.keys(t.data.value).indexOf(this.$route.name)>=0&&(this.captchaTime.count=t.data.value[this.$route.name]),this.capthcaTimeout(this.captchaTime.count||30)})},capthcaTimeout(t){const e=this;let s;e.captchaTime.lock||(e.captchaTime.count=t,s=setInterval((function(){if(e.captchaTime.count<=0)return clearInterval(s),void(e.captchaTime.lock=!1);e.captchaTime.count-=1,e.capthcaHash=Object.assign({[e.$route.name]:e.captchaTime.count}),n["e"].set("captcha",e.capthcaHash)}),1e3),e.captchaTime.lock=!0)}},computed:{isCaptcha(){return this.hash&&this.content}}},c=r,p=(s("4cf6"),s("2877")),o=Object(p["a"])(c,a,i,!1,null,"0058b296",null);e["a"]=o.exports},f4e1:function(t,e,s){}}]);
//# sourceMappingURL=chunk-f8a66fbe.2.0.2.js.map