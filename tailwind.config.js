/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollBackground: {
          "0%": { backgroundPosition: "-800px 0px" },
          "100%": { backgroundPosition: "800px 0px" },
        },
      },
      animation: {
        "scroll-bg": "scrollBackground 5s linear infinite",
      },
    },
  },
  plugins: [],
}
