import type { GalleryItem } from "./gallery";

export const SITE = {
  name: "OpenAnime",
  show: "Glitch Crew",
  tagline: "Neo-Tokyo Bay. Found family. Reality glitches.",
  domain: "https://openanime.com",
} as const;

export const CAST = [
  { id: "nova", name: "Nova", role: "Chaos Catalyst" },
  { id: "kai", name: "Kai", role: "Shadow Protector" },
  { id: "shiro", name: "Shiro", role: "Phantom Trickster" },
  { id: "raydar", name: "Raydar", role: "Sensor Heart" },
] as const;

export type { GalleryItem };
