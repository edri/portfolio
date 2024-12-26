/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        miguel: "url('/images/miguel.jpg')"
      },
      colors: {
        beige: '#E1B180',
        'dark-brown': '#362B1F',
        'dark-grey': '#272a2b',
        'grey-transparent': 'rgba(0, 0, 0, 0.5)',
        'grey-transparent-dark': 'rgba(0, 0, 0, 0.8)',
        'grey-transparent-light': 'rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        roboto: ['Roboto', 'ui-sans-serif', 'sans-serif']
      }
    }
  },
  plugins: []
};
