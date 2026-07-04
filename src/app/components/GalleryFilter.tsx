import Link from "next/link";
import { CAST } from "../lib/site";
import { getCharacterMediaCount } from "../lib/gallery";
import type { CharacterId } from "../lib/site";

export function GalleryFilter({ active }: { active?: CharacterId }) {
  return (
    <nav className="mb-10 flex flex-wrap gap-2">
      <Link
        href="/gallery"
        className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
          !active
            ? "border-[var(--cyan)] bg-[var(--cyan)]/10 text-[var(--text)]"
            : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--cyan)] hover:text-[var(--text)]"
        }`}
      >
        All crew
      </Link>
      {CAST.map((c) => {
        const count = getCharacterMediaCount(c.id);
        const isActive = active === c.id;
        return (
          <Link
            key={c.id}
            href={`/gallery?character=${c.id}`}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              isActive
                ? "border-[var(--pink)] bg-[var(--pink)]/10 text-[var(--text)]"
                : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--pink)] hover:text-[var(--text)]"
            }`}
          >
            {c.name}
            {count > 0 && (
              <span className="ml-1.5 text-xs opacity-70">({count})</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
