import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { Profile } from "@/components/Profile";
import { SaveButton } from "@/components/SaveButton";
import { DESTINATIONS, getDestination } from "@/lib/destinations";
import { formatAltitude, monthRange } from "@/lib/format";
import { DICTS, LANGS, isLang } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => DESTINATIONS.map((d) => ({ lang, slug: d.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/destinos/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const dest = getDestination(slug);
  if (!dest || !isLang(lang)) return {};
  return {
    title: dest.name,
    description: dest.summary[lang],
    alternates: {
      canonical: `/${lang}/destinos/${slug}/`,
      languages: { "pt-BR": `/pt/destinos/${slug}/`, en: `/en/destinos/${slug}/` },
    },
  };
}

export default async function DestinationPage({ params }: PageProps<"/[lang]/destinos/[slug]">) {
  const { lang, slug } = await params;
  const dest = getDestination(slug);
  if (!dest || !isLang(lang)) notFound();
  const t = DICTS[lang];
  const idx = DESTINATIONS.indexOf(dest);
  const next = DESTINATIONS[(idx + 1) % DESTINATIONS.length]!;
  const facts = [
    { k: t.detail.altitude, v: formatAltitude(dest.altitude, lang, dest.approx) },
    { k: t.detail.duration, v: t.card.days(dest.days[0], dest.days[1]) },
    { k: t.detail.difficulty, v: t.difficulty[dest.difficulty] },
    { k: t.detail.best, v: monthRange(dest.bestMonths, t.months), months: true },
  ];

  return (
    <div style={{ "--tone": dest.tone } as CSSProperties}>
      <section className="detail-hero" style={{ "--tone": dest.tone } as CSSProperties}>
        <div className="wrap">
          <Link className="crumb" href={`/${lang}/#destinos`}>
            <span className="arrow">←</span> {t.detail.back}
          </Link>
          <h1>
            {dest.name}
            <span className="pill uf">{dest.uf}</span>
          </h1>
          <p className="tagline">{dest.tagline[lang]}</p>
        </div>
        <Profile points={dest.profile} label={t.card.profileNote} />
      </section>

      <dl className="facts">
        {facts.map((f, i) => (
          <div key={f.k} style={{ "--i": i } as CSSProperties}>
            <dt>{f.k}</dt>
            <dd>
              {f.v}
              {f.months ? (
              <div className="months" aria-hidden="true">
                {t.months.map((m, mi) => (
                  <span key={m} className={dest.bestMonths.includes(mi + 1) ? "on" : undefined} title={m} />
                ))}
              </div>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>

      <div className="wrap detail-body">
        <div className="prose">
          <p style={{ fontSize: 20, color: "var(--ink)", marginBottom: 40 }}>{dest.summary[lang]}</p>
          <h2 className="reveal">{t.detail.about}</h2>
          {dest.about[lang].map((p) => (
            <p key={p.slice(0, 24)} className="reveal">
              {p}
            </p>
          ))}
          <h2 className="reveal" style={{ marginTop: 40 }}>
            {t.detail.tips}
          </h2>
          <ul className="tips">
            {dest.tips[lang].map((tip) => (
              <li key={tip.slice(0, 24)} className="reveal">
                {tip}
              </li>
            ))}
          </ul>
          <Link className="next-card reveal" href={`/${lang}/destinos/${next.slug}/`} style={{ "--tone": next.tone } as CSSProperties}>
            <div>
              <small>{t.detail.next}</small>
              <strong>{next.name}</strong>
            </div>
            <span className="go" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
        <aside className="aside">
          <div className="box">
            <h3>{t.detail.access}</h3>
            <p>{dest.access[lang]}</p>
          </div>
          <SaveButton slug={dest.slug} name={dest.name} lang={lang} wide />
          <p className="note">{t.detail.disclaimer}</p>
        </aside>
      </div>
    </div>
  );
}
