import { useState } from 'react'

const categories = {
  'Product visuals': {
    unit: 'products / SKUs',
    min: 1,
    max: 20,
    defaultVal: 5,
    USD: { traditional: 800,  noshoot: 150  },
    INR: { traditional: 8000, noshoot: 1500 },
  },
  'Ad creatives': {
    unit: 'ad creatives',
    min: 1,
    max: 20,
    defaultVal: 5,
    USD: { traditional: 500,  noshoot: 90  },
    INR: { traditional: 5000, noshoot: 900 },
  },
  'Social content': {
    unit: 'posts per month',
    min: 8,
    max: 60,
    defaultVal: 20,
    USD: { traditional: 150, noshoot: 28  },
    INR: { traditional: 1500, noshoot: 280 },
  },
  'Video content': {
    unit: 'videos',
    min: 1,
    max: 10,
    defaultVal: 3,
    USD: { traditional: 2000, noshoot: 380  },
    INR: { traditional: 20000, noshoot: 3800 },
  },
  'Full package': {
    unit: 'products / SKUs',
    min: 1,
    max: 15,
    defaultVal: 5,
    USD: { traditional: 1200, noshoot: 220  },
    INR: { traditional: 12000, noshoot: 2200 },
  },
}

const services = Object.keys(categories)

function fmt(amount, currency) {
  if (currency === 'USD') return '$' + amount.toLocaleString('en-US')
  return '₹' + amount.toLocaleString('en-IN')
}

export default function SavingsCalculator() {
  const [currency, setCurrency] = useState('USD')
  const [service, setService] = useState('Product visuals')
  const [qty, setQty] = useState(5)

  const cat = categories[service]

  function handleServiceChange(s) {
    setService(s)
    setQty(categories[s].defaultVal)
  }

  const rates = cat[currency]
  const traditional = rates.traditional * qty
  const noshoot = rates.noshoot * qty
  const savings = traditional - noshoot
  const pct = Math.round((savings / traditional) * 100)

  return (
    <section className="px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-brand-black border-t border-white/10">
      {/* Section label */}
      <div className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-8 md:mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-[#333] after:max-w-[80px]">
        The math
      </div>

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-14">
        <h2
          className="font-condensed font-extrabold leading-[0.95] tracking-[-0.02em] text-brand-white"
          style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}
        >
          See what<br />you save.
        </h2>

        {/* Currency toggle */}
        <div className="flex items-center gap-1 bg-white/10 p-1 rounded-full w-fit">
          {['USD', 'INR'].map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wide transition-all duration-200 border-none cursor-pointer ${
                currency === c
                  ? 'bg-brand-white text-brand-black'
                  : 'text-[#8A8A82] hover:text-white bg-transparent'
              }`}
            >
              {c === 'USD' ? '$ USD' : '₹ INR'}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-8 mb-10 md:mb-14">
        {/* Service selector */}
        <div>
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-3">What do you need?</p>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s}
                onClick={() => handleServiceChange(s)}
                className={`px-4 py-2 rounded-full text-[13px] border-none cursor-pointer transition-all duration-200 ${
                  service === s
                    ? 'bg-brand-red text-white'
                    : 'bg-white/10 text-[#8A8A82] hover:bg-white/20 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity slider */}
        <div>
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-[11px] tracking-[0.14em] uppercase text-[#555]">How many?</p>
            <p className="font-condensed font-black text-brand-white text-[1.6rem] leading-none">
              {qty} <span className="text-[#555] text-[13px] font-normal font-sans">{cat.unit}</span>
            </p>
          </div>
          <input
            type="range"
            min={cat.min}
            max={cat.max}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-full accent-brand-red cursor-pointer"
            style={{ accentColor: '#E8300A' }}
          />
          <div className="flex justify-between mt-1.5 text-[11px] text-[#555]">
            <span>{cat.min}</span>
            <span>{cat.max}</span>
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
        <div className="bg-brand-black px-6 py-8 md:px-8 md:py-10">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-3">Traditional agency</p>
          <p className="font-condensed font-black text-[#555] leading-none line-through"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
            {fmt(traditional, currency)}
          </p>
          <p className="text-[11px] text-[#444] mt-2">{fmt(rates.traditional, currency)} per {cat.unit.split(' ')[0]}</p>
        </div>

        <div className="bg-brand-black px-6 py-8 md:px-8 md:py-10">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-3">With Noshoot</p>
          <p className="font-condensed font-black text-brand-white leading-none"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
            {fmt(noshoot, currency)}
          </p>
          <p className="text-[11px] text-[#444] mt-2">{fmt(rates.noshoot, currency)} per {cat.unit.split(' ')[0]}</p>
        </div>

        <div className="bg-brand-black px-6 py-8 md:px-8 md:py-10 border-t sm:border-t-0 border-white/10">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-3">You save</p>
          <p className="font-condensed font-black text-brand-red leading-none"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
            {fmt(savings, currency)}
          </p>
          <p className="text-[12px] text-[#555] mt-2">{pct}% less than traditional</p>
        </div>
      </div>

      {/* Disclaimer + CTA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
        <p className="text-[12px] text-[#555] leading-relaxed max-w-sm">
          Estimates based on typical market rates. Your actual savings may vary.
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-[13px] font-medium hover:bg-white hover:text-brand-black transition-colors duration-200 whitespace-nowrap border-none cursor-pointer"
        >
          Start saving now →
        </button>
      </div>
    </section>
  )
}
