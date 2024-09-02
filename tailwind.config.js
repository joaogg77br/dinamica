/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      wiggle: {
        '0%': { transform: 'translate(+300px,0px)' },
        '100%': { transform: '' },
      }
    },
    extend: {
        animation: {
          wiggle: 'wiggle 1s ease-in-out',
        } 
    },
  },
  plugins: [],
}

