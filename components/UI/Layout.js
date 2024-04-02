import Head from 'next/head';

import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Layout({ title, description, children }) {
  return (
    <div className='max-w-3xl mx-auto px-6 '>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ID}`}
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', {process.env.ID});
        </script>
      </Head>

      <Navbar />
      <main className='page'>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Miloš Kostadinović - Web Developer',
  description:
    'Miloš Kostadinović personal portfolio website. Frontend Web developer.',
};
