import React from 'react';

// Data estructurada fuera del renderizado para mantener el código limpio
interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

const benefitsData: BenefitItem[] = [
  {
    title: 'Acero de Alta Durabilidad',
    description:
      'Estructura reinforced que soporta la presión diaria sin deformarse ni descalibrarse.',
    icon: '🛡️',
  },
  {
    title: 'Aplanado Homogéneo',
    description:
      'Mecanismo de palanca diseñado para aplicar fuerza pareja, logrando tortillas delgadas.',
    icon: '⚡',
  },
  {
    title: 'Higiene y Fácil Limpieza',
    description:
      'Superficie de acero que no absorbe humedad ni grasa, a diferencia de las prensas de madera.',
    icon: '✨',
  },
  {
    title: 'Uso en Hogar o Negocio',
    description:
      'Soporta tanto la preparación familiar diaria como la producción continua en taquerías.',
    icon: '🍳',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold">
            ¿Por qué elegir las prensas de <span className="text-amber-400">GLEz</span>?
          </h2>
          <p className="mt-4 text-slate-400">
            Diseño robusto en acero creado para facilitar la preparación de tortillas de harina.
          </p>
        </div>

        {/* Renderizado dinámico de la lista de beneficios mediante .map() */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index} // Identificador único para el ciclo de renderizado de React
              className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 transition-all duration-300 hover:border-amber-500/50"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};