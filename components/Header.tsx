import React from 'react';
import Image from 'next/image';
import hogar from '../public/image/hogar.webp';
import limpiadora from '../public/image/limpiadora.webp';
import { FaCalendarAlt  } from "react-icons/fa";
import Link from 'next/link';

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
                        <div className="mt-6 flex justify-center">
                            <Link
                                href="/reservar/"
                                className="flex gap-2 items-center px-4 py-2 rounded-2xl font-bold bg-cyan-500/70 text-white hover:bg-cyan-700 hover:scale-105 transition-transform duration-200 shadow-md text-center"
                                aria-label="Contactar a Brillo Hogar por teléfono"
                            >
                                <FaCalendarAlt aria-hidden="true" /> Agendar cita
                            </Link>
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
