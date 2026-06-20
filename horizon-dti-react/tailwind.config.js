/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#e94560',
        text: '#333333',
        'text-light': '#666666',
        'light-gray': '#f8f9fa',
        'border-color': '#e0e0e0',
      },
      fontFamily: {
        sans: ['Inter', 'Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
