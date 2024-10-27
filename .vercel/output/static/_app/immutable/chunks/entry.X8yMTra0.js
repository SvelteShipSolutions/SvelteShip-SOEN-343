import{E as me}from"./scheduler.DdsthWez.js";import{w as be}from"./index.Co7PORM7.js";new URL("sveltekit-internal://");function gt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function mt(e){return e.split("%25").map(decodeURI).join("%25")}function yt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function de({href:e}){return e.split("#")[0]}const _t=["href","pathname","search","toString","toJSON"];function wt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of _t)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const vt="/__data.json",bt=".html__data.json";function At(e){return e.endsWith(".html")?e.replace(/\.html$/,bt):e.replace(/\/$/,"")+vt}function kt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Et(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const qe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(Ae(e)),qe(e,n));const q=new Map;function St(e,n){const t=Ae(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&q.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Et(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function Rt(e,n,t){if(q.size>0){const r=Ae(e,t),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(n,t)}function Ae(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${kt(...a)}"]`}return r}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ut(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Tt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return he(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return he(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=It.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return he(c)}).join("")}).join("")}/?$`),params:n}}function Lt(e){return!/^\([^)]+\)$/.test(e)}function Tt(e){return e.slice(1).split("/").filter(Lt)}function Pt(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){r[c.name]=f;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function he(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=Ut(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return Pt(l,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Me(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function xe(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}var Be;const L=((Be=globalThis.__sveltekit_1iy67p9)==null?void 0:Be.base)??"";var Ge;const Ct=((Ge=globalThis.__sveltekit_1iy67p9)==null?void 0:Ge.assets)??L,Nt="1730058988801",He="sveltekit:snapshot",Ke="sveltekit:scroll",We="sveltekit:states",Ot="sveltekit:pageurl",$="sveltekit:history",H="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Ye(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ke(){return{x:pageXOffset,y:pageYOffset}}function O(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ce={...X,"":X.hover};function Je(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Je(e)}}function ye(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===J&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function Z(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=O(s,"preload-code")),a===null&&(a=O(s,"preload-data")),n===null&&(n=O(s,"keepfocus")),t===null&&(t=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=Je(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ce[r??"off"],preload_data:Ce[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Ne(e){const n=be(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function jt(){const{set:e,subscribe:n}=be(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Ct}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Nt;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function re(e,n){return e.origin!==J||!e.pathname.startsWith(n)}function Oe(e){const n=Dt(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const $t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Dt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=$t.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Ft=-1,Vt=-2,Bt=-3,Gt=-4,qt=-5,Mt=-6;function cn(e,n){return Xe(JSON.parse(e),n)}function Xe(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Ft)return;if(o===Bt)return NaN;if(o===Gt)return 1/0;if(o===qt)return-1/0;if(o===Mt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=Oe(g),m=new u(l);r[o]=m;break}case"ArrayBuffer":{const u=s[1],g=Oe(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Vt&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in s){const d=s[f];c[f]=a(d)}}return r[o]}return a(0)}const Ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ze];const Ht=new Set([...Ze]);[...Ht];function Kt(e){return e.filter(n=>n!=null)}class ae{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(n,t){this.status=n,this.location=t}}class Ee extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Wt="x-sveltekit-invalidated",Yt="x-sveltekit-trailing-slash";function Q(e){return e instanceof ae||e instanceof Ee?e.status:500}function Jt(e){return e instanceof Ee?e.text:"Internal Error"}const N=Me(Ke)??{},K=Me(He)??{},P={url:Ne({}),page:Ne({}),navigating:be(null),updated:jt()};function Se(e){N[e]=ke()}function zt(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function F(e){return location.href=e.href,new Promise(()=>{})}async function et(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(L||"/");e&&await e.update()}}function je(){}let oe,_e,ee,T,we,B;const tt=[],te=[];let I=null;const nt=[],Xt=[];let j=[],_={branch:[],error:null,url:null},Re=!1,ne=!1,$e=!0,W=!1,G=!1,rt=!1,se=!1,C,E,U,S,V;const M=new Set;let pe;async function ln(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),B=e,oe=xt(e),T=document.documentElement,we=n,_e=e.nodes[0],ee=e.nodes[1],_e(),ee(),E=(a=history.state)==null?void 0:a[$],U=(o=history.state)==null?void 0:o[H],E||(E=U=Date.now(),history.replaceState({...history.state,[$]:E,[H]:U},""));const r=N[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await an(we,t):nn(location.href,{replaceState:!0}),rn()}async function Zt(){if(await(pe||(pe=Promise.resolve())),!pe)return;pe=null;const e=le(_.url,!0);I=null;const n=V={},t=e&&await Le(e);if(!(!t||n!==V)){if(t.type==="redirect")return ie(new URL(t.location,_.url).href,{},1,n);t.props.page&&(S=t.props.page),_=t.state,at(),C.$set(t.props)}}function at(){tt.length=0,se=!1}function ot(e){te.some(n=>n==null?void 0:n.snapshot)&&(K[e]=te.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function st(e){var n;(n=K[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=te[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function De(){Se(E),xe(Ke,N),ot(U),xe(He,K)}async function ie(e,n,t,r){return z({type:"goto",url:Ye(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(se=!0)}})}async function Qt(e){if(e.id!==(I==null?void 0:I.id)){const n={};M.add(n),I={id:e.id,token:n,promise:Le({...e,preload:n}).then(t=>(M.delete(n),t.type==="loaded"&&t.state.error&&(I=null),t))}}return I.promise}async function ge(e){const n=oe.find(t=>t.exec(lt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function it(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),S=e.props.page,C=new B.root({target:n,props:{...e.props,stores:P,components:te},hydrate:t,sync:!1}),st(U);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(i=>i(a)),ne=!0}function Y({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(L&&(e.pathname===L||e.pathname===L+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=gt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Kt(t).map(u=>u.node.component),page:S}};i!==void 0&&(c.props.form=i);let f={},d=!S,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const g=t[u],l=_.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==S.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:S.data}),c}async function Ie({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const m of l){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(l,m)=>(s&&(c.route=!0),l[m])}),params:new Proxy(r,{get:(l,m)=>(s&&c.params.add(m),l[m])}),data:(o==null?void 0:o.data)??null,url:wt(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,m){let b;l instanceof Request?(b=l.url,m={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...m}):b=l;const R=new URL(b,t);return s&&u(R.href),R.origin===t.origin&&(b=R.href.slice(t.origin.length)),ne?Rt(b,R.href,m):St(b,m)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Fe(e,n,t,r,a,o){if(se)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(tt.some(s=>s(new URL(i))))return!0;return!1}function Ue(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function en(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function Ve({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:S,constructors:[]}}}async function Le({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((I==null?void 0:I.id)===e)return M.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=a,f=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=en(_.url,t);let g=!1;const l=f.map((p,v)=>{var x;const A=_.branch[v],k=!!(p!=null&&p[0])&&((A==null?void 0:A.loader)!==p[1]||Fe(g,y,h,u,(x=A.server)==null?void 0:x.uses,r));return k&&(g=!0),k});if(l.some(Boolean)){try{d=await dt(t,l)}catch(p){const v=await D(p,{url:t,params:r,route:{id:e}});return M.has(o)?Ve({error:v,url:t,params:r,route:a}):ce({status:Q(p),error:v,url:t,route:a})}if(d.type==="redirect")return d}const m=d==null?void 0:d.nodes;let b=!1;const R=f.map(async(p,v)=>{var fe;if(!p)return;const A=_.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&p[1]===(A==null?void 0:A.loader)&&!Fe(b,y,h,u,(fe=A.universal)==null?void 0:fe.uses,r))return A;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ie({loader:p[1],url:t,params:r,route:a,parent:async()=>{var Pe;const Te={};for(let ue=0;ue<v;ue+=1)Object.assign(Te,(Pe=await R[ue])==null?void 0:Pe.data);return Te},server_data_node:Ue(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?A==null?void 0:A.server:void 0)})});for(const p of R)p.catch(()=>{});const w=[];for(let p=0;p<f.length;p+=1)if(f[p])try{w.push(await R[p])}catch(v){if(v instanceof Qe)return{type:"redirect",location:v.location};if(M.has(o))return Ve({error:await D(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let A=Q(v),k;if(m!=null&&m.includes(v))A=v.status??A,k=v.error;else if(v instanceof ae)k=v.body;else{if(await P.updated.check())return await et(),await F(t);k=await D(v,{params:r,url:t,route:{id:a.id}})}const x=await ct(p,w,i);return x?Y({url:t,params:r,branch:w.slice(0,x.idx).concat(x.node),status:A,error:k,route:a}):await ut(t,{id:a.id},k,A)}else w.push(void 0);return Y({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function ct(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:r}){const a={};let o=null;if(B.server_loads[0]===0)try{const f=await dt(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||Re)&&await F(t)}const s=await Ie({loader:_e,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ue(o)}),c={node:await ee(),loader:ee,universal:null,server:null,data:null};return Y({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function le(e,n){if(!e||re(e,L))return;let t;try{t=B.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=lt(t);for(const a of oe){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:yt(o),url:e}}}function lt(e){return mt(e.slice(L.length)||"/")}function ft({url:e,type:n,intent:t,delta:r}){let a=!1;const o=pt(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return W||nt.forEach(s=>s(i)),a?null:o}async function z({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=je,block:d=je}){const h=le(n,!1),y=ft({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=E,g=U;f(),W=!0,ne&&P.navigating.set(y.navigation),V=c;let l=h&&await Le(h);if(!l){if(re(n,L))return await F(n);l=await ut(n,{id:null},await D(new Ee(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,V!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await ce({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return ie(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await P.updated.check()&&(await et(),await F(n));if(at(),Se(u),ot(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,p={[$]:E+=w,[H]:U+=w,[We]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||zt(E,U)}if(I=null,l.props.page.state=i,ne){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Xt.map(p=>p(y.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){j=j.filter(v=>!w.includes(v))};w.push(p),j.push(...w)}C.$set(l.props),rt=!0}else it(l,we,!1);const{activeElement:m}=document;await me();const b=t?t.scroll:a?ke():null;if($e){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==m&&document.activeElement!==document.body;!r&&!R&&ve(),$e=!0,l.props.page&&(S=l.props.page),W=!1,e==="popstate"&&st(U),y.fulfil(void 0),j.forEach(w=>w(y.navigation)),P.navigating.set(null)}async function ut(e,n,t,r){return e.origin===J&&e.pathname===location.pathname&&!Re?await ce({status:r,error:t,url:e,route:n}):await F(e)}function tn(){let e;T.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}T.addEventListener("mousedown",n),T.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ge(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=ze(o,T);if(!s)return;const{url:c,external:f,download:d}=ye(s,L);if(f||d)return;const h=Z(s),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=le(c,!1);u&&Qt(u)}else i<=h.preload_code&&ge(c.pathname)}function a(){t.disconnect();for(const o of T.querySelectorAll("a")){const{url:i,external:s,download:c}=ye(o,L);if(s||c)continue;const f=Z(o);f.reload||(f.preload_code===X.viewport&&t.observe(o),f.preload_code===X.eager&&ge(i.pathname))}}j.push(a),a()}function D(e,n){if(e instanceof ae)return e.body;const t=Q(e),r=Jt(e);return B.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function nn(e,n={}){return e=Ye(e),e.origin!==J?Promise.reject(new Error("goto: invalid URL")):ie(e,n,0)}function fn(){return se=!0,Zt()}async function un(e){if(e.type==="error"){const n=new URL(location.href),{branch:t,route:r}=_;if(!r)return;const a=await ct(_.branch.length,t,r.errors);if(a){const o=Y({url:n,params:_.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});_=o.state,C.$set(o.props),me().then(ve)}}else e.type==="redirect"?ie(e.location,{invalidateAll:!0},0):(C.$set({form:null,page:{...S,form:e.data,status:e.status}}),await me(),C.$set({form:e.data}),e.type==="success"&&ve())}function rn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(De(),!W){const a=pt(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};nt.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),(n=navigator.connection)!=null&&n.saveData||tn(),T.addEventListener("click",async t=>{var y;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=ze(t.composedPath()[0],T);if(!r)return;const{url:a,external:o,target:i,download:s}=ye(r,L);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ft({url:a,type:"link"})?W=!0:t.preventDefault();return}const[d,h]=a.href.split("#");if(h!==void 0&&d===de(location)){const[,u]=_.url.href.split("#");if(u===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(y=r.ownerDocument.getElementById(decodeURIComponent(h)))==null||y.scrollIntoView();return}if(G=!0,Se(E),e(a),!c.replace_state)return;G=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),z({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),T.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(re(s,L))return;const c=t.target,f=Z(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),z({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[$]){const a=t.state[$];if(V={},a===E)return;const o=N[a],i=t.state[We]??{},s=new URL(t.state[Ot]??location.href),c=t.state[H],f=de(location)===de(_.url);if(c===U&&(rt||f)){e(s),N[E]=ke(),o&&scrollTo(o.x,o.y),i!==S.state&&(S={...S,state:i},C.$set({page:S})),E=a;return}const h=a-E;await z({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,U=c},block:()=>{history.go(-h)},nav_token:V})}else if(!G){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[$]:++E,[H]:U},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(null)});function e(t){_.url=t,P.page.set({...S,url:t}),P.page.notify()}}async function an(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){Re=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=le(c,!1)||{});let f;try{const d=r.map(async(u,g)=>{const l=i[g];return l!=null&&l.uses&&(l.uses=ht(l.uses)),Ie({loader:B.nodes[u],url:c,params:a,route:o,parent:async()=>{const m={};for(let b=0;b<g;b+=1)Object.assign(m,(await d[b]).data);return m},server_data_node:Ue(l)})}),h=await Promise.all(d),y=oe.find(({id:u})=>u===o.id);if(y){const u=y.layouts;for(let g=0;g<u.length;g++)u[g]||h.splice(g,0,void 0)}f=Y({url:c,params:a,branch:h,status:n,error:t,form:s,route:y??null})}catch(d){if(d instanceof Qe){await F(new URL(d.location,location.href));return}f=await ce({status:Q(d),error:await D(d,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),it(f,e,!0)}async function dt(e,n){var a;const t=new URL(e);t.pathname=At(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Yt,"1"),t.searchParams.append(Wt,n.map(o=>o?"1":"0").join(""));const r=await qe(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ae(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function f(y){return Xe(y,{Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=ht(m.uses),m.data=f(m.data))}),o(l);else if(l.type==="chunk"){const{id:m,data:b,error:R}=l,w=i.get(m);i.delete(m),R?w.reject(f(R)):w.fulfil(f(b))}}}})}function ht(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function ve(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function pt(e,n,t,r){var c,f;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{un as a,ln as b,fn as i,cn as p,P as s};
