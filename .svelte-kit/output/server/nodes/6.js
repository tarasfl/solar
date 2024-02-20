

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transactions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DTInfDgV.js","_app/immutable/chunks/scheduler.Dfyphg_g.js","_app/immutable/chunks/index.BQfX63M5.js"];
export const stylesheets = [];
export const fonts = [];
