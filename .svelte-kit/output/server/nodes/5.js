

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/marketing/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BlPu7nFv.js","_app/immutable/chunks/scheduler.BSvar39M.js","_app/immutable/chunks/index.BeXGLxMc.js"];
export const stylesheets = [];
export const fonts = [];
