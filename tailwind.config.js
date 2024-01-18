/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "auto 1fr",
      },
      maxWidth: {
        sidebar: "250px",
      },
    },
  },
  plugins: [],
};
