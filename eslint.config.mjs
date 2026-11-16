import nextConfig from "eslint-config-next";

const config = [
  { ignores: ["out/**", ".next/**", "next-env.d.ts"] },
  ...nextConfig,
  { rules: { "@next/next/no-img-element": "off" } },
];

export default config;
