"use client";

import { DICTS, type Lang } from "@/lib/i18n";
import { useStoredSet } from "@/lib/storage";

export const SAVED_KEY = "triper.saved";

export function SaveButton({ slug, name, lang, wide = false }: { slug: string; name: string; lang: Lang; wide?: boolean }) {
  const d = DICTS[lang];
  const { value, toggle } = useStoredSet(SAVED_KEY);
  const on = value.has(slug);
  const label = `${on ? d.card.unsave : d.card.save}: ${name}`;

  return (
    <button
      type="button"
      className={`save${wide ? " wide" : ""}`}
      aria-pressed={on}
      aria-label={wide ? undefined : label}
      title={wide ? undefined : label}
      onClick={() => toggle(slug)}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2Z" />
      </svg>
      {wide && <span>{on ? d.list.filters.saved + " ✓" : d.card.save}</span>}
    </button>
  );
}
