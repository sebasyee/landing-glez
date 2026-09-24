import React from 'react';

// 1. Definición de la interfaz de TypeScript para las propiedades (Props)
interface MercadoLibreCTAProps {
  href: string;                  // URL de la publicación de Mercado Libre
  text?: string;                 // Texto dinámico del botón (opcional)
  variant?: 'primary' | 'secondary'; // Variante de estilo (opcional)
  className?: string;            // Clases extra de Tailwind para personalizar (opcional)
}

// 2. Definición del componente funcional utilizando React.FC
export const MercadoLibreCTA: React.FC<MercadoLibreCTAProps> = ({
  href,
  text = 'Ver en Mercado Libre', // Valor por defecto si no se pasa la prop
  variant = 'primary',
  className = '',
}) => {
  // 3. Clases base de Tailwind para la estructura, animación y respuesta táctil
  const baseStyles =
    'inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0';

  // 4. Objeto para alternar estilos de color según la variante
  const variants = {
    primary:
      'bg-[#FFE600] hover:bg-[#ebd300] text-[#2D3277] border border-yellow-300',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700',
  };

  return (
    <a
      href={href}
      target="_blank"             // Abre la página en una nueva pestaña
      rel="noopener noreferrer"   // Medida de seguridad técnica obligatoria
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Ícono vectorial SVG representativo */}
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span>{text}</span>
    </a>
  );
};