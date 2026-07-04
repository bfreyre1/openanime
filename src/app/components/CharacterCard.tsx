import Link from "next/link";
import { getCharacterMediaCount, getCharacterProfileSrc } from "../lib/gallery";
import type { CharacterId } from "../lib/site";

type Character = {
  id: CharacterId;
  name: string;
  role: string;
};

export function CharacterCard({ character }: { character: Character }) {
  const preview = getCharacterProfileSrc(character.id);
  const count = getCharacterMediaCount(character.id);

  return (
    <Link
      href={`/gallery?character=${character.id}`}
      className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] transition-colors hover:border-[var(--cyan)]"
    >
      <div className="relative aspect-[3/4] bg-gradient-to-br from-[var(--purple)]/20 to-[var(--cyan)]/10 overflow-hidden">
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt={character.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-bold text-[var(--muted)]/40">
              {character.name[0]}
            </span>
          </div>
        )}
        <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-[var(--cyan)]">
          {count === 0 ? "Coming soon" : `${count} ${count === 1 ? "piece" : "pieces"}`}
        </span>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-[var(--text)] group-hover:text-[var(--pink)] transition-colors">
          {character.name}
        </h3>
        <p className="mt-1 text-xs text-[var(--cyan)]">{character.role}</p>
      </div>
    </Link>
  );
}
