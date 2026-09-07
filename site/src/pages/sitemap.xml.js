import { getCollection } from "astro:content";
import createSlug from "../lib/createSlug";

// Built by hand rather than with @astrojs/sitemap: that package registers the
// `astro:routes:resolved` hook, which only exists in Astro 5. On Astro 4.16 it
// leaves its route list undefined and crashes the build.
const STATIC_PAGES = [
  "/",
  "/projects",
  "/practice",
  "/journey",
  "/notes/",
  "/blog/",
  "/prd/assessment-platform",
];

export async function GET(context) {
  const site = context.site ?? new URL("https://aguedaschwartz.com");
  const posts = await getCollection("blog");

  const entries = [
    ...STATIC_PAGES.map((path) => ({ path, lastmod: null })),
    ...posts.map((post) => ({
      path: `/blog/${createSlug(post.data.title, post.slug)}/`,
      lastmod: post.data.updatedDate ?? post.data.pubDate ?? null,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(({ path, lastmod }) => {
    const loc = new URL(path, site).href;
    const stamp = lastmod ? new Date(lastmod).toISOString().split("T")[0] : null;
    return `  <url>\n    <loc>${loc}</loc>${stamp ? `\n    <lastmod>${stamp}</lastmod>` : ""}\n  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
