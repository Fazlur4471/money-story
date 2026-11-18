import Link from "next/link";
import { lessons, totalMinutes, MODULE_ORDER } from "@/lib/curriculum";

const moduleBlurbs: Record<string, string> = {
  Foundations: "Budgets, emergency jars, and the thief called inflation.",
  "Debt & Credit": "Kill debt with a plan. Raise your score with habits.",
  "Growing Your Money": "Compound interest, banks, index funds, risk.",
  "Planning Ahead": "Retirement accounts and taxes, minus the rage.",
};

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <p className="text-accent font-medium tracking-wide text-sm mb-4">
          12 days · 15–20 min/day · zero jargon
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl">
          Finance, told the way stories were always told.
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          Nobody taught you money in school. MoneyStory retells personal finance as
          twelve short stories — envelope budgets, a rainy-day jar, a magic money
          tree — with real free sources and an AI tutor that answers like you&apos;re
          ten, not like a textbook.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/path"
            className="rounded-full bg-accent text-white font-medium px-7 py-3 hover:opacity-90 transition-opacity"
          >
            Start Day 1 — it&apos;s free
          </Link>
          <Link
            href="/ask"
            className="rounded-full border border-line bg-card font-medium px-7 py-3 hover:border-accent transition-colors"
          >
            Ask the tutor anything
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted">
          {lessons.length} lessons · ~{Math.round(totalMinutes / 60)} hours total · progress saved
          in your browser
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODULE_ORDER.map((mod, i) => (
            <Link
              key={mod}
              href="/path"
              className="rounded-2xl border border-line bg-card p-5 hover:-translate-y-0.5 hover:shadow-sm transition-all group"
            >
              <span className="text-xs font-medium text-accent">
                MODULE {i + 1}
              </span>
              <h3 className="font-serif text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
                {mod}
              </h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                {moduleBlurbs[mod]}
              </p>
              <p className="text-xs text-muted mt-4">
                {lessons.filter((l) => l.module === mod).length} stories
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-line bg-card p-8 sm:p-12">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">
            What a day looks like
          </h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-8">
            {[
              {
                n: "1",
                t: "Read one story",
                d: "A single idea told like you're ten — no walls of terms, no doom.",
              },
              {
                n: "2",
                t: "Do the one action",
                d: "Every lesson ends with a small real step: open an account, list a debt, check a rate.",
              },
              {
                n: "3",
                t: "Ask the tutor",
                d: "Confused by anything? The AI tutor re-explains with a different analogy, as many times as you need.",
              },
            ].map((s) => (
              <div key={s.n}>
                <div className="h-10 w-10 rounded-full bg-accent-soft text-accent font-serif text-xl font-semibold flex items-center justify-center">
                  {s.n}
                </div>
                <h3 className="font-semibold mt-4">{s.t}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { k: "Stories, not lectures", v: "Every concept starts with a jar, a tree, or a fox — then maps to the real term." },
            { k: "Real sources, free", v: "Khan Academy, Investopedia, SEC, r/personalfinance — curated links on every lesson." },
            { k: "Built-in AI tutor", v: "Stuck at 11pm? Ask anything in plain words. It answers like a patient friend." },
          ].map((c) => (
            <div key={c.k} className="rounded-2xl bg-accent-soft/60 border border-line p-5">
              <h3 className="font-semibold text-sm">{c.k}</h3>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">{c.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
