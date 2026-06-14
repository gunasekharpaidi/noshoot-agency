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
