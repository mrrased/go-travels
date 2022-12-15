/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      'md': '769px',
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
        'pink-blue-50': '#57112f',
        'pink-black': '#21283f',
        'pink-yellow': '#ffa903',
        'smooth-black': '#21283f',
        'smooth-yellow': '#ffa903',
        'smooth-gray': '#606575',
        'smooth-gray-50': '#e7e8eb',
        'smooth-pink': '#ca96b1',
        'smooth-gray-100': '#606575',
        'smooth-yellow-100': '#cd7e0f',
        'smooth-gray-150': '#eae8e8',
        'smooth-yellow-150': '#ffa903',
        'pink-black-100': '#232b38',
        'smooth-gray-200': '#cecece',
        'smooth-gray-10': '#e1e1e1',
        'smooth-gray-20': '#f2f2f2',
        'smooth-gray-15': '#ebebee',
        
      },
    },
  },
  plugins: [],
}
