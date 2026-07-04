import Link from "next/link";
import { SITE } from "../lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/episodes", label: "Episodes" },
  { href: "/ai", label: "AI" },
];

export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="group">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--cyan)]">
            openaianime.com
          </span>
          <span className="block text-lg font-semibold text-[var(--text)] group-hover:text-[var(--pink)] transition-colors">
            {SITE.name}
          </span>
          <span className="block text-xs text-[var(--muted)]">{SITE.show}</span>
        </Link>
        <nav className="flex gap-5 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
