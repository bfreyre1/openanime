import galleryData from "../../../data/gallery.json";
import { CAST, type CharacterId } from "./site";

export type GalleryItem = {
  id: string;
  title: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  character?: string;
  episode?: string;
  published?: string;
  description?: string;
};

const CHARACTER_IDS = new Set<string>(CAST.map((c) => c.id));

export function isCharacterId(id: string): id is CharacterId {
  return CHARACTER_IDS.has(id);
}

export function getGalleryItems(): GalleryItem[] {
  return (galleryData.items as GalleryItem[]).sort((a, b) =>
    (b.published ?? "").localeCompare(a.published ?? ""),
  );
}

export function getGalleryItemsByCharacter(character?: string): GalleryItem[] {
  const items = getGalleryItems();
  if (!character || !isCharacterId(character)) return items;
  return items.filter((item) => item.character === character);
}

export function getGalleryItem(id: string): GalleryItem | undefined {
  return getGalleryItems().find((item) => item.id === id);
}

/** Best thumbnail for a character card — latest image, or video poster. */
export function getCharacterPreviewSrc(character: CharacterId): string | undefined {
  for (const item of getGalleryItemsByCharacter(character)) {
    if (item.type === "image") return item.src;
    if (item.poster) return item.poster;
  }
  return undefined;
}

export function getCharacterMediaCount(character: CharacterId): number {
  return getGalleryItemsByCharacter(character).length;
}
