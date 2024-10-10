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
     downside:{
        "0%": {transform:'translate(0px, -300px)',
          opacity:"0%"
        },
        "75%": {transform:'translate(10px,0px)',
          opacity:"50%"
        },
        "100%": {transform:'translate(10px,0px)',
          opacity:"100%"
        }
      },
      opacityHy:{
          "0%": { opacity:"0%"},
          "100%":{ opacity:"100%"}
      }
    },
    extend: {
      height:{
          "Max":"500px",
        "noticesBanner":"404px",
        "720":"720px"
      },
      width:{
        "Max":"490px",
        "noticesBanner":"300px"
      },
      borderRadius:{
          "custom":"50px"
      },
      fontFamily:{
          'nunitoSans':['nunitoSans', 'sans-serif']
      },
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
          opacityHy: "opacityHy .3s ease-in",
          downside:'downside .3s ease-in'
        } 
    },
  },
  plugins: [],
}

