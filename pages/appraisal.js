import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function Appraisal() {
  return (
    <div className="container">
      <Head>
        <title>Autolle.com api documents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      </main>
    </div>
  )
}