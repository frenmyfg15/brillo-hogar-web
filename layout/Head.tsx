import Image from 'next/image'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../public/image/logo.webp';

export default function Head() {
    return (
        <div className="absolute top-0 w-full z-20 px-6 md:px-10 py-4 flex justify-between items-center">
            <a href="/">
                <Image
                    src={logo}
                    alt="Logotipo de Brillo Hogar, empresa de limpieza profesional"
                    width={100}
                    height={100}
                />
            </a>
            <a
                aria-label="Llamar a Brillo Hogar"
                href="tel:617547481"
                className="flex gap-2 items-center px-4 py-2 rounded-2xl font-bold bg-cyan-500/70 text-white hover:bg-cyan-700 hover:scale-105 transition-transform duration-200 shadow-md"
            >
                <FaPhoneAlt aria-hidden="true" /> 617 547 481
            </a>
        </div>
    )
}
