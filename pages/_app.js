import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import ThemeSwitch from '../components/UI/ThemeSwitch';
import Layout from '../components/UI/Layout';
import { PortfolioProvider } from '../context/context';

function MyApp({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute='class'
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </PortfolioProvider>
  );
}

export default MyApp;

// css global styles fonts, media queries
// navbar
// footer
