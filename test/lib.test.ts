import { describe, expect, it } from "vitest";
import { DESTINATIONS, getDestination } from "@/lib/destinations";
import { DEFAULT_FILTERS, filterDestinations } from "@/lib/filters";
import { formatAltitude, monthRange } from "@/lib/format";
import { DICTS } from "@/lib/i18n";
import { profilePaths, summitIndex } from "@/lib/profile";

const PT = DICTS.pt.months;

describe("monthRange", () => {
  it("junta meses seguidos numa faixa", () => {
    expect(monthRange([5, 6, 7, 8, 9], PT)).toBe("mai–set");
  });
  it("mantém a faixa que vira o ano", () => {
    expect(monthRange([12, 1, 2, 3, 4], PT)).toBe("dez–abr");
    expect(monthRange([11, 12, 1, 2], PT)).toBe("nov–fev");
  });
  it("separa meses soltos e lida com casos extremos", () => {
    expect(monthRange([1, 3], PT)).toBe("jan, mar");
    expect(monthRange([7], PT)).toBe("jul");
    expect(monthRange([], PT)).toBe("");
    expect(monthRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], PT)).toBe("jan–dez");
  });
});

describe("formatAltitude", () => {
  it("usa o separador de milhar de cada idioma e marca estimativas", () => {
    expect(formatAltitude(2995, "pt")).toBe("2.995 m");
    expect(formatAltitude(2995, "en")).toBe("2,995 m");
    expect(formatAltitude(1400, "pt", true)).toBe("~1.400 m");
  });
});

describe("filterDestinations", () => {
  const none = new Set<string>();
  it("sem filtro devolve todos", () => {
    expect(filterDestinations(DESTINATIONS, DEFAULT_FILTERS, none)).toHaveLength(DESTINATIONS.length);
  });
  it("filtra por dificuldade", () => {
    const r = filterDestinations(DESTINATIONS, { difficulty: "expedicao", duration: "any" }, none);
    expect(r.map((d) => d.slug).sort()).toEqual(["monte-roraima", "pico-da-neblina"]);
  });
  it("filtra por duração", () => {
    const short = filterDestinations(DESTINATIONS, { difficulty: "all", duration: "day" }, none);
    expect(short.every((d) => d.days[0] <= 2)).toBe(true);
    const long = filterDestinations(DESTINATIONS, { difficulty: "all", duration: "long" }, none);
    expect(long.every((d) => d.days[1] >= 3)).toBe(true);
    expect(short.length + long.length).toBe(DESTINATIONS.length);
  });
  it("mostra só os marcados em 'quero ir'", () => {
    const r = filterDestinations(DESTINATIONS, { difficulty: "saved", duration: "any" }, new Set(["vale-do-pati"]));
    expect(r.map((d) => d.slug)).toEqual(["vale-do-pati"]);
  });
});

describe("profile", () => {
  it("gera contorno e área fechada", () => {
    const { line, area } = profilePaths([0, 50, 100], 200, 100, 0);
    expect(line.startsWith("M0,100")).toBe(true);
    expect(line.endsWith("200,0")).toBe(true);
    expect(area.endsWith("Z")).toBe(true);
  });
  it("não quebra com menos de dois pontos", () => {
    expect(profilePaths([10], 100, 100)).toEqual({ line: "", area: "" });
  });
  it("acha o cume", () => {
    expect(summitIndex([1, 9, 3])).toBe(1);
  });
});

describe("dados dos destinos", () => {
  it("têm slug único e texto nos dois idiomas", () => {
    const slugs = DESTINATIONS.map((d) => d.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const d of DESTINATIONS) {
      expect(getDestination(d.slug)).toBe(d);
      for (const lang of ["pt", "en"] as const) {
        expect(d.tagline[lang]).not.toBe("");
        expect(d.summary[lang]).not.toBe("");
        expect(d.about[lang].length).toBeGreaterThan(0);
        expect(d.tips[lang].length).toBe(d.tips.pt.length);
      }
      expect(d.days[0]).toBeLessThanOrEqual(d.days[1]);
      expect(d.bestMonths.every((m) => m >= 1 && m <= 12)).toBe(true);
      expect(d.profile.length).toBeGreaterThan(2);
    }
  });
  it("os dois dicionários têm as mesmas chaves", () => {
    const keys = (o: object): string[] =>
      Object.entries(o).flatMap(([k, v]) => (v && typeof v === "object" && !Array.isArray(v) ? keys(v).map((s) => `${k}.${s}`) : [k]));
    expect(keys(DICTS.en).sort()).toEqual(keys(DICTS.pt).sort());
  });
});
