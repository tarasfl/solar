import { c as create_ssr_component, h as add_attribute } from "../../../chunks/ssr.js";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/switch/switch.js";
import "@googlemaps/js-api-loader";
const css = {
  code: ".solar-api-switch.svelte-gva6pf{margin-top:10px;width:160px}.search-bar.svelte-gva6pf{margin:5px;width:220px}.map.svelte-gva6pf{height:auto;width:100%}.search-bar.svelte-gva6pf{padding-top:10px}.container.svelte-gva6pf{height:520px;display:flex;justify-content:space-around}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapElement;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-gva6pf"><div class="map svelte-gva6pf"${add_attribute("this", mapElement, 0)}></div> <div class="search-bar svelte-gva6pf"> <p data-svelte-h="svelte-12ajhqc">Add zipCode below</p> ${``} <br> <div class="solar-api-switch svelte-gva6pf" data-svelte-h="svelte-1ryr51j"><label for="switch"><md-switch selected></md-switch>
    enable Solar API</label></div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
