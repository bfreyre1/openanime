import type { Metadata } from "next";
import { GalleryCard } from "../components/GalleryCard";
import { getGalleryItems } from "../lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  const items = getGalleryItems();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Gallery</h1>
      <p className="prose-muted mb-10 max-w-2xl">
        Approved stills and clips from The Glitch House. Staging happens on the
        production pipeline; only showrunner-approved media appears here.
      </p>
      {items.length === 0 ? (
        <p className="text-[var(--muted)]">No published media yet.</p>
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
