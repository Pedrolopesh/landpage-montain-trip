/**
 * Transforma o perfil (valores de 0 a 100) numa silhueta de montanha em SVG.
 * Devolve o contorno (linha) e a área preenchida, com curvas suaves entre os pontos.
 */
export function profilePaths(points: number[], width: number, height: number, pad = 6) {
  if (points.length < 2) return { line: "", area: "" };
  const step = width / (points.length - 1);
  const y = (v: number) => pad + (1 - Math.max(0, Math.min(100, v)) / 100) * (height - pad * 2);
  const xy = points.map((v, i) => [round(i * step), round(y(v))] as const);
  let line = `M${xy[0]![0]},${xy[0]![1]}`;
  for (let i = 1; i < xy.length; i++) {
    const [x0, y0] = xy[i - 1]!;
    const [x1, y1] = xy[i]!;
    const cx = round((x0 + x1) / 2);
    line += ` C${cx},${y0} ${cx},${y1} ${x1},${y1}`;
  }
  const area = `${line} L${width},${height} L0,${height} Z`;
  return { line, area };
}

/** Índice do ponto mais alto, para marcar o cume. */
export function summitIndex(points: number[]): number {
  return points.reduce((best, v, i) => (v > points[best]! ? i : best), 0);
}

function round(n: number) {
  return Math.round(n * 10) / 10;
}
