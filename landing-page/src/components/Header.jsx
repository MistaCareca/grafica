'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import InstagramIcon from '../../public/instagram.svg';
import InstagramIconB from '../../public/instagramB.svg';
import WhatsAppIcon from '../../public/whatsapp.svg';
import WhatsAppIconB from '../../public/whatsappB.svg';
import Logo from '../../public/logo.svg';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setIsMounted(true);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const sections = ['servicos', 'numeros', 'contatos'];
    const observerOptions = {
      root: null, 
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0.1, 0.5, 0.9], 
    };

    const observerCallback = (entries) => {
      let mostVisibleSection = null;
      let highestRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
          mostVisibleSection = entry.target.id;
          highestRatio = entry.intersectionRatio;
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  if (!isMounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const colorBase = "text-white";
  const colorActive = "text-blue-800";

  return (
    <>
      {!isMenuOpen && (
        <header className="bg-blue-300/20 backdrop-blur-md rounded-[50px] fixed w-[90%] max-w-[1013px] left-1/2 transform -translate-x-1/2 mt-4 sm:mt-6 md:mt-[47px] z-50 shadow-md">
          <div className="bg-blue-300/30 rounded-[50px] flex items-center justify-between py-2 px-4 sm:px-6">
            <div className="flex-shrink-0">
              <a href="#">
                <Image
                  src={Logo}
                  alt="Logo da Marca"
                  width={150}
                  height={75}
                  sizes="(max-width: 640px) 120px, 150px"
                  className="object-contain"
                />
              </a>
            </div>

            <nav className="hidden sm:flex items-center space-x-8 flex-nowrap">
              <a
                href="#servicos"
                className={`text-sm transition-colors ${
                  activeSection === 'servicos' ? colorActive : `${colorBase} opacity-70 hover:text-blue-800 hover:opacity-100`
                }`}> Nossos Serviços </a>
              <a
                href="#numeros"
                className={`text-sm transition-colors ${
                  activeSection === 'numeros' ? colorActive : `${colorBase} opacity-70 hover:text-blue-800 hover:opacity-100`
                }`}> Nossos Números </a>
              <a
                href="#contatos"
                className={`text-sm transition-colors ${
                  activeSection === 'contatos' ? colorActive : `${colorBase} opacity-70 hover:text-blue-800 hover:opacity-100`
                }`}> Fale Conosco </a>
            </nav>
              
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="https://instagram.com" // link intagram
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={() => setIsInstagramHovered(true)}
                onMouseLeave={() => setIsInstagramHovered(false)}
              >
                <div className="rounded-full p-1.5">
                  <Image
                    src={isInstagramHovered ? InstagramIconB : InstagramIcon}
                    alt="Instagram"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </a>
              <a
                href="https://wa.me/123456789" // link whatsapp
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsWhatsAppHovered(true)}
                onMouseLeave={() => setIsWhatsAppHovered(false)}
              >
                <div className="rounded-full p-1.5">
                  <Image
                    src={isWhatsAppHovered ? WhatsAppIconB : WhatsAppIcon}
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-55" onClick={toggleMenu} />
      )}

      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-[200px] shadow-xl z-60 transition-transform duration-300 ease-in-out translate-x-0 sm:hidden rounded-l-[20px]">
          <div className="flex flex-col bg-blue-300/20 rounded-l-[20px]">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center">
                <a href="#">
                  <Image
                    src={Logo}
                    alt="Logo da Marca"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </a>
              </div>
              <button onClick={toggleMenu} className="text-white hover:text-blue-500">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col">
              <a
                href="#servicos"
                className={`text-white text-lg font-medium py-2 px-4 text-center transition-colors ${
                  activeSection === 'servicos'
                    ? 'bg-blue-300/50'
                    : 'hover:bg-blue-300/50'
                }`}
                onClick={toggleMenu}
              >
                Nossos Serviços
              </a>
              <a
                href="#numeros"
                className={`text-white text-lg font-medium py-2 px-4 text-center transition-colors ${
                  activeSection === 'numeros'
                    ? 'bg-blue-300/50'
                    : 'hover:bg-blue-300/50'
                }`}
                onClick={toggleMenu}
              >
                Nossos Números
              </a>
              <a
                href="#contatos"
                className={`text-white text-lg font-medium py-2 px-4 text-center transition-colors ${
                  activeSection === 'contatos'
                    ? 'bg-blue-300/50'
                    : 'hover:bg-blue-300/50'
                }`}
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