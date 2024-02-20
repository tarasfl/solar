

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Y5HGu6FH.js","_app/immutable/chunks/scheduler.DpdN3tQg.js","_app/immutable/chunks/index.DZ-E2t4M.js"];
export const stylesheets = [];
export const fonts = [];
