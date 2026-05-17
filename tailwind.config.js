/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        msc: {
          dark: '#155B3A',
          green: '#1F6B47',
          gold: '#C7A15A',
          beige: '#DCC28A',
        }
      }
    },
  },
  plugins: [],
}
