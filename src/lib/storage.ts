"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Conjunto de strings salvo no localStorage e sincronizado entre componentes
 * e abas. No servidor (build estático) começa vazio.
 */
const EMPTY: ReadonlySet<string> = new Set();
const cache = new Map<string, { raw: string | null; value: ReadonlySet<string> }>();
const listeners = new Set<() => void>();

function read(key: string): ReadonlySet<string> {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    return EMPTY;
  }
  const hit = cache.get(key);
  if (hit && hit.raw === raw) return hit.value;
  let value: ReadonlySet<string> = EMPTY;
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) value = new Set(parsed.filter((v): v is string => typeof v === "string"));
  } catch {
    value = EMPTY;
  }
  cache.set(key, { raw, value });
  return value;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

export function useStoredSet(key: string) {
  const value = useSyncExternalStore(subscribe, () => read(key), () => EMPTY);

  const write = useCallback(
    (next: ReadonlySet<string>) => {
      try {
        window.localStorage.setItem(key, JSON.stringify([...next]));
      } catch {
        /* modo privado ou cota cheia: segue só em memória nesta visita */
      }
      listeners.forEach((l) => l());
    },
    [key],
  );

  const toggle = useCallback(
    (item: string) => {
      const next = new Set(read(key));
      if (next.has(item)) next.delete(item);
      else next.add(item);
      write(next);
    },
    [key, write],
  );

  const clear = useCallback(() => write(new Set()), [write]);

  return { value, toggle, clear };
}
