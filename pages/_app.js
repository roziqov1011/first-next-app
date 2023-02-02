import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '@/styles/style.css'
import {Provider} from 'next-auth/client'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script 
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-QCH4C2QQHB`}
      />
      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QCH4C2QQHB', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
    </>
    )
}
