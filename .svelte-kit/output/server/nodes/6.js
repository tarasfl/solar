

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transactions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.dA7P36s-.js","_app/immutable/chunks/scheduler.DpdN3tQg.js","_app/immutable/chunks/index.DZ-E2t4M.js"];
export const stylesheets = [];
export const fonts = [];
