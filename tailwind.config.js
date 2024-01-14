/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'playstation': '#00439C',
        'xbox': '#107C10',
        'nintendo': '#E4000F',
        'windows': '#00A4EF'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
		themes: ["dracula"],
		darkTheme: "dracula",
	},
}
