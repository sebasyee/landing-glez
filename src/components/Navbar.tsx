import React from 'react';
import { MercadoLibreCTA } from './MercadoLibreCTA';

export const Navbar: React.FC = () => {
  return (
    // 1. HEADER/NAVBAR: Con fondo oscuro sólido (slate-950), sombra y borde inferior
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950 border-b border-slate-800 shadow-lg px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto w-full flex flex-row items-center justify-between">
        
        {/* Lado Izquierdo: Contenedor del Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 shrink-0 focus:outline-none"
          aria-label="Inicio - GLEz cocina y acero"
        >
          {/* 
            AQUÍ CAMBIAS EL TAMAÑO DEL LOGO:
            - h-8 (32px), h-12 (48px), h-16 (64px), h-20 (80px), etc.
            - w-auto mantiene la proporción original sin deformarlo.
          */}
          <img
            src="/images/logoglez.webp"
            alt="Logo de GLEz cocina y acero"
            className="h-12 w-auto object-contain block" // <--- Modifica 'h-12' si lo quieres más grande (ej: h-16) o más pequeño (ej: h-10)
            loading="eager"
          />
        </a>

        {/* Lado Derecho: Botón de Mercado Libre */}
        <div className="flex items-center shrink-0">
          <MercadoLibreCTA
            href="https://articulo.mercadolibre.com.mx/TU-LINK-AQUI"
            text="Ir a Mercado Libre"
            className="text-xs sm:text-sm px-4 py-2"
          />
        </div>

      </div>
    </header>
  );
};