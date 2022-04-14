var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,r=(e,o)=>{for(var t in o||(o={}))n.call(o,t)&&l(e,t,o[t]);if(a)for(var t of a(o))s.call(o,t)&&l(e,t,o[t]);return e};import{q as i,bQ as c,C as u,F as d,d as p,Q as m,bR as f,m as g,br as b,r as v,J as y,bS as h,B as C,D as x,aG as E,_,s as B,az as w,o as k,v as M,w as T,aA as j,aK as O,g as P,e as A,c as S,n as z,Y as I,X as V,t as $,aq as L,ar as R,E as D,$ as H,x as K,h as F,ai as U,ak as q,b1 as Q,al as G,aB as J,bT as W,aM as X,aC as Y}from"./index.107dbd52.js";import{E as Z}from"./el-button.db774ab8.js";import{E as N}from"./el-input.d1964584.js";import{E as ee,u as oe,a as te,b as ae,c as ne,d as se}from"./el-overlay.afcb911b.js";import{o as le}from"./aria.d2e90c49.js";import{o as re,a as ie}from"./el-popper.40deff8b.js";import{i as ce}from"./validator.5ce7afd2.js";import{u as ue}from"./index.98ed6c74.js";import{u as de}from"./index.70374d34.js";const pe=[],me=e=>{if(0===pe.length)return;const o=pe[pe.length-1]["_trap-focus-children"];if(o.length>0&&e.code===d.tab){if(1===o.length)return e.preventDefault(),void(document.activeElement!==o[0]&&o[0].focus());const t=e.shiftKey,a=e.target===o[0],n=e.target===o[o.length-1];a&&t&&(e.preventDefault(),o[o.length-1].focus()),n&&!t&&(e.preventDefault(),o[0].focus())}},fe={beforeMount(e){e["_trap-focus-children"]=le(e),pe.push(e),pe.length<=1&&re(document,"keydown",me)},updated(e){u((()=>{e["_trap-focus-children"]=le(e)}))},unmounted(){pe.shift(),0===pe.length&&ie(document,"keydown",me)}},ge=p({name:"ElMessageBox",directives:{TrapFocus:fe},components:r({ElButton:Z,ElInput:N,ElOverlay:ee,ElIcon:m},f),inheritAttrs:!1,props:{buttonSize:{type:String,validator:ce},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:a}){const{t:n}=ue(),s=g(!1),{nextZIndex:l}=b(),p=v({beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:l()}),m=y((()=>{const e=p.type;return e&&h[e]?`el-message-box-icon--${e}`:""})),f=de(y((()=>e.buttonSize)),{prop:!0,form:!0,formItem:!0}),_=y((()=>p.icon||h[p.type]||"")),B=y((()=>!!p.message)),w=g(),k=g(),M=g(),T=g(),j=y((()=>p.confirmButtonClass));i((()=>p.inputValue),(async o=>{await u(),"prompt"===e.boxType&&null!==o&&I()}),{immediate:!0}),i((()=>s.value),(o=>{o&&("alert"!==e.boxType&&"confirm"!==e.boxType||u().then((()=>{var e,o,t;null==(t=null==(o=null==(e=T.value)?void 0:e.$el)?void 0:o.focus)||t.call(o)})),p.zIndex=l()),"prompt"===e.boxType&&(o?u().then((()=>{M.value&&M.value.$el&&V().focus()})):(p.editorErrorMessage="",p.validateError=!1))}));const O=y((()=>e.draggable));function P(){s.value&&(s.value=!1,u((()=>{p.action&&a("action",p.action)})))}oe(w,k,O),C((async()=>{await u(),e.closeOnHashChange&&re(window,"hashchange",P)})),x((()=>{e.closeOnHashChange&&ie(window,"hashchange",P)}));const A=()=>{e.closeOnClickModal&&z(p.distinguishCancelAndClose?"close":"cancel")},S=se(A),z=o=>{var t;("prompt"!==e.boxType||"confirm"!==o||I())&&(p.action=o,p.beforeClose?null==(t=p.beforeClose)||t.call(p,o,p,P):P())},I=()=>{if("prompt"===e.boxType){const e=p.inputPattern;if(e&&!e.test(p.inputValue||""))return p.editorErrorMessage=p.inputErrorMessage||n("el.messagebox.error"),p.validateError=!0,!1;const o=p.inputValidator;if("function"==typeof o){const e=o(p.inputValue);if(!1===e)return p.editorErrorMessage=p.inputErrorMessage||n("el.messagebox.error"),p.validateError=!0,!1;if("string"==typeof e)return p.editorErrorMessage=e,p.validateError=!0,!1}}return p.editorErrorMessage="",p.validateError=!1,!0},V=()=>{const e=M.value.$refs;return e.input||e.textarea},$=()=>{z("close")};return e.closeOnPressEscape?te({handleClose:$},s):((e,o,t)=>{const a=e=>{t(e)&&e.stopImmediatePropagation()};let n;i((()=>e.value),(e=>{e?n=c(document,o,a,!0):null==n||n()}),{immediate:!0})})(s,"keydown",(e=>e.code===d.esc)),e.lockScroll&&ae(s),ne(s),L=r({},E(p)),o(L,t({overlayEvent:S,visible:s,hasMessage:B,typeClass:m,btnSize:f,iconComponent:_,confirmButtonClasses:j,rootRef:w,headerRef:k,inputRef:M,confirmRef:T,doClose:P,handleClose:$,handleWrapperClick:A,handleInputEnter:e=>{if("textarea"!==p.inputType)return e.preventDefault(),z("confirm")},handleAction:z,t:n}));var L}}),be=["aria-label"],ve={key:0,ref:"headerRef",class:"el-message-box__header"},ye={class:"el-message-box__title"},he={class:"el-message-box__content"},Ce={class:"el-message-box__container"},xe={key:1,class:"el-message-box__message"},Ee={key:0},_e=["innerHTML"],Be={class:"el-message-box__input"},we={class:"el-message-box__btns"};var ke=_(ge,[["render",function(e,o,t,a,n,s){const l=B("el-icon"),r=B("close"),i=B("el-input"),c=B("el-button"),u=B("el-overlay"),d=w("trap-focus");return k(),M(F,{name:"fade-in-linear",onAfterLeave:o[11]||(o[11]=o=>e.$emit("vanish"))},{default:T((()=>[j(P(u,{"z-index":e.zIndex,"overlay-class":["is-message-box",e.modalClass],mask:e.modal},{default:T((()=>[A("div",{class:"el-overlay-message-box",onClick:o[8]||(o[8]=(...o)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...o)),onMousedown:o[9]||(o[9]=(...o)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...o)),onMouseup:o[10]||(o[10]=(...o)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...o))},[j((k(),S("div",{ref:"rootRef",role:"dialog","aria-label":e.title||"dialog","aria-modal":"true",class:z(["el-message-box",e.customClass,{"el-message-box--center":e.center,"is-draggable":e.draggable}]),style:H(e.customStyle),onClick:o[7]||(o[7]=R((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?(k(),S("div",ve,[A("div",ye,[e.iconComponent&&e.center?(k(),M(l,{key:0,class:z(["el-message-box__status",e.typeClass])},{default:T((()=>[(k(),M(I(e.iconComponent)))])),_:1},8,["class"])):V("v-if",!0),A("span",null,$(e.title),1)]),e.showClose?(k(),S("button",{key:0,type:"button",class:"el-message-box__headerbtn","aria-label":"Close",onClick:o[0]||(o[0]=o=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:o[1]||(o[1]=L(R((o=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[P(l,{class:"el-message-box__close"},{default:T((()=>[P(r)])),_:1})],32)):V("v-if",!0)],512)):V("v-if",!0),A("div",he,[A("div",Ce,[e.iconComponent&&!e.center&&e.hasMessage?(k(),M(l,{key:0,class:z(["el-message-box__status",e.typeClass])},{default:T((()=>[(k(),M(I(e.iconComponent)))])),_:1},8,["class"])):V("v-if",!0),e.hasMessage?(k(),S("div",xe,[D(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(k(),S("p",{key:1,innerHTML:e.message},null,8,_e)):(k(),S("p",Ee,$(e.message),1))]))])):V("v-if",!0)]),j(A("div",Be,[P(i,{ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=o=>e.inputValue=o),type:e.inputType,placeholder:e.inputPlaceholder,class:z({invalid:e.validateError}),onKeydown:L(e.handleInputEnter,["enter"])},null,8,["modelValue","type","placeholder","class","onKeydown"]),A("div",{class:"el-message-box__errormsg",style:H({visibility:e.editorErrorMessage?"visible":"hidden"})},$(e.editorErrorMessage),5)],512),[[O,e.showInput]])]),A("div",we,[e.showCancelButton?(k(),M(c,{key:0,loading:e.cancelButtonLoading,class:z([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:o[3]||(o[3]=o=>e.handleAction("cancel")),onKeydown:o[4]||(o[4]=L(R((o=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:T((()=>[K($(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):V("v-if",!0),j(P(c,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:z([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:o[5]||(o[5]=o=>e.handleAction("confirm")),onKeydown:o[6]||(o[6]=L(R((o=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:T((()=>[K($(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[O,e.showConfirmButton]])])],14,be)),[[d]])],32)])),_:3},8,["z-index","overlay-class","mask"]),[[O,e.visible]])])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const Me=new Map,Te=(e,o)=>{const t=document.createElement("div");e.onVanish=()=>{W(null,t),Me.delete(n)},e.onAction=o=>{const t=Me.get(n);let s;s=e.showInput?{value:n.inputValue,action:o}:o,e.callback?e.callback(s,a.proxy):"cancel"===o||"close"===o?e.distinguishCancelAndClose&&"cancel"!==o?t.reject("close"):t.reject("cancel"):t.resolve(s)};const a=((e,o,t=null)=>{const a=Y(ke,e);return a.appContext=t,W(a,o),document.body.appendChild(o.firstElementChild),a.component})(e,t,o),n=a.proxy;for(const s in e)X(e,s)&&!X(n.$props,s)&&(n[s]=e[s]);return i((()=>n.message),((e,o)=>{Q(e)?a.slots.default=()=>[e]:Q(o)&&!Q(e)&&delete a.slots.default}),{immediate:!0}),n.visible=!0,n};function je(e,o=null){if(!U)return Promise.reject();let t;return q(e)||Q(e)?e={message:e}:t=e.callback,new Promise(((a,n)=>{const s=Te(e,null!=o?o:je._context);Me.set(s,{options:e,callback:t,resolve:a,reject:n})}))}const Oe={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};["alert","confirm","prompt"].forEach((e=>{je[e]=function(e){return(o,t,a,n)=>{let s;return G(t)?(a=t,s=""):s=J(t)?"":t,je(Object.assign(r({title:s,message:o,type:""},Oe[e]),a,{boxType:e}),n)}}(e)})),je.close=()=>{Me.forEach(((e,o)=>{o.doClose()})),Me.clear()},je._context=null;const Pe=je;Pe.install=e=>{Pe._context=e._context,e.config.globalProperties.$msgbox=Pe,e.config.globalProperties.$messageBox=Pe,e.config.globalProperties.$alert=Pe.alert,e.config.globalProperties.$confirm=Pe.confirm,e.config.globalProperties.$prompt=Pe.prompt};const Ae=Pe;export{Ae as E,fe as T};
