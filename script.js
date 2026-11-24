// Hero particle network — irank.online style plexus: slow-drifting lavender
// nodes joined by faint lines, mouse grabs nearby nodes with a lime cursor node.
(function () {
  const canvas = document.getElementById("hero-net");
  const hero = document.querySelector(".hero");
  if (!canvas || !hero) return;
  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LINK_DIST = 130, MOUSE_DIST = 140;
  let particles = [], w = 0, h = 0, dpr = 1, mouse = null, running = false, raf = null;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.offsetWidth; h = hero.offsetHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(70, Math.min(220, Math.round((w * h) / 7500)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1.2 + Math.random() * 1.6,
      lime: Math.random() < 0.08
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (!reduced) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
        if (d < LINK_DIST) {
          ctx.strokeStyle = "rgba(178,121,228," + (0.22 * (1 - d / LINK_DIST)).toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      if (mouse) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < MOUSE_DIST) {
          ctx.strokeStyle = "rgba(163,230,53," + (0.5 * (1 - d / MOUSE_DIST)).toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      ctx.fillStyle = p.lime ? "#a3e635" : "#b279e4";
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
    if (mouse) {
      ctx.fillStyle = "#a3e635";
      ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2); ctx.fill();
    }
    if (running) raf = requestAnimationFrame(draw);
  }

  function start() { if (!running) { running = true; draw(); } }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); }

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  });
  hero.addEventListener("mouseleave", () => { mouse = null; });
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop(); else start();
  });
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) start(); else stop(); });
  }, { threshold: 0 }).observe(hero);

  resize();
  start();
})();

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
