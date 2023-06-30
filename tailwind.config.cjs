/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        rafblue: "#002856",
        rafaltblue: "#6BA4B8",
        rafred: "#cf0a2c",
        govblue: "#1d70b8",
      },
      keyframes: {
        fadeUp: {
          "0%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeOpacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards 0.5s",
        fadeOpacity: "fadeOpacity 0.4s ease forwards 0.5s",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
