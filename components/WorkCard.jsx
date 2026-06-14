export default function WorkCard({ tall, bgClass, symbol, category, title, onClick }) {
  return (
    <div
      className={`rounded-xl overflow-hidden relative bg-[#1A1A1A] cursor-pointer group ${tall ? 'md:row-span-2' : ''}`}
      style={{ aspectRatio: tall ? '3/4' : '4/3' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View project: ${title}`}
    >
      <div className="w-full h-full flex flex-col justify-end p-5 md:p-6 relative overflow-hidden">
        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] ${bgClass}`}>
          <span className="font-condensed font-black text-[5rem] md:text-[6rem] text-white opacity-[0.15] leading-none">
            {symbol}
          </span>
        </div>

        <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-[10px] md:text-[11px] tracking-[0.08em] uppercase text-white/60 bg-white/10 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-sm">
            View project
          </span>
        </div>

        <div className="relative z-10">
          <div className="text-[10px] tracking-[0.14em] uppercase text-white/45 mb-1.5">{category}</div>
          <div className="font-condensed font-bold text-[1.2rem] md:text-[1.4rem] text-[#F8F7F3] leading-tight">{title}</div>
        </div>
      </div>
    </div>
  )
}
