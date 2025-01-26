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
          '40': 'rgba(196, 183, 163, 0.4)', // 40% opacity
        },
        backgroundColor: 
        '#FAF9F4',
        lightYellow: {
          DEFAULT: '#F6F5E8',
          '50': 'rgba(246, 245, 232, 0.5)', // 50% opacity
        }
      }
    },
  },
  plugins: [],
}

