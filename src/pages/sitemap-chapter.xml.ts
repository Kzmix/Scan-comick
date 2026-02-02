import { generateSitemapXML } from "@/lib/sitemap";
import { getAllSeriesSlugs, getSeriesBySlug } from "@/lib/series";

export async function GET() {
  const base = "https://kazuscan.my.id";
  const urls = [];

  for (const slug of getAllSeriesSlugs()) {
    const series = getSeriesBySlug(slug);
    if (!series) continue;

    const chapters = series.chapters;

    if (chapters.length === 0) continue;

    // Chapter pertama
    urls.push({
      loc: `${base}/series/${slug}/chapter/${chapters[0].number}`,
    });

    // Chapter terbaru
    const latest = chapters[chapters.length - 1];
    urls.push({
      loc: `${base}/series/${slug}/chapter/${latest.number}`,
    });
  }

  const body = generateSitemapXML(urls);

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}