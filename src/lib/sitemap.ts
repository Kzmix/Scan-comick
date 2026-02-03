type SitemapItem = {
  loc: string;
  lastmod?: string;
};

export function generateSitemapXML(urls: SitemapItem[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `<url>
  <loc>${u.loc}</loc>
  ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}
</url>`
  )
  .join("\n")}
</urlset>`;
}

export function generateSitemapIndex(items: { loc: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items
  .map(
    (s) => `<sitemap>
  <loc>${s.loc}</loc>
</sitemap>`
  )
  .join("\n")}
</sitemapindex>`;
}