import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Creative agency making brand content, social media, and campaign visuals without traditional photography shoots." />
        <meta property="og:title" content="Noshoot — No cameras. Just results." />
        <meta property="og:description" content="Creative agency making brand content, social media, and campaign visuals without traditional photography shoots." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
