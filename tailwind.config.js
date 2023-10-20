/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        philospar :"'Philosopher','sans-serif'",
        yantraman : "'Yantramanav', 'sans-serif'"
      },
      backgroundImage : {
        'backgroudBanner' : "url('https://i.ibb.co/XWgj2kt/banner.jpg')" ,
        'footerBackgroud' : "url('https://i.ibb.co/zSq7m96/footer-shape2.png')"

        
        
      }
    },
  },
  plugins: [require("daisyui")],
}

