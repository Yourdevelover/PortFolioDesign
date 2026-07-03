/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#faf7f2',
        ink: '#0f0e0d',
        clay: '#c2410c',
        sage: '#4a5d3f',
      },
    },
  },
  plugins: [],
}
