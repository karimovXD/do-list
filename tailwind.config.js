/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    screens: {
      xxl: '1440px',
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
      none: '100%',
    },
    extend: {
      colors: {
        black: '#000000',
        secondary: '#838383',
        white: '#ffffff',
        light: '#F2F2F2',
        red: '#ff5945',
      }
    },
  },
  plugins: [],
}


