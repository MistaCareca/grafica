// components/FaleConosco.jsx
'use client'

import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import func from '../../public/func.jpg';

export default function FaleConosco() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const appElementRef = useRef(null);

  useEffect(() => {
    appElementRef.current = document.getElementById('__next');
    if (appElementRef.current) {
      Modal.setAppElement(appElementRef.current);
    } else {
      console.warn('Elemento #__next não encontrado, usando document.body como fallback');
      Modal.setAppElement(document.body);
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = 'auto';
      document.body.style.width = 'auto';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = 'auto';
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const attendants = [
    {
      name: 'Eduardo',
      icon: func,
      whatsappLink: 'https://wa.me/5511999999999',
    },
    {
      name: 'Jordana',
      icon: func,
      whatsappLink: 'https://wa.me/5511988888888',
    },
    {
      name: 'Lucas',
      icon: func,
      whatsappLink: 'https://wa.me/5511977777777',
    },
  ];

  return (
    <section className="py-8 sm:py-16 bg-white text-center" id="contatos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Nossos Atendentes
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-neutral-900 opacity-80 mb-8 sm:mb-10 max-w-2xl mx-auto">
        Fale com um dos nossos atendentes.
        </p>

        <button
          onClick={openModal}
          className="bg-blue-500 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-blue-600 transition-colors w-fit"
        >
          Fale Conosco
        </button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="bg-white p-3 sm:p-6 md:p-12 rounded-lg w-fit max-w-[85%] sm:max-w-[90%] mx-auto mt-6 sm:mt-10 md:mt-20"
          overlayClassName="fixed inset-0 bg-blue-200/30 flex items-center justify-center z-40"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-800 font-bold mb-2 sm:mb-4">
              Nossos Atendentes
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-800 whitespace-pre-line">
              Fale com nossos atendentes e receba o
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-800 mb-4 sm:mb-6 whitespace-pre-line">
              suporte que sua empresa merece.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 overflow-x-auto">
              {attendants.map((attendant, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <Image
                    src={attendant.icon}
                    alt={attendant.name}
                    width={48}
                    height={48}
                    className="object-cover rounded-full aspect-square sm:w-16 sm:h-16 md:w-20 md:h-20"
                  />
                  <a
                    href={attendant.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 font-medium border border-blue-800 rounded-full px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm md:text-base hover:bg-blue-800 hover:text-white transition-colors mb-4 sm:mb-6">
                    {attendant.name}</a>
                </div>
              ))}
            </div>
            <button
              className="bg-blue-500 text-white font-semibold py-1 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm md:text-base"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
}