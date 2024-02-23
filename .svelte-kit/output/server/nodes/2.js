

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B7qtyRRC.js","_app/immutable/chunks/scheduler.ayCiN8gI.js","_app/immutable/chunks/index.rfLyQUc3.js"];
export const stylesheets = [];
export const fonts = [];
