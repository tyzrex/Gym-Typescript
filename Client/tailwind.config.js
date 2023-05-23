/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-main": "#fcfcfc",
        "dark-main": "rgb(3, 7, 18)",
        "accent-1": "#a55e6f",
        "accent-2": "#245778",
        "accent-3": "#4f5975",
        "accent-4": "#7a5b72",
      },
    },
  },
  plugins: [],
};
