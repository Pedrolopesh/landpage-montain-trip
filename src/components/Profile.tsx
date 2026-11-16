import { useId, type CSSProperties } from "react";
import { profilePaths, summitIndex } from "@/lib/profile";

type Props = { points: number[]; className?: string; label?: string };

const W = 400;
const H = 120;
const PAD = 6;

/**
 * Silhueta da subida desenhada a partir do perfil. A linha se desenha ao
 * aparecer e o cume pulsa. O ponto do cume fica em HTML para não esticar
 * junto com o SVG.
 */
export function Profile({ points, className = "profile", label }: Props) {
  const id = useId().replace(/:/g, "");
  const { line, area } = profilePaths(points, W, H, PAD);
  const top = summitIndex(points);
  const left = (top / (points.length - 1)) * 100;
  const topPct = ((PAD + (1 - points[top]! / 100) * (H - PAD * 2)) / H) * 100;

  return (
    <div className={className} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--tone)" stopOpacity="0.32" />
            <stop offset="1" stopColor="var(--tone)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#g${id})`} />
        <path className="stroke" d={line} vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="summit" style={{ left: `${left}%`, top: `${topPct}%` } as CSSProperties} />
    </div>
  );
}
