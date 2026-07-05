import Link from "next/link";
import { CharacterCard } from "./components/CharacterCard";
import { HomeHero } from "./components/HomeHero";
import { CAST, SITE } from "./lib/site";

export default function HomePage() {
  return (
    <div>
      <HomeHero>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          Neo-Tokyo Bay
        </p>
        <h1 className="bg-gradient-to-r from-[var(--pink)] via-[var(--purple)] to-[var(--cyan)] bg-clip-text text-4xl font-bold text-transparent drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)] md:text-6xl">
          {SITE.show}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text)]/90 drop-shadow-md">
          {SITE.tagline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/gallery" className="btn-primary">
            View Gallery
          </Link>
          <Link
            href="/episodes"
            className="rounded-md border border-white/20 bg-black/30 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:border-[var(--cyan)]"
          >
            Season 1
          </Link>
        </div>
      </HomeHero>

      <section className="py-12 border-t border-[var(--border)]">
        <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--muted)] mb-8 text-center">
          The Crew
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {CAST.map((c) => (
            <CharacterCard key={c.id} character={c} />
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
