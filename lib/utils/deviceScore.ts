// /lib/utils/deviceScore.ts
export function deviceScore(): number {
  // Crude but effective: cores + memory + hardwareConcurrency with sane caps
  const cores = typeof navigator !== "undefined" ? (navigator.hardwareConcurrency || 4) : 4;
  // @ts-ignore
  const mem = typeof (navigator as any).deviceMemory === "number" ? (navigator as any).deviceMemory : 4;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const score = cores * 0.6 + mem * 0.4 - (ratio - 1) * 0.5;
  return Math.max(0.8, Math.min(2.2, score));
}
