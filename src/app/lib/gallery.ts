import galleryData from "../../../data/gallery.json";

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

export function getGalleryItems(): GalleryItem[] {
  return (galleryData.items as GalleryItem[]).sort((a, b) =>
    (b.published ?? "").localeCompare(a.published ?? ""),
  );
}

export function getGalleryItem(id: string): GalleryItem | undefined {
  return getGalleryItems().find((item) => item.id === id);
}
