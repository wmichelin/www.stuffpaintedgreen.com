import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LR79RFF6EM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LR79RFF6EM');
      `}
      </Script>

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
