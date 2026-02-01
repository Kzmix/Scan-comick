import fs from "node:fs";
import path from "node:path";

const SERIES_DIR = path.resolve("src/data/series");

export type Chapter = {
  number: number;
  title?: string;
};

export type Series = {
  slug: string;
  title: string;
  description?: string;
  chapters: Chapter[];
};

export function getAllSeriesSlugs(): string[] {
  return fs
    .readdirSync(SERIES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

export function getSeriesBySlug(slug: string): Series | null {
  const file = path.join(SERIES_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

export function getChapterByNumber(
  series: Series,
  number: number
) {
  const chapters = series.chapters;
  const index = chapters.findIndex(
    (c) => c.number === number
  );

  if (index === -1) return null;

  return {
    chapter: chapters[index],
    prev: chapters[index - 1] ?? null,
    next: chapters[index + 1] ?? null,
  };
}