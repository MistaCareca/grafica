// components/Footer.jsx
import React from 'react';
import Image from 'next/image';
import InstagramIcon from '../../public/instagram.png';
import WhatsAppIcon from '../../public/whatsapp.png';
import Logo from '../../public/logo.png';

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src={Logo}
            alt="Logo da Marca"
            width={180}
            height={120}
            sizes="(max-width: 640px) 100px, 120px"
            className="object-contain"
          />
        </div>

        {/* Informações */}
        <div className="mb-6 text-center">
          <p className="text-sm md:text-base opacity-80">
            Rua Rio Jatobá, 10, José e Maria - Petrolina/PE
          </p>
          <p className="text-sm md:text-base opacity-80">56.320-105</p>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src={InstagramIcon}
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
            <Image
              src={WhatsAppIcon}
              alt="WhatsApp"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}