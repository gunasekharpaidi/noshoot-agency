import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import '../styles/globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${barlow.variable} ${dmSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
