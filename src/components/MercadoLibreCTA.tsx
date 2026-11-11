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
    primary: 'bg-meli-yellow text-meli-blue hover:bg-meli-yellow/90 shadow-meli-yellow/40',
    secondary: 'bg-brand-ink text-white hover:bg-brand-ink/90 shadow-brand-ink/30',
    accent: 'bg-brand-accent text-brand-ink hover:bg-brand-accent/90 shadow-brand-accent/30',
  };

  // El logo solo aparece en la variante primary: es la que representa a la marca
  const showLogo = variant === 'primary';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {showLogo && (
        <img
          src="/images/mercado-libre.svg"
          alt=""
          aria-hidden="true"
          className="h-8 w-auto"
        />
      )}
      <span>{text}</span>
    </a>
  );
};