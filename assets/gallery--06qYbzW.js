const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery-bvxxrAhm.js","assets/app-D2D8mvWc.js","assets/app-DQo2glUa.css","assets/decrypt-adGbqxmW.js","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-BIPFjjj0.js"])))=>i.map(i=>d[i]);
import{d as b,n as k,o as n,c as r,k as g,e as y,g as a,C as P,D as V,v as $,E as D,m,u as E,x as G,H as S,aa as A,ad as O,ae as R,j as T,i as Y,ai as j,w as _,r as B,af as F,f as t,t as I,F as N,ac as z,aj as H}from"./app-D2D8mvWc.js";import{u as K}from"./decrypt-adGbqxmW.js";import{_ as M}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BIPFjjj0.js";const J=b({__name:"YunGallery",props:{photos:{}},setup(h){return(c,s)=>{const e=k("VAGallery");return n(),r(e,{photos:c.photos},null,8,["photos"])}}}),L={key:0,"w-full":"","pt-14":"","pb-10":""},U={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},W={key:1},q=b({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(h){const c=h,s=g(""),e=g(""),i=g(!1),{decrypt:u}=K();async function v(){const l=c.encryptedPhotos;if(l)try{const o=await u(s.value,l);e.value=o||""}catch{i.value=!0}}function f(){e.value="",s.value=""}return(l,o)=>{const p=J;return n(),y("div",null,[e.value?(n(),y("div",W,[m(p,{photos:JSON.parse(e.value)},null,8,["photos"]),a("div",{"w-full":"","text-center":"","mt-8":""},[a("button",{"m-auto":"",class:"btn","font-bold":"",onClick:f}," Encrypt Again ")])])):(n(),y("div",L,[a("div",U,[P(a("input",{"onUpdate:modelValue":o[0]||(o[0]=d=>s.value=d),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:$(i.value&&"border-red"),onInput:o[1]||(o[1]=d=>i.value=!1),onKeyup:D(v,["enter"])},null,34),[[V,s.value]]),a("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:v})])]))])}}}),Q={text:"center",class:"yun-text-light",p:"2"},X={class:"page-action",text:"center"},Z=["title"],ee=a("div",{"i-ri-arrow-go-back-line":""},null,-1),te=[ee],oe=b({__name:"gallery",setup(h){const c=E(),{t:s}=G(),e=S(),i=A(e);O([R({"@type":"CollectionPage"})]);const u=T(()=>e.value.photos||[]),f=Y().value.addons["valaxy-addon-lightgallery"]?j(()=>H(()=>import("./YunGallery-bvxxrAhm.js"),__vite__mapDeps([0,1,2,3,4]))):()=>null;return(l,o)=>{const p=z,d=M,x=q,w=k("RouterView");return n(),y(N,null,[l.$slots["sidebar-child"]?(n(),r(p,{key:0},{default:_(()=>[B(l.$slots,"sidebar-child")]),_:3})):(n(),r(p,{key:1})),m(w,null,{default:_(({Component:C})=>[(n(),r(F(C),null,{"main-header":_(()=>[m(d,{title:t(i)||t(s)("title.gallery"),icon:t(e).icon||"i-ri-gallery-line",color:t(e).color,"page-title-class":t(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":_(()=>[a("div",Q,I(t(s)("counter.photos",u.value.length)),1),a("div",X,[a("a",{class:"yun-icon-btn",title:t(s)("accessibility.back"),onClick:o[0]||(o[0]=()=>t(c).back())},te,8,Z)]),t(e).encryptedPhotos?(n(),r(x,{key:0,"encrypted-photos":t(e).encryptedPhotos},null,8,["encrypted-photos"])):(n(),r(t(f),{key:1,photos:u.value},null,8,["photos"])),m(w)]),_:2},1024))]),_:1})],64)}}}),le=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{J as _,le as g};