import React from 'react';

interface MercadoLibreCTAProps {
  href: string;
  text?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const MercadoLibreCTA: React.FC<MercadoLibreCTAProps> = ({
  href,
  text = 'Ver en Mercado Libre',
  variant = 'primary',
  className = '',
}) => {
  // Estructura, animación y respuesta táctil: iguales en todas las variantes
  const baseStyles =
    'inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0';

  // Colores: cada variante define su propio fondo, texto y hover
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-brand-red/90 shadow-brand-red/30',
    secondary: 'bg-brand-ink text-white hover:bg-brand-ink/90 shadow-brand-ink/30',
    accent: 'bg-brand-accent text-brand-ink hover:bg-brand-accent/90 shadow-brand-accent/30',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span>{text}</span>
    </a>
  );
};