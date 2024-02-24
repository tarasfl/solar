import { a as classAdderBuilder } from "./classAdderBuilder.js";
const Content = classAdderBuilder({
  class: "smui-paper__content",
  tag: "div"
});
const Title = classAdderBuilder({
  class: "smui-paper__title",
  tag: "h5"
});
const Subtitle = classAdderBuilder({
  class: "smui-paper__subtitle",
  tag: "h6"
});
export {
  Content as C,
  Subtitle as S,
  Title as T
};
