import{_ as lt}from"./ValaxyMain.vue_vue_type_style_index_0_lang-Q7cfhLmf.js";import{i as rt,j as ct,d as bt,k as ut,l as dt,o as Le,e as ft,f as A,a as pt,p as Te,c as ht,w as P,m as $t,r as T}from"./app-D2D8mvWc.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-lC52JS53.js";import"./YunCard.vue_vue_type_script_setup_true_lang-CdmS6Vy_.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-BIPFjjj0.js";import"./post-D3hlYITB.js";var ce={};function gt(l){throw new Error('Could not dynamically require "'+l+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var I={},te={},Ce;function mt(){if(Ce)return te;Ce=1,Object.defineProperty(te,"__esModule",{value:!0});const l=we();function g($){return Object.entries($).filter(([,b])=>!!b).map(([b,d])=>`${b}=${d}`).join("&")}function j($){if(!$.startsWith("http"))return $;const b=new URL($),d=b.pathname==="/"?"":b.pathname;return`${b.origin}${d}`}const C={全部:"0",想看:"1",在看:"2",看过:"3"},h={动画:C,游戏:{全部:"0",想玩:"1",在玩:"2",玩过:"3"},书籍:{全部:"0",想读:"1",在读:"2",读过:"3"}},q={动画:"1",游戏:"2",书籍:"3"},O={动画:["全部","想看","在看","看过"],游戏:["全部","想玩","在玩","玩过"],书籍:["全部","想读","在读","读过"]};async function M($,b){const d=Object.assign(Object.assign({},b),{collectionType:C[b.collectionType]});return await(await fetch(`${j($)}/bilibili?${g(d)}`)).json()}async function F($,b){const{subjectType:d}=b,v=Object.assign(Object.assign({},b),{collectionType:h[d][b.collectionType],subjectType:q[b.subjectType]});return await(await fetch(`${j($)}/bgm?${g(v)}`)).json()}async function J($,b){const{subjectType:d}=b,v=Object.assign(Object.assign({},b),{collectionType:h[d][b.collectionType],subjectType:q[b.subjectType]});return await(await fetch(`${j($)}/custom?${g(v)}`)).json()}function _({activeLabel:$,labels:b,onChange:d}){const v=L=>{$!==L&&d(L)};return l.h("div",{class:"bbc-tabs"},b.map(L=>l.h("div",{class:{"bbc-tab-item":!0,"bbc-tab-item-active":L===$},key:L,onClick:()=>v(L)},L)))}function z(){return l.h("div",{class:"bbc-skeleton-container bbc-bangumi-item"},l.h("div",{class:"bbc-skeleton-avatar"}),l.h("div",{class:"bbc-skeleton-content bbc-bangumi-content"},l.h("div",{class:"bbc-skeleton-row",style:{width:"30%"}}),l.h("div",{class:"bbc-skeleton-row",style:{width:"60%",height:"40px"}}),l.h("div",{class:"bbc-skeleton-row",style:{width:"90%",height:"32px"}})))}const D=({list:$,loading:b})=>l.h("div",{class:"bbc-bangumi"},$.map(d=>l.h("div",null,b?l.h(z,null):l.h("div",{class:"bbc-bangumi-item"},l.h("a",{href:d.url,target:"_blank",rel:"noreferrer"},l.h("img",{src:d.cover,alt:"cover",loading:"lazy",referrerpolicy:"no-referrer"})),l.h("div",{class:"bbc-bangumi-content"},l.h("h3",{class:"bbc-bangumi-title"},l.h("a",{href:d.url,target:"_blank",rel:"noreferrer",innerHTML:d.name?d.name:d.nameCN}),d.name&&l.h("small",{innerHTML:d.nameCN})),l.h("div",{class:"bbc-bangumi-labels"},d.labels.map(v=>l.h("div",{class:"bbc-bangumi-label"},l.h("p",{class:"bbc-bangumi-label-title"},v.label),v.value&&l.h("p",null,v.value)))),l.h("p",{class:"bbc-bangumi-summary",innerHTML:d.summary}))))));function H({pageNumber:$,totalPages:b,onChange:d,onInputChange:v}){return l.h("div",{class:"bbc-pagination"},l.h("a",{class:"bbc-pagination-button",onClick:()=>d("head")},"首页"),l.h("a",{class:"bbc-pagination-button",onClick:()=>d("prev")},"上一页"),l.h("span",{class:"bbc-pagination-pagenum"},`${$} / ${b}`),l.h("a",{class:"bbc-pagination-button",onClick:()=>d("next")},"下一页"),l.h("a",{class:"bbc-pagination-button",onClick:()=>d("tail")},"尾页"),l.h("div",{class:"bbc-pagination-input"},l.h("span",null,"跳至"),l.h("input",{type:"text",maxLength:4,onChange:v}),l.h("span",null,"页")))}function ne(){return l.h("div",{class:"bbc-empty"},l.h("img",{src:"https://s1.hdslb.com/bfs/static/webssr/article/empty.png",alt:"empty",referrerpolicy:"no-referrer"}))}function ie({error:$}){return l.h("div",{class:"bbc-error"},l.h("img",{src:"https://s1.hdslb.com/bfs/static/jinkela/long/bitmap/error_01.png",alt:"parse failed",referrerpolicy:"no-referrer"}),l.h("p",null,"Σ(oﾟдﾟoﾉ) 发生了一些错误"),l.h("p",null,`message: ${$.message}`))}const X=`@layer bilibili-bangumi-component {
  :host {
    display: block;
    /* 基础文本颜色 */
    --bbc-text-base-color: #4c4948;
    /* 标签颜色 */
    --bbc-label-color: #FF9843;
    /* 下划线、背景之类的颜色 */
    --bbc-primary-color: #425aef;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  .bbc-tabs {
    display: flex;
    gap: 8px;
  }

  .bbc-tab-item {
    padding: 4px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: var(--bbc-text-base-color);
    cursor: pointer;
  }

  .bbc-tab-item:hover {
    background-color: var(--bbc-primary-color);
    color: white;
  }

  .bbc-tab-item-active {
    color: white;
    background-color: var(--bbc-primary-color);
  }

  .bbc-header-platform {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
    /* height: 40px; */
  }

  .bbc-header-platform .divider {
    width: 3px;
    border-radius: 2px;
    height: 32px;
    background-color: var(--bbc-primary-color);
  }

  .bbc-bangumi:last-child {
    border-bottom: none;
  }

  .bbc-bangumi-item {
    display: flex;
    margin: 12px 0;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid #ddd;
  }

  .bbc-bangumi-item img {
    border-radius: 8px;
    cursor: pointer;
    height: 140px;
    object-fit: cover;
    aspect-ratio: 3 / 4;
  }

  .bbc-bangumi-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bbc-bangumi-title {
    margin: 0;
  }

  .bbc-bangumi-title a {
    color: var(--bbc-text-base-color);
  }

  .bbc-bangumi-title a:hover {
    border-bottom: 2px solid var(--bbc-primary-color);
  }

  .bbc-bangumi-title small {
    margin-left: 8px;
    font-weight: normal;
    font-size: 14px;
    color: var(--bbc-text-base-color);
    height: 24px;
  }

  .bbc-bangumi-labels {
    color: var(--bbc-label-color);
    display: flex;
  }

  .bbc-bangumi-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 13%;
    height: 36px;
    border-right: 1px solid var(--bbc-label-color);
  }

  .bbc-bangumi-label:last-child {
    border-right: none;
  }

  .bbc-bangumi-label p {
    font-size: 14px;
    margin: 0;
    padding: 0 4px;
  }

  .bbc-bangumi-label:not(.bbc-bangumi-label > .bbc-bangumi-label-title) {
    justify-content: center;
  }

  .bbc-bangumi-summary {
    font-size: 12px;
    color: var(--bbc-text-base-color);

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .bbc-pagination {
    height: 40px;
    text-align: center;
    padding-right: 20px;
  }

  .bbc-pagination-button {
    border-radius: 4px;
    font-size: 14px;
    padding: 4px 8px;
    margin: 0 4px;
    color: #bbb;
    cursor: pointer;
  }

  .bbc-pagination-button:hover {
    background-color: var(--bbc-primary-color);
    color: white;
  }

  .bbc-pagination-pagenum {
    color: #bbb;
    font-size: 14px;
  }
  
  .bbc-pagination-input {
    display: inline-block;
    color: #bbb;
    font-size: 12px;
  }

  .bbc-pagination-input input {
    display: inline-block;
    margin: 0 8px;
    font-size: 12px;
    color: #bbb;
    width: 30px;
    height: 24px;
    line-height: 24px;
    border-radius: 4px;
    border: 1px solid #bbb;
    text-align: center;
    outline: none;
    transition: border .2s ease;
  }

  .bbc-skeleton-container {
    animation: skeleton-blink 1.2s ease-in-out infinite;
  }

  @keyframes skeleton-blink {
    50% {
      opacity: 0.6;
    }
  }

  .bbc-skeleton-avatar {
    height: 140px;
    border-radius: 12px;
    background-color: #f2f3f5;
    aspect-ratio: 3 / 4;
  }

  .bbc-skeleton-row {
    height: 24px;
    border-radius: 8px;
    background-color: #f2f3f5;
  }

  .bbc-empty {
    display: flex;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
  }

  .bbc-empty img {
    height: 140px;
    object-fit: cover;
  }

  .bbc-error {
    margin: 20px 0;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bbc-error img {
    display: block;
    width: 260px;
  }

  .bbc-error p {
    margin: 0;
    color: var(--bbc-text-base-color);
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    .bbc-tab-item {
      padding: 4px 12px;
    }

    .bbc-header-platform {
      gap: 16px;
    }

    .bbc-bangumi-title a {
      font-size: 16px;
    }

    .bbc-bangumi-label {
      width: 30%;
    }    

    .bbc-bangumi-label p {
      font-size: 12px;
    }
    
    .bbc-bangumi-label:nth-child(n + 4) {
      display: none;
    }

    .bbc-bangumi-label:nth-child(3) {
      border-right: none;
    }
  }
}`,Y=class{constructor($){l.registerInstance(this,$),this.platformLabels=["Bilibili","Bangumi"],this.subjectLabels=["动画","游戏","书籍"],this.fetchData=async()=>{try{this.loading=!0,this.error=null;let b;const d={uid:this.bilibiliUid,collectionType:this.activeCollection,pageSize:this.pageSize,pageNumber:this.pageNumber};this.activePlatform==="Bilibili"?b=await M(this.api,d):this.activePlatform==="Bangumi"?b=await F(this.api,Object.assign(Object.assign({},d),{uid:this.bgmUid,subjectType:this.activeSubject})):b=await J(this.api,Object.assign(Object.assign({},d),{subjectType:this.activeSubject})),b.code===200?this.responseData=b.data:(this.error=b,this.responseData=null)}catch(b){this.error=b,this.responseData=null}this.loading=!1},this.handlePlatformChange=b=>{this.collectionLabels=O.动画,this.activePlatform=b,this.pageNumber=1,this.activeSubject="动画",this.activeCollection="全部",this.fetchData()},this.handleSubjectChange=b=>{this.collectionLabels=O[b],this.activeSubject=b,this.pageNumber=1,this.activeCollection="全部",this.fetchData()},this.handleCollectionChange=b=>{this.activeCollection=b,this.pageNumber=1,this.fetchData()},this.scrollToTop=()=>{document.documentElement.scrollTo({top:0,behavior:"smooth"})},this.handlePageChange=b=>{const{totalPages:d}=this.responseData;switch(b){case"head":this.pageNumber=1;break;case"prev":if(this.pageNumber===1)return;this.pageNumber--;break;case"next":if(this.pageNumber===d)return;this.pageNumber++;break;case"tail":this.pageNumber=d;break}this.scrollToTop(),this.fetchData()},this.handleInputChange=b=>{const d=Number.parseInt(b.target.value);if(Object.is(d,Number.NaN))return;const{totalPages:v}=this.responseData;d<1?this.pageNumber=1:d>v?this.pageNumber=v:this.pageNumber=d,this.scrollToTop(),this.fetchData()},this.api=void 0,this.bilibiliUid=void 0,this.bgmUid=void 0,this.bilibiliEnabled=!0,this.bgmEnabled=!0,this.pageSize=15,this.customEnabled=!1,this.customLabel="自定义",this.loading=!1,this.error=void 0,this.pageNumber=1,this.responseData=void 0,this.activePlatform="Bilibili",this.activeSubject="动画",this.collectionLabels=["全部","想看","在看","看过"],this.activeCollection="全部"}componentWillLoad(){const $=[...this.platformLabels];this.customEnabled&&$.push(this.customLabel);const b=[this.bilibiliEnabled,this.bgmEnabled,this.customEnabled];this.platformLabels=$.filter((d,v)=>b[v]),this.activePlatform=this.platformLabels[0],this.fetchData()}render(){return l.h("div",null,l.h("div",{class:"bbc-header-platform"},l.h(_,{activeLabel:this.activePlatform,labels:this.platformLabels,onChange:this.handlePlatformChange}),this.activePlatform!=="Bilibili"&&l.h("div",{class:"divider"}),this.activePlatform!=="Bilibili"&&l.h(_,{activeLabel:this.activeSubject,labels:this.subjectLabels,onChange:this.handleSubjectChange})),l.h("div",null,l.h(_,{activeLabel:this.activeCollection,labels:this.collectionLabels,onChange:this.handleCollectionChange})),this.loading&&!this.responseData&&l.h(z,null),this.error&&l.h(ie,{error:this.error}),this.responseData&&l.h(D,{loading:this.loading,list:this.responseData.list}),this.responseData&&this.responseData.total===0&&l.h(ne,null),this.responseData&&l.h(H,{pageNumber:this.pageNumber,totalPages:this.responseData.totalPages,onChange:this.handlePageChange,onInputChange:this.handleInputChange}))}};return Y.style=X,te.bilibili_bangumi=Y,te}var _e;function we(){if(_e)return I;_e=1;function l(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(i){if(i!=="default"){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}}),t.default=e,Object.freeze(t)}const g="bilibili-bangumi-component";let j,C,B=!1,U=!1;const h=(e,t="")=>()=>{},q=(e,t)=>()=>{},O="{visibility:hidden}.hydrated{visibility:inherit}",M="slot-fb{display:contents}slot-fb[hidden]{display:none}",F={},J=e=>e!=null,_=e=>(e=typeof e,e==="object"||e==="function");function z(e){var t,i,n;return(n=(i=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||i===void 0?void 0:i.getAttribute("content"))!==null&&n!==void 0?n:void 0}const D=(e,t,...i)=>{let n=null,s=null,o=!1,a=!1;const c=[],r=p=>{for(let f=0;f<p.length;f++)n=p[f],Array.isArray(n)?r(n):n!=null&&typeof n!="boolean"&&((o=typeof e!="function"&&!_(n))&&(n=String(n)),o&&a?c[c.length-1].$text$+=n:c.push(o?H(null,n):n),a=o)};if(r(i),t){t.key&&(s=t.key);{const p=t.className||t.class;p&&(t.class=typeof p!="object"?p:Object.keys(p).filter(f=>p[f]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,c,be);const u=H(e,null);return u.$attrs$=t,c.length>0&&(u.$children$=c),u.$key$=s,u},H=(e,t)=>{const i={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return i.$attrs$=null,i.$key$=null,i},ne={},ie=e=>e&&e.$tag$===ne,be={forEach:(e,t)=>e.map(X).forEach(t),map:(e,t)=>e.map(X).map(t).map(Y)},X=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),Y=e=>{if(typeof e.vtag=="function"){const i=Object.assign({},e.vattrs);return e.vkey&&(i.key=e.vkey),e.vname&&(i.name=e.vname),D(e.vtag,i,...e.vchildren||[])}const t=H(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},$=(e,t)=>e!=null&&!_(e)?t&4?e==="false"?!1:e===""||!!e:t&2?parseFloat(e):t&1?String(e):e:e,b=(e,t,i)=>{const n=x.ce(t,i);return e.dispatchEvent(n),n},d=new WeakMap,v=(e,t,i)=>{let n=Q.get(e);it&&i?(n=n||new CSSStyleSheet,typeof n=="string"?n=t:n.replaceSync(t)):n=t,Q.set(e,n)},L=(e,t,i)=>{var n;const s=ue(t),o=Q.get(s);if(e=e.nodeType===11?e:w,o)if(typeof o=="string"){e=e.head||e;let a=d.get(e),c;if(a||d.set(e,a=new Set),!a.has(s)){{c=w.createElement("style"),c.innerHTML=o;const r=(n=x.$nonce$)!==null&&n!==void 0?n:z(w);r!=null&&c.setAttribute("nonce",r),e.insertBefore(c,e.querySelector("link"))}t.$flags$&4&&(c.innerHTML+=M),a&&a.add(s)}}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return s},Oe=e=>{const t=e.$cmpMeta$,i=e.$hostElement$,n=t.$flags$,s=h("attachStyles",t.$tagName$),o=L(i.shadowRoot?i.shadowRoot:i.getRootNode(),t);n&10&&(i["s-sc"]=o,i.classList.add(o+"-h")),s()},ue=(e,t)=>"sc-"+e.$tagName$,de=(e,t,i,n,s,o)=>{if(i!==n){let a=ke(e,t),c=t.toLowerCase();if(t==="class"){const r=e.classList,u=fe(i),p=fe(n);r.remove(...u.filter(f=>f&&!p.includes(f))),r.add(...p.filter(f=>f&&!u.includes(f)))}else if(t==="style"){for(const r in i)(!n||n[r]==null)&&(r.includes("-")?e.style.removeProperty(r):e.style[r]="");for(const r in n)(!i||n[r]!==i[r])&&(r.includes("-")?e.style.setProperty(r,n[r]):e.style[r]=n[r])}else if(t!=="key")if(!a&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):ke(Z,c)?t=c.slice(2):t=c[2]+t.slice(3),i||n){const r=t.endsWith(pe);t=t.replace(Ae,""),i&&x.rel(e,t,i,r),n&&x.ael(e,t,n,r)}}else{const r=_(n);if((a||r&&n!==null)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const u=n??"";t==="list"?a=!1:(i==null||e[t]!=u)&&(e[t]=u)}}catch{}n==null||n===!1?(n!==!1||e.getAttribute(t)==="")&&e.removeAttribute(t):(!a||o&4||s)&&!r&&(n=n===!0?"":n,e.setAttribute(t,n))}}},ze=/\s/,fe=e=>e?e.split(ze):[],pe="Capture",Ae=new RegExp(pe+"$"),he=(e,t,i,n)=>{const s=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,o=e&&e.$attrs$||F,a=t.$attrs$||F;for(n in o)n in a||de(s,n,o[n],void 0,i,t.$flags$);for(n in a)de(s,n,o[n],a[n],i,t.$flags$)},G=(e,t,i,n)=>{const s=t.$children$[i];let o=0,a,c;if(s.$text$!==null)a=s.$elm$=w.createTextNode(s.$text$);else if(a=s.$elm$=w.createElement(s.$tag$),he(null,s,B),J(j)&&a["s-si"]!==j&&a.classList.add(a["s-si"]=j),s.$children$)for(o=0;o<s.$children$.length;++o)c=G(e,s,o),c&&a.appendChild(c);return a["s-hn"]=C,a},$e=(e,t,i,n,s,o)=>{let a=e,c;for(a.shadowRoot&&a.tagName===C&&(a=a.shadowRoot);s<=o;++s)n[s]&&(c=G(null,i,s),c&&(n[s].$elm$=c,a.insertBefore(c,t)))},ge=(e,t,i)=>{for(let n=t;n<=i;++n){const s=e[n];if(s){const o=s.$elm$;o&&o.remove()}}},Me=(e,t,i,n,s=!1)=>{let o=0,a=0,c=0,r=0,u=t.length-1,p=t[0],f=t[u],k=n.length-1,m=n[0],y=n[k],S,E;for(;o<=u&&a<=k;)if(p==null)p=t[++o];else if(f==null)f=t[--u];else if(m==null)m=n[++a];else if(y==null)y=n[--k];else if(K(p,m,s))R(p,m,s),p=t[++o],m=n[++a];else if(K(f,y,s))R(f,y,s),f=t[--u],y=n[--k];else if(K(p,y,s))R(p,y,s),e.insertBefore(p.$elm$,f.$elm$.nextSibling),p=t[++o],y=n[--k];else if(K(f,m,s))R(f,m,s),e.insertBefore(f.$elm$,p.$elm$),f=t[--u],m=n[++a];else{for(c=-1,r=o;r<=u;++r)if(t[r]&&t[r].$key$!==null&&t[r].$key$===m.$key$){c=r;break}c>=0?(E=t[c],E.$tag$!==m.$tag$?S=G(t&&t[a],i,c):(R(E,m,s),t[c]=void 0,S=E.$elm$),m=n[++a]):(S=G(t&&t[a],i,a),m=n[++a]),S&&p.$elm$.parentNode.insertBefore(S,p.$elm$)}o>u?$e(e,n[k+1]==null?null:n[k+1].$elm$,i,n,a,k):a>k&&ge(t,o,u)},K=(e,t,i=!1)=>e.$tag$===t.$tag$?i?!0:e.$key$===t.$key$:!1,R=(e,t,i=!1)=>{const n=t.$elm$=e.$elm$,s=e.$children$,o=t.$children$,a=t.$text$;a===null?(he(e,t,B),s!==null&&o!==null?Me(n,s,t,o,i):o!==null?(e.$text$!==null&&(n.textContent=""),$e(n,null,t,o,0,o.length-1)):s!==null&&ge(s,0,s.length-1)):e.$text$!==a&&(n.data=a)},De=(e,t,i=!1)=>{const n=e.$hostElement$,s=e.$vnode$||H(null,null),o=ie(t)?t:D(null,null,t);if(C=n.tagName,i&&o.$attrs$)for(const a of Object.keys(o.$attrs$))n.hasAttribute(a)&&!["key","ref","style","class"].includes(a)&&(o.$attrs$[a]=n[a]);o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=s.$elm$=n.shadowRoot||n,j=n["s-sc"],R(s,o,i)},me=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(i=>e.$onRenderResolve$=i))},se=(e,t)=>{if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}return me(e,e.$ancestorComponent$),at(()=>Ue(e,t))},Ue=(e,t)=>{const i=h("scheduleUpdate",e.$cmpMeta$.$tagName$),n=e.$lazyInstance$;let s;return t&&(s=Ne(n,"componentWillLoad")),i(),qe(s,()=>Fe(e,n,t))},qe=(e,t)=>Ie(e)?e.then(t):t(),Ie=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",Fe=async(e,t,i)=>{var n;const s=e.$hostElement$,o=h("update",e.$cmpMeta$.$tagName$),a=s["s-rc"];i&&Oe(e);const c=h("render",e.$cmpMeta$.$tagName$);He(e,t,s,i),a&&(a.map(r=>r()),s["s-rc"]=void 0),c(),o();{const r=(n=s["s-p"])!==null&&n!==void 0?n:[],u=()=>Re(e);r.length===0?u():(Promise.all(r).then(u),e.$flags$|=4,r.length=0)}},He=(e,t,i,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,De(e,t,n)}catch(s){W(s,e.$hostElement$)}return null},Re=e=>{const t=e.$cmpMeta$.$tagName$,i=e.$hostElement$,n=h("postUpdate",t),s=e.$ancestorComponent$;e.$flags$&64?n():(e.$flags$|=64,ve(i),n(),e.$onReadyResolve$(i),s||ye()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&re(()=>se(e,!1)),e.$flags$&=-517},ye=e=>{ve(w.documentElement),re(()=>b(Z,"appload",{detail:{namespace:g}}))},Ne=(e,t,i)=>{if(e&&e[t])try{return e[t](i)}catch(n){W(n)}},ve=e=>e.classList.add("hydrated"),We=(e,t)=>N(e).$instanceValues$.get(t),Je=(e,t,i,n)=>{const s=N(e),o=s.$instanceValues$.get(t),a=s.$flags$,c=s.$lazyInstance$;i=$(i,n.$members$[t][0]);const r=Number.isNaN(o)&&Number.isNaN(i),u=i!==o&&!r;(!(a&8)||o===void 0)&&u&&(s.$instanceValues$.set(t,i),c&&(a&18)===2&&se(s,!1))},xe=(e,t,i)=>{var n;const s=e.prototype;if(t.$members$){const o=Object.entries(t.$members$);if(o.map(([a,[c]])=>{(c&31||i&2&&c&32)&&Object.defineProperty(s,a,{get(){return We(this,a)},set(r){Je(this,a,r,t)},configurable:!0,enumerable:!0})}),i&1){const a=new Map;s.attributeChangedCallback=function(c,r,u){x.jmp(()=>{var p;const f=a.get(c);if(this.hasOwnProperty(f))u=this[f],delete this[f];else{if(s.hasOwnProperty(f)&&typeof this[f]=="number"&&this[f]==u)return;if(f==null){const k=N(this),m=k==null?void 0:k.$flags$;if(m&&!(m&8)&&m&128&&u!==r){const y=k.$lazyInstance$,S=(p=t.$watchers$)===null||p===void 0?void 0:p[c];S==null||S.forEach(E=>{y[E]!=null&&y[E].call(y,u,r,c)})}return}}this[f]=u===null&&typeof this[f]=="boolean"?!1:u})},e.observedAttributes=Array.from(new Set([...Object.keys((n=t.$watchers$)!==null&&n!==void 0?n:{}),...o.filter(([c,r])=>r[0]&15).map(([c,r])=>{const u=r[1]||c;return a.set(u,c),u})]))}}return e},Xe=async(e,t,i,n)=>{let s;if(!(t.$flags$&32)){t.$flags$|=32;{if(s=nt(i),s.then){const r=q();s=await s,r()}s.isProxied||(xe(s,i,2),s.isProxied=!0);const c=h("createInstance",i.$tagName$);t.$flags$|=8;try{new s(t)}catch(r){W(r)}t.$flags$&=-9,c()}if(s.style){let c=s.style;const r=ue(i);if(!Q.has(r)){const u=h("registerStyles",i.$tagName$);v(r,c,!!(i.$flags$&1)),u()}}}const o=t.$ancestorComponent$,a=()=>se(t,!0);o&&o["s-rc"]?o["s-rc"].push(a):a()},Ye=e=>{},Ge=e=>{if(!(x.$flags$&1)){const t=N(e),i=t.$cmpMeta$,n=h("connectedCallback",i.$tagName$);if(t.$flags$&1)t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Ye());else{t.$flags$|=1;{let s=e;for(;s=s.parentNode||s.host;)if(s["s-p"]){me(t,t.$ancestorComponent$=s);break}}i.$members$&&Object.entries(i.$members$).map(([s,[o]])=>{if(o&31&&e.hasOwnProperty(s)){const a=e[s];delete e[s],e[s]=a}}),Xe(e,t,i)}n()}},Ke=e=>{},Qe=async e=>{if(!(x.$flags$&1)){const t=N(e);t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Ke())}},Ze=(e,t={})=>{var i;const n=h(),s=[],o=t.exclude||[],a=Z.customElements,c=w.head,r=c.querySelector("meta[charset]"),u=w.createElement("style"),p=[];let f,k=!0;Object.assign(x,t),x.$resourcesUrl$=new URL(t.resourcesUrl||"./",w.baseURI).href;let m=!1;if(e.map(y=>{y[1].map(S=>{const E={$flags$:S[0],$tagName$:S[1],$members$:S[2],$listeners$:S[3]};E.$flags$&4&&(m=!0),E.$members$=S[2];const V=E.$tagName$,ot=class extends HTMLElement{constructor(ee){super(ee),ee=this,tt(ee,E),E.$flags$&1&&ee.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),k?p.push(this):x.jmp(()=>Ge(this))}disconnectedCallback(){x.jmp(()=>Qe(this))}componentOnReady(){return N(this).$onReadyPromise$}};E.$lazyBundleId$=y[0],!o.includes(V)&&!a.get(V)&&(s.push(V),a.define(V,xe(ot,E,1)))})}),m&&(u.innerHTML+=M),u.innerHTML+=s+O,u.innerHTML.length){u.setAttribute("data-styles","");const y=(i=x.$nonce$)!==null&&i!==void 0?i:z(w);y!=null&&u.setAttribute("nonce",y),c.insertBefore(u,r?r.nextSibling:c.firstChild)}k=!1,p.length?p.map(y=>y.connectedCallback()):x.jmp(()=>f=setTimeout(ye,30)),n()},Ve=e=>x.$nonce$=e,ae=new WeakMap,N=e=>ae.get(e),et=(e,t)=>ae.set(t.$lazyInstance$=e,t),tt=(e,t)=>{const i={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return i.$onReadyPromise$=new Promise(n=>i.$onReadyResolve$=n),e["s-p"]=[],e["s-rc"]=[],ae.set(e,i)},ke=(e,t)=>t in e,W=(e,t)=>(0,console.error)(e,t),oe=new Map,nt=(e,t,i)=>{const n=e.$tagName$.replace(/-/g,"_"),s=e.$lazyBundleId$,o=oe.get(s);if(o)return o[n];{const a=c=>(oe.set(s,c),c[n]);switch(s){case"bilibili-bangumi.cjs":return Promise.resolve().then(function(){return l(mt())}).then(a,W)}}return Promise.resolve().then(function(){return l(gt(`./${s}.entry.js`))}).then(a=>(oe.set(s,a),a[n]),W)},Q=new Map,Z=typeof window<"u"?window:{},w=Z.document||{head:{}},x={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,i,n)=>e.addEventListener(t,i,n),rel:(e,t,i,n)=>e.removeEventListener(t,i,n),ce:(e,t)=>new CustomEvent(e,t)},Se=e=>Promise.resolve(e),it=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),Ee=[],je=[],st=(e,t)=>i=>{e.push(i),U||(U=!0,x.$flags$&4?re(le):x.raf(le))},Pe=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(i){W(i)}e.length=0},le=()=>{Pe(Ee),Pe(je),(U=Ee.length>0)&&x.raf(le)},re=e=>Se().then(e),at=st(je);return I.bootstrapLazy=Ze,I.h=D,I.promiseResolve=Se,I.registerInstance=et,I.setNonce=Ve,I}Object.defineProperty(ce,"__esModule",{value:!0});const Be=we(),yt=(l,g)=>{if(!(typeof window>"u"))return Be.bootstrapLazy([["bilibili-bangumi.cjs",[[1,"bilibili-bangumi",{api:[1],bilibiliUid:[1,"bilibili-uid"],bgmUid:[1,"bgm-uid"],bilibiliEnabled:[4,"bilibili-enabled"],bgmEnabled:[4,"bgm-enabled"],pageSize:[2,"page-size"],customEnabled:[4,"custom-enabled"],customLabel:[1,"custom-label"],loading:[32],error:[32],pageNumber:[32],responseData:[32],activePlatform:[32],activeSubject:[32],collectionLabels:[32],activeCollection:[32]}]]]],g)};ce.setNonce=Be.setNonce;var vt=ce.defineCustomElements=yt;function xt(){const l=rt();return ct(()=>{const g=l.value.addons["valaxy-addon-bangumi"].options;return g?{...g,bilibiliEnabled:g.bilibiliEnabled??!0,bgmEnabled:g.bgmEnabled??!0,pageSize:g.pageSize??15,customEnabled:g.customEnabled??!1,customLabel:g.customLabel??"自定义"}:(console.warn("`valaxy-addon-bangumi` options not found"),{api:""})})}const kt=["api","bgm-enabled","bgm-uid","bilibili-enabled","bilibili-uid","custom-enabled","custom-label","page-size"],St=bt({__name:"ValaxyBangumi",setup(l){vt();const g=ut(),j=xt(),{api:C,bgmEnabled:B,bgmUid:U,bilibiliEnabled:h,bilibiliUid:q,customCss:O,customEnabled:M,customLabel:F,pageSize:J}=j.value;return dt(()=>{var z,D;if(!O)return;const _=new CSSStyleSheet;_.replaceSync(O),(D=(z=g.value)==null?void 0:z.shadowRoot)==null||D.adoptedStyleSheets.push(_)}),(_,z)=>(Le(),ft("bilibili-bangumi",{ref_key:"bangumiRef",ref:g,api:A(C),"bgm-enabled":A(B),"bgm-uid":A(U),"bilibili-enabled":A(h),"bilibili-uid":A(q),"custom-enabled":A(M),"custom-label":A(F),"page-size":A(J)},null,8,kt))}}),wt={__name:"index",setup(l,{expose:g}){const j=JSON.parse('{"title":"Bangumi 追番列表","description":"Bangumi 追番列表","frontmatter":{"title":"Bangumi 追番列表","keywords":"Bangumi","description":"Bangumi 追番列表"},"headers":[],"relativePath":"pages/bangumi/index.md","path":"/home/runner/work/myp0402.github.io/myp0402.github.io/pages/bangumi/index.md","lastUpdated":1722344807000}'),C=pt(),B=j.frontmatter||{};return C.meta.frontmatter=Object.assign(C.meta.frontmatter||{},j.frontmatter||{}),Te("pageData",j),Te("valaxy:frontmatter",B),globalThis.$frontmatter=B,g({frontmatter:{title:"Bangumi 追番列表",keywords:"Bangumi",description:"Bangumi 追番列表"}}),(h,q)=>{const O=St,M=lt;return Le(),ht(M,{frontmatter:A(B)},{"main-content-md":P(()=>[$t(O)]),"main-header":P(()=>[T(h.$slots,"main-header")]),"main-header-after":P(()=>[T(h.$slots,"main-header-after")]),"main-nav":P(()=>[T(h.$slots,"main-nav")]),"main-content":P(()=>[T(h.$slots,"main-content")]),"main-content-after":P(()=>[T(h.$slots,"main-content-after")]),"main-nav-before":P(()=>[T(h.$slots,"main-nav-before")]),"main-nav-after":P(()=>[T(h.$slots,"main-nav-after")]),comment:P(()=>[T(h.$slots,"comment")]),footer:P(()=>[T(h.$slots,"footer")]),aside:P(()=>[T(h.$slots,"aside")]),"aside-custom":P(()=>[T(h.$slots,"aside-custom")]),default:P(()=>[T(h.$slots,"default")]),_:3},8,["frontmatter"])}}};export{wt as default};
