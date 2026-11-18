"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toggleComplete, loadProgress, markViewed } from "@/lib/progress";

export default function CompleteButton({ slug }: { slug: string }) {
  const [complete, setComplete] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    markViewed(slug);
    setComplete(loadProgress().completed.includes(slug));
    setReady(true);
  }, [slug]);

  if (!ready) {
    return <div className="h-12 rounded-2xl bg-line/60 animate-pulse" aria-hidden />;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={() => setComplete(toggleComplete(slug).completed.includes(slug))}
        className={`flex-1 rounded-2xl px-6 py-3.5 font-medium transition-all ${
          complete
            ? "bg-accent text-white hover:opacity-90"
            : "border border-line bg-card hover:border-accent hover:text-accent"
        }`}
      >
        {complete ? "✓ Lesson complete — tap to undo" : "Mark this lesson complete"}
      </button>
      <Link
        href="/path"
        className="rounded-2xl border border-line bg-card px-6 py-3.5 font-medium text-center hover:border-accent transition-colors"
      >
        Back to path
      </Link>
    </div>
  );
}
