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
}
const urlOfItem = it => {
  if (PLACE_URL.has(it)) return PLACE_URL.get(it);
  const orig = PLACES.find(p => p.id === it.id && p.n === it.n) || GEMS.find(g => g.n === it.n);
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
function seoHead(html, { title, desc, url, image, type = "website", ld, noindex = false }) {
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
const ORG = { "@type": "Organization", "@id": SITE + "/#org", name: "Doon Dekho", url: SITE + "/" };
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
write("post.html", seoHead(postTpl, { title: "Journal · Doon Dekho", desc: "Stories from Dehradun.", url: `${SITE}/blog/`, image: imgURL("hero-valley"), noindex: true }));

/* ---- journal index ---- */
let blogTpl = read("blog/index.html");
blogTpl = seoHead(blogTpl, {
  title: "Dehradun Blog: Food, Cafés, Places and Local Guides · Doon Dekho",
  desc: "Guides to Dehradun's street food, cafés, waterfalls, temples, shopping and more, written by people who live here.",
  url: `${SITE}/blog/`, image: imgURL(POSTS[0].img)
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
  url: `${SITE}/explore/`, image: imgURL("hero-valley")
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
    desc: `${S.name} in Dehradun: ${S.subs.map(sb => sb.name.toLowerCase()).join(", ")}. ${S.blurb}`.slice(0, 300),
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
    const desc = items.length
      ? `${sb.name} in Dehradun: ${items.slice(0, 4).map(p => p.n).join(", ")}${items.length > 4 ? ` and ${items.length - 4} more` : ""}. Areas, directions and details on Doon Dekho.`
      : `${sb.name} in Dehradun on Doon Dekho, the complete guide to the city.`;
    let k = seoHead(exTpl, {
      title: `${sb.name} in Dehradun (${YEAR}) · Doon Dekho`, desc: desc.slice(0, 300), url: SITE + u, image: imgURL(sb.img || S.img),
      ld: { "@context": "https://schema.org", "@graph": [crumbs([{ "@type": "ListItem", position: 4, name: sb.name, item: SITE + u }]), ...(items.length ? [itemList(`${sb.name} in Dehradun`, items)] : [])] },
      noindex: items.length === 0
    });
    k = fill(fill(k, "exTitle", `${esc(sb.name)} <em>in Dehradun</em>`), "exBlurb", esc(S.blurb));
    k = fill(k, "exList", listHTML(items));
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
  const posts = [...new Set([...(placeLinked.get(u) || []), ...(isGem && p.post ? POSTS.filter(x => x.slug === p.post) : [])])];
  const others = (list) => list.filter(x => x !== p && PLACE_URL.has(x)).slice(0, 6);
  const sameSub = others(isGem ? GEMS : PLACES.filter(x => x.s === p.s && !x.u));
  const sameArea = isGem ? [] : others(PLACES.filter(x => !x.u && x.a === p.a && x.s !== p.s));
  const linkList = (title, arr) => arr.length ? `<div class="place-links"><h2>${title}</h2><ul>${arr.map(x => `<li><a href="${PLACE_URL.get(x)}">${esc(x.n)}</a><span>${esc(x.a || x.alt || "")}</span></li>`).join("")}</ul></div>` : "";
  const title = isGem ? `${p.n}, Dehradun: Best Time, Tips and Directions` : p.t ? `${p.n}, ${area}, Dehradun` : `${p.n}, ${area}, Dehradun: Tips and Directions`;
  const desc = `${strip(p.d)} ${isGem || !p.t ? "Area, best time, a local tip and directions." : "Area, courses, website and directions."}`.slice(0, 300);
  const schema = {
    "@type": SCHEMA_TYPE[sb ? sb.id : ""] || "LocalBusiness", "@id": url + "#place", name: p.n, description: strip(p.d), url,
    // only real photos of this place (Wikimedia or your own), never generic stock
    ...((PHOTOS[p.img] || {}).src ? { image: imgSrc(p.img) } : {}),
    address: { "@type": "PostalAddress", streetAddress: area, addressLocality: "Dehradun", addressRegion: "Uttarakhand", addressCountry: "IN" },
    hasMap: dir,
    ...(p.p && /^₹+$/.test(p.p) ? { priceRange: p.p } : {}),
    ...(p.web ? { sameAs: p.web } : {}),
    ...(p.est ? { foundingDate: String(p.est) } : {})
  };
  const crumbs = { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Explore", item: SITE + "/explore/" },
    { "@type": "ListItem", position: 3, name: cat, item: `${SITE}/explore/${secId}/${sb.id}/` },
    { "@type": "ListItem", position: 4, name: p.n, item: url }] };
  const ok = indexable(p, isGem);
  const img = imgTag(p.img, `${p.n}, Dehradun`, 1280, 720, true);
  const main = `<section class="page-hero ex-compact"><div class="wrap">
<nav class="crumbs-light" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/explore/">Explore</a><span>/</span><a href="/explore/${secId}/${sb.id}/">${esc(cat)}</a><span>/</span><span aria-current="page">${esc(p.n)}</span></nav>
<p class="label">${esc(cat)} · ${esc(area)}${p.f ? " · Featured" : ""}</p>
<h1>${esc(p.n)}</h1>
<p>${esc(p.d)}</p>
</div></section>
<section class="place-body"><div class="wrap place-wrap">
${img ? `<figure class="ph place-ph" style="--h:${(PHOTOS[p.img] || { h: 38 }).h}">${img}</figure>${creditLine(p.img)}` : ""}
<div class="facts">${facts.map(([k, v]) => `<div><small>${k}</small><b>${esc(v)}</b></div>`).join("")}</div>
${p.tip ? `<p class="tip"><b>Local tip ·</b> ${esc(p.tip)}</p>` : ""}
${p.t ? `<p class="tip"><b>Admissions ·</b> Courses, fees and dates change every year. Always confirm with the institution before applying.</p>` : ""}
<div class="btn-row"><a class="btn" href="${dir}" target="_blank" rel="noopener">Get directions</a>${p.web ? `<a class="btn line" href="${esc(p.web)}" target="_blank" rel="noopener">Official website</a>` : ""}<a class="btn line" href="/explore/${secId}/${sb.id}/">All ${esc(cat.toLowerCase())}</a></div>
${posts.length ? `<div class="place-links"><h2>Read about it</h2><ul>${posts.map(x => `<li><a href="/blog/${x.slug}/">${esc(x.t)}</a><span>${esc(x.cat)}</span></li>`).join("")}</ul></div>` : ""}
${linkList(`More ${esc(cat.toLowerCase())} in Dehradun`, sameSub)}
${linkList(`Also in ${esc(area)}`, sameArea)}
${isGem || p.t ? "" : `<p class="place-claim">Run ${esc(p.n)}? <a href="/#business">Add photos, timings and offers to this page</a>.</p>`}
</div></section>`;
  const html = shell(main, {
    title: `${title} · Doon Dekho`, desc, url, image: imgURL(p.img), noindex: !ok,
    ld: { "@context": "https://schema.org", "@graph": [schema, crumbs] }
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
<li><b>Featured</b> labels mark places with a business relationship with Doon Dekho. It is always shown.</li>
</ul>
<h2>Photos</h2>
<p>Many photos are from Wikimedia Commons and Unsplash, credited on the <a href="/credits">photo credits</a> page. We are replacing them with our own pictures, place by place.</p>
<h2>Get in touch</h2>
<p>Run a place in Dehradun? Use <a href="/#business">Add your business</a>. Spotted something out of date? Tell us through the same form and we'll fix it.</p>
</div></section>`;
  const url = SITE + "/about/";
  write("about/index.html", shell(main, {
    title: "About Doon Dekho: Who Writes This Dehradun Guide", desc: "Doon Dekho is an independent Dehradun city guide written by Saurabh, born and raised in Dehradun. How places are verified, featured and photographed.",
    url, image: imgURL("hero-valley"),
    ld: { "@context": "https://schema.org", "@graph": [{ "@type": "AboutPage", url, name: "About Doon Dekho", about: { "@id": SITE + "/#org" }, mainEntity: AUTHOR }, AUTHOR] }
  }).replace('data-page="place"', 'data-page="about"'));
  add("/about/", "0.4", lastmod("/about/", main));
}

/* ---- home + credits ---- */
let home = seoHead(read("index.html"), {
  title: "Doon Dekho · Dehradun City Guide: Cafés, Food, Places and Schools",
  desc: "The complete guide to Dehradun: cafés, street food, hidden gems, schools, shops and stories from the Doon Valley.",
  url: `${SITE}/`, image: imgURL("hero-valley"),
  ld: { "@context": "https://schema.org", "@graph": [
    { ...ORG, description: "A local city guide to Dehradun, Uttarakhand.", areaServed: { "@type": "City", name: "Dehradun" }, ...(SAME_AS.length ? { sameAs: SAME_AS } : {}) },
    { "@type": "WebSite", "@id": SITE + "/#site", name: "Doon Dekho", url: SITE + "/", inLanguage: "en-IN", publisher: { "@id": SITE + "/#org" } }
  ] }
});
// crawlable directory in the grid container (the page script replaces it with cards)
home = fill(home, "grid", `<ul class="seo-list">${[...PLACE_URL].filter(([p]) => !p.t).map(([p, u]) => `<li><a href="${u}">${esc(p.n)}</a> · ${esc(p.a || p.alt)}</li>`).join("")}</ul>`);
write("index.html", home);
add("/", "1.0", lastmod("/", [...PLACE_URL.values()].join() + POSTS.map(p => p.slug).join()));
write("credits.html", seoHead(read("credits.html"), { title: "Photo credits · Doon Dekho", desc: "Credits for the photographs used on Doon Dekho.", url: `${SITE}/credits`, image: imgURL("hero-valley") }));
add("/credits", "0.2", lastmod("/credits", "credits"));

/* ---- sitemap + lastmod record ---- */
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(x => `  <url><loc>${SITE}${x.u}</loc><lastmod>${x.d}</lastmod><priority>${x.pri}</priority></url>`).join("\n")}\n</urlset>\n`);
write(LM_FILE, JSON.stringify(lastmodNew, null, 1) + "\n");
/* ---- Google Analytics 4 (doondekho.in property) on every page ---- */
const GA_ID = "G-VPM2SFRKV5";
const GA_TAG = `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${GA_ID}");</script>`;
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
    if (!out.includes(GA_ID)) out = out.replace(/<head>\n?/, `<head>\n${GA_TAG}\n`);
    if (out !== src) fs.writeFileSync(f, out);
  }
}
console.log(`Built ${POSTS.length} posts, ${SECTIONS.length} sections, ${placeCount} place pages (${placeIndexed} indexed), ${urls.length} sitemap URLs.`);
