/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',     // CTA, hover, logotipos
          ink: '#18181B',     // encabezados, footer, texto principal
          canvas: '#FAFAFA',  // fondo general
          card: '#F1F5F9',    // tarjetas y otros usos
          accent: '#F59E0B',  // badges, alertas, destacados
        },
        meli: {
          yellow: '#FFE600', // amarillo de la marca
          blue: '#2D3277',   // azul para el texto sobre amarillo
        },
      },
    },
  },
  plugins: [],
}