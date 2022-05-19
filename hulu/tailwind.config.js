module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}