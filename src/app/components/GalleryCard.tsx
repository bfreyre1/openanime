import Link from "next/link";
import { galleryCharacterTags, type GalleryItem } from "../lib/gallery";
import { GalleryThumb } from "./GalleryThumb";

function cardPreviewSrc(item: GalleryItem): string | undefined {
  if (item.type === "video") return item.poster;
  return item.src;
}

export function GalleryCard({
  item,
  priority = false,
}: {
  item: GalleryItem;
  priority?: boolean;
}) {
  const isVideo = item.type === "video";
  const previewSrc = cardPreviewSrc(item);

  return (
    <article className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
      <Link href={`/gallery/${item.id}`} className="block">
        <div className="relative aspect-video bg-black overflow-hidden">
          {previewSrc ? (
            <GalleryThumb
              src={previewSrc}
              alt={item.title}
              priority={priority}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--purple)]/30 to-[var(--cyan)]/10 text-xs text-[var(--muted)]">
              {isVideo ? "Video — open to play" : "No preview"}
            </div>
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
