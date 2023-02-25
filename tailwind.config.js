/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center : true,
    },
    extend: {
      aspectRatio : {
        '2/3' : '2 / 3',
      }
    },
  },
  plugins: [],
}
