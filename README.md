# 🌱 MoneyStory

**Finance, told the way stories were always told.**

12 days · 15–20 minutes a day · zero jargon · free forever.

Nobody teaches money in school. MoneyStory retells personal finance as twelve
short stories — envelope budgets, a rainy-day jar, a cookie thief called
inflation, a magic money tree — then maps each story to the real term, one
action you can do today, and curated free sources.

## Why it exists

- **Story-first pedagogy** — every concept starts with a jar, a tree, or a
  fox before it becomes APR, utilisation, or expense ratio.
- **Sized for real life** — one idea per day, 15–20 minutes, built for the
  10 PM slot where most learning apps fail.
- **Real sources, not vibes** — Khan Academy, Investopedia, SEC Investor.gov,
  CFPB, r/personalfinance, verified YouTube explainers on every lesson.
- **An AI tutor that never judges** — `openai/gpt-oss-120b` via Groq, with a
  system prompt that forces plain words, short answers, and story-shaped
  re-explanations.

## The curriculum

| # | Module | Lessons |
|---|--------|---------|
| 1 | Foundations | The Money Story Begins · The Envelope System · The Rainy-Day Jar · The Cookie Thief (inflation) |
| 2 | Debt & Credit | Snowball vs Avalanche · Your Financial Report Card (credit) |
| 3 | Growing Your Money | The Magic Money Tree (compounding) · Behind the Bank's Curtain · Owning the Whole Grocery Store (index funds) · The Basket Rule (risk) |
| 4 | Planning Ahead | The Time Machine Accounts (401k/IRA/Roth) · The Community Bucket (taxes) |

Progress (completions + daily streak) lives in `localStorage` — no account, no
tracking, works offline.

## Tech

- **Next.js 16** (App Router, Turbopack, partial prerendering) + **React 19**
- **Tailwind CSS 4** · Fraunces + Inter via `next/font`
- **Groq** chat completions (`/api/chat`, server-side key, 45s timeout,
  message trimming + role filtering)
- Static generation for all 12 lessons; only `/api/chat` is dynamic

## Run locally

```bash
npm install
cp .env.local.example .env.local   # add GROQ_API_KEY=...
npm run dev
```

## Endpoints

| Route | Type | Purpose |
|-------|------|---------|
| `GET /` | static | Landing |
| `GET /path` | static (client progress) | 12-day curriculum |
| `GET /lesson/[slug]` | static ×12 | Story, terms, resources, actions |
| `GET /ask` | static (client chat) | AI tutor UI |
| `POST /api/chat` | dynamic | Groq-backed ELI5 tutor |

---

Educational only — not financial advice. Built by
[Fazlur](https://github.com/Fazlur4471).
