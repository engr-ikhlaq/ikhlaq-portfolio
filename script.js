// Flip-book skills — one skill flips over to the next, like a notepad page.
const skills = [
  "SEO & Automation Expert",
  "Technical SEO Expert",
  "Outreach Automation Expert",
  "Python Automation Expert",
  "Link Building Expert",
  "AEO & GEO Specialist",
  "On-Page SEO Expert",
  "WordPress SEO Expert"
];

const el = document.getElementById("rotating-skill");
let i = 0;

setInterval(() => {
  const face = el.parentElement;
  face.classList.add("flipping");
  setTimeout(() => {
    i = (i + 1) % skills.length;
    el.textContent = skills[i];
    face.classList.remove("flipping");
  }, 320);
}, 2600);

// Animated stat counters in the hero.
const counters = document.querySelectorAll(".count");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const target = +entry.target.dataset.target;
    let current = 0;
    const step = () => {
      current += 1;
      if (current > target) current = target;
      entry.target.textContent = current;
      if (current < target) setTimeout(step, 120);
    };
    step();
    observer.unobserve(entry.target);
  });
}, { threshold: 0.6 });
counters.forEach((c) => observer.observe(c));

// Live automation console — typed demo of the outreach engine (simulated run).
const consoleEl = document.getElementById("console");
const lines = [
  { text: "$ python outreach-engine.py --niche seo --limit 50", cls: "cmd" },
  { text: "▸ Crawling guest-post targets with Selenium ......... done", cls: "" },
  { text: "✓ 50 prospects discovered · 47 emails verified · 0 duplicates", cls: "ok" },
  { text: "▸ Personalising 50 emails · sequencing follow-ups .... done", cls: "" },
  { text: "✓ 50 emails queued · send-time optimisation on", cls: "ok" },
  { text: "▸ Classifying replies .............................. done", cls: "" },
  { text: "✓ 12 replies · 3 hot leads flagged · follow-ups triggered", cls: "ok" },
  { text: "▸ Verifying placements · updating dashboard ......... done", cls: "" },
  { text: "✓ 4 links placed · dashboard updated · report ready", cls: "ok" },
  { text: "$ — pipeline complete. Next run scheduled in 24h.", cls: "warn" }
];

let lineIdx = 0;
function typeLine() {
  if (!consoleEl) return;
  if (lineIdx >= lines.length) {
    setTimeout(() => { consoleEl.textContent = ""; lineIdx = 0; typeLine(); }, 6000);
    return;
  }
  const span = document.createElement("span");
  span.className = lines[lineIdx].cls;
  span.textContent = lines[lineIdx].text + "\n";
  consoleEl.appendChild(span);
  lineIdx += 1;
  setTimeout(typeLine, lineIdx === 1 ? 900 : 750);
}

const consoleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeLine();
      consoleObserver.disconnect();
    }
  });
}, { threshold: 0.4 });
if (consoleEl) consoleObserver.observe(consoleEl);
