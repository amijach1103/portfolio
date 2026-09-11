# aguedaschwartz.com

Source for **[aguedaschwartz.com](https://aguedaschwartz.com)** — an Astro site about product
discovery, AI practice, and what did and did not hold up.

```bash
cd site
npm install
npm run dev      # local preview
npm run build    # → site/dist, which is what deploys
```

Pushing to `main` deploys.

## Layout

| | |
|---|---|
| **`site/`** | The site. Everything published lives here |
| `_status/` | Working notes for the site itself. Not published |

## What's on it

- **Projects** — what was built, what it was for, and what the evidence actually supports
- **Practice** — how the AI work is done, including the parts that did not work
- **PRD** — a product requirements document, written out
- **Blog** and **Journey** — shorter pieces and the route through the career

## A note on the history

This repository used to serve markdown directly — a Jekyll config, a set of case studies,
a prompting-patterns library, an experiments folder, and a copy of the resume. All of it was
superseded by the Astro site and **removed in September 2026**, because a public repo full of
documents that no longer reflected the current work was doing the opposite of what a portfolio
is for.

⚠️ The removed files remain in this repository's history, as removed files do.

*Last updated: September 2026.*
