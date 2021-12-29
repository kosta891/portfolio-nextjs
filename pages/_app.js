import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import ThemeSwitch from '../components/UI/ThemeSwitch';
import Layout from '../components/UI/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

// css global styles fonts, media queries
// navbar
// footer
