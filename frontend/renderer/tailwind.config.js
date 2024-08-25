
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    flowbite.content(),
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
    flowbite.plugin(),
  ],
}
