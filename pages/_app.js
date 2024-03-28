import { useEffect } from 'react';
import '../styles/globals.css';
import { Nunito } from '@next/font/google';
import TagManager from 'react-gtm-module';
import Layout from '../components/Layout';

const nunito = Nunito({ subsets: ['latin'] });

const tagManagerArgs = {
  gtmId: 'GTM-5KQBWJV',
};

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
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
