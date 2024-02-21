

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.x-vfDrCd.js","_app/immutable/chunks/scheduler.lQARsnnX.js","_app/immutable/chunks/index.ByyXjeEA.js","_app/immutable/chunks/entry.PCwJhDvM.js","_app/immutable/chunks/index.Ct-CcJXq.js"];
export const stylesheets = [];
export const fonts = [];
