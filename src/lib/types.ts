export type ComicCardData = {
  slug: string;
  title: string;
  cover: string;
  genres?: string[];
  badge?: "NEW" | "HOT";
};