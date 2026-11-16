import Link from "next/link";
import type { CSSProperties } from "react";
import type { Destination } from "@/lib/destinations";
import { formatAltitude, monthRange } from "@/lib/format";
import { DICTS, type Lang } from "@/lib/i18n";
import { Profile } from "./Profile";
import { SaveButton } from "./SaveButton";

const LEVEL = { moderada: 1, dificil: 2, expedicao: 3 } as const;

export function DestinationCard({ d, index, lang }: { d: Destination; index: number; lang: Lang }) {
  const t = DICTS[lang];
  return (
    <article className="card" style={{ "--tone": d.tone, "--i": index } as CSSProperties}>
      <div className="card-art">
        <span className="num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="alt">
          {t.card.altitude}
          <strong>{formatAltitude(d.altitude, lang, d.approx)}</strong>
        </span>
        <Profile points={d.profile} />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h3>{d.name}</h3>
          <span className="pill">{d.uf}</span>
        </div>
        <p className="tagline">{d.tagline[lang]}</p>
        <div className="meta">
          <span className="pill">
            <span className="diff" aria-hidden="true">
              {[1, 2, 3].map((n) => (
                <i key={n} className={n <= LEVEL[d.difficulty] ? "on" : undefined} />
              ))}
            </span>
            {t.difficulty[d.difficulty]}
          </span>
          <span className="pill">{t.card.days(d.days[0], d.days[1])}</span>
          <span className="pill" title={t.card.best}>
            {monthRange(d.bestMonths, t.months)}
          </span>
        </div>
      </div>
      <div className="card-foot">
        <Link className="card-link" href={`/${lang}/destinos/${d.slug}/`}>
          {t.list.open} <span className="arrow">→</span>
          <span className="sr-only">: {d.name}</span>
        </Link>
        <SaveButton slug={d.slug} name={d.name} lang={lang} />
      </div>
    </article>
  );
}
