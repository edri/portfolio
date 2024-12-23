/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
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
