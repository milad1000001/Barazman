import{ab as lt,r as P,W as Ae,A as T,ac as me,d as re,n as Fe,b as m,ad as st,ae as rt,aa as y,i as ge,j as xe,Y as Q,p as M,g as G,t as d,J as $e,K as je,u as ke,af as it,ag as Le,C as ye,L as Z,I as J,w as ot,x as De,k as pe,v as ut,e as ct,O as te,E as ne,ah as dt,ai as ft,aj as ae,s as _e,o as vt,D as Ve,ak as mt,N as gt,al as ht,am as $t,Z as yt,$ as pt,a3 as X,a0 as ie,_ as bt,a4 as Ce,a8 as xt,a9 as _t}from"./index-8784d5fc.js";import{m as Y,c as ze,u as H,M as Te,I as Vt,d as Ct,V as Rt,_ as wt}from"./_plugin-vue_export-helper-03485282.js";import{x as Me,q as It,y as Pt,c as St,z as Ot,f as Et,L as Bt,A as At,j as Ft,o as jt,i as Re}from"./VBtn-5d14915b.js";import{u as kt,a as Ne}from"./color-b4b33521.js";class oe{constructor(s){let{x:n,y:t,width:a,height:l}=s;this.x=n,this.y=t,this.width=a,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Lt(e){const s=e.getBoundingClientRect(),n=getComputedStyle(e),t=n.transform;if(t){let a,l,u,o,c;if(t.startsWith("matrix3d("))a=t.slice(9,-1).split(/, /),l=+a[0],u=+a[5],o=+a[12],c=+a[13];else if(t.startsWith("matrix("))a=t.slice(7,-1).split(/, /),l=+a[0],u=+a[3],o=+a[4],c=+a[5];else return new oe(s);const i=n.transformOrigin,h=s.x-o-(1-l)*parseFloat(i),v=s.y-c-(1-u)*parseFloat(i.slice(i.indexOf(" ")+1)),b=l?s.width/l:e.offsetWidth+1,$=u?s.height/u:e.offsetHeight+1;return new oe({x:h,y:v,width:b,height:$})}else return new oe(s)}function Dt(e,s,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let t;try{t=e.animate(s,n)}catch{return{finished:Promise.resolve()}}return typeof t.finished>"u"&&(t.finished=new Promise(a=>{t.onfinish=()=>{a(t)}})),t}const zt="cubic-bezier(0.4, 0, 0.2, 1)",Tt="/barazman/assets/4-bc0da93a.jpg";function we(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function U(e){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?we(Object(n),!0).forEach(function(t){Mt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Mt(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function Ie(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((n,t)=>(s.includes(t)||(n[t]=y(e[t])),n),{})}function se(e){return typeof e=="function"}function Nt(e){return st(e)||rt(e)}function We(e,s,n){let t=e;const a=s.split(".");for(let l=0;l<a.length;l++){if(!t[a[l]])return n;t=t[a[l]]}return t}function ue(e,s,n){return m(()=>e.some(t=>We(s,t,{[n]:!1})[n]))}function Pe(e,s,n){return m(()=>e.reduce((t,a)=>{const l=We(s,a,{[n]:!1})[n]||[];return t.concat(l)},[]))}function qe(e,s,n,t){return e.call(t,y(s),y(n),t)}function Ue(e){return e.$valid!==void 0?!e.$valid:!e}function Wt(e,s,n,t,a,l,u){let{$lazy:o,$rewardEarly:c}=a,i=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],h=arguments.length>8?arguments[8]:void 0,v=arguments.length>9?arguments[9]:void 0,b=arguments.length>10?arguments[10]:void 0;const $=P(!!t.value),r=P(0);n.value=!1;const f=T([s,t].concat(i,b),()=>{if(o&&!t.value||c&&!v.value&&!n.value)return;let g;try{g=qe(e,s,h,u)}catch(p){g=Promise.reject(p)}r.value++,n.value=!!r.value,$.value=!1,Promise.resolve(g).then(p=>{r.value--,n.value=!!r.value,l.value=p,$.value=Ue(p)}).catch(p=>{r.value--,n.value=!!r.value,l.value=p,$.value=!0})},{immediate:!0,deep:typeof s=="object"});return{$invalid:$,$unwatch:f}}function qt(e,s,n,t,a,l,u,o){let{$lazy:c,$rewardEarly:i}=t;const h=()=>({}),v=m(()=>{if(c&&!n.value||i&&!o.value)return!1;let b=!0;try{const $=qe(e,s,u,l);a.value=$,b=Ue($)}catch($){a.value=$}return b});return{$unwatch:h,$invalid:v}}function Ut(e,s,n,t,a,l,u,o,c,i,h){const v=P(!1),b=e.$params||{},$=P(null);let r,f;e.$async?{$invalid:r,$unwatch:f}=Wt(e.$validator,s,v,n,t,$,a,e.$watchTargets,c,i,h):{$invalid:r,$unwatch:f}=qt(e.$validator,s,n,t,$,a,c,i);const g=e.$message;return{$message:se(g)?m(()=>g(Ie({$pending:v,$invalid:r,$params:Ie(b),$model:s,$response:$,$validator:l,$propertyPath:o,$property:u}))):g||"",$params:b,$pending:v,$invalid:r,$response:$,$unwatch:f}}function Gt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=y(e),n=Object.keys(s),t={},a={},l={};let u=null;return n.forEach(o=>{const c=s[o];switch(!0){case se(c.$validator):t[o]=c;break;case se(c):t[o]={$validator:c};break;case o==="$validationGroups":u=c;break;case o.startsWith("$"):l[o]=c;break;default:a[o]=c}}),{rules:t,nestedValidators:a,config:l,validationGroups:u}}const Ht="__root";function Kt(e,s,n,t,a,l,u,o,c){const i=Object.keys(e),h=t.get(a,e),v=P(!1),b=P(!1),$=P(0);if(h){if(!h.$partial)return h;h.$unwatch(),v.value=h.$dirty.value}const r={$dirty:v,$path:a,$touch:()=>{v.value||(v.value=!0)},$reset:()=>{v.value&&(v.value=!1)},$commit:()=>{}};return i.length?(i.forEach(f=>{r[f]=Ut(e[f],s,r.$dirty,l,u,f,n,a,c,b,$)}),r.$externalResults=m(()=>o.value?[].concat(o.value).map((f,g)=>({$propertyPath:a,$property:n,$validator:"$externalResults",$uid:`${a}-externalResult-${g}`,$message:f,$params:{},$response:null,$pending:!1})):[]),r.$invalid=m(()=>{const f=i.some(g=>y(r[g].$invalid));return b.value=f,!!r.$externalResults.value.length||f}),r.$pending=m(()=>i.some(f=>y(r[f].$pending))),r.$error=m(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=m(()=>i.filter(f=>y(r[f].$invalid)).map(f=>{const g=r[f];return re({$propertyPath:a,$property:n,$validator:f,$uid:`${a}-${f}`,$message:g.$message,$params:g.$params,$response:g.$response,$pending:g.$pending})}).concat(r.$externalResults.value)),r.$errors=m(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>i.forEach(f=>{r[f].$unwatch()}),r.$commit=()=>{b.value=!0,$.value=Date.now()},t.set(a,e,r),r):(h&&t.set(a,e,r),r)}function Zt(e,s,n,t,a,l,u){const o=Object.keys(e);return o.length?o.reduce((c,i)=>(c[i]=he({validations:e[i],state:s,key:i,parentKey:n,resultsCache:t,globalConfig:a,instance:l,externalResults:u}),c),{}):{}}function Yt(e,s,n){const t=m(()=>[s,n].filter(r=>r).reduce((r,f)=>r.concat(Object.values(y(f))),[])),a=m({get(){return e.$dirty.value||(t.value.length?t.value.every(r=>r.$dirty):!1)},set(r){e.$dirty.value=r}}),l=m(()=>{const r=y(e.$silentErrors)||[],f=t.value.filter(g=>(y(g).$silentErrors||[]).length).reduce((g,p)=>g.concat(...p.$silentErrors),[]);return r.concat(f)}),u=m(()=>{const r=y(e.$errors)||[],f=t.value.filter(g=>(y(g).$errors||[]).length).reduce((g,p)=>g.concat(...p.$errors),[]);return r.concat(f)}),o=m(()=>t.value.some(r=>r.$invalid)||y(e.$invalid)||!1),c=m(()=>t.value.some(r=>y(r.$pending))||y(e.$pending)||!1),i=m(()=>t.value.some(r=>r.$dirty)||t.value.some(r=>r.$anyDirty)||a.value),h=m(()=>a.value?c.value||o.value:!1),v=()=>{e.$touch(),t.value.forEach(r=>{r.$touch()})},b=()=>{e.$commit(),t.value.forEach(r=>{r.$commit()})},$=()=>{e.$reset(),t.value.forEach(r=>{r.$reset()})};return t.value.length&&t.value.every(r=>r.$dirty)&&v(),{$dirty:a,$errors:u,$invalid:o,$anyDirty:i,$error:h,$pending:c,$touch:v,$reset:$,$silentErrors:l,$commit:b}}function he(e){let{validations:s,state:n,key:t,parentKey:a,childResults:l,resultsCache:u,globalConfig:o={},instance:c,externalResults:i}=e;const h=a?`${a}.${t}`:t,{rules:v,nestedValidators:b,config:$,validationGroups:r}=Gt(s),f=U(U({},o),$),g=t?m(()=>{const V=y(n);return V?y(V[t]):void 0}):n,p=U({},y(i)||{}),j=m(()=>{const V=y(i);return t?V?y(V[t]):void 0:V}),w=Kt(v,g,t,u,h,f,c,j,n),x=Zt(b,g,h,u,f,c,j),R={};r&&Object.entries(r).forEach(V=>{let[F,k]=V;R[F]={$invalid:ue(k,x,"$invalid"),$error:ue(k,x,"$error"),$pending:ue(k,x,"$pending"),$errors:Pe(k,x,"$errors"),$silentErrors:Pe(k,x,"$silentErrors")}});const{$dirty:_,$errors:S,$invalid:C,$anyDirty:B,$error:N,$pending:L,$touch:z,$reset:O,$silentErrors:I,$commit:E}=Yt(w,x,l),D=t?m({get:()=>y(g),set:V=>{_.value=!0;const F=y(n),k=y(i);k&&(k[t]=p[t]),me(F[t])?F[t].value=V:F[t]=V}}):null;t&&f.$autoDirty&&T(g,()=>{_.value||z();const V=y(i);V&&(V[t]=p[t])},{flush:"sync"});async function A(){return z(),f.$rewardEarly&&(E(),await Q()),await Q(),new Promise(V=>{if(!L.value)return V(!C.value);const F=T(L,()=>{V(!C.value),F()})})}function W(V){return(l.value||{})[V]}function q(){me(i)?i.value=p:Object.keys(p).length===0?Object.keys(i).forEach(V=>{delete i[V]}):Object.assign(i,p)}return re(U(U(U({},w),{},{$model:D,$dirty:_,$error:N,$errors:S,$invalid:C,$anyDirty:B,$pending:L,$touch:z,$reset:O,$path:h||Ht,$silentErrors:I,$validate:A,$commit:E},l&&{$getResultsForChild:W,$clearExternalResults:q,$validationGroups:R}),x))}class Jt{constructor(){this.storage=new Map}set(s,n,t){this.storage.set(s,{rules:n,result:t})}checkRulesValidity(s,n,t){const a=Object.keys(t),l=Object.keys(n);return l.length!==a.length||!l.every(o=>a.includes(o))?!1:l.every(o=>n[o].$params?Object.keys(n[o].$params).every(c=>y(t[o].$params[c])===y(n[o].$params[c])):!0)}get(s,n){const t=this.storage.get(s);if(!t)return;const{rules:a,result:l}=t,u=this.checkRulesValidity(s,n,a),o=l.$unwatch?l.$unwatch:()=>({});return u?l:{$dirty:l.$dirty,$partial:!0,$unwatch:o}}}const le={COLLECT_ALL:!0,COLLECT_NONE:!1},Se=Symbol("vuelidate#injectChildResults"),Oe=Symbol("vuelidate#removeChildResults");function Xt(e){let{$scope:s,instance:n}=e;const t={},a=P([]),l=m(()=>a.value.reduce((h,v)=>(h[v]=y(t[v]),h),{}));function u(h,v){let{$registerAs:b,$scope:$,$stopPropagation:r}=v;r||s===le.COLLECT_NONE||$===le.COLLECT_NONE||s!==le.COLLECT_ALL&&s!==$||(t[b]=h,a.value.push(b))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],u);function o(h){a.value=a.value.filter(v=>v!==h),delete t[h]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],o);const c=ge(Se,[]);xe(Se,n.__vuelidateInjectInstances);const i=ge(Oe,[]);return xe(Oe,n.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:c,removeValidationResultsFromParent:i}}function Ge(e){return new Proxy(e,{get(s,n){return typeof s[n]=="object"?Ge(s[n]):m(()=>s[n])}})}let Ee=0;function Qt(e,s){var n;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(t=e,e=void 0,s=void 0);let{$registerAs:a,$scope:l=le.COLLECT_ALL,$stopPropagation:u,$externalResults:o,currentVueInstance:c}=t;const i=c||((n=lt())===null||n===void 0?void 0:n.proxy),h=i?i.$options:{};a||(Ee+=1,a=`_vuelidate_${Ee}`);const v=P({}),b=new Jt,{childResults:$,sendValidationResultsToParent:r,removeValidationResultsFromParent:f}=i?Xt({$scope:l,instance:i}):{childResults:P({})};if(!e&&h.validations){const g=h.validations;s=P({}),Ae(()=>{s.value=i,T(()=>se(g)?g.call(s.value,new Ge(s.value)):g,p=>{v.value=he({validations:p,state:s,childResults:$,resultsCache:b,globalConfig:t,instance:i,externalResults:o||i.vuelidateExternalResults})},{immediate:!0})}),t=h.validationsConfig||t}else{const g=me(e)||Nt(e)?e:re(e||{});T(g,p=>{v.value=he({validations:p,state:s,childResults:$,resultsCache:b,globalConfig:t,instance:i??{},externalResults:o})},{immediate:!0})}return i&&(r.forEach(g=>g(v,{$registerAs:a,$scope:l,$stopPropagation:u})),Fe(()=>f.forEach(g=>g(a)))),m(()=>U(U({},y(v.value)),$.value))}const He=e=>{if(e=y(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let s in e)return!0;return!1}return!!String(e).length};function K(){for(var e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return t=>(t=y(t),!He(t)||s.every(a=>(a.lastIndex=0,a.test(t))))}K(/^[a-zA-Z]*$/);K(/^[a-zA-Z0-9]*$/);K(/^\d*(\.\d+)?$/);const en=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var tn=K(en),nn={$validator:tn,$message:"Value is not a valid email address",$params:{type:"email"}};function an(e){return typeof e=="string"&&(e=e.trim()),He(e)}var ce={$validator:an,$message:"Value is required",$params:{type:"required"}};const ln=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;K(ln);K(/(^[0-9]*$)|(^-[0-9]+$)/);K(/^[-]?\d*(\.\d+)?$/);const sn=M({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Y(),...ze({transition:{component:Me}})},"VCounter"),rn=G()({name:"VCounter",functional:!0,props:sn(),setup(e,s){let{slots:n}=s;const t=m(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return H(()=>d(Te,{transition:e.transition},{default:()=>[$e(d("div",{class:["v-counter",e.class],style:e.style},[n.default?n.default({counter:t.value,max:e.max,value:e.value}):t.value]),[[je,e.active]])]})),{}}});const on=M({text:String,clickable:Boolean,...Y(),...ke()},"VLabel"),un=G()({name:"VLabel",props:on(),setup(e,s){let{slots:n}=s;return H(()=>{var t;return d("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(t=n.default)==null?void 0:t.call(n)])}),{}}}),cn=M({floating:Boolean,...Y()},"VFieldLabel"),ee=G()({name:"VFieldLabel",props:cn(),setup(e,s){let{slots:n}=s;return H(()=>d(un,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}});function Ke(e){const{t:s}=it();function n(t){let{name:a}=t;const l={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],u=e[`onClick:${a}`],o=u&&l?s(`$vuetify.input.${l}`,e.label??""):void 0;return d(It,{icon:e[`${a}Icon`],"aria-label":o,onClick:u},null)}return{InputIcon:n}}const Ze=M({focused:Boolean,"onUpdate:focused":Z()},"focus");function Ye(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Le();const n=ye(e,"focused"),t=m(()=>({[`${s}--focused`]:n.value}));function a(){n.value=!0}function l(){n.value=!1}return{focusClasses:t,isFocused:n,focus:a,blur:l}}const dn=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Je=M({appendInnerIcon:J,bgColor:String,clearable:Boolean,clearIcon:{type:J,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:J,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>dn.includes(e)},"onClick:clear":Z(),"onClick:appendInner":Z(),"onClick:prependInner":Z(),...Y(),...Pt(),...St(),...ke()},"VField"),Xe=G()({name:"VField",inheritAttrs:!1,props:{id:String,...Ze(),...Je()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:n,emit:t,slots:a}=s;const{themeClasses:l}=ot(e),{loaderClasses:u}=Ot(e),{focusClasses:o,isFocused:c,focus:i,blur:h}=Ye(e),{InputIcon:v}=Ke(e),{roundedClasses:b}=Et(e),{rtlClasses:$}=De(),r=m(()=>e.dirty||e.active),f=m(()=>!e.singleLine&&!!(e.label||a.label)),g=pe(),p=m(()=>e.id||`input-${g}`),j=m(()=>`${p.value}-messages`),w=P(),x=P(),R=P(),_=m(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:S,backgroundColorStyles:C}=kt(ut(e,"bgColor")),{textColorClasses:B,textColorStyles:N}=Ne(m(()=>e.error||e.disabled?void 0:r.value&&c.value?e.color:e.baseColor));T(r,O=>{if(f.value){const I=w.value.$el,E=x.value.$el;requestAnimationFrame(()=>{const D=Lt(I),A=E.getBoundingClientRect(),W=A.x-D.x,q=A.y-D.y-(D.height/2-A.height/2),V=A.width/.75,F=Math.abs(V-D.width)>1?{maxWidth:ct(V)}:void 0,k=getComputedStyle(I),be=getComputedStyle(E),tt=parseFloat(k.transitionDuration)*1e3||150,nt=parseFloat(be.getPropertyValue("--v-field-label-scale")),at=be.getPropertyValue("color");I.style.visibility="visible",E.style.visibility="hidden",Dt(I,{transform:`translate(${W}px, ${q}px) scale(${nt})`,color:at,...F},{duration:tt,easing:zt,direction:O?"normal":"reverse"}).finished.then(()=>{I.style.removeProperty("visibility"),E.style.removeProperty("visibility")})})}},{flush:"post"});const L=m(()=>({isActive:r,isFocused:c,controlRef:R,blur:h,focus:i}));function z(O){O.target!==document.activeElement&&O.preventDefault()}return H(()=>{var W,q,V;const O=e.variant==="outlined",I=a["prepend-inner"]||e.prependInnerIcon,E=!!(e.clearable||a.clear),D=!!(a["append-inner"]||e.appendInnerIcon||E),A=()=>a.label?a.label({...L.value,label:e.label,props:{for:p.value}}):e.label;return d("div",ne({class:["v-field",{"v-field--active":r.value,"v-field--appended":D,"v-field--center-affix":e.centerAffix??!_.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":I,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!A(),[`v-field--variant-${e.variant}`]:!0},l.value,S.value,o.value,u.value,b.value,$.value,e.class],style:[C.value,e.style],onClick:z},n),[d("div",{class:"v-field__overlay"},null),d(Bt,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),I&&d("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&d(v,{key:"prepend-icon",name:"prependInner"},null),(W=a["prepend-inner"])==null?void 0:W.call(a,L.value)]),d("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&f.value&&d(ee,{key:"floating-label",ref:x,class:[B.value],floating:!0,for:p.value,style:N.value},{default:()=>[A()]}),d(ee,{ref:w,for:p.value},{default:()=>[A()]}),(q=a.default)==null?void 0:q.call(a,{...L.value,props:{id:p.value,class:"v-field__input","aria-describedby":j.value},focus:i,blur:h})]),E&&d(At,{key:"clear"},{default:()=>[$e(d("div",{class:"v-field__clearable",onMousedown:F=>{F.preventDefault(),F.stopPropagation()}},[a.clear?a.clear():d(v,{name:"clear"},null)]),[[je,e.dirty]])]}),D&&d("div",{key:"append",class:"v-field__append-inner"},[(V=a["append-inner"])==null?void 0:V.call(a,L.value),e.appendInnerIcon&&d(v,{key:"append-icon",name:"appendInner"},null)]),d("div",{class:["v-field__outline",B.value],style:N.value},[O&&d(te,null,[d("div",{class:"v-field__outline__start"},null),f.value&&d("div",{class:"v-field__outline__notch"},[d(ee,{ref:x,floating:!0,for:p.value},{default:()=>[A()]})]),d("div",{class:"v-field__outline__end"},null)]),_.value&&f.value&&d(ee,{ref:x,floating:!0,for:p.value},{default:()=>[A()]})])])}),{controlRef:R}}});function fn(e){const s=Object.keys(Xe.props).filter(n=>!dt(n)&&n!=="class"&&n!=="style");return ft(e,s)}const vn=M({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Y(),...ze({transition:{component:Me,leaveAbsolute:!0,group:!0}})},"VMessages"),mn=G()({name:"VMessages",props:vn(),setup(e,s){let{slots:n}=s;const t=m(()=>ae(e.messages)),{textColorClasses:a,textColorStyles:l}=Ne(m(()=>e.color));return H(()=>d(Te,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[l.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&t.value.map((u,o)=>d("div",{class:"v-messages__message",key:`${o}-${t.value}`},[n.message?n.message({message:u}):u]))]})),{}}}),gn=Symbol.for("vuetify:form");function hn(){return ge(gn,null)}const $n=M({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Ze()},"validation");function yn(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Le(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:pe();const t=ye(e,"modelValue"),a=m(()=>e.validationValue===void 0?t.value:e.validationValue),l=hn(),u=P([]),o=_e(!0),c=m(()=>!!(ae(t.value===""?null:t.value).length||ae(a.value===""?null:a.value).length)),i=m(()=>!!(e.disabled??(l==null?void 0:l.isDisabled.value))),h=m(()=>!!(e.readonly??(l==null?void 0:l.isReadonly.value))),v=m(()=>{var x;return(x=e.errorMessages)!=null&&x.length?ae(e.errorMessages).concat(u.value).slice(0,Math.max(0,+e.maxErrors)):u.value}),b=m(()=>{let x=(e.validateOn??(l==null?void 0:l.validateOn.value))||"input";x==="lazy"&&(x="input lazy");const R=new Set((x==null?void 0:x.split(" "))??[]);return{blur:R.has("blur")||R.has("input"),input:R.has("input"),submit:R.has("submit"),lazy:R.has("lazy")}}),$=m(()=>{var x;return e.error||(x=e.errorMessages)!=null&&x.length?!1:e.rules.length?o.value?u.value.length||b.value.lazy?null:!0:!u.value.length:!0}),r=_e(!1),f=m(()=>({[`${s}--error`]:$.value===!1,[`${s}--dirty`]:c.value,[`${s}--disabled`]:i.value,[`${s}--readonly`]:h.value})),g=m(()=>e.name??y(n));Ae(()=>{l==null||l.register({id:g.value,validate:w,reset:p,resetValidation:j})}),Fe(()=>{l==null||l.unregister(g.value)}),vt(async()=>{b.value.lazy||await w(!0),l==null||l.update(g.value,$.value,v.value)}),Ve(()=>b.value.input,()=>{T(a,()=>{if(a.value!=null)w();else if(e.focused){const x=T(()=>e.focused,R=>{R||w(),x()})}})}),Ve(()=>b.value.blur,()=>{T(()=>e.focused,x=>{x||w()})}),T($,()=>{l==null||l.update(g.value,$.value,v.value)});function p(){t.value=null,Q(j)}function j(){o.value=!0,b.value.lazy?u.value=[]:w(!0)}async function w(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const R=[];r.value=!0;for(const _ of e.rules){if(R.length>=+(e.maxErrors??1))break;const C=await(typeof _=="function"?_:()=>_)(a.value);if(C!==!0){if(C!==!1&&typeof C!="string"){console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`);continue}R.push(C||"")}}return u.value=R,r.value=!1,o.value=x,u.value}return{errorMessages:v,isDirty:c,isDisabled:i,isReadonly:h,isPristine:o,isValid:$,isValidating:r,reset:p,resetValidation:j,validate:w,validationClasses:f}}const Qe=M({id:String,appendIcon:J,centerAffix:{type:Boolean,default:!0},prependIcon:J,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":Z(),"onClick:append":Z(),...Y(),...Ft(),...$n()},"VInput"),Be=G()({name:"VInput",props:{...Qe()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:n,slots:t,emit:a}=s;const{densityClasses:l}=jt(e),{rtlClasses:u}=De(),{InputIcon:o}=Ke(e),c=pe(),i=m(()=>e.id||`input-${c}`),h=m(()=>`${i.value}-messages`),{errorMessages:v,isDirty:b,isDisabled:$,isReadonly:r,isPristine:f,isValid:g,isValidating:p,reset:j,resetValidation:w,validate:x,validationClasses:R}=yn(e,"v-input",i),_=m(()=>({id:i,messagesId:h,isDirty:b,isDisabled:$,isReadonly:r,isPristine:f,isValid:g,isValidating:p,reset:j,resetValidation:w,validate:x})),S=m(()=>{var C;return(C=e.errorMessages)!=null&&C.length||!f.value&&v.value.length?v.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return H(()=>{var z,O,I,E;const C=!!(t.prepend||e.prependIcon),B=!!(t.append||e.appendIcon),N=S.value.length>0,L=!e.hideDetails||e.hideDetails==="auto"&&(N||!!t.details);return d("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},l.value,u.value,R.value,e.class],style:e.style},[C&&d("div",{key:"prepend",class:"v-input__prepend"},[(z=t.prepend)==null?void 0:z.call(t,_.value),e.prependIcon&&d(o,{key:"prepend-icon",name:"prepend"},null)]),t.default&&d("div",{class:"v-input__control"},[(O=t.default)==null?void 0:O.call(t,_.value)]),B&&d("div",{key:"append",class:"v-input__append"},[e.appendIcon&&d(o,{key:"append-icon",name:"append"},null),(I=t.append)==null?void 0:I.call(t,_.value)]),L&&d("div",{class:"v-input__details"},[d(mn,{id:h.value,active:N,messages:S.value},{message:t.message}),(E=t.details)==null?void 0:E.call(t,_.value)])])}),{reset:j,resetValidation:w,validate:x,isValid:g,errorMessages:v}}}),de=Symbol("Forwarded refs");function fe(e,s){let n=e;for(;n;){const t=Reflect.getOwnPropertyDescriptor(n,s);if(t)return t;n=Object.getPrototypeOf(n)}}function pn(e){for(var s=arguments.length,n=new Array(s>1?s-1:0),t=1;t<s;t++)n[t-1]=arguments[t];return e[de]=n,new Proxy(e,{get(a,l){if(Reflect.has(a,l))return Reflect.get(a,l);if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const u of n)if(u.value&&Reflect.has(u.value,l)){const o=Reflect.get(u.value,l);return typeof o=="function"?o.bind(u.value):o}}},has(a,l){if(Reflect.has(a,l))return!0;if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const u of n)if(u.value&&Reflect.has(u.value,l))return!0;return!1},set(a,l,u){if(Reflect.has(a,l))return Reflect.set(a,l,u);if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,l))return Reflect.set(o.value,l,u);return!1},getOwnPropertyDescriptor(a,l){var o;const u=Reflect.getOwnPropertyDescriptor(a,l);if(u)return u;if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const c of n){if(!c.value)continue;const i=fe(c.value,l)??("_"in c.value?fe((o=c.value._)==null?void 0:o.setupState,l):void 0);if(i)return i}for(const c of n){const i=c.value&&c.value[de];if(!i)continue;const h=i.slice();for(;h.length;){const v=h.shift(),b=fe(v.value,l);if(b)return b;const $=v.value&&v.value[de];$&&h.push(...$)}}}}})}const bn=["color","file","time","date","datetime-local","week","month"],xn=M({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Qe(),...Je()},"VTextField"),ve=G()({name:"VTextField",directives:{Intersect:Vt},inheritAttrs:!1,props:xn(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:n,emit:t,slots:a}=s;const l=ye(e,"modelValue"),{isFocused:u,focus:o,blur:c}=Ye(e),i=m(()=>typeof e.counterValue=="function"?e.counterValue(l.value):typeof e.counterValue=="number"?e.counterValue:(l.value??"").toString().length),h=m(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),v=m(()=>["plain","underlined"].includes(e.variant));function b(_,S){var C,B;!e.autofocus||!_||(B=(C=S[0].target)==null?void 0:C.focus)==null||B.call(C)}const $=P(),r=P(),f=P(),g=m(()=>bn.includes(e.type)||e.persistentPlaceholder||u.value||e.active);function p(){var _;f.value!==document.activeElement&&((_=f.value)==null||_.focus()),u.value||o()}function j(_){t("mousedown:control",_),_.target!==f.value&&(p(),_.preventDefault())}function w(_){p(),t("click:control",_)}function x(_){_.stopPropagation(),p(),Q(()=>{l.value=null,$t(e["onClick:clear"],_)})}function R(_){var C;const S=_.target;if(l.value=S.value,(C=e.modelModifiers)!=null&&C.trim&&["text","search","password","tel","url"].includes(e.type)){const B=[S.selectionStart,S.selectionEnd];Q(()=>{S.selectionStart=B[0],S.selectionEnd=B[1]})}}return H(()=>{const _=!!(a.counter||e.counter!==!1&&e.counter!=null),S=!!(_||a.details),[C,B]=mt(n),{modelValue:N,...L}=Be.filterProps(e),z=fn(e);return d(Be,ne({ref:$,modelValue:l.value,"onUpdate:modelValue":O=>l.value=O,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":v.value},e.class],style:e.style},C,L,{centerAffix:!v.value,focused:u.value}),{...a,default:O=>{let{id:I,isDisabled:E,isDirty:D,isReadonly:A,isValid:W}=O;return d(Xe,ne({ref:r,onMousedown:j,onClick:w,"onClick:clear":x,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},z,{id:I.value,active:g.value||D.value,dirty:D.value||e.dirty,disabled:E.value,focused:u.value,error:W.value===!1}),{...a,default:q=>{let{props:{class:V,...F}}=q;const k=$e(d("input",ne({ref:f,value:l.value,onInput:R,autofocus:e.autofocus,readonly:A.value,disabled:E.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:p,onBlur:c},F,B),null),[[gt("intersect"),{handler:b},null,{once:!0}]]);return d(te,null,[e.prefix&&d("span",{class:"v-text-field__prefix"},[d("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?d("div",{class:V,"data-no-activator":""},[a.default(),k]):ht(k,{class:V}),e.suffix&&d("span",{class:"v-text-field__suffix"},[d("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:S?O=>{var I;return d(te,null,[(I=a.details)==null?void 0:I.call(a,O),_&&d(te,null,[d("span",null,null),d(rn,{active:e.persistentCounter||u.value,value:i.value,max:h.value},a.counter)])])}:void 0})}),pn({},$,r,f)}}),et=e=>(xt("data-v-123b426b"),e=e(),_t(),e),_n={class:"bc-container"},Vn={class:"bc-container__image"},Cn={class:"bc-container__form"},Rn=et(()=>X("h1",null,"Get in touch",-1)),wn=et(()=>X("small",null,"24/7 We will answere you questions and problems.",-1)),In=yt({__name:"Contact",props:{image:{}},setup(e){const s={firstname:null,lastname:null,email:null},n=re({...s}),a=Qt({firstname:{required:ce},lastname:{required:ce},email:{required:ce,email:nn}},n);function l(){a.value.$reset();for(const[o,c]of Object.entries(s))n[o]=c}const u=()=>{a.value.$validate(),a.value.$error||(window.location.href="mailto:nimalatif@Gmail.com")};return(o,c)=>(bt(),pt("form",_n,[X("div",Vn,[d(Rt,{src:Tt,width:"300px",height:"100%",cover:""})]),X("div",Cn,[Rn,wn,d(Ct,null,{default:ie(()=>[d(ve,{modelValue:n.firstname,"onUpdate:modelValue":c[0]||(c[0]=i=>n.firstname=i),"error-messages":String(y(a).firstname.$errors.map(i=>i.$message)),counter:10,clearable:"",label:"Firstname",required:"",class:"my-3",variant:"outlined",onInput:y(a).firstname.$touch,onBlur:y(a).firstname.$touch},null,8,["modelValue","error-messages","onInput","onBlur"]),d(ve,{modelValue:n.lastname,"onUpdate:modelValue":c[1]||(c[1]=i=>n.lastname=i),"error-messages":String(y(a).lastname.$errors.map(i=>i.$message)),counter:10,clearable:"",label:"Lastname",required:"",class:"my-3",variant:"outlined",onInput:y(a).lastname.$touch,onBlur:y(a).lastname.$touch},null,8,["modelValue","error-messages","onInput","onBlur"]),d(ve,{modelValue:n.email,"onUpdate:modelValue":c[2]||(c[2]=i=>n.email=i),"error-messages":String(y(a).email.$errors.map(i=>i.$message)),label:"E-mail",required:"",variant:"outlined",clearable:"",class:"my-3",onInput:y(a).email.$touch,onBlur:y(a).email.$touch},null,8,["modelValue","error-messages","onInput","onBlur"])]),_:1}),X("div",null,[d(Re,{class:"me-4",onClick:u},{default:ie(()=>[Ce("Submit ")]),_:1}),d(Re,{onClick:l},{default:ie(()=>[Ce(" Clear ")]),_:1})])])]))}});const Bn=wt(In,[["__scopeId","data-v-123b426b"]]);export{Bn as default};