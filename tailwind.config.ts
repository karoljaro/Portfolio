import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';


/** @type {import('tailwindcss').Config} */
export default <Partial<Config>> {
  content: [
    "~/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "~/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "~/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "~/plugins/**/*.{js,ts,mjs}",
    "~/composables/**/*.{js,ts,mjs}",
    "~/utils/**/*.{js,ts,mjs}",
    "~/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "~/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "~/app.config.{js,ts,mjs}",
    "~/app/spa-loading-template.html"
  ],
  theme: {
    screens: {
      xl: '1920px',
      lg: '1440px',
    },
    extend: {
      fontFamily: {
        "inter": ["Inter", 'Inter fallback', ...fontFamily.sans],
        'kumbh-sans': ['Kumbh Sans', 'Kumbh Sans fallback', ...fontFamily.sans]
      },
      padding: {
        '40.5': '10.125rem',
      },
      backgroundColor: {
        "primary": '#141414',
      }
    },
  },
  plugins: [],
}

