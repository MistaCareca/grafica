'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import InstagramIcon from '../../public/instagram.svg';
import WhatsAppIcon from '../../public/whatsapp.svg';
import Logo from '../../public/logo.svg';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

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
      {!isMenuOpen && (
        
<header className="bg-blue-300/20 backdrop-blur-md rounded-[50px] fixed w-[90%] max-w-[1013px] left-1/2 transform -translate-x-1/2 mt-4 sm:mt-6 md:mt-[47px] z-20 shadow-md">
          <div className="bg-blue-300/30 rounded-[50px] flex items-center justify-between py-2 px-4 sm:px-6">
            <div className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Logo da Marca"
                width={150} 
                height={75} 
                sizes="(max-width: 640px) 120px, 150px"
                className="object-contain"
              />
            </div>

            <nav className="hidden sm:flex items-center space-x-8 flex-nowrap">
              <a href="#servicos" className="text-white text-sm opacity-70 hover:text-blue-500 hover:opacity-100 transition-colors">
                Nossos Serviços
              </a>
              <a href="#numeros" className="text-white text-sm opacity-70 hover:text-blue-500 hover:opacity-100 transition-colors">
                Nossos Números
              </a>
              <a href="#contatos" className="text-white text-sm opacity-70 hover:text-blue-500 hover:opacity-100 transition-colors">
                Fale Conosco
              </a>
            </nav>

            <div className="hidden sm:flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full p-1.5">
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    width={28} 
                    height={28} 
                    className="object-contain"
                  />
                </div>
              </a>
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full p-1.5">
                  <Image
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    width={28} 
                    height={28}
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-white p-1 rounded-full hover:bg-blue-300 transition-colors"
                aria-label="Abrir menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>
      )}

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30" onClick={toggleMenu} />
      )}

      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-[200px] bg-blue-200 shadow-xl z-40 transition-transform duration-300 ease-in-out translate-x-0 sm:hidden rounded-l-[20px]">
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Logo da Marca"
                  width={120} 
                  height={60}
                  className="object-contain"
                />
              </div>
              <button onClick={toggleMenu} className="text-white hover:text-blue-500">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col">
              <a
                href="#servicos"
                className="text-white text-lg font-medium py-2 px-4 text-center hover:bg-blue-300/50 transition-colors"
                onClick={toggleMenu}
              >
                Nossos Serviços
              </a>
              <a
                href="#numeros"
                className="text-white text-lg font-medium py-2 px-4 text-center hover:bg-blue-300/50 transition-colors"
                onClick={toggleMenu}
              >
                Nossos Números
              </a>
              <a
                href="#contatos"
                className="text-white text-lg font-medium py-2 px-4 text-center hover:bg-blue-300/50 transition-colors"
                onClick={toggleMenu}
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
