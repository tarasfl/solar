

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Cc6NLFxC.js","_app/immutable/chunks/scheduler.SBUOT7Tn.js","_app/immutable/chunks/index.BTycR2HF.js"];
export const stylesheets = [];
export const fonts = [];
