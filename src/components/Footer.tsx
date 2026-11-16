import { DICTS, type Lang } from "@/lib/i18n";

export function Footer({ lang }: { lang: Lang }) {
  const d = DICTS[lang].footer;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="big" aria-hidden="true">
          TRIPER
        </div>
        <div className="cols">
          <div>
            <p>{d.tagline}</p>
            <p>{d.note}</p>
            <p>{d.built}</p>
          </div>
          <div className="links">
            <a href="https://pedrolopes.tech" target="_blank" rel="noopener noreferrer">
              pedrolopes.tech
            </a>
            <a href="https://github.com/Pedrolopesh/landpage-montain-trip" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/pedro-lopes-50b3b818a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
