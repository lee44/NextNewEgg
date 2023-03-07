/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin')],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1921px',
    },
    extend: {
      colors: {
        primary: '#050c2e',
        secondary: '#e05d00',
        button: '#e05d00',
        'button-hover': '#f46500',
        'primary-bg': '#121212',
        'secondary-bg': '#202020',
        'tertiary-bg': '#333',
        'card-bg': '#212121',
      },
    },
  },
  darkMode: 'class',
}
