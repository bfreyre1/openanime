import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Glitch Crew — OpenAnime",
    template: "%s · OpenAnime",
  },
  description:
    "Neo-Tokyo Bay. A misfit creator crew tears holes in reality. Stills, clips, and episodes.",
  metadataBase: new URL("https://openaianime.com"),
  openGraph: {
    siteName: "OpenAnime",
    title: "Glitch Crew",
    description: "Found family. Chaos with heart. Reality glitches.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
