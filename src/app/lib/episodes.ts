import episodesData from "../../../data/episodes.json";

export type Episode = {
  id: string;
  title: string;
  status: "draft" | "published";
  summary: string;
  stunt?: string;
};

export function getEpisodes(): Episode[] {
  return episodesData.items as Episode[];
}
