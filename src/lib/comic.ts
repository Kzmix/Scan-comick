import type { ComicCardData } from "./types";

/* load json safely */
const modules = import.meta.glob("../data/comics/*.json", {
  eager: true,
});

const latest = (modules["../data/comics/latest.json"] as any).default as ComicCardData[];
const popular = (modules["../data/comics/popular.json"] as any).default as ComicCardData[];
const allComics = (modules["../data/comics/index.json"] as any).default as ComicCardData[];

export function getLatestComics(): ComicCardData[] {
  return latest;
}

export function getPopularComics(): ComicCardData[] {
  return popular;
}

export function getComicsByGenre(genre: string): ComicCardData[] {
  return allComics.filter((comic) =>
    comic.genres?.includes(genre)
  );
}

export function getAllGenres(): string[] {
  const set = new Set<string>();

  allComics.forEach((comic) => {
    comic.genres?.forEach((g) => set.add(g));
  });

  return Array.from(set);
}