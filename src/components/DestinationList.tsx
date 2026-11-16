"use client";

import { useMemo, useState } from "react";
import { DESTINATIONS } from "@/lib/destinations";
import { DEFAULT_FILTERS, filterDestinations, type DifficultyFilter, type DurationFilter, type Filters } from "@/lib/filters";
import { DICTS, type Lang } from "@/lib/i18n";
import { useStoredSet } from "@/lib/storage";
import { DestinationCard } from "./DestinationCard";
import { SAVED_KEY } from "./SaveButton";

const DIFFICULTIES: DifficultyFilter[] = ["all", "moderada", "dificil", "expedicao", "saved"];
const DURATIONS: DurationFilter[] = ["any", "day", "long"];

export function DestinationList({ lang }: { lang: Lang }) {
  const d = DICTS[lang].list;
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const { value: saved } = useStoredSet(SAVED_KEY);
  const list = useMemo(() => filterDestinations(DESTINATIONS, filters, saved), [filters, saved]);
  // Muda a key da grade a cada filtro para os cards entrarem de novo, em cascata.
  const gridKey = `${filters.difficulty}-${filters.duration}`;

  return (
    <>
      <div className="toolbar">
        <div className="chips" role="group" aria-label={d.eyebrow}>
          {DIFFICULTIES.map((f) => (
            <button
              key={f}
              type="button"
              className="chip"
              aria-pressed={filters.difficulty === f}
              onClick={() => setFilters((s) => ({ ...s, difficulty: f }))}
            >
              {f === "saved" ? <span aria-hidden="true">♡</span> : null}
              {d.filters[f]}
              {f === "saved" && saved.size > 0 ? <span>({saved.size})</span> : null}
            </button>
          ))}
        </div>
        <div className="segmented" role="group" aria-label={d.duration.label}>
          {DURATIONS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filters.duration === f}
              onClick={() => setFilters((s) => ({ ...s, duration: f }))}
            >
              {d.duration[f]}
            </button>
          ))}
        </div>
      </div>

      <p className="result-count" aria-live="polite">
        {d.count(list.length)}
      </p>

      {list.length > 0 ? (
        <div className="grid" key={gridKey}>
          {list.map((dest, i) => (
            <DestinationCard key={dest.slug} d={dest} index={i} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>{filters.difficulty === "saved" && saved.size === 0 ? d.emptySaved : d.empty}</p>
          <button type="button" className="btn" onClick={() => setFilters(DEFAULT_FILTERS)}>
            {d.clear}
          </button>
        </div>
      )}
    </>
  );
}
