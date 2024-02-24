import{t as _,o as I}from"./index.yEnRFcSU.js";import{r as P,a as X}from"./scheduler.Dov2bnEp.js";function ne(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ae(n,i){_(n,1,1,()=>{i.delete(n.key)})}function re(n,i,e,t,r,a,s,c,d,m,p,f){let h=n.length,v=a.length,o=h;const A={};for(;o--;)A[n[o].key]=o;const w=[],b=new Map,S=new Map,C=[];for(o=v;o--;){const u=f(r,a,o),y=e(u);let g=s.get(y);g?t&&C.push(()=>g.p(u,i)):(g=m(y,u),g.c()),b.set(y,w[o]=g),y in A&&S.set(y,Math.abs(o-A[y]))}const R=new Set,F=new Set;function l(u){I(u,1),u.m(c,p),s.set(u.key,u),p=u.first,v--}for(;h&&v;){const u=w[v-1],y=n[h-1],g=u.key,H=y.key;u===y?(p=u.first,h--,v--):b.has(H)?!s.has(g)||R.has(g)?l(u):F.has(H)?h--:S.get(g)>S.get(H)?(F.add(g),l(u)):(R.add(H),h--):(d(y,s),h--)}for(;h--;){const u=n[h];b.has(u.key)||d(u,s)}for(;v;)l(w[v-1]);return P(C),w}function se(n,i,e,t={bubbles:!0},r=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!n)throw new Error("Tried to dipatch event without element.");const a=new CustomEvent(i,Object.assign(Object.assign({},t),{detail:e}));if(n==null||n.dispatchEvent(a),r&&i.startsWith("SMUI")){const s=new CustomEvent(i.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},t),{detail:e}));n==null||n.dispatchEvent(s),s.defaultPrevented&&a.preventDefault()}return a}function oe(n,i){let e=Object.getOwnPropertyNames(n);const t={};for(let r=0;r<e.length;r++){const a=e[r],s=a.indexOf("$");s!==-1&&i.indexOf(a.substring(0,s+1))!==-1||i.indexOf(a)===-1&&(t[a]=n[a])}return t}function ue(n,i){let e=Object.getOwnPropertyNames(n);const t={};for(let r=0;r<e.length;r++){const a=e[r];a.substring(0,i.length)===i&&(t[a.substring(i.length)]=n[a])}return t}var U=function(n,i){return U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},U(n,i)};function k(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");U(n,i);function e(){this.constructor=n}n.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}var D=function(){return D=Object.assign||function(i){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=e[a])}return i},D.apply(this,arguments)};function ce(n,i,e,t){var r=arguments.length,a=r<3?i:t===null?t=Object.getOwnPropertyDescriptor(i,e):t,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,i,e,t);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(a=(r<3?s(a):r>3?s(i,e,a):s(i,e))||a);return r>3&&a&&Object.defineProperty(i,e,a),a}function x(n){var i=typeof Symbol=="function"&&Symbol.iterator,e=i&&n[i],t=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&t>=n.length&&(n=void 0),{value:n&&n[t++],done:!n}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function de(n,i){var e=typeof Symbol=="function"&&n[Symbol.iterator];if(!e)return n;var t=e.call(n),r,a=[],s;try{for(;(i===void 0||i-- >0)&&!(r=t.next()).done;)a.push(r.value)}catch(c){s={error:c}}finally{try{r&&!r.done&&(e=t.return)&&e.call(t)}finally{if(s)throw s.error}}return a}function le(n,i,e){if(e||arguments.length===2)for(var t=0,r=i.length,a;t<r;t++)(a||!(t in i))&&(a||(a=Array.prototype.slice.call(i,0,t)),a[t]=i[t]);return n.concat(a||Array.prototype.slice.call(i))}/**
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
 */var q=function(){function n(i){i===void 0&&(i={}),this.adapter=i}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
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
 */function W(n,i){if(n.closest)return n.closest(i);for(var e=n;e;){if(j(e,i))return e;e=e.parentElement}return null}function j(n,i){var e=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return e.call(n,i)}function V(n){var i=n;if(i.offsetParent!==null)return i.scrollWidth;var e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);var t=e.scrollWidth;return document.documentElement.removeChild(e),t}const Z=Object.freeze(Object.defineProperty({__proto__:null,closest:W,estimateScrollWidth:V,matches:j},Symbol.toStringTag,{value:"Module"}));/**
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
 */function $(n){return n===void 0&&(n=window),E(n)?{passive:!0}:!1}function E(n){n===void 0&&(n=window);var i=!1;try{var e={get passive(){return i=!0,!1}},t=function(){};n.document.addEventListener("test",t,e),n.document.removeEventListener("test",t,e)}catch{i=!1}return i}const J=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:$},Symbol.toStringTag,{value:"Module"}));var M;function K(n,i){i===void 0&&(i=!1);var e=n.CSS,t=M;if(typeof M=="boolean"&&!i)return M;var r=e&&typeof e.supports=="function";if(!r)return!1;var a=e.supports("--css-vars","yes"),s=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");return t=a||s,i||(M=t),t}function Q(n,i,e){if(!n)return{x:0,y:0};var t=i.x,r=i.y,a=t+e.left,s=r+e.top,c,d;if(n.type==="touchstart"){var m=n;c=m.changedTouches[0].pageX-a,d=m.changedTouches[0].pageY-s}else{var p=n;c=p.pageX-a,d=p.pageY-s}return{x:c,y:d}}/**
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
 */var N={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},T={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},G={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var z=["touchstart","pointerdown","mousedown","keydown"],B=["touchend","pointerup","mouseup","contextmenu"],L=[],Y=function(n){k(i,n);function i(e){var t=n.call(this,D(D({},i.defaultAdapter),e))||this;return t.activationAnimationHasEnded=!1,t.activationTimer=0,t.fgDeactivationRemovalTimer=0,t.fgScale="0",t.frame={width:0,height:0},t.initialSize=0,t.layoutFrame=0,t.maxRadius=0,t.unboundedCoords={left:0,top:0},t.activationState=t.defaultActivationState(),t.activationTimerCallback=function(){t.activationAnimationHasEnded=!0,t.runDeactivationUXLogicIfReady()},t.activateHandler=function(r){t.activateImpl(r)},t.deactivateHandler=function(){t.deactivateImpl()},t.focusHandler=function(){t.handleFocus()},t.blurHandler=function(){t.handleBlur()},t.resizeHandler=function(){t.layout()},t}return Object.defineProperty(i,"cssClasses",{get:function(){return N},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return T},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return G},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var e=this,t=this.supportsPressRipple();if(this.registerRootHandlers(t),t){var r=i.cssClasses,a=r.ROOT,s=r.UNBOUNDED;requestAnimationFrame(function(){e.adapter.addClass(a),e.adapter.isUnbounded()&&(e.adapter.addClass(s),e.layoutInternal())})}},i.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(i.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(i.cssClasses.FG_DEACTIVATION));var t=i.cssClasses,r=t.ROOT,a=t.UNBOUNDED;requestAnimationFrame(function(){e.adapter.removeClass(r),e.adapter.removeClass(a),e.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},i.prototype.activate=function(e){this.activateImpl(e)},i.prototype.deactivate=function(){this.deactivateImpl()},i.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){e.layoutInternal(),e.layoutFrame=0})},i.prototype.setUnbounded=function(e){var t=i.cssClasses.UNBOUNDED;e?this.adapter.addClass(t):this.adapter.removeClass(t)},i.prototype.handleFocus=function(){var e=this;requestAnimationFrame(function(){return e.adapter.addClass(i.cssClasses.BG_FOCUSED)})},i.prototype.handleBlur=function(){var e=this;requestAnimationFrame(function(){return e.adapter.removeClass(i.cssClasses.BG_FOCUSED)})},i.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},i.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},i.prototype.registerRootHandlers=function(e){var t,r;if(e){try{for(var a=x(z),s=a.next();!s.done;s=a.next()){var c=s.value;this.adapter.registerInteractionHandler(c,this.activateHandler)}}catch(d){t={error:d}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},i.prototype.registerDeactivationHandlers=function(e){var t,r;if(e.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=x(B),s=a.next();!s.done;s=a.next()){var c=s.value;this.adapter.registerDocumentInteractionHandler(c,this.deactivateHandler)}}catch(d){t={error:d}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}},i.prototype.deregisterRootHandlers=function(){var e,t;try{for(var r=x(z),a=r.next();!a.done;a=r.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(c){e={error:c}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},i.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=x(B),a=r.next();!a.done;a=r.next()){var s=a.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(c){e={error:c}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},i.prototype.removeCssVars=function(){var e=this,t=i.strings,r=Object.keys(t);r.forEach(function(a){a.indexOf("VAR_")===0&&e.adapter.updateCssVariable(t[a],null)})},i.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var a=this.previousActivationEvent,s=a&&e!==void 0&&a.type!==e.type;if(!s){r.isActivated=!0,r.isProgrammatic=e===void 0,r.activationEvent=e,r.wasActivatedByPointer=r.isProgrammatic?!1:e!==void 0&&(e.type==="mousedown"||e.type==="touchstart"||e.type==="pointerdown");var c=e!==void 0&&L.length>0&&L.some(function(d){return t.adapter.containsEventTarget(d)});if(c){this.resetActivationState();return}e!==void 0&&(L.push(e.target),this.registerDeactivationHandlers(e)),r.wasElementMadeActive=this.checkElementMadeActive(e),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){L=[],!r.wasElementMadeActive&&e!==void 0&&(e.key===" "||e.keyCode===32)&&(r.wasElementMadeActive=t.checkElementMadeActive(e),r.wasElementMadeActive&&t.animateActivation()),r.wasElementMadeActive||(t.activationState=t.defaultActivationState())})}}}},i.prototype.checkElementMadeActive=function(e){return e!==void 0&&e.type==="keydown"?this.adapter.isSurfaceActive():!0},i.prototype.animateActivation=function(){var e=this,t=i.strings,r=t.VAR_FG_TRANSLATE_START,a=t.VAR_FG_TRANSLATE_END,s=i.cssClasses,c=s.FG_DEACTIVATION,d=s.FG_ACTIVATION,m=i.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var p="",f="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates(),v=h.startPoint,o=h.endPoint;p=v.x+"px, "+v.y+"px",f=o.x+"px, "+o.y+"px"}this.adapter.updateCssVariable(r,p),this.adapter.updateCssVariable(a,f),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(c),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer=setTimeout(function(){e.activationTimerCallback()},m)},i.prototype.getFgTranslationCoordinates=function(){var e=this.activationState,t=e.activationEvent,r=e.wasActivatedByPointer,a;r?a=Q(t,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:s}},i.prototype.runDeactivationUXLogicIfReady=function(){var e=this,t=i.cssClasses.FG_DEACTIVATION,r=this.activationState,a=r.hasDeactivationUXRun,s=r.isActivated,c=a||!s;c&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(t),this.fgDeactivationRemovalTimer=setTimeout(function(){e.adapter.removeClass(t)},G.FG_DEACTIVATION_MS))},i.prototype.rmBoundedActivationClasses=function(){var e=i.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},i.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return e.previousActivationEvent=void 0},i.numbers.TAP_DELAY_MS)},i.prototype.deactivateImpl=function(){var e=this,t=this.activationState;if(t.isActivated){var r=D({},t);t.isProgrammatic?(requestAnimationFrame(function(){e.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(r),e.resetActivationState()}))}},i.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,r=e.wasElementMadeActive;(t||r)&&this.runDeactivationUXLogicIfReady()},i.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width),r=function(){var s=Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2));return s+i.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?t:r();var a=Math.floor(t*i.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},i.prototype.updateLayoutCssVars=function(){var e=i.strings,t=e.VAR_FG_SIZE,r=e.VAR_LEFT,a=e.VAR_TOP,s=e.VAR_FG_SCALE;this.adapter.updateCssVariable(t,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},i}(q);const{applyPassive:O}=J,{matches:ee}=Z;function fe(n,{ripple:i=!0,surface:e=!1,unbounded:t=!1,disabled:r=!1,color:a,active:s,rippleElement:c,eventTarget:d,activeTarget:m,addClass:p=o=>n.classList.add(o),removeClass:f=o=>n.classList.remove(o),addStyle:h=(o,A)=>n.style.setProperty(o,A),initPromise:v=Promise.resolve()}={}){let o,A=X("SMUI:addLayoutListener"),w,b=s,S=d,C=m;function R(){e?(p("mdc-ripple-surface"),a==="primary"?(p("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):a==="secondary"?(f("smui-ripple-surface--primary"),p("smui-ripple-surface--secondary")):(f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary"))):(f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),o&&b!==s&&(b=s,s?o.activate():s===!1&&o.deactivate()),i&&!o?(o=new Y({addClass:p,browserSupportsCssVars:()=>K(window),computeBoundingRect:()=>(c||n).getBoundingClientRect(),containsEventTarget:l=>n.contains(l),deregisterDocumentInteractionHandler:(l,u)=>document.documentElement.removeEventListener(l,u,O()),deregisterInteractionHandler:(l,u)=>(d||n).removeEventListener(l,u,O()),deregisterResizeHandler:l=>window.removeEventListener("resize",l),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>s??ee(m||n,":active"),isSurfaceDisabled:()=>!!r,isUnbounded:()=>!!t,registerDocumentInteractionHandler:(l,u)=>document.documentElement.addEventListener(l,u,O()),registerInteractionHandler:(l,u)=>(d||n).addEventListener(l,u,O()),registerResizeHandler:l=>window.addEventListener("resize",l),removeClass:f,updateCssVariable:h}),v.then(()=>{o&&(o.init(),o.setUnbounded(t))})):o&&!i&&v.then(()=>{o&&(o.destroy(),o=void 0)}),o&&(S!==d||C!==m)&&(S=d,C=m,o.destroy(),requestAnimationFrame(()=>{o&&(o.init(),o.setUnbounded(t))})),!i&&t&&p("mdc-ripple-upgraded--unbounded")}R(),A&&(w=A(F));function F(){o&&o.layout()}return{update(l){({ripple:i,surface:e,unbounded:t,disabled:r,color:a,active:s,rippleElement:c,eventTarget:d,activeTarget:m,addClass:p,removeClass:f,addStyle:h,initPromise:v}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:u=>n.classList.add(u),removeClass:u=>n.classList.remove(u),addStyle:(u,y)=>n.style.setProperty(u,y),initPromise:Promise.resolve()},l)),R()},destroy(){o&&(o.destroy(),o=void 0,f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),w&&w()}}}export{q as M,fe as R,k as _,D as a,de as b,Z as c,se as d,oe as e,ne as f,ce as g,x as h,le as i,ae as o,ue as p,re as u};
