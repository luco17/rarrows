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
    },
  },
  plugins: [],
};
