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
      },
      opacityHy:{
          "0%": { opacity:"0%"},
          "100%":{ opacity:"100%"}
      }
    },
    extend: {
      colors:{
          "verde":"#13524A",
          "laranja":"#F58634",
          "cinza":"#EEEEEF"
      },
      spacing:{
          "fifityMin":'-5%'
      },
        animation: {
          wiggle: 'wiggle .3s ease-in-out',
          opacityHy: "opacityHy .2s ease-in"
        } 
    },
  },
  plugins: [],
}

