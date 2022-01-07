module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "bmc-proxima": ["Montserrat", "sans-serif"],
        "bmc-mono": ["Space Mono", "monospace"],
        "bmc-serif": ["Playfair Display", "serif"],
      },
      colors: {
        bmcblue: "#71A894",
      },
    },
  },
  plugins: [],
};
