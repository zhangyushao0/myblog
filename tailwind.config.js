/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,js,svelte}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

