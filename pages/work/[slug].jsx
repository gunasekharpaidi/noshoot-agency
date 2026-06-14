import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function CaseStudy() {
  const { slug } = useRouter().query

  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center justify-center px-12 pt-24">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.14em] uppercase text-brand-muted mb-4">Case study</p>
          <h1 className="font-condensed font-black text-[3rem] text-brand-black">{slug}</h1>
          <p className="text-brand-muted mt-4 text-[14px]">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
