import { NextResponse } from "next/server";

export function GET() {
  const baseUrl = "https://rusyouthkorea.com";
  const pages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
    { url: "/schedule", priority: "0.9", changefreq: "weekly" },
    { url: "/media", priority: "0.8", changefreq: "weekly" },
    { url: "/groups", priority: "0.7", changefreq: "monthly" },
    { url: "/new", priority: "0.9", changefreq: "monthly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
