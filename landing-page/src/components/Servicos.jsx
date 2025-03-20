'use client'

import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import slide1 from '../../public/slide1.jpg';
import slide2 from '../../public/slide2.jpg';
import Swiper from 'swiper';
import 'swiper/css';

export default function Servicos() {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1); 

  const services = [
    {
      imgSrc: slide1.src,
      title: 'LETREIROS',
      description: 'Chamativos e personalizados, nossos letreiros destacam sua marca com estilo e durabilidade, perfeitos para qualquer tipo de negócio.',
    },
    {
      imgSrc: slide2.src,
      title: 'TOTENS',
      description: 'Impacte de longe com totens sob medida, ideais para sinalização ou divulgação, unindo design moderno e resistência.',
    },
    {
      imgSrc: slide1.src,
      title: 'IMPRESSÕES',
      description: 'Qualidade impecável em cada detalhe: panfletos, cartões e banners que transformam suas ideias em materiais de alto nível.',
    },
    {
      imgSrc: slide2.src,
      title: 'FACHADAS',
      description: 'Deixe sua fachada falar por você! Criamos soluções visuais que atraem olhares e reforçam a identidade do seu espaço.',
    },
    {
      imgSrc: slide1.src,
      title: 'BRINDES',
      description: 'Brindes personalizados que marcam presença, perfeitos para fidelizar clientes e divulgar sua marca com criatividade.',
    },
  ];

  const extendedServices = [
    services[services.length - 1],
    ...services, 
    services[0], 
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      swiperRef.current = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: true,
        loop: false, 
        initialSlide: 1, 
        simulateTouch: true, 
        touchRatio: 1, 
        grabCursor: true, 
        on: {
          slideChange: () => {
            if (!swiperRef.current) return;

            const totalSlides = services.length; 
            const activeIndex = swiperRef.current.activeIndex;

            if (activeIndex === extendedServices.length - 1) {
              swiperRef.current.slideTo(1, 0); 
              setCurrentSlide(1);
            } else if (activeIndex === 0) {
              swiperRef.current.slideTo(totalSlides, 0);
              setCurrentSlide(totalSlides);
            } else {
              setCurrentSlide(activeIndex);
            }
          },
        },
      });

      if (swiperRef.current) {
        setCurrentSlide(swiperRef.current.activeIndex);
      }

      return () => {
        if (swiperRef.current) {
          swiperRef.current.destroy(true, true);
          swiperRef.current = null;
        }
      };
    }
  }, []);

  const totalSlides = services.length; 
  const progressPercentage = (currentSlide / totalSlides) * 100; 

  return (
    <section id="servicos" className="py-8 sm:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-800 mb-4 sm:mb-8">
          Nossos Serviços
        </h1>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-6 sm:mb-10">
          Conheça nossos serviços e descubra soluções visuais que transformam sua marca com qualidade e impacto.
        </p>

        <div className="block sm:hidden">
          <div className="swiper centered-slide-carousel swiper-container relative">
            <div className="swiper-wrapper">
              {extendedServices.map((service, index) => (
                <div key={index} className="swiper-slide">
                  <div className="bg-blue-100 rounded-2xl h-64 flex flex-col justify-center items-center p-4 mx-4">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="w-24 h-24 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-neutral-600 text-center">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-blue-800 mb-2">
                Diapositivo {currentSlide}
              </p>
              <div className="w-64 h-2 mx-auto bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-800 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6 sm:mt-10">
          {services.map((service, index) => (
            <Card
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <style jsx>{`
          .swiper {
            touch-action: pan-x; /* Garante que o arrastar funcione */
          }
        `}</style>
      </div>
    </section>
  );
}