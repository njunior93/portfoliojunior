/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend:{
      colors:{
        'azul': '#2192FF',
        'cinza': 'var(--cor-cinza-escuro)',
        'cinzaclaro':'var(--cor-bg-post)',
        'cinzaescuro':'var(--cor-cinza-escuro)',
        'linkedin': '#0078D4',
      },
      fontFamily:{
        secundario: ['Arimo'],
        primario: ['Poppins']
      },
      boxShadow: {
        'inner-border': 'var(--borda-bt)' // Define a sombra interna
      },
    },
  },
  plugins: [],
}