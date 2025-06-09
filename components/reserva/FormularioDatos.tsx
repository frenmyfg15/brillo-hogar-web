'use client';

import React from 'react';

interface Props {
  datos: {
    nombre: string;
    telf: string;
    correo: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormularioDatos({ datos, onChange }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full border border-cyan-100">
      <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
        Tus datos de contacto
      </h3>

      <form className="flex flex-col gap-4">
        <div className="hidden">
          {/* Honeypot: si este campo se rellena, probablemente sea un bot */}
          <label htmlFor="empresa">Empresa</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div>
          <label htmlFor="nombre" className="text-sm font-medium text-gray-700 block mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={datos.nombre}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label htmlFor="telf" className="text-sm font-medium text-gray-700 block mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            name="telf"
            id="telf"
            value={datos.telf}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Ej: 617 547 481"
            required
          />
        </div>

        <div>
          <label htmlFor="correo" className="text-sm font-medium text-gray-700 block mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            name="correo"
            id="correo"
            value={datos.correo}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Ej: correo@ejemplo.com"
            required
          />
        </div>
      </form>
    </div>
  );
}
