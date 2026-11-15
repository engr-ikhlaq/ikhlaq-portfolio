// Rotating skills — SEO + automation, cycles in the hero.
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
  i = (i + 1) % skills.length;
  el.textContent = skills[i];
  el.style.animation = "none";
  void el.offsetWidth; // reflow to restart the flip animation
  el.style.animation = "";
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
