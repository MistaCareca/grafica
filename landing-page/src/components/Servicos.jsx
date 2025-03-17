import React from 'react';
import Card from './Card';
import slide1 from '../../public/slide1.jpg';
import slide2 from '../../public/slide2.jpg';

const Servicos = () => {
  const services = [
    {
      imgSrc: slide1.src,
      title: 'LETREIROS',
      description: 'Chamativos e personalizados, nossos letreiros destacam sua marca com estilo e durabilidade, perfeitos para qualquer tipo de negócio.',
    },
    {
      imgSrc: slide2.src,
      title: 'TOTENS',
      description: 'Impacte de longe com totens sob medida, ideais para sinalização ou divulgação, unindo design moderno e resistência. Impressões',
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

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Nossos Serviços</h1>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto text-lg">
        Conheça nossos serviços e descubra soluções visuais que transformam sua marca com qualidade e impacto.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
          {services.map((service, index) => (
            <Card
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;