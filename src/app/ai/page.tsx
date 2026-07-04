import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Disclosure",
};

export default function AiPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">AI &amp; Creative Process</h1>
      <div className="space-y-4 prose-muted">
        <p>
          <strong className="text-[var(--text)]">Glitch Crew</strong> uses
          AI-assisted tools for visual development — including xAI Grok Imagine for
          stills and short video clips. Characters, story, and canon are created
          and approved by human showrunners{" "}
          <strong className="text-[var(--text)]">Brandon + Ara</strong>.
        </p>
        <p>
          Images and videos on this site are generated in a staging pipeline,
          reviewed, and published intentionally. They are not presented as
          unaltered photography of real people or places.
        </p>
        <p>
          <strong className="text-[var(--text)]">openaianime.com</strong> is the
          public home for Glitch Crew.{" "}
          <strong className="text-[var(--text)]">openainime.com</strong> redirects
          here for transparency about our AI-assisted production workflow.
        </p>
      </div>
    </div>
  );
}
