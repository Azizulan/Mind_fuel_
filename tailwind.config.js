/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: {
          "100": "#eeebe0",
          "200": "#e5e2d6",
          "300": "rgba(238, 235, 224, 0.2)",
        },
        crimson: "#ec1758",
        white: "#fff",
        whitesmoke: "#eee",
        dimgray: {
          "100": "#6b5452",
          "200": "#594641",
          "300": "rgba(106, 106, 106, 0.7)",
        },
        darkslategray: "#424242",
        gray: {
          "100": "#442f2c",
          "200": "#161616",
          "300": "rgba(68, 47, 44, 0.1)",
        },
        darkgray: "#afafaf",
        gainsboro: "#e6e6e6",
        lightgray: "#d4d1c7",
        deeppink: "#ff3d80",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        "80xl": "99px",
        "13xl": "32px",
        "3xs": "10px",
        "21xl": "40px",
        "9xl": "28px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "base-9": "15.9px",
      "21xl": "40px",
      "5xl": "24px",
      xl: "20px",
      "lg-3": "18.3px",
      "4xl": "23px",
      lg: "18px",
      "lg-8": "18.8px",
      "lgi-8": "19.8px",
      "lg-1": "18.1px",
      "5xs": "8px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  
}