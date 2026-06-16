/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0f172a',
        surfaceSoft: '#1e293b',
        accent: '#38bdf8',
        accentDark: '#0ea5e9',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
};
