// src/components/StickyMobileCTA.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StickyMobileCTAProps {
  mercadoLibreUrl: string;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ mercadoLibreUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece después de scrollear 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-glezDark/90 backdrop-blur-md border-t border-slate-800 z-50 md:hidden"
        >
          <a
            href={mercadoLibreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 bg-glezRed hover:bg-red-700 text-white font-bold text-center text-sm rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(230,29,43,0.4)] active:scale-[0.98] transition-all"
          >
            <span>Ver Oferta en Mercado Libre</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};