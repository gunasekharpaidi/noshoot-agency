function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-12 py-4 md:py-5 bg-[#F8F7F3] border-b border-black/10">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-condensed font-black text-xl tracking-tight text-brand-black bg-transparent border-none cursor-pointer p-0"
      >
        NO<span className="text-brand-red">.</span>SHOOT
      </button>

      <ul className="hidden md:flex gap-10 list-none">
        <li><button onClick={() => scrollTo('services')} className="text-[13px] text-brand-muted hover:text-brand-black transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 tracking-wide">What we make</button></li>
        <li><button onClick={() => scrollTo('work')} className="text-[13px] text-brand-muted hover:text-brand-black transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 tracking-wide">Work</button></li>
        <li><button onClick={() => scrollTo('contact')} className="text-[13px] text-brand-muted hover:text-brand-black transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 tracking-wide">Contact</button></li>
      </ul>

      <button
        onClick={() => scrollTo('contact')}
        className="text-[12px] md:text-[13px] font-medium text-brand-white bg-brand-black px-4 md:px-5 py-2 rounded-full hover:bg-brand-red transition-colors duration-200 whitespace-nowrap border-none cursor-pointer"
      >
        Start a project →
      </button>
    </nav>
  )
}
