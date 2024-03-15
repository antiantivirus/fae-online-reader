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
    fontSize: {
      xxs: '0.7rem',
      xs: '0.75rem',
      base: '1rem',
      xl: '1.75rem',
      '2xl': '3rem'
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
        red: '#ff8e8e',
        burgundy: '#421629',
        grey: '#e5e5e5'
      },
      boxShadow: {
        DEFAULT: '0 0px 6px 0 rgb(var(--colour-shadow) / .19)',
      },
      borderRadius: {
        DEFAULT: '15px'
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideLeftOpen: 'slideLeftOpen 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideLeftClose: 'slideLeftOpen 300ms cubic-bezier(0.87, 0, 0.13, 1)'
      },
    },
  },
  plugins: [],
};
export default config;
