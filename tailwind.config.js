const colors = require('tailwindcss/colors');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme-black': '#121212',
        'theme-black2': '#212121',
        'theme-white': '#FAFAFA',
      },

      gridTemplateRows: {
        // Simple 16 column grid
        middle: '1fr 4fr 1fr',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
};
