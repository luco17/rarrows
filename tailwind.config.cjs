/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        rafblue: "#002856",
        rafred: "#cf0a2c",
      },
    },
  },
  plugins: [],
};
