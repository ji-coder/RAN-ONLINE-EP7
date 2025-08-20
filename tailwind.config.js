/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monotype': ['Monotype Corsiva', 'sans'], // Adding Monotype Corsiva font
      },
      animation: {
        pushTop: 'pushTop 0.5s ease-out', // Add pushTop animation
      },
      keyframes: {
        pushTop: {
          '0%': {
            transform: 'translateY(100%)', // Start off-screen at the bottom
          },
          '100%': {
            transform: 'translateY(0)', // End at normal position
          },
        },
      },
      cursor: {
        run: "url('/cursors/run-cursor.png'), auto", // 👈 Custom Run Online cursor
      },
    },
  },
  plugins: [],
}
