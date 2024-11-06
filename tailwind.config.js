/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "128px", 
      },
      colors: {
        primary: {
          light: "#4f8bff",
          DEFAULT: "#007bff",
          dark: "#0056b3",
        },
        status: {
          paid: "#34d399",
          unpaid: "#f87171",
        },
        background: {
          light: "#f3f4f6",
          white: "#ffffff",
        },
        text: {
          dark: "#111827",
          muted: "#6b7280", // Muted gray text for secondary information
        },
        white: "#FFFFFF",
        liner: "#605BFF",
        blue: "#0EABEB",
        liteBlue: "#718EBF",
        greyBlue: "#818194",
        liteRed: "#E11D29",
        greyDark: "#4F4F4F",
        grey: "#A7A7A7",
        greyLight: "#D3D3D3",
        greyLighter: "#F4F4F4",
        greyLightest: "#F6F8FB",
        black: "#141414",
        green: "#39973D",
        red: "#E74C3C",
        link: "#5678E9",
        alert: "#FFD351",
      },
      backgroundImage: {
        linerGradient:
          "linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover", "focus", "active"],
      backgroundColor: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
