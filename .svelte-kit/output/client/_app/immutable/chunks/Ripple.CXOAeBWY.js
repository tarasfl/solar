import{t as R,o as M,S as fe,i as de,h as F,a as O,n as pe,d as D,k as he,z as me,A as ve,q as Z,B as $,e as re,c as ae,C as I}from"./index.rfLyQUc3.js";import{r as E,s as J,c as T,g as ge,b as U,e as ye,d as q,n as N,f as se,E as H,u as oe,h as le,i as ue,v as K,a as be}from"./scheduler.ayCiN8gI.js";function Qe(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function xe(i,e){R(i,1,1,()=>{e.delete(i.key)})}function $e(i,e,t,n,r,a,s,o,u,f,l,c){let m=i.length,y=a.length,d=m;const A={};for(;d--;)A[i[d].key]=d;const h=[],b=new Map,v=new Map,_=[];for(d=y;d--;){const p=c(r,a,d),w=t(p);let C=s.get(w);C?n&&_.push(()=>C.p(p,e)):(C=f(w,p),C.c()),b.set(w,h[d]=C),w in A&&v.set(w,Math.abs(d-A[w]))}const S=new Set,G=new Set;function g(p){M(p,1),p.m(o,l),s.set(p.key,p),l=p.first,y--}for(;m&&y;){const p=h[y-1],w=i[m-1],C=p.key,k=w.key;p===w?(l=p.first,m--,y--):b.has(k)?!s.has(C)||S.has(C)?g(p):G.has(k)?m--:v.get(C)>v.get(k)?(G.add(C),g(p)):(S.add(k),m--):(u(w,s),m--)}for(;m--;){const p=i[m];b.has(p.key)||u(p,s)}for(;y;)g(h[y-1]);return E(_),h}function Q(i,e){const t={},n={},r={$$scope:1};let a=i.length;for(;a--;){const s=i[a],o=e[a];if(o){for(const u in s)u in o||(n[u]=1);for(const u in o)r[u]||(t[u]=o[u],r[u]=1);i[a]=o}else for(const u in s)r[u]=1}for(const s in n)s in t||(t[s]=void 0);return t}function Te(i){return typeof i=="object"&&i!==null?i:{}}function Ne(i){return Object.entries(i).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function Ye(i,e,t,n={bubbles:!0},r=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!i)throw new Error("Tried to dipatch event without element.");const a=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));if(i==null||i.dispatchEvent(a),r&&e.startsWith("SMUI")){const s=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:t}));i==null||i.dispatchEvent(s),s.defaultPrevented&&a.preventDefault()}return a}function et(i,e){let t=Object.getOwnPropertyNames(i);const n={};for(let r=0;r<t.length;r++){const a=t[r],s=a.indexOf("$");s!==-1&&e.indexOf(a.substring(0,s+1))!==-1||e.indexOf(a)===-1&&(n[a]=i[a])}return n}const Y=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,_e=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Ae(i){let e,t=[];i.$on=(r,a)=>{let s=r,o=()=>{};return e?o=e(s,a):t.push([s,a]),s.match(Y)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',s),()=>{o()}};function n(r){const a=i.$$.callbacks[r.type];a&&a.slice().forEach(s=>s.call(this,r))}return r=>{const a=[],s={};e=(o,u)=>{let f=o,l=u,c=!1;const m=f.match(Y),y=f.match(_e),d=m||y;if(f.match(/^SMUI:\w+:/)){const b=f.split(":");let v="";for(let _=0;_<b.length;_++)v+=_===b.length-1?":"+b[_]:b[_].split("-").map(S=>S.slice(0,1).toUpperCase()+S.slice(1)).join("");console.warn(`The event ${f.split("$")[0]} has been renamed to ${v.split("$")[0]}.`),f=v}if(d){const b=f.split(m?":":"$");f=b[0];const v=b.slice(1).reduce((_,S)=>(_[S]=!0,_),{});v.passive&&(c=c||{},c.passive=!0),v.nonpassive&&(c=c||{},c.passive=!1),v.capture&&(c=c||{},c.capture=!0),v.once&&(c=c||{},c.once=!0),v.preventDefault&&(l=we(l)),v.stopPropagation&&(l=Se(l)),v.stopImmediatePropagation&&(l=Ce(l)),v.self&&(l=De(r,l)),v.trusted&&(l=Re(l))}const A=ee(r,f,l,c),h=()=>{A();const b=a.indexOf(h);b>-1&&a.splice(b,1)};return a.push(h),f in s||(s[f]=ee(r,f,n)),h};for(let o=0;o<t.length;o++)e(t[o][0],t[o][1]);return{destroy:()=>{for(let o=0;o<a.length;o++)a[o]();for(let o of Object.entries(s))o[1]()}}}}function ee(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function we(i){return function(e){return e.preventDefault(),i.call(this,e)}}function Se(i){return function(e){return e.stopPropagation(),i.call(this,e)}}function Ce(i){return function(e){return e.stopImmediatePropagation(),i.call(this,e)}}function De(i,e){return function(t){if(t.target===i)return e.call(this,t)}}function Re(i){return function(e){if(e.isTrusted)return i.call(this,e)}}function tt(i,e){let t=Object.getOwnPropertyNames(i);const n={};for(let r=0;r<t.length;r++){const a=t[r];a.substring(0,e.length)===e&&(n[a.substring(e.length)]=i[a])}return n}function x(i,e){let t=[];if(e)for(let n=0;n<e.length;n++){const r=e[n],a=Array.isArray(r)?r[0]:r;Array.isArray(r)&&r.length>1?t.push(a(i,r[1])):t.push(a(i))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let r=0;r<n.length;r++){const a=t[r];if(a&&a.update){const s=n[r];Array.isArray(s)&&s.length>1?a.update(s[1]):a.update()}}},destroy(){for(let n=0;n<t.length;n++){const r=t[n];r&&r.destroy&&r.destroy()}}}}var V=function(i,e){return V=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},V(i,e)};function Me(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");V(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var L=function(){return L=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},L.apply(this,arguments)};function nt(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(s=i[o])&&(a=(r<3?s(a):r>3?s(e,t,a):s(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function z(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function it(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,a=[],s;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)a.push(r.value)}catch(o){s={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(s)throw s.error}}return a}function rt(i,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,a;n<r;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Fe=function(){function i(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function He(i,e){if(i.closest)return i.closest(e);for(var t=i;t;){if(ce(t,e))return t;t=t.parentElement}return null}function ce(i,e){var t=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return t.call(i,e)}function Oe(i){var e=i;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const Le=Object.freeze(Object.defineProperty({__proto__:null,closest:He,estimateScrollWidth:Oe,matches:ce},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ue(i){return i===void 0&&(i=window),Ge(i)?{passive:!0}:!1}function Ge(i){i===void 0&&(i=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};i.document.addEventListener("test",n,t),i.document.removeEventListener("test",n,t)}catch{e=!1}return e}const ke=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Ue},Symbol.toStringTag,{value:"Module"}));function ze(i){let e=i[1],t,n,r=i[1]&&X(i);return{c(){r&&r.c(),t=F()},l(a){r&&r.l(a),t=F()},m(a,s){r&&r.m(a,s),O(a,t,s),n=!0},p(a,s){a[1]?e?J(e,a[1])?(r.d(1),r=X(a),e=a[1],r.c(),r.m(t.parentNode,t)):r.p(a,s):(r=X(a),e=a[1],r.c(),r.m(t.parentNode,t)):e&&(r.d(1),r=null,e=a[1])},i(a){n||(M(r,a),n=!0)},o(a){R(r,a),n=!1},d(a){a&&D(t),r&&r.d(a)}}}function je(i){let e=i[1],t,n=i[1]&&W(i);return{c(){n&&n.c(),t=F()},l(r){n&&n.l(r),t=F()},m(r,a){n&&n.m(r,a),O(r,t,a)},p(r,a){r[1]?e?J(e,r[1])?(n.d(1),n=W(r),e=r[1],n.c(),n.m(t.parentNode,t)):n.p(r,a):(n=W(r),e=r[1],n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=r[1])},i:N,o:N,d(r){r&&D(t),n&&n.d(r)}}}function Be(i){let e,t,n,r,a;const s=i[8].default,o=se(s,i,i[7],null);let u=[i[5]],f={};for(let l=0;l<u.length;l+=1)f=U(f,u[l]);return{c(){e=me("svg"),o&&o.c(),this.h()},l(l){e=ve(l,"svg",{});var c=Z(e);o&&o.l(c),c.forEach(D),this.h()},h(){$(e,f)},m(l,c){O(l,e,c),o&&o.m(e,null),i[9](e),n=!0,r||(a=[H(t=x.call(null,e,i[0])),H(i[4].call(null,e))],r=!0)},p(l,c){o&&o.p&&(!n||c&128)&&oe(o,s,l,l[7],n?ue(s,l[7],c,null):le(l[7]),null),$(e,f=Q(u,[c&32&&l[5]])),t&&K(t.update)&&c&1&&t.update.call(null,l[0])},i(l){n||(M(o,l),n=!0)},o(l){R(o,l),n=!1},d(l){l&&D(e),o&&o.d(l),i[9](null),r=!1,E(a)}}}function X(i){let e,t,n,r,a;const s=i[8].default,o=se(s,i,i[7],null);let u=[i[5]],f={};for(let l=0;l<u.length;l+=1)f=U(f,u[l]);return{c(){e=re(i[1]),o&&o.c(),this.h()},l(l){e=ae(l,(i[1]||"null").toUpperCase(),{});var c=Z(e);o&&o.l(c),c.forEach(D),this.h()},h(){I(i[1])(e,f)},m(l,c){O(l,e,c),o&&o.m(e,null),i[11](e),n=!0,r||(a=[H(t=x.call(null,e,i[0])),H(i[4].call(null,e))],r=!0)},p(l,c){o&&o.p&&(!n||c&128)&&oe(o,s,l,l[7],n?ue(s,l[7],c,null):le(l[7]),null),I(l[1])(e,f=Q(u,[c&32&&l[5]])),t&&K(t.update)&&c&1&&t.update.call(null,l[0])},i(l){n||(M(o,l),n=!0)},o(l){R(o,l),n=!1},d(l){l&&D(e),o&&o.d(l),i[11](null),r=!1,E(a)}}}function W(i){let e,t,n,r,a=[i[5]],s={};for(let o=0;o<a.length;o+=1)s=U(s,a[o]);return{c(){e=re(i[1]),this.h()},l(o){e=ae(o,(i[1]||"null").toUpperCase(),{}),Z(e).forEach(D),this.h()},h(){I(i[1])(e,s)},m(o,u){O(o,e,u),i[10](e),n||(r=[H(t=x.call(null,e,i[0])),H(i[4].call(null,e))],n=!0)},p(o,u){I(o[1])(e,s=Q(a,[u&32&&o[5]])),t&&K(t.update)&&u&1&&t.update.call(null,o[0])},d(o){o&&D(e),i[10](null),n=!1,E(r)}}}function Pe(i){let e,t,n,r;const a=[Be,je,ze],s=[];function o(u,f){return u[1]==="svg"?0:u[3]?1:2}return e=o(i),t=s[e]=a[e](i),{c(){t.c(),n=F()},l(u){t.l(u),n=F()},m(u,f){s[e].m(u,f),O(u,n,f),r=!0},p(u,[f]){let l=e;e=o(u),e===l?s[e].p(u,f):(he(),R(s[l],1,1,()=>{s[l]=null}),pe(),t=s[e],t?t.p(u,f):(t=s[e]=a[e](u),t.c()),M(t,1),t.m(n.parentNode,n))},i(u){r||(M(t),r=!0)},o(u){R(t),r=!1},d(u){u&&D(n),s[e].d(u)}}}function Ie(i,e,t){let n;const r=["use","tag","getElement"];let a=T(e,r),{$$slots:s={},$$scope:o}=e,{use:u=[]}=e,{tag:f}=e;const l=Ae(ge());let c;function m(){return c}function y(h){q[h?"unshift":"push"](()=>{c=h,t(2,c)})}function d(h){q[h?"unshift":"push"](()=>{c=h,t(2,c)})}function A(h){q[h?"unshift":"push"](()=>{c=h,t(2,c)})}return i.$$set=h=>{e=U(U({},e),ye(h)),t(5,a=T(e,r)),"use"in h&&t(0,u=h.use),"tag"in h&&t(1,f=h.tag),"$$scope"in h&&t(7,o=h.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&t(3,n=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(f)>-1)},[u,f,c,n,l,a,m,o,s,y,d,A]}class at extends fe{constructor(e){super(),de(this,e,Ie,Pe,J,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}var j;function Ee(i,e){e===void 0&&(e=!1);var t=i.CSS,n=j;if(typeof j=="boolean"&&!e)return j;var r=t&&typeof t.supports=="function";if(!r)return!1;var a=t.supports("--css-vars","yes"),s=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=a||s,e||(j=n),n}function qe(i,e,t){if(!i)return{x:0,y:0};var n=e.x,r=e.y,a=n+t.left,s=r+t.top,o,u;if(i.type==="touchstart"){var f=i;o=f.changedTouches[0].pageX-a,u=f.changedTouches[0].pageY-s}else{var l=i;o=l.pageX-a,u=l.pageY-s}return{x:o,y:u}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Xe={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},We={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},te={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ne=["touchstart","pointerdown","mousedown","keydown"],ie=["touchend","pointerup","mouseup","contextmenu"],B=[],Ve=function(i){Me(e,i);function e(t){var n=i.call(this,L(L({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(r){n.activateImpl(r)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Xe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return We},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return te},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var r=e.cssClasses,a=r.ROOT,s=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,r=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(a),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,r;if(t){try{for(var a=z(ne),s=a.next();!s.done;s=a.next()){var o=s.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,r;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=z(ie),s=a.next();!s.done;s=a.next()){var o=s.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var r=z(ne),a=r.next();!a.done;a=r.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=z(ie),a=r.next();!a.done;a=r.next()){var s=a.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,r=Object.keys(n);r.forEach(function(a){a.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[a],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var a=this.previousActivationEvent,s=a&&t!==void 0&&a.type!==t.type;if(!s){r.isActivated=!0,r.isProgrammatic=t===void 0,r.activationEvent=t,r.wasActivatedByPointer=r.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var o=t!==void 0&&B.length>0&&B.some(function(u){return n.adapter.containsEventTarget(u)});if(o){this.resetActivationState();return}t!==void 0&&(B.push(t.target),this.registerDeactivationHandlers(t)),r.wasElementMadeActive=this.checkElementMadeActive(t),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){B=[],!r.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(r.wasElementMadeActive=n.checkElementMadeActive(t),r.wasElementMadeActive&&n.animateActivation()),r.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,r=n.VAR_FG_TRANSLATE_START,a=n.VAR_FG_TRANSLATE_END,s=e.cssClasses,o=s.FG_DEACTIVATION,u=s.FG_ACTIVATION,f=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",c="";if(!this.adapter.isUnbounded()){var m=this.getFgTranslationCoordinates(),y=m.startPoint,d=m.endPoint;l=y.x+"px, "+y.y+"px",c=d.x+"px, "+d.y+"px"}this.adapter.updateCssVariable(r,l),this.adapter.updateCssVariable(a,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},f)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,r=t.wasActivatedByPointer,a;r?a=qe(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:s}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,r=this.activationState,a=r.hasDeactivationUXRun,s=r.isActivated,o=a||!s;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},te.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var r=L({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(r),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,r=t.wasElementMadeActive;(n||r)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),r=function(){var s=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return s+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:r();var a=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,r=t.VAR_LEFT,a=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},e}(Fe);const{applyPassive:P}=ke,{matches:Ze}=Le;function st(i,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:r=!1,color:a,active:s,rippleElement:o,eventTarget:u,activeTarget:f,addClass:l=d=>i.classList.add(d),removeClass:c=d=>i.classList.remove(d),addStyle:m=(d,A)=>i.style.setProperty(d,A),initPromise:y=Promise.resolve()}={}){let d,A=be("SMUI:addLayoutListener"),h,b=s,v=u,_=f;function S(){t?(l("mdc-ripple-surface"),a==="primary"?(l("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):a==="secondary"?(c("smui-ripple-surface--primary"),l("smui-ripple-surface--secondary")):(c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary"))):(c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),d&&b!==s&&(b=s,s?d.activate():s===!1&&d.deactivate()),e&&!d?(d=new Ve({addClass:l,browserSupportsCssVars:()=>Ee(window),computeBoundingRect:()=>(o||i).getBoundingClientRect(),containsEventTarget:g=>i.contains(g),deregisterDocumentInteractionHandler:(g,p)=>document.documentElement.removeEventListener(g,p,P()),deregisterInteractionHandler:(g,p)=>(u||i).removeEventListener(g,p,P()),deregisterResizeHandler:g=>window.removeEventListener("resize",g),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>s??Ze(f||i,":active"),isSurfaceDisabled:()=>!!r,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(g,p)=>document.documentElement.addEventListener(g,p,P()),registerInteractionHandler:(g,p)=>(u||i).addEventListener(g,p,P()),registerResizeHandler:g=>window.addEventListener("resize",g),removeClass:c,updateCssVariable:m}),y.then(()=>{d&&(d.init(),d.setUnbounded(n))})):d&&!e&&y.then(()=>{d&&(d.destroy(),d=void 0)}),d&&(v!==u||_!==f)&&(v=u,_=f,d.destroy(),requestAnimationFrame(()=>{d&&(d.init(),d.setUnbounded(n))})),!e&&n&&l("mdc-ripple-upgraded--unbounded")}S(),A&&(h=A(G));function G(){d&&d.layout()}return{update(g){({ripple:e,surface:t,unbounded:n,disabled:r,color:a,active:s,rippleElement:o,eventTarget:u,activeTarget:f,addClass:l,removeClass:c,addStyle:m,initPromise:y}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:p=>i.classList.add(p),removeClass:p=>i.classList.remove(p),addStyle:(p,w)=>i.style.setProperty(p,w),initPromise:Promise.resolve()},g)),S()},destroy(){d&&(d.destroy(),d=void 0,c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),h&&h()}}}export{Fe as M,st as R,at as S,Me as _,Te as a,L as b,Ne as c,Ye as d,et as e,Ae as f,Q as g,nt as h,it as i,Le as j,Qe as k,$e as l,rt as m,z as n,xe as o,tt as p,x as u};
