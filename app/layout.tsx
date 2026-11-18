import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "MoneyStory — finance told as stories",
    template: "%s · MoneyStory",
  },
  description:
    "12 days. 15–20 minutes a day. Personal finance explained like you're ten — stories, real sources, and an AI tutor that never judges your questions.",
};

const navLink =
  "text-sm font-medium text-muted hover:text-accent transition-colors";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="border-b border-line bg-background/90 backdrop-blur sticky top-0 z-20">
          <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl" aria-hidden>
                🌱
              </span>
              <span className="font-serif text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
                MoneyStory
              </span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/path" className={navLink}>
                The 12-Day Path
              </Link>
              <Link href="/ask" className={navLink}>
                Ask the Tutor
              </Link>
              <Link
                href="/path"
                className="rounded-full bg-accent text-white text-sm font-medium px-4 py-1.5 hover:opacity-90 transition-opacity"
              >
                Start Day 1
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line mt-24">
          <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
            <p>
              MoneyStory — learn money in story-sized pieces. Free, forever.
            </p>
            <p>
              Educational only · not financial advice · built by{" "}
              <a
                href="https://github.com/Fazlur4471"
                className="underline hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                Fazlur
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
