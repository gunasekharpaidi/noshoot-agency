import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import Work from '../components/Work'
import SavingsCalculator from '../components/SavingsCalculator'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Noshoot — No cameras. Just results.</title>
      </Head>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <SavingsCalculator />
      <Contact />
      <Footer />
    </>
  )
}
