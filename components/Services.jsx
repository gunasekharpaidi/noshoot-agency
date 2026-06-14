const services = [
  {
    name: 'Product visuals',
    tag: 'AI-generated',
    desc: 'Studio-quality product shots without a studio.',
  },
  {
    name: 'Ad creatives',
    tag: 'Performance',
    desc: 'Static and video ads built to convert.',
  },
  {
    name: 'Social content',
    tag: 'Ongoing',
    desc: 'Feed posts, Reels covers, carousels, Stories.',
  },
  {
    name: 'Video content',
    tag: 'AI-assisted',
    desc: 'Brand videos, product showcases, ad films.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-5 sm:px-8 md:px-12 py-16 md:py-24 border-t border-black/10">
      <div className="text-[11px] tracking-[0.14em] uppercase text-brand-muted mb-8 md:mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-black/10 after:max-w-[80px]">
        What we make
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 mb-10 md:mb-16">
        <h2
          className="font-condensed font-extrabold leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}
        >
          Everything your brand needs. Zero shoots.
        </h2>
        <p className="text-[14px] text-brand-muted md:max-w-[280px] leading-relaxed md:pt-2">
          We use design, motion, and AI to create content that looks expensive — without the production cost.
        </p>
      </div>

      <div className="flex flex-col">
        {services.map((s, i) => (
          <div
            key={i}
            className="group grid grid-cols-1 md:grid-cols-[3fr_1fr_2fr] items-start md:items-center gap-2 md:gap-8 py-5 md:py-7 border-t border-black/10 last:border-b last:border-black/10 cursor-default"
          >
            <div
              className="font-condensed font-bold tracking-[-0.01em] group-hover:text-brand-red transition-colors duration-200"
              style={{ fontSize: 'clamp(1.3rem, 5vw, 2rem)' }}
            >
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
