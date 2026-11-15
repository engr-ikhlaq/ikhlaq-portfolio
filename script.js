// Rotating skills — cycles through Ikhlaq's core skills
// in the hero, like the reference site's rotating job title.
const skills = [
  "SEO Specialist",
  "Technical SEO Expert",
  "On-Page SEO Expert",
  "Link Building Expert",
  "AEO & GEO Specialist",
  "Outreach Automation Expert",
  "Keyword Researcher",
  "WordPress SEO Expert"
];

const el = document.getElementById("rotating-skill");
let i = 0;

setInterval(() => {
  i = (i + 1) % skills.length;
  el.textContent = skills[i];
  // restart the flip animation
  el.style.animation = "none";
  void el.offsetWidth; // reflow
  el.style.animation = "";
}, 2600);
