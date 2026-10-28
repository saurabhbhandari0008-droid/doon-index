# Doon Dekho

The complete guide to Dehradun: cafés, street food, hidden gems, schools, shops and stories.

## Edit content
- Places, schools, shop products and blog posts: `assets/data.js`
- Your own photos: `images/` (see `images/README.txt`)
- Styles: `assets/styles.css`

Every push to `main` deploys automatically on Cloudflare Pages (project "doondekho"), live at https://doondekho.in.

## Building pages
You don't need to run anything. On every push, the "Build site" GitHub Action runs `node tools/build.mjs`, which regenerates the crawlable pages in `blog/<slug>/`, `explore/<section>/<sub>/` and `place/<slug>/`, the head tags, structured data and `sitemap.xml` from `assets/data.js`, then commits the result. Cloudflare Pages deploys that commit.

Running `node tools/build.mjs` yourself still works if you want to preview locally.

- A place gets its own page at `/place/<slug>/` once it is verified (no `u:1`). Pages with a short description and no tip are kept out of Google (noindex) until they are filled in.
- `tools/lastmod.json` records when each page's content last changed; the sitemap uses it. Don't edit it by hand.
- Social profiles for the brand go in `SAME_AS` at the top of `tools/build.mjs`.
