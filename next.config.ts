import type { NextConfig } from "next";

/**
 * Site 100% estático (`next build` gera a pasta `out/`). Os cabeçalhos de
 * segurança ficam em `public/_headers`, que o Netlify aplica na entrega.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  experimental: { globalNotFound: true },
};

export default nextConfig;
