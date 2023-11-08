/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: process.env.NODE_ENV === "development" ? [{ pattern: /./ }] : [],
};
