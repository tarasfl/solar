import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "chart.js/auto";
const Chart_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <canvas id="myChart"></canvas>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-arqzcv">dashboard page</h2> ${validate_component(Chart_1, "Chart").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
