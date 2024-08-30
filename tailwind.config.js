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
        'pomodoro-pr': '#f0a5a5',
        'pomodoro-sec': '#f9cecc',
        'pomodoro-txt': '#780b0b',
        'shadow': '#f08989',
        'timer': '#bc3939',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}
}
