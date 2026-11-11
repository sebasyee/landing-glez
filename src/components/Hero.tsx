import React from 'react';
import { MercadoLibreCTA } from './MercadoLibreCTA';
import { FadeIn } from './FadeIn';
import { InteractivePressMobile } from './InteractivePressMobile';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-brand-canvas text-brand-ink overflow-hidden">

      {/* Luz ambiental: rojo de marca muy suave */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">

        <FadeIn direction="up">
          <div className="text-center lg:text-left">

            {/* Badge: fondo ámbar suave, texto oscuro para legibilidad */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent text-brand-ink text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              Ingeniería en Acero Inoxidable
            </div>

            {/* Titular: el rojo sólido se lee mejor que un degradado sobre fondo claro */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-brand-ink tracking-tight leading-none uppercase">
              Potencia y precisión en <br />
              <span className="text-brand-red">
                Cada Prensado
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-brand-ink/70 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Prensas industriales y comerciales diseñadas para alto rendimiento. Fabricadas en acero de alta resistencia con acabado pulido.
            </p>

            {/* CTA: el color lo decide la variante; aquí solo ajustamos layout */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <MercadoLibreCTA
                href="https://articulo.mercadolibre.com.mx/TU-LINK-AQUI"
                text="Comprar en Mercado Libre"
                variant="primary"
                className="w-full sm:w-auto px-8 py-4"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-brand-ink/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-brand-ink/60">
              <div className="flex items-center gap-2">
                <span className="text-brand-red font-bold">✓</span> Envío Gratis a todo México
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-red font-bold">✓</span> Acero Grado Alimenticio
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};