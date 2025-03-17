// components/Header.jsx
'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import InstagramIcon from '../../public/instagram.png';
import WhatsAppIcon from '../../public/whatsapp.png';
import Logo from '../../public/logo.png';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Prevenir rolagem quando o menu estiver aberto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  if (!isMounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header principal */}
      {!isMenuOpen && (
        <header className="bg-blue-300/20 backdrop-blur-md rounded-[50px] fixed w-[90%] max-w-[1013px] left-1/2 transform -translate-x-1/2 mt-4 sm:mt-6 md:mt-[47px] z-20 shadow-md">
          <div className="flex bg-blue-300/30 rounded-[50px] justify-between items-center py-1 px-2 sm:px-4 md:px-[228px] gap-2 sm:gap-4 md:gap-[32px]">
            <div>
              <Image
                src={Logo}
                alt="Logo da Marca"
                className="cursor-pointer"
                width={70}
                height={40}
                sizes="(max-width: 640px) 60px, 80px"
                suppressHydrationWarning
              />
            </div>

            {/* Links de navegação para telas maiores */}
            <nav className="hidden sm:flex gap-2 md:gap-[32px]">
              <a
                href="#servicos"
                className="text-white text-xs sm:text-sm opacity-70 hover:text-blue-500 hover:opacity-100"
              >
                Nossos Serviços
              </a>
              <a
                href="#numeros"
                className="text-white text-xs sm:text-sm opacity-70 hover:text-blue-500 hover:opacity-100"
              >
                Nossos Números
              </a>
              <a
                href="#contatos"
                className="text-white text-xs sm:text-sm opacity-70 hover:text-blue-500 hover:opacity-100"
              >
                Fale Conosco
              </a>
            </nav>

            {/* Ícones sociais para telas maiores */}
            <div className="hidden sm:flex gap-2 sm:gap-[32px]">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src={InstagramIcon}
                  alt="Instagram"
                  width={20}
                  height={20}
                  sizes="(max-width: 640px) 20px, 24px"
                  suppressHydrationWarning
                />
              </a>
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                <Image
                  src={WhatsAppIcon}
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  sizes="(max-width: 640px) 20px, 24px"
                  suppressHydrationWarning
                />
              </a>
            </div>

            {/* Botão do menu para telas pequenas */}
            <div className="sm:hidden relative">
              <button
                onClick={toggleMenu}
                className="relative z-50 flex items-center justify-center text-white border border-orange-500 rounded-md p-1"
                aria-label="Abrir menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Overlay para o menu mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        />
      )}

      {/* Menu lateral deslizante */}
      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 w-[200px] bg-gray-900 shadow-xl z-40 transition-transform duration-300 ease-in-out translate-x-0 sm:hidden rounded-l-[20px]"
        >
          <div className="flex flex-col">
            <div className="bg-blue-300 rounded-tl-[20px] flex items-center justify-between p-2">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Logo da Marca"
                  className="cursor-pointer"
                  width={90}
                  height={45}
                  suppressHydrationWarning
                />
              </div>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-blue-500"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Conteúdo do menu */}
            <div>
              <nav className="flex flex-col">
                <a
                  href="#servicos"
                  className="text-white text-lg font-medium py-2 px-4 text-center hover:bg-blue-500/20 hover:text-blue-500 hover:opacity-100 transition-all border-b border-white"
                  onClick={toggleMenu}
                >
                  Nossos Serviços
                </a>
                <a
                  href="#numeros"
                  className="text-white text-lg font-medium py-2 px-4 text-center hover:bg-blue-500/20 hover:text-blue-500 hover:opacity-100 transition-all border-b border-white"
                  onClick={toggleMenu}
                >
                  Nossos Números
                </a>
                <a
                  href="#contatos"
                  className="text-white text-lg font-medium py-2 px-4 text-center hover:bg-blue-500/20 hover:text-blue-500 hover:opacity-100 transition-all"
                  onClick={toggleMenu}
                >
                  Fale Conosco
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}