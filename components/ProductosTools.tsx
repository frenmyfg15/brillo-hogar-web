'use client';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaPumpSoap, FaBroom } from 'react-icons/fa';
import React from 'react';

export default function ProductosTools() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Selección de productos y herramientas
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div
            ref={ref1}
            className={`p-6 rounded-xl shadow-md transition duration-300 ${
              inView1 ? 'animate-fadeInLeft' : 'opacity-0'
            }`}
          >
            <FaLeaf className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Productos ecológicos</h3>
            <p className="text-gray-600 text-sm">
              Priorizamos productos biodegradables que cuidan tu salud y el medio ambiente.
            </p>
          </div>

          <div
            ref={ref2}
            className={`p-6 rounded-xl shadow-md transition duration-300 ${
              inView2 ? 'animate-fadeInUp' : 'opacity-0'
            }`}
          >
            <FaPumpSoap className="text-4xl text-cyan-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Seguridad garantizada</h3>
            <p className="text-gray-600 text-sm">
              Usamos productos certificados, seguros para personas, mascotas y superficies delicadas.
            </p>
          </div>

          <div
            ref={ref3}
            className={`p-6 rounded-xl shadow-md transition duration-300 ${
              inView3 ? 'animate-fadeInRight' : 'opacity-0'
            }`}
          >
            <FaBroom className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Herramientas profesionales</h3>
            <p className="text-gray-600 text-sm">
              Contamos con equipamiento moderno que optimiza tiempos y mejora resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
