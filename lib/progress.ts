"use client";

const KEY = "moneystory:progress:v1";

export type Progress = {
  completed: string[];
  lastSlug: string | null;
  streakDays: string[];
  lastVisit: string | null;
};

const empty = (): Progress => ({
  completed: [],
  lastSlug: null,
  streakDays: [],
  lastVisit: null,
});

export function loadProgress(): Progress {
  if (typeof window === "undefined") return empty();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return { ...empty(), ...parsed };
  } catch {
    return empty();
  }
}

export function saveProgress(p: Progress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function withVisit(p: Progress): Progress {
  const today = new Date().toISOString().slice(0, 10);
  if (p.lastVisit === today) return p;
  const days = new Set(p.streakDays);
  days.add(today);
  // prune days older than 60 to keep storage small
  const cutoff = new Date(Date.now() - 60 * 864e5).toISOString().slice(0, 10);
  const streakDays = [...days].filter((d) => d >= cutoff).sort();
  return { ...p, streakDays, lastVisit: today };
}

export function currentStreak(p: Progress): number {
  if (p.streakDays.length === 0) return 0;
  const days = new Set(p.streakDays);
  let streak = 0;
  const cursor = new Date();
  // allow today to be missing (streak counted after first visit of a day)
  if (!days.has(cursor.toISOString().slice(0, 10))) cursor.setDate(cursor.getDate() - 1);
  for (;;) {
    const key = cursor.toISOString().slice(0, 10);
    if (!days.has(key)) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function toggleComplete(slug: string): Progress {
  const p = withVisit(loadProgress());
  const completed = p.completed.includes(slug)
    ? p.completed.filter((s) => s !== slug)
    : [...p.completed, slug];
  const next = { ...p, completed, lastSlug: slug };
  saveProgress(next);
  return next;
}

export function markViewed(slug: string): Progress {
  const p = withVisit(loadProgress());
  const next = { ...p, lastSlug: slug };
  saveProgress(next);
  return next;
}
