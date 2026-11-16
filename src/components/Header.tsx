"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DICTS, type Lang } from "@/lib/i18n";

/** Cabeçalho fixo: fica translúcido com desfoque depois que a página rola. */
export function Header({ lang }: { lang: Lang }) {
  const d = DICTS[lang];
  const pathname = usePathname() ?? `/${lang}/`;
  const other: Lang = lang === "pt" ? "en" : "pt";
  const otherPath = pathname.replace(/^\/(pt|en)(?=\/|$)/, `/${other}`);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <a className="skip" href="#conteudo">
        {d.nav.skip}
      </a>
      <div className="wrap bar">
        <Link className="logo" href={`/${lang}/`} aria-label="Triper">
          TRIPER<span>.</span>
        </Link>
        <nav className="nav" aria-label="Principal">
          <Link className="link" href={`/${lang}/#destinos`}>
            {d.nav.destinations}
          </Link>
          <Link className="link" href={`/${lang}/#seguranca`}>
            {d.nav.safety}
          </Link>
          <Link className="link" href={`/${lang}/#planejar`}>
            {d.nav.plan}
          </Link>
          <div className="lang">
            {(["pt", "en"] as const).map((l) =>
              l === lang ? (
                <span key={l} aria-current="true">
                  {l}
                </span>
              ) : (
                <Link key={l} href={otherPath} hrefLang={l} lang={l} aria-label={d.nav.switchLang}>
                  {l}
                </Link>
              ),
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
