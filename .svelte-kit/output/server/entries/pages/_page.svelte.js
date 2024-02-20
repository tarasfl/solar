import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, h as getContext, v as validate_component, m as missing_component, i as subscribe, s as setContext, o as onDestroy, k as set_store_value, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, l as each, j as escape } from "../../chunks/ssr.js";
import "chart.js/auto";
import { w as writable } from "../../chunks/index.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement, g as globals } from "../../chunks/SmuiElement.js";
import { MDCRippleFoundation, util } from "@material/ripple";
import { events, ponyfill } from "@material/dom";
const CommonLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "span" : void 0 } = $$props;
  const context = getContext("SMUI:label:context");
  const tabindex = getContext("SMUI:label:tabindex");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__label": context === "button",
            "mdc-fab__label": context === "fab",
            "mdc-tab__text-label": context === "tab",
            "mdc-image-list__label": context === "image-list",
            "mdc-snackbar__label": context === "snackbar",
            "mdc-banner__text": context === "banner",
            "mdc-segmented-button__label": context === "segmented-button",
            "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
            "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell"
          })
        },
        context === "snackbar" ? { "aria-atomic": "false" } : {},
        { tabindex },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ContextFragment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeValue, $$unsubscribe_storeValue;
  let { key } = $$props;
  let { value } = $$props;
  const storeValue = writable(value);
  $$unsubscribe_storeValue = subscribe(storeValue, (value2) => $storeValue = value2);
  setContext(key, storeValue);
  onDestroy(() => {
    storeValue.set(void 0);
  });
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  set_store_value(storeValue, $storeValue = value, $storeValue);
  $$unsubscribe_storeValue();
  return `${slots.default ? slots.default({}) : ``}`;
});
const Chart_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <canvas id="myChart"></canvas>`;
});
const SegmentedButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "segments", "key", "singleSelect", "selected", "getElement"]);
  let $singleSelectStore, $$unsubscribe_singleSelectStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { segments = [] } = $$props;
  let { key = (segment) => segment } = $$props;
  let { singleSelect = false } = $$props;
  let { selected = singleSelect ? void 0 : [] } = $$props;
  let element;
  let initialSelected = segments.map((segmentId) => singleSelect && selected === segmentId || !singleSelect && selected.indexOf(segmentId) !== -1);
  setContext("SMUI:icon:context", "segmented-button");
  setContext("SMUI:label:context", "segmented-button");
  const singleSelectStore = writable(singleSelect);
  $$unsubscribe_singleSelectStore = subscribe(singleSelectStore, (value) => $singleSelectStore = value);
  setContext("SMUI:segmented-button:singleSelect", singleSelectStore);
  singleSelect ? selected : new Set(selected);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0)
    $$bindings.segments(segments);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.singleSelect === void 0 && $$bindings.singleSelect && singleSelect !== void 0)
    $$bindings.singleSelect(singleSelect);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  set_store_value(singleSelectStore, $singleSelectStore = singleSelect, $singleSelectStore);
  $$unsubscribe_singleSelectStore();
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-segmented-button": true,
          "mdc-segmented-button--single-select": singleSelect
        }))
      },
      {
        role: escape_attribute_value(singleSelect ? "radiogroup" : "group")
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${each(segments, (segment, i) => {
    return `${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:segmented-button:segment:index",
        value: i
      },
      {},
      {
        default: () => {
          return `${validate_component(ContextFragment, "ContextFragment").$$render(
            $$result,
            {
              key: "SMUI:segmented-button:segment:initialSelected",
              value: initialSelected[i]
            },
            {},
            {
              default: () => {
                return `${slots.default ? slots.default({ segment }) : ``} `;
              }
            }
          )} `;
        }
      }
    )}`;
  })} </div>`;
});
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => util.supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
        }
      });
    }
    if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
const Segment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "segment", "ripple", "touch", "selected", "getElement"]);
  let $$unsubscribe_index;
  let $$unsubscribe_singleSelect;
  let $initialSelectedStore, $$unsubscribe_initialSelectedStore;
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { segment: segmentId } = $$props;
  let { ripple = true } = $$props;
  let { touch = false } = $$props;
  const initialSelectedStore = getContext("SMUI:segmented-button:segment:initialSelected");
  $$unsubscribe_initialSelectedStore = subscribe(initialSelectedStore, (value) => $initialSelectedStore = value);
  let { selected = uninitializedValue } = $$props;
  if (isUninitializedValue(selected)) {
    selected = $initialSelectedStore;
  }
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  const singleSelect = getContext("SMUI:segmented-button:singleSelect");
  $$unsubscribe_singleSelect = subscribe(singleSelect, (value) => value);
  const index = getContext("SMUI:segmented-button:segment:index");
  $$unsubscribe_index = subscribe(index, (value) => value);
  if (!segmentId) {
    throw new Error("The segment property is required! It should be passed down from the SegmentedButton to the Segment.");
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.segment === void 0 && $$bindings.segment && segmentId !== void 0)
    $$bindings.segment(segmentId);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  $$unsubscribe_index();
  $$unsubscribe_singleSelect();
  $$unsubscribe_initialSelectedStore();
  return `<button${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-segmented-button__segment": true,
          "mdc-segmented-button__segment--touch": touch,
          "mdc-segmented-button__segment--selected": selected,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      {
        role: escape_attribute_value(singleSelect ? "radio" : void 0)
      },
      {
        "aria-pressed": escape_attribute_value(!singleSelect ? selected ? "true" : "false" : void 0)
      },
      {
        "aria-checked": escape_attribute_value(singleSelect ? selected ? "true" : "false" : void 0)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${ripple ? `<div class="mdc-segmented-button__ripple"></div>` : ``}${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-segmented-button__segment__touch"></div>` : ``}</button>`;
});
const { Object: Object_1 } = globals;
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext("SMUI:button:context");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
    $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        const el = getElement();
        if ("blur" in el) {
          el.blur();
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-button": true,
            "mdc-button--raised": variant === "raised",
            "mdc-button--unelevated": variant === "unelevated",
            "mdc-button--outlined": variant === "outlined",
            "smui-button--color-secondary": color === "secondary",
            "mdc-button--touch": touch,
            "mdc-card__action": context === "card:action",
            "mdc-card__action--button": context === "card:action",
            "mdc-dialog__button": context === "dialog:action",
            "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": context === "top-app-bar:action",
            "mdc-snackbar__action": context === "snackbar:actions",
            "mdc-banner__secondary-action": context === "banner" && secondary,
            "mdc-banner__primary-action": context === "banner" && !secondary,
            "mdc-tooltip__action": context === "tooltip:rich-actions",
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        actionProp,
        defaultProp,
        secondaryProp,
        { href },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="mdc-button__ripple"></div> ${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-button__touch"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Segements = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let choices = ["Morning", "Afternoon", "Evening", "Night"];
  let selected = "Morning";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SegmentedButton, "SegmentedButton").$$render(
      $$result,
      {
        segments: choices,
        singleSelect: true,
        selected
      },
      {
        selected: ($$value) => {
          selected = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ segment }) => {
          return `${validate_component(Segment, "Segment").$$render($$result, { segment }, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(segment)}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} <div style="margin-top: 1em;" data-svelte-h="svelte-1iux1y0">Programmatically select:</div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Morning`;
          }
        })}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Afternoon`;
          }
        })}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Evening`;
          }
        })}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Night`;
          }
        })}`;
      }
    })} <pre class="status">Selected: ${escape(selected)}</pre>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-arqzcv">dashboard page</h2> ${validate_component(Segements, "Segements").$$render($$result, {}, {}, {})} ${validate_component(Chart_1, "Chart").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
