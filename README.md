# aguedaschwartz.com

Source for **[aguedaschwartz.com](https://aguedaschwartz.com)**, a one-page front door to the
work on GitHub: [github.com/amijach1103](https://github.com/amijach1103).

```bash
cd site
npm install
npm run dev      # local preview
npm run build    # → site/dist, which is what deploys
```

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.

Built on the [Astrofy](https://astrofy-template.netlify.app/) template, with Astro and Tailwind.
