import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      sm: '1rem',
      base: '1.25rem',
      xl: '1.5rem',
      '2xl': '4rem'
    },
    colors: {
      'black': '#1E1E1E',
      'light-pink': '#E5CBD7',
      'pink': '#FFA3CF',
      'yellow': '#E4AF70'
    },
    margin: {
      '35px': '35px',
      '50px': '50px',
      '118px': '118px'
    },
    fontFamily: {
      archivo: ["Archivo", "sans-serif"]
    }
  },
  plugins: [],
};
export default config;
