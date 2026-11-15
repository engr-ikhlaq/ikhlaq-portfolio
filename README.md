# Muhammad Ikhlaq Wahid — Portfolio Website

A fast, SEO-optimised personal portfolio for Muhammad Ikhlaq Wahid, SEO Specialist
(Technical SEO, On-Page & Off-Page SEO, Link Building, AEO & GEO, WordPress SEO, Web Scraping).

## Files

| File | What it does |
|---|---|
| `index.html` | Whole site: hero, About, Services, Skills, Experience, Projects, Contact |
| `styles.css` | Light cream design, black-and-white photo, notepad-style rotating skill |
| `script.js` | Rotates the skill in the hero every 2.6 seconds |
| `images/ikhlaq-wahid-seo-specialist.png` | His photo (shown black-and-white with CSS) |
| `robots.txt` | Lets Google crawl the site |
| `sitemap.xml` | Tells Google the site's pages — submit in Google Search Console |

## SEO built in

- Keyword-rich `<title>`, meta description and headings for every skill:
  Technical SEO, On-Page SEO, Off-Page SEO, Link Building, Guest Posting,
  Outreach Automation, AEO, GEO, Keyword Research, SEO Content, WordPress SEO,
  Web Scraping, "SEO Specialist Islamabad / Pakistan"
- Open Graph + Twitter cards (nice previews when the link is shared)
- JSON-LD `Person` schema with `knowsAbout`, `sameAs` (LinkedIn, Workar, Facebook),
  job title and education — helps Google show a rich result
- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`),
  descriptive alt text on the photo, canonical URL, sitemap + robots.txt
- Fast: no frameworks, no heavy images, system fonts

Honest note: no website can *guarantee* position #1 for every keyword —
ranking also depends on competition, backlinks and time. This code gives you
the full on-page foundation; next steps are: submit the sitemap in
Google Search Console, link the site from LinkedIn / Workar / Facebook,
and add a blog post or two per month targeting one keyword each.

## Before you deploy — change 2 things

1. **Domain:** the code uses `https://ikhlaqwahid.com/` in the canonical URL,
   Open Graph tags, JSON-LD and `sitemap.xml`. Replace it with your real domain
   (search the files for `ikhlaqwahid.com`).
2. **Prices/links:** service prices and Workar gig links are current as of
   15 Nov 2026 — update them if a price changes.

## Deploy — recommended: Vercel (free)

Vercel is the better pick for this site: free for personal sites, deploys in
under a minute, automatic HTTPS + custom domain, and it is built for static
sites like this one. Netlify is equally good and just as free — use it if you
already have an account there.

**Vercel, drag-and-drop (easiest, no account setup beyond sign-up):**
1. Go to https://vercel.com and sign up (GitHub / Google / email).
2. Dashboard → **Add New → Project →** upload this folder (or drag it onto
   the dashboard). No build command, no settings to change — it is a static site.
3. Click **Deploy**. You get a live link like `ikhlaq-portfolio.vercel.app`.
4. Add your domain: Project → **Settings → Domains** → add your domain and
   follow the DNS steps Vercel shows.
5. Submit `https://yourdomain.com/sitemap.xml` in Google Search Console.

**Netlify (alternative):**
1. Go to https://app.netlify.com/drop and drag this folder onto the page.
2. You get a live link instantly; add a custom domain under
   **Site settings → Domain management**.

## Local preview

```bash
cd ikhlaq-portfolio
python3 -m http.server 8000
# open http://localhost:8000
```
