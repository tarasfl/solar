export function clamp(x: number, min: number, max: number): number {
    return Math.min(Math.max(x, min), max);
}
  
export function normalize(x: number, max: number = 1, min: number = 0): number {
    const y = (x - min) / (max - min);
    return clamp(y, 0, 1);
}