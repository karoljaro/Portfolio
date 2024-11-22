import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
   content: [
      '~/components/**/*.{vue,js,jsx,mjs,ts,tsx}',
      '~/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
      '~/pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
      '~/plugins/**/*.{js,ts,mjs}',
      '~/composables/**/*.{js,ts,mjs}',
      '~/utils/**/*.{js,ts,mjs}',
      '~/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
      '~/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
      '~/app.config.{js,ts,mjs}',
      '~/app/spa-loading-template.html'
   ],
   theme: {
      screens: {
         xl: '1920px',
         lg: '1440px'
      },
      extend: {
         colors: {
            primary: '#121212',
            secondary: '#3D3D3D',
            third: '#A6A6A6',
            fourth: '#F5F5F5'
         },
         fontFamily: {
            'fira-code': ['Fira Code', 'Fira Code fallback', ...fontFamily.sans],
            'open-sans': ['Open Sans', 'Open Sans fallback', ...fontFamily.sans]
         },
         padding: {
            '40.5': '10.125rem'
         },
      }
   },
   plugins: []
};
