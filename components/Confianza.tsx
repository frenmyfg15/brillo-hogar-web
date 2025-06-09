'use client';

import Image from "next/image";
import React from "react";
import certificado from "../public/image/certificado.webp";
import { useInView } from "react-intersection-observer";

export const Confianza = () => {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-white py-12 px-6 md:px-20 relative overflow-x-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
        {/* Imagen con animación */}
        <div
          ref={imageRef}
          className={`w-28 h-28 relative flex-shrink-0 transition-all duration-700 ${
            imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Image
            src={certificado}
            alt="Certificado de garantía Brillo Hogar"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* Texto con animación */}
        <div
          ref={textRef}
          className={`transition-all duration-700 ${
            textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
            Comprometidos con la calidad y tu tranquilidad
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl">
            En <strong>Brillo Hogar</strong>, cada servicio está respaldado por nuestro compromiso con la limpieza profesional, el uso de productos seguros y la confianza de un equipo certificado y con experiencia.
          </p>
        </div>
      </div>
    </section>
  );
};
