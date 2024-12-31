import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        upDown: "upDown 0.3s ease-in-out",
      },
    },
  },
  plugins: [],

  //  모바일에선 hover 스타일 막기
  future: {
    hoverOnlyWhenSupported: true,
  },
};
