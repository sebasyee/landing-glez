import React from 'react';
import { MercadoLibreCTA } from './MercadoLibreCTA';

export const Hero: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Columna Izquierda: Copywriting enfocado en la conversión */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          
          {/* Badge o Etiqueta superior */}
          <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            GLEz Cocina y Acero
          </span>
          <img
            src="./assets/prensa.webp"
            alt="Prensa para tortillas de harina de acero GLEz"
            width="600"
            height="400"
            className="w-full h-auto object-cover rounded-xl"
            loading="eager"
         />

          {/* Titular Principal (H1) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Prensas para tortillas de harina de{' '}
            <span className="text-amber-400">grado profesional</span>
          </h1>

          {/* Subtítulo descriptivo */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
            Obtén tortillas delgadas, parejas y perfectas en minutos. Fabricadas en
            acero de alta resistencia para el hogar o tu negocio.
          </p>

          {/* Llamado a la Acción (CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <MercadoLibreCTA
              href="https://articulo.mercadolibre.com.mx/TU-LINK-AQUI"
              text="Comprar ahora en Mercado Libre"
            />
          </div>

          {/* Sellos de Confianza (Reduce la fricción de compra) */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> Envío Gratis a todo México
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> Compra Protegida
            </div>
          </div>
        </div>

        {/* Columna Derecha: Imagen destacada del producto */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 p-2 shadow-2xl">
              <img
                src="/images/prensa-hero.webp"
                alt="Prensa para tortillas de harina de acero marca GLEz"
                className="w-full h-auto object-cover rounded-xl"
                loading="eager" // Fuerza la carga prioritaria de la primera imagen
              />
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};