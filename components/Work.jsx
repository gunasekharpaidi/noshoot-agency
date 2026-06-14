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
