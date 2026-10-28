/* Doon Dekho — shared site script: images, nav, sliders, effects, bag, saved, overlays. */
(function(){
document.documentElement.classList.add("js");
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const inr=n=>"₹"+n.toLocaleString("en-IN");
const store={get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch{return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- images: local file → Unsplash → artwork ---------- */
const UNS=(id,w)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
function phIn(key,w=900,alt="",eager=false){
  const p=PHOTOS[key]||{h:38};
  const init=(alt||key).replace(/[^A-Za-z]/g,"").charAt(0)||"D";
  const local=(window.LOCAL_PHOTOS||[]).includes(key);
  const attrs=eager?'fetchpriority="high"':'loading="lazy"';
  let src,extra="";
  if(p.src){const sizes=[500,960,1280,1920].filter(x=>x<p.mw);
    if(/\/1280px-/.test(p.src)&&sizes.length){src=p.src.replace("/1280px-",`/${sizes.find(x=>x>=Math.min(w,1280))||sizes[sizes.length-1]}px-`);
      extra=` srcset="${sizes.map(x=>p.src.replace("/1280px-",`/${x}px-`)+" "+x+"w").join(", ")}" sizes="${w>=1600?"100vw":w>=1000?"(max-width:700px) 100vw, 70vw":w>=700?"(max-width:700px) 85vw, 35vw":"(max-width:700px) 45vw, 20vw"}"`}
    else src=p.src;
    extra+=` title="Photo: ${esc(p.credit)} · ${esc(p.lic)}"`}
  else if(local){src=`images/${key}.jpg`;if(p.u)extra=` data-fb="${UNS(p.u,w)}"`}
  else if(p.u){const ws=[400,700,1000,1400,2000].filter(x=>x<=w*1.6);if(!ws.length)ws.push(w);
    src=UNS(p.u,w);extra=` srcset="${ws.map(x=>UNS(p.u,x)+" "+x+"w").join(", ")}" sizes="${w>=1600?"100vw":w>=1000?"(max-width:700px) 100vw, 70vw":w>=700?"(max-width:700px) 85vw, 35vw":"(max-width:700px) 45vw, 20vw"}"`}
  else return `<div class="art" aria-hidden="true"><span>${init}</span></div>`;
  return `<div class="art" aria-hidden="true"><span>${init}</span></div><img src="${src}"${extra} alt="${esc(alt)}" ${attrs} decoding="async">`;
}
const hue=key=>(PHOTOS[key]||{h:38}).h;
function ph(key,w=900,alt="",cls="",eager=false){return `<div class="ph ${cls}" style="--h:${hue(key)}">${phIn(key,w,alt,eager)}</div>`}
function credit(key){const p=PHOTOS[key];if(!p||!p.credit)return "";
  return `<p class="photo-credit">Photo: ${esc(p.credit)} · <a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.lic)}, via Wikimedia Commons</a></p>`}
document.addEventListener("load",e=>{if(e.target.tagName==="IMG")e.target.classList.add("ok")},true);
document.addEventListener("error",e=>{const i=e.target;if(i.tagName!=="IMG")return;
  if(i.dataset.fb){const f=i.dataset.fb;i.removeAttribute("data-fb");i.src=f}else i.remove()},true);

/* ---------- nav + footer ---------- */
const page=document.body.dataset.page||"home";
const home=page==="home"?"":"/";
const NAV=[["Explore","/explore/"],["Hidden Gems",home+"#gems"],["Neighbourhoods",home+"#areas"],["Schools",home+"#schools"],["Shop",home+"#shop"],["Journal","/blog/"],["For Business",home+"#business"]];
const heart=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7.5-4.6-9.5-9.2C1 8.2 3.4 4.5 7 4.5c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.6 0 6 3.7 4.5 7.3C19.5 16.4 12 21 12 21z"/></svg>`;
const arrowL=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 5l-7 7 7 7"/></svg>`;
const arrowR=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 5l7 7-7 7"/></svg>`;
const navEl=$("#nav");
if(navEl){
  navEl.className="nav"+(document.body.dataset.nav==="light"?" light":"");
  navEl.innerHTML=`<div class="wrap"><a class="logo" href="/">Doon <i>Dekho</i></a>
  <nav class="links" aria-label="Main">${NAV.map(([l,h])=>`<a href="${h}"${(page==="blog"&&l==="Journal")||(page==="explore"&&l==="Explore")?' class="on"':""}>${l}</a>`).join("")}</nav>
  <div class="actions"><button class="icon-btn" id="savedBtn" aria-label="Saved places">${heart}<span class="badge" id="savedCount">0</span></button>
  <button class="icon-btn" id="bagBtn" aria-label="Shopping bag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 8h14l-1.2 12H6.2L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><span class="badge" id="bagCount">0</span></button>
  <button class="icon-btn menu-btn" id="menuBtn" aria-label="Open menu">Menu</button></div></div>`;
  let lastY=0;
  const onScroll=()=>{const y=scrollY;const solidAt=document.body.dataset.nav==="light"?0:innerHeight*.55;
    navEl.classList.toggle("solid",y>solidAt);
    navEl.classList.toggle("hide",y>lastY&&y>400&&!document.body.style.overflow);lastY=y;
    const pr=$(".progress");if(pr){const h=document.documentElement.scrollHeight-innerHeight;pr.style.width=(h>0?y/h*100:0)+"%"}};
  addEventListener("scroll",onScroll,{passive:true});onScroll();
}
/* phone tab bar */
const tb=document.createElement("nav");tb.className="tabbar";tb.setAttribute("aria-label","Quick links");
const ico={home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>`,
 explore:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>`,
 journal:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M9 9h6M9 13h6"/></svg>`,
 bag:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 8h14l-1.2 12H6.2L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`};
tb.innerHTML=`<a href="/#top"${page==="home"?' class="on"':""}>${ico.home}Home</a><a href="/explore/"${page==="explore"?' class="on"':""}>${ico.explore}Explore</a><a href="/blog/"${page==="blog"||page==="post"?' class="on"':""}>${ico.journal}Journal</a>
 <button id="tbSaved" type="button">${heart}Saved<span class="badge" data-count="saved">0</span></button><button id="tbBag" type="button">${ico.bag}Bag<span class="badge" data-count="bag">0</span></button>`;
document.body.appendChild(tb);
const footEl=$("#footer");
if(footEl){footEl.className="site";footEl.innerHTML=`<div class="wrap">
  <div class="foot"><div><a class="logo" href="/">Doon <i>Dekho</i></a><p>An independent guide to Dehradun, made by people who live here.</p></div>
  <div><h4>Explore</h4><ul>${(window.SECTIONS||[]).slice(0,6).map(x=>`<li><a href="/explore/${x.id}/">${x.name}</a></li>`).join("")}<li><a href="/explore/">All categories</a></li></ul></div>
  <div><h4>Discover</h4><ul><li><a href="${home}#schools">Schools</a></li><li><a href="${home}#shop">Shop</a></li><li><a href="/blog/">Journal</a></li></ul></div>
  <div><h4>Business</h4><ul><li><a href="#" data-biz="list">Add your business</a></li><li><a href="#" data-biz="partner">Partner with us</a></li></ul></div></div>
  <div class="big-word" aria-hidden="true">Dehra<i>dun</i></div>
  <div class="legal"><span>© 2026 Doon Dekho · Dehradun, Uttarakhand</span><span><a href="/credits" style="text-decoration:underline">Photo credits</a> · listings marked Unverified are from public sources · shop products are samples</span></div></div>`}


/* ---------- categories ---------- */
const SUBMAP={};(window.SECTIONS||[]).forEach(sec=>sec.subs.forEach(sb=>SUBMAP[sb.id]={...sb,sec}));
const subOf=p=>SUBMAP[p.s]||null;
/* place page URLs: must match slugify + dedupe in tools/build.mjs */
const slugify=t=>String(t).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/&/g," and ").replace(/[’'.]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const PLACE_URL={};{const used=new Set();(window.PLACES||[]).filter(p=>!p.u).forEach(p=>{let s=slugify(p.n);if(used.has(s))s=slugify(p.n+" "+p.a);if(used.has(s))s+="-"+p.id;used.add(s);PLACE_URL[p.id]="/place/"+s+"/"})}
const placeURL=p=>PLACE_URL[p.id]||"#";
const sectionOf=p=>(SUBMAP[p.s]||{}).sec||null;
const listFor=subId=>subId==="hidden-gems"?GEMS.map((g,i)=>({...g,gem:i,s:"hidden-gems"})):subId==="schools"?SCHOOLS.map(x=>({...x,school:1,s:"schools"})):PLACES.filter(p=>p.s===subId);
const countFor=subId=>listFor(subId).length;
const countSection=sec=>sec.subs.reduce((t,sb)=>t+countFor(sb.id),0);

/* ---------- listing card (used on home + explore) ---------- */
function card(p,o={}){
  if(p.school)return `<article class="card${o.wide?" wide":""}"${o.style?` style="${o.style}"`:""}><div style="position:relative">${ph(p.img||"fri",800,p.n)}<div class="tags"><span class="tag">School</span></div></div>
   <div><div class="row"><span>${esc(p.a)}</span><span>${esc(p.board)}</span></div><h3><a class="stretch" href="#" data-school="${esc(p.n)}">${esc(p.n)}</a></h3><p class="d">${esc(p.type)} · ${esc(p.g)} · ${esc(p.d)}</p></div></article>`;
  if(p.gem!==undefined)return `<article class="card${o.wide?" wide":""}"${o.style?` style="${o.style}"`:""}><div style="position:relative">${ph(p.img,800,p.n)}<div class="tags"><span class="tag">Hidden gem</span></div></div>
   <div><div class="row"><span>${esc(p.alt)}</span><span>Free</span></div><h3><a class="stretch" href="#" data-gem="${p.gem}">${esc(p.n)}</a></h3><p class="d">${esc(p.d)}</p></div></article>`;
  const sb=subOf(p);
  if(p.t)return `<article class="card${o.wide?" wide":""} edu${p.f?" featured":""}"${o.style?` style="${o.style}"`:""}>
  <div style="position:relative">${ph(p.img,800,p.n)}<div class="tags">${p.f?'<span class="tag gold">Featured</span>':""}<span class="tag${p.gov?" gov":""}">${esc(p.t.split(" · ")[0])}</span></div>${p.adm?`<span class="adm-badge">${esc(p.adm)}</span>`:""}
  <button class="save${saved.has(p.id)?" on":""}" data-save="${p.id}" aria-label="Save ${esc(p.n)}">${heart}</button></div>
  <div><div class="row"><span>${esc(p.a)}</span><span>${p.est?"Est. "+esc(p.est):""}</span></div><h3><a class="stretch" href="${placeURL(p)}" data-place="${p.id}">${esc(p.n)}</a></h3><p class="d"><b class="edu-type">${esc(p.t)}</b> · ${esc(p.d)}</p></div></article>`;
  return `<article class="card${o.wide?" wide":""}"${o.style?` style="${o.style}"`:""}>
  <div style="position:relative">${ph(p.img,800,p.n)}<div class="tags"><span class="tag">${esc(sb?sb.name:"")}</span>${p.f?'<span class="tag gold">Featured</span>':""}</div>
  <button class="save${saved.has(p.id)?" on":""}" data-save="${p.id}" aria-label="Save ${esc(p.n)}">${heart}</button></div>
  <div><div class="row"><span>${esc(p.a)}</span><span>${p.u?"Unverified":esc(p.p)}</span></div><h3><a class="stretch" href="${placeURL(p)}" data-place="${p.id}">${esc(p.n)}</a></h3><p class="d">${esc(p.d)}</p></div></article>`;
}

/* ---------- ads: clearly marked, fixed size, no pop-ups ---------- */
let adTurn=Math.floor(Math.random()*97);
function pickAd(slot){const list=(window.ADS||[]).filter(a=>a.slots.includes(slot));if(!list.length)return null;
  const paid=list.filter(a=>!a.house);const pool=paid.length?paid:list;return pool[(adTurn++)%pool.length]}
function adLink(a,inner,cls){
  if(a.action&&a.action.startsWith("biz:"))return `<a class="${cls}" href="#" data-biz="${a.action.slice(4)}">${inner}</a>`;
  return `<a class="${cls}" href="${esc(a.url||"#")}" target="_blank" rel="sponsored noopener">${inner}</a>`;
}
function ad(slot){
  const a=pickAd(slot==="infeed"?"infeed":slot==="article"?"article":slot==="edu"?"edu":"banner");if(!a)return "";
  const label=a.house?"Advertise here":"Sponsored";
  if(slot==="infeed")return `<article class="card wide ad-card" aria-label="Advertisement">${adLink(a,`<div style="position:relative">${ph(a.img,800,a.title)}<div class="tags"><span class="tag ad-tag">${label}</span></div></div>
    <div><div class="row"><span>${esc(a.sponsor)}</span><span>Ad</span></div><h3>${esc(a.title)}</h3><p class="d">${esc(a.text)}</p><span class="ad-cta">${esc(a.cta)} →</span></div>`,"ad-hit")}</article>`;
  return `<aside class="ad-banner${slot==="article"?" ad-article":""}" aria-label="Advertisement"><span class="ad-label">${label}</span>${adLink(a,`${ph(a.img,900,a.title)}
    <div class="ad-body"><p class="ad-sponsor">${esc(a.sponsor)}</p><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p><span class="btn ad-btn">${esc(a.cta)}</span></div>`,"ad-hit")}</aside>`;
}

/* ---------- toast + overlays ---------- */
function toast(m){$$(".toast").forEach(t=>t.remove());const t=document.createElement("div");t.className="toast";t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2400)}
const layer=document.createElement("div");document.body.appendChild(layer);
const scrim=document.createElement("div");scrim.className="scrim";scrim.hidden=true;document.body.appendChild(scrim);
function openLayer(html){layer.innerHTML=html;scrim.hidden=false;document.body.style.overflow="hidden";const f=layer.querySelector("button,input");f&&f.focus({preventScroll:true})}
function closeLayer(){layer.innerHTML="";scrim.hidden=true;document.body.style.overflow=""}
/* phone: drag a bottom sheet down to close it */
(function(){let y0=null,dy=0,el=null;
  layer.addEventListener("touchstart",e=>{el=e.target.closest(".modal");if(!el||innerWidth>699||el.scrollTop>2){el=null;return}y0=e.touches[0].clientY;dy=0;el.style.transition="none"},{passive:true});
  layer.addEventListener("touchmove",e=>{if(!el)return;dy=e.touches[0].clientY-y0;if(dy>0&&el.scrollTop<=0){el.style.transform=`translateY(${dy}px)`}else{dy=0;el.style.transform=""}},{passive:true});
  layer.addEventListener("touchend",()=>{if(!el)return;el.style.transition="transform .3s cubic-bezier(.2,.8,.2,1)";if(dy>110){el.style.transform="translateY(100%)";setTimeout(closeLayer,260)}else el.style.transform="";el=null},{passive:true});
})();
scrim.onclick=closeLayer;
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLayer()});
const maps=q=>`https://www.google.com/maps/search/${encodeURIComponent(q+" Dehradun")}`;

/* ---------- saved + bag ---------- */
let saved=new Set(store.get("doon_saved",[]));
let bag=store.get("doon_bag",{});
const bagCount=()=>Object.values(bag).reduce((a,b)=>a+b,0);
function sync(){store.set("doon_saved",[...saved]);store.set("doon_bag",bag);
  const sc=$("#savedCount"),bc=$("#bagCount");if(sc)sc.textContent=saved.size;if(bc)bc.textContent=bagCount();
  $$('[data-count="saved"]').forEach(e=>{e.textContent=saved.size;e.hidden=!saved.size});
  $$('[data-count="bag"]').forEach(e=>{e.textContent=bagCount();e.hidden=!bagCount()});
  $$("[data-save]").forEach(b=>b.classList.toggle("on",saved.has(+b.dataset.save)));
  document.dispatchEvent(new Event("doon:sync"))}
function toggleSave(id){saved.has(id)?saved.delete(id):saved.add(id);sync();toast(saved.has(id)?"Saved to your list":"Removed from saved")}
function addToBag(id){bag[id]=(bag[id]||0)+1;sync()}

function eduModal(p){
  const sb=subOf(p);
  const dir=p.g?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.n+" Dehradun")}&query_place_id=${p.g}`:maps(p.n);
  const facts=[["Type",p.t],["Established",p.est||"—"],["Area",p.a],["Category",sb?sb.name:"Education"]];
  const gallery=(p.photos||[]).length?`<div class="gallery">${p.photos.map(k=>ph(k,600,p.n)).join("")}</div>`:"";
  const courses=(p.courses||[]).length?`<div class="course-chips">${p.courses.map(c=>`<span>${esc(c)}</span>`).join("")}</div>`:"";
  openLayer(`<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(p.n)}"><button class="x" data-close aria-label="Close">✕</button>
  ${ph(p.img,1600,p.n)}
  <div class="mbody">${credit(p.img)}<p class="label">${p.f?"Featured · ":""}${esc(sb?sb.name:"Education")}${p.gov?" · Government":""}</p><h2>${esc(p.n)}</h2>
  ${p.adm?`<p class="adm-line">${esc(p.adm)}</p>`:""}
  <div class="facts">${facts.map(([k,v])=>`<div><small>${k}</small><b>${esc(v)}</b></div>`).join("")}</div>
  ${gallery}
  <div><p class="label" style="color:var(--muted);margin-bottom:6px">Courses &amp; focus</p><p>${esc(p.d)}</p>${courses}</div>
  <p class="tip"><b>Admissions ·</b> Courses, fees and dates change every year. Always confirm with the institution before applying.</p>
  <div class="btn-row">${p.gov?"":`<button class="btn" data-enquire="${p.id}">Enquire now</button>`}${p.web?`<a class="btn${p.gov?"":" line"}" href="${esc(p.web)}" target="_blank" rel="noopener">Official website</a>`:""}${p.phone?`<a class="btn line" href="tel:${esc(p.phone.replace(/\s/g,""))}">Call ${esc(p.phone)}</a>`:""}<a class="btn line" href="${dir}" target="_blank" rel="noopener">Get directions</a><button class="btn line" data-save-m="${p.id}">${saved.has(p.id)?"Saved ✓":"Save"}</button></div>
  <div id="enqBox"></div>
  ${p.gov||p.f?"":`<p style="font-size:.8rem;color:var(--muted)">Represent this institution? <a href="#" data-biz="list" style="color:var(--brass);font-weight:700">Update your details or get Featured</a>.</p>`}</div></div>`)}
function enquiryForm(p){
  const box=$("#enqBox");if(!box)return;
  box.innerHTML=`<form class="form enq" id="enqForm" name="enquiry"><input type="hidden" name="form-name" value="enquiry"><input type="hidden" name="institution" value="${esc(p.n)}">
   <p hidden><label>Leave empty<input name="bot-field"></label></p>
   <p class="full" style="font-weight:700">Send an enquiry to ${esc(p.n)}</p>
   <label for="e1">Your name<input id="e1" name="name" required autocomplete="name"></label>
   <label for="e2">Phone or WhatsApp<input id="e2" name="phone" required inputmode="tel" autocomplete="tel" placeholder="+91"></label>
   <label for="e3">I am a<select id="e3" name="who"><option>Student</option><option>Parent</option><option>Other</option></select></label>
   <label for="e4">Interested in<input id="e4" name="course" placeholder="e.g. BBA, Class 6, CDS coaching"></label>
   <label for="e5" class="full">Message (optional)<textarea id="e5" name="message" rows="2"></textarea></label>
   <div class="full"><button class="btn" type="submit">Send enquiry</button><p style="font-size:.76rem;color:var(--muted);margin-top:8px">Your details are shared only with this institution so they can contact you.</p></div></form>`;
  $("#e1").focus();
}
function placeModal(p,isGem){
  if(!isGem&&p.t)return eduModal(p);
  const sb=isGem?null:subOf(p),sec=sb?sb.sec:null;
  const kind=isGem?"Hidden gem":(sb?sb.name:"Place");
  const dir=p.g?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.n+" Dehradun")}&query_place_id=${p.g}`:maps(p.n);
  const facts=p.u?[["Area",isGem?p.alt.split("·")[0]:p.a],["Category",kind],["Section",sec?sec.name:"Dehradun"],["Status","Not yet verified"]]
    :[["Area",isGem?p.alt.split("·")[0]:p.a],["Budget",p.p||"Free"],["Best time",p.best||"Any time"],["Type",isGem?"Outdoors":kind]];
  openLayer(`<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(p.n)}"><button class="x" data-close aria-label="Close">✕</button>
  ${ph(p.img,1600,p.n)}
  <div class="mbody">${credit(p.img)}<p class="label">${esc(kind)}${p.f?" · Featured":""}${p.u?" · Not yet verified":""}</p><h2>${esc(p.n)}</h2><p>${esc(p.d)}</p>
  <div class="facts">${facts.map(([k,v])=>`<div><small>${k}</small><b>${esc(v)}</b></div>`).join("")}</div>
  ${p.u?`<p class="tip"><b>Is this your business?</b> Claim this listing to add photos, timings, your menu and offers. It's free.</p>`:`<p class="tip"><b>Local tip ·</b> ${esc(p.tip)}</p>`}
  <div class="btn-row"><a class="btn" href="${dir}" target="_blank" rel="noopener">Get directions</a>${isGem?(p.post?`<a class="btn line" href="/blog/${p.post}/">Read the guide</a>`:""):`<button class="btn line" data-save-m="${p.id}">${saved.has(p.id)?"Saved ✓":"Save place"}</button>`}${p.u?`<button class="btn line" data-biz="list">Claim this listing</button>`:""}</div></div></div>`)}
function schoolModal(s){
  openLayer(`<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(s.n)}"><button class="x" data-close aria-label="Close">✕</button>
  ${ph(s.img||"fri",1600,s.n)}<div class="mbody">${credit(s.img)}<p class="label">School · ${s.type}</p><h2>${s.n}</h2><p>${s.d}</p>
  <div class="facts"><div><small>Area</small><b>${s.a}</b></div><div><small>Board</small><b>${s.board}</b></div><div><small>Type</small><b>${s.type}</b></div><div><small>For</small><b>${s.g}</b></div></div>
  <p class="tip"><b>Before you visit ·</b> Ask for the full annual fee in writing and request a campus tour during term time.</p>
  <div class="btn-row"><a class="btn" href="${maps(s.n)}" target="_blank" rel="noopener">Get directions</a><a class="btn line" href="/blog/choosing-school-dehradun/">Read our school guide</a></div></div></div>`)}
function bagDrawer(){
  const ids=Object.keys(bag).filter(k=>bag[k]>0);const total=ids.reduce((t,k)=>t+(SHOP.find(s=>s.id===k)?.p||0)*bag[k],0);
  openLayer(`<aside class="drawer" aria-label="Your bag"><header><h3>Your bag</h3><button class="x" data-close aria-label="Close">✕</button></header>
  <div class="items">${ids.length?ids.map(k=>{const s=SHOP.find(x=>x.id===k);if(!s)return"";return `<div class="ci">${ph(s.img,200,s.n)}<div><b>${s.n}</b><div class="qty"><button data-dec="${k}" aria-label="Decrease">−</button><span>${bag[k]}</span><button data-inc="${k}" aria-label="Increase">+</button></div></div><span class="price">${inr(s.p*bag[k])}</span></div>`}).join("")
   :`<div class="empty-bag"><p>Your bag is empty.</p><a class="btn line" href="${home}#shop" data-close>Browse the store</a></div>`}</div>
  ${ids.length?`<footer><div class="total"><span>Subtotal</span><span>${inr(total)}</span></div><button class="btn" data-checkout>Checkout</button><p class="note">Free delivery in Dehradun on orders above ₹999.</p></footer>`:""}</aside>`)}
function savedDrawer(){
  const l=PLACES.filter(p=>saved.has(p.id));
  openLayer(`<aside class="drawer" aria-label="Saved places"><header><h3>Saved places</h3><button class="x" data-close aria-label="Close">✕</button></header>
  <div class="items">${l.length?l.map(p=>`<div class="ci" style="cursor:pointer" data-place="${p.id}">${ph(p.img,200,p.n)}<div><b>${p.n}</b><span class="meta">${p.a}</span></div><span>→</span></div>`).join("")
   :`<div class="empty-bag"><p>Tap the heart on any place to save it for later.</p></div>`}</div></aside>`)}
function bizModal(type){
  openLayer(`<div class="modal" role="dialog" aria-modal="true" aria-label="Add your business"><button class="x" data-close aria-label="Close" style="background:var(--sunk);color:var(--ink)">✕</button>
  <div class="mbody"><p class="label">${type==="partner"?"Partnerships":"Add your business"}</p><h2>${type==="partner"?"Let’s work together":"Get your place on the Index"}</h2>
  <p>${type==="partner"?"Brand collaborations, events, school features and sponsored stories. Tell us what you have in mind.":"Tell us about your business. Our team will verify the details and get in touch within two working days."}</p>
  <form class="form" id="bizForm" name="${type==="partner"?"partner":"add-business"}" data-form="${type==="partner"?"partner":"add-business"}"><input type="hidden" name="form-name" value="${type==="partner"?"partner":"add-business"}"><p hidden><label>Leave empty<input name="bot-field"></label></p>
   <label for="b1">Business name<input id="b1" name="business" required placeholder="e.g. Doon Chai Co."></label>
   <label for="b2">Category<select id="b2" name="category"><option>Café or restaurant</option><option>Street food vendor</option><option>Shop or boutique</option><option>School or institute</option><option>Stay or homestay</option><option>Other</option></select></label>
   <label for="b3">Neighbourhood<select id="b3" name="area">${AREAS.map(a=>`<option>${a}</option>`).join("")}<option>Other</option></select></label>
   <label for="b4">Phone or WhatsApp<input id="b4" name="phone" required inputmode="tel" placeholder="+91"></label>
   <label for="b5" class="full">${type==="partner"?"Tell us about the idea":"What makes your place special?"}<textarea id="b5" name="details" rows="3" placeholder="${type==="partner"?"Campaign, event, budget, dates…":"Your best dish, your story, what regulars love…"}"></textarea></label>
   <div class="full"><button class="btn" type="submit">Send details</button></div></form></div></div>`)}

document.addEventListener("click",e=>{
  let t=e.target;
  const cardEl=t.closest&&t.closest(".card");if(cardEl&&!t.closest("a,button")){const st=cardEl.querySelector(".stretch,.ad-hit");if(st){st.click();return}}
  if(t.closest("[data-close]")){closeLayer();return}
  const sv=t.closest("[data-save]");if(sv){e.preventDefault();e.stopPropagation();toggleSave(+sv.dataset.save);return}
  const sm=t.closest("[data-save-m]");if(sm){const id=+sm.dataset.saveM;toggleSave(id);sm.textContent=saved.has(id)?"Saved ✓":"Save place";return}
  const pl=t.closest("[data-place]");if(pl){e.preventDefault();placeModal(PLACES.find(p=>p.id==pl.dataset.place));return}
  const gm=t.closest("[data-gem]");if(gm){e.preventDefault();placeModal(GEMS[gm.dataset.gem],true);return}
  const sc=t.closest("[data-school]");if(sc){e.preventDefault();schoolModal(SCHOOLS.find(s=>s.n===sc.dataset.school));return}
  const ad=t.closest("[data-add]");if(ad){addToBag(ad.dataset.add);ad.textContent="Added ✓";ad.classList.add("done");setTimeout(()=>{ad.textContent="Add to bag";ad.classList.remove("done")},1300);return}
  const inc=t.closest("[data-inc]"),dec=t.closest("[data-dec]");
  if(inc||dec){const k=(inc||dec).dataset[inc?"inc":"dec"];bag[k]=Math.max(0,(bag[k]||0)+(inc?1:-1));if(!bag[k])delete bag[k];sync();bagDrawer();return}
  if(t.closest("[data-checkout]")){closeLayer();toast("Checkout will connect to Razorpay on the live site");return}
  const eq=t.closest("[data-enquire]");if(eq){enquiryForm(PLACES.find(p=>p.id==eq.dataset.enquire));eq.remove();return}
  const bz=t.closest("[data-biz]");if(bz){e.preventDefault();bizModal(bz.dataset.biz);return}
  if(t.closest("#bagBtn,#tbBag")){bagDrawer();return}
  if(t.closest("#savedBtn,#tbSaved")){savedDrawer();return}
  if(t.closest("#menuBtn")){openLayer(`<div class="mobile-menu"><button class="x" data-close aria-label="Close">✕</button>${NAV.map(([l,h],i)=>`<a href="${h}" data-close style="animation-delay:${.05*i+.1}s">${l}</a>`).join("")}</div>`);return}
});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.matches("[data-place],[data-gem],[data-post-link]"))e.target.click()});
/* Forms: sent to the owner's inbox through Web3Forms (free). The key lives in data.js as FORM_KEY. */
function send(form){if(location.protocol==="file:")return;
  const key=window.FORM_KEY;const fd=new FormData(form);
  const name=fd.get("form-name")||form.getAttribute("name")||"website";
  if(fd.get("bot-field")||fd.get("botcheck"))return;
  const data={subject:`Doon Dekho · ${name}`,from_name:"Doon Dekho website",page:location.href};
  fd.forEach((v,k)=>{if(!["form-name","bot-field","botcheck"].includes(k)&&v!=="")data[k]=v});
  if(!key){try{const q=JSON.parse(localStorage.getItem("doon-unsent")||"[]");q.push(data);localStorage.setItem("doon-unsent",JSON.stringify(q.slice(-20)))}catch(e){}return}
  try{fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:key,...data})}).catch(()=>{})}catch(err){}}
document.addEventListener("submit",e=>{
  if(e.target.id==="enqForm"){e.preventDefault();send(e.target);const n=e.target.institution.value;$("#enqBox").innerHTML=`<p class="tip"><b>Enquiry sent.</b> ${esc(n)} will contact you soon.</p>`;toast("Enquiry sent");return}
  if(e.target.id==="bizForm"){e.preventDefault();const f=e.target,n=$("#b1").value.trim();send(f);closeLayer();toast(`Thanks! We’ll be in touch about ${n}.`)}
  if(e.target.matches("[data-news]")){e.preventDefault();send(e.target);const ok=e.target.parentElement.querySelector(".ok");if(ok)ok.hidden=false;e.target.reset()}
});

/* ---------- slider ---------- */
function initSlider(root){
  const track=$(".track",root),prev=$("[data-prev]",root),next=$("[data-next]",root),bar=$(".s-prog i",root);
  if(!track)return;
  const step=()=>{const c=track.children[0];return c?c.getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap||20):300};
  const upd=()=>{const max=track.scrollWidth-track.clientWidth;const r=max>0?track.scrollLeft/max:0;
    if(bar){const w=Math.max(12,track.clientWidth/track.scrollWidth*100);bar.style.width=w+"%";bar.style.transform=`translateX(${r*(100/w*100-100)}%)`}
    if(prev)prev.disabled=track.scrollLeft<4;if(next)next.disabled=track.scrollLeft>max-4};
  prev&&(prev.onclick=()=>track.scrollBy({left:-step(),behavior:"smooth"}));
  next&&(next.onclick=()=>track.scrollBy({left:step(),behavior:"smooth"}));
  track.addEventListener("scroll",upd,{passive:true});addEventListener("resize",upd);setTimeout(upd,50);
  let down=false,sx=0,sl=0,moved=0;
  track.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse")return;down=true;moved=0;sx=e.clientX;sl=track.scrollLeft});
  addEventListener("pointermove",e=>{if(!down)return;const dx=e.clientX-sx;moved=Math.abs(dx);if(moved>6)track.classList.add("drag");track.scrollLeft=sl-dx});
  addEventListener("pointerup",()=>{if(!down)return;down=false;if(track.classList.contains("drag")){
    track.classList.remove("drag");const s=step();track.scrollTo({left:Math.round(track.scrollLeft/s)*s,behavior:"smooth"})}});
  track.addEventListener("click",e=>{if(moved>6){e.stopPropagation();e.preventDefault();moved=0}},true);
  autoplay(track);
}

/* ---------- autoplay: every swipe row moves by itself every 3 seconds ----------
   Pauses for 8 s after the visitor swipes, drags, clicks an arrow or uses the keyboard,
   while the row is off screen or the tab is hidden, and never runs with reduced motion. */
const AUTO_MS=3000;
function autoplay(row){
  if(!row||row.dataset.auto||RM)return;row.dataset.auto=1;
  let hold=0,visible=true;
  const gap=()=>parseFloat(getComputedStyle(row).columnGap)||16;
  const step=()=>{const c=row.children[0];return c?c.getBoundingClientRect().width+gap():300};
  const pause=()=>{hold=Date.now()+8000};
  ["pointerdown","touchstart","wheel","keydown","focusin"].forEach(ev=>row.addEventListener(ev,pause,{passive:true}));
  const ctl=row.parentElement&&row.parentElement.querySelector(".arrows");if(ctl)ctl.addEventListener("click",pause);
  if("IntersectionObserver" in window)new IntersectionObserver(es=>{visible=es[0].isIntersecting},{threshold:.25}).observe(row);
  setInterval(()=>{
    if(document.hidden||!visible||Date.now()<hold||row.classList.contains("drag"))return;
    const max=row.scrollWidth-row.clientWidth;if(max<8)return;
    if(row.scrollLeft>=max-8)row.scrollTo({left:0,behavior:"smooth"});
    else row.scrollBy({left:step(),behavior:"smooth"});
  },AUTO_MS);
}
function sliderControls(){return `<div class="s-ctrl"><div class="s-prog"><i></i></div><div class="arrows"><button data-prev aria-label="Previous">${arrowL}</button><button data-next aria-label="Next">${arrowR}</button></div></div>`}

/* ---------- effects ---------- */
function splitWords(el){if(!el||el.dataset.split)return;el.dataset.split=1;
  const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();
    c.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){f.appendChild(document.createTextNode(w));return}
      const o=document.createElement("span");o.className="w";const i=document.createElement("span");i.textContent=w;o.appendChild(i);f.appendChild(o)});
    c.replaceWith(f)}else if(c.nodeType===1&&!c.classList.contains("w"))walk(c)})};
  walk(el);el.classList.add("split");$$(".w > span",el).forEach((s,i)=>s.style.transitionDelay=(i*.07)+"s")}
function playSplit(el){requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add("in")))}
function initReveal(){
  if(!("IntersectionObserver" in window)||RM)return;
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.remove("pre");
    $$(".split:not(.in)",en.target).forEach(playSplit);io.unobserve(en.target)}}),{rootMargin:"0px 0px -10% 0px"});
  $$(".rv,.clip").forEach(el=>{if(el.getBoundingClientRect().top>innerHeight*.9){el.classList.add("pre");io.observe(el)}else $$(".split",el).forEach(playSplit)});
  $$(".sec-head h2").forEach(h=>{splitWords(h);const host=h.closest(".rv,.clip");if(!host||!host.classList.contains("pre"))playSplit(h)});
}
function initCursor(){
  if(RM||!matchMedia("(pointer:fine)").matches)return;
  const c=document.createElement("div");c.className="cursor";document.body.appendChild(c);
  let x=innerWidth/2,y=innerHeight/2,cx=x,cy=y;
  addEventListener("pointermove",e=>{x=e.clientX;y=e.clientY;c.classList.add("live");const t=e.target;
    c.classList.toggle("view",!!t.closest(".card,.gem,.post-card,.hood,.tile,.next-read,.fs"));
    c.classList.toggle("big",!c.classList.contains("view")&&!!t.closest("a,button,select,input,textarea,.chip"))});
  (function loop(){cx+=(x-cx)*.2;cy+=(y-cy)*.2;c.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;requestAnimationFrame(loop)})();
  document.addEventListener("mouseleave",()=>c.classList.remove("live"));
}
function initMagnetic(){
  if(RM||!matchMedia("(pointer:fine)").matches)return;
  document.addEventListener("pointermove",e=>{const b=e.target.closest(".btn,.arrows button,.fs-nav button");
    $$(".mag").forEach(m=>{if(m!==b){m.style.transform="";m.classList.remove("mag")}});
    if(!b)return;const r=b.getBoundingClientRect();b.classList.add("mag");
    b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.25}px)`});
}
function preloader(){
  if(RM)return;let seen=false;try{seen=sessionStorage.getItem("doon_loaded")}catch{}
  if(seen)return;try{sessionStorage.setItem("doon_loaded",1)}catch{}
  const l=document.createElement("div");l.className="loader";
  l.innerHTML=`<div class="lw"><span>Doon <i>Dekho</i></span></div><div class="bar"></div>`;
  document.body.appendChild(l);setTimeout(()=>l.classList.add("done"),1300);setTimeout(()=>l.remove(),2400);
  return 1300;
}

function autoRows(){$$(".tiles,.hoods").forEach(autoplay)}
window.Doon={credit,placeURL,slugify,autoplay,card,ad,SUBMAP,subOf,sectionOf,listFor,countFor,countSection,$,$$,ph,phIn,hue,inr,esc,sync,saved:()=>saved,initSlider,sliderControls,splitWords,playSplit,toast,arrowL,arrowR,heart,
  start(opts={}){const delay=opts.preloader?preloader()||0:0;sync();$$(".slider").forEach(initSlider);autoRows();initCursor();initMagnetic();
    setTimeout(()=>{initReveal();opts.onReady&&opts.onReady()},delay?delay-300:0)}};
})();
