/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'hsl(25, 97%, 53%)', // Orange 500
        },
        white: 'hsl(0, 100%, 100%)',
        gray: {
          500: 'hsl(217, 12%, 63%)',  // Grey 500
          900: 'hsl(213, 19%, 18%)',  // Grey 900
          950: 'hsl(216, 12%, 8%)',   // Grey 950
        },
      },
    },
  },
  plugins: [],
}
