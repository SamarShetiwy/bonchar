/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      fontFamily:{
        fontFamily: "'proxima-nova', sans-serif"
      },
      screens: {
          'xxs': '445px',
          'xs': '500px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
          '3xl': '1700px',
      },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-2xl': {
          'text-shadow': '1px 1px 1px rgba(0,0,0,1)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
