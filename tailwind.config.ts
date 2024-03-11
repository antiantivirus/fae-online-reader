import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['selector', '[data-theme^="dark-"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['New Edge'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: 'var(--colour-primary)',
        background: 'var(--colour-background)',
        typography: 'var(--colour-typography)',
        black: '#000000',
        white: '#ffffff',
        red: '#ff8e8e'
      },
    },
  },
  plugins: [],
};
export default config;
