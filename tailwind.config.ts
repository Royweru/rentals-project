import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#F7F8FA",
          secondary: "#FEFFFF",
        },
        text: {
          black: "#000000",
          blackgrey: "#383838",
          darkblue: "#020f29",
        },
        accent: {
          yellow: "#FBE30B",
          desructive: "#F7231C",
        },
        blue: {
          france: "#318CE7",
          capri: "#0CAFFF",
          light: "#ADD8E6",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        nunito: "var(--font-nunito)",
        montserrat: "var(--font-montserrat)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
