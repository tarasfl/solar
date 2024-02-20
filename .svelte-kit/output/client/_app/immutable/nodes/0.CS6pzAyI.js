import{s as ee,n as X,x as Be,v as ve,y as Fe,z as Ue,A as qe,B as He,i as le,r as ct,q as Me,u as dt,D as ce,o as ut,E as mt,w as ht,b as pt}from"../chunks/scheduler.Dfyphg_g.js";import{S as te,i as ae,e as O,s as fe,c as F,g as je,h as be,b as R,d as E,p as D,D as vt,a as z,F as Le,G as Ne,o as P,m as B,v as Y,w as Z,x as J,y as Q,q as ft,j as U}from"../chunks/index.BQfX63M5.js";import{o as Ge,s as M,x as g,l as C,_ as c,t as N,n as f,p as bt,e as Ce,q as Ae,b as Ke,T as b,E as yt,r as Ve,u as de,v as gt,w as We,i as _t,d as xt,k as wt,y as Xe,z as $e}from"../chunks/filled-text-field.DmJhIX42.js";import{a as De,u as It,g as Et,f as Ct,c as H}from"../chunks/classAdderBuilder.Be0LvMeG.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let At;function Tt(a){return(e,t)=>Ge(e,t,{get(){return(this.renderRoot??At??(At=document.createDocumentFragment())).querySelectorAll(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function St(a){return(e,t)=>{const{slot:i}=a??{},s="slot"+(i?`[name=${i}]`:":not([name])");return Ge(e,t,{get(){var l;const o=(l=this.renderRoot)==null?void 0:l.querySelector(s);return(o==null?void 0:o.assignedNodes(a))??[]}})}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class kt extends M{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return g`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Ot=C`:host{display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ye=class extends kt{};ye.styles=[Ot];ye=c([N("md-elevation")],ye);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const q=Symbol("isFocusable"),ue=Symbol("privateIsFocusable"),K=Symbol("externalTabIndex"),V=Symbol("isUpdatingTabIndex"),W=Symbol("updateTabIndex"),me=Symbol("hasConstructed");function Ft(a){var e,t,i,s;class o extends a{get[q](){return this[ue]}set[q](u){this[q]!==u&&(this[ue]=u,this[W]())}constructor(...u){super(...u),this[e]=!1,this[t]=null,this[i]=!1,this[s]=!1,this[q]=!0,queueMicrotask(()=>{this[me]=!0,this[W]()})}attributeChangedCallback(u,d,h){if(u!=="tabindex"){super.attributeChangedCallback(u,d,h);return}if(this.requestUpdate("tabIndex",Number(d??-1)),!this[V]){if(!this.hasAttribute("tabindex")){this[K]=null,this[W]();return}this[K]=this.tabIndex}}[(e=ue,t=K,i=V,s=me,W)](){if(!this[me])return;const u=this[q]?0:-1,d=this[K]??u;this[V]=!0,this.tabIndex=d,this[V]=!1}}return c([f({noAccessor:!0})],o.prototype,"tabIndex",void 0),o}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Ye;const $=Symbol("indicator"),Mt=Symbol("animateIndicator"),Lt=Ft(M);class A extends Lt{get selected(){return this.active}set selected(e){this.active=e}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e=g`<div class="indicator"></div>`;return g`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${Ke(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator?b:e}
      </div>
      ${this.fullWidthIndicator?e:b}
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(e){await 0,!e.defaultPrevented&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.click())}handleContentClick(e){e.stopPropagation(),this.click()}[(Ye=$,Mt)](e){if(!this[$])return;this[$].getAnimations().forEach(i=>{i.cancel()});const t=this.getKeyframes(e);t!==null&&this[$].animate(t,{duration:250,easing:yt.EMPHASIZED})}getKeyframes(e){var r;const t=Nt();if(!this.active)return t?[{opacity:1},{transform:"none"}]:null;const i={},s=((r=e[$])==null?void 0:r.getBoundingClientRect())??{},o=s.left,l=s.width,u=this[$].getBoundingClientRect(),d=u.left,h=u.width,p=l/h;return!t&&o!==void 0&&d!==void 0&&!isNaN(p)?i.transform=`translateX(${(o-d).toFixed(4)}px) scaleX(${p.toFixed(4)})`:i.opacity=0,[i,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(const e of this.assignedDefaultNodes){const t=e.nodeType===Node.TEXT_NODE&&!!e.wholeText.match(/\S/);if(e.nodeType===Node.ELEMENT_NODE||t)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}}c([f({type:Boolean,reflect:!0,attribute:"md-tab"})],A.prototype,"isTab",void 0);c([f({type:Boolean,reflect:!0})],A.prototype,"active",void 0);c([f({type:Boolean})],A.prototype,"selected",null);c([f({type:Boolean,attribute:"has-icon"})],A.prototype,"hasIcon",void 0);c([f({type:Boolean,attribute:"icon-only"})],A.prototype,"iconOnly",void 0);c([Ce(".indicator")],A.prototype,Ye,void 0);c([bt()],A.prototype,"fullWidthIndicator",void 0);c([St({flatten:!0})],A.prototype,"assignedDefaultNodes",void 0);c([Ae({slot:"icon",flatten:!0})],A.prototype,"assignedIcons",void 0);function Nt(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class $t extends A{constructor(){super(...arguments),this.fullWidthIndicator=!0}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Dt=C`:host{--_active-indicator-color: var(--md-secondary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-secondary-tab-active-indicator-height, 2px);--_active-label-text-color: var(--md-secondary-tab-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color: var(--md-secondary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-secondary-tab-container-elevation, 0);--_container-height: var(--md-secondary-tab-container-height, 48px);--_container-shape: var(--md-secondary-tab-container-shape, 0px);--_focus-label-text-color: var(--md-secondary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-secondary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-secondary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-secondary-tab-hover-state-layer-opacity, 0.08);--_label-text-font: var(--md-secondary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-secondary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-secondary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-secondary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-secondary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-secondary-tab-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-secondary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-secondary-tab-active-focus-icon-color, );--_active-focus-label-text-color: var(--md-secondary-tab-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-icon-color: var(--md-secondary-tab-active-hover-icon-color, );--_active-hover-label-text-color: var(--md-secondary-tab-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color: var(--md-secondary-tab-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-opacity: var(--md-secondary-tab-active-hover-state-layer-opacity, 0.08);--_active-icon-color: var(--md-secondary-tab-active-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_active-indicator-shape: var(--md-secondary-tab-active-indicator-shape, 0);--_active-pressed-icon-color: var(--md-secondary-tab-active-pressed-icon-color, );--_active-pressed-label-text-color: var(--md-secondary-tab-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color: var(--md-secondary-tab-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-opacity: var(--md-secondary-tab-active-pressed-state-layer-opacity, 0.12);--_label-text-color: var(--md-secondary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-secondary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-secondary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-size: var(--md-secondary-tab-icon-size, 24px);--_icon-color: var(--md-secondary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-secondary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var( --md-secondary-tab-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-secondary-tab-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-secondary-tab-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-secondary-tab-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=secondary-tab-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Rt=C`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}/*# sourceMappingURL=tab-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ge=class extends $t{};ge.styles=[Rt,Dt];ge=c([N("md-secondary-tab")],ge);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Te extends M{constructor(){super(...arguments),this.multiline=!1}render(){return g`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let e=!1,t=0;for(const i of this.textSlots)if(zt(i)&&(t+=1),t>1){e=!0;break}this.multiline=e}}c([f({type:Boolean,reflect:!0})],Te.prototype,"multiline",void 0);c([Tt(".text slot")],Te.prototype,"textSlots",void 0);function zt(a){var e;for(const t of a.assignedNodes({flatten:!0})){const i=t.nodeType===Node.ELEMENT_NODE,s=t.nodeType===Node.TEXT_NODE&&((e=t.textContent)==null?void 0:e.match(/\S/));if(i||s)return!0}return!1}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Pt=C`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let _e=class extends Te{};_e.styles=[Pt];_e=c([N("md-item")],_e);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ze(a,e=S){const t=Qe(a,e);return t&&(t.tabIndex=0,t.focus()),t}function Je(a,e=S){const t=Bt(a,e);return t&&(t.tabIndex=0,t.focus()),t}function he(a,e=S){for(let t=0;t<a.length;t++){const i=a[t];if(i.tabIndex===0&&e(i))return{item:i,index:t}}return null}function Qe(a,e=S){for(const t of a)if(e(t))return t;return null}function Bt(a,e=S){for(let t=a.length-1;t>=0;t--){const i=a[t];if(e(i))return i}return null}function Ut(a,e,t=S){for(let i=1;i<a.length;i++){const s=(i+e)%a.length,o=a[s];if(t(o))return o}return a[e]?a[e]:null}function qt(a,e,t=S){for(let i=1;i<a.length;i++){const s=(e-i+a.length)%a.length,o=a[s];if(t(o))return o}return a[e]?a[e]:null}function Re(a,e,t=S){if(e){const i=Ut(a,e.index,t);return i&&(i.tabIndex=0,i.focus()),i}else return Ze(a,t)}function ze(a,e,t=S){if(e){const i=qt(a,e.index,t);return i&&(i.tabIndex=0,i.focus()),i}else return Je(a,t)}function Ht(){return new Event("request-activation",{bubbles:!0,composed:!0})}function S(a){return!a.disabled}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class k extends M{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&this.type!=="link"}willUpdate(e){this.href&&(this.type="link"),super.willUpdate(e)}render(){return this.renderListItem(g`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const t=this.type==="link";let i;switch(this.type){case"link":i=de`a`;break;case"button":i=de`button`;break;default:case"text":i=de`li`;break}const s=this.type!=="text",o=t&&this.target?this.target:b;return gt`
      <${i}
        id="item"
        tabindex="${this.isDisabled||!s?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||b}
        aria-checked=${this.ariaChecked||b}
        aria-expanded=${this.ariaExpanded||b}
        aria-haspopup=${this.ariaHasPopup||b}
        class="list-item ${Ke(this.getRenderClasses())}"
        href=${this.href||b}
        target=${o}
        @focus=${this.onFocus}
      >${e}</${i}>
    `}renderRipple(){return this.type==="text"?b:g` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return this.type==="text"?b:g` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(e){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return g`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(Ht())}focus(){var e;(e=this.listItemRoot)==null||e.focus()}}Ve(k);k.shadowRootOptions={...M.shadowRootOptions,delegatesFocus:!0};c([f({type:Boolean,reflect:!0})],k.prototype,"disabled",void 0);c([f({reflect:!0})],k.prototype,"type",void 0);c([f({type:Boolean,attribute:"md-list-item",reflect:!0})],k.prototype,"isListItem",void 0);c([f()],k.prototype,"href",void 0);c([f()],k.prototype,"target",void 0);c([Ce(".list-item")],k.prototype,"listItemRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const jt=C`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}/*# sourceMappingURL=list-item-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let xe=class extends k{};xe.styles=[jt];xe=c([N("md-list-item")],xe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ie extends M{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}c([f({type:Boolean,reflect:!0})],ie.prototype,"inset",void 0);c([f({type:Boolean,reflect:!0,attribute:"inset-start"})],ie.prototype,"insetStart",void 0);c([f({type:Boolean,reflect:!0,attribute:"inset-end"})],ie.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Gt=C`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let we=class extends ie{};we.styles=[Gt];we=c([N("md-divider")],we);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const T={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class Kt{constructor(e){this.handleKeydown=h=>{const p=h.key;if(h.defaultPrevented||!this.isNavigableKey(p))return;const r=this.items;if(!r.length)return;const n=he(r,this.isActivatable);n&&(n.item.tabIndex=-1),h.preventDefault();const _=this.isRtl(),y=_?T.ArrowRight:T.ArrowLeft,v=_?T.ArrowLeft:T.ArrowRight;switch(p){case T.ArrowDown:case v:Re(r,n,this.isActivatable);break;case T.ArrowUp:case y:ze(r,n,this.isActivatable);break;case T.Home:Ze(r,this.isActivatable);break;case T.End:Je(r,this.isActivatable);break}},this.onDeactivateItems=()=>{const h=this.items;for(const p of h)this.deactivateItem(p)},this.onRequestActivation=h=>{this.onDeactivateItems();const p=h.target;this.activateItem(p),p.focus()},this.onSlotchange=()=>{const h=this.items;let p=!1;for(const n of h){if(!n.disabled&&n.tabIndex>-1&&!p){p=!0,n.tabIndex=0;continue}n.tabIndex=-1}if(p)return;const r=Qe(h,this.isActivatable);r&&(r.tabIndex=0)};const{isItem:t,getPossibleItems:i,isRtl:s,deactivateItem:o,activateItem:l,isNavigableKey:u,isActivatable:d}=e;this.isItem=t,this.getPossibleItems=i,this.isRtl=s,this.deactivateItem=o,this.activateItem=l,this.isNavigableKey=u,this.isActivatable=d}get items(){const e=this.getPossibleItems(),t=[];for(const i of e){if(this.isItem(i)){t.push(i);continue}const o=i.item;o&&this.isItem(o)&&t.push(o)}return t}activateNextItem(){const e=this.items,t=he(e,this.isActivatable);return t&&(t.item.tabIndex=-1),Re(e,t,this.isActivatable)}activatePreviousItem(){const e=this.items,t=he(e,this.isActivatable);return t&&(t.item.tabIndex=-1),ze(e,t,this.isActivatable)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Vt=new Set(Object.values(T));class et extends M{get items(){return this.listController.items}constructor(){super(),this.listController=new Kt({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>Vt.has(e),isActivatable:e=>!e.disabled&&e.type!=="text"}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return g`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}c([Ae({flatten:!0})],et.prototype,"slotItems",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Wt=C`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ie=class extends et{};Ie.styles=[Wt];Ie=c([N("md-list")],Ie);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Xt(a){a.addInitializer(e=>{const t=e;t.addEventListener("click",async i=>{const{type:s,[We]:o}=t,{form:l}=o;if(!(!l||s==="button")&&(await new Promise(u=>{setTimeout(u)}),!i.defaultPrevented)){if(s==="reset"){l.reset();return}l.addEventListener("submit",u=>{Object.defineProperty(u,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),o.setFormValue(t.value),l.requestSubmit()}})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Yt=wt(M);class I extends Yt{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[We].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{!_t(e)||!this.buttonElement||(this.focus(),xt(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){var s;const e=this.disabled&&!this.href,t=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return g`
      ${(s=this.renderElevationOrOutline)==null?void 0:s.call(this)}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple for=${i} ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:i}=this;return g`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${e||b}"
      aria-haspopup="${t||b}"
      aria-expanded="${i||b}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:i}=this;return g`<a
      id="link"
      class="button"
      aria-label="${e||b}"
      aria-haspopup="${t||b}"
      aria-expanded="${i||b}"
      href=${this.href}
      target=${this.target||b}
      >${this.renderContent()}
    </a>`}renderContent(){const e=g`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return g`
      <span class="touch"></span>
      ${this.trailingIcon?b:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:b}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Ve(I),Xt(I);I.formAssociated=!0;I.shadowRootOptions={mode:"open",delegatesFocus:!0};c([f({type:Boolean,reflect:!0})],I.prototype,"disabled",void 0);c([f()],I.prototype,"href",void 0);c([f()],I.prototype,"target",void 0);c([f({type:Boolean,attribute:"trailing-icon",reflect:!0})],I.prototype,"trailingIcon",void 0);c([f({type:Boolean,attribute:"has-icon",reflect:!0})],I.prototype,"hasIcon",void 0);c([f()],I.prototype,"type",void 0);c([f({reflect:!0})],I.prototype,"value",void 0);c([Ce(".button")],I.prototype,"buttonElement",void 0);c([Ae({slot:"icon",flatten:!0})],I.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Zt extends I{renderElevationOrOutline(){return g`<md-elevation></md-elevation>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Jt=C`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Qt=C`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ea=C`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ee=class extends Zt{};Ee.styles=[ea,Qt,Jt];Ee=c([N("md-filled-button")],Ee);function Pe(a,e,t,i={bubbles:!0},s=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!a)throw new Error("Tried to dipatch event without element.");const o=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:t}));if(a==null||a.dispatchEvent(o),s&&e.startsWith("SMUI")){const l=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:t}));a==null||a.dispatchEvent(l),l.defaultPrevented&&o.preventDefault()}return o}function ta(a){let e,t='<div class="svelte-fe559p"><img alt="logo" src="./logo.png" class="logo svelte-fe559p"/></div>',i,s;return{c(){e=O("header"),e.innerHTML=t,i=fe(),s=O("md-divider"),this.h()},l(o){e=F(o,"HEADER",{class:!0,"data-svelte-h":!0}),je(e)!=="svelte-1j2fppr"&&(e.innerHTML=t),i=be(o),s=F(o,"MD-DIVIDER",{class:!0}),R(s).forEach(E),this.h()},h(){D(e,"class","svelte-fe559p"),vt(s,"class","svelte-fe559p")},m(o,l){z(o,e,l),z(o,i,l),z(o,s,l)},p:X,i:X,o:X,d(o){o&&(E(e),E(i),E(s))}}}class aa extends te{constructor(e){super(),ae(this,e,null,ta,ee,{})}}/**
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
 */var ia=function(){function a(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var pe="mdc-dom-focus-sentinel",oa=function(){function a(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return a.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},a.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+pe)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},a.prototype.wrapTabFocus=function(e){var t=this,i=this.createSentinel(),s=this.createSentinel();i.addEventListener("focus",function(){var o=t.getFocusableElements(e);o.length>0&&o[o.length-1].focus()}),s.addEventListener("focus",function(){var o=t.getFocusableElements(e);o.length>0&&o[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(s)},a.prototype.focusInitialElement=function(e,t){var i=0;t&&(i=Math.max(e.indexOf(t),0)),e[i].focus()},a.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(i){var s=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",o=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(pe)&&!s,l=!1;if(o){var u=getComputedStyle(i);l=u.display==="none"||u.visibility==="hidden"}return o&&!l})},a.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(pe),e},a}();const sa=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:oa},Symbol.toStringTag,{value:"Module"}));/**
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
 */var w={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},ra={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var tt=function(a){Xe(e,a);function e(t){var i=a.call(this,$e($e({},e.defaultAdapter),t))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return ra},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(w.OPEN),this.adapter.addClass(w.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(w.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(w.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(w.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(w.OPENING)||this.adapter.hasClass(w.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(w.CLOSING)},e.prototype.handleKeydown=function(t){var i=t.keyCode,s=t.key,o=s==="Escape"||i===27;o&&this.close()},e.prototype.handleTransitionEnd=function(t){var i=w.OPENING,s=w.CLOSING,o=w.OPEN,l=w.ANIMATE,u=w.ROOT,d=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,u);d&&(this.isClosing()?(this.adapter.removeClass(o),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(l),this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return!!t.classList},e}(ia);/**
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
 */var na=function(a){Xe(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(tt);function la(a){let e,t,i,s,o,l;const u=a[15].default,d=Be(u,a,a[14],null);let h=[{class:t=De({[a[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":a[2]==="dismissible","mdc-drawer--modal":a[2]==="modal","smui-drawer__absolute":a[2]==="modal"&&!a[3],...a[6]})},a[8]],p={};for(let r=0;r<h.length;r+=1)p=ve(p,h[r]);return{c(){e=O("aside"),d&&d.c(),this.h()},l(r){e=F(r,"ASIDE",{class:!0});var n=R(e);d&&d.l(n),n.forEach(E),this.h()},h(){Le(e,p)},m(r,n){z(r,e,n),d&&d.m(e,null),a[16](e),s=!0,o||(l=[Fe(i=It.call(null,e,a[0])),Fe(a[7].call(null,e)),Ne(e,"keydown",function(){le(a[4]&&a[4].handleKeydown.bind(a[4]))&&(a[4]&&a[4].handleKeydown.bind(a[4])).apply(this,arguments)}),Ne(e,"transitionend",function(){le(a[4]&&a[4].handleTransitionEnd.bind(a[4]))&&(a[4]&&a[4].handleTransitionEnd.bind(a[4])).apply(this,arguments)})],o=!0)},p(r,[n]){a=r,d&&d.p&&(!s||n&16384)&&Ue(d,u,a,a[14],s?He(u,a[14],n,null):qe(a[14]),null),Le(e,p=Et(h,[(!s||n&78&&t!==(t=De({[a[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":a[2]==="dismissible","mdc-drawer--modal":a[2]==="modal","smui-drawer__absolute":a[2]==="modal"&&!a[3],...a[6]})))&&{class:t},n&256&&a[8]])),i&&le(i.update)&&n&1&&i.update.call(null,a[0])},i(r){s||(P(d,r),s=!0)},o(r){B(d,r),s=!1},d(r){r&&E(e),d&&d.d(r),a[16](null),o=!1,ct(l)}}}function ca(a,e,t){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let s=Me(e,i),{$$slots:o={},$$scope:l}=e;const{FocusTrap:u}=sa,d=Ct(dt());let{use:h=[]}=e,{class:p=""}=e,{variant:r=void 0}=e,{open:n=!1}=e,{fixed:_=!0}=e,y,v,x={},j=null,oe,L=!1;ce("SMUI:list:nav",!0),ce("SMUI:list:item:nav",!0),ce("SMUI:list:wrapFocus",!0);let se=r;ut(()=>{oe=new u(y,{skipInitialFocus:!0}),t(4,v=Se()),v&&v.init()}),mt(()=>{v&&v.destroy(),L&&L.removeEventListener("SMUIDrawerScrim:click",re)});function Se(){var m,ne;L&&L.removeEventListener("SMUIDrawerScrim:click",re),r==="modal"&&(L=(ne=(m=y.parentNode)===null||m===void 0?void 0:m.querySelector(".mdc-drawer-scrim"))!==null&&ne!==void 0?ne:!1,L&&L.addEventListener("SMUIDrawerScrim:click",re));const Oe=r==="dismissible"?tt:r==="modal"?na:void 0;return Oe?new Oe({addClass:it,removeClass:ot,hasClass:at,elementHasClass:(G,lt)=>G.classList.contains(lt),saveFocus:()=>j=document.activeElement,restoreFocus:()=>{j&&"focus"in j&&y.contains(document.activeElement)&&j.focus()},focusActiveNavigationItem:()=>{const G=y.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");G&&G.focus()},notifyClose:()=>{t(9,n=!1),Pe(y,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{t(9,n=!0),Pe(y,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>oe.trapFocus(),releaseFocus:()=>oe.releaseFocus()}):void 0}function at(m){return m in x?x[m]:ke().classList.contains(m)}function it(m){x[m]||t(6,x[m]=!0,x)}function ot(m){(!(m in x)||x[m])&&t(6,x[m]=!1,x)}function re(){v&&"handleScrimClick"in v&&v.handleScrimClick()}function st(m){t(9,n=m)}function rt(){return n}function ke(){return y}function nt(m){pt[m?"unshift":"push"](()=>{y=m,t(5,y)})}return a.$$set=m=>{e=ve(ve({},e),ht(m)),t(8,s=Me(e,i)),"use"in m&&t(0,h=m.use),"class"in m&&t(1,p=m.class),"variant"in m&&t(2,r=m.variant),"open"in m&&t(9,n=m.open),"fixed"in m&&t(3,_=m.fixed),"$$scope"in m&&t(14,l=m.$$scope)},a.$$.update=()=>{a.$$.dirty&8212&&se!==r&&(t(13,se=r),v&&v.destroy(),t(6,x={}),t(4,v=Se()),v&&v.init()),a.$$.dirty&528&&v&&v.isOpen()!==n&&(n?v.open():v.close())},[h,p,r,_,v,y,x,d,s,n,st,rt,ke,se,l,o,nt]}class da extends te{constructor(e){super(),ae(this,e,ca,la,ee,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}H({class:"mdc-drawer-app-content",tag:"div"});const ua=H({class:"mdc-drawer__content",tag:"div"});H({class:"mdc-drawer__header",tag:"div"});H({class:"mdc-drawer__title",tag:"h1"});H({class:"mdc-drawer__subtitle",tag:"h2"});function ma(a){let e,t='<md-list-item class="list-item"><md-filled-button href="/" class="svelte-2ya5gk">dashboard</md-filled-button></md-list-item> <md-list-item class="list-item"><md-filled-button href="/lead-search" class="svelte-2ya5gk">Lead generation</md-filled-button></md-list-item> <md-list-item class="list-item"><md-filled-button href="/marketing" class="svelte-2ya5gk">Marketing</md-filled-button></md-list-item> <md-list-item class="list-item"><md-filled-button href="/users" class="svelte-2ya5gk">Users</md-filled-button></md-list-item> <md-list-item class="list-item"><md-filled-button href="/account-overview" class="svelte-2ya5gk">Account overview</md-filled-button></md-list-item> <md-list-item class="list-item"><md-filled-button href="/transactions" class="svelte-2ya5gk">Transactions</md-filled-button></md-list-item>';return{c(){e=O("md-list"),e.innerHTML=t,this.h()},l(i){e=F(i,"MD-LIST",{style:!0,"data-svelte-h":!0}),je(e)!=="svelte-l3qut7"&&(e.innerHTML=t),this.h()},h(){ft(e,"max-width","220px")},m(i,s){z(i,e,s)},p:X,d(i){i&&E(e)}}}function ha(a){let e,t;return e=new ua({props:{$$slots:{default:[ma]},$$scope:{ctx:a}}}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,s){J(e,i,s),t=!0},p(i,s){const o={};s&1&&(o.$$scope={dirty:s,ctx:i}),e.$set(o)},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){B(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function pa(a){let e,t;return e=new da({props:{$$slots:{default:[ha]},$$scope:{ctx:a}}}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,s){J(e,i,s),t=!0},p(i,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:i}),e.$set(o)},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){B(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}class va extends te{constructor(e){super(),ae(this,e,null,pa,ee,{})}}function fa(a){let e,t,i,s,o,l,u,d,h;i=new aa({}),l=new va({});const p=a[1].default,r=Be(p,a,a[0],null);return{c(){e=O("html"),t=O("body"),Y(i.$$.fragment),s=fe(),o=O("div"),Y(l.$$.fragment),u=fe(),d=O("main"),r&&r.c(),this.h()},l(n){e=F(n,"HTML",{lang:!0,class:!0});var _=R(e);t=F(_,"BODY",{class:!0});var y=R(t);Z(i.$$.fragment,y),s=be(y),o=F(y,"DIV",{class:!0});var v=R(o);Z(l.$$.fragment,v),u=be(v),d=F(v,"MAIN",{class:!0});var x=R(d);r&&r.l(x),x.forEach(E),v.forEach(E),y.forEach(E),_.forEach(E),this.h()},h(){D(d,"class","main-content w-screen h-screen app-content svelte-10vrx45"),D(o,"class","drawer-container svelte-10vrx45"),D(t,"class","svelte-10vrx45"),D(e,"lang","en"),D(e,"class","svelte-10vrx45")},m(n,_){z(n,e,_),U(e,t),J(i,t,null),U(t,s),U(t,o),J(l,o,null),U(o,u),U(o,d),r&&r.m(d,null),h=!0},p(n,[_]){r&&r.p&&(!h||_&1)&&Ue(r,p,n,n[0],h?He(p,n[0],_,null):qe(n[0]),null)},i(n){h||(P(i.$$.fragment,n),P(l.$$.fragment,n),P(r,n),h=!0)},o(n){B(i.$$.fragment,n),B(l.$$.fragment,n),B(r,n),h=!1},d(n){n&&E(e),Q(i),Q(l),r&&r.d(n)}}}function ba(a,e,t){let{$$slots:i={},$$scope:s}=e;return a.$$set=o=>{"$$scope"in o&&t(0,s=o.$$scope)},[s,i]}class ka extends te{constructor(e){super(),ae(this,e,ba,fa,ee,{})}}export{ka as component};
