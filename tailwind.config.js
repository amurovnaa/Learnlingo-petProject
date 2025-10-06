/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        lg2: "1220px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
