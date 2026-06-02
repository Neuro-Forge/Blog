/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: { 
      fontFamily: {
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
        jakarta: ['Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

