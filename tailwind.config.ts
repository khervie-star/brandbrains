import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white100: "#F7FAFC",
        bb_yellow: "#1C4532",
        bb_orange: "#171923",
        bb_grey: "#718096",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        sofia: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
export default config;
