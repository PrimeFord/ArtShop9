import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        white: "#FFF222",
        black: "#000000",
        "primary-color": "#00714B",
        "secondary-color": "#002917",
        "neutral-500": "#454545",
        "neutral-300": "#727272",
        "neutral-100": "#A1A1A1",
      },
      fontFamily: {
        circular: ["Circular", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
