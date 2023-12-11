/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "var(--primary)",
        },
        status: {
          success: "var(--status-success)",
          notava: "var(--status-notavailable)",
          warning: "var(--status-warning)",
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
});
