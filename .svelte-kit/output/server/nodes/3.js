

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account-overview/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.TJj33t4z.js","_app/immutable/chunks/scheduler.Dov2bnEp.js","_app/immutable/chunks/index.yEnRFcSU.js"];
export const stylesheets = [];
export const fonts = [];
