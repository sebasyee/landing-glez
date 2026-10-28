// src/components/InteractivePressMobile.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InteractivePressMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 px-4 bg-glezCard/50 rounded-2xl border border-slate-800/80 my-8">
      <div className="text-center mb-6">
        <span className="text-glezRed text-xs font-bold uppercase tracking-widest bg-glezRed/10 px-3 py-1 rounded-full border border-glezRed/20">
          Demostración Interactiva
        </span>
        <h3 className="text-xl font-extrabold text-slate-100 mt-2">
          Mecanismo de Alta Precisión
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Toca para probar la apertura y cierre suave del mango reforzado
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[260px]">
        {/* Renderizado dinámico de la Prensa */}
        <AnimatePresence mode="wait">
          <motion.img
            key={isOpen ? 'open' : 'closed'}
            src={isOpen ? '/images/prensa-abierta.webp' : '/images/prensa.webp'}
            alt="Prensa para tortillas GLEz Cocina y Acero"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-64 h-auto object-contain drop-shadow-[0_10px_20px_rgba(230,29,43,0.15)]"
          />
        </AnimatePresence>

        {/* Botón Táctil de Interacción */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold rounded-xl flex items-center gap-2 active:scale-95 transition-all shadow-lg"
        >
          <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-glezRed animate-pulse' : 'bg-emerald-500'}`} />
          {isOpen ? 'Cerrar Prensa' : 'Abrir Prensa'}
        </button>
      </div>
    </section>
  );
};