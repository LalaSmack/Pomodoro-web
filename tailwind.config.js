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
        'pomodoro-sec': '#fbd9fc',
        'pomodoro-txt': '#864444',
        'shadow': '#dfa8da',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}
}
