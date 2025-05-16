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
      slackLight: ['Slack Light']
    },
    fontSize: {
      xxs: '0.8rem',
      xs: '0.9rem',
      base: '1.2rem',
      large: '1.4rem',
      medium: '1.5rem',
      xl: '2.1rem',
      '2xl': '3.6rem'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-silver": "linear-gradient(61.29deg, #525258 0%, #B1B1BE 50%, #525258 100%)",
        "gradient-pdf": "linear-gradient(61.29deg, #525258 13.21%, #B1B1BE 85.04%);"
      },
      colors: {
        primary: 'var(--colour-primary)',
        secondary: 'var(--colour-secondary)',
        background: 'var(--colour-background)',
        typography: 'var(--colour-typography)',
        silver: {
          DEFAULT: '#525258',
          light: '#ededee'
        },
        black: '#000000',
        white: '#ffffff',
        red: '#FF0000',
        burgundy: '#421629',
        grey: '#e5e5e5'
      },
      boxShadow: {
        DEFAULT: '0 0px 6px 0 rgb(var(--colour-shadow) / .19)',
        'home': '0 0px 6px 0 rgba(77, 0, 18, .19)',
        hover: '0 0px 10px 0 rgb(var(--colour-shadow) / .19)'
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
      maxWidth: {
        'boxWide': '57.6rem',
        'box': '50.4rem',
      },
      width: {
        'icon': '2.25rem'
      },
      height: {
        'icon': '2.25rem'
      }
    },
  },
  plugins: [],
  safelist: [
    'fill-white',
  ]
};
export default config;
