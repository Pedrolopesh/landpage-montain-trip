import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DICTS, LANGS, isLang } from "@/lib/i18n";
import { body, display } from "../fonts";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const d = DICTS[lang].meta;
  return {
    metadataBase: new URL("https://tripper-landing.netlify.app"),
    title: { default: d.title, template: `%s · Triper` },
    description: d.description,
    alternates: { canonical: `/${lang}/`, languages: { "pt-BR": "/pt/", en: "/en/" } },
    openGraph: { title: d.title, description: d.description, images: ["/img/aurora-poster.webp"], locale: lang === "pt" ? "pt_BR" : "en_US" },
    icons: { icon: "/favicon.svg" },
  };
}

export const viewport: Viewport = { themeColor: "#0b1d26" };

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={`${display.variable} ${body.variable}`}>
      <body>
        <Header lang={lang} />
        <main id="conteudo">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
