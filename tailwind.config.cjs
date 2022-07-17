/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}"
    ],
    theme: {
        colors: {
            "header-blue": "#363a4a",
            "light-blue": "#5cb8c9",
            "dark-aqua": "#438F94",
            "white": "#ffffff",
            "slate": "#58717c",
            "blue-gray": "#557681",
            black: "colors.black",
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            blue: colors.blue,
        },
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
