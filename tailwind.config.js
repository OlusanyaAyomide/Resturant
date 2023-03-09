/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        infant:['Cormorant Infant','sans-serif'],
        josefin:['Josefin Sans','sans-serif']
      },
      colors:{
        "r-yellow":"var(--r-yellow)",
        "h1-text":"var(--deepblack)",
        "base-text":"var(--light-black)",
        deeprblack:"var(--deeprblack)",
        "trans-black":"var(--trans-black)",
        "white-text":"var(--white-text)",
        "r-pink":"var(--r-pink)"
      },
      screens:{
        "sm":"520px"
      }
    },
  },
  plugins: [],
}
