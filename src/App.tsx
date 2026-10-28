import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 font-sans antialiased w-full pb-20 lg:pb-0">
      {/* 1. Barra de navegación superior fija */}
      <Navbar />

      {/* 2. Contenido principal */}
      <main className="w-full">
        <Hero />
        <Benefits />
      </main>

      {/* 3. Botón flotante inferior exclusivo para Celulares */}
      
      <StickyMobileCTA mercadoLibreUrl="https://www.mercadolibre.com.ar" />

      
    </div>
  );
};

export default App;