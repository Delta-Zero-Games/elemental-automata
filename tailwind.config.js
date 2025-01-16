/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'element-fire': '#ff4444',
        'element-earth': '#8b4513',
        'element-water': '#4444ff',
        'element-air': '#ffffff',
      },
    },
  },
  plugins: [],
};