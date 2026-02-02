import { generateSitemapXML } from "@/lib/sitemap";
import { getAllGenreSlugs } from "@/lib/genre";
import { getAllSeriesSlugs, getSeriesBySlug } from "@/lib/series";

export async function GET() {
  const base = "https://kazuscan.my.id";

  const urls = [];

  // Homepage
  urls.push({ loc: `${base}/` });
  urls.push({ loc: `${base}/genre` });

  // Genre detail
  for (const slug of getAllGenreSlugs()) {
    urls.push({
      loc: `${base}/genre/${slug}`,
    });
  }

  // Series detail
  for (const slug of getAllSeriesSlugs()) {
    const series = getSeriesBySlug(slug);
    if (!series) continue;

    urls.push({
      loc: `${base}/series/${slug}`,
      lastmod: series.updatedAt,
    });
  }

  const body = generateSitemapXML(urls);

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}