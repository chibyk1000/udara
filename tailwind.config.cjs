/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        banner: "calc(100vh - 6rem)",
      },
      colors: {
        primary: "#0e265e",
      },
      gridTemplateColumns: {
        slide1: "30% 40%"
      }
    },
    fontFamily: {
      "dancing-script": ["Dancing Script", 'cursive'],
      'pacifico': ['Pacifico', 'cursive']
    },
  },
  plugins: [],
};
