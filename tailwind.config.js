/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'meme-green': '#2F4F4F',
          'meme-dark': '#121212',
        },
        animation: {
          'bounce-slow': 'bounce 3s infinite',
          'spin-slow': 'spin 4s linear infinite',
          'wiggle': 'wiggle 1s ease-in-out infinite',
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          }
        }
      },
    },
    plugins: [],
  }