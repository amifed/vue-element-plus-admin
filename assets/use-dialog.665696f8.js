var e=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(l,o,a)=>o in l?e(l,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[o]=a;import{H as r,O as u,I as c,aE as d,br as p,m as f,J as i,aD as y,q as v,C as b,B as m,U as O,c0 as C,ai as B}from"./index.107dbd52.js";import{U as g}from"./event.619f27c5.js";import{b as w,a as h,c as D}from"./el-overlay.afcb911b.js";const j=r({center:{type:Boolean,default:!1},closeIcon:{type:u,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),x={close:()=>!0},I=r((S=((e,l)=>{for(var o in l||(l={}))t.call(l,o)&&s(e,o,l[o]);if(a)for(var o of a(l))n.call(l,o)&&s(e,o,l[o]);return e})({},j),P={appendToBody:{type:Boolean,default:!1},beforeClose:{type:c(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,required:!0},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}},l(S,o(P))));var S,P;const k={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[g]:e=>d(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},E=(e,l)=>{const o=O().emit,{nextZIndex:a}=p();let t="";const n=f(!1),s=f(!1),r=f(!1),u=f(e.zIndex||a());let c,d;const j=i((()=>y(e.width)?`${e.width}px`:e.width)),x=i((()=>{const l={};return e.fullscreen||(e.top&&(l["--el-dialog-margin-top"]=e.top),e.width&&(l["--el-dialog-width"]=j.value)),l}));function I(){null==d||d(),null==c||c(),e.openDelay&&e.openDelay>0?({stop:c}=C((()=>k()),e.openDelay)):k()}function S(){null==c||c(),null==d||d(),e.closeDelay&&e.closeDelay>0?({stop:d}=C((()=>E()),e.closeDelay)):E()}function P(){e.beforeClose?e.beforeClose((function(e){e||(s.value=!0,n.value=!1)})):S()}function k(){B&&(n.value=!0)}function E(){n.value=!1}return e.lockScroll&&w(n),e.closeOnPressEscape&&h({handleClose:P},n),D(n),v((()=>e.modelValue),(t=>{t?(s.value=!1,I(),r.value=!0,o("open"),u.value=e.zIndex?u.value++:a(),b((()=>{l.value&&(l.value.scrollTop=0)}))):n.value&&S()})),v((()=>e.fullscreen),(e=>{l.value&&(e?(t=l.value.style.transform,l.value.style.transform=""):l.value.style.transform=t)})),m((()=>{e.modelValue&&(n.value=!0,r.value=!0,I())})),{afterEnter:function(){o("opened")},afterLeave:function(){o("closed"),o(g,!1),e.destroyOnClose&&(r.value=!1)},beforeLeave:function(){o("close")},handleClose:P,onModalClick:function(){e.closeOnClickModal&&P()},close:S,doClose:E,closed:s,style:x,rendered:r,visible:n,zIndex:u}};export{x as a,I as b,k as c,j as d,E as u};
