"use client";

import { DICTS, type Lang } from "@/lib/i18n";
import { useStoredSet } from "@/lib/storage";

type ItemKey = keyof (typeof DICTS)["pt"]["plan"]["items"];

export const CHECKLIST: { group: "essentials" | "clothes" | "safety"; items: ItemKey[] }[] = [
  { group: "essentials", items: ["water", "food", "headlamp", "map"] },
  { group: "clothes", items: ["layers", "thermal", "boots"] },
  { group: "safety", items: ["firstaid", "tell", "forecast"] },
];

const TOTAL = CHECKLIST.reduce((n, g) => n + g.items.length, 0);
const R = 60;
const C = 2 * Math.PI * R;

export function Checklist({ lang }: { lang: Lang }) {
  const d = DICTS[lang].plan;
  const { value, toggle, clear } = useStoredSet("triper.checklist");
  const done = CHECKLIST.reduce((n, g) => n + g.items.filter((i) => value.has(i)).length, 0);
  const pct = Math.round((done / TOTAL) * 100);

  return (
    <div className="board">
      <div className="meter">
        <div className="ring">
          <svg viewBox="0 0 140 140" aria-hidden="true">
            <circle className="track" cx="70" cy="70" r={R} />
            <circle className="value" cx="70" cy="70" r={R} strokeDasharray={C} strokeDashoffset={C * (1 - done / TOTAL)} />
          </svg>
          <strong>{pct}%</strong>
        </div>
        <p aria-live="polite">{d.progress(done, TOTAL)}</p>
        {done === TOTAL ? <p className="done">{d.ready}</p> : null}
        {done > 0 ? (
          <button type="button" className="reset" onClick={clear}>
            {d.reset}
          </button>
        ) : null}
      </div>
      <div className="groups">
        {CHECKLIST.map((g) => (
          <fieldset key={g.group} className="group" style={{ border: 0, margin: 0, padding: 0 }}>
            <legend>
              <h3>{d.groups[g.group]}</h3>
            </legend>
            {g.items.map((item) => (
              <label key={item} className="check">
                <input type="checkbox" checked={value.has(item)} onChange={() => toggle(item)} />
                <span className="box" aria-hidden="true">
                  <svg viewBox="0 0 16 16">
                    <path d="M3 8.5 6.5 12 13 4.5" />
                  </svg>
                </span>
                <span className="label">{d.items[item]}</span>
              </label>
            ))}
          </fieldset>
        ))}
      </div>
    </div>
  );
}
