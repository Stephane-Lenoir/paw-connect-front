import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/app.tsx',
    './app/globals.css',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': '#A7C7E7',
        'secondary-color': '#89d9d1',
        'background-color': '#F0F8FF',
        'text-color': '#4A4A4A',
        'card-bg': '#FFFFFF',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
