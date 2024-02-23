

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transactions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DFTq_28S.js","_app/immutable/chunks/scheduler.C7cUw1c4.js","_app/immutable/chunks/index.CsTjIY4p.js"];
export const stylesheets = [];
export const fonts = [];
