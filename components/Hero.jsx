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
