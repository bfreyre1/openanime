import Link from "next/link";
import { CAST, SITE } from "./lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="py-12 text-center md:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan)] mb-4">
          Neo-Tokyo Bay
        </p>
        <h1 className="text-4xl font-bold md:text-6xl bg-gradient-to-r from-[var(--pink)] via-[var(--purple)] to-[var(--cyan)] bg-clip-text text-transparent">
          {SITE.show}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg prose-muted">{SITE.tagline}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/gallery" className="btn-primary">
            View Gallery
          </Link>
          <Link
            href="/episodes"
            className="rounded-md border border-[var(--border)] px-6 py-3 text-sm font-medium hover:border-[var(--cyan)] transition-colors"
          >
            Season 1
          </Link>
        </div>
      </section>

      <section className="py-12 border-t border-[var(--border)]">
        <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--muted)] mb-8 text-center">
          The Crew
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {CAST.map((c) => (
            <div
              key={c.id}
              className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 text-center"
            >
              <h3 className="font-semibold text-[var(--text)]">{c.name}</h3>
              <p className="mt-1 text-xs text-[var(--cyan)]">{c.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-[var(--border)] text-center">
        <p className="prose-muted max-w-lg mx-auto text-sm">
          GlitchHouse streams. Viral stunts. The first tear in reality. Follow the
          gallery for new stills and clips.
        </p>
      </section>
    </div>
  );
}
