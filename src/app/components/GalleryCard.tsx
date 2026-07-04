import Link from "next/link";
import { galleryCharacterTags, type GalleryItem } from "../lib/gallery";

export function GalleryCard({ item }: { item: GalleryItem }) {
  const isVideo = item.type === "video";

  return (
    <article className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
      <Link href={`/gallery/${item.id}`} className="block">
        <div className="relative aspect-video bg-black overflow-hidden">
          {isVideo ? (
            item.poster ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.poster}
                alt={item.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <video
                src={item.src}
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            )
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          )}
          {isVideo && (
            <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-[var(--cyan)]">
              VIDEO
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium text-[var(--text)]">{item.title}</h3>
          {item.description && (
            <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">
              {item.description}
            </p>
          )}
          <p className="mt-2 text-xs uppercase tracking-wider text-[var(--pink)]">
            {[galleryCharacterTags(item).join(" + ") || item.character, item.episode]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </div>
      </Link>
    </article>
  );
}
