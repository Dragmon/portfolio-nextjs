import { useEffect } from 'react';
import '../styles/globals.css';
import { Nunito } from '@next/font/google';
import { AnimatePresence } from 'framer-motion';
import TagManager from 'react-gtm-module';
import Layout from '../components/Layout';

const nunito = Nunito({ subsets: ['latin'] });

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5KQBWJV' });
  }, []);
  return (
    <Layout>
      <main className={nunito.className}>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />;
        </AnimatePresence>
      </main>
    </Layout>
  );
}

export default MyApp;
