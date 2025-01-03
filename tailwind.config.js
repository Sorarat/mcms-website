/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBeige: {
          DEFAULT: '#C4B7A3', // Full color
          '70': 'rgba(196, 183, 163, 0.7)', // 70% opacity
          '40': 'rgba(196, 183, 163, 0.4)', // 4% opacity
        },
        backgroundColor: 
        '#FAF9F4',
      }
    },
  },
  plugins: [],
}

