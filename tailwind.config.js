import { colors } from './src/config/colors.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        accent: colors.accent,
        neutral: colors.neutral,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        white: colors.white,
        black: colors.black,
      },
      fontFamily: {
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInUp90: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '0.9',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-90': 'fadeInUp90 0.8s ease-out forwards',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-0': {
          'animation-delay': '0ms',
        },
        '.animation-delay-100': {
          'animation-delay': '100ms',
        },
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-700': {
          'animation-delay': '700ms',
        },
        '.animation-delay-800': {
          'animation-delay': '800ms',
        },
        '.animation-delay-900': {
          'animation-delay': '900ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
