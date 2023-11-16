import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Autolle.com api documents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* link to autolle.com */}
        <a href="https://autolle.com" >https://autolle.com</a>
      </main>

      <Footer />
    </div>
  )
}
