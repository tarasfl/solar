var C=Object.defineProperty;var O=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var y=(e,t,n)=>(O(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as p,d as b,f as B,i as A,e as I,g as N,h as L,j as P,k as E,l as T,m as D,p as H}from"./scheduler.lQARsnnX.js";let $=!1;function M(){$=!0}function q(){$=!1}function z(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function F(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=s?l+1:z(1,l,d=>t[n[d]].claim_order,s))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,l=Math.max(u,l)}const c=[],a=[];let f=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);f>=r;f--)a.push(t[f]);f--}for(;f>=0;f--)a.push(t[f]);c.reverse(),a.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<a.length;r++){for(;s<c.length&&a[r].claim_order>=c[s].claim_order;)s++;const o=s<c.length?c[s]:null;e.insertBefore(a[r],o)}}function G(e,t){if($){for(F(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ae(e,t,n){$&&!n?G(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e){return document.createElement(e)}function V(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function le(){return x(" ")}function fe(){return x("")}function ce(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const W=["width","height"];function J(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&W.indexOf(i)===-1?e[i]=t[i]:g(e,i,t[i])}function ue(e,t){for(const n in t)g(e,n,t[n])}function K(e,t){Object.keys(t).forEach(n=>{Q(e,n,t[n])})}function Q(e,t,n){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:g(e,t,n)}function oe(e){return/-/.test(e)?K:J}function _e(e){return e.dataset.svelteH}function X(e){return Array.from(e.childNodes)}function Y(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,l=!1){Y(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const f=e[a];if(t(f)){const r=n(f);return r===void 0?e.splice(a,1):e[a]=r,l||(e.claim_info.last_index=a),f}}for(let a=e.claim_info.last_index-1;a>=0;a--){const f=e[a];if(t(f)){const r=n(f);return r===void 0?e.splice(a,1):e[a]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function j(e,t,n,i){return S(e,l=>l.nodeName===t,l=>{const c=[];for(let a=0;a<l.attributes.length;a++){const f=l.attributes[a];n[f.name]||c.push(f.name)}c.forEach(a=>l.removeAttribute(a))},()=>i(t))}function de(e,t,n){return j(e,t,n,U)}function me(e,t,n){return j(e,t,n,V)}function Z(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function he(e){return Z(e," ")}function $e(e,t){t=""+t,e.data!==t&&(e.data=t)}function ye(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function pe(e,t){return new e(t)}const m=new Set;let _;function xe(){_={r:0,c:[],p:_}}function ge(){_.r||h(_.c),_=_.p}function k(e,t){e&&e.i&&(m.delete(e),e.i(t))}function we(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ve(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function be(e){e&&e.c()}function Ne(e,t){e&&e.l(t)}function ee(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),N(()=>{const c=e.$$.on_mount.map(T).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),l.forEach(N)}function te(e,t){const n=e.$$;n.fragment!==null&&(L(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(D.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,n,i,l,c,a=null,f=[-1]){const r=P;E(e);const s=e.$$={fragment:null,ctx:[],props:c,update:p,not_equal:l,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:b(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};a&&a(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(u,d,...w)=>{const v=w.length?w[0]:d;return s.ctx&&l(s.ctx[u],s.ctx[u]=v)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](v),o&&ne(e,u)),d}):[],s.update(),o=!0,h(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){M();const u=X(t.target);s.fragment&&s.fragment.l(u),u.forEach(R)}else s.fragment&&s.fragment.c();t.intro&&k(e.$$.fragment),ee(e,t.target,t.anchor),q(),B()}E(r)}class Ae{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){te(this,1),this.$destroy=p}$on(t,n){if(!A(n))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ie);export{V as A,me as B,ue as C,oe as D,Q as E,ce as F,ve as G,Ae as S,ae as a,X as b,de as c,R as d,U as e,Z as f,_e as g,he as h,Ee as i,G as j,$e as k,fe as l,we as m,ge as n,k as o,g as p,ye as q,xe as r,le as s,x as t,pe as u,be as v,Ne as w,ee as x,te as y,J as z};
