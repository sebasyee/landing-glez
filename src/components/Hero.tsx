import React from 'react';
import { MercadoLibreCTA } from './MercadoLibreCTA';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-brand-canvas pt-24 pb-10 text-brand-ink lg:pt-36 lg:pb-24">

      {/* Luz ambiental: decorativa, no debe interceptar clics */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">

        <FadeIn direction="up">
          <div className="text-center lg:text-left">

            {/* Titular: el rojo sólido se lee mejor que un degradado sobre fondo claro */}
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Prensa para tortillas de harina<br />
              <span className="text-brand-red">comprar en línea</span>
            </h1>

            {/* CTA: el color lo decide la variante; aquí solo ajustamos layout */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <MercadoLibreCTA
                href="https://articulo.mercadolibre.com.mx/TU-LINK-AQUI"
                text="Comprar en Mercado Libre"
                variant="primary"
                className="w-full px-8 py-4 sm:w-auto"
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-brand-ink/10 pt-6 text-xs text-brand-ink/60 lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="font-bold text-brand-red">✓</span> Envío gratis a todo México
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-brand-red">✓</span> Acero grado alimenticio
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};