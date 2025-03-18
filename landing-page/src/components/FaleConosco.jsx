// components/FaleConosco.jsx
'use client'

import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

export default function FaleConosco() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAttendant, setSelectedAttendant] = useState(null);
  const appElementRef = useRef(null);

  // Garantir que o appElement seja definido apenas após o mount e que o elemento exista
  useEffect(() => {
    appElementRef.current = document.getElementById('__next');
    if (appElementRef.current) {
      Modal.setAppElement(appElementRef.current);
    } else {
      console.warn('Elemento #__next não encontrado, usando document.body como fallback');
      Modal.setAppElement(document.body);
    }
  }, []);

  // Gerenciar o bloqueio de scroll
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY; // Salva a posição atual do scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed'; // Impede o scroll mantendo a posição
      document.body.style.top = `-${scrollY}px`; // Corrige a posição para evitar salto
      document.body.style.width = '100%'; // Garante que o body ocupe toda a largura
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = 'auto';
      document.body.style.width = 'auto';
      window.scrollTo(0, parseInt(scrollY || '0') * -1); // Restaura a posição do scroll
    }

    // Cleanup para evitar problemas ao desmontar o componente
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = 'auto';
    };
  }, [isModalOpen]);

  const openModal = (attendant) => {
    setSelectedAttendant(attendant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAttendant(null);
  };

  // Array de atendentes com caminhos de ícones estáticos (ajustados para SSR)
  const attendants = [
    { name: 'Atendimento Eduardo', icon: '/images/eduardo-icon.png' }, // Substitua pelo caminho real
    { name: 'Atendimento Jordana', icon: '/images/jordana-icon.png' }, // Substitua pelo caminho real
    { name: 'Atendimento Lucas', icon: '/images/lucas-icon.png' },     // Substitua pelo caminho real
  ];

  const defaultIcon = '/default-user-icon.png'; // Certifique-se de ter este arquivo em public

  return (
    <section className="py-16 bg-white text-center" id="contatos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Nossos Atendentes
        </h1>
        <p className="text-lg md:text-xl text-neutral-900 opacity-80 mb-10 max-w-2xl mx-auto">
          Fale com nossos atendentes e receba o suporte que sua empresa merece.
        </p>

        {/* Cards de Atendentes */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {attendants.map((attendant, index) => (
            <button
              key={index}
              onClick={() => openModal(attendant.name)}
              className="flex flex-col items-center bg-white rounded-full p-4 shadow-md hover:shadow-lg transition-shadow w-32 h-32"
            >
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                <Image
                  src={attendant.icon || defaultIcon} // Valor estático para SSR
                  alt={attendant.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-blue-800 text-sm font-medium text-center line-clamp-2">
                {attendant.name}
              </span>
            </button>
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20"
          overlayClassName="fixed inset-0 bg-blue-200/30 flex items-center justify-center"
        >
          <h2 className="text-2xl text-blue-800 font-bold mb-4">Contato com {selectedAttendant}</h2>
          <p className="text-blue-800">Links {selectedAttendant}.</p>
          <button
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={closeModal}
          >
            Fechar
          </button>
        </Modal>
      </div>
    </section>
  );
}