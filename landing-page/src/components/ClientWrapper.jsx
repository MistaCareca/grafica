'use client'

import Header from './Header';
import Hero from './Hero';
import Servicos from './Servicos';
import Numeros from './Numeros';

export default function ClientWrapper() {
  return (
    <>
      <Header />
      <Hero />
      <Servicos />
      <Numeros />
    </>
  );
}