import Link from "next/link";
import { Checklist } from "@/components/Checklist";
import { DestinationList } from "@/components/DestinationList";
import { DESTINATIONS } from "@/lib/destinations";
import { formatAltitude } from "@/lib/format";
import { DICTS, isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const d = DICTS[lang];
  const states = new Set(DESTINATIONS.flatMap((x) => x.uf.split("/"))).size;
  const maxAlt = Math.max(...DESTINATIONS.map((x) => x.altitude));

  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata" poster="/img/aurora-poster.webp">
            <source src="/aurora.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">{d.hero.eyebrow}</span>
            <h1>
              {d.hero.title.map((line) => (
                <span className="line" key={line}>
                  <span>{line}</span>
                </span>
              ))}
            </h1>
            <p className="lead">{d.hero.lead}</p>
            <div className="ctas">
              <Link className="btn solid" href="#destinos">
                {d.hero.cta} <span className="arrow">→</span>
              </Link>
              <Link className="btn" href="#planejar">
                {d.hero.ctaAlt}
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <strong>{DESTINATIONS.length}</strong>
                <span>{d.hero.stats.routes}</span>
              </div>
              <div>
                <strong>{states}</strong>
                <span>{d.hero.stats.states}</span>
              </div>
              <div>
                <strong>{formatAltitude(maxAlt, lang)}</strong>
                <span>{d.hero.stats.maxAlt}</span>
              </div>
            </div>
          </div>
        </div>
        <span className="scroll-cue" aria-hidden="true">
          {d.hero.scroll}
        </span>
      </section>

      <section className="section" id="destinos">
        <div className="wrap">
          <header className="section-head reveal">
            <span className="eyebrow">{d.list.eyebrow}</span>
            <h2>{d.list.title}</h2>
            <p>{d.list.lead}</p>
          </header>
          <DestinationList lang={lang} />
        </div>
      </section>

      <section className="section safety" id="seguranca">
        <div className="wrap row">
          <div className="photos reveal">
            <img className="p1" src="/img/trilha-02.webp" alt="" width={566} height={720} loading="lazy" />
            <img className="p2" src="/img/trilha-03.webp" alt="" width={566} height={720} loading="lazy" />
            <span className="badge">{d.safety.badge}</span>
          </div>
          <div>
            <header className="section-head reveal" style={{ marginBottom: 0 }}>
              <span className="eyebrow">{d.safety.eyebrow}</span>
              <h2>{d.safety.title}</h2>
            </header>
            <ol className="steps">
              {d.safety.items.map((item, i) => (
                <li key={item.title} className="reveal">
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section plan" id="planejar">
        <div className="wrap">
          <header className="section-head reveal">
            <span className="eyebrow">{d.plan.eyebrow}</span>
            <h2>{d.plan.title}</h2>
            <p>{d.plan.lead}</p>
          </header>
          <Checklist lang={lang} />
        </div>
      </section>
    </>
  );
}
