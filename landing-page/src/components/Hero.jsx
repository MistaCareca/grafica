// src/components/Hero.jsx
'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import slide1 from '../../public/slide1.svg';
import slide2 from '../../public/slide2.svg';
import slide3 from '../../public/slide3.svg';
import slide4 from '../../public/slide4.svg';
import Header from './Header';

export default function Hero() {
  const slides = [
    { url: slide1, text: 'Infográfica: Seu Negócio em Destaque' },
    { url: slide2, text: 'Transformamos Ideias em Impressões' },
    { url: slide3, text: 'Comunicação Visual que Atrai Olhares' },
    { url: slide4, text: 'Da Criação ao Resultado, Somos Infográfica' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50; // Distância mínima para considerar um swipe

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Detectar o início do toque
  const onTouchStart = (e) => {
    setTouchEnd(null); // Resetar o touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Detectar o fim do toque
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Detectar o swipe ao soltar o dedo
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative">
      <Header />
      <div className="relative w-full min-h-[50vh] sm:min-h-screen">
        <div
          className="absolute inset-0"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="transition-opacity duration-500 ease-in-out sm:object-contain sm:bg-black"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 100vw"
              priority
            />
            <div className="absolute inset-0 flex items-end justify-start pb-16 sm:pb-20 pl-4 sm:pl-8">
              <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-bold text-left px-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">
                {slides[currentIndex].text}
              </h1>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`text-2xl cursor-pointer ${
                    slideIndex === currentIndex ? 'text-blue-800' : 'text-neutral-400'
                  }`}
                >
                  ●
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden sm:flex absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
          <SlArrowLeft onClick={prevSlide} size={30} />
        </div>

        <div className="hidden sm:flex absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
          <SlArrowRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
}