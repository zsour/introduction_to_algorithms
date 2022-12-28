import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../../style/index.css';
export default function App({ Component, pageProps }: AppProps) {

  return (
  
    <div className="content">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
          	<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet" />
        </Head>
        <span className="content-background"></span>
        <Component {...pageProps} />
    </div>
  )
}