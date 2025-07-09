/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'delius': ['Delius', 'cursive'],
        'sour-gummy': ['Sour Gummy', 'cursive'],
      },
      colors: {
        'quiz-dark': '#0f172a',
        'quiz-primary': '#3b82f6',
        'quiz-secondary': '#10b981',
        'quiz-accent': '#f59e0b',
        'quiz-error': '#ef4444',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
}