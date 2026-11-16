import type { Destination, Difficulty } from "./destinations";

export type DifficultyFilter = "all" | Difficulty | "saved";
export type DurationFilter = "any" | "day" | "long";

export type Filters = { difficulty: DifficultyFilter; duration: DurationFilter };

export const DEFAULT_FILTERS: Filters = { difficulty: "all", duration: "any" };

/** Aplica os filtros da lista. `saved` traz os slugs marcados como "quero ir". */
export function filterDestinations(list: Destination[], filters: Filters, saved: ReadonlySet<string>): Destination[] {
  return list.filter((d) => {
    if (filters.difficulty === "saved" && !saved.has(d.slug)) return false;
    if (filters.difficulty !== "all" && filters.difficulty !== "saved" && d.difficulty !== filters.difficulty) return false;
    if (filters.duration === "day" && d.days[0] > 2) return false;
    if (filters.duration === "long" && d.days[1] < 3) return false;
    return true;
  });
}
