import Link from "next/link";
import { notFound } from "next/navigation";
import { lessons, getLesson } from "@/lib/curriculum";
import CompleteButton from "@/components/CompleteButton";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/lesson/[slug]">) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  return { title: lesson ? lesson.title : "Lesson" };
}

const kindIcon: Record<string, string> = {
  video: "🎬",
  article: "📄",
  course: "🎓",
  community: "💬",
};

const kindLabel: Record<string, string> = {
  video: "Watch",
  article: "Read",
  course: "Course",
  community: "Community",
};

export default async function LessonPage({ params }: PageProps<"/lesson/[slug]">) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const idx = lessons.findIndex((l) => l.slug === lesson.slug);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  return (
    <article className="mx-auto max-w-3xl px-6 pt-12 pb-16">
      <nav className="text-sm text-muted flex items-center gap-2">
        <Link href="/path" className="hover:text-accent">
          Path
        </Link>
        <span aria-hidden>/</span>
        <span>{lesson.module}</span>
      </nav>

      <div className="mt-6 flex items-center gap-3 text-sm">
        <span className="rounded-full bg-accent-soft text-accent px-3 py-1 font-medium">
          Day {lesson.day}
        </span>
        <span className="text-muted">{lesson.minutes} min read</span>
      </div>

      <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight mt-4 leading-[1.1]">
        {lesson.title}
      </h1>
      <p className="text-lg text-muted mt-4 leading-relaxed">{lesson.hook}</p>

      <div className="story mt-8 text-[17px] text-foreground/90">
        {lesson.story.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-line bg-card p-6 sm:p-8">
        <h2 className="font-serif text-xl font-semibold">Words decoded</h2>
        <dl className="mt-4 space-y-4">
          {lesson.terms.map((t) => (
            <div key={t.term}>
              <dt className="font-semibold text-accent">{t.term}</dt>
              <dd className="text-[15px] text-muted leading-relaxed mt-0.5">
                {t.definition}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-6 rounded-3xl bg-accent-soft/70 border border-line p-6 sm:p-8">
        <h2 className="font-serif text-xl font-semibold">Why this matters</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-foreground/90">
          {lesson.whyItMatters}
        </p>
        <h2 className="font-serif text-xl font-semibold mt-6">Today&apos;s one action</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-foreground/90">
          {lesson.action}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-serif text-xl font-semibold">Go deeper — free</h2>
        <div className="mt-4 space-y-2.5">
          {lesson.resources.map((r) => (
            <a
              key={r.url + r.label}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-line bg-card px-5 py-3.5 hover:border-accent transition-colors"
            >
              <span aria-hidden>{kindIcon[r.kind]}</span>
              <span className="flex-1 text-sm font-medium group-hover:text-accent transition-colors">
                {r.label}
              </span>
              <span className="text-xs text-muted">{kindLabel[r.kind]} ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <Link
          href="/ask"
          className="block rounded-3xl border border-dashed border-accent/50 px-6 py-5 text-center hover:bg-accent-soft/50 transition-colors"
        >
          <span className="font-serif font-semibold">Didn&apos;t fully land?</span>{" "}
          <span className="text-muted text-sm">
            Ask the tutor to re-explain this lesson a different way →
          </span>
        </Link>
      </section>

      <div className="mt-10">
        <CompleteButton slug={lesson.slug} />
      </div>

      <nav className="mt-10 flex items-stretch justify-between gap-4">
        {prev ? (
          <Link
            href={`/lesson/${prev.slug}`}
            className="flex-1 rounded-2xl border border-line bg-card px-5 py-4 hover:border-accent transition-colors"
          >
            <span className="text-xs text-muted">← Day {prev.day}</span>
            <span className="block font-semibold text-sm mt-0.5">{prev.title}</span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/lesson/${next.slug}`}
            className="flex-1 rounded-2xl border border-line bg-card px-5 py-4 text-right hover:border-accent transition-colors"
          >
            <span className="text-xs text-muted">Day {next.day} →</span>
            <span className="block font-semibold text-sm mt-0.5">{next.title}</span>
          </Link>
        ) : (
          <Link
            href="/path"
            className="flex-1 rounded-2xl bg-accent text-white px-5 py-4 text-center hover:opacity-90 transition-opacity"
          >
            <span className="text-xs opacity-80">Journey complete</span>
            <span className="block font-semibold text-sm mt-0.5">Back to your path 🎉</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
