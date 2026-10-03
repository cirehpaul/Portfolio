module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#22c55e',
        'accent-dim': '#16a34a',
        surface: {
          DEFAULT: '#0a0a0f',
          100: '#0f0f16',
          200: '#13131c',
          300: '#1a1a25',
          400: '#22222f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '9/10': '90vh'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
