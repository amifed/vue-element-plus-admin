import{d as e,u as t,a as r,o as a,c as s}from"./index.107dbd52.js";const p=e({setup(e){const{currentRoute:p,replace:o}=t(),{params:c,query:d}=r(p),{path:n,_redirect_type:u="path"}=c;Reflect.deleteProperty(c,"_redirect_type"),Reflect.deleteProperty(c,"path");const y=Array.isArray(n)?n.join("/"):n;return o("name"===u?{name:y,query:d,params:c}:{path:y.startsWith("/")?y:"/"+y,query:d}),(e,t)=>(a(),s("div"))}});export{p as default};
