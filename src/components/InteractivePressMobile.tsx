// src/components/InteractivePressMobile.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InteractivePressMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 px-4 bg-brand-card/50 rounded-2xl border border-brand-ink/10 my-8">
      <div className="text-center mb-6">
        <span className="text-brand-red text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1 rounded-full border border-brand-red/20">
          Demostración Interactiva
        </span>
        <h3 className="text-xl font-extrabold text-brand-ink mt-2">
          Mecanismo de Alta Precisión
        </h3>
        <p className="text-xs text-brand-ink/60 mt-1">
          Toca para probar la apertura y cierre suave del mango reforzado
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[260px]">
        {/* Imagen según el estado: 'key' distinta fuerza a AnimatePresence a animar el cambio */}
        <AnimatePresence mode="wait">
          <motion.img
            key={isOpen ? 'open' : 'closed'}
            src={isOpen ? '/images/prensa-abierta.webp' : '/images/prensa.webp'}
            alt="Prensa para tortillas GLEz Cocina y Acero"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-64 h-auto object-contain drop-shadow-[0_10px_20px_#DC262626]"
          />
        </AnimatePresence>

        {/* Botón táctil: alterna el estado al hacer clic */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 px-6 py-3 bg-brand-ink hover:bg-brand-ink/90 text-white text-sm font-semibold rounded-xl flex items-center gap-2 active:scale-95 transition-all shadow-lg"
        >
          <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-brand-red animate-pulse' : 'bg-brand-accent'}`} />
          {isOpen ? 'Cerrar Prensa' : 'Abrir Prensa'}
        </button>
      </div>
    </section>
  );
};