'use client'

import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import func from '../../public/func.jpg';
import WhatsAppIcon from '../../public/whatsappB.svg'; 
import { X } from 'lucide-react';

export default function FaleConosco() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const appElementRef = useRef(null);
  const scrollYRef = useRef(0);

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
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
      window.scrollTo(0, scrollYRef.current); 
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // aqui tu coloca os numeros dos atendentes e as fotos a foto atual é (func.jpg)
  // e o numero de whatsapp é um exemplo, tu coloca o numero do atendente)
  const attendants = [
    {
      name: 'Eduardo',
      icon: func,
      whatsappLink: 'https://api.whatsapp.com/send/?phone=5587981615848&text&type=phone_number&app_absent=0&wame_ctl=1&source_surface=21&fbclid=PAQ0xDSwK5FyxleHRuA2FlbQIxMAABp2FqdonUfiF7L3rqLv_fWSc2-CUCJHNNUq49UnJFgCM3UryBPNnFbDWrIkue_aem_h97hCoHW-OFbXbbW2qOpvQ',
    },
    {
      name: 'Lucas',
      icon: func,
      whatsappLink: 'https://api.whatsapp.com/send/?phone=5587999043122&text&type=phone_number&app_absent=0&wame_ctl=1&source_surface=21&fbclid=PAQ0xDSwK5FyZleHRuA2FlbQIxMAABp5E4qad_gdYQp89OWL61bW4gQTbx_Ll5DbCfCfFArtuvHP2F2MpIeXqcIaM0_aem_Yj2boVBCqKS-E6lGMHbegQ',    },
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
          className="bg-gradient-to-b from-white to-blue-50 p-4 sm:p-6 md:p-8 rounded-2xl w-fit max-w-[85%] sm:max-w-[90%] mx-auto mt-6 sm:mt-10 md:mt-20 z-50 shadow-2xl transform transition-all duration-300 animate-fadeInScale"
          overlayClassName="fixed inset-0 bg-blue-900/50 flex items-center justify-center z-40 transition-opacity duration-300"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
              Nossos Atendentes
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-800 mb-1 whitespace-pre-line font-medium">
              Fale com nossos atendentes e receba o
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-800 mb-4 sm:mb-6 whitespace-pre-line font-medium">
              suporte que sua empresa merece.
            </p>
            <div className="flex flex-row justify-center gap-4 sm:gap-6 md:gap-8">
              {attendants.map((attendant, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <Image
                    src={attendant.icon}
                    alt={attendant.name}
                    width={48}
                    height={48}
                    className="object-cover rounded-full aspect-square sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-blue-500 shadow-md"
                  />
                  <a
                    href={attendant.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-800 font-medium bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-3 sm:px-4 md:px-5 py-1 text-xs sm:text-sm md:text-base hover:from-blue-200 hover:to-blue-300 hover:text-blue-900 transition-all duration-200 mb-4 sm:mb-6 shadow-sm"
                  >
                    {attendant.name}
                    <Image
                      src={WhatsAppIcon}
                      alt="WhatsApp"
                      width={16}
                      height={16}
                      className="object-contain sm:w-5 sm:h-5"
                    />
                  </a>
                </div>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-1 sm:py-2 px-4 sm:px-6 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md text-xs sm:text-sm md:text-base"
            >
              Fechar
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
}