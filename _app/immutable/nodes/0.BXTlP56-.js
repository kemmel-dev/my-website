import{s as N,e as k,b as C,Y as me,p as _,q as st,i as O,n as j,d as v,l as ee,o as ze,Z as it,N as te,O as Se,f as T,_ as Ie,Q as ct,$ as lt,R as at,a0 as ft,S as ke,a1 as ut,a as A,g as D,h as I,W as dt,t as ht,c as pt,P as gt,T as mt,U as yt,V as bt}from"../chunks/scheduler.1PNv1XgL.js";import{S as H,i as V,b as R,d as B,m as Q,a as M,t as F,e as U}from"../chunks/index.BvIw15Sr.js";import{g as Re,e as Ce}from"../chunks/spread.CK8js_jb.js";import{b as ne}from"../chunks/paths.DeX7Kpfp.js";const vt=!0,Kn=Object.freeze(Object.defineProperty({__proto__:null,prerender:vt},Symbol.toStringTag,{value:"Module"}));function xt(e){let t,n=`&gt; 
    <div class="typewriter svelte-1qakhox">Quacky <span class="emoji svelte-1qakhox">🦆</span></div> <span class="caret svelte-1qakhox">_</span>`;return{c(){t=k("div"),t.innerHTML=n,this.h()},l(o){t=C(o,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),me(t)!=="svelte-z7kwtr"&&(t.innerHTML=n),this.h()},h(){_(t,"class","flex flex-row items-center"),st(t,"width","12ch")},m(o,r){O(o,t,r)},p:j,i:j,o:j,d(o){o&&v(t)}}}class wt extends H{constructor(t){super(),V(this,t,null,xt,N,{})}}const W=/^[a-z0-9]+(-[a-z0-9]+)*$/,oe=(e,t,n,o="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const c=r.pop(),l=r.pop(),a={provider:r.length>0?r[0]:o,prefix:l,name:c};return t&&!Z(a)?null:a}const s=r[0],i=s.split("-");if(i.length>1){const c={provider:o,prefix:i.shift(),name:i.join("-")};return t&&!Z(c)?null:c}if(n&&o===""){const c={provider:o,prefix:"",name:s};return t&&!Z(c,n)?null:c}return null},Z=(e,t)=>e?!!((e.provider===""||e.provider.match(W))&&(t&&e.prefix===""||e.prefix.match(W))&&e.name.match(W)):!1,Be=Object.freeze({left:0,top:0,width:16,height:16}),re=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),se=Object.freeze({...Be,...re}),ae=Object.freeze({...se,body:"",hidden:!1});function _t(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}function Ee(e,t){const n=_t(e,t);for(const o in ae)o in re?o in e&&!(o in n)&&(n[o]=re[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function St(e,t){const n=e.icons,o=e.aliases||Object.create(null),r=Object.create(null);function s(i){if(n[i])return r[i]=[];if(!(i in r)){r[i]=null;const c=o[i]&&o[i].parent,l=c&&s(c);l&&(r[i]=[c].concat(l))}return r[i]}return(t||Object.keys(n).concat(Object.keys(o))).forEach(s),r}function It(e,t,n){const o=e.icons,r=e.aliases||Object.create(null);let s={};function i(c){s=Ee(o[c]||r[c],s)}return i(t),n.forEach(i),Ee(e,s)}function Qe(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),n.push(r)});const o=St(e);for(const r in o){const s=o[r];s&&(t(r,It(e,r,s)),n.push(r))}return n}const kt={provider:"",aliases:{},not_found:{},...Be};function ce(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ue(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!ce(e,kt))return null;const n=t.icons;for(const r in n){const s=n[r];if(!r.match(W)||typeof s.body!="string"||!ce(s,ae))return null}const o=t.aliases||Object.create(null);for(const r in o){const s=o[r],i=s.parent;if(!r.match(W)||typeof i!="string"||!n[i]&&!o[i]||!ce(s,ae))return null}return t}const Te=Object.create(null);function Ct(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function L(e,t){const n=Te[e]||(Te[e]=Object.create(null));return n[t]||(n[t]=Ct(e,t))}function ye(e,t){return Ue(t)?Qe(t,(n,o)=>{o?e.icons[n]=o:e.missing.add(n)}):[]}function Et(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let G=!1;function We(e){return typeof e=="boolean"&&(G=e),G}function Tt(e){const t=typeof e=="string"?oe(e,!0,G):e;if(t){const n=L(t.provider,t.prefix),o=t.name;return n.icons[o]||(n.missing.has(o)?null:void 0)}}function jt(e,t){const n=oe(e,!0,G);if(!n)return!1;const o=L(n.provider,n.prefix);return Et(o,n.name,t)}function Ot(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),G&&!t&&!e.prefix){let r=!1;return Ue(e)&&(e.prefix="",Qe(e,(s,i)=>{i&&jt(s,i)&&(r=!0)})),r}const n=e.prefix;if(!Z({provider:t,prefix:n,name:"a"}))return!1;const o=L(t,n);return!!ye(o,e)}const Ge=Object.freeze({width:null,height:null}),Ke=Object.freeze({...Ge,...re}),Pt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,$t=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function je(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const o=e.split(Pt);if(o===null||!o.length)return e;const r=[];let s=o.shift(),i=$t.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?r.push(s):r.push(Math.ceil(c*t*n)/n)}else r.push(s);if(s=o.shift(),s===void 0)return r.join("");i=!i}}function Lt(e,t="defs"){let n="";const o=e.indexOf("<"+t);for(;o>=0;){const r=e.indexOf(">",o),s=e.indexOf("</"+t);if(r===-1||s===-1)break;const i=e.indexOf(">",s);if(i===-1)break;n+=e.slice(r+1,s).trim(),e=e.slice(0,o).trim()+e.slice(i+1)}return{defs:n,content:e}}function Mt(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ft(e,t,n){const o=Lt(e);return Mt(o.defs,t+o.content+n)}const At=e=>e==="unset"||e==="undefined"||e==="none";function Dt(e,t){const n={...se,...e},o={...Ke,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,o].forEach(x=>{const p=[],y=x.hFlip,m=x.vFlip;let S=x.rotate;y?m?S+=2:(p.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),p.push("scale(-1 1)"),r.top=r.left=0):m&&(p.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),p.push("scale(1 -1)"),r.top=r.left=0);let w;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:w=r.height/2+r.top,p.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:p.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:w=r.width/2+r.left,p.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}S%2===1&&(r.left!==r.top&&(w=r.left,r.left=r.top,r.top=w),r.width!==r.height&&(w=r.width,r.width=r.height,r.height=w)),p.length&&(s=Ft(s,'<g transform="'+p.join(" ")+'">',"</g>"))});const i=o.width,c=o.height,l=r.width,a=r.height;let f,d;i===null?(d=c===null?"1em":c==="auto"?a:c,f=je(d,l/a)):(f=i==="auto"?l:i,d=c===null?je(f,a/l):c==="auto"?a:c);const u={},h=(x,p)=>{At(p)||(u[x]=p.toString())};h("width",f),h("height",d);const g=[r.left,r.top,l,a];return u.viewBox=g.join(" "),{attributes:u,viewBox:g,body:s}}const Nt=/\sid="(\S+)"/g,Ht="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Vt=0;function qt(e,t=Ht){const n=[];let o;for(;o=Nt.exec(e);)n.push(o[1]);if(!n.length)return e;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(Vt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}const fe=Object.create(null);function zt(e,t){fe[e]=t}function ue(e){return fe[e]||fe[""]}function be(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ve=Object.create(null),z=["https://api.simplesvg.com","https://api.unisvg.com"],X=[];for(;z.length>0;)z.length===1||Math.random()>.5?X.push(z.shift()):X.push(z.pop());ve[""]=be({resources:["https://api.iconify.design"].concat(X)});function Rt(e,t){const n=be(t);return n===null?!1:(ve[e]=n,!0)}function xe(e){return ve[e]}const Bt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Oe=Bt();function Qt(e,t){const n=xe(e);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let r=0;n.resources.forEach(i=>{r=Math.max(r,i.length)});const s=t+".json?icons=";o=n.maxURL-r-n.path.length-s.length}return o}function Ut(e){return e===404}const Wt=(e,t,n)=>{const o=[],r=Qt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=r&&a>0&&(o.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),o.push(i),o};function Gt(e){if(typeof e=="string"){const t=xe(e);if(t)return t.path}return"/"}const Kt=(e,t,n)=>{if(!Oe){n("abort",424);return}let o=Gt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});o+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;o+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;Oe(e+o).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Ut(i)?"abort":"next",i)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},Jt={prepare:Wt,send:Kt};function Yt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let o={provider:"",prefix:"",name:""};return e.forEach(r=>{if(o.name===r.name&&o.prefix===r.prefix&&o.provider===r.provider)return;o=r;const s=r.provider,i=r.prefix,c=r.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=L(s,i));let f;c in a.icons?f=t.loaded:i===""||a.missing.has(c)?f=t.missing:f=t.pending;const d={provider:s,prefix:i,name:c};f.push(d)}),t}function Je(e,t){e.forEach(n=>{const o=n.loaderCallbacks;o&&(n.loaderCallbacks=o.filter(r=>r.id!==t))})}function Zt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==r)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:o,prefix:r,name:a});else if(e.missing.has(a))i.missing.push({provider:o,prefix:r,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Je([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Xt=0;function en(e,t,n){const o=Xt++,r=Je.bind(null,n,o);if(!t.pending.length)return r;const s={id:o,icons:t,callback:e,abort:r};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),r}function tn(e,t=!0,n=!1){const o=[];return e.forEach(r=>{const s=typeof r=="string"?oe(r,t,n):r;s&&o.push(s)}),o}var nn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function rn(e,t,n,o){const r=e.resources.length,s=e.random?Math.floor(Math.random()*r):e.index;let i;if(e.random){let b=e.resources.slice(0);for(i=[];b.length>1;){const E=Math.floor(Math.random()*b.length);i.push(b[E]),b=b.slice(0,E).concat(b.slice(E+1))}i=i.concat(b)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,f,d=null,u=[],h=[];typeof o=="function"&&h.push(o);function g(){d&&(clearTimeout(d),d=null)}function x(){l==="pending"&&(l="aborted"),g(),u.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),u=[]}function p(b,E){E&&(h=[]),typeof b=="function"&&h.push(b)}function y(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:u.length,subscribe:p,abort:x}}function m(){l="failed",h.forEach(b=>{b(void 0,f)})}function S(){u.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),u=[]}function w(b,E,q){const J=E!=="success";switch(u=u.filter($=>$!==b),l){case"pending":break;case"failed":if(J||!e.dataAfterTimeout)return;break;default:return}if(E==="abort"){f=q,m();return}if(J){f=q,u.length||(i.length?P():m());return}if(g(),S(),!e.random){const $=e.resources.indexOf(b.resource);$!==-1&&$!==e.index&&(e.index=$)}l="completed",h.forEach($=>{$(q)})}function P(){if(l!=="pending")return;g();const b=i.shift();if(b===void 0){if(u.length){d=setTimeout(()=>{g(),l==="pending"&&(S(),m())},e.timeout);return}m();return}const E={status:"pending",resource:b,callback:(q,J)=>{w(E,q,J)}};u.push(E),a++,d=setTimeout(P,e.rotate),n(b,t,E.callback)}return setTimeout(P),y}function Ye(e){const t={...nn,...e};let n=[];function o(){n=n.filter(c=>c().status==="pending")}function r(c,l,a){const f=rn(t,c,l,(d,u)=>{o(),a&&a(d,u)});return n.push(f),f}function s(c){return n.find(l=>c(l))||null}return{query:r,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:o}}function Pe(){}const le=Object.create(null);function on(e){if(!le[e]){const t=xe(e);if(!t)return;const n=Ye(t),o={config:t,redundancy:n};le[e]=o}return le[e]}function sn(e,t,n){let o,r;if(typeof e=="string"){const s=ue(e);if(!s)return n(void 0,424),Pe;r=s.send;const i=on(e);i&&(o=i.redundancy)}else{const s=be(e);if(s){o=Ye(s);const i=e.resources?e.resources[0]:"",c=ue(i);c&&(r=c.send)}}return!o||!r?(n(void 0,424),Pe):o.query(t,r,n)().abort}const $e="iconify2",K="iconify",Ze=K+"-count",Le=K+"-version",Xe=36e5,cn=168,ln=50;function de(e,t){try{return e.getItem(t)}catch{}}function we(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Me(e,t){try{e.removeItem(t)}catch{}}function he(e,t){return we(e,Ze,t.toString())}function pe(e){return parseInt(de(e,Ze))||0}const ie={local:!0,session:!0},et={local:new Set,session:new Set};let _e=!1;function an(e){_e=e}let Y=typeof window>"u"?{}:window;function tt(e){const t=e+"Storage";try{if(Y&&Y[t]&&typeof Y[t].length=="number")return Y[t]}catch{}ie[e]=!1}function nt(e,t){const n=tt(e);if(!n)return;const o=de(n,Le);if(o!==$e){if(o){const c=pe(n);for(let l=0;l<c;l++)Me(n,K+l.toString())}we(n,Le,$e),he(n,0);return}const r=Math.floor(Date.now()/Xe)-cn,s=c=>{const l=K+c.toString(),a=de(n,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>r&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}Me(n,l)}};let i=pe(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,he(n,i)):et[e].add(c))}function rt(){if(!_e){an(!0);for(const e in ie)nt(e,t=>{const n=t.data,o=t.provider,r=n.prefix,s=L(o,r);if(!ye(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function fn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const o in ie)nt(o,r=>{const s=r.data;return r.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function un(e,t){_e||rt();function n(o){let r;if(!ie[o]||!(r=tt(o)))return;const s=et[o];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=pe(r),i>=ln||!he(r,i+1))return;const c={cached:Math.floor(Date.now()/Xe),provider:e.provider,data:t};return we(r,K+i.toString(),JSON.stringify(c))}t.lastModified&&!fn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Fe(){}function dn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Zt(e)}))}function hn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:o}=e,r=e.iconsToLoad;delete e.iconsToLoad;let s;if(!r||!(s=ue(n)))return;s.prepare(n,o,r).forEach(c=>{sn(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=ye(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(d=>{f.delete(d)}),un(e,l)}catch(a){console.error(a)}dn(e)})})}))}const pn=(e,t)=>{const n=tn(e,!0,We()),o=Yt(n);if(!o.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(o.loaded,o.missing,o.pending,Fe)}),()=>{l=!1}}const r=Object.create(null),s=[];let i,c;return o.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,s.push(L(a,f));const d=r[a]||(r[a]=Object.create(null));d[f]||(d[f]=[])}),o.pending.forEach(l=>{const{provider:a,prefix:f,name:d}=l,u=L(a,f),h=u.pendingIcons||(u.pendingIcons=new Set);h.has(d)||(h.add(d),r[a][f].push(d))}),s.forEach(l=>{const{provider:a,prefix:f}=l;r[a][f].length&&hn(l,r[a][f])}),t?en(t,o,s):Fe};function gn(e,t){const n={...e};for(const o in t){const r=t[o],s=typeof r;o in Ge?(r===null||r&&(s==="string"||s==="number"))&&(n[o]=r):s===typeof n[o]&&(n[o]=o==="rotate"?r%4:r)}return n}const mn=/[\s,]+/;function yn(e,t){t.split(mn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function bn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(e);return isNaN(r)?0:o(r)}else if(n!==e){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?o(s):0)}}return t}function vn(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)n+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function xn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function wn(e){return"data:image/svg+xml,"+xn(e)}function _n(e){return'url("'+wn(e)+'")'}const Ae={...Ke,inline:!1},Sn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},In={display:"inline-block"},ge={"background-color":"currentColor"},ot={"background-color":"transparent"},De={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ne={"-webkit-mask":ge,mask:ge,background:ot};for(const e in Ne){const t=Ne[e];for(const n in De)t[e+"-"+n]=De[n]}function kn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Cn(e,t){const n=gn(Ae,t),o=t.mode||"svg",r=o==="svg"?{...Sn}:{};e.body.indexOf("xlink:")===-1&&delete r["xmlns:xlink"];let s=typeof t.style=="string"?t.style:"";for(let y in t){const m=t[y];if(m!==void 0)switch(y){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[y]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&yn(n,m);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+m+"; ";break;case"rotate":typeof m=="string"?n[y]=bn(m):typeof m=="number"&&(n[y]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete r["aria-hidden"];break;default:if(y.slice(0,3)==="on:")break;Ae[y]===void 0&&(r[y]=m)}}const i=Dt(e,n),c=i.attributes;if(n.inline&&(s="vertical-align: -0.125em; "+s),o==="svg"){Object.assign(r,c),s!==""&&(r.style=s);let y=0,m=t.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),{svg:!0,attributes:r,body:qt(i.body,m?()=>m+"ID"+y++:"iconifySvelte")}}const{body:l,width:a,height:f}=e,d=o==="mask"||(o==="bg"?!1:l.indexOf("currentColor")!==-1),u=vn(l,{...c,width:a+"",height:f+""}),g={"--svg":_n(u)},x=y=>{const m=c[y];m&&(g[y]=kn(m))};x("width"),x("height"),Object.assign(g,In,d?ge:ot);let p="";for(const y in g)p+=y+": "+g[y]+";";return r.style=p+s,{svg:!1,attributes:r}}We(!0);zt("",Jt);if(typeof document<"u"&&typeof window<"u"){rt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Ot(o))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const o="IconifyProviders["+n+"] is invalid.";try{const r=t[n];if(typeof r!="object"||!r||r.resources===void 0)continue;Rt(n,r)||console.error(o)}catch{console.error(o)}}}}function En(e,t,n,o,r){function s(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",s(),{data:{...se,...e}};let i;if(typeof e!="string"||(i=oe(e,!1,!0))===null)return s(),null;const c=Tt(i);if(!c)return n&&(!t.loading||t.loading.name!==e)&&(s(),t.name="",t.loading={name:e,abort:pn([i],o)}),null;s(),t.name!==e&&(t.name=e,r&&!t.destroyed&&r(e));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:c,classes:l}}function Tn(e,t){return e?Cn({...se,...e},t):null}function He(e){let t;function n(s,i){return s[0].svg?On:jn}let o=n(e),r=o(e);return{c(){r.c(),t=ee()},l(s){r.l(s),t=ee()},m(s,i){r.m(s,i),O(s,t,i)},p(s,i){o===(o=n(s))&&r?r.p(s,i):(r.d(1),r=o(s),r&&(r.c(),r.m(t.parentNode,t)))},d(s){s&&v(t),r.d(s)}}}function jn(e){let t,n=[e[0].attributes],o={};for(let r=0;r<n.length;r+=1)o=te(o,n[r]);return{c(){t=k("span"),this.h()},l(r){t=C(r,"SPAN",{}),T(t).forEach(v),this.h()},h(){Ie(t,o)},m(r,s){O(r,t,s)},p(r,s){Ie(t,o=Re(n,[s&1&&r[0].attributes]))},d(r){r&&v(t)}}}function On(e){let t,n,o=e[0].body+"",r=[e[0].attributes],s={};for(let i=0;i<r.length;i+=1)s=te(s,r[i]);return{c(){t=ct("svg"),n=new lt(!0),this.h()},l(i){t=at(i,"svg",{});var c=T(t);n=ft(c,!0),c.forEach(v),this.h()},h(){n.a=null,ke(t,s)},m(i,c){O(i,t,c),n.m(o,t)},p(i,c){c&1&&o!==(o=i[0].body+"")&&n.p(o),ke(t,s=Re(r,[c&1&&i[0].attributes]))},d(i){i&&v(t)}}}function Pn(e){let t,n=e[0]&&He(e);return{c(){n&&n.c(),t=ee()},l(o){n&&n.l(o),t=ee()},m(o,r){n&&n.m(o,r),O(o,t,r)},p(o,[r]){o[0]?n?n.p(o,r):(n=He(o),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:j,o:j,d(o){o&&v(t),n&&n.d(o)}}}function $n(e,t,n){const o={name:"",loading:null,destroyed:!1};let r=!1,s=0,i;const c=a=>{typeof t.onLoad=="function"&&t.onLoad(a),ut()("load",{icon:a})};function l(){n(3,s++,s)}return ze(()=>{n(2,r=!0)}),it(()=>{n(1,o.destroyed=!0,o),o.loading&&(o.loading.abort(),n(1,o.loading=null,o))}),e.$$set=a=>{n(6,t=te(te({},t),Se(a)))},e.$$.update=()=>{{const a=En(t.icon,o,r,l,c);n(0,i=a?Tn(a.data,t):null),i&&a.classes&&n(0,i.attributes.class=(typeof t.class=="string"?t.class+" ":"")+a.classes.join(" "),i)}},t=Se(t),[i,o,r,s]}class Ln extends H{constructor(t){super(),V(this,t,$n,Pn,N,{})}}function Ve(e,t,n){const o=e.slice();return o[1]=t[n],o}function qe(e){let t,n,o=e[1].name+"",r,s;return{c(){t=k("div"),n=k("a"),r=ht(o),s=A(),this.h()},l(i){t=C(i,"DIV",{});var c=T(t);n=C(c,"A",{href:!0,class:!0});var l=T(n);r=pt(l,o),l.forEach(v),s=D(c),c.forEach(v),this.h()},h(){_(n,"href",""+(ne+e[1].href)),_(n,"class","p-2 hover:text-accent")},m(i,c){O(i,t,c),I(t,n),I(n,r),I(t,s)},p:j,d(i){i&&v(t)}}}function Mn(e){let t,n,o,r,s,i,c,l,a,f,d;r=new wt({});let u=Ce(e[0]),h=[];for(let g=0;g<u.length;g+=1)h[g]=qe(Ve(e,u,g));return f=new Ln({props:{icon:"charm:search",width:"32"}}),{c(){t=k("nav"),n=k("div"),o=k("a"),R(r.$$.fragment),s=A(),i=k("div");for(let g=0;g<h.length;g+=1)h[g].c();c=A(),l=k("div"),a=k("a"),R(f.$$.fragment),this.h()},l(g){t=C(g,"NAV",{class:!0});var x=T(t);n=C(x,"DIV",{class:!0});var p=T(n);o=C(p,"A",{class:!0,href:!0});var y=T(o);B(r.$$.fragment,y),y.forEach(v),s=D(p),i=C(p,"DIV",{class:!0});var m=T(i);for(let P=0;P<h.length;P+=1)h[P].l(m);m.forEach(v),c=D(p),l=C(p,"DIV",{});var S=T(l);a=C(S,"A",{href:!0,class:!0});var w=T(a);B(f.$$.fragment,w),w.forEach(v),S.forEach(v),p.forEach(v),x.forEach(v),this.h()},h(){_(o,"class","text-3xl"),_(o,"href",ne+"/"),_(i,"class","flex mt-8 duration-500 divide-x-2 lg:mt-0 lg:justify-center"),_(a,"href",ne),_(a,"class","absolute duration-500 right-4 top-4 xs:top-12 lg:relative lg:right-auto lg:top-auto lg:float-right"),_(n,"class","grid items-center grid-cols-1 duration-500 max-w-screen-3xl grow lg:grid-cols-3"),_(t,"class","flex justify-center w-full h-32 p-4 duration-500 bg-white shadow-xl lg:h-16")},m(g,x){O(g,t,x),I(t,n),I(n,o),Q(r,o,null),I(n,s),I(n,i);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(i,null);I(n,c),I(n,l),I(l,a),Q(f,a,null),d=!0},p(g,[x]){if(x&1){u=Ce(g[0]);let p;for(p=0;p<u.length;p+=1){const y=Ve(g,u,p);h[p]?h[p].p(y,x):(h[p]=qe(y),h[p].c(),h[p].m(i,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=u.length}},i(g){d||(M(r.$$.fragment,g),M(f.$$.fragment,g),d=!0)},o(g){F(r.$$.fragment,g),F(f.$$.fragment,g),d=!1},d(g){g&&v(t),U(r),dt(h,g),U(f)}}}function Fn(e){return console.log(ne),[[{name:"Home",href:"/"},{name:"Blog",href:"/"},{name:"Projects",href:"/projects"},{name:"About",href:"/about"}]]}class An extends H{constructor(t){super(),V(this,t,Fn,Mn,N,{})}}function Dn(e){let t,n='<div class="bottom-0 flex flex-row justify-center w-full h-16 py-4 space-x-4 bg-white shadow-t-xl"></div>';return{c(){t=k("footer"),t.innerHTML=n},l(o){t=C(o,"FOOTER",{"data-svelte-h":!0}),me(t)!=="svelte-1qzq59x"&&(t.innerHTML=n)},m(o,r){O(o,t,r)},p:j,i:j,o:j,d(o){o&&v(t)}}}class Nn extends H{constructor(t){super(),V(this,t,null,Dn,N,{})}}function Hn(e){let t,n='<div id="progress" class="w-0 h-full bg-primary"></div>';return{c(){t=k("div"),t.innerHTML=n,this.h()},l(o){t=C(o,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),me(t)!=="svelte-17azybf"&&(t.innerHTML=n),this.h()},h(){_(t,"id","progress-bar"),_(t,"class","w-full h-[8px] bg-secondary")},m(o,r){O(o,t,r)},p:j,i:j,o:j,d(o){o&&v(t)}}}function Vn(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function qn(e){let t,n,o;ze(()=>{t=document.querySelector("#content"),n=document.querySelector("#progress-bar"),o=document.querySelector("#progress"),window.addEventListener("resize",function(){r(),s()}),window.addEventListener("load",function(){r()}),t.addEventListener("scroll",function(){s()})});function r(){Vn(t)?n.style.visibility="visible":n.style.visibility="hidden"}function s(){o.style.width=`${t.scrollTop/(t.scrollHeight-t.clientHeight)*100}%`}return[]}class zn extends H{constructor(t){super(),V(this,t,qn,Hn,N,{})}}function Rn(e){let t,n,o,r,s,i,c,l,a;n=new An({}),r=new zn({});const f=e[1].default,d=gt(f,e,e[0],null);return l=new Nn({}),{c(){t=k("div"),R(n.$$.fragment),o=A(),R(r.$$.fragment),s=A(),i=k("div"),d&&d.c(),c=A(),R(l.$$.fragment),this.h()},l(u){t=C(u,"DIV",{class:!0});var h=T(t);B(n.$$.fragment,h),o=D(h),B(r.$$.fragment,h),s=D(h),i=C(h,"DIV",{id:!0,class:!0});var g=T(i);d&&d.l(g),g.forEach(v),c=D(h),B(l.$$.fragment,h),h.forEach(v),this.h()},h(){_(i,"id","content"),_(i,"class","flex-grow h-0 overflow-x-hidden overflow-y-auto"),_(t,"class","flex flex-col min-h-screen bg-background text-text font-nerd")},m(u,h){O(u,t,h),Q(n,t,null),I(t,o),Q(r,t,null),I(t,s),I(t,i),d&&d.m(i,null),I(t,c),Q(l,t,null),a=!0},p(u,[h]){d&&d.p&&(!a||h&1)&&mt(d,f,u,u[0],a?bt(f,u[0],h,null):yt(u[0]),null)},i(u){a||(M(n.$$.fragment,u),M(r.$$.fragment,u),M(d,u),M(l.$$.fragment,u),a=!0)},o(u){F(n.$$.fragment,u),F(r.$$.fragment,u),F(d,u),F(l.$$.fragment,u),a=!1},d(u){u&&v(t),U(n),U(r),d&&d.d(u),U(l)}}}function Bn(e,t,n){let{$$slots:o={},$$scope:r}=t;return e.$$set=s=>{"$$scope"in s&&n(0,r=s.$$scope)},[r,o]}class Jn extends H{constructor(t){super(),V(this,t,Bn,Rn,N,{})}}export{Jn as component,Kn as universal};
