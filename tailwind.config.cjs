/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,svelte,js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#4F46E5",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
