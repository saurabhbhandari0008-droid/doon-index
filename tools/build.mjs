// Doon Dekho static page builder.
// Run from the repo root:  node tools/build.mjs
// Writes ready-to-crawl HTML for every journal post and Explore category, plus sitemap.xml.
// The pages still load the normal site scripts, which then render the full interactive version.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = process.cwd();
const SITE = "https://doondekho.in";
const TODAY = new Date().toISOString().slice(0, 10);

/* ---- load site data ---- */
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "assets/data.js"), "utf8"), ctx);
const { POSTS, SECTIONS, PLACES, GEMS, SCHOOLS, PHOTOS } = ctx.window;

const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const strip = s => String(s ?? "").replace(/<[^>]+>/g, "");
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");
const write = (f, s) => { const p = path.join(ROOT, f); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };

function imgURL(key) {
  const p = PHOTOS[key] || {};
  if (p.src) return p.src;
  if (p.u) return `https://images.unsplash.com/photo-${p.u}?auto=format&fit=crop&w=1200&h=630&q=80`;
  return `https://images.unsplash.com/photo-1660791601899-f79f14cc427d?auto=format&fit=crop&w=1200&h=630&q=80`;
}
function listFor(id) {
  if (id === "hidden-gems") return GEMS.map(g => ({ ...g, s: "hidden-gems" }));
  if (id === "schools") return SCHOOLS.map(x => ({ ...x, s: "schools" }));
  return PLACES.filter(p => p.s === id);
}

/* Replace the <head> SEO block of a template. */
function seoHead(html, { title, desc, url, image, type = "website", ld, noindex = false }) {
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}">`,
    `<link rel="canonical" href="${url}">`,
    noindex ? `<meta name="robots" content="noindex">` : "",
    `<meta property="og:site_name" content="Doon Dekho">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${esc(image)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    ld ? `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>` : ""
  ].filter(Boolean).join("\n");
  html = html
    .replace(/<title>[\s\S]*?<\/title>\n?/, "")
    .replace(/<meta name="description"[^>]*>\n?/g, "")
    .replace(/<meta name="robots"[^>]*>\n?/g, "")
    .replace(/<link rel="canonical"[^>]*>\n?/g, "")
    .replace(/<meta property="og:[^"]+"[^>]*>\n?/g, "")
    .replace(/<meta name="twitter:card"[^>]*>\n?/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, "");
  return html.replace(/(<meta name="viewport"[^>]*>\n)/, `$1${tags}\n`);
}
// Replace the contents of the element with this id (templates keep these containers free of nested same-name tags).
const fill = (html, id, inner) => {
  const re = new RegExp(`(<([a-z0-9]+)[^>]*\\bid="${id}"[^>]*>)[\\s\\S]*?(</\\2>)`);
  if (!re.test(html)) throw new Error("container not found: " + id);
  return html.replace(re, (m, open, tag, close) => open + inner + close);
};

const urls = [];
const add = (u, pri) => urls.push({ u, pri });

/* ---- journal posts ---- */
const postTpl = read("post.html");
function bodyHTML(P) {
  return P.body.map(b => {
    if (b.h) return `<h2>${b.h}</h2>`;
    if (b.h3) return `<h3>${b.h3}</h3>`;
    if (b.q) return `<blockquote>${b.q}</blockquote>`;
    if (b.tip) return `<p class="tip"><b>Local tip ·</b> ${b.tip}</p>`;
    if (b.ul) return `<ul class="list">${b.ul.map(x => `<li>${x}</li>`).join("")}</ul>`;
    if (b.faq) return `<div class="faq">${b.faq.map(([q, a]) => `<details open><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
    if (b.img) return `<figure class="figure"><figcaption>${b.cap || ""}</figcaption></figure>`;
    return `<p>${b.p}</p>`;
  }).join("\n");
}
for (const P of POSTS) {
  const url = `${SITE}/blog/${P.slug}/`;
  const desc = P.desc || P.ex;
  const faqs = P.body.filter(b => b.faq).flatMap(b => b.faq);
  const graph = [{
    "@type": "BlogPosting", headline: P.seo || P.t, description: desc, image: imgURL(P.img),
    datePublished: new Date(P.date + " UTC").toISOString().slice(0, 10), mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Doon Dekho" }, publisher: { "@type": "Organization", name: "Doon Dekho", url: SITE + "/" }
  }, {
    "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Journal", item: SITE + "/blog/" },
      { "@type": "ListItem", position: 3, name: P.t, item: url }]
  }];
  if (faqs.length) graph.push({ "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: strip(q), acceptedAnswer: { "@type": "Answer", text: strip(a) } })) });
  let h = seoHead(postTpl, { title: `${P.seo || P.t} · Doon Dekho`, desc, url, image: imgURL(P.img), type: "article", ld: { "@context": "https://schema.org", "@graph": graph } });
  h = fill(h, "ahero", `<div class="wrap"><h1 id="atitle">${esc(P.t)}</h1><p class="dek">${esc(P.ex)}</p></div>`);
  h = fill(h, "abody", bodyHTML(P));
  write(`blog/${P.slug}/index.html`, h);
  add(`/blog/${P.slug}/`, "0.8");
}
// the bare template should never be indexed
write("post.html", seoHead(postTpl, { title: "Journal · Doon Dekho", desc: "Stories from Dehradun.", url: `${SITE}/blog/`, image: imgURL("hero-valley"), noindex: true }));

/* ---- journal index ---- */
let blogTpl = read("blog/index.html");
blogTpl = seoHead(blogTpl, {
  title: "Journal · Dehradun guides, food and stories · Doon Dekho",
  desc: "Guides to Dehradun's street food, cafés, waterfalls, temples, shopping and more, written by people who live here.",
  url: `${SITE}/blog/`, image: imgURL(POSTS[0].img)
});
blogTpl = fill(blogTpl, "bgrid", `${POSTS.map(p => `<a class="post-card" href="/blog/${p.slug}/"><h3>${esc(p.t)}</h3><p class="ex">${esc(p.ex)}</p></a>`).join("")}`);
write("blog/index.html", blogTpl);
add("/blog/", "0.7");

/* ---- explore ---- */
const exTpl = read("explore/index.html");
const listHTML = items => `<ul class="seo-list">${items.map(p => `<li><b>${esc(p.n)}</b>${p.a ? ` · ${esc(p.a)}` : ""}${p.d ? ` · ${esc(p.d)}` : ""}</li>`).join("")}</ul>`;
const exRoot = seoHead(exTpl, {
  title: "Explore Dehradun by category · Doon Dekho",
  desc: "Every part of Dehradun sorted by category: food, shopping, grooming, pets, fitness, education, places to visit, stays and services.",
  url: `${SITE}/explore/`, image: imgURL("hero-valley")
});
write("explore/index.html", fill(exRoot, "exList", `<nav>${SECTIONS.map(s => `<p><a href="/explore/${s.id}/">${esc(s.name)}</a>: ${s.subs.map(sb => `<a href="/explore/${s.id}/${sb.id}/">${esc(sb.name)}</a>`).join(", ")}</p>`).join("")}</nav>`));
add("/explore/", "0.8");
for (const S of SECTIONS) {
  const all = S.subs.flatMap(sb => listFor(sb.id));
  const crumbs = (extra) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Explore", item: SITE + "/explore/" },
    { "@type": "ListItem", position: 3, name: S.name, item: `${SITE}/explore/${S.id}/` }, ...extra] });
  let h = seoHead(exTpl, {
    title: `${S.name} in Dehradun · Doon Dekho`, desc: S.blurb, url: `${SITE}/explore/${S.id}/`, image: imgURL(S.img), ld: crumbs([])
  });
  h = fill(fill(h, "exTitle", `${esc(S.name)} <em>in Dehradun</em>`), "exBlurb", esc(S.blurb));
  h = fill(h, "exList", `<nav>${S.subs.map(sb => `<a href="/explore/${S.id}/${sb.id}/">${esc(sb.name)}</a>`).join(" · ")}</nav>${listHTML(all)}`);
  write(`explore/${S.id}/index.html`, h);
  add(`/explore/${S.id}/`, "0.7");
  for (const sb of S.subs) {
    const items = listFor(sb.id);
    const desc = items.length
      ? `${sb.name} in Dehradun: ${items.slice(0, 4).map(p => p.n).join(", ")}${items.length > 4 ? ` and ${items.length - 4} more` : ""}. Areas, directions and details on Doon Dekho.`
      : `${sb.name} in Dehradun on Doon Dekho, the complete guide to the city.`;
    let k = seoHead(exTpl, {
      title: `${sb.name} in Dehradun · Doon Dekho`, desc: desc.slice(0, 300), url: `${SITE}/explore/${S.id}/${sb.id}/`, image: imgURL(sb.img || S.img),
      ld: crumbs([{ "@type": "ListItem", position: 4, name: sb.name, item: `${SITE}/explore/${S.id}/${sb.id}/` }]),
      noindex: items.length === 0
    });
    k = fill(fill(k, "exTitle", `${esc(sb.name)} <em>in Dehradun</em>`), "exBlurb", esc(S.blurb));
    k = fill(k, "exList", listHTML(items));
    write(`explore/${S.id}/${sb.id}/index.html`, k);
    if (items.length) add(`/explore/${S.id}/${sb.id}/`, "0.6");
  }
}

/* ---- home + credits: canonical tags ---- */
write("index.html", seoHead(read("index.html"), {
  title: "Doon Dekho · The complete guide to Dehradun",
  desc: "The complete guide to Dehradun: cafés, street food, hidden gems, schools, shops and stories from the Doon Valley.",
  url: `${SITE}/`, image: imgURL("hero-valley"),
  ld: { "@context": "https://schema.org", "@type": "WebSite", name: "Doon Dekho", url: SITE + "/" }
}));
add("/", "1.0");
write("credits.html", seoHead(read("credits.html"), { title: "Photo credits · Doon Dekho", desc: "Credits for the photographs used on Doon Dekho.", url: `${SITE}/credits`, image: imgURL("hero-valley") }));
add("/credits", "0.2");

/* ---- sitemap ---- */
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(x => `  <url><loc>${SITE}${x.u}</loc><lastmod>${TODAY}</lastmod><priority>${x.pri}</priority></url>`).join("\n")}\n</urlset>\n`);
console.log(`Built ${POSTS.length} posts, ${SECTIONS.length} sections, ${urls.length} sitemap URLs.`);
