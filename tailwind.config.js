/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html", // Include your HTML file
  ],
  theme: {
    extend: {

      fontFamily: {
        'elza-trail': ['Elza Trail', 'sans'],
        // You can add more font families here if needed
      },

      animation: {
        marquee: "marquee 25s linear infinite",
        animationtrain: "marquee 25s linear infinite reverse", // Add "reverse" here
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        animationtrain: {
          "0%": { transform: "translateX(50%)" }, // Start from 100%
          "100%": { transform: "translateX(-100%)" }, // End at 0%
        },
      },
    },
  },
  plugins: [],
}
