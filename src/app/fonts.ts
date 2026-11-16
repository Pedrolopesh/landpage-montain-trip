import { Playfair_Display, Poppins } from "next/font/google";

// As fontes são baixadas no build e servidas pelo próprio site (sem Google Fonts em produção).
export const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});
