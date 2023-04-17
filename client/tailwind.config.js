/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },

      "max-xl": { max: "1279px" },

      "max-ex": { max: "1044px" },

      "max-lg": { max: "1023px" },

      "max-medium": { max: "820px" },

      "max-md": { max: "767px" },

      "max-sm": { max: "639px" },
    },
  },
  plugins: [],
};
