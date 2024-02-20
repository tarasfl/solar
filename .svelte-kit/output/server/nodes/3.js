

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account-overview/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DNdEKWb1.js","_app/immutable/chunks/scheduler.BUAI-Jau.js","_app/immutable/chunks/index.D_Q74b9M.js"];
export const stylesheets = [];
export const fonts = [];
