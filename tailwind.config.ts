/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "infinite-scroll-header": "infinite-scroll-header 5s linear infinite"
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "infinite-scroll-header": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        }
      },
    },
    colors: {
      black: "#1E1E1E",
      "light-pink": "#E5CBD7",
      pink: "#FFA3CF",
      yellow: "#E4AF70",
      transparent: "transparent",
      white: "#F8F7F4",
      gray: "#D6D8DC",
      "light-gray": "#909090"
      
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      mondwest: ["PP Mondwest", "sans-serif"],
      montreal: ["PP Neue Montreal", "sans-serif"],
    },
  },
  plugins: [],
}
