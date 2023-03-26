import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <title>Nepscript</title>
    <meta name="english to nepali" content="convert english text to nepali script" />
    <meta property="og:title" content="nepali unicode" />
    <meta property="romanized nepali" content="romanized nepali to nepali script" />
    <meta property="nepali unicode" content="nepali unicode to convert english text to nepali" />
  </Head>
    <div>
      <Component {...pageProps} />
    </div>
    </>
  )
}
