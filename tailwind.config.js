/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { top: '10', left: '-10'},
          '100%': { top: '10', left: '6'},
        },
        animation: {
          slideIn: 'slideIn 1s ease-in'
        }
      },

      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'titleGradient': "url('https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c43f76f4bbf900dc7ec834_Page%20Banner%20Background.svg')",
      },
      colors:{
        'primaryColor': '#003057',
      },
    },    
      backgroundImage: {
        "rating":  "url('/src/assets/images/rating.svg')",
        "discount": "url('/src/assets/images/discount-background.svg')",
        "product": "url('/src/assets/images/product.svg')"
      }
    },
  }
//   plugins: [],
// }