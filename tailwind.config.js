
import { nextui } from '@nextui-org/theme';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    container: {
      center: true,
    },
  },

  extend: {},
  plugins: [nextui()]
}

