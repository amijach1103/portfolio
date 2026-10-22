
// Built by hand rather than with @astrojs/sitemap: that package registers the
// `astro:routes:resolved` hook, which only exists in Astro 5. On Astro 4.16 it
// leaves its route list undefined and crashes the build.
const STATIC_PAGES = [
  "/",
  "/projects",
];

export async function GET(context) {
  const site = context.site ?? new URL("https://aguedaschwartz.com");

  const entries = [
    ...STATIC_PAGES.map((path) => ({ path, lastmod: null })),
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
