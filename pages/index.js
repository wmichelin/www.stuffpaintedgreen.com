import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Stuff Painted Green</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="www.stuffpaintedgreen.com" />
        <p className="description">
          We got stuff. <code>that stuff is green.</code>
          That stuff is <i>coming-soon</i> &#8482;
        </p>
      </main>

      <Footer />
    </div>
  )
}
