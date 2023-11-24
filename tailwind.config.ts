import { tailwindLayouts } from 'tailwind-layouts';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Helvetica'],
        code: ['Courier']
      },
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
        'auto_max-content': 'minmax(18rem, 20rem) 1fr'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderWidth: {
        6: '6px'
      },
      colors: {
        primary_light: '#f97316',
        primary_dark: '#62929E',
        bg_light: '#FDFDFF',
        bg_dark: '#393D3F',
        error: '#f87171',
        success: '#4ade80'
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(-0px)' }
        },
        slideUpAndFade: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))'
          },
          to: { transform: 'translateX(0)' }
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' }
        }
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 0.4s cubic-bezier',
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out'
      }
    }
  },
  plugins: [tailwindLayouts]
};

export default config;
