/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      sizes: {
        'pomodoro': '20rem',
      },
      colors: {
        'pomodoro-bg': '#FECFCF',
        'pomodoro-pr': '#eabfe7',
        'pomodoro-sec': '#EBA2A2',
        'pomodoro-txt': '#864444',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}
}
