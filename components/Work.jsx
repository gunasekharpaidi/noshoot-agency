import { useState } from 'react'
import WorkCard from './WorkCard'
import ProjectDrawer from './ProjectDrawer'

const projects = [
  {
    id: 1,
    tall: true,
    bgClass: 'bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
    symbol: 'NS',
    category: 'Brand identity',
    title: 'D2C skincare brand — full identity system',
    description: 'A complete visual identity built from scratch for a direct-to-consumer skincare brand entering a competitive market. The system needed to feel premium, clean, and trustworthy — without looking clinical. We developed the logo, typography hierarchy, colour palette, and a full set of brand guidelines ready for social and packaging.',
    deliverables: ['Logo & wordmark', 'Typography system', 'Colour palette', 'Brand guidelines PDF', 'Social media templates'],
    images: [null, null, null],
  },
  {
    id: 2,
    tall: false,
    bgClass: 'bg-gradient-to-br from-[#1a0a0a] via-[#2d1515] to-[#4a1515]',
    symbol: 'SM',
    category: 'Social content',
    title: '30-day content kit for fashion label',
    description: 'A month-long content system for an emerging fashion label with no in-house creative team. We designed 30 pieces of ready-to-post content — Reels covers, carousels, and static posts — all within a consistent visual language that felt editorial without being cold.',
    deliverables: ['10 Reels cover frames', '10 carousel sets', '10 static posts', 'Caption templates', 'Hashtag strategy'],
    images: [null, null, null],
  },
  {
    id: 3,
    tall: false,
    bgClass: 'bg-gradient-to-br from-[#0a1a0a] via-[#152d15] to-[#1a4a1a]',
    symbol: 'MG',
    category: 'Motion graphics',
    title: 'Product launch campaign — 12 animated assets',
    description: 'A full suite of animated assets for a product launch across Instagram and paid ads. Every asset was designed to stop the scroll in the first frame — using bold typography, fast cuts, and the product as the hero. Delivered in multiple aspect ratios for Stories, Reels, and feed.',
    deliverables: ['4 × Stories animations', '4 × Reels animations', '4 × Square feed animations', 'Audio-off captions', 'Export in 3 formats'],
    images: [null, null, null],
  },
  {
    id: 4,
    tall: false,
    bgClass: 'bg-gradient-to-br from-[#1a120a] via-[#2d2010] to-[#4a3010]',
    symbol: 'CV',
    category: 'Campaign visuals',
    title: 'Seasonal launch suite for food & beverage brand',
    description: 'A complete campaign suite for a seasonal product drop — built in two weeks from brief to final files. The creative direction leaned into warmth and texture without relying on photography. We used type, colour, and illustration-style elements to build a visual world around the product.',
    deliverables: ['Campaign concept & mood', 'Hero key visual', '8 social adaptations', 'Email banner set', 'WhatsApp story set'],
    images: [null, null, null],
  },
  {
    id: 5,
    tall: false,
    bgClass: 'bg-gradient-to-br from-[#0a0a1a] via-[#10102d] to-[#18184a]',
    symbol: 'PB',
    category: 'Brand identity',
    title: 'Personal brand for business coach',
    description: 'A personal brand identity for a business coach building their first serious online presence. The brief was simple: look credible, not corporate. We built a clean visual system around their name — with a custom logotype, a neutral-warm colour palette, and content templates they could actually use themselves.',
    deliverables: ['Personal logotype', 'Colour & type system', 'LinkedIn banner', 'Instagram highlight covers', '6 content post templates'],
    images: [null, null, null],
  },
]

export default function Work() {
  const [activeProject, setActiveProject] = useState(null)

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
        {projects.map((project) => (
          <WorkCard
            key={project.id}
            tall={project.tall}
            bgClass={project.bgClass}
            symbol={project.symbol}
            category={project.category}
            title={project.title}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      <p className="mt-8 text-[13px] text-[#555] text-center italic">
        Case studies coming soon — follow{' '}
        <a href="https://instagram.com/noshoot.agency" className="text-[#555] underline">
          @noshoot.agency
        </a>{' '}
        for live work
      </p>

      <ProjectDrawer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
