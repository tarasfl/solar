

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account-overview/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.kJz0sQ26.js","_app/immutable/chunks/scheduler.Dfyphg_g.js","_app/immutable/chunks/index.BQfX63M5.js"];
export const stylesheets = [];
export const fonts = [];
