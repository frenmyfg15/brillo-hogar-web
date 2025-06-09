'use client';
import Image from 'next/image';
import React from 'react';
import trabajo from '../public/image/trabajo.webp';
import { useInView } from 'react-intersection-observer';

export default function HowWeWork() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          Cómo trabajamos en Brillo Hogar
        </h2>

        <div className="flex justify-center mb-8">
          <Image
            src={trabajo}
            alt="Equipo de limpieza profesional Brillo Hogar"
            width={300}
            height={300}
            priority
            placeholder="empty"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div
            ref={ref1}
            className={`bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300 ${
              inView1 ? 'animate-fadeInLeft' : 'opacity-0'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">1. Evaluación personalizada</h3>
            <p className="text-gray-600 text-sm">
              Analizamos el espacio y las necesidades del cliente para diseñar un plan de limpieza adaptado. Ya sea una casa, oficina o local comercial, ofrecemos soluciones a medida.
            </p>
          </div>

          <div
            ref={ref2}
            className={`bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300 ${
              inView2 ? 'animate-fadeInRight' : 'opacity-0'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">2. Limpieza detallada</h3>
            <p className="text-gray-600 text-sm">
              Nuestro equipo realiza una limpieza profunda, cuidando cada superficie y utilizando productos ecológicos que respetan tu salud y el medio ambiente.
            </p>
          </div>

          <div
            ref={ref3}
            className={`bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300 ${
              inView3 ? 'animate-fadeInLeft' : 'opacity-0'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">3. Resultados garantizados</h3>
            <p className="text-gray-600 text-sm">
              Realizamos controles de calidad y nos aseguramos de que todo quede impecable. Nuestro compromiso es superar tus expectativas en cada visita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
