import React from 'react';
import { MercadoLibreCTA } from './MercadoLibreCTA';
import { FadeIn } from './FadeIn';
import { InteractivePressMobile } from './InteractivePressMobile';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#090A0F] text-slate-100 overflow-hidden">
      
      {/* Luz ambiental de fondo en rojo carmesí */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* LADO IZQUIERDO: TEXTO E IDENTIDAD */}
        <FadeIn direction="up">
          <div className="text-center lg:text-left">
            
            {/* Insignia / Badge de identidad */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/50 border border-red-800/60 text-red-400 text-xs font-semibold tracking-wider uppercase mb-5 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Ingeniería en Acero Inoxidable
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase">
              Potencia y precisión en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-amber-500">
                Cada Prensado
              </span>
            </h1>

            {/* Subtítulo / Descripción corta */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Prensas industriales y comerciales diseñadas para alto rendimiento. Fabricadas en acero de alta resistencia con acabado pulido.
            </p>

            {/* Botón CTA principal para Desktop/Tablet */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <MercadoLibreCTA
                href="https://articulo.mercadolibre.com.mx/TU-LINK-AQUI"
                text="Comprar en Mercado Libre"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 transition-all duration-300 transform active:scale-95"
              />
            </div>
            
            {/* Puntos de confianza / Beneficios rápidos */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">✓</span> Envío Gratis a todo México
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">✓</span> Acero Grado Alimenticio
              </div>
            </div>

          </div>
        </FadeIn>

        {/* LADO DERECHO: INTERACCION CON LA PRENSA (SIN TARJETA NI CONTENEDORES RAROS) */}
        <FadeIn direction="up" delay={0.15}>
          <div className="relative flex justify-center items-center w-full">
            <InteractivePressMobile />
          </div>
        </FadeIn>

      </div>
    </section>
  );
};