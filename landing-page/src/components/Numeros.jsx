// components/Numeros.jsx
'use client'

import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function Numeros() {
  const [startCount, setStartCount] = useState(false);

  // Iniciar a contagem quando a seção entrar na tela
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('numeros');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          setStartCount(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar inicialmente

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="numeros" className="relative py-16 bg-white">
      {/* Fundo curvado */}
      <div
        className="absolute inset-0 bg-blue-800"
        style={{
          clipPath: 'polygon(0 30%, 100% 0, 100% 65%, 0 100%)',
        }}
      />

      {/* Conteúdo da seção */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Nossos Números
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {/* Fechadas Entregues */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-white">
              {startCount ? (
                <CountUp start={0} end={5000} duration={2.5} prefix="+" />
              ) : (
                '0'
              )}
            </h3>
            <p className="text-lg md:text-xl text-white mt-2">Fechadas Entregues</p>
          </div>

          {/* Anos */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-white">
              {startCount ? (
                <CountUp start={0} end={15} duration={2.5} prefix="+" />
              ) : (
                '0'
              )}
            </h3>
            <p className="text-lg md:text-xl text-white mt-2 ml-8">Anos</p>
          </div>
        </div>
      </div>
    </section>
  );
}