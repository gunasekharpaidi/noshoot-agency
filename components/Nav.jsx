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
