'use client';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const servicios = [
  {
    id: 1,
    imagen: '/servicio/hogar.webp',
    titulo: 'Limpieza del hogar',
    descripcion: 'Aseo completo y cuidadoso de tu residencia.',
  },
  {
    id: 2,
    imagen: '/servicio/comercio.webp',
    titulo: 'Limpieza comercial',
    descripcion: 'Servicios de limpieza para empresas de todo tamaño.',
  },
  {
    id: 3,
    imagen: '/servicio/profunda.webp',
    titulo: 'Limpieza profunda',
    descripcion: 'Limpieza intensiva para todas las áreas difíciles.',
  },
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`py-12 px-4 max-w-7xl mx-auto transition-all duration-1000 ${
        inView ? 'animate-fadeInLeft' : 'opacity-0 translate-x-[-50px]'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
        Nuestros servicios
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            className="w-72 md:w-80 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center flex flex-col items-center"
          >
            <Image
              src={servicio.imagen}
              alt={servicio.titulo}
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {servicio.titulo}
            </h3>
            <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
