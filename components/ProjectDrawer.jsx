import { useEffect } from 'react'

export default function ProjectDrawer({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#F8F7F3] rounded-t-2xl max-h-[92vh] flex flex-col"
        style={{ animation: 'drawerUp 0.4s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        {/* Handle bar */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-black/20 rounded-full" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 md:px-8 pt-7 pb-4 border-b border-black/10 shrink-0">
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#8A8A82]">{project.category}</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-[#0C0C0C] hover:bg-black/20 transition-colors text-sm font-medium"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 md:px-8 py-6 md:py-8">

          {/* Title */}
          <h2
            className="font-condensed font-black text-[#0C0C0C] leading-[0.9] tracking-[-0.02em] mb-6 md:mb-8"
            style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}
          >
            {project.title}
          </h2>

          {/* Image placeholders */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
            {project.images.map((img, i) => (
              <div
                key={i}
                className={`rounded-xl bg-[#EDECE8] flex items-center justify-center ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'} ${i === 0 ? 'aspect-video' : 'aspect-[4/3]'}`}
              >
                {img ? (
                  <img src={img} alt="" className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <div className="text-center py-8">
                    <div className="text-[2rem] mb-2 opacity-20">⬜</div>
                    <p className="text-[11px] tracking-[0.1em] uppercase text-[#8A8A82]">Image coming soon</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Description + Deliverables */}
          <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 mb-8 md:mb-10">
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-[#8A8A82] mb-3">About the project</p>
              <p className="text-[14px] md:text-[15px] text-[#0C0C0C] leading-relaxed">{project.description}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-[#8A8A82] mb-3 mt-6 md:mt-0">Deliverables</p>
              <ul className="flex flex-col gap-2">
                {project.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[13px] md:text-[14px] text-[#0C0C0C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8300A] shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-black/10 pt-6 md:pt-8 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[13px] md:text-[14px] text-[#8A8A82]">Want something like this for your brand?</p>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-[#0C0C0C] text-[#F8F7F3] px-5 md:px-6 py-3 rounded-full text-[13px] font-medium hover:bg-[#E8300A] transition-colors duration-200 no-underline whitespace-nowrap"
            >
              Start a project →
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
