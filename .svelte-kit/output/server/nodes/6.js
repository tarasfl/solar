

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transactions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.C8N3GxCt.js","_app/immutable/chunks/scheduler.lQARsnnX.js","_app/immutable/chunks/index.ByyXjeEA.js"];
export const stylesheets = [];
export const fonts = [];
