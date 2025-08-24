/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.svg',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        accentPurple: '#a259f7',
        accentBlue: '#00eaff',
        textPrimary: '#f5f5f5',
        textSecondary: '#b3b3b3',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        neon: '0 0 8px #a259f7, 0 0 16px #00eaff',
      },
    },
  },
  plugins: [],
};
