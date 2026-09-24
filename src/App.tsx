import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';

export const App: React.FC = () => {
  return (
    // Contenedor principal con fondo oscuro persistente y tipografía fluida
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
      </main>
    </div>
  );
};

export default App;