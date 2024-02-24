import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "chart.js/auto";
import { P as Paper } from "../../chunks/Paper.js";
import { T as Title, S as Subtitle, C as Content } from "../../chunks/Subtitle.js";
const Chart_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <canvas id="myChart"></canvas>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Paper, "Paper").$$render($$result, { color: "secondary", class: "p" }, {}, {
    default: () => {
      return `${validate_component(Title, "Title").$$render($$result, {}, {}, {
        default: () => {
          return `Number of Leads`;
        }
      })} ${validate_component(Subtitle, "Subtitle").$$render($$result, {}, {}, {
        default: () => {
          return `400+ Leads`;
        }
      })} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Chart_1, "Chart").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}  `;
});
export {
  Page as default
};
