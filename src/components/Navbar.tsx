import React from 'react';
import { MercadoLibreCTA } from './MercadoLibreCTA';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Lado Izquierdo: Logo de GLEz */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
          aria-label="Inicio - GLEz cocina y acero"
        >
          <img
            src="/images/logoglez.webp"
            alt="Logo de GLEz cocina y acero"
            className="h-9 w-auto sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </a>

        {/* Lado Derecho: Botón de Mercado Libre */}
        <div className="flex items-center gap-4">
          <MercadoLibreCTA
            href="https://articulo.mercadolibre.com.mx/TU-LINK-AQUI"
            text="Ir a Mercado Libre"
            className="text-xs sm:text-sm px-3.5 py-2 sm:px-5 sm:py-2.5"
          />
        </div>

      </div>
    </nav>
  );
};