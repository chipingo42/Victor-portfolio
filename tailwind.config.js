/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    extend: {
      fontFamily: {
        Metamorphous: 'Metamorphous',
        Inter: 'Inter',
        Poppins: 'Poppins',
      },
      content: {
        circle: "url('./svg/circle.svg')",
        sideBg: "url('./svg/sideBg.svg')",
      }
    },
  },
  plugins: [],
}
