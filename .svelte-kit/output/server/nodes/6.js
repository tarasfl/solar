

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transactions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DWfdjI2B.js","_app/immutable/chunks/scheduler.SBUOT7Tn.js","_app/immutable/chunks/index.BTycR2HF.js"];
export const stylesheets = [];
export const fonts = [];
