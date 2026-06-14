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
