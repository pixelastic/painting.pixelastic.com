/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{md,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'heading': ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem',      // 16px - corps de texte
        'lg': '1.125rem',    // 18px - medium breakpoint
        'xl': '1.25rem',     // 20px - large breakpoint
        '2xl': '1.875rem',   // 30px - H1 (titre site)
        '3xl': '2.25rem',    // 36px - H2 (titres posts)
      },
      colors: {
        'gray-dark': '#2d3748',   // Titres
        'gray-medium': '#4a5568', // Corps de texte
        'teal': '#319795',        // Accent (liens, etc.)
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
