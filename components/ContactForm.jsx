import { useState } from 'react'

const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', brand: '', service: '', details: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSending(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#E8F5E9] rounded-lg px-5 py-4 text-[14px] text-[#2E7D32]">
        ✓ Got it — we&apos;ll be in touch within 24 hours.
      </div>
    )
  }

  const inputClass = "w-full px-4 py-3.5 bg-brand-card border border-transparent rounded-lg font-sans text-[14px] text-brand-black outline-none transition-all duration-200 focus:border-brand-black focus:bg-brand-white placeholder:text-brand-muted"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className={inputClass} type="text" name="name" placeholder="Your name" required onChange={handleChange} value={form.name} />
        <input className={inputClass} type="email" name="email" placeholder="Email address" required onChange={handleChange} value={form.email} />
      </div>

      <input className={inputClass} type="text" name="brand" placeholder="Brand / company name" onChange={handleChange} value={form.brand} />

      <select
        className={`${inputClass} cursor-pointer ${form.service ? 'text-brand-black' : 'text-brand-muted'}`}
        name="service"
        onChange={handleChange}
        value={form.service}
      >
        <option value="" disabled>What do you need?</option>
        <option>Brand identity</option>
        <option>Social content</option>
        <option>Motion graphics</option>
        <option>Campaign visuals</option>
        <option>Full package</option>
        <option>Not sure yet</option>
      </select>

      <textarea
        className={`${inputClass} h-[120px] resize-none`}
        name="details"
        placeholder="Tell us about your project — what you're building, your timeline, and any budget in mind."
        onChange={handleChange}
        value={form.details}
      />

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2.5 bg-brand-black text-brand-white px-8 py-4 rounded-full font-sans text-[14px] font-medium border-none cursor-pointer transition-colors duration-200 w-fit mt-2 hover:bg-brand-red active:scale-[0.98] disabled:opacity-60"
      >
        {sending ? 'Sending…' : 'Send inquiry'}
        <span className="w-[18px] h-[18px] rounded-full bg-white/15 flex items-center justify-center text-[11px]">→</span>
      </button>
    </form>
  )
}
