import{B as e,aN as t,D as o,S as n,as as s,au as a,ai as d,aP as u,q as l,bG as c,bN as i,bU as r,bO as m,bQ as p,F as v,aj as f,H as y,I as g,d as h,R as b,g as E,E as M,aC as x}from"./index.107dbd52.js";import{g as k}from"./scroll.e3f703a2.js";import{P as C}from"./vnode.3630d077.js";const w=(s,a,d)=>{let u={offsetX:0,offsetY:0};const l=e=>{const t=e.clientX,o=e.clientY,{offsetX:a,offsetY:d}=u,l=s.value.getBoundingClientRect(),c=l.left,i=l.top,r=l.width,m=l.height,p=document.documentElement.clientWidth,v=document.documentElement.clientHeight,f=-c+a,y=-i+d,g=p-c-r+a,h=v-i-m+d,b=e=>{const l=Math.min(Math.max(a+e.clientX-t,f),g),c=Math.min(Math.max(d+e.clientY-o,y),h);u={offsetX:l,offsetY:c},s.value.style.transform=`translate(${n(l)}, ${n(c)})`},E=()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",E)},c=()=>{a.value&&s.value&&a.value.removeEventListener("mousedown",l)};e((()=>{t((()=>{d.value?a.value&&s.value&&a.value.addEventListener("mousedown",l):c()}))})),o((()=>{c()}))},L=e=>{if(s(e)||a("[useLockscreen]","You need to pass a ref param to this function"),!d||u(document.body,"el-popup-parent--hidden"))return;let t=0,o=!1,n="0",p=0;const v=()=>{m(document.body,"el-popup-parent--hidden"),o&&(document.body.style.paddingRight=n)};l(e,(e=>{if(!e)return void v();o=!u(document.body,"el-popup-parent--hidden"),o&&(n=document.body.style.paddingRight,p=Number.parseInt(c(document.body,"paddingRight"),10)),t=k();const s=document.documentElement.clientHeight<document.body.scrollHeight,a=c(document.body,"overflowY");t>0&&(s||"scroll"===a)&&o&&(document.body.style.paddingRight=`${p+t}px`),i(document.body,"el-popup-parent--hidden")})),r((()=>v()))},Y=[],I=(e,t)=>{l(t,(t=>{t?Y.push(e):Y.splice(Y.indexOf(e),1)}))};d&&p(document,"keydown",(e=>{if(0!==Y.length&&e.code===v.esc){e.stopPropagation();Y[Y.length-1].handleClose()}}));const R=(e,t)=>{let o;l((()=>e.value),(e=>{var n,a;e?(o=document.activeElement,s(t)&&(null==(a=(n=t.value).focus)||a.call(n))):o.focus()}))},S=e=>{if(!e)return{onClick:f,onMousedown:f,onMouseup:f};let t=!1,o=!1;return{onClick:n=>{t&&o&&e(n),t=o=!1},onMousedown:e=>{t=e.target===e.currentTarget},onMouseup:e=>{o=e.target===e.currentTarget}}};const j=h({name:"ElOverlay",props:y({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:g([String,Array,Object])},zIndex:{type:g([String,Number])}}),emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:t,emit:o}){const n=b("overlay"),{onClick:s,onMousedown:a,onMouseup:d}=S(e.customMaskEvent?void 0:e=>{o("click",e)});return()=>e.mask?E("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:a,onMouseup:d},[M(t,"default")],C.STYLE|C.CLASS|C.PROPS,["onClick","onMouseup","onMousedown"]):x("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[M(t,"default")])}});export{j as E,I as a,L as b,R as c,S as d,w as u};
