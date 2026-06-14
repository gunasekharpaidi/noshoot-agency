export default function WorkCard({ tall, bgClass, symbol, category, title }) {
  return (
    <div className={`rounded-xl overflow-hidden relative bg-[#1A1A1A] cursor-pointer ${tall ? 'row-span-2' : ''}`}
      style={{ aspectRatio: tall ? '3/4' : '4/3' }}>
      <div className="w-full h-full flex flex-col justify-end p-6 relative overflow-hidden">
        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] ${bgClass}`}>
          <span className="font-condensed font-black text-[6rem] text-white opacity-[0.15] leading-none">
            {symbol}
          </span>
        </div>
        <div className="relative z-10">
          <div className="text-[10px] tracking-[0.14em] uppercase text-white/45 mb-1.5">{category}</div>
          <div className="font-condensed font-bold text-[1.4rem] text-[#F8F7F3] leading-tight">{title}</div>
        </div>
      </div>
    </div>
  )
}
