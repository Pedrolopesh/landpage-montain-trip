import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { body, display } from "./fonts";

export const metadata: Metadata = { title: "404 · Bússola das Trilhas" };

/** 404 único para os dois idiomas (o site não sabe o idioma de uma URL desconhecida). */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <main className="lost">
          <div>
            <span className="code" aria-hidden="true">
              404
            </span>
            <h1>Trilha não encontrada</h1>
            <p>Essa página não existe ou mudou de lugar. · This page does not exist.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <Link className="btn solid" href="/pt/">
                Voltar ao início
              </Link>
              <Link className="btn" href="/en/">
                Back to start
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
