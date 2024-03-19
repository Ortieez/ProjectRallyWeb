import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F1E7C9",
        secondary: "#D8CEB3",
        accent: "#FFC09F",
        green: "#ADF7B6",
        red: "#FFC09F",
        yellow: "#FFEE93",
        blue: "#A0CED9",
      },
    },
  },
  plugins: [],
};
export default config;
