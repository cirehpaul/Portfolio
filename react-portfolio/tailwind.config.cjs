module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#00d4ff',
        purple: '#7f5af0',
        emerald: '#22c55e',
      },
      spacing: {
        '9/10': '90vh'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
