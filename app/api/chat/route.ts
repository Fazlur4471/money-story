import { NextResponse } from "next/server";

const SYSTEM = `You are the MoneyStory tutor: a warm, endlessly patient finance teacher for complete beginners.

Rules:
- Explain like the learner is smart but has zero finance background. Lead with a short story or analogy, then map it to the real term.
- Keep answers under ~180 words unless the learner explicitly asks for more depth.
- Short paragraphs. No bullet walls. Plain words before jargon, and define any jargon you use.
- Never shame a question. Never say "as an AI". Answer in English.
- MoneyStory covers: budgeting, emergency funds, inflation, debt payoff (snowball/avalanche), credit scores, compound interest, banks/savings, index funds, risk/diversification, retirement accounts (401k/IRA/Roth), and taxes.
- This is general education, not personalized financial advice. If asked for specific investments or your country-specific tax moves, give general principles and suggest checking an official/local source.
- If asked something unrelated to money, gently steer back once, then answer briefly.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = Array.isArray(body?.messages) ? body.messages : null;
    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "messages required" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Tutor is not configured (missing API key)." },
        { status: 503 }
      );
    }

    const trimmed = messages
      .filter(
        (m: { role?: string; content?: string }) =>
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string"
      )
      .slice(-16)
      .map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content.slice(0, 4000),
      }));

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        temperature: 0.6,
        max_tokens: 600,
        messages: [{ role: "system", content: SYSTEM }, ...trimmed],
      }),
      signal: AbortSignal.timeout(45_000),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("groq error", res.status, detail.slice(0, 300));
      return NextResponse.json(
        { error: "The tutor is taking a breath. Try again in a moment." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content;
    if (typeof reply !== "string" || reply.length === 0) {
      return NextResponse.json(
        { error: "The tutor replied with nothing. Try again." },
        { status: 502 }
      );
    }
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Request failed. Check your connection and try again." },
      { status: 500 }
    );
  }
}
