"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { lessons, MODULE_ORDER, totalMinutes } from "@/lib/curriculum";
import {
  loadProgress,
  withVisit,
  saveProgress,
  currentStreak,
  type Progress,
} from "@/lib/progress";

export default function PathPage() {
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    const p = withVisit(loadProgress());
    saveProgress(p);
    setProgress(p);
  }, []);

  const done = progress?.completed ?? [];
  const pct = Math.round((done.length / lessons.length) * 100);
  const streak = progress ? currentStreak(progress) : 0;
  const nextLesson =
    lessons.find((l) => !done.includes(l.slug)) ?? lessons[lessons.length - 1];

  return (
    <div className="mx-auto max-w-5xl px-6 pt-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-accent text-sm font-medium">The curriculum</p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight mt-1">
            Your 12-day money story
          </h1>
          <p className="text-muted mt-2">
            {lessons.length} lessons · {totalMinutes} minutes total · one idea per day
          </p>
        </div>
        <div className="flex gap-3 text-center">
          <div className="rounded-2xl border border-line bg-card px-5 py-3 min-w-24">
            <p className="font-serif text-2xl font-semibold text-accent">{done.length}</p>
            <p className="text-xs text-muted">done</p>
          </div>
          <div className="rounded-2xl border border-line bg-card px-5 py-3 min-w-24">
            <p className="font-serif text-2xl font-semibold text-accent">{streak}</p>
            <p className="text-xs text-muted">day streak</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-xs text-muted mb-1.5">
          <span>Progress</span>
          <span>{pct}%</span>
        </div>
        <div className="h-2 rounded-full bg-line overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500 rounded-full"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={`/lesson/${nextLesson.slug}`}
          className="flex items-center justify-between gap-4 rounded-2xl bg-accent text-white px-6 py-4 hover:opacity-90 transition-opacity"
        >
          <span className="text-left">
            <span className="block text-xs uppercase tracking-wide opacity-80">
              {done.length === 0 ? "Begin" : "Continue"} — Day {nextLesson.day}
            </span>
            <span className="font-serif text-lg font-semibold">{nextLesson.title}</span>
          </span>
          <span className="text-2xl" aria-hidden>
            →
          </span>
        </Link>
      </div>

      <div className="mt-12 space-y-10 pb-8">
        {MODULE_ORDER.map((mod) => (
          <section key={mod}>
            <h2 className="font-serif text-2xl font-semibold tracking-tight mb-4">
              {mod}
            </h2>
            <div className="space-y-3">
              {lessons
                .filter((l) => l.module === mod)
                .map((l) => {
                  const complete = done.includes(l.slug);
                  return (
                    <Link
                      key={l.slug}
                      href={`/lesson/${l.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-card px-5 py-4 hover:border-accent transition-colors"
                    >
                      <span
                        className={`h-8 w-8 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold border ${
                          complete
                            ? "bg-accent border-accent text-white"
                            : "border-line text-muted group-hover:border-accent group-hover:text-accent"
                        }`}
                      >
                        {complete ? "✓" : l.day}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="font-semibold group-hover:text-accent transition-colors">
                          {l.title}
                        </span>
                        <span className="block text-sm text-muted truncate">{l.hook}</span>
                      </span>
                      <span className="text-xs text-muted shrink-0">{l.minutes} min</span>
                    </Link>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
