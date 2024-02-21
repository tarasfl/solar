

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account-overview/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.C9vMx66Z.js","_app/immutable/chunks/scheduler.lQARsnnX.js","_app/immutable/chunks/index.ByyXjeEA.js"];
export const stylesheets = [];
export const fonts = [];
