

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transactions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DpRhF3QQ.js","_app/immutable/chunks/scheduler.BSvar39M.js","_app/immutable/chunks/index.BeXGLxMc.js"];
export const stylesheets = [];
export const fonts = [];
