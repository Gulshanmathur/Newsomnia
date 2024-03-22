/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: { // Add custom breakpoints if needed for utility classes
        'custom-md': '912px',
        'custom-sm':"808px"
        
      },
      fontFamily:{
        sans: [
          '"Inter var", sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
        MeowScript:[
          '"Meow Script", cursive'
        ]

      }

    },
  },
  plugins: [],
}