/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
        keyframes: {
            carousel: {
                '0%': { transform: "translate(0%)" },
                '100%': { transform: "translate(50%)" },
            }
        },
        animation: {
            carousel: 'carousel 15s linear infinite'
        }
    },
    fontFamily: {
        'sans': ['"IBM Plex Sans Arabic"']
    }
  },
  plugins: [],
}

