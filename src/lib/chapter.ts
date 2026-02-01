import fs from "node:fs";
import path from "node:path";

const CHAPTER_DIR = path.resolve("src/data/chapters");

export type ChapterImage = {
  src: string;
  width: number;
  height: number;
};

export type ChapterData = {
  series: string;
  number: number;
  images: ChapterImage[];
};

export function getChapterImages(
  seriesSlug: string,
  number: number
): ChapterData | null {
  const file = path.join(
    CHAPTER_DIR,
    seriesSlug,
    `${number}.json`
  );

  if (!fs.existsSync(file)) return null;

  return JSON.parse(fs.readFileSync(file, "utf-8"));
}