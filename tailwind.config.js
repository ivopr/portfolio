/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF0F7",
          100: "#CED5E8",
          200: "#AFBADA",
          300: "#909FCB",
          400: "#7085BD",
          500: "#516AAE",
          600: "#41558B",
          700: "#313F68",
          800: "#202A46",
          900: "#101523"
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
}
