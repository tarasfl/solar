

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transactions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Ap5nzAXO.js","_app/immutable/chunks/scheduler.ayCiN8gI.js","_app/immutable/chunks/index.rfLyQUc3.js"];
export const stylesheets = [];
export const fonts = [];
