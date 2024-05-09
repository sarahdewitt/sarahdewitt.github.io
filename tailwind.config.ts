import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontSize: {
    //   sm: '12px',
    //   base: '16px',
    //   xl: '20px',
    //   '2xl': '64px'
    // },
    colors: {
      'black': '#1E1E1E',
      'light-pink': '#E5CBD7',
      'pink': '#FFA3CF',
      'yellow': '#E4AF70',
      'transparent': 'transparent',
      'white': '#FFFFFF'
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    }
  },
  plugins: [],
};
export default config;
