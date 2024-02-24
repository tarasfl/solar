

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transactions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BLh91EWR.js","_app/immutable/chunks/scheduler.Dov2bnEp.js","_app/immutable/chunks/index.yEnRFcSU.js"];
export const stylesheets = [];
export const fonts = [];
