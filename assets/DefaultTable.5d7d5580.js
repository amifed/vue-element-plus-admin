import{_ as e}from"./ContentWrap.31cf9b7e.js";import{d as a,aC as t,m as o,o as i,v as l,w as s,a as r,k as m,g as p,x as d,t as n}from"./index.107dbd52.js";import{_ as b}from"./Table.vue_vue_type_script_lang.a04e8649.js";import{g as c}from"./index.eca24910.js";import{E as f}from"./el-tag.31216c5f.js";import{E as j}from"./el-button.db774ab8.js";import"./el-card.9753c006.js";import"./el-popper.40deff8b.js";import"./tsxHelper.1679583a.js";import"./index.70374d34.js";import"./event.619f27c5.js";import"./validator.5ce7afd2.js";import"./el-input.d1964584.js";import"./typescript.040487e2.js";import"./index.a4cebb6f.js";import"./resize-event.8673af2d.js";import"./index.98ed6c74.js";import"./scroll.e3f703a2.js";import"./browser.972a21b9.js";import"./arrow-up.fa90d479.js";import"./arrow-down.4707ba6c.js";import"./set.9c1b99c8.js";import"./useAxios.ac5526da.js";const u=a({setup(a){const{t:u}=m(),g=[{field:"index",label:u("tableDemo.index"),type:"index"},{field:"title",label:u("tableDemo.title")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime")},{field:"importance",label:u("tableDemo.importance"),formatter:(e,a,o)=>t(f,{type:1===o?"success":2===o?"warning":"danger"},(()=>u(1===o?"tableDemo.important":2===o?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:u("tableDemo.pageviews")},{field:"action",label:u("tableDemo.action")}],D=o(!0);let x=o([]);(async e=>{const a=await c({params:e||{pageIndex:1,pageSize:10}}).catch((()=>{})).finally((()=>{D.value=!1}));a&&(x.value=a.data.list)})();return(a,t)=>(i(),l(r(e),{title:r(u)("tableDemo.table"),message:r(u)("tableDemo.tableDes")},{default:s((()=>[p(r(b),{columns:g,data:r(x),loading:D.value},{action:s((e=>[p(r(j),{type:"primary",onClick:e=>{}},{default:s((()=>[d(n(r(u)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{u as default};
