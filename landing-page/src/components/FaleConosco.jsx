// components/FaleConosco.jsx
import React from 'react';

export default function FaleConosco() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Fale Conosco
        </h1>
        <p className="text-lg md:text-xl text-neutral-900 opacity-80 mb-8 max-w-2xl mx-auto">
        Fale com um dos nossos atendentes 
        </p>
        <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
          Contate-nos
        </button>
      </div>
    </section>
  );
}