(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-233eb0d5"],{"0366":function(t,e,r){"use strict";var a=r("4625"),n=r("59ed"),i=r("40d5"),o=a(a.bind);t.exports=function(t,e){return n(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},"11c1":function(t,e,r){var a=r("c437"),n=r("c64e"),i=n;i.v1=a,i.v4=n,t.exports=i},"182d":function(t,e,r){"use strict";var a=r("f8cd"),n=RangeError;t.exports=function(t,e){var r=a(t);if(r%e)throw new n("Wrong offset");return r}},"19aa":function(t,e,r){"use strict";var a=r("3a9b"),n=TypeError;t.exports=function(t,e){if(a(e,t))return t;throw new n("Incorrect invocation")}},"1d02":function(t,e,r){"use strict";var a=r("ebb5"),n=r("a258").findLastIndex,i=a.aTypedArray,o=a.exportTypedArrayMethod;o("findLastIndex",(function(t){return n(i(this),t,arguments.length>1?arguments[1]:void 0)}))},2366:function(t,e){for(var r=[],a=0;a<256;++a)r[a]=(a+256).toString(16).substr(1);function n(t,e){var a=e||0,n=r;return[n[t[a++]],n[t[a++]],n[t[a++]],n[t[a++]],"-",n[t[a++]],n[t[a++]],"-",n[t[a++]],n[t[a++]],"-",n[t[a++]],n[t[a++]],"-",n[t[a++]],n[t[a++]],n[t[a++]],n[t[a++]],n[t[a++]],n[t[a++]]].join("")}t.exports=n},2834:function(t,e,r){"use strict";var a=r("ebb5"),n=r("e330"),i=r("59ed"),o=r("dfb9"),s=a.aTypedArray,c=a.getTypedArrayConstructor,u=a.exportTypedArrayMethod,d=n(a.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&i(t);var e=s(this),r=o(c(e),e);return d(r,t)}))},"3c5d":function(t,e,r){"use strict";var a=r("da84"),n=r("c65b"),i=r("ebb5"),o=r("07fa"),s=r("182d"),c=r("7b0b"),u=r("d039"),d=a.RangeError,p=a.Int8Array,l=p&&p.prototype,f=l&&l.set,y=i.aTypedArray,v=i.exportTypedArrayMethod,h=!u((function(){var t=new Uint8ClampedArray(2);return n(f,t,{length:1,0:3},1),3!==t[1]})),m=h&&i.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new p(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));v("set",(function(t){y(this);var e=s(arguments.length>1?arguments[1]:void 0,1),r=c(t);if(h)return n(f,this,r,e);var a=this.length,i=o(r),u=0;if(i+e>a)throw new d("Wrong length");while(u<i)this[e+u]=r[u++]}),!h||m)},4625:function(t,e,r){"use strict";var a=r("c6b6"),n=r("e330");t.exports=function(t){if("Function"===a(t))return n(t)}},"4b11":function(t,e,r){"use strict";t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},"4ea1":function(t,e,r){"use strict";var a=r("d429"),n=r("ebb5"),i=r("bcbf"),o=r("5926"),s=r("f495"),c=n.aTypedArray,u=n.getTypedArrayConstructor,d=n.exportTypedArrayMethod,p=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();d("with",{with:function(t,e){var r=c(this),n=o(t),d=i(r)?s(e):+e;return a(r,u(r),n,d)}}["with"],!p)},"6ce5":function(t,e,r){"use strict";var a=r("df7e"),n=r("ebb5"),i=n.aTypedArray,o=n.exportTypedArrayMethod,s=n.getTypedArrayConstructor;o("toReversed",(function(){return a(i(this),s(this))}))},"907a":function(t,e,r){"use strict";var a=r("ebb5"),n=r("07fa"),i=r("5926"),o=a.aTypedArray,s=a.exportTypedArrayMethod;s("at",(function(t){var e=o(this),r=n(e),a=i(t),s=a>=0?a:r+a;return s<0||s>=r?void 0:e[s]}))},"90a7":function(t,e,r){"use strict";r("f415")},"986a":function(t,e,r){"use strict";var a=r("ebb5"),n=r("a258").findLast,i=a.aTypedArray,o=a.exportTypedArrayMethod;o("findLast",(function(t){return n(i(this),t,arguments.length>1?arguments[1]:void 0)}))},a258:function(t,e,r){"use strict";var a=r("0366"),n=r("44ad"),i=r("7b0b"),o=r("07fa"),s=function(t){var e=1===t;return function(r,s,c){var u,d,p=i(r),l=n(p),f=a(s,c),y=o(l);while(y-- >0)if(u=l[y],d=f(u,y,p),d)switch(t){case 0:return u;case 1:return y}return e?-1:void 0}};t.exports={findLast:s(0),findLastIndex:s(1)}},b2d4:function(t,e,r){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[t._t("default"),e("Modal",{attrs:{width:"60%"},model:{value:t.updataPlane,callback:function(e){t.updataPlane=e},expression:"updataPlane"}},[e("br"),-5!=t.currentIndex?e("Steps",{attrs:{current:t.currentIndex}},["url"==t.currentType?[e("Step",{attrs:{title:t.$t("textarea.steps.url.0")}}),e("Step",{attrs:{title:t.$t("textarea.steps.url.1")}})]:"upload"==t.currentType?[e("Step",{attrs:{title:t.$t("textarea.steps.upload.0")}}),e("Step",{attrs:{title:t.$t("textarea.steps.upload.1")}}),e("Step",{attrs:{title:t.$t("textarea.steps.upload.2")}})]:"media"==t.currentType?[e("Step",{attrs:{title:t.$t("textarea.steps.upload.0")}}),e("Step",{attrs:{title:t.$t("textarea.steps.upload.1")}})]:t._e()],2):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.currentIndex,expression:"currentIndex == 0"}]},[e("Select",{staticStyle:{margin:"40px 0 0 0"},model:{value:t.currentType,callback:function(e){t.currentType=e},expression:"currentType"}},t._l(t.uploadWidgetTypeArray,(function(r,a){return e("Option",{key:a,attrs:{value:r}},[t._v(" "+t._s(t.$t("textarea.type."+r))+" ")])})),1),"url"==t.currentType?[e("div",{staticClass:"see-mode"},[e("Input",{attrs:{placeholder:"http(s)://"},model:{value:t.insertValue,callback:function(e){t.insertValue=e},expression:"insertValue"}})],1)]:t._e(),"upload"==t.currentType?[e("Upload",{staticClass:"upload-mode",attrs:{action:"",accept:"image/*",multiple:"",type:"drag",headers:t.headers,data:t.extraData,"max-size":t.imgMaxSize,"with-credentials":t.withCredentials,"show-upload-list":t.showUploadList,"before-upload":t.handleBeforeSelectFile}},[e("div",{staticClass:"upload-mode-content"},[e("Icon",{attrs:{type:"ios-cloud-upload",size:"52"}})],1)]),e("Alert",{attrs:{type:"warning"}},[t._v(" "+t._s(t.$t("report.info.uploadPic2"))+" "),e("a",{attrs:{target:"_blank",href:"https://sm.ms"}},[t._v("https://sm.ms")]),t._v("，"+t._s(t.$t("report.info.uploadPic3"))+" ")]),e("span",{staticClass:"hint"},[t._v(t._s(t.$t("report.info.uploadPic1")))]),e("span",{staticClass:"hint"},[t._v(t._s(t.$t("report.info.uploadPic4")))])]:t._e(),"media"==t.currentType?[e("div",{staticClass:"media-card"},[t.media.data.length>0?[e("Form",{attrs:{"label-position":"top"}},t._l(t.media.data,(function(r,a){return e("Card",{key:a,staticStyle:{"margin-bottom":"10px"},attrs:{"dis-hover":""}},[e("Row",{attrs:{gutter:30}},[e("Col",{attrs:{flex:"1"}},[e("Row",[e("Col",{attrs:{span:"12"}},[t._v(" "+t._s(r.filename)+" ")]),e("Col",{attrs:{span:"6"}},[t._v(" "+t._s(r.size)+" ")]),e("Col",{attrs:{span:"6"}},[e("Time",{attrs:{time:r.createTime}})],1)],1)],1),e("Col",[e("Button",{attrs:{href:"javascript:void(0)",loading:r.load},on:{click:function(e){return t.selectMediaFile(a)}}},[t._v(" "+t._s(t.$t("basic.button.insert"))+" ")])],1)],1)],1)})),1)]:e("Empty"),e("Spin",{directives:[{name:"show",rawName:"v-show",value:t.media.load,expression:"media.load"}],attrs:{size:"large",fix:""}})],2)]:t._e()],2),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.currentIndex,expression:"currentIndex == 1"}]},[t.currentFileType.indexOf("image")>=0?[t.ignore?e("div",{staticClass:"see-mode"},[e("img",{attrs:{src:t.vueCropper.img}})]):e("vue-Cropper",{ref:"cropper",staticClass:"cropper-mode",attrs:{centerBox:!0,mode:"cover",img:t.vueCropper.img,outputSize:t.vueCropper.size,outputType:t.vueCropper.outputType,autoCrop:t.vueCropper.autoCrop}})]:e("div",[e("div",{staticClass:"see-mode"},[t._v(" 不支持编辑 ")])])],2),2==t.currentIndex?e("div",[t.currentFileType.indexOf("image")>=0?e("div",{staticClass:"see-mode"},[e("img",{attrs:{src:t.insertValue,height:"100%"}})]):e("div",{staticClass:"see-mode"},[e("div",[t._v(t._s(t.currentFileType))]),e("p",[e("a",{attrs:{href:t.insertValue,target:"_blank"}},[t._v(t._s(t.insertValue))])])])]):t._e(),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Row",{attrs:{gutter:20,type:"flex",align:"middle"}},[e("Col",[e("Button",{on:{click:t.onPanelChange}},[t._v(t._s(t.$t("basic.button.cancel")))])],1),0==t.currentIndex?[e("Col",{attrs:{flex:"1"}},["url"==t.currentType?e("Button",{attrs:{type:"primary",disabled:!t.insertValue},on:{click:function(e){t.currentIndex=2,t.currentFileType="image"}}},[t._v(t._s(t.$t("basic.button.next"))+" ")]):t._e()],1)]:t._e(),1==t.currentIndex?[e("Col",{attrs:{flex:"1"}},[e("Checkbox",{model:{value:t.ignore,callback:function(e){t.ignore=e},expression:"ignore"}},[t._v(t._s(t.$t("textarea.originalImage")))])],1),e("Col",[e("Button",{on:{click:function(e){t.currentIndex-=1}}},[t._v(t._s(t.$t("basic.button.prev")))]),e("Button",{attrs:{type:"primary",loading:t.updataIcon,disabled:t.updataIcon},on:{click:t.onBeforeUpload}},[t._v(t._s(t.$t("basic.button.next"))+" ")])],1)]:2==t.currentIndex||-5==t.currentIndex?e("Col",{attrs:{flex:"1"}},[e("Button",{on:{click:function(e){t.currentIndex=0}}},[t._v(t._s(t.$t("basic.button.reset")))]),e("Button",{attrs:{type:"primary",loading:t.insertLoad,disabled:!t.insertValue},on:{click:t.onFinish}},[t._v(t._s(t.$t("basic.button.commit"))+" ")])],1):t._e()],2)],1)],1)],2)},n=[],i=(r("b7ef"),r("907a"),r("986a"),r("1d02"),r("3c5d"),r("6ce5"),r("2834"),r("4ea1"),r("e4b4")),o=r("02bc"),s=r("7e79"),c=r("11c1"),u=r.n(c),d={name:"UploadWidget",props:{uploadWidgetTypeArray:{type:Array,default(){return["url","upload","media"]}}},components:{Empty:o["a"],VueCropper:s["VueCropper"]},watch:{currentType:{handler(t,e){"media"==t&&this.getMediaList()},deep:!0}},data(){return{currentIndex:0,currentFileType:"",currentType:"url",insertValue:"",updataPlane:!1,updataIcon:!1,headers:{"x-csrf-token":""},imgMaxSize:2014,vodMaxSize:30720,extraData:{token:""},withCredentials:!1,showUploadList:!1,vueCropper:{img:"",size:.6,outputType:"jpg",autoCrop:!0},insertLoad:!1,ignore:!1,media:{load:!1,detail:{},data:[],limit:40,skip:1}}},created(){this.http=i["d"].call(this),this.currentType=this.uploadWidgetTypeArray[0]},methods:{onFinish(){this.$emit("finish",this.insertValue),this.onPanelChange()},async onBeforeUpload(){const t=this;let e;this.ignore?(e=await t.dataURLtoFile(this.vueCropper.img,`${this.filename(this.vueCropper.name)}.${this.vueCropper.outputType}`),await t.onAfterUpload(e)):this.$refs.cropper.getCropBlob(async r=>{r.lastModifiedDate=new Date,r.name=`${this.filename(r.name)}.${this.vueCropper.outputType}`,this.updataIcon=!0,e=new File([r],t.currentFileType,{type:r.type}),await t.onAfterUpload(e)})},async onAfterUpload(t){const e=this;this.updataIcon=!0,await i["l"].on(t).then(t=>{t&&t.code>=1&&(this.currentIndex+=1,this.insertValue=t.url)}).catch(t=>{e.currentIndex=0,e.$Message.error(t.message)}).finally(()=>{e.updataIcon=!1})},async handleBeforeSelectFile(t){const e=this;if(t.length<=1)return;let r=new FileReader;return r.readAsDataURL(t),this.currentFileType=t.type,r.addEventListener("loadend",(function(){e.vueCropper.img=r.result,e.vueCropper.name=t.name,e.currentIndex+=1})),!1},async dataURLtoFile(t,e){var r=t.split(","),a=r[0].match(/:(.*?);/)[1],n=atob(r[1]),i=n.length,o=new Uint8Array(i);while(i--)o[i]=n.charCodeAt(i);return new File([o],e,{type:a})},filename(t){return u.a.v4({name:t,generationTime:(new Date).getTime()})},getMediaList(){this.http.get(i["b"]["service_myFiles"],{params:{limit:this.media.limit,skip:this.media.skip-1}}).then(t=>{const e=t.data;1===e.success&&(this.media.data=e.data)})},async queryMediaDetail(t){this.media.load=!0;let e=await i["c"].get(i["b"]["service_file"],{params:{filename:t,explain:!0}});return this.currentFileType=e.data.data.mimeType,this.media.load=!1,e},async selectMediaFile(t){if(this.media.data[t].load)return;this.media.data[t].load=!0;let e=await this.queryMediaDetail(this.media.data[t].filename);if(1==e.data.success)return this.insertValue="https://bfban.gametools.network/api/service/file?filename="+this.media.data[t].filename,this.currentIndex=2,void(this.media.data[t].load=!1);this.media.data[t].load=!1,this.currentIndex=0,this.$Message.error(e.data.code)},onReset(){this.currentIndex=0,this.insertValue="",this.currentFileType="",this.uploadWidgetTypeArray.length>0&&(this.currentFileType=this.uploadWidgetTypeArray[0])},onPanelChange(){this.updataPlane=!this.updataPlane,this.onReset(),this.$emit("change",this.updataPlane)}}},p=d,l=(r("90a7"),r("2877")),f=Object(l["a"])(p,a,n,!1,null,"74e07b20",null);e["a"]=f.exports},b7ef:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),i=r("d066"),o=r("5c6c"),s=r("9bf2").f,c=r("1a2d"),u=r("19aa"),d=r("7156"),p=r("e391"),l=r("cf98"),f=r("0d26"),y=r("83ab"),v=r("c430"),h="DOMException",m=i("Error"),_=i(h),T=function(){u(this,g);var t=arguments.length,e=p(t<1?void 0:arguments[0]),r=p(t<2?void 0:arguments[1],"Error"),a=new _(e,r),n=new m(e);return n.name=h,s(a,"stack",o(1,f(n.stack,1))),d(a,this,T),a},g=T.prototype=_.prototype,A="stack"in new m(h),b="stack"in new _(1,2),E=_&&y&&Object.getOwnPropertyDescriptor(n,h),x=!!E&&!(E.writable&&E.configurable),w=A&&!x&&!b;a({global:!0,constructor:!0,forced:v||w},{DOMException:w?T:_});var R=i(h),I=R.prototype;if(I.constructor!==R)for(var C in v||s(I,"constructor",o(1,R)),l)if(c(l,C)){var S=l[C],M=S.s;c(R,M)||s(R,M,o(6,S.c))}},bcbf:function(t,e,r){"use strict";var a=r("f5df");t.exports=function(t){var e=a(t);return"BigInt64Array"===e||"BigUint64Array"===e}},c437:function(t,e,r){var a,n,i=r("e1f4"),o=r("2366"),s=0,c=0;function u(t,e,r){var u=e&&r||0,d=e||[];t=t||{};var p=t.node||a,l=void 0!==t.clockseq?t.clockseq:n;if(null==p||null==l){var f=i();null==p&&(p=a=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==l&&(l=n=16383&(f[6]<<8|f[7]))}var y=void 0!==t.msecs?t.msecs:(new Date).getTime(),v=void 0!==t.nsecs?t.nsecs:c+1,h=y-s+(v-c)/1e4;if(h<0&&void 0===t.clockseq&&(l=l+1&16383),(h<0||y>s)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=y,c=v,n=l,y+=122192928e5;var m=(1e4*(268435455&y)+v)%4294967296;d[u++]=m>>>24&255,d[u++]=m>>>16&255,d[u++]=m>>>8&255,d[u++]=255&m;var _=y/4294967296*1e4&268435455;d[u++]=_>>>8&255,d[u++]=255&_,d[u++]=_>>>24&15|16,d[u++]=_>>>16&255,d[u++]=l>>>8|128,d[u++]=255&l;for(var T=0;T<6;++T)d[u+T]=p[T];return e||o(d)}t.exports=u},c64e:function(t,e,r){var a=r("e1f4"),n=r("2366");function i(t,e,r){var i=e&&r||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null),t=t||{};var o=t.random||(t.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var s=0;s<16;++s)e[i+s]=o[s];return e||n(o)}t.exports=i},cf98:function(t,e,r){"use strict";t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},d429:function(t,e,r){"use strict";var a=r("07fa"),n=r("5926"),i=RangeError;t.exports=function(t,e,r,o){var s=a(t),c=n(r),u=c<0?s+c:c;if(u>=s||u<0)throw new i("Incorrect index");for(var d=new e(s),p=0;p<s;p++)d[p]=p===u?o:t[p];return d}},df7e:function(t,e,r){"use strict";var a=r("07fa");t.exports=function(t,e){for(var r=a(t),n=new e(r),i=0;i<r;i++)n[i]=t[r-i-1];return n}},dfb9:function(t,e,r){"use strict";var a=r("07fa");t.exports=function(t,e){var r=0,n=a(e),i=new t(n);while(n>r)i[r]=e[r++];return i}},e163:function(t,e,r){"use strict";var a=r("1a2d"),n=r("1626"),i=r("7b0b"),o=r("f772"),s=r("e177"),c=o("IE_PROTO"),u=Object,d=u.prototype;t.exports=s?u.getPrototypeOf:function(t){var e=i(t);if(a(e,c))return e[c];var r=e.constructor;return n(r)&&e instanceof r?r.prototype:e instanceof u?d:null}},e177:function(t,e,r){"use strict";var a=r("d039");t.exports=!a((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e1f4:function(t,e){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var a=new Uint8Array(16);t.exports=function(){return r(a),a}}else{var n=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),n[e]=t>>>((3&e)<<3)&255;return n}}},ebb5:function(t,e,r){"use strict";var a,n,i,o=r("4b11"),s=r("83ab"),c=r("da84"),u=r("1626"),d=r("861d"),p=r("1a2d"),l=r("f5df"),f=r("0d51"),y=r("9112"),v=r("cb2d"),h=r("edd0"),m=r("3a9b"),_=r("e163"),T=r("d2bb"),g=r("b622"),A=r("90e3"),b=r("69f3"),E=b.enforce,x=b.get,w=c.Int8Array,R=w&&w.prototype,I=c.Uint8ClampedArray,C=I&&I.prototype,S=w&&_(w),M=R&&_(R),D=Object.prototype,O=c.TypeError,U=g("toStringTag"),F=A("TYPED_ARRAY_TAG"),N="TypedArrayConstructor",k=o&&!!T&&"Opera"!==l(c.opera),V=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},$={BigInt64Array:8,BigUint64Array:8},P=function(t){if(!d(t))return!1;var e=l(t);return"DataView"===e||p(L,e)||p($,e)},B=function(t){var e=_(t);if(d(e)){var r=x(e);return r&&p(r,N)?r[N]:B(e)}},W=function(t){if(!d(t))return!1;var e=l(t);return p(L,e)||p($,e)},z=function(t){if(W(t))return t;throw new O("Target is not a typed array")},Y=function(t){if(u(t)&&(!T||m(S,t)))return t;throw new O(f(t)+" is not a typed array constructor")},j=function(t,e,r,a){if(s){if(r)for(var n in L){var i=c[n];if(i&&p(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(u){}}}M[t]&&!r||v(M,t,r?e:k&&R[t]||e,a)}},q=function(t,e,r){var a,n;if(s){if(T){if(r)for(a in L)if(n=c[a],n&&p(n,t))try{delete n[t]}catch(i){}if(S[t]&&!r)return;try{return v(S,t,r?e:k&&S[t]||e)}catch(i){}}for(a in L)n=c[a],!n||n[t]&&!r||v(n,t,e)}};for(a in L)n=c[a],i=n&&n.prototype,i?E(i)[N]=n:k=!1;for(a in $)n=c[a],i=n&&n.prototype,i&&(E(i)[N]=n);if((!k||!u(S)||S===Function.prototype)&&(S=function(){throw new O("Incorrect invocation")},k))for(a in L)c[a]&&T(c[a],S);if((!k||!M||M===D)&&(M=S.prototype,k))for(a in L)c[a]&&T(c[a].prototype,M);if(k&&_(C)!==M&&T(C,M),s&&!p(M,U))for(a in V=!0,h(M,U,{configurable:!0,get:function(){return d(this)?this[F]:void 0}}),L)c[a]&&y(c[a],F,a);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:k,TYPED_ARRAY_TAG:V&&F,aTypedArray:z,aTypedArrayConstructor:Y,exportTypedArrayMethod:j,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:B,isView:P,isTypedArray:W,TypedArray:S,TypedArrayPrototype:M}},f415:function(t,e,r){},f495:function(t,e,r){"use strict";var a=r("c04e"),n=TypeError;t.exports=function(t){var e=a(t,"number");if("number"==typeof e)throw new n("Can't convert number to bigint");return BigInt(e)}},f8cd:function(t,e,r){"use strict";var a=r("5926"),n=RangeError;t.exports=function(t){var e=a(t);if(e<0)throw new n("The argument can't be less than 0");return e}}}]);
//# sourceMappingURL=chunk-233eb0d5.2.9.10.js.map