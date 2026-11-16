/** Remonta a cada navegação: a página entra com um leve fade. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}
