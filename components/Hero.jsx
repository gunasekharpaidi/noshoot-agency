export default function Hero() {
  return (
    <section className="flex flex-col min-h-screen pt-16 md:pt-20">

      {/* Image zone — top portion */}
      <div className="relative w-full overflow-hidden" style={{ height: '55vh' }}>
        <img
          src="/hero-mobile.jpg"
          alt=""
          className="md:hidden w-full h-full object-cover object-top"
          aria-hidden="true"
        />
        <img
          src="/hero-desktop.jpg"
          alt=""
          className="hidden md:block w-full h-full object-cover object-top"
          aria-hidden="true"
        />
      </div>

      {/* Text zone — cream background, always readable */}
      <div className="flex flex-col justify-end flex-1 px-5 sm:px-8 md:px-12 pb-12 md:pb-16 pt-8 bg-[#F8F7F3]">
        <p className="text-[11px] md:text-[12px] tracking-[0.14em] text-brand-muted uppercase mb-4 md:mb-6">
          Creative agency · noshoot.agency
        </p>

        <span
          className="font-condensed font-black leading-[0.88] tracking-[-0.02em] text-brand-black block"
          style={{ fontSize: 'clamp(72px, 20vw, 220px)' }}
        >
          <span className="block">NO</span>
          <span className="inline-block relative animate-strike">SHOOT</span>
        </span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-8 md:mt-12 gap-6">
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
      </div>

    </section>
  )
}
