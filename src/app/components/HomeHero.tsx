"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

type HomeHeroProps = {
  children: ReactNode;
};

export function HomeHero({ children }: HomeHeroProps) {
  const [imageOk, setImageOk] = useState(true);

  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 w-screen overflow-hidden md:mb-16">
      <div className="relative flex min-h-[min(88vh,920px)] items-center justify-center">
        {imageOk ? (
          <Image
            src="/images/hero-neo-tokyo-bay.jpg"
            alt="Neo-Tokyo Bay skyline and Glitch House at night in the rain"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[30%_78%] md:object-[24%_72%]"
            onError={() => setImageOk(false)}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(155, 92, 255, 0.2), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(62, 231, 255, 0.1), transparent), var(--bg)",
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b10]/92 via-[#0a0b10]/55 to-[var(--bg)]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 18%, rgba(10, 11, 16, 0.65) 0%, transparent 72%)",
          }}
          aria-hidden
        />
        <div className="hero-scanlines absolute inset-0 pointer-events-none" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 text-center md:py-28">
          {children}
        </div>
      </div>
    </section>
  );
}
