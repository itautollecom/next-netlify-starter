import Head from 'next/head'
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Autolle.com api documents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Hello world
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      </main>

    </div>
  )
}
