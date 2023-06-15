/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(0, 100%, 66%)",
        "light-violet": "hsl(270, 3%, 87%)",
        "medium-violet": "hsl(279, 6%, 55%)",
        "dark-violet": "hsl(278, 68%, 11%)",
      },
    },
  },
  plugins: [],
};
