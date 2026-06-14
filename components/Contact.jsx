import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="px-5 sm:px-8 md:px-12 py-16 md:py-24 border-t border-black/10">
      <div className="text-[11px] tracking-[0.14em] uppercase text-brand-muted mb-8 md:mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-black/10 after:max-w-[80px]">
        Start a project
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <h2
            className="font-condensed font-extrabold leading-[0.95] tracking-[-0.02em] mb-5 md:mb-6"
            style={{ fontSize: 'clamp(2rem, 8vw, 3.8rem)' }}
          >
            Let&apos;s make something{' '}
            <em className="not-italic text-brand-red">without</em>{' '}
            the shoot.
          </h2>
          <p className="text-[14px] text-brand-muted leading-relaxed mb-8 md:mb-10">
            Tell us what you&apos;re building and we&apos;ll come back within 24 hours with how we can help.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://instagram.com/noshoot.agency"
              className="text-[14px] text-brand-black no-underline flex items-center gap-2.5 hover:text-brand-red transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              @noshoot.agency
            </a>
            <a
              href="mailto:hello@noshoot.agency"
              className="text-[14px] text-brand-black no-underline flex items-center gap-2.5 hover:text-brand-red transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              hello@noshoot.agency
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
