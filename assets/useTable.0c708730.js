var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,i=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(n)for(var t of n(a))s.call(a,t)&&o(e,t,a[t]);return e};import{bP as l,r as c,J as p,q as u,m as g,a as d,bA as m,k as b,C as v}from"./index.107dbd52.js";import{E as P}from"./el-message-box.18aaaa5b.js";import"./el-button.db774ab8.js";import"./el-input.d1964584.js";import"./el-overlay.afcb911b.js";function f(e,a,t){var n=null==e?void 0:l(e,a);return void 0===n?t:n}const{t:y}=b(),w=e=>{const n=c({pageSize:10,currentPage:1,total:10,tableList:[],paramsObj:{},loading:!0,currentRow:null}),r=p((()=>{return{params:(e=i({},n.paramsObj.params),r={pageSize:n.pageSize,pageIndex:n.currentPage},a(e,t(r)))};var e,r}));u((()=>n.currentPage),(()=>{w.getList()})),u((()=>n.pageSize),(()=>{n.currentPage=1,w.getList()}));const s=g(),o=g(),l=async()=>{await v();const e=d(s);return e},b=async(a,t)=>{if(await((null==e?void 0:e.delListApi)&&(null==e?void 0:e.delListApi(a)))){m.success(y("common.delSuccess"));const e=(n.total%n.pageSize===t.length||1===n.pageSize)&&n.currentPage>1?n.currentPage-1:n.currentPage;n.currentPage=e,w.getList()}},w={getList:async()=>{var a;n.loading=!0;const t=await(null==e?void 0:e.getListApi(d(r)).catch((()=>{})).finally((()=>{n.loading=!1})));t&&(n.tableList=f(t.data||{},null==e?void 0:e.response.list),n.total=f(t.data||{},null==(a=null==e?void 0:e.response)?void 0:a.total)||0)},setProps:async(e={})=>{const a=await l();null==a||a.setProps(e)},setColumn:async e=>{const a=await l();null==a||a.setColumn(e)},getSelections:async()=>{const e=await l();return(null==e?void 0:e.selections)||[]},setSearchParams:e=>{n.currentPage=1,n.paramsObj=Object.assign(n.paramsObj,{params:i({pageSize:n.pageSize,pageIndex:n.currentPage},e)}),w.getList()},delList:async(e,a,t=!0)=>{const r=await l();if(a){if(!(null==r?void 0:r.selections.length))return void m.warning(y("common.delNoData"))}else if(!n.currentRow)return void m.warning(y("common.delNoData"));const s={data:{ids:e}};t?P.confirm(y("common.delMessage"),y("common.delWarning"),{confirmButtonText:y("common.delOk"),cancelButtonText:y("common.delCancel"),type:"warning"}).then((async()=>{await b(s,e)})).catch((()=>{})):await b(s,e)}};return(null==e?void 0:e.props)&&w.setProps(e.props),{register:(e,a)=>{s.value=e,o.value=a},elTableRef:o,tableObject:n,methods:w}};export{w as u};
