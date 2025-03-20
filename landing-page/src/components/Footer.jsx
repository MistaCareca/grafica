import React from 'react';
import Image from 'next/image';
import InstagramIcon from '../../public/instagram.svg';
import WhatsAppIcon from '../../public/whatsapp.svg';
import Logo from '../../public/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
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

        <div className="mb-2 text-center">
          <p className="text-sm md:text-base opacity-80">
            Rua Rio Jatobá, 10
          </p>
          <p className="text-sm md:text-base opacity-80">
            José e Maria - Petrolina/PE
          </p>
          <p className="text-sm md:text-base opacity-80">56.320-105</p>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src={InstagramIcon}
              alt="Instagram"
              width={30}
              height={30}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
            <Image
              src={WhatsAppIcon}
              alt="WhatsApp"
              width={30}
              height={30}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}