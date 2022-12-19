import type { AppProps } from 'next/app';
import '../style/index.css';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className="content">
        <span className="content-background"></span>
        <Component {...pageProps} />
    </div>
  )
}