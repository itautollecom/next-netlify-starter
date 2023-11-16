import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Autolle.com api documents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Hello world
        <br />
        https://open-api.netlify.com/swagger.json
        <br />
        https://petstore.swagger.io/v2/swagger.json
        <br />
      </main>

    </div>
  )
}
