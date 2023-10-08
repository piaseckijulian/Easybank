import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px'
      },
      colors: {
        primary: 'hsl(136, 65%, 51%)',
        secondary: 'hsl(192, 70%, 51%)',
        darkBlue: 'hsl(233, 26%, 24%)',
        grayish: 'hsl(0, 0%, 20%)',
        lightGrayish: 'hsl(220, 16%, 96%)',
        gray: 'hsl(0, 0%, 98%)'
      }
    },
    plugins: []
  }
};
export default config;
