

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transactions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DChU48Qb.js","_app/immutable/chunks/scheduler.BUAI-Jau.js","_app/immutable/chunks/index.D_Q74b9M.js"];
export const stylesheets = [];
export const fonts = [];
