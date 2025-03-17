'use client'

import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import slide1 from '../../public/slide1.jpg';
import slide2 from '../../public/slide2.jpg';
import slide3 from '../../public/slide3.jpg';
import slide4 from '../../public/slide4.jpg';
import Header from './Header';

export default function Hero() {
  const slides = [
    {
      url: slide1.src,
    },
    {
      url: slide2.src,
    },
    {
      url: slide3.src,
    },
    {
      url: slide4.src,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative">
      <Header />
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
              transition: 'opacity 500ms ease-in-out',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              {/* Removido o texto (h1 e p) */}
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

        {/* Setas sempre visíveis com opacidade ajustável */}
        <div className="absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
}