import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

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
