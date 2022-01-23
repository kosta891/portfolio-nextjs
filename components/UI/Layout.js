import Head from 'next/head';

import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Layout({ title, description, children }) {
  return (
    <div className='min-h-screen max-w-3xl mx-auto px-6 '>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>

      <Navbar />
      <main className='page'>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Miloš Kostadinović - Web Developer',
  description: 'Miloš Kostadinović web developer portfolio site.  ',
};
