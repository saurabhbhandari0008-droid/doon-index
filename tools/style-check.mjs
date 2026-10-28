// Style check for journal posts, based on the humanizing-writing rules.
// Run from the repo root:  node tools/style-check.mjs <slug> [<slug> ...]
// It counts phrasing habits that make text read as machine-written. It is NOT an AI-detector
// score: detectors (GPTZero and the like) are separate tools, and their numbers vary between them.
import fs from "node:fs";
import vm from "node:vm";

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("assets/data.js", "utf8"), ctx);
const POSTS = ctx.window.POSTS;

const strip = s => String(s ?? "").replace(/<[^>]+>/g, "");
const TELLS = [
  ["Significance words", /\b(pivotal|testament to|plays? a (crucial|vital|key|significant) role|tapestry|vibrant|bustling|nestled|hidden gem of|must-visit|delve|embark|boasts?|showcas\w+|unforgettable|breathtaking)\b/gi],
  ["Stock connectors", /\b(moreover|furthermore|additionally|in conclusion|overall,|ultimately,|in summary)\b/gi],
  ["Filler and candor markers", /\b(it'?s worth noting|it is worth noting|honestly|needless to say|whether you'?re a|look no further|if you'?re looking for)\b/gi],
  ["Not X but Y / not only", /\b(not only\b[^.]*\bbut also|it'?s not (just )?\w+[^.]{0,40}, it'?s)\b/gi],
  ["Trailing -ing significance", /, (making|highlighting|underscoring|showcasing|reflecting|ensuring|offering) (it|this|the|a)\b/gi],
  ["Announcing the point", /\b(here'?s the thing|the result\?|the best part\?|the catch\?)/gi],
  ["Noun-built phrases", /\b(the (implementation|utilization|facilitation) of|utiliz\w+)\b/gi],
  ["Em dashes", /—/g]
];

const slugs = process.argv.slice(2);
if (!slugs.length) { console.log("Usage: node tools/style-check.mjs <slug> [<slug> ...]"); process.exit(1); }
let fail = false;
for (const slug of slugs) {
  const P = POSTS.find(p => p.slug === slug);
  if (!P) { console.log(`${slug}: not found in assets/data.js`); fail = true; continue; }
  const text = [P.t, P.ex, ...P.body.flatMap(b => [b.p, b.h, b.h3, b.tip, b.q, ...(b.ul || []), ...(b.faq || []).flat()])].filter(Boolean).map(strip).join("\n");
  const words = text.split(/\s+/).filter(Boolean).length;
  const sentences = text.split(/(?<=[.!?])\s+/).map(s => s.split(/\s+/).length).filter(n => n > 2);
  const mean = sentences.reduce((a, b) => a + b, 0) / (sentences.length || 1);
  const sd = Math.sqrt(sentences.reduce((a, n) => a + (n - mean) ** 2, 0) / (sentences.length || 1));
  const paras = P.body.filter(b => b.p).map(b => strip(b.p).split(/\s+/).length);
  console.log(`\n${slug}  (${words} words, ${sentences.length} sentences)`);
  let hits = 0;
  for (const [name, re] of TELLS) {
    const m = text.match(re) || [];
    if (m.length) { hits += m.length; console.log(`  ${name}: ${m.length}  e.g. "${[...new Set(m.map(x => x.trim()))].slice(0, 4).join('", "')}"`); }
  }
  // Very even sentence lengths read as generated; human prose varies.
  const spread = sd / (mean || 1);
  console.log(`  Sentence length: mean ${mean.toFixed(1)} words, variation ${(spread * 100).toFixed(0)}%${spread < 0.35 ? "  <- too even, vary it" : ""}`);
  if (paras.length) console.log(`  Paragraphs: ${paras.length}, longest ${Math.max(...paras)} words`);
  const per1k = hits / (words / 1000 || 1);
  const verdict = per1k <= 3 && spread >= 0.35 ? "PASS" : "REVISE";
  if (verdict !== "PASS") fail = true;
  console.log(`  Tells per 1,000 words: ${per1k.toFixed(1)}  ->  ${verdict}`);
}
process.exit(fail ? 2 : 0);
