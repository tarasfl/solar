import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "chart.js/auto";
import { a as classAdderBuilder } from "../../chunks/classAdderBuilder.js";
const Chart_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <canvas id="myChart"></canvas>`;
});
classAdderBuilder({
  class: "smui-card__content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__media-content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-buttons",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-icons",
  tag: "div"
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-arqzcv">dashboard page</h2> ${validate_component(Chart_1, "Chart").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
