import { useState } from 'react'

const pricingUSD = {
  'Product visuals': {
    Starter: { traditional: 6000,  noshoot: 1200 },
    Growth:  { traditional: 12000, noshoot: 2500 },
    Launch:  { traditional: 25000, noshoot: 5000 },
  },
  'Ad creatives': {
    Starter: { traditional: 5000,  noshoot: 900  },
    Growth:  { traditional: 10000, noshoot: 2000 },
    Launch:  { traditional: 22000, noshoot: 4500 },
  },
  'Social content': {
    Starter: { traditional: 4000,  noshoot: 800  },
    Growth:  { traditional: 8000,  noshoot: 1600 },
    Launch:  { traditional: 18000, noshoot: 3500 },
  },
  'Video content': {
    Starter: { traditional: 7000,  noshoot: 1400 },
    Growth:  { traditional: 15000, noshoot: 3000 },
    Launch:  { traditional: 30000, noshoot: 6000 },
  },
  'Full package': {
    Starter: { traditional: 18000, noshoot: 3500  },
    Growth:  { traditional: 38000, noshoot: 7500  },
    Launch:  { traditional: 75000, noshoot: 14000 },
  },
}

const pricingINR = {
  'Product visuals': {
    Starter: { traditional: 45000,  noshoot: 9000  },
    Growth:  { traditional: 90000,  noshoot: 18000 },
    Launch:  { traditional: 200000, noshoot: 40000 },
  },
  'Ad creatives': {
    Starter: { traditional: 35000,  noshoot: 7000  },
    Growth:  { traditional: 70000,  noshoot: 14000 },
    Launch:  { traditional: 160000, noshoot: 32000 },
  },
  'Social content': {
    Starter: { traditional: 25000,  noshoot: 5000  },
    Growth:  { traditional: 55000,  noshoot: 11000 },
    Launch:  { traditional: 120000, noshoot: 24000 },
  },
  'Video content': {
    Starter: { traditional: 50000,  noshoot: 10000 },
    Growth:  { traditional: 110000, noshoot: 22000 },
    Launch:  { traditional: 250000, noshoot: 50000 },
  },
  'Full package': {
    Starter: { traditional: 120000, noshoot: 24000  },
    Growth:  { traditional: 280000, noshoot: 55000  },
    Launch:  { traditional: 600000, noshoot: 120000 },
  },
}

const scales = ['Starter', 'Growth', 'Launch']
const services = Object.keys(pricingUSD)

function fmt(amount, currency) {
  if (currency === 'USD') {
    return '$' + amount.toLocaleString('en-US')
  }
  return '₹' + amount.toLocaleString('en-IN')
}

export default function SavingsCalculator() {
  const [currency, setCurrency] = useState('USD')
  const [service, setService] = useState('Product visuals')
  const [scale, setScale] = useState('Growth')

  const pricing = currency === 'USD' ? pricingUSD : pricingINR
  const { traditional, noshoot } = pricing[service][scale]
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
      <div className="flex flex-col gap-6 mb-10 md:mb-14">
        {/* Service selector */}
        <div>
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-3">What do you need?</p>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s}
                onClick={() => setService(s)}
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

        {/* Scale selector */}
        <div>
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-3">Project scale</p>
          <div className="flex gap-2">
            {scales.map((s) => (
              <button
                key={s}
                onClick={() => setScale(s)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-full text-[13px] border-none cursor-pointer transition-all duration-200 ${
                  scale === s
                    ? 'bg-brand-white text-brand-black font-medium'
                    : 'bg-white/10 text-[#8A8A82] hover:bg-white/20 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
        {/* Traditional cost */}
        <div className="bg-brand-black px-6 py-8 md:px-8 md:py-10">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-3">Traditional agency</p>
          <p className="font-condensed font-black text-[#555] leading-none line-through"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
            {fmt(traditional, currency)}
          </p>
        </div>

        {/* Noshoot cost */}
        <div className="bg-brand-black px-6 py-8 md:px-8 md:py-10">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#555] mb-3">With Noshoot</p>
          <p className="font-condensed font-black text-brand-white leading-none"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
            {fmt(noshoot, currency)}
          </p>
        </div>

        {/* Savings */}
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
