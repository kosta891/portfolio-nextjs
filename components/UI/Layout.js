import Footer from '../Footer';
import Navbar from '../Navbar';
import ThemeSwitch from './ThemeSwitch';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Navbar />
      <ThemeSwitch />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'Portfolio',
  description: 'Miloš Kostadinović web developer portfolio.  ',
  keywords: 'web developer, frontend, react, javascript',
};
