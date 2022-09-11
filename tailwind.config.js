/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      'md': '768px',
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536',
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'pink-blue': '#622243',
        'pink-black': '#21283f',
        'pink-yellow': '#ffa903',
        'smooth-black': '#21283f',
      },
    },
  },
  plugins: [],
}
