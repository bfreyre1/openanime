import Image from "next/image";

type GalleryThumbProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Grid / card thumbnails — resized via Next image optimizer (AVIF/WebP on Vercel). */
export function GalleryThumb({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "object-cover transition-transform group-hover:scale-105",
}: GalleryThumbProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={75}
      priority={priority}
      className={className}
    />
  );
}
