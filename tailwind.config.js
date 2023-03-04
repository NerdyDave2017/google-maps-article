/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: {
        default: "#8D6CEB",
        light: "rgba(141, 108, 235, 0.3)",
      },
      white: "#fff",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
