// Doon Dekho static page builder.
// Run from the repo root:  node tools/build.mjs
// (A GitHub Action also runs it on every push to main, so you never have to.)
// Writes ready-to-crawl HTML for every journal post, Explore category and place page,
// plus head tags, structured data and sitemap.xml.
// The pages still load the normal site scripts, which then render the full interactive version.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";

const ROOT = process.cwd();
const SITE = "https://doondekho.in";
const TODAY = new Date().toISOString().slice(0, 10);
const YEAR = TODAY.slice(0, 4);

/* Social profiles for the Organization schema. Add each one as it goes live, e.g.
   "https://www.instagram.com/doondekho/" — Google uses these to recognise the brand. */
const SAME_AS = ["https://www.instagram.com/doondekho/"];

/* ---- load site data ---- */
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "assets/data.js"), "utf8"), ctx);
const { POSTS, SECTIONS, PLACES, GEMS, SCHOOLS, PHOTOS } = ctx.window;

const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const strip = s => String(s ?? "").replace(/<[^>]+>/g, "");
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");
const write = (f, s) => { const p = path.join(ROOT, f); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };
const hash = s => crypto.createHash("sha1").update(s).digest("hex").slice(0, 12);
const isoDate = d => new Date(d + " UTC").toISOString().slice(0, 10);

/* ---- last-modified dates that only change when a page's content changes ---- */
const LM_FILE = "tools/lastmod.json";
const lastmodOld = fs.existsSync(path.join(ROOT, LM_FILE)) ? JSON.parse(read(LM_FILE)) : {};
const lastmodNew = {};
function lastmod(u, content, firstSeen = TODAY) {
  const h = hash(content), old = lastmodOld[u];
  const d = old && old.h === h ? old.d : (old ? TODAY : firstSeen);
  lastmodNew[u] = { h, d };
  return d;
}

/* ---- images ---- */
function imgURL(key) {
  const p = PHOTOS[key] || {};
  if (p.src) return p.src;
  if (p.u) return `https://images.unsplash.com/photo-${p.u}?auto=format&fit=crop&w=1200&h=630&q=80`;
  return `https://images.unsplash.com/photo-1660791601899-f79f14cc427d?auto=format&fit=crop&w=1200&h=630&q=80`;
}
function imgSrc(key, w = 1200) {
  const p = PHOTOS[key] || {};
  if (p.src) return /\/1280px-/.test(p.src) && p.mw > 960 && w <= 960 ? p.src.replace("/1280px-", "/960px-") : p.src;
  if (p.u) return `https://images.unsplash.com/photo-${p.u}?auto=format&fit=crop&w=${w}&q=70`;
  return null;
}
// Real <img> for crawlers: alt text, fixed size (no layout shift), lazy loading.
function imgTag(key, alt, w = 1200, h = Math.round(w * 9 / 16), eager = false) {
  const s = imgSrc(key, w);
  return s ? `<img class="ok" src="${esc(s)}" alt="${esc(alt)}" width="${w}" height="${h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">` : "";
}
function creditLine(key) {
  const p = PHOTOS[key];
  return p && p.credit ? `<p class="place-credit">Photo: <a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.credit)}</a> · ${esc(p.lic)}</p>` : "";
}

function listFor(id) {
  if (id === "hidden-gems") return GEMS.map(g => ({ ...g, s: "hidden-gems" }));
  if (id === "schools") return SCHOOLS.map(x => ({ ...x, s: "schools" }));
  return PLACES.filter(p => p.s === id);
}
const SUBMAP = {};
SECTIONS.forEach(S => S.subs.forEach(sb => { SUBMAP[sb.id] = { ...sb, sec: S }; }));

/* ---- place page URLs (must match slugify + dedupe in assets/site.js) ---- */
const slugify = t => String(t).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, " and ").replace(/[’'.]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const PLACE_URL = new Map(); // object -> "/place/slug/"
{
  const used = new Set();
  const claim = (obj, name, area, id) => {
    let s = slugify(name);
    if (used.has(s)) s = slugify(name + " " + area);
    if (used.has(s)) s += "-" + id;
    used.add(s); PLACE_URL.set(obj, `/place/${s}/`);
  };
  PLACES.filter(p => !p.u).forEach(p => claim(p, p.n, p.a, p.id));
  GEMS.forEach((g, i) => claim(g, g.n, g.alt.split("·")[0], "g" + i));
  // Schools get pages too (claimed last so the slugs above match assets/site.js).
  SCHOOLS.forEach((x, i) => {
    x.s = "schools";
    x.t = x.t || [x.type, x.board, x.g].filter(Boolean).join(" · ");
    claim(x, x.n, x.a, "s" + i);
  });
}
const urlOfItem = it => {
  if (PLACE_URL.has(it)) return PLACE_URL.get(it);
  const orig = PLACES.find(p => p.id === it.id && p.n === it.n) || GEMS.find(g => g.n === it.n) || SCHOOLS.find(x => x.n === it.n);
  return orig && PLACE_URL.has(orig) ? PLACE_URL.get(orig) : null;
};

/* Link the first mention of each place in a post to its page (same rules as assets/site.js linkPlaces). */
const LINK_RE = [...PLACE_URL].map(([o, u]) => [o.n, u]).filter(([n]) => n.length > 4).sort((a, b) => b[0].length - a[0].length)
  .map(([n, u]) => [new RegExp("(^|[^\\w])(" + n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[’']/g, "[’']") + ")(?![\\w])", "i"), u]);
function linkPlaces(html, used) {
  let depth = 0;
  return String(html).split(/(<[^>]+>)/).map(seg => {
    if (seg.startsWith("<")) { if (/^<a[\s>]/i.test(seg)) depth++; else if (/^<\/a>/i.test(seg)) depth--; return seg; }
    if (depth > 0) return seg;
    for (const [re, u] of LINK_RE) {
      if (used.has(u) || !re.test(seg)) continue;
      used.add(u); seg = seg.replace(re, (m, pre, name) => `${pre}<a class="in-link" href="${u}">${name}</a>`); break;
    }
    return seg;
  }).join("");
}

/* Replace the <head> SEO block of a template. */
/* Search snippets: titles up to ~60 characters, descriptions up to ~158, never cut mid-word. */
function fitTitle(t) {
  t = String(t || "").replace(/\s+/g, " ").trim();
  const brand = " · Doon Dekho";
  if (t.length <= 62) return t;
  let core = t.endsWith(brand) ? t.slice(0, -brand.length) : t;
  if (core.length <= 60) return core;
  core = core.replace(/: (Best Time, )?Tips and Directions$/, "").replace(/: Tips and Directions$/, "");
  if (core.length <= 60) return core;
  core = core.replace(/ \((19|20)\d\d\)/, "");
  if (core.length <= 60) return core;
  // drop the area segment ("Name, Area, Dehradun" -> "Name, Dehradun")
  core = core.replace(/^([^,]+), [^,]+, Dehradun/, "$1, Dehradun");
  if (core.length <= 62) return core;
  return core.slice(0, 60).replace(/[\s,:;·(-]+\S*$/, "");
}
function fitDesc(d) {
  d = String(d || "").replace(/\s+/g, " ").trim();
  if (d.length <= 160) return d;
  const cut = d.slice(0, 158);
  const sent = cut.lastIndexOf(". ");
  if (sent >= 128) return cut.slice(0, sent + 1);
  return cut.replace(/[\s,;:·(-]+\S*$/, "").replace(/[,;:]$/, "") + "…";
}
function seoHead(html, { title, desc, url, image, type = "website", ld, noindex = false }) {
  title = fitTitle(title); desc = fitDesc(desc);
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}">`,
    `<link rel="canonical" href="${url}">`,
    noindex ? `<meta name="robots" content="noindex">` : `<meta name="robots" content="max-image-preview:large">`,
    `<meta property="og:site_name" content="Doon Dekho">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${esc(image)}">`,
    `<meta property="og:locale" content="en_IN">`,
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
const add = (u, pri, d) => urls.push({ u, pri, d });
const ORG = { "@type": "Organization", "@id": SITE + "/#org", name: "Doon Dekho", url: SITE + "/", logo: { "@type": "ImageObject", url: SITE + "/assets/brand/icon-512.png", width: 512, height: 512 } };
const BRAND_OG = SITE + "/assets/brand/og-default.png";
/* The person who writes the guide. Edit here; the About page and every post use it. */
const AUTHOR = { "@type": "Person", "@id": SITE + "/about/#saurabh", name: "Saurabh", url: SITE + "/about/", homeLocation: { "@type": "City", name: "Dehradun" }, worksFor: { "@id": SITE + "/#org" } };

/* ---- journal posts ---- */
const postTpl = read("post.html");
const placeLinked = new Map(); // place url -> posts mentioning it
function bodyHTML(P) {
  const used = new Set(), L = h => linkPlaces(h, used);
  return P.body.map(b => {
    if (b.h) return `<h2>${b.h}</h2>`;
    if (b.h3) return `<h3>${b.h3}</h3>`;
    if (b.q) return `<blockquote>${b.q}</blockquote>`;
    if (b.tip) return `<p class="tip"><b>Local tip ·</b> ${L(b.tip)}</p>`;
    if (b.ul) return `<ul class="list">${b.ul.map(x => `<li>${L(x)}</li>`).join("")}</ul>`;
    if (b.faq) return `<div class="faq">${b.faq.map(([q, a]) => `<details open><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
    if (b.img) return `<figure class="figure">${imgTag(b.img, b.cap || P.t, 1400, 788)}<figcaption>${b.cap || ""}</figcaption></figure>`;
    if (b.cta) return `<p>${b.p}</p><p><a class="btn" href="${b.cta.href}">${b.cta.label}</a></p>`;
    return `<p>${L(b.p)}</p>`;
  }).join("\n");
}
const norm = s => strip(s).toLowerCase().replace(/[’']/g, "");
for (const P of POSTS) {
  const text = norm(JSON.stringify(P.body));
  for (const [obj, u] of PLACE_URL) {
    const n = norm(obj.n);
    if (n.length > 4 && text.includes(n)) { if (!placeLinked.has(u)) placeLinked.set(u, []); placeLinked.get(u).push(P); }
  }
}
for (const P of POSTS) {
  const u = `/blog/${P.slug}/`, url = SITE + u;
  const desc = P.desc || P.ex;
  const published = isoDate(P.date);
  const modified = lastmod(u, JSON.stringify(P), published);
  const faqs = P.body.filter(b => b.faq).flatMap(b => b.faq);
  const graph = [{
    "@type": "BlogPosting", headline: P.seo || P.t, description: desc, image: imgURL(P.img),
    datePublished: published, dateModified: modified > published ? modified : published, mainEntityOfPage: url,
    articleSection: P.cat, inLanguage: "en-IN",
    author: AUTHOR, publisher: ORG
  }, {
    "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Journal", item: SITE + "/blog/" },
      { "@type": "ListItem", position: 3, name: P.t, item: url }]
  }];
  if (faqs.length) graph.push({ "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: strip(q), acceptedAnswer: { "@type": "Answer", text: strip(a) } })) });
  let h = seoHead(postTpl, { title: `${P.seo || P.t} · Doon Dekho`, desc, url, image: imgURL(P.img), type: "article", ld: { "@context": "https://schema.org", "@graph": graph } });
  h = fill(h, "ahero", `<div class="wrap"><h1 id="atitle">${esc(P.t)}</h1><p class="dek">${esc(P.ex)}</p></div>`);
  // places this post mentions, linked at the end so crawlers can follow them
  const mentioned = [...PLACE_URL].filter(([, pu]) => (placeLinked.get(pu) || []).includes(P));
  const more = mentioned.length ? `\n<h2>Places in this story</h2><ul class="list">${mentioned.map(([o, pu]) => `<li><a href="${pu}">${esc(o.n)}</a></li>`).join("")}</ul>` : "";
  h = fill(fill(h, "abody", bodyHTML(P)), "aplaces", more);
  write(`blog/${P.slug}/index.html`, h);
  add(u, "0.8", modified);
}
// the bare template should never be indexed
write("post.html", seoHead(postTpl, { title: "Journal · Doon Dekho", desc: "Stories from Dehradun.", url: `${SITE}/blog/`, image: BRAND_OG, noindex: true }));

/* ---- journal index ---- */
let blogTpl = read("blog/index.html");
blogTpl = seoHead(blogTpl, {
  title: "Dehradun Blog: Food, Cafés, Places and Local Guides · Doon Dekho",
  desc: "Guides to Dehradun's street food, cafés, waterfalls, temples, shopping and more, written by people who live here.",
  url: `${SITE}/blog/`, image: imgURL(POSTS[0].img),
  ld: { "@context": "https://schema.org", "@graph": [
    { "@type": "Blog", name: "Doon Dekho Journal", url: `${SITE}/blog/`, publisher: { "@id": SITE + "/#org" },
      blogPost: POSTS.map(x => ({ "@type": "BlogPosting", headline: x.seo || x.t, url: `${SITE}/blog/${x.slug}/` })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" }, { "@type": "ListItem", position: 2, name: "Journal", item: SITE + "/blog/" }] }] }
});
blogTpl = fill(blogTpl, "bgrid", `${POSTS.map(p => `<a class="post-card" href="/blog/${p.slug}/"><h3>${esc(p.t)}</h3><p class="ex">${esc(p.ex)}</p></a>`).join("")}`);
write("blog/index.html", blogTpl);
add("/blog/", "0.7", lastmod("/blog/", POSTS.map(p => p.slug + p.t).join()));

/* ---- explore ---- */
const exTpl = read("explore/index.html");
// Unverified listings show name and area only: their placeholder text is the same on every listing.
const listHTML = items => `<ul class="seo-list">${items.map(p => {
  const u = urlOfItem(p);
  const name = u ? `<a href="${u}"><b>${esc(p.n)}</b></a>` : `<b>${esc(p.n)}</b>`;
  const area = p.a || (p.alt ? p.alt.split("·")[0].trim() : "");
  return `<li>${name}${area ? ` · ${esc(area)}` : ""}${p.d && !p.u ? ` · ${esc(p.d)}` : ""}</li>`;
}).join("")}</ul>`;
const itemList = (name, items) => ({
  "@type": "ItemList", name, numberOfItems: items.length,
  itemListElement: items.map((p, i) => { const u = urlOfItem(p); return { "@type": "ListItem", position: i + 1, name: p.n, ...(u ? { url: SITE + u } : {}) }; })
});
const exRoot = seoHead(exTpl, {
  title: "Explore Dehradun by Category: Food, Places, Shopping, Schools · Doon Dekho",
  desc: "Every part of Dehradun sorted by category: food, shopping, grooming, pets, fitness, education, places to visit, stays and services.",
  url: `${SITE}/explore/`, image: imgURL("hero-valley"),
  ld: { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", name: "Explore Dehradun by category", url: `${SITE}/explore/`, hasPart: SECTIONS.map(x => ({ "@type": "CollectionPage", name: `${x.name} in Dehradun`, url: `${SITE}/explore/${x.id}/` })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" }, { "@type": "ListItem", position: 2, name: "Explore", item: SITE + "/explore/" }] }] }
});
write("explore/index.html", fill(exRoot, "exList", `<nav>${SECTIONS.map(s => `<p><a href="/explore/${s.id}/">${esc(s.name)}</a>: ${s.subs.map(sb => `<a href="/explore/${s.id}/${sb.id}/">${esc(sb.name)}</a>`).join(", ")}</p>`).join("")}</nav>`));
add("/explore/", "0.8", lastmod("/explore/", JSON.stringify(SECTIONS)));
for (const S of SECTIONS) {
  const all = S.subs.flatMap(sb => listFor(sb.id));
  const crumbs = (extra) => ({ "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Explore", item: SITE + "/explore/" },
    { "@type": "ListItem", position: 3, name: S.name, item: `${SITE}/explore/${S.id}/` }, ...extra] });
  const su = `/explore/${S.id}/`;
  let h = seoHead(exTpl, {
    title: `${S.name} in Dehradun (${YEAR}) · Doon Dekho`,
    desc: `${S.blurb} Browse ${S.subs.map(sb => sb.name.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " and $1")} in Dehradun.`,
    url: SITE + su, image: imgURL(S.img),
    ld: { "@context": "https://schema.org", "@graph": [crumbs([]), itemList(`${S.name} in Dehradun`, all)] }
  });
  h = fill(fill(h, "exTitle", `${esc(S.name)} <em>in Dehradun</em>`), "exBlurb", esc(S.blurb));
  h = fill(h, "exList", `<nav>${S.subs.map(sb => `<a href="/explore/${S.id}/${sb.id}/">${esc(sb.name)}</a>`).join(" · ")}</nav>${listHTML(all)}`);
  write(`explore/${S.id}/index.html`, h);
  add(su, "0.7", lastmod(su, JSON.stringify(all)));
  for (const sb of S.subs) {
    const items = listFor(sb.id);
    const u = `/explore/${S.id}/${sb.id}/`;
    const names = items.slice(0, 3).map(p => p.n);
    const listed = items.length ? `${items.length} listed on Doon Dekho, including ${names.length > 1 ? names.slice(0, -1).join(", ") + " and " + names[names.length - 1] : names[0]}.` : "";
    const desc = items.length ? `${sb.intro || S.blurb} ${listed}` : `${sb.name} in Dehradun on Doon Dekho, the complete guide to the city.`;
    let k = seoHead(exTpl, {
      title: `${sb.name} in Dehradun (${YEAR}) · Doon Dekho`, desc: desc.slice(0, 300), url: SITE + u, image: imgURL(sb.img || S.img),
      ld: { "@context": "https://schema.org", "@graph": [crumbs([{ "@type": "ListItem", position: 4, name: sb.name, item: SITE + u }]), ...(items.length ? [itemList(`${sb.name} in Dehradun`, items)] : [])] },
      noindex: items.length === 0
    });
    k = fill(fill(k, "exTitle", `${esc(sb.name)} <em>in Dehradun</em>`), "exBlurb", esc(sb.intro || S.blurb));
    k = fill(k, "exList", `${listed ? `<p class="seo-intro">${esc(listed)} Tap any place for the area, directions and details. Know a place that should be here? <a href="/#business">Tell us</a>.</p>` : ""}${listHTML(items)}<nav class="seo-sibs" aria-label="More in ${esc(S.name)}">More in ${esc(S.name)}: ${S.subs.filter(x => x !== sb).map(x => `<a href="/explore/${S.id}/${x.id}/">${esc(x.name)}</a>`).join(" · ")}</nav>`);
    write(`explore/${S.id}/${sb.id}/index.html`, k);
    if (items.length) add(u, "0.6", lastmod(u, JSON.stringify(items)));
  }
}

/* ---- place pages ---- */
const SCHEMA_TYPE = {
  cafes: "CafeOrCoffeeShop", bakeries: "Bakery", restaurants: "Restaurant", "street-food": "FoodEstablishment",
  markets: "Place", "local-produce": "Store", clothing: "ClothingStore", "books-gifts": "BookStore",
  salons: "BeautySalon", barbers: "HairSalon", spas: "DaySpa", makeup: "HealthAndBeautyBusiness",
  "pet-shops": "PetStore", vets: "VeterinaryCare", "pet-grooming": "LocalBusiness", "pet-friendly": "CafeOrCoffeeShop",
  gyms: "ExerciseGym", yoga: "SportsActivityLocation", running: "SportsActivityLocation",
  hotels: "Hotel", homestays: "LodgingBusiness", "pg-hostels": "Hostel",
  tailors: "LocalBusiness", events: "LocalBusiness", "home-services": "HomeAndConstructionBusiness",
  universities: "CollegeOrUniversity", colleges: "CollegeOrUniversity", medical: "CollegeOrUniversity",
  engineering: "CollegeOrUniversity", institutes: "EducationalOrganization", coaching: "EducationalOrganization",
  libraries: "Library", schools: "School",
  malls: "ShoppingCenter", parks: "Park",
  attractions: "TouristAttraction", spiritual: "PlaceOfWorship", nature: "TouristAttraction", "hidden-gems": "TouristAttraction"
};
// A place page is indexed when it says something specific; thin ones stay live for visitors but out of Google.
const indexable = (p, isGem) => isGem || (p.d || "").length >= 90 || !!p.tip;
const shell = (() => {
  const c = read("credits.html");
  const head = c.slice(0, c.indexOf("<body"));
  const foot = c.slice(c.indexOf("</main>") + "</main>".length).replace(/<script>\n\(function\(\)\{[\s\S]*?<\/script>\n/, `<script>Doon.start({});</script>\n`);
  return (main, opts) => seoHead(head, opts) + `<body data-page="place" data-nav="light">\n<header id="nav"></header>\n<main>\n${main}\n</main>` + foot;
})();
let placeCount = 0, placeIndexed = 0;
for (const [p, u] of PLACE_URL) {
  const isGem = GEMS.includes(p);
  const sb = isGem ? { id: "hidden-gems", name: "Hidden gems", sec: SECTIONS.find(S => S.subs.some(x => x.id === "hidden-gems")) || { id: "places", name: "Places to Visit" } } : SUBMAP[p.s];
  const secId = sb && sb.sec ? sb.sec.id : "places";
  const area = isGem ? p.alt.split("·")[0].trim() : p.a;
  const cat = sb ? sb.name : "Place";
  const url = SITE + u;
  const dir = p.g ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.n + " Dehradun")}&query_place_id=${p.g}` : `https://www.google.com/maps/search/${encodeURIComponent(p.n + " Dehradun")}`;
  const facts = p.t
    ? [["Type", p.t], ["Established", p.est || "—"], ["Area", area], ["Category", cat]]
    : [["Area", area], ["Budget", p.p || "Free"], ["Best time", p.best || "Any time"], ["Category", isGem ? "Hidden gem" : cat]];
  if (isGem && p.alt.includes("·")) facts[1] = ["Distance", p.alt.split("·")[1].trim()];
  // Sourced practical details (hours, fee, km) replace the softer fields when present.
  if (p.km) facts[1] = ["Distance", p.km];
  if (p.hours) facts[2] = ["Timings", p.hours];
  if (p.fee) facts.splice(3, 0, ["Entry", p.fee]);
  const posts = [...new Set([...(placeLinked.get(u) || []), ...(isGem && p.post ? POSTS.filter(x => x.slug === p.post) : [])])];
  const others = (list) => list.filter(x => x !== p && PLACE_URL.has(x)).slice(0, 6);
  const sameSub = others(isGem ? GEMS : PLACES.filter(x => x.s === p.s && !x.u));
  const sameArea = isGem ? [] : others(PLACES.filter(x => !x.u && x.a === p.a && x.s !== p.s));
  const linkList = (title, arr) => arr.length ? `<div class="place-links"><h2>${title}</h2><ul>${arr.map(x => `<li><a href="${PLACE_URL.get(x)}">${esc(x.n)}</a><span>${esc(x.a || x.alt || "")}</span></li>`).join("")}</ul></div>` : "";
  // `seo` on a place overrides the search title (use the words people search with, from Search Console).
  const where = area && !norm(p.n).includes(norm(area)) ? `${area}, ` : "";
  const title = p.seo || (isGem ? `${p.n}, Dehradun: Best Time, Tips and Directions` : p.t ? `${p.n}, ${where}Dehradun` : `${p.n}, ${where}Dehradun: Tips and Directions`);
  const desc = p.sdesc || `${p.aka ? `Also called ${p.aka}. ` : ""}${strip(p.d)} ${p.hours || p.fee ? "Timings, entry fee, how to get there and tips." : isGem || !p.t ? "Where it is, the best time to go, a local tip and directions." : "Area, courses, website and directions."}`.slice(0, 300);
  const schema = {
    "@type": SCHEMA_TYPE[sb ? sb.id : ""] || "LocalBusiness", "@id": url + "#place", name: p.n, description: strip(p.d), url,
    // only real photos of this place (Wikimedia or your own), never generic stock
    ...((PHOTOS[p.img] || {}).src ? { image: imgSrc(p.img) } : {}),
    address: { "@type": "PostalAddress", streetAddress: area, addressLocality: "Dehradun", addressRegion: "Uttarakhand", addressCountry: "IN" },
    hasMap: dir,
    ...(p.p && /^₹+$/.test(p.p) ? { priceRange: p.p } : {}),
    ...(p.web ? { sameAs: p.web } : {}),
    ...(p.est ? { foundingDate: String(p.est) } : {}),
    ...(p.aka ? { alternateName: p.aka.split(/,\s*| or /) } : {})
  };
  const crumbs = { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Explore", item: SITE + "/explore/" },
    { "@type": "ListItem", position: 3, name: cat, item: `${SITE}/explore/${secId}/${sb.id}/` },
    { "@type": "ListItem", position: 4, name: p.n, item: url }] };
  const ok = indexable(p, isGem);
  const img = imgTag(p.img, `${p.n}, Dehradun`, 1280, 720, true);
  // Quick answers for "where is / how to reach / best time" searches, built only from the listing's own data.
  const dist = isGem && p.alt.includes("·") ? p.alt.split("·")[1].trim() : "";
  // Education listings: quick answers from the listing's own fields (type, year, area, board, website).
  const eduQA = p.t ? [
    [`What type of institution is ${p.n}?`, `${p.n}: ${p.t.replace(/ · /g, ", ")}.${p.board && !p.t.includes(p.board) ? ` Board: ${p.board}.` : ""}`, ""],
    ...(p.est ? [[`When was ${p.n} established?`, `${p.n} was established in ${p.est}.`, ""]] : []),
    [`Where is ${p.n}?`, `${p.n} is in ${area}, Dehradun.`, `Open it in <a href="${dir}" target="_blank" rel="noopener">Google Maps</a> for directions.`],
    ...(p.web ? [[`What is the official website of ${p.n}?`, `The official website is ${p.web.replace(/^https?:\/\//, "").replace(/\/$/, "")}. Check it for current courses, fees and admission dates.`, ""]] : [])
  ] : [];
  const qa = p.t ? eduQA : [
    [`Where is ${p.n} in Dehradun?`, `${p.n}${p.aka ? ` (also called ${p.aka})` : ""} is in ${area}, Dehradun${p.km ? `, ${p.km.replace(/^about /i, "about ")}` : dist && /km/.test(dist) ? `, about ${dist} from the city` : ""}.`, `Open it in <a href="${dir}" target="_blank" rel="noopener">Google Maps</a> for directions from where you are.`],
    ...(p.hours ? [[`What are the timings of ${p.n}?`, `${p.hours}${/\.$/.test(p.hours) ? "" : "."} Timings can change, so check before you go.`, ""]] : []),
    ...(p.fee ? [[`Is there an entry fee at ${p.n}?`, `${p.fee}${/\.$/.test(p.fee) ? "" : "."}`, ""]] : []),
    ...(p.best ? [[`When is the best time to visit ${p.n}?`, `${p.best}.`, ""]] : []),
    ...(p.tip ? [[`Any tips before going to ${p.n}?`, p.tip, ""]] : [])
  ];
  const qaHTML = qa.length ? `<div class="place-links place-qa"><h2>Quick answers</h2>${qa.map(([q, a, extra]) => `<h3>${esc(q)}</h3><p>${esc(a)}${extra ? " " + extra : ""}</p>`).join("")}</div>` : "";
  const qaLD = qa.length ? [{ "@type": "FAQPage", mainEntity: qa.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }] : [];
  const main = `<section class="page-hero ex-compact"><div class="wrap">
<nav class="crumbs-light" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/explore/">Explore</a><span>/</span><a href="/explore/${secId}/${sb.id}/">${esc(cat)}</a><span>/</span><span aria-current="page">${esc(p.n)}</span></nav>
<p class="label">${esc(cat)} · ${esc(area)}${p.f ? " · Featured" : ""}</p>
<h1>${esc(p.n)}</h1>
${p.aka ? `<p class="aka">Also called ${esc(p.aka)}</p>` : ""}
<p>${esc(p.d)}</p>
</div></section>
<section class="place-body"><div class="wrap place-wrap">
${img ? `<figure class="ph place-ph" style="--h:${(PHOTOS[p.img] || { h: 38 }).h}">${img}</figure>${creditLine(p.img)}` : ""}
<div class="facts">${facts.map(([k, v]) => `<div><small>${k}</small><b>${esc(v)}</b></div>`).join("")}</div>
${p.tip ? `<p class="tip"><b>Local tip ·</b> ${esc(p.tip)}</p>` : ""}
${p.t ? `<p class="tip"><b>Admissions ·</b> Courses, fees and dates change every year. Always confirm with the institution before applying.</p>` : ""}
<div class="btn-row"><a class="btn" href="${dir}" target="_blank" rel="noopener">Get directions</a>${p.web ? `<a class="btn line" href="${esc(p.web)}" target="_blank" rel="noopener">Official website</a>` : ""}<a class="btn line" href="/explore/${secId}/${sb.id}/">All ${esc(cat.toLowerCase())}</a></div>
${qaHTML}
${posts.length ? `<div class="place-links"><h2>Read about it</h2><ul>${posts.map(x => `<li><a href="/blog/${x.slug}/">${esc(x.t)}</a><span>${esc(x.cat)}</span></li>`).join("")}</ul></div>` : ""}
${p.src ? `<div class="place-src"><p>${p.sourced ? "Doon Dekho hasn't visited this place yet. These details come from the public sources below" : "Timings and fees come from the sources below"}, checked ${esc(p.checked || "")}. They change, so confirm before you go.</p><ul>${p.src.map(([label, href]) => `<li><a href="${esc(href)}" target="_blank" rel="noopener nofollow">${esc(label)}</a></li>`).join("")}</ul></div>` : ""}
${linkList(`More ${esc(cat.toLowerCase())} in Dehradun`, sameSub)}
${linkList(`Also in ${esc(area)}`, sameArea)}
${isGem || p.t || p.public ? "" : `<p class="place-claim">Run ${esc(p.n)}? <a href="/#business">Add photos, timings and offers to this page</a>.</p>`}
</div></section>`;
  const html = shell(main, {
    title: `${title} · Doon Dekho`, desc, url, image: imgURL(p.img), noindex: !ok,
    ld: { "@context": "https://schema.org", "@graph": [schema, crumbs, ...qaLD] }
  });
  write(`${u.slice(1)}index.html`, html);
  placeCount++;
  if (ok) { placeIndexed++; add(u, "0.6", lastmod(u, JSON.stringify(p))); }
}
// remove place pages that no longer exist (renamed or unpublished places)
const live = new Set([...PLACE_URL.values()].map(u => u.split("/")[2]));
if (fs.existsSync(path.join(ROOT, "place"))) for (const d of fs.readdirSync(path.join(ROOT, "place"))) if (!live.has(d)) fs.rmSync(path.join(ROOT, "place", d), { recursive: true });

/* ---- about ---- */
{
  const verified = PLACES.filter(p => !p.u).length;
  const main = `<section class="page-hero ex-compact"><div class="wrap">
<nav class="crumbs-light" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">About</span></nav>
<p class="label">About Doon Dekho</p>
<h1>A Dehradun guide made by someone who lives here</h1>
<p>Doon Dekho is an independent guide to Dehradun: where to eat, what to see, where to shop and study, written from the city itself.</p>
</div></section>
<section class="place-body"><div class="wrap place-wrap about">
<h2>Who writes it</h2>
<p>I'm Saurabh. I was born in Dehradun, went to college, moved to Gurgaon for a while and came back, because nowhere else had the bakeries, the evening walks up Rajpur Road or the quiet of the valley after rain. Doon Dekho is the guide I wanted when friends asked me where to go.</p>
<h2>How places get on the site</h2>
<ul class="list">
<li><b>Verified places</b> (${verified} so far) have been checked by us. They get their own page with an area, budget, best time to go and a local tip.</li>
<li><b>Unverified listings</b> come from public sources and are marked as such. We add details only after checking them, and owners can claim theirs.</li>
<li><b>Listings from public sources</b> are well-known public places we haven't visited yet. Their pages say so and link the sources for timings and fees.</li>
<li><b>Featured</b> labels mark places with a business relationship with Doon Dekho. It is always shown.</li>
</ul>
<h2>Photos</h2>
<p>Many photos are from Wikimedia Commons and Unsplash, credited on the <a href="/credits">photo credits</a> page. We are replacing them with our own pictures, place by place.</p>
<h2>Get in touch</h2>
<p>See the <a href="/contact/">contact page</a>, or if you run a place in Dehradun, use <a href="/#business">Add your business</a>. Spotted something out of date? Tell us through the same form and we'll fix it.</p>
</div></section>`;
  const url = SITE + "/about/";
  write("about/index.html", shell(main, {
    title: "About Doon Dekho: Who Writes This Dehradun Guide", desc: "Doon Dekho is an independent Dehradun city guide written by Saurabh, born and raised in Dehradun. How places are verified, featured and photographed.",
    url, image: imgURL("hero-valley"),
    ld: { "@context": "https://schema.org", "@graph": [{ "@type": "AboutPage", url, name: "About Doon Dekho", about: { "@id": SITE + "/#org" }, mainEntity: AUTHOR }, AUTHOR] }
  }).replace('data-page="place"', 'data-page="about"'));
  add("/about/", "0.4", lastmod("/about/", main));
}

/* ---- contact ---- */
{
  const main = `<section class="page-hero ex-compact"><div class="wrap">
<nav class="crumbs-light" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Contact</span></nav>
<p class="label">Contact</p>
<h1>Contact Doon Dekho</h1>
<p>Doon Dekho is written and run from Dehradun, Uttarakhand. Here is how to reach us.</p>
</div></section>
<section class="place-body"><div class="wrap place-wrap about">
<h2>Instagram</h2>
<p>The quickest way to reach us is a direct message on Instagram: <a href="https://www.instagram.com/doondekho/" rel="noopener" target="_blank">@doondekho</a>. We read every message.</p>
<h2>Own a business in Dehradun?</h2>
<p>Listing your place is free. Use <a href="/#business">Add your business</a> and we'll verify the details and get back to you within two working days. Already listed? You can put our <a href="/badge/">Featured on Doon Dekho badge</a> on your website or Instagram.</p>
<h2>Brand collaborations and stories</h2>
<p>For sponsored stories, events and partnerships, use <a href="/#business">Partner with us</a> on the home page.</p>
<h2>Corrections</h2>
<p>Spotted wrong timings, a closed place or a wrong photo credit? Message us on Instagram or use the business form, and we'll fix it.</p>
</div></section>`;
  const url = SITE + "/contact/";
  write("contact/index.html", shell(main, {
    title: "Contact Doon Dekho, the Dehradun City Guide", desc: "How to reach Doon Dekho: Instagram, free business listings, brand collaborations and corrections for our Dehradun city guide.",
    url, image: imgURL("hero-valley"),
    ld: { "@context": "https://schema.org", "@graph": [{ "@type": "ContactPage", url, name: "Contact Doon Dekho", about: { "@id": SITE + "/#org" } }] }
  }).replace('data-page="place"', 'data-page="about"'));
  add("/contact/", "0.3", lastmod("/contact/", main));
}

/* ---- badge kit for listed businesses (not indexed; sent to owners) ---- */
{
  const snippet = `<a href="https://doondekho.in/" title="Featured on Doon Dekho, the Dehradun city guide"><img src="https://doondekho.in/assets/featured-on-doon-dekho.svg" alt="Featured on Doon Dekho" width="240" height="72"></a>`;
  const main = `<section class="page-hero ex-compact"><div class="wrap">
<nav class="crumbs-light" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Badge</span></nav>
<p class="label">For listed businesses</p>
<h1>Featured on Doon Dekho badge</h1>
<p>If your place is listed on Doon Dekho, you're welcome to show this badge on your website or share it on Instagram.</p>
</div></section>
<section class="place-body"><div class="wrap place-wrap about">
<p><img src="/assets/featured-on-doon-dekho.svg" alt="Featured on Doon Dekho" width="240" height="72"></p>
<h2>On your website</h2>
<p>Paste this where you want the badge to appear. Change the link to your own page on Doon Dekho (for example https://doondekho.in/place/your-place/) so visitors land on your listing.</p>
<pre class="badge-code"><code>${esc(snippet)}</code></pre>
<h2>On Instagram</h2>
<p>Share your Doon Dekho page in a story with a link sticker, and tag <a href="https://www.instagram.com/doondekho/" target="_blank" rel="noopener">@doondekho</a>. We reshare the ones we're tagged in.</p>
<h2>Not listed yet?</h2>
<p>Use <a href="/#business">Add your business</a> and we'll take a look.</p>
</div></section>`;
  write("badge/index.html", shell(main, {
    title: "Featured on Doon Dekho badge", desc: "A badge for businesses listed on Doon Dekho, the Dehradun city guide, with the code to add it to a website.",
    url: SITE + "/badge/", image: BRAND_OG, noindex: true
  }).replace('data-page="place"', 'data-page="about"'));
}

/* ---- home + credits ---- */
let home = seoHead(read("index.html"), {
  title: "Dehradun City Guide: Cafés, Food, Places, Schools · Doon Dekho",
  desc: "The complete guide to Dehradun: cafés, street food, hidden gems, schools, shops and stories from the Doon Valley.",
  url: `${SITE}/`, image: BRAND_OG,
  ld: { "@context": "https://schema.org", "@graph": [
    { ...ORG, description: "A local city guide to Dehradun, Uttarakhand.", areaServed: { "@type": "City", name: "Dehradun" }, ...(SAME_AS.length ? { sameAs: SAME_AS } : {}) },
    { "@type": "WebSite", "@id": SITE + "/#site", name: "Doon Dekho", alternateName: ["DoonDekho", "Doon Dekho Dehradun"], url: SITE + "/", inLanguage: "en-IN", publisher: { "@id": SITE + "/#org" } }
  ] }
});
// crawlable directory in the grid container (the page script replaces it with cards)
home = fill(home, "grid", `<ul class="seo-list">${[...PLACE_URL].filter(([p]) => !p.t).map(([p, u]) => `<li><a href="${u}">${esc(p.n)}</a> · ${esc(p.a || p.alt)}</li>`).join("")}</ul>`);
write("index.html", home);
add("/", "1.0", lastmod("/", [...PLACE_URL.values()].join() + POSTS.map(p => p.slug).join()));
write("credits.html", seoHead(read("credits.html"), { title: "Photo credits and licences · Doon Dekho", desc: "The photographers behind the pictures on Doon Dekho, with the licence for each photo. Most are from Wikimedia Commons; tell us if a credit is wrong.", url: `${SITE}/credits`, image: BRAND_OG,
  ld: { "@context": "https://schema.org", "@type": "WebPage", name: "Photo credits", url: `${SITE}/credits`, isPartOf: { "@type": "WebSite", name: "Doon Dekho", url: SITE + "/" } } }));
add("/credits", "0.2", lastmod("/credits", "credits"));

/* ---- sitemap + lastmod record ---- */
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(x => `  <url><loc>${SITE}${x.u}</loc><lastmod>${x.d}</lastmod><priority>${x.pri}</priority></url>`).join("\n")}\n</urlset>\n`);
write(LM_FILE, JSON.stringify(lastmodNew, null, 1) + "\n");
/* ---- Crawlable footer: the same links the script draws, present in the HTML for search engines.
   assets/site.js replaces the contents of #footer when it runs, so visitors see the normal footer. ---- */
const STATIC_FOOT = `<div class="wrap"><nav aria-label="Site"><p><a href="/">Doon Dekho</a>: an independent guide to Dehradun.</p>
${SECTIONS.map(x => `<p><a href="/explore/${x.id}/">${esc(x.name)}</a>: ${x.subs.map(b => `<a href="/explore/${x.id}/${b.id}/">${esc(b.name)}</a>`).join(", ")}</p>`).join("\n")}
<p><a href="/blog/">Journal</a> · <a href="/explore/">All categories</a> · <a href="/about/">About</a> · <a href="/contact/">Contact</a> · <a href="/credits">Photo credits</a></p></nav></div>`;
/* ---- Google Analytics 4 (doondekho.in property) on every page ---- */
const GA_ID = "G-VPM2SFRKV5";
const GA_TAG = `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${GA_ID}");</script>`;
/* ---- brand icons: favicon, Apple touch icon, web manifest on every page ---- */
const ICON_TAGS = `<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="192x192" href="/assets/brand/icon-192.png">
<link rel="icon" type="image/svg+xml" href="/assets/brand/icon.svg">
<link rel="apple-touch-icon" href="/assets/brand/icon-180.png">
<link rel="manifest" href="/site.webmanifest">`;
/* ---- cache-busting: point every page at the current version of the shared CSS/JS ---- */
{
  const crypto = await import("node:crypto");
  const ver = Object.fromEntries(["assets/site.js", "assets/data.js", "assets/styles.css"].map(f =>
    [f, crypto.createHash("sha1").update(fs.readFileSync(path.join(ROOT, f))).digest("hex").slice(0, 10)]));
  const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.name.startsWith(".") || e.name === "node_modules" ? [] : e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".html") ? [path.join(d, e.name)] : []);
  for (const f of walk(ROOT)) {
    const src = fs.readFileSync(f, "utf8");
    let out = src.replace(/(["'])\/(assets\/(?:site\.js|data\.js|styles\.css))(?:\?v=[a-z0-9]+)?\1/g, (m, q, a) => `${q}/${a}?v=${ver[a]}${q}`);
    out = out.replace(/<link rel="icon"[^>]*>\n?|<link rel="apple-touch-icon"[^>]*>\n?|<link rel="manifest"[^>]*>\n?/g, "");
    out = out.replace(/(<meta name="viewport"[^>]*>\n?)/, `$1${ICON_TAGS}\n`);
    if (!/<meta name="theme-color"/.test(out)) out = out.replace(/(<link rel="manifest"[^>]*>\n?)/, `$1<meta name="theme-color" content="#121418">\n`);
    if (!out.includes(GA_ID)) out = out.replace(/<head>\n?/, `<head>\n${GA_TAG}\n`);
    out = out.replace(/<footer id="footer">[\s\S]*?<\/footer>/, `<footer id="footer">${STATIC_FOOT}</footer>`);
    if (out !== src) fs.writeFileSync(f, out);
  }
}
console.log(`Built ${POSTS.length} posts, ${SECTIONS.length} sections, ${placeCount} place pages (${placeIndexed} indexed), ${urls.length} sitemap URLs.`);
