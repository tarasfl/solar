import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, h as getContext, v as validate_component, m as missing_component, i as subscribe, s as setContext, o as onDestroy, k as set_store_value, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, l as each, j as escape } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement } from "../../../chunks/SmuiElement.js";
import "@material/web/switch/switch.js";
import "@googlemaps/js-api-loader";
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
const Segements = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let choices = ["Manual", "Range"];
  let selected = "Manual";
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
    )}  <pre class="status">Selected: ${escape(selected)}</pre>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: ".solar-api-switch.svelte-gva6pf{margin-top:10px;width:160px}.search-bar.svelte-gva6pf{margin:5px;width:220px}.map.svelte-gva6pf{height:auto;width:100%}.search-bar.svelte-gva6pf{padding-top:10px}.container.svelte-gva6pf{height:520px;display:flex;justify-content:space-around}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let mapElement;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-gva6pf"> <div class="map svelte-gva6pf"${add_attribute("this", mapElement, 0)}></div> <div class="search-bar svelte-gva6pf">${validate_component(Segements, "Segements").$$render($$result, {}, {}, {})} <p data-svelte-h="svelte-12ajhqc">Add zipCode below</p> ${``} <br> <div class="solar-api-switch svelte-gva6pf" data-svelte-h="svelte-1ryr51j"><label for="switch"><md-switch selected></md-switch>
    enable Solar API</label></div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
