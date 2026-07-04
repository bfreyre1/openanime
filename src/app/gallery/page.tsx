import type { Metadata } from "next";
import Link from "next/link";
import { GalleryCard } from "../components/GalleryCard";
import { GalleryFilter } from "../components/GalleryFilter";
import { getGalleryItemsByCharacter } from "../lib/gallery";
import { CAST, type CharacterId } from "../lib/site";

type Props = {
  searchParams: Promise<{ character?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { character } = await searchParams;
  const cast = CAST.find((c) => c.id === character);
  if (cast) {
    return { title: `${cast.name} Gallery` };
  }
  return { title: "Gallery" };
}

export default async function GalleryPage({ searchParams }: Props) {
  const { character: rawCharacter } = await searchParams;
  const character = CAST.some((c) => c.id === rawCharacter)
    ? (rawCharacter as CharacterId)
    : undefined;
  const castMember = character ? CAST.find((c) => c.id === character) : undefined;
  const items = getGalleryItemsByCharacter(character);

  return (
    <div>
      <Link
        href="/"
        className="text-sm text-[var(--cyan)] hover:underline mb-4 inline-block"
      >
        ← Home
      </Link>
      <h1 className="text-3xl font-bold mb-2">
        {castMember ? `${castMember.name} — Gallery` : "Gallery"}
      </h1>
      <p className="prose-muted mb-6 max-w-2xl">
        {castMember
          ? `Approved stills and clips featuring ${castMember.name} (${castMember.role}).`
          : "Approved stills and clips from The Glitch House. Staging happens on the production pipeline; only showrunner-approved media appears here."}
      </p>

      <GalleryFilter active={character} />

      {items.length === 0 ? (
        <p className="text-[var(--muted)]">
          {castMember
            ? `No published media for ${castMember.name} yet — check back soon.`
            : "No published media yet."}
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
