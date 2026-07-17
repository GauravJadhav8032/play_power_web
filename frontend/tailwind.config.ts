import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        airbnb: {
          red: "#FF385C",
          dark: "#E31C5F",
          text: "#222222",
          secondary: "#717171",
          border: "#DDDDDD",
          hover: "#F7F7F7",
          light: "#F0F0F0",
        },
      },
      fontFamily: {
        circular: [
          "Circular",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["22px", { lineHeight: "30px" }],
        "3xl": ["26px", { lineHeight: "32px" }],
        "4xl": ["32px", { lineHeight: "40px" }],
      },
      boxShadow: {
        card: "0 6px 16px rgba(0,0,0,0.12)",
        "card-hover": "0 6px 20px rgba(0,0,0,0.2)",
        booking: "0 0 0 1px #DDDDDD, 0 6px 16px rgba(0,0,0,0.08)",
        header: "0 1px 0 rgba(0,0,0,0.08)",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        full: "9999px",
      },
      transitionTimingFunction: {
        airbnb: "cubic-bezier(0.45, 0, 0.55, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
