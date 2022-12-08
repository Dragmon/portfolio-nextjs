import { useEffect } from 'react';
import '../styles/globals.css';
import { Nunito } from '@next/font/google';
import TagManager from 'react-gtm-module';
import Layout from '../components/Layout';

const nunito = Nunito({ subsets: ['latin'] });

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: `${process.env.GTM_ID}` });
  }, []);
  return (
    <Layout>
      <main className={nunito.className}>
        <Component {...pageProps} key={router.asPath} />
      </main>
    </Layout>
  );
}

export default MyApp;
