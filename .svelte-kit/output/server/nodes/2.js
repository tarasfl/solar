

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a1Gs0MiR.js","_app/immutable/chunks/scheduler.C7cUw1c4.js","_app/immutable/chunks/index.CsTjIY4p.js"];
export const stylesheets = [];
export const fonts = [];
