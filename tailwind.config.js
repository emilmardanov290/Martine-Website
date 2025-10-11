/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.htm"], 
    theme: {
    extend: {
        screens: {
        '2xsm': '400px',
        '3xl': '1920px',
        '4xl': '2200px',
      },
    },
    },
    plugins: [],
}