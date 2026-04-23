import { NextResponse } from "next/server";

export function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://rusyouthkorea.com/sitemap.xml
`;
  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
