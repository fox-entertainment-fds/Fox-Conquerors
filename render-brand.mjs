import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";

const SANS = readFileSync("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf").toString("base64");

const fontFace = `
@font-face {
  font-family: "Mark";
  src: url("data:font/ttf;base64,${SANS}") format("truetype");
  font-weight: 700;
  font-style: normal;
}
* { margin: 0; padding: 0; }
html, body { background: #101614; }
`;

const ogHtml = `<!doctype html><html><head><style>${fontFace}</style></head><body>
<svg id="s" width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#101614"/>
  <defs>
    <radialGradient id="dusk" cx="50%" cy="62%" r="55%">
      <stop offset="0%" stop-color="#d4654a" stop-opacity="0.55"/>
      <stop offset="42%" stop-color="#ff6a00" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#101614" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a2420"/>
      <stop offset="100%" stop-color="#101614"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#dusk)"/>
  <circle cx="978" cy="132" r="74" fill="#d4654a"/>
  <circle cx="978" cy="132" r="46" fill="#ff6a00"/>
  <circle cx="958" cy="114" r="14" fill="#e7eee9" opacity="0.35"/>

  <!-- atoll ring -->
  <path d="M80 470 C240 400 420 386 600 392 C800 398 980 430 1140 488 L1140 520 C960 458 760 440 600 444 C400 448 220 470 60 528 Z" fill="#1a2420"/>
  <path d="M120 468 C280 412 460 402 600 406 C790 412 980 444 1100 490" fill="none" stroke="#e0b15a" stroke-width="6"/>

  <!-- palms -->
  <g fill="#0c1411">
    <rect x="78" y="360" width="10" height="120"/>
    <polygon points="83,368 20,332 70,350"/>
    <polygon points="83,360 40,300 78,340"/>
    <polygon points="83,356 130,300 96,342"/>
    <polygon points="83,364 150,340 100,352"/>
    <rect x="1094" y="332" width="10" height="130"/>
    <polygon points="1099,340 1030,292 1078,322"/>
    <polygon points="1099,330 1060,268 1090,314"/>
    <polygon points="1099,328 1168,286 1112,318"/>
    <polygon points="1099,338 1176,330 1116,346"/>
  </g>

  <!-- water -->
  <rect x="0" y="500" width="1200" height="130" fill="url(#water)"/>
  <g fill="none" stroke="#e7eee9" stroke-width="3" opacity="0.28">
    <path d="M0 540 l40 -14 40 14 40 -14 40 14 40 -14 40 14 40 -14 40 14 40 -14 40 14 40 -14 40 14 40 -14 40 14 40 -14 40 14 40 -14 40 14 40 -14 40 14 40 -14 40 14"/>
    <path d="M0 582 l50 -12 50 12 50 -12 50 12 50 -12 50 12 50 -12 50 12 50 -12 50 12 50 -12 50 12 50 -12 50 12"/>
  </g>
  <g fill="#d4654a" opacity="0.85">
    <rect x="966" y="518" width="16" height="22"/>
    <rect x="990" y="548" width="12" height="18"/>
    <rect x="1006" y="578" width="8" height="14"/>
  </g>

  <!-- fox crest framing the lockup -->
  <g id="crest">
    <polygon points="150,214 292,34 438,198" fill="#ff6a00"/>
    <polygon points="214,188 294,78 392,180" fill="#d4654a"/>
    <polygon points="1050,214 908,34 762,198" fill="#ff6a00"/>
    <polygon points="986,188 906,78 808,180" fill="#d4654a"/>
    <polygon points="168,210 1032,210 1088,455 600,575 112,455" fill="#ff6a00"/>
    <polygon points="600,210 1032,210 1088,455 600,500" fill="#d4654a"/>
    <polygon points="455,468 745,468 600,575" fill="#e7eee9"/>
    <polygon points="568,530 632,530 600,566" fill="#101614"/>
    <polygon points="156,348 198,326 214,368 172,390" fill="#101614"/>
    <polygon points="1044,348 1002,326 986,368 1028,390" fill="#101614"/>
    <polygon points="300,548 900,548 852,630 348,630" fill="#ff6a00"/>
    <rect x="292" y="534" width="86" height="22" fill="#e0b15a"/>
    <rect x="822" y="534" width="86" height="22" fill="#e0b15a"/>
    <rect x="318" y="540" width="22" height="10" fill="#101614"/>
    <rect x="860" y="540" width="22" height="10" fill="#101614"/>
  </g>

  <!-- gunboat, grounded on the bottom edge -->
  <polygon points="250,588 950,588 900,630 300,630" fill="#0c1210"/>
  <rect x="250" y="582" width="700" height="8" fill="#e0b15a"/>
  <polygon points="600,582 632,548 568,548" fill="#ff6a00"/>
  <rect x="596" y="520" width="8" height="30" fill="#e0b15a"/>

  <path id="scrim" fill="#101614" stroke="#e0b15a" stroke-width="3"/>

  <text id="fox-shadow" font-family="Mark" font-weight="700" fill="#3a2a12" text-anchor="middle">FOX</text>
  <text id="con-shadow" font-family="Mark" font-weight="700" fill="#3a2a12" text-anchor="middle">CONQUEROR</text>
  <text id="fox" font-family="Mark" font-weight="700" fill="#e0b15a" stroke="#e7eee9" stroke-width="6" paint-order="stroke fill" text-anchor="middle">FOX</text>
  <text id="con" font-family="Mark" font-weight="700" fill="#e0b15a" stroke="#e7eee9" stroke-width="4" paint-order="stroke fill" text-anchor="middle">CONQUEROR</text>
  <polygon id="jewel" points="0,0 0,0 0,0" fill="#e0b15a"/>
</svg>
</body></html>`;

const bannerHtml = `<!doctype html><html><head><style>${fontFace}</style></head><body>
<svg id="s" width="1200" height="264" viewBox="0 0 1200 264" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="264" fill="#101614"/>
  <defs>
    <radialGradient id="dusk" cx="78%" cy="40%" r="45%">
      <stop offset="0%" stop-color="#d4654a" stop-opacity="0.7"/>
      <stop offset="55%" stop-color="#ff6a00" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#101614" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="264" fill="url(#dusk)"/>
  <circle cx="1048" cy="74" r="40" fill="#d4654a"/>
  <circle cx="1048" cy="74" r="24" fill="#ff6a00"/>

  <g transform="translate(0,20)">
  <path d="M520 168 C680 132 860 128 1040 150 L1180 168 L1180 196 L520 196 Z" fill="#1a2420"/>
  <path d="M560 166 C740 138 920 140 1100 164" fill="none" stroke="#e0b15a" stroke-width="4"/>

  <g fill="#0c1411">
    <rect x="1112" y="96" width="7" height="78"/>
    <polygon points="1115,100 1068,78 1104,94"/>
    <polygon points="1115,94 1084,60 1108,88"/>
    <polygon points="1115,96 1164,70 1126,92"/>
  </g>

  <rect x="0" y="176" width="1200" height="88" fill="#15211c"/>
  <g fill="none" stroke="#e7eee9" stroke-width="2" opacity="0.3">
    <path d="M0 206 l36 -10 36 10 36 -10 36 10 36 -10 36 10 36 -10 36 10 36 -10 36 10 36 -10 36 10 36 -10 36 10 36 -10 36 10 36 -10 36 10 36 -10"/>
    <path d="M0 236 l48 -8 48 8 48 -8 48 8 48 -8 48 8 48 -8 48 8 48 -8 48 8 48 -8 48 8"/>
  </g>
  </g>

  <!-- gunboat and fox sit just right of the lockup; far-right palms can fall under feed chrome -->
  <g transform="translate(-40,20)">
  <polygon points="600,184 1028,176 990,230 640,236" fill="#0c1210"/>
  <polygon points="600,184 1028,176 1004,190 628,198" fill="#e0b15a"/>
  <rect x="820" y="118" width="8" height="66" fill="#e0b15a"/>
  <polygon points="828,118 888,136 828,148" fill="#ff6a00"/>
  <rect x="748" y="150" width="70" height="34" fill="#101614"/>
  <rect x="760" y="160" width="22" height="8" fill="#ff6a00"/>

  <!-- geometric fox admiral -->
  <g>
    <polygon points="668,118 700,62 734,118" fill="#ff6a00"/>
    <polygon points="734,118 766,62 798,118" fill="#ff6a00"/>
    <polygon points="684,112 700,82 716,112" fill="#d4654a"/>
    <polygon points="750,112 766,82 782,112" fill="#d4654a"/>
    <polygon points="656,116 810,116 792,176 674,176" fill="#ff6a00"/>
    <polygon points="733,116 810,116 792,176 748,168" fill="#d4654a"/>
    <polygon points="700,150 766,150 733,174" fill="#e7eee9"/>
    <polygon points="724,162 742,162 733,172" fill="#101614"/>
    <polygon points="678,132 694,126 700,140 684,146" fill="#101614"/>
    <polygon points="788,132 772,126 766,140 782,146" fill="#101614"/>
    <rect x="652" y="168" width="36" height="12" fill="#e0b15a"/>
    <rect x="778" y="168" width="36" height="12" fill="#e0b15a"/>
    <rect x="690" y="176" width="16" height="22" fill="#101614"/>
    <rect x="760" y="176" width="16" height="22" fill="#101614"/>
    <polygon points="656,150 612,186 668,170" fill="#d4654a"/>
  </g>
  </g>

  <text id="fox-shadow" font-family="Mark" font-weight="700" fill="#3a2a12" text-anchor="start">FOX</text>
  <text id="con-shadow" font-family="Mark" font-weight="700" fill="#3a2a12" text-anchor="start">CONQUEROR</text>
  <text id="fox" font-family="Mark" font-weight="700" fill="#e0b15a" stroke="#e7eee9" stroke-width="4" paint-order="stroke fill" text-anchor="start">FOX</text>
  <text id="con" font-family="Mark" font-weight="700" fill="#e0b15a" stroke="#e7eee9" stroke-width="3" paint-order="stroke fill" text-anchor="start">CONQUEROR</text>
  <rect id="rule" height="3" fill="#e0b15a"/>
  <polygon id="d1" fill="#ff6a00"/>
  <polygon id="d2" fill="#e0b15a"/>
  <polygon id="d3" fill="#ff6a00"/>
</svg>
</body></html>`;

function bboxScript(id) {
  return `(() => { const e = document.getElementById(${JSON.stringify(id)}); const b = e.getBBox(); return { x: b.x, y: b.y, width: b.width, height: b.height }; })()`;
}

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

async function measure(id) {
  return page.evaluate(bboxScript(id));
}

// --- OG card ---
await page.setContent(ogHtml, { waitUntil: "load" });
let foxSize = 150;
let conSize = 72;
for (let i = 0; i < 5; i++) {
  await page.evaluate(({ foxSize, conSize }) => {
    for (const id of ["fox", "fox-shadow"]) {
      const n = document.getElementById(id);
      n.setAttribute("font-size", foxSize);
      n.setAttribute("letter-spacing", String(Math.round(foxSize * 0.04)));
    }
    for (const id of ["con", "con-shadow"]) {
      const n = document.getElementById(id);
      n.setAttribute("font-size", conSize);
      n.setAttribute("letter-spacing", String(Math.round(conSize * 0.08)));
    }
  }, { foxSize, conSize });
  const fox = await measure("fox");
  const con = await measure("con");
  foxSize *= 560 / fox.width;
  conSize *= 700 / con.width;
}
await page.evaluate(({ foxSize, conSize }) => {
  const setSize = (id, size, tracking) => {
    const n = document.getElementById(id);
    n.setAttribute("font-size", size);
    n.setAttribute("letter-spacing", String(Math.round(tracking)));
    n.setAttribute("x", "600");
  };
  setSize("fox", foxSize, foxSize * 0.04);
  setSize("fox-shadow", foxSize, foxSize * 0.04);
  setSize("con", conSize, conSize * 0.08);
  setSize("con-shadow", conSize, conSize * 0.08);
  document.getElementById("fox").setAttribute("y", "320");
  document.getElementById("con").setAttribute("y", "450");
}, { foxSize, conSize });

const placed = await page.evaluate(() => {
  const box = (id) => {
    const b = document.getElementById(id).getBBox();
    return { x: b.x, y: b.y, width: b.width, height: b.height };
  };
  const gap = 22;
  let fox = box("fox");
  let con = box("con");
  const blockH = fox.height + gap + con.height;
  const top = (630 - blockH) / 2;
  const foxNode = document.getElementById("fox");
  const conNode = document.getElementById("con");
  const foxY = Number(foxNode.getAttribute("y")) + (top - fox.y);
  foxNode.setAttribute("y", String(foxY));
  fox = box("fox");
  const conTop = fox.y + fox.height + gap;
  con = box("con");
  const conY = Number(conNode.getAttribute("y")) + (conTop - con.y);
  conNode.setAttribute("y", String(conY));
  fox = box("fox");
  con = box("con");
  const shift = 5;
  for (const [id, y] of [["fox-shadow", foxY + shift], ["con-shadow", conY + shift]]) {
    const n = document.getElementById(id);
    n.setAttribute("y", String(y));
    n.setAttribute("x", "604");
  }
  const padX = 36;
  const padY = 26;
  const left = Math.min(fox.x, con.x) - padX;
  const right = Math.max(fox.x + fox.width, con.x + con.width) + padX;
  const t = fox.y - padY;
  const btm = con.y + con.height + padY;
  const cut = 16;
  const d = [
    [left + cut, t],
    [right - cut, t],
    [right, t + cut],
    [right, btm - cut],
    [right - cut, btm],
    [left + cut, btm],
    [left, btm - cut],
    [left, t + cut],
  ].map((p) => p.join(",")).join(" ");
  document.getElementById("scrim").setAttribute("d", `M${d}Z`);
  const midY = (fox.y + fox.height + con.y) / 2;
  const j = 7;
  document.getElementById("jewel").setAttribute("points", `600,${midY - j} ${600 + j},${midY} 600,${midY + j} ${600 - j},${midY}`);
  return { fox, con, foxSize: foxNode.getAttribute("font-size"), conSize: conNode.getAttribute("font-size"), scrim: { left, right, t, btm } };
});
console.log("OG", JSON.stringify(placed));
await page.screenshot({ path: "/workspace/.grok/og-card.png", type: "png" });

// --- banner ---
await page.setViewportSize({ width: 1200, height: 264 });
await page.setContent(bannerHtml, { waitUntil: "load" });
foxSize = 78;
conSize = 34;
for (let i = 0; i < 6; i++) {
  await page.evaluate(({ foxSize, conSize }) => {
    for (const id of ["fox", "fox-shadow"]) {
      const n = document.getElementById(id);
      n.setAttribute("font-size", foxSize);
      n.setAttribute("letter-spacing", "3");
    }
    for (const id of ["con", "con-shadow"]) {
      const n = document.getElementById(id);
      n.setAttribute("font-size", conSize);
      n.setAttribute("letter-spacing", "7");
    }
  }, { foxSize, conSize });
  const fox = await measure("fox");
  const con = await measure("con");
  const blockH = fox.height + 6 + con.height;
  const scale = Math.min(450 / Math.max(fox.width, con.width), 150 / blockH);
  if (scale > 0.985 && scale < 1.015) break;
  foxSize *= scale;
  conSize *= scale;
}
const bannerPlaced = await page.evaluate(({ foxSize, conSize }) => {
  const box = (id) => {
    const b = document.getElementById(id).getBBox();
    return { x: b.x, y: b.y, width: b.width, height: b.height };
  };
  const apply = (id, size, tracking) => {
    const n = document.getElementById(id);
    n.setAttribute("font-size", size);
    n.setAttribute("letter-spacing", String(tracking));
    n.setAttribute("x", id.includes("shadow") ? "56" : "52");
  };
  apply("fox", foxSize, 3);
  apply("fox-shadow", foxSize, 3);
  apply("con", conSize, 7);
  apply("con-shadow", conSize, 7);
  document.getElementById("fox").setAttribute("y", "80");
  document.getElementById("con").setAttribute("y", "120");
  let fox = box("fox");
  let con = box("con");
  const gap = 6;
  const top = 28;
  const foxNode = document.getElementById("fox");
  const foxY = Number(foxNode.getAttribute("y")) + (top - fox.y);
  foxNode.setAttribute("y", String(foxY));
  fox = box("fox");
  const conNode = document.getElementById("con");
  const conTop = fox.y + fox.height + gap;
  con = box("con");
  const conY = Number(conNode.getAttribute("y")) + (conTop - con.y);
  conNode.setAttribute("y", String(conY));
  fox = box("fox");
  con = box("con");
  document.getElementById("fox-shadow").setAttribute("y", String(foxY + 3));
  document.getElementById("con-shadow").setAttribute("y", String(conY + 3));
  const ruleY = con.y + con.height + 8;
  const ruleW = Math.max(fox.width, con.width);
  const rule = document.getElementById("rule");
  rule.setAttribute("x", "52");
  rule.setAttribute("y", String(Math.min(ruleY, 158)));
  rule.setAttribute("width", String(Math.min(ruleW, 460)));
  const showMark = ruleY + 16 < 170;
  const dy = showMark ? ruleY + 12 : -40;
  const diamonds = [18, 36, 54];
  ["d1", "d2", "d3"].forEach((id, i) => {
    const x = 52 + diamonds[i];
    const y = dy;
    document.getElementById(id).setAttribute("points", `${x},${y - 4} ${x + 4},${y} ${x},${y + 4} ${x - 4},${y}`);
  });
  return { fox, con, ruleY, mark: showMark, foxSize, conSize };
}, { foxSize, conSize });
console.log("BANNER", JSON.stringify(bannerPlaced));
await page.screenshot({ path: "/workspace/.grok/x-banner.png", type: "png" });

await browser.close();
