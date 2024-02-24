import { c as create_ssr_component, v as validate_component, h as add_attribute } from "../../../chunks/ssr.js";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/icon/icon.js";
import { L as LayoutGrid, C as Cell } from "../../../chunks/Cell.js";
import "../../../chunks/Subtitle.js";
import "@googlemaps/js-api-loader";
const css = {
  code: ".map.svelte-1omdr3n{min-height:420px;width:100%}",
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
    $$rendered = `${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Cell, "Cell").$$render($$result, { span: 9 }, {}, {
          default: () => {
            return `<div class="map svelte-1omdr3n"${add_attribute("this", mapElement, 0)}></div>`;
          }
        })} ${validate_component(Cell, "Cell").$$render(
          $$result,
          {
            spanDevices: { desktop: 3, tablet: 8, phone: 4 }
          },
          {},
          {
            default: () => {
              return `${``}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
