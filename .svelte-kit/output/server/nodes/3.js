

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account-overview/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.gfJtQcqf.js","_app/immutable/chunks/scheduler.C7cUw1c4.js","_app/immutable/chunks/index.CsTjIY4p.js"];
export const stylesheets = [];
export const fonts = [];
