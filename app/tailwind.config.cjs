/** @type {import('tailwindcss').Config} */

export default {
  plugins: [],
    theme: {
    extend: {},
  },
  daisyui: {themes: ["dark", "cupcake"],},
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: false, // or 'media' or 'class'
}