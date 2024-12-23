/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
        beige: '#E1B180',
        'dark-brown': '#362B1F',
        'dark-grey': '#272a2b',
        'grey-transparent': 'rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        miguel: "url('/images/miguel.jpg')"
      },
      fontFamily: {
        roboto: ['Roboto', 'ui-sans-serif', 'sans-serif']
      }
    }
  },
  plugins: []
};
