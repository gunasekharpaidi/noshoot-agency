export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-5 sm:px-8 md:px-12 pb-12 md:pb-16 pt-20 relative overflow-hidden">

      {/* Mobile hero image */}
      <img
        src="/hero-mobile.jpg"
        alt=""
        className="md:hidden absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Desktop hero image — falls back to mobile image until hero-desktop.jpg is added */}
      <img
        src="/hero-desktop.jpg"
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Gradient overlay: only fades at bottom so text is readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, #F8F7F3 100%)',
        }}
      />

      {/* All content sits above video and overlay */}
      <p className="relative z-10 text-[11px] md:text-[12px] tracking-[0.14em] text-brand-muted uppercase mb-4 md:mb-6">
        Creative agency · noshoot.agency
      </p>

      <span
        className="relative z-10 font-condensed font-black leading-[0.88] tracking-[-0.02em] text-brand-black block"
        style={{ fontSize: 'clamp(72px, 20vw, 220px)' }}
      >
        <span className="block">NO</span>
        <span className="inline-block relative animate-strike">SHOOT</span>
      </span>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between mt-8 md:mt-12 gap-6">
        <p className="text-brand-muted max-w-[380px] leading-relaxed text-[15px] md:text-[17px]">
          We make <strong className="text-brand-black font-medium">brand content that converts</strong> — without cameras, crews, or expensive production days.
        </p>

        <div className="flex gap-8 md:gap-12 shrink-0">
          <div>
            <div className="font-condensed font-extrabold text-[2rem] md:text-[2.2rem] text-brand-black leading-none">0</div>
            <div className="text-[10px] md:text-[11px] text-brand-muted tracking-[0.06em] uppercase mt-1">Cameras used</div>
          </div>
          <div>
            <div className="font-condensed font-extrabold text-[2rem] md:text-[2.2rem] text-brand-black leading-none">100%</div>
            <div className="text-[10px] md:text-[11px] text-brand-muted tracking-[0.06em] uppercase mt-1">Results driven</div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-brand-muted text-[11px] tracking-[0.1em] uppercase z-10">
        <div className="w-px h-8 md:h-10 bg-brand-muted animate-scroll-pulse" />
        scroll
      </div>
    </section>
  )
}
