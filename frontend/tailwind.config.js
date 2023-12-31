/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0px 90px -10px rgba(0, 0, 0, 0.3)",
        'bc1': "0 0px 25px -5px rgba(0, 0, 0, 0.3)",
      },
    },
    fontFamily: {
      monse: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
