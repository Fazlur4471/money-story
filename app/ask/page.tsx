"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { lessons } from "@/lib/curriculum";

type Msg = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "Explain compound interest like I'm ten.",
  "What's the difference between a 401(k) and a Roth IRA?",
  "Should I use the snowball or avalanche method?",
  "Why does my savings account pay almost nothing?",
  "Is an S&P 500 fund actually safe?",
];

export default function AskPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    setError(null);
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Something went wrong.");
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  const lessonTitle = (slug: string) =>
    lessons.find((l) => l.slug === slug)?.title;

  return (
    <div className="mx-auto max-w-3xl px-6 pt-12 pb-16">
      <p className="text-accent text-sm font-medium">AI tutor</p>
      <h1 className="font-serif text-4xl font-semibold tracking-tight mt-1">
        Ask like you&apos;re ten. That&apos;s the point.
      </h1>
      <p className="text-muted mt-3 max-w-xl leading-relaxed">
        Confused by a term? Want a different analogy? The tutor re-explains money
        concepts in plain words — as many times as you need, at any hour.
      </p>

      <div className="mt-8 rounded-3xl border border-line bg-card overflow-hidden flex flex-col min-h-[480px]">
        <div className="flex-1 p-6 space-y-5 overflow-y-auto max-h-[560px]">
          {messages.length === 0 && (
            <div className="space-y-4">
              <div className="rounded-2xl bg-accent-soft/70 border border-line px-5 py-4 text-[15px] leading-relaxed">
                Hi — I&apos;m your MoneyStory tutor. Ask me anything about the
                lessons, or about money in general, in normal human words.
              </div>
              <div className="flex flex-wrap gap-2">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-sm rounded-full border border-line px-4 py-2 hover:border-accent hover:text-accent transition-colors text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted pt-1">
                Try: “I read Day {lessons[6]?.day} — {lessonTitle(lessons[6]?.slug ?? "")} — but
                the tree part confused me.”
              </p>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-[15px] leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-accent text-white"
                    : "bg-background border border-line"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {busy && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-background border border-line px-5 py-3.5 text-sm text-muted animate-pulse">
                thinking of a better analogy…
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 text-red-700 px-5 py-3 text-sm">
              {error}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="border-t border-line p-4 flex gap-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Why is inflation called a thief?"
            className="flex-1 rounded-full border border-line bg-background px-5 py-3 text-[15px] outline-none focus:border-accent transition-colors"
            disabled={busy}
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            className="rounded-full bg-accent text-white font-medium px-6 py-3 hover:opacity-90 transition-opacity disabled:opacity-40"
          >
            Ask
          </button>
        </form>
      </div>

      <p className="text-xs text-muted mt-4 text-center">
        Answers are educational, not financial advice · continue your journey at{" "}
        <Link href="/path" className="underline hover:text-accent">
          the 12-day path
        </Link>
      </p>
    </div>
  );
}
