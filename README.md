# MADZ — Madsonz Ads & Marketing Pvt. Ltd. Website

A modern, responsive, SEO-friendly 5-page website for MADZ, a digital marketing agency serving startups and mid-size brands.

## 🚀 Quick Start

No build tools required — this is a static HTML/CSS/JS site.

1. Download / clone this folder.
2. Open `index.html` directly in a browser, **or** serve it locally:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```
3. Push to GitHub and deploy free on **GitHub Pages**, Netlify, or Vercel — no server-side code needed.

## 📁 Project Structure

```
madz-website/
├── index.html          Home (Hero, About, Why Us, Services, Process, Testimonials, Team, FAQ, Contact, Footer)
├── about.html           About Us (Story, Mission/Vision/Values, Milestones, Full Team)
├── services.html        Services (SEO, Paid Media, Social, Branding, Web, Automation)
├── faq.html              FAQ (categorized accordion: General / Services / Pricing / Reporting)
├── contact.html          Contact (form, map, office info, WhatsApp, socials)
├── css/style.css         Shared design system + components + responsive rules
├── js/main.js            Dark mode, mobile nav, scroll reveal, accordion, back-to-top, form validation
├── assets/images/        Drop real photography/logo files here (see notes below)
├── robots.txt
├── sitemap.xml
└── README.md
```

## 🎨 Design System

| Token | Hex | Use |
|---|---|---|
| Ink | `#0E0E10` | Primary text / dark backgrounds |
| Paper | `#F4F2EC` | Light background |
| Proof Red | `#E1401F` | Primary accent, CTAs |
| Signal Yellow | `#F5B942` | Secondary accent, highlights |
| Slate | `#6B6A63` | Muted text |

- **Display**: Big Shoulders Display (900) — headlines
- **Body**: IBM Plex Sans — paragraphs, UI copy
- **Utility**: IBM Plex Mono — labels, eyebrows, form labels, stats

All fonts load from Google Fonts CDN in the `<head>` of every page — no local font files needed.

## ✅ Technical Features

- Fully responsive (mobile / tablet / desktop breakpoints at 1080px, 860px, 640px)
- Dark mode toggle with `localStorage` persistence + system preference detection
- Scroll-triggered reveal animations via `IntersectionObserver`
- Back-to-top floating button
- Sticky header with scroll shadow
- Mobile hamburger nav
- FAQ accordions with single-open-at-a-time behavior
- Client-side form validation (required fields, email + phone patterns) — no external libraries
- WhatsApp floating chat button (update the phone number in every page's `float-stack`)
- Respects `prefers-reduced-motion`
- Visible keyboard focus states on all interactive elements

## 🖼️ Placeholder Visuals

This template uses **no external photography** — hero art, team avatars and icons are built from CSS gradients, inline SVG and initials to keep the project dependency-free and instantly previewable. Before launch:

1. Replace the hero panel (`.hero-panel` in `index.html`) with a real campaign visual or product shot.
2. Replace team `.team-photo` initials with real headshots (`<img>` tags, keep the descriptive `alt` text pattern already used elsewhere).
3. Add a real Open Graph image at `assets/images/og-cover.jpg` (1200×630px) and update the `og:image` meta tag on each page.
4. Swap the Google Maps embed `src` in `contact.html` with your real office address.

## 🔍 SEO Reference

| Page | Title Tag | Focus Keyword | Canonical |
|---|---|---|---|
| Home | MADZ \| Digital Marketing Agency for Startups & Growing Brands | digital marketing agency for startups | `/` |
| About | About MADZ \| Our Story, Mission & Team | about MADZ digital marketing agency | `/about.html` |
| Services | Services \| SEO, Paid Ads, Branding & Web Design \| MADZ | digital marketing services for startups | `/services.html` |
| FAQ | FAQ \| Pricing, Process & Contracts Explained \| MADZ | digital marketing agency FAQ | `/faq.html` |
| Contact | Contact MADZ \| Get a Free Marketing Consultation | contact digital marketing agency Kochi | `/contact.html` |

- Every page has a unique meta description under 160 characters, a single `<h1>`, and a logical `h2`–`h3` hierarchy per section.
- Organization, Service and FAQPage JSON-LD structured data are included on the relevant pages.
- Internal linking is built throughout: Home → Services/About/FAQ/Contact, Services → Contact, FAQ → Home/About/Contact.
- **Before launch:** replace `https://www.madz.in/` in every canonical, Open Graph and structured-data tag with your real production domain.

## 🔧 Things to Wire Up Before Going Live

- [ ] Replace placeholder phone number (`+91 98765 43210`) and WhatsApp link across all 5 pages
- [ ] Connect the contact form to a real backend (Formspree, Netlify Forms, your own API, etc.) — `js/main.js` currently only validates and shows a success message client-side
- [ ] Replace placeholder social links with real profile URLs
- [ ] Add real team photography and hero imagery
- [ ] Update the Google Maps embed with your actual office location
- [ ] Update `sitemap.xml` / `robots.txt` with your live domain

## 🧑‍💻 Code Quality Notes

- Vanilla HTML/CSS/JS — no build step, no framework lock-in, easy for any developer to maintain.
- CSS is organized into numbered sections (tokens → reset → components → responsive) with comments.
- JS is modular: each feature (theme, nav, reveal, accordion, form, back-to-top) is a self-contained block in `main.js`.
- Class names follow a consistent BEM-lite convention (`.card-grid`, `.service-card`, `.accordion-item`, etc.).
