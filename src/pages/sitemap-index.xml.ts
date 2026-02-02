import { generateSitemapIndex } from "@/lib/sitemap";

export async function GET() {
  const base = "https://kazuscan.my.id";

  const body = generateSitemapIndex([
    { loc: `${base}/sitemap-core.xml` },
    { loc: `${base}/sitemap-chapter.xml` },
  ]);

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}