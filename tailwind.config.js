/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
      colors: {
        'primary': '#51555A',
        'secondary': '#F9EE61',
        'tertiary': '#719480',
        'blur-secondary': 'rgba(249, 238, 97, 0.5)'
      }
    },
  },
  plugins: [],
}