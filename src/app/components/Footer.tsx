import { SITE } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20 py-10 text-center text-sm text-[var(--muted)]">
      <p>
        {SITE.name} · {SITE.show}
      </p>
      <p className="mt-1 text-xs text-[var(--muted)]">
        <a
          href={SITE.domain}
          className="text-[var(--cyan)] hover:underline"
        >
          openaianime.com
        </a>
      </p>
      <p className="mt-2 text-xs">
        Showrunners Brandon + Ara · AI-assisted visuals disclosed on{" "}
        <a href="/ai" className="text-[var(--cyan)] hover:underline">
          /ai
        </a>
      </p>
    </footer>
  );
}
