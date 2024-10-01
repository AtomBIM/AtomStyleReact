/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    extend: {
      colors: {
        AtomGray900: "#1A1A1A",
        AtomGray850: "#484848",
        AtomGray800: "#808080",
        AtomGray700: "#939598",
        AtomGray300: "#D1D3D4",
        AtomGray200: "#E8E9E9",
        AtomGray100: "#F6F6F6",
        AtomGreen: "#008066",
        AtomGreen800: "#7CBEB1",
        AtomGreen100: "#DFEFEC",
        AtomDarkGreen: "#004B39",
        AtomDarkGreen800: "#7CA39A",
        AtomDarkGreen100: "#DFE9E6",
        AtomLightGreen: "#82CA9C",
        AtomLightGreen800: "#BFE4CC",
        AtomLightGreen100: "#EFF8F3",
        AtomRed: "#F15B5B",
        AtomRed800: "#F8ABAB",
        AtomRed100: "#FDEBEB",
        AtomPink: "#F8AB9E",
        AtomPink800: "#FBD4CD",
        AtomPink100: "#FEF5F3",
        AtomBlue: "#5C74B8",
        AtomBlue800: "#ACB8DB",
        AtomBlue100: "#EBEEF6",
        AtomYellow: "#E5CA1E",
        AtomYellow800: "#F6E26D",
        AtomYellow100: "#FCF8E3",
        AtomBG100: "#F7F8FB",
        AtomBG000: "#FFFFFF",
        AtomWhite: "#FFFFFF",
        AtomBlack: "#000000",
      },
    },
  },
  plugins: [],
})
