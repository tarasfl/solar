

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account-overview/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CFML9OkU.js","_app/immutable/chunks/scheduler.DpdN3tQg.js","_app/immutable/chunks/index.DZ-E2t4M.js"];
export const stylesheets = [];
export const fonts = [];
