/** @type {import('tailwindcss').Config} */

import tailwindAnimate from 'tailwindcss-animate';
import scroll from 'tailwind-scrollbar';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        accent: '#7987FF',
      },
      backgroundImage: {
        'gradient-background': 'linear-gradient(to top, #191B1F, #26292E)',
      },
      boxShadow: {
        'container-neumorph':
          '-0.5rem -0.625rem 2.5rem -0.3125rem rgba(150, 190, 231, 0.15), 0.5rem 0.625rem 2.5rem 0.3125rem rgba(10, 10, 10, 0.7);',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindAnimate, scroll],
};
