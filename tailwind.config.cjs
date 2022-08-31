/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  
  ],
  theme: {

    fontFamily: {
      'uno': ['Inconsolata', 'monospace'],
      'dos': ['Silkscreen', 'cursive'] // Ensure fonts with spaces have " " surrounding it.
    },

    extend: {
      'animation': {
        'text':'text 12s ease infinite',
        
    },
   backgroundImage: {
      radial: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      'radial-at-b':
          'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      
    },
    'keyframes': {
      'text': {
        '0%, 100%': {
          'background-size':'200% 200%',
           'background-position': 'left center'
       },
       '50%': {
          'background-size':'200% 200%',
           'background-position': 'right center'
       }
      },
    },
  },
  plugins: [],
}
 }
