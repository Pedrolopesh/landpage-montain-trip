/**
 * Junta meses em faixas contínuas, inclusive as que viram o ano:
 * [5,6,7,8,9] → "mai–set"; [12,1,2,3,4] → "dez–abr"; [1,3] → "jan, mar".
 */
export function monthRange(months: number[], names: readonly string[]): string {
  if (months.length === 0) return "";
  const set = new Set(months);
  if (set.size === 12) return `${names[0]}–${names[11]}`;
  // Começa no primeiro mês cujo anterior não está na lista, para não quebrar faixas que viram o ano.
  const start = [...set].sort((a, b) => a - b).find((m) => !set.has(m === 1 ? 12 : m - 1)) ?? Math.min(...set);
  const ranges: [number, number][] = [];
  for (let i = 0, m = start; i < 12; i++, m = (m % 12) + 1) {
    if (!set.has(m)) continue;
    const last = ranges.at(-1);
    const prev = m === 1 ? 12 : m - 1;
    if (last && last[1] === prev) last[1] = m;
    else ranges.push([m, m]);
  }
  return ranges
    .map(([a, b]) => (a === b ? names[a - 1] : `${names[a - 1]}–${names[b - 1]}`))
    .join(", ");
}

export function formatAltitude(meters: number, lang: "pt" | "en", approx = false): string {
  const n = new Intl.NumberFormat(lang === "pt" ? "pt-BR" : "en-US").format(meters);
  return `${approx ? "~" : ""}${n} m`;
}
