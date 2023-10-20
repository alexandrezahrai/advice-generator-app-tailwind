/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        xl: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "36px",
        },
      },
      colors: {
        "cyan-light": "hsl(193, 38%, 86%)",
        "green-neon": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "grayish-blue-dark": "hsl(217, 19%, 24%)",
        "blue-dark": "hsl(218, 23%, 16%)",
      },
      boxShadow: {
        custom:
          "0 100px 140px -50px rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};
