import type { ComicCardData } from "./types";

/* =========
   LOAD DATA (AMAN)
   ========= */
const genreModules = import.meta.glob("../data/genres.json", {
  eager: true,
});

const comicModules = import.meta.glob("../data/comics/index.json", {
  eager: true,
});

/* ambil isi JSON dari .default */
const genres = (Object.values(genreModules)[0] as any).default as Record<
  string,
  { name: string; description: string }
>;

const comics = (Object.values(comicModules)[0] as any).default as ComicCardData[];

/* =========
   TYPES
   ========= */
export type GenreMeta = {
  name: string;
  description: string;
};

/* =========
   FUNCTIONS
   ========= */
export function getAllGenreSlugs(): string[] {
  return Object.keys(genres);
}

export function getGenreMeta(slug: string): GenreMeta | null {
  return genres[slug] ?? null;
}

export function getComicsByGenre(slug: string): ComicCardData[] {
  return comics.filter((comic) =>
    comic.genres?.includes(slug)
  );
}