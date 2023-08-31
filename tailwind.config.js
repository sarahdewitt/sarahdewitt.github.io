/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'c-yellow': '#D2EC31',
      'c-blue': '#1E26DD',
      'c-orange': '#FF4121',
      'c-white': '#EDF2F4',
      'c-black': '#040F0F'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

