# Noshoot.agency Next.js Conversion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the single-file `noshoot-website.html` into a production-ready Next.js project at `D:\NoShoot.agency`, deployable to Vercel via GitHub.

**Architecture:** Pages Router Next.js app with one component per page section. All brand styles live in Tailwind config as custom tokens. Keyframe animations stay in `globals.css` since Tailwind cannot express them natively. Formspree handles form submissions with no backend required.

**Tech Stack:** Next.js 14 (Pages Router), Tailwind CSS 3, Formspree, next/font/google (Barlow Condensed + DM Sans), GitHub, Vercel

**Note for beginner:** Every command below is typed into your terminal (PowerShell on Windows). Open it by pressing `Win + R`, typing `powershell`, and pressing Enter. Copy-paste each command exactly.

---

## File Map

| File | What it does |
|------|-------------|
| `pages/_app.jsx` | Wraps every page — loads fonts and global CSS |
| `pages/_document.jsx` | Sets page title, description, social sharing tags |
| `pages/index.jsx` | Homepage — imports and assembles all components |
| `pages/work/[slug].jsx` | Shell for future case study pages |
| `components/Nav.jsx` | Fixed navigation bar |
| `components/Hero.jsx` | Full-screen hero with strikethrough animation |
| `components/Marquee.jsx` | Scrolling ticker bar |
| `components/Services.jsx` | Four service rows |
| `components/Work.jsx` | Dark portfolio section |
| `components/WorkCard.jsx` | Individual portfolio card |
| `components/Contact.jsx` | Contact section layout |
| `components/ContactForm.jsx` | Form wired to Formspree |
| `components/Footer.jsx` | Footer bar |
| `styles/globals.css` | CSS variables + keyframe animations |
| `tailwind.config.js` | Brand colour tokens |

---

## Task 1: Scaffold the Next.js Project

**Files:**
- Creates: all project boilerplate files at `D:\NoShoot.agency`

- [ ] **Step 1: Open PowerShell and navigate to D: drive**

```powershell
cd D:\
```

Expected: prompt changes to `D:\>`

- [ ] **Step 2: Create the Next.js project**

```powershell
npx create-next-app@14 NoShoot.agency --js --no-app --no-src-dir --no-import-alias
```

When asked questions, answer:
- "Would you like to use TypeScript?" → No
- "Would you like to use ESLint?" → Yes
- "Would you like to use Tailwind CSS?" → Yes
- "Would you like to use `src/` directory?" → No
- "Would you like to use App Router?" → No
- "Would you like to customize the default import alias?" → No

Expected: Project created. You'll see "Success! Created NoShoot.agency"

- [ ] **Step 3: Enter the project folder**

```powershell
cd "NoShoot.agency"
```

- [ ] **Step 4: Verify it works**

```powershell
npm run dev
```

Open your browser and go to `http://localhost:3000` — you should see the default Next.js welcome page.

Press `Ctrl + C` in PowerShell to stop the server.

- [ ] **Step 5: Commit**

```powershell
git add .
git commit -m "feat: scaffold Next.js project"
```

---

## Task 2: Configure Tailwind with Brand Tokens

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Replace tailwind.config.js with brand tokens**

Open `D:\NoShoot.agency\tailwind.config.js` and replace its entire contents with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0C0C0C',
          white: '#F8F7F3',
          red:   '#E8300A',
          muted: '#8A8A82',
          card:  '#EDECE8',
        },
      },
      fontFamily: {
        condensed: ['var(--font-barlow)', 'sans-serif'],
        sans:      ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Commit**

```powershell
git add tailwind.config.js
git commit -m "feat: add brand colour tokens to Tailwind config"
```

---

## Task 3: Set Up globals.css

**Files:**
- Modify: `styles/globals.css`

- [ ] **Step 1: Replace globals.css**

Open `D:\NoShoot.agency\styles\globals.css` and replace its entire contents with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --black:  #0C0C0C;
  --white:  #F8F7F3;
  --red:    #E8300A;
  --muted:  #8A8A82;
  --border: rgba(12,12,12,0.1);
  --card:   #EDECE8;
}

html { scroll-behavior: smooth; }

body {
  background: var(--white);
  color: var(--black);
  overflow-x: hidden;
}

/* Strikethrough animation on SHOOT */
@keyframes strikeIn {
  from { width: 0; left: 0; }
  to   { width: 102%; left: -1%; }
}

/* Scroll hint pulse */
@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50%       { opacity: 1;   transform: scaleY(0.6); }
}

/* Marquee ticker */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.animate-strike::after {
  content: '';
  position: absolute;
  left: -1%;
  top: 50%;
  transform: translateY(-50%);
  width: 102%;
  height: 10px;
  background: var(--red);
  border-radius: 2px;
  animation: strikeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
}

.animate-scroll-pulse {
  animation: scrollPulse 1.8s ease-in-out infinite;
}

.animate-marquee {
  animation: marquee 18s linear infinite;
}
```

- [ ] **Step 2: Commit**

```powershell
git add styles/globals.css
git commit -m "feat: add CSS variables and keyframe animations"
```

---

## Task 4: Set Up _app.jsx and _document.jsx

**Files:**
- Modify: `pages/_app.jsx`
- Modify: `pages/_document.jsx`

- [ ] **Step 1: Replace pages/_app.jsx**

```jsx
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import '../styles/globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${barlow.variable} ${dmSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
```

- [ ] **Step 2: Replace pages/_document.jsx**

```jsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Creative agency making brand content, social media, and campaign visuals without traditional photography shoots." />
        <meta property="og:title" content="Noshoot — No cameras. Just results." />
        <meta property="og:description" content="Creative agency making brand content, social media, and campaign visuals without traditional photography shoots." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

- [ ] **Step 3: Commit**

```powershell
git add pages/_app.jsx pages/_document.jsx
git commit -m "feat: set up fonts and meta tags"
```

---

## Task 5: Build Nav.jsx

**Files:**
- Create: `components/Nav.jsx`

- [ ] **Step 1: Create components/Nav.jsx**

```jsx
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-[#F8F7F3] border-b border-black/10">
      <a href="#" className="font-condensed font-black text-xl tracking-tight text-brand-black no-underline">
        NO<span className="text-brand-red">.</span>SHOOT
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        <li><a href="#services" className="text-[13px] text-brand-muted hover:text-brand-black transition-colors duration-200 no-underline tracking-wide">What we make</a></li>
        <li><a href="#work" className="text-[13px] text-brand-muted hover:text-brand-black transition-colors duration-200 no-underline tracking-wide">Work</a></li>
        <li><a href="#contact" className="text-[13px] text-brand-muted hover:text-brand-black transition-colors duration-200 no-underline tracking-wide">Contact</a></li>
      </ul>

      <a
        href="#contact"
        className="text-[13px] font-medium text-brand-white bg-brand-black px-5 py-2 rounded-full no-underline hover:bg-brand-red transition-colors duration-200"
      >
        Start a project →
      </a>
    </nav>
  )
}
```

- [ ] **Step 2: Commit**

```powershell
git add components/Nav.jsx
git commit -m "feat: add Nav component"
```

---

## Task 6: Build Hero.jsx

**Files:**
- Create: `components/Hero.jsx`

- [ ] **Step 1: Create components/Hero.jsx**

```jsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-12 pb-16 pt-20 relative overflow-hidden">
      <p className="text-[12px] tracking-[0.14em] text-brand-muted uppercase mb-6">
        Creative agency · noshoot.agency
      </p>

      <span className="font-condensed font-black leading-[0.88] tracking-[-0.02em] text-brand-black block"
        style={{ fontSize: 'clamp(80px, 16vw, 220px)' }}>
        <span className="block">NO</span>
        <span className="inline-block relative animate-strike">SHOOT</span>
      </span>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-12 gap-6">
        <p className="text-brand-muted max-w-[380px] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.5vw, 18px)' }}>
          We make <strong className="text-brand-black font-medium">brand content that converts</strong> — without cameras, crews, or expensive production days.
        </p>

        <div className="flex gap-12 shrink-0">
          <div>
            <div className="font-condensed font-extrabold text-[2.2rem] text-brand-black leading-none">0</div>
            <div className="text-[11px] text-brand-muted tracking-[0.06em] uppercase mt-1">Cameras used</div>
          </div>
          <div>
            <div className="font-condensed font-extrabold text-[2.2rem] text-brand-black leading-none">100%</div>
            <div className="text-[11px] text-brand-muted tracking-[0.06em] uppercase mt-1">Results driven</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-brand-muted text-[11px] tracking-[0.1em] uppercase">
        <div className="w-px h-10 bg-brand-muted animate-scroll-pulse" />
        scroll
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```powershell
git add components/Hero.jsx
git commit -m "feat: add Hero component with strikethrough animation"
```

---

## Task 7: Build Marquee.jsx

**Files:**
- Create: `components/Marquee.jsx`

- [ ] **Step 1: Create components/Marquee.jsx**

```jsx
const items = [
  'Brand identity', 'Social content', 'Motion graphics',
  'Campaign visuals', 'Content templates', 'AI-powered creative',
]

export default function Marquee() {
  const repeated = [...items, ...items]

  return (
    <div className="border-t border-b border-black/10 py-3.5 overflow-hidden whitespace-nowrap" aria-hidden="true">
      <div className="animate-marquee inline-block font-condensed font-bold text-[13px] tracking-[0.12em] uppercase text-brand-muted">
        {repeated.map((item, i) => (
          <span key={i}>
            {item}
            <span className="mx-8 text-brand-red">×</span>
          </span>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```powershell
git add components/Marquee.jsx
git commit -m "feat: add Marquee ticker component"
```

---

## Task 8: Build Services.jsx

**Files:**
- Create: `components/Services.jsx`

- [ ] **Step 1: Create components/Services.jsx**

```jsx
const services = [
  {
    name: 'Brand identity',
    tag: 'Foundation',
    desc: 'Logo, typography, colour system, and visual language built from scratch.',
  },
  {
    name: 'Social content',
    tag: 'Ongoing',
    desc: 'Reels, carousels, and static posts designed to stop the scroll.',
  },
  {
    name: 'Motion graphics',
    tag: 'High impact',
    desc: 'Animated brand assets, product explainers, and ad creatives.',
  },
  {
    name: 'Campaign visuals',
    tag: 'Launch',
    desc: 'Full creative suites for product launches, offers, and brand moments.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-12 py-24 border-t border-black/10">
      <div className="text-[11px] tracking-[0.14em] uppercase text-brand-muted mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-black/10 after:max-w-[80px]">
        What we make
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-16">
        <h2 className="font-condensed font-extrabold leading-[0.95] tracking-[-0.02em] max-w-[500px]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          Everything your brand needs. Zero shoots.
        </h2>
        <p className="text-[14px] text-brand-muted max-w-[280px] leading-relaxed pt-2">
          We use design, motion, and AI to create content that looks expensive — without the production cost.
        </p>
      </div>

      <div className="flex flex-col">
        {services.map((s, i) => (
          <div
            key={i}
            className="group grid grid-cols-1 md:grid-cols-[3fr_1fr_2fr] items-center gap-8 py-7 border-t border-black/10 last:border-b last:border-black/10 cursor-default"
          >
            <div className="font-condensed font-bold tracking-[-0.01em] group-hover:text-brand-red transition-colors duration-200"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              {s.name}
            </div>
            <div className="hidden md:block text-[11px] tracking-[0.08em] uppercase text-brand-muted bg-brand-card px-3 py-1.5 rounded-full w-fit">
              {s.tag}
            </div>
            <div className="text-[13px] text-brand-muted leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```powershell
git add components/Services.jsx
git commit -m "feat: add Services component"
```

---

## Task 9: Build WorkCard.jsx and Work.jsx

**Files:**
- Create: `components/WorkCard.jsx`
- Create: `components/Work.jsx`

- [ ] **Step 1: Create components/WorkCard.jsx**

```jsx
export default function WorkCard({ tall, bgClass, symbol, category, title }) {
  return (
    <div className={`rounded-xl overflow-hidden relative bg-[#1A1A1A] cursor-pointer ${tall ? 'row-span-2' : ''}`}
      style={{ aspectRatio: tall ? '3/4' : '4/3' }}>
      <div className="w-full h-full flex flex-col justify-end p-6 relative overflow-hidden">
        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] ${bgClass}`}>
          <span className="font-condensed font-black text-[6rem] text-white opacity-[0.15] leading-none">
            {symbol}
          </span>
        </div>
        <div className="relative z-10">
          <div className="text-[10px] tracking-[0.14em] uppercase text-white/45 mb-1.5">{category}</div>
          <div className="font-condensed font-bold text-[1.4rem] text-[#F8F7F3] leading-tight">{title}</div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create components/Work.jsx**

```jsx
import WorkCard from './WorkCard'

const cards = [
  {
    tall: true,
    bgClass: 'bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
    symbol: 'NS',
    category: 'Brand identity',
    title: 'D2C skincare brand — full identity system',
  },
  {
    tall: false,
    bgClass: 'bg-gradient-to-br from-[#1a0a0a] via-[#2d1515] to-[#4a1515]',
    symbol: 'SM',
    category: 'Social content',
    title: '30-day content kit for fashion label',
  },
  {
    tall: false,
    bgClass: 'bg-gradient-to-br from-[#0a1a0a] via-[#152d15] to-[#1a4a1a]',
    symbol: 'MG',
    category: 'Motion graphics',
    title: 'Product launch campaign — 12 assets',
  },
]

export default function Work() {
  return (
    <section id="work" className="px-12 py-24 border-t border-black/10 bg-brand-black">
      <div className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-[#333] after:max-w-[80px]">
        Selected work
      </div>

      <h2 className="font-condensed font-extrabold leading-[0.95] tracking-[-0.02em] text-brand-white mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
        No cameras.<br />Real results.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <WorkCard key={i} {...card} />
        ))}
      </div>

      <p className="mt-8 text-[13px] text-[#555] text-center italic">
        Case studies coming soon — follow{' '}
        <a href="https://instagram.com/noshoot.agency" className="text-[#555] underline">
          @noshoot.agency
        </a>{' '}
        for live work
      </p>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```powershell
git add components/WorkCard.jsx components/Work.jsx
git commit -m "feat: add Work and WorkCard components"
```

---

## Task 10: Build ContactForm.jsx and Contact.jsx

**Files:**
- Create: `components/ContactForm.jsx`
- Create: `components/Contact.jsx`

- [ ] **Step 1: Create components/ContactForm.jsx**

Replace `YOUR_FORM_ID` after creating a free account at formspree.io.

```jsx
import { useState } from 'react'

const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', brand: '', service: '', details: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSending(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#E8F5E9] rounded-lg px-5 py-4 text-[14px] text-[#2E7D32]">
        ✓ Got it — we'll be in touch within 24 hours.
      </div>
    )
  }

  const inputClass = "w-full px-4 py-3.5 bg-brand-card border border-transparent rounded-lg font-sans text-[14px] text-brand-black outline-none transition-all duration-200 focus:border-brand-black focus:bg-brand-white placeholder:text-brand-muted"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className={inputClass} type="text" name="name" placeholder="Your name" required onChange={handleChange} value={form.name} />
        <input className={inputClass} type="email" name="email" placeholder="Email address" required onChange={handleChange} value={form.email} />
      </div>

      <input className={inputClass} type="text" name="brand" placeholder="Brand / company name" onChange={handleChange} value={form.brand} />

      <select
        className={`${inputClass} cursor-pointer ${form.service ? 'text-brand-black' : 'text-brand-muted'}`}
        name="service"
        onChange={handleChange}
        value={form.service}
      >
        <option value="" disabled>What do you need?</option>
        <option>Brand identity</option>
        <option>Social content</option>
        <option>Motion graphics</option>
        <option>Campaign visuals</option>
        <option>Full package</option>
        <option>Not sure yet</option>
      </select>

      <textarea
        className={`${inputClass} h-[120px] resize-none`}
        name="details"
        placeholder="Tell us about your project — what you're building, your timeline, and any budget in mind."
        onChange={handleChange}
        value={form.details}
      />

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2.5 bg-brand-black text-brand-white px-8 py-4 rounded-full font-sans text-[14px] font-medium border-none cursor-pointer transition-colors duration-200 w-fit mt-2 hover:bg-brand-red active:scale-[0.98] disabled:opacity-60"
      >
        {sending ? 'Sending…' : 'Send inquiry'}
        <span className="w-[18px] h-[18px] rounded-full bg-white/15 flex items-center justify-center text-[11px]">→</span>
      </button>
    </form>
  )
}
```

- [ ] **Step 2: Create components/Contact.jsx**

```jsx
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="px-12 py-24 border-t border-black/10">
      <div className="text-[11px] tracking-[0.14em] uppercase text-brand-muted mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-black/10 after:max-w-[80px]">
        Start a project
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="font-condensed font-extrabold leading-[0.95] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)' }}>
            Let's make something{' '}
            <em className="not-italic text-brand-red">without</em>{' '}
            the shoot.
          </h2>
          <p className="text-[14px] text-brand-muted leading-relaxed mb-10">
            Tell us what you're building and we'll come back within 24 hours with how we can help.
          </p>
          <div className="flex flex-col gap-4">
            <a href="https://instagram.com/noshoot.agency"
              className="text-[14px] text-brand-black no-underline flex items-center gap-2.5 hover:text-brand-red transition-colors duration-200">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              @noshoot.agency
            </a>
            <a href="mailto:hello@noshoot.agency"
              className="text-[14px] text-brand-black no-underline flex items-center gap-2.5 hover:text-brand-red transition-colors duration-200">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              hello@noshoot.agency
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```powershell
git add components/ContactForm.jsx components/Contact.jsx
git commit -m "feat: add Contact and ContactForm with Formspree"
```

---

## Task 11: Build Footer.jsx

**Files:**
- Create: `components/Footer.jsx`

- [ ] **Step 1: Create components/Footer.jsx**

```jsx
export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
      <a href="#" className="font-condensed font-black text-[1.1rem] text-brand-black no-underline">
        NO<span className="text-brand-red">.</span>SHOOT
      </a>
      <p className="text-[12px] text-brand-muted">© 2026 Noshoot. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="https://instagram.com/noshoot.agency" className="text-[12px] text-brand-muted no-underline hover:text-brand-black transition-colors duration-200">Instagram</a>
        <a href="mailto:hello@noshoot.agency" className="text-[12px] text-brand-muted no-underline hover:text-brand-black transition-colors duration-200">Email</a>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```powershell
git add components/Footer.jsx
git commit -m "feat: add Footer component"
```

---

## Task 12: Assemble the Homepage (index.jsx)

**Files:**
- Modify: `pages/index.jsx`

- [ ] **Step 1: Replace pages/index.jsx**

```jsx
import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Noshoot — No cameras. Just results.</title>
      </Head>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Run the dev server and check the site**

```powershell
npm run dev
```

Open `http://localhost:3000` in your browser. You should see the full Noshoot site. Check:
- Red strikethrough animates on "SHOOT"
- Marquee scrolls
- All sections visible
- Nav links scroll to correct sections

Press `Ctrl + C` to stop.

- [ ] **Step 3: Commit**

```powershell
git add pages/index.jsx
git commit -m "feat: assemble homepage with all components"
```

---

## Task 13: Add Work Slug Shell Page

**Files:**
- Create: `pages/work/[slug].jsx`

- [ ] **Step 1: Create pages/work/[slug].jsx**

```jsx
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function CaseStudy() {
  const { slug } = useRouter().query

  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center justify-center px-12 pt-24">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.14em] uppercase text-brand-muted mb-4">Case study</p>
          <h1 className="font-condensed font-black text-[3rem] text-brand-black">{slug}</h1>
          <p className="text-brand-muted mt-4 text-[14px]">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```powershell
git add pages/work/
git commit -m "feat: add case study shell page"
```

---

## Task 14: Production Build Check

- [ ] **Step 1: Run production build**

```powershell
npm run build
```

Expected: output ends with `✓ Compiled successfully` and lists all pages. If you see any errors, read them carefully — most are missing imports or typos.

- [ ] **Step 2: Commit if build passes**

```powershell
git commit --allow-empty -m "chore: verify production build passes"
```

---

## Task 15: Push to GitHub and Deploy to Vercel

- [ ] **Step 1: Create a new repository on GitHub**

1. Go to github.com and sign in
2. Click the `+` button (top right) → "New repository"
3. Name it `noshoot-agency`
4. Leave it Public or Private (your choice)
5. Do NOT check "Add a README" (we already have files)
6. Click "Create repository"
7. Copy the repository URL shown (looks like `https://github.com/YOUR_USERNAME/noshoot-agency.git`)

- [ ] **Step 2: Connect your local project to GitHub**

Replace `YOUR_REPO_URL` with the URL you copied:

```powershell
git remote add origin YOUR_REPO_URL
git branch -M main
git push -u origin main
```

Expected: files upload and you see "Branch 'main' set up to track remote branch 'main' from 'origin'."

- [ ] **Step 3: Deploy to Vercel**

1. Go to vercel.com and sign in (use "Continue with GitHub")
2. Click "Add New Project"
3. Find `noshoot-agency` in the list → click "Import"
4. Leave all settings as default
5. Click "Deploy"
6. Wait ~1 minute — Vercel gives you a live URL like `noshoot-agency.vercel.app`

- [ ] **Step 4: Wire up Formspree**

1. Go to formspree.io → create a free account
2. Click "New Form" → name it "Noshoot Contact"
3. Copy the Form ID (looks like `xyzabcde`)
4. Open `components/ContactForm.jsx`
5. Replace `YOUR_FORM_ID` with your actual ID:
   ```js
   const FORMSPREE_ID = 'xyzabcde'
   ```
6. Save, then push the change:
   ```powershell
   git add components/ContactForm.jsx
   git commit -m "feat: wire Formspree form ID"
   git push
   ```
7. Vercel auto-deploys within 30 seconds

- [ ] **Step 5: Test the contact form end to end**

Fill in the form on your live site and check that you receive the email at your Formspree account's email address.

---

## Task 16: Connect noshoot.agency Domain (Optional)

- [ ] **Step 1: Add domain in Vercel**

1. In Vercel → your project → "Settings" → "Domains"
2. Type `noshoot.agency` → click "Add"
3. Vercel shows you two DNS records to add

- [ ] **Step 2: Add DNS records at your domain registrar**

Log into wherever you bought `noshoot.agency` (GoDaddy, Namecheap, etc.) and add the records Vercel showed you. DNS changes take up to 48 hours to go live.

---

## Deployment Checklist

- [ ] `npm run build` passes with no errors
- [ ] Contact form tested end-to-end (submission reaches inbox)
- [ ] Mobile responsive (test at 375px width in browser DevTools)
- [ ] All links working (Instagram, email)
- [ ] Meta tags set correctly
- [ ] Domain connected in Vercel dashboard
- [ ] SSL active (automatic via Vercel)
