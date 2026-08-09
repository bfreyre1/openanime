import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryVideo } from "../../components/GalleryVideo";
import {
  galleryCharacterTags,
  galleryVideoPlaybackSrc,
  getGalleryItem,
  getGalleryItems,
} from "../../lib/gallery";

export async function generateStaticParams() {
  return getGalleryItems().map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = getGalleryItem(id);
  return { title: item?.title ?? "Gallery" };
}

export default async function GalleryItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getGalleryItem(id);
  if (!item) notFound();

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/gallery"
        className="text-sm text-[var(--cyan)] hover:underline mb-6 inline-block"
      >
        ← Gallery
      </Link>
      <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
      {item.description && (
        <p className="prose-muted mb-6">{item.description}</p>
      )}
      <div className="rounded-lg overflow-hidden border border-[var(--border)] bg-black">
        {item.type === "video" ? (
          <GalleryVideo
            src={galleryVideoPlaybackSrc(item)}
            poster={item.poster}
            title={item.title}
          />
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 768px"
            quality={80}
            className="h-auto w-full"
            priority
          />
        )}
      </div>
      <p className="mt-4 text-xs text-[var(--muted)] uppercase tracking-wider">
        {[galleryCharacterTags(item).join(" + ") || item.character, item.episode, item.published]
          .filter(Boolean)
          .join(" · ")}
      </p>
    </div>
  );
}
