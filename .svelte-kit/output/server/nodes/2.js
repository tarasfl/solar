

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CCYP22es.js","_app/immutable/chunks/scheduler.lQARsnnX.js","_app/immutable/chunks/index.ByyXjeEA.js"];
export const stylesheets = [];
export const fonts = [];
