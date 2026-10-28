# Doon Dekho

The complete guide to Dehradun: cafés, street food, hidden gems, schools, shops and stories.

## Edit content
- Places, schools, shop products and blog posts: `assets/data.js`
- Your own photos: `images/` (see `images/README.txt`)
- Styles: `assets/styles.css`

Every push to `main` deploys automatically on Cloudflare Pages (project "doondekho"), live at https://doondekho.in.

## Before each publish
Run `node tools/build.mjs` from the repo root. It regenerates the crawlable pages in `blog/<slug>/` and `explore/<section>/<sub>/`, the head tags and `sitemap.xml` from `assets/data.js`.
