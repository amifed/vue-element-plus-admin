import{d as e,a6 as t,m as o,aL as n,c3 as a,B as i,c4 as u,bK as l,c5 as s,o as r,c as d,e as v,E as f,n as c,$ as p}from"./index.a0a0051f.js";const g=v("div",null,"sticky",-1),m=e({props:{offset:t.number.def(0),zIndex:t.number.def(999),className:t.string.def(""),position:{type:String,validator:function(e){return-1!==["top","bottom"].indexOf(e)},default:"top"}},setup(e){const t=e,m=o("auto"),x=o("auto"),h=o(!1),w=n(),y=n(),{height:C}=a();i((()=>{var e;x.value=(null==(e=w.value)?void 0:e.getBoundingClientRect().height)+"px",y.value=z(w.value,!0),u(y,"scroll",B),u("resize",I),B()})),l((()=>{B()}));const b=(e,t)=>{if(!s)return!1;const o=((e,t)=>{var o;if(!s||!e||!t)return"";t.replace(/-(\w)/g,((e,t)=>t?t.toUpperCase():""));try{const n=e.style[t];if(n)return n;const a=null==(o=document.defaultView)?void 0:o.getComputedStyle(e,"");return a?a[t]:""}catch{return e.style[t]}})(e,{undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)]);return["scroll","auto","overlay"].some((e=>o.includes(e)))},z=(e,t)=>{if(!s)return;let o=e;for(;o;){if([window,document,document.documentElement].includes(o))return window;if(b(o,t))return o;o=o.parentNode}return o},B=()=>{var e,o;if(m.value=w.value.getBoundingClientRect().width+"px","top"===t.position){const o=null==(e=w.value)?void 0:e.getBoundingClientRect().top;if(void 0!==o&&o<t.offset)return void R();S()}else{const e=null==(o=w.value)?void 0:o.getBoundingClientRect().bottom;if(void 0!==e&&e>C.value-t.offset)return void R();S()}},I=()=>{h.value&&w.value&&(m.value=w.value.getBoundingClientRect().width+"px")},R=()=>{h.value||(h.value=!0)},S=()=>{h.value&&(m.value="auto",h.value=!1)};return(t,o)=>(r(),d("div",{style:p({height:x.value,zIndex:e.zIndex}),ref_key:"refSticky",ref:w},[v("div",{class:c(e.className),style:p({top:"top"===e.position?e.offset+"px":"",bottom:"top"!==e.position?e.offset+"px":"",zIndex:e.zIndex,position:h.value?"fixed":"static",width:m.value,height:x.value})},[f(t.$slots,"default",{},(()=>[g]))],6)],4))}});export{m as _};
