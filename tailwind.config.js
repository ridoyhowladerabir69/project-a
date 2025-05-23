/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primaryFont': ["Poppins", "sans-serif"],
        'secondaryFont': ["Courgette", "cursive"],
      },
      colors: {
        'primaryColor': '#D8FE1E',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

