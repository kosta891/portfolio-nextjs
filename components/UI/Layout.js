import Head from 'next/head';
import { useContext } from 'react';
import PortfolioContext from '../../context/context';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Layout({ title, description, keywords, children }) {
  return (
    <div className='min-h-screen max-w-3xl mx-auto px-6 '>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Navbar />
      <main className='page'>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Miloš Kostadinović - Web Developer',
  description: 'Miloš Kostadinović web developer portfolio.  ',
  keywords: 'web developer, frontend, react, javascript',
};
