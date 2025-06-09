import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../public/image/logo.webp';
import hogar from '../public/image/hogar.webp';
import limpiadora from '../public/image/limpiadora.webp';

export default function Header() {
    return (
        <header>
            <div className="relative w-full h-[80vh] lg:h-[90vh]">
                {/* Imagen de fondo */}
                <Image
                    src={hogar}
                    alt="Sala limpia, luminosa y acogedora ideal para servicios de limpieza profesional"
                    fill
                    className="object-cover z-0"
                    loading="lazy"
                    sizes="100vw"
                    placeholder="empty"
                />

                {/* Filtro oscuro sobre la imagen */}
                <div className="absolute inset-0 bg-black/50 z-10" />

                {/* Top Bar */}
                <div className="absolute top-0 w-full z-20 px-6 md:px-10 py-4 flex justify-between items-center">
                    <Image
                        src={logo}
                        alt="Logotipo de Brillo Hogar, empresa de limpieza profesional"
                        width={100}
                        height={100}
                    />
                    <a
                        aria-label="Llamar a Brillo Hogar"
                        href="tel:617547481"
                        className="flex gap-2 items-center px-4 py-2 rounded-2xl font-bold bg-cyan-500/70 text-white hover:bg-cyan-700 hover:scale-105 transition-transform duration-200 shadow-md"
                    >
                        <FaPhoneAlt aria-hidden="true" /> 617 547 481
                    </a>
                </div>

                {/* Hero Section: Texto + Imagen limpiadora */}
                <div className="absolute bottom-0 z-20 flex flex-wrap items-center justify-center w-full gap-5">
                    {/* Texto */}
                    <div className="text-white max-w-2xl text-center animate-fadeInLeft mx-2">
                        <h1 className="text-xl font-bold drop-shadow-lg md:text-3xl">
                            Tu hogar limpio, sin esfuerzo
                        </h1>
                        <h2 className="text-base md:text-xl mt-4 font-medium drop-shadow-md">
                            Servicio de limpieza profesional en Valdemoro a precios increíbles
                        </h2>
                        <p className="hidden mt-4 font-bold drop-shadow-lg md:block sm:block">
                            Confía en Brillo Hogar para la limpieza profesional de casas, oficinas y locales. Servicio puntual, personal de confianza y resultados impecables en tu zona.
                        </p>
                        <div className="mt-6">
                            <a
                                href="tel:617547481"
                                className="inline-block bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-full transition-transform duration-200 hover:scale-105 shadow-lg"
                                aria-label="Contactar a Brillo Hogar por teléfono"
                            >
                                Contratar ahora
                            </a>
                        </div>
                    </div>

                    {/* Imagen de limpiadora */}
                    <div className="relative w-70 h-70 sm:w-90 sm:h-90 lg:w-120 lg:h-120 animate-fadeInRight">
                        <Image
                            src={limpiadora}
                            alt="Trabajadora profesional de limpieza con utensilios"
                            fill
                            className="object-contain absolute bottom-0"
                            loading="lazy"
                            placeholder="empty"
                        />
                    </div>
                </div>


            </div>
        </header>
    );
}
