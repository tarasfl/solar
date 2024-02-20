import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, s as setContext, o as onDestroy, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "@material/web/tabs/secondary-tab.js";
import "@material/web/list/list-item.js";
import "@material/web/divider/divider.js";
import "@material/web/list/list.js";
import "@material/web/button/filled-button.js";
import { MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation } from "@material/drawer";
import { f as forwardEventsBuilder, c as classMap } from "../../chunks/SmuiElement.js";
import { d as dispatch, c as classAdderBuilder, L as List, I as Item, T as Text } from "../../chunks/Subheader.js";
const css$2 = {
  code: "header.svelte-1xu39lv{background-color:#ffffff;height:120px}.logo.svelte-1xu39lv{height:85px}div.svelte-1xu39lv{display:flex;justify-content:space-between}.svelte-1xu39lv{margin:0;padding:0}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="svelte-1xu39lv" data-svelte-h="svelte-1j2fppr"><div class="svelte-1xu39lv"><img alt="logo" src="./logo.png" class="logo svelte-1xu39lv"></div></header> <md-divider class="svelte-1xu39lv"></md-divider>`;
});
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "open", "fixed", "setOpen", "isOpen", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = void 0 } = $$props;
  let { open = false } = $$props;
  let { fixed = true } = $$props;
  let element;
  let instance = void 0;
  let internalClasses = {};
  let previousFocus = null;
  let focusTrap;
  let scrim = false;
  setContext("SMUI:list:nav", true);
  setContext("SMUI:list:item:nav", true);
  setContext("SMUI:list:wrapFocus", true);
  let oldVariant = variant;
  onDestroy(() => {
    instance && instance.destroy();
    scrim && scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
  });
  function getInstance() {
    var _a, _b;
    if (scrim) {
      scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
    }
    if (variant === "modal") {
      scrim = (_b = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(".mdc-drawer-scrim")) !== null && _b !== void 0 ? _b : false;
      if (scrim) {
        scrim.addEventListener("SMUIDrawerScrim:click", handleScrimClick);
      }
    }
    const Foundation = variant === "dismissible" ? MDCDismissibleDrawerFoundation : variant === "modal" ? MDCModalDrawerFoundation : void 0;
    return Foundation ? new Foundation({
      addClass,
      removeClass,
      hasClass,
      elementHasClass: (element2, className2) => element2.classList.contains(className2),
      saveFocus: () => previousFocus = document.activeElement,
      restoreFocus: () => {
        if (previousFocus && "focus" in previousFocus && element.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemEl = element.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => {
        open = false;
        dispatch(element, "SMUIDrawer:closed", void 0, void 0, true);
      },
      notifyOpen: () => {
        open = true;
        dispatch(element, "SMUIDrawer:opened", void 0, void 0, true);
      },
      trapFocus: () => focusTrap.trapFocus(),
      releaseFocus: () => focusTrap.releaseFocus()
    }) : void 0;
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
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
  function handleScrimClick() {
    instance && "handleScrimClick" in instance && instance.handleScrimClick();
  }
  function setOpen(value) {
    open = value;
  }
  function isOpen() {
    return open;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (oldVariant !== variant) {
      oldVariant = variant;
      instance && instance.destroy();
      internalClasses = {};
      instance = getInstance();
      instance && instance.init();
    }
  }
  {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open();
      } else {
        instance.close();
      }
    }
  }
  return `<aside${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-drawer": true,
          "mdc-drawer--dismissible": variant === "dismissible",
          "mdc-drawer--modal": variant === "modal",
          "smui-drawer__absolute": variant === "modal" && !fixed,
          ...internalClasses
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </aside>`;
});
classAdderBuilder({
  class: "mdc-drawer-app-content",
  tag: "div"
});
const Content = classAdderBuilder({
  class: "mdc-drawer__content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-drawer__header",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-drawer__title",
  tag: "h1"
});
classAdderBuilder({
  class: "mdc-drawer__subtitle",
  tag: "h2"
});
const css$1 = {
  code: ":root{--md-filled-button-container-shape:10px;--md-filled-button-label-text-font:system-ui}",
  map: null
};
const SidebarMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Drawer, "Drawer").$$render($$result, { style: "height:680px;" }, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(List, "List").$$render(
            $$result,
            {
              style: " height: -webkit-fill-available;\n    justify-content: space-evenly;"
            },
            {},
            {
              default: () => {
                return `${validate_component(Item, "Item").$$render($$result, { href: "/" }, {}, {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `Dashboard`;
                      }
                    })}`;
                  }
                })} ${validate_component(Item, "Item").$$render($$result, { href: "/lead-search" }, {}, {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `Lead Generation`;
                      }
                    })}`;
                  }
                })} ${validate_component(Item, "Item").$$render($$result, { href: "/marketing" }, {}, {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `Marketing`;
                      }
                    })}`;
                  }
                })} ${validate_component(Item, "Item").$$render($$result, { href: "/users" }, {}, {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `Users`;
                      }
                    })}`;
                  }
                })} ${validate_component(Item, "Item").$$render($$result, { href: "/account-overview" }, {}, {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `Account Overview`;
                      }
                    })}`;
                  }
                })} ${validate_component(Item, "Item").$$render($$result, { href: "/transactions" }, {}, {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `Transactions`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })} `;
});
const css = {
  code: "html.svelte-hxsvg6{background-color:#fbfcfa}:root{--md-list-container-color:#fbfcfa;--md-filled-button-container-shape:10px;--md-filled-button-label-text-font:system-ui;--md-sys-color-primary:#6750A4;--md-sys-color-on-primary:#FFFFFF}.drawer-container.svelte-hxsvg6{position:relative;display:flex;height:auto;max-width:auto;overflow:hidden;z-index:0}.svelte-hxsvg6 .app-content{flex:auto;overflow:auto;position:relative;flex-grow:1}.main-content.svelte-hxsvg6{overflow:auto;padding:16px;height:100%;box-sizing:border-box;background-color:#FFFFFF}:root{--mdc-layout-grid-margin-desktop:24px;--mdc-layout-grid-gutter-desktop:24px;--mdc-layout-grid-column-width-desktop:72px;--mdc-layout-grid-margin-tablet:16px;--mdc-layout-grid-gutter-tablet:16px;--mdc-layout-grid-column-width-tablet:72px;--mdc-layout-grid-margin-phone:16px;--mdc-layout-grid-gutter-phone:16px;--mdc-layout-grid-column-width-phone:72px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<html lang="en" class="svelte-hxsvg6"><body class="svelte-hxsvg6">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="drawer-container svelte-hxsvg6">${validate_component(SidebarMenu, "SidebarMenu").$$render($$result, {}, {}, {})} <main class="main-content w-screen h-screen app-content svelte-hxsvg6">${slots.default ? slots.default({}) : ``}</main></div></body> </html>`;
});
export {
  Layout as default
};
