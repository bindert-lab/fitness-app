/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Display",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      colors: {
        ios: {
          blue: "#0A84FF",
          green: "#30D158",
          orange: "#FF9F0A",
          red: "#FF453A",
          purple: "#BF5AF2",
          teal: "#64D2FF",
          bg: "#000000",
          surface: "#1C1C1E",
          surface2: "#2C2C2E",
          border: "#38383A",
          label: "#FFFFFF",
          secondary: "#8E8E93"
        }
      },
      borderRadius: {
        card: "20px",
        pill: "999px"
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.25)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};
