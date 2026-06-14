# Noshoot.agency — Next.js Conversion Design Spec
**Date:** 2026-06-15  
**Status:** Approved

---

## What We're Building

Convert the single-file `noshoot-website.html` into a production-ready Next.js project at `D:\NoShoot.agency`, deployable to Vercel via GitHub. The visual design must be preserved exactly — pixel-perfect port, no redesign.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js (Pages Router) | Website framework |
| Tailwind CSS | Styling utility classes |
| Formspree (free tier) | Contact form submissions → email |
| GitHub | Code storage + version history |
| Vercel | Hosting + auto-deploy on push |
| next/font/google | Load Barlow Condensed + DM Sans |

---

## Folder Structure

```
D:\NoShoot.agency\
├── pages/
│   ├── _app.jsx            — imports globals.css, loads fonts
│   ├── _document.jsx       — SEO meta tags, OG image, Twitter card
│   ├── index.jsx           — homepage: assembles all components
│   └── work/
│       └── [slug].jsx      — case study shell (empty for now)
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Marquee.jsx
│   ├── Services.jsx
│   ├── Work.jsx
│   ├── WorkCard.jsx
│   ├── Contact.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── styles/
│   └── globals.css         — CSS variables + keyframe animations only
├── public/
│   └── favicon.ico
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── package.json
```

---

## Brand Tokens (in tailwind.config.js)

```js
colors: {
  brand: {
    black: '#0C0C0C',
    white: '#F8F7F3',
    red:   '#E8300A',
    muted: '#8A8A82',
    card:  '#EDECE8',
  }
}
```

---

## Components

### Nav.jsx
- Fixed top bar, full width
- Left: logo `NO.SHOOT` (dot in red)
- Center: links — What we make / Work / Contact
- Right: "Start a project →" pill button (black → red on hover)
- Mobile: hide nav links, keep logo + CTA

### Hero.jsx
- Full viewport height, content pinned to bottom-left
- Eyebrow: "Creative agency · noshoot.agency"
- Giant display text: "NO" on first line, "SHOOT" on second with red strikethrough animation
- Below: tagline left, stats (0 cameras / 100% results) right
- Scroll hint: animated vertical line + "SCROLL" label

### Marquee.jsx
- Single scrolling ticker row
- Text: "Brand identity × Social content × Motion graphics × Campaign visuals × Content templates × AI-powered creative" (repeated)
- Red `×` separators
- Continuous CSS animation (`marquee` keyframe)

### Services.jsx
- Section label: "What we make"
- Header: headline left, description right
- Four service rows (grid: name / tag pill / description)
- Hover: service name turns red

### Work.jsx + WorkCard.jsx
- Dark background section
- Headline: "No cameras. Real results."
- 3-card grid: one tall card (left), two stacked (right)
- Each card: gradient background, large symbol, category + title overlay
- Hover: card background scales up slightly

### Contact.jsx + ContactForm.jsx
- Two-column layout: copy left, form right
- Headline: "Let's make something without the shoot." (without = red)
- Contact links: Instagram + email with red dot indicators
- Form fields: Name, Email, Brand name, Service dropdown, Project details textarea
- Submit button: black pill → red on hover
- On success: hide form, show "Got it — we'll be in touch within 24 hours."
- Formspree endpoint: `https://formspree.io/f/YOUR_FORM_ID` (user replaces ID)

### Footer.jsx
- Three columns: logo / copyright / links (Instagram + Email)
- Mobile: stacks vertically, centered

---

## Animations (globals.css only)

```css
@keyframes strikeIn {
  from { width: 0; left: 0; }
  to   { width: 102%; left: -1%; }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50%       { opacity: 1; transform: scaleY(0.6); }
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

---

## SEO / Meta Tags (_document.jsx)

```
Title:       Noshoot — No cameras. Just results.
Description: Creative agency making brand content, social media, and campaign visuals without traditional photography shoots.
OG image:    /og-image.png
Twitter:     summary_large_image
```

---

## Deployment Flow

1. Scaffold project locally at `D:\NoShoot.agency`
2. `git init` → create GitHub repo → push
3. Connect Vercel to GitHub repo
4. Every future `git push` auto-deploys to live site

---

## What the User Needs to Do Manually

1. Create a free Formspree account at formspree.io → copy their Form ID → paste into `ContactForm.jsx`
2. Create a GitHub repo and push the code (commands provided step by step)
3. Connect Vercel to the GitHub repo (guided walkthrough)
4. Point `noshoot.agency` domain to Vercel (DNS settings walkthrough)

---

## Out of Scope (Phase 2+)

- Real case study content at `/work/[slug]`
- CMS integration (Notion / Contentlayer)
- Instagram feed embed
- Pricing page
- Client portal
