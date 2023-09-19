/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx,html,mdx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: '500px',
      md: [
        { min: '668px', max: '767px' },
        { min: '868px' },
      ],
      lg: '1100px',
      xl: '1400px'
    },
    extend: {
      colors: {
        gray: {
          50: "#f4f8ff",
          100: "#fbf1f2",
          200: "#efefef",
          300: "#d2efe0",
          900: "#11142d",
          "50_01": "#fafcff",
          "50_03": "#f9fbff",
          "900_03": "#0f0e17",
          "50_04": "#f5f9ff",
          "900_01": "#0d062d",
          "50_02": "#f8f9fa",
          "900_02": "#0d1624",
          "700_0c": "#5555550c",
          "700_11": "#55555511",
        },
        blue: {
          50: "#e0ebff",
          200: "#a6c8ff",
          800: "#0051d5",
          900: "#003995",
          A700: "#0a58ff",
          A700_01: "#0061ff",
          A700_02: "#0065ff",
          A200: "#4d90ff",
        },
        white: { A700: "#ffffff" },
        blue_gray: {
          50: "#eaecf0",
          100: "#d6dae2",
          200: "#bac1ce",
          300: "#9ea8ba",
          400: "#74839d",
          600: "#5f6c86",
          700: "#424c5d",
          900: "#262b35",
          "100_6c": "#d1d3d46c",
          "700_02": "#535353",
          "700_01": "#535763",
          "400_01": "#808191",
        },
        black: {
          900: "#000000",
          "900_b2": "#000000b2",
          "900_3f": "#0000003f",
          "900_01": "#090b0d",
        },
        colors1: "#000000ff",
        red: { 100: "#ffe1cc", 200: "#fa9a9a", 700: "#d03329" },
        light_blue: { 100: "#b0e5fc" },
        green: { 600: "#349765", A100: "#b5eacd" },
        deep_orange: { 50: "#f9eee3", 400: "#d58c48", A100_33: "#dfa87433" },
        orange: { A700: "#ff6700" },
        colors: "#349765ff",
      },
      fontFamily: {
        gilroy: "Gilroy",
        opensans: "Open Sans",
        montserrat: "Montserrat",
        inter: "Inter",
      },
      boxShadow: {
        bs1: "0px 0px  10px 4px #5555550c",
        bs2: "0px 4px  8px -4px #0000003f",
        bs: "0px 0px  10px 4px #55555511",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@flowbite/plugin')]
};
