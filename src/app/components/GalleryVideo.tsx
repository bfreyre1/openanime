"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryVideoProps = {
  src: string;
  poster?: string;
  title: string;
};

/** Avoid downloading MP4 on mobile until the viewer taps Play. */
export function GalleryVideo({ src, poster, title }: GalleryVideoProps) {
  const [active, setActive] = useState(false);

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        className="relative block aspect-video w-full cursor-pointer bg-black group"
        aria-label={`Play ${title}`}
      >
        {poster ? (
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            quality={75}
            className="object-contain"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-sm text-[var(--muted)]">
            Tap to load video
          </span>
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/30">
          <span className="rounded-full bg-[var(--cyan)] px-5 py-2 text-sm font-semibold text-black shadow-lg">
            Play
          </span>
        </span>
      </button>
    );
  }

  return (
    <video
      src={src}
      controls
      autoPlay
      playsInline
      preload="none"
      poster={poster}
      className="w-full"
    />
  );
}
