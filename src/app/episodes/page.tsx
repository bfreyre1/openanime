import type { Metadata } from "next";
import { getEpisodes } from "../lib/episodes";

export const metadata: Metadata = {
  title: "Episodes",
};

export default function EpisodesPage() {
  const episodes = getEpisodes();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Season 1</h1>
      <p className="prose-muted mb-10 max-w-2xl">
        Episode summaries from the Glitch Crew writers&apos; room. Draft beats
        become public when Brandon + Ara approve.
      </p>
      <div className="space-y-6">
        {episodes.map((ep) => (
          <article
            key={ep.id}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[var(--cyan)] font-mono text-sm">{ep.id}</span>
              <h2 className="text-xl font-semibold">{ep.title}</h2>
              {ep.status === "draft" && (
                <span className="text-xs uppercase tracking-wider text-[var(--pink)]">
                  draft
                </span>
              )}
            </div>
            {ep.stunt && (
              <p className="text-sm text-[var(--muted)] mb-3">
                Stunt: <span className="text-[var(--text)]">{ep.stunt}</span>
              </p>
            )}
            <p className="prose-muted">{ep.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
