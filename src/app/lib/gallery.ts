import galleryData from "../../../data/gallery.json";
import { CAST, type CharacterId } from "./site";

export type GalleryItem = {
  id: string;
  title: string;
  type: "image" | "video";
  src: string;
  /** Scene thumbnail — still or last frame; not hero ref. */
  poster?: string;
  /** Primary character label (legacy / display). */
  character?: string;
  /** Filter tags — multi-character scenes appear under each. */
  characters?: string[];
  episode?: string;
  published?: string;
  description?: string;
};

export function galleryCharacterTags(item: GalleryItem): string[] {
  if (item.characters?.length) return item.characters;
  return item.character ? [item.character] : [];
}

function itemMatchesCharacter(item: GalleryItem, character: CharacterId): boolean {
  return galleryCharacterTags(item).includes(character);
}

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
  return items.filter((item) => itemMatchesCharacter(item, character));
}

export function getGalleryItem(id: string): GalleryItem | undefined {
  return getGalleryItems().find((item) => item.id === id);
}

/** Locked hero ref for homepage character cards (not latest scene poster). */
export function getCharacterProfileSrc(character: CharacterId): string | undefined {
  return getGalleryItem(`${character}-ref-v1`)?.src;
}

export function getCharacterMediaCount(character: CharacterId): number {
  return getGalleryItemsByCharacter(character).length;
}
