'use client';

import { useState } from 'react';

interface DiasConCitaListaProps {
  dias: string[];
  onSelect: (fecha: string) => void;
}

export default function DiasConCitaLista({ dias, onSelect }: DiasConCitaListaProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (fecha: string) => {
    setSelected(fecha);
    onSelect(fecha);
  };

  const diasOrdenados = [...dias].sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Días con citas</h2>
      {diasOrdenados.length === 0 ? (
        <p className="text-gray-600">No hay días con citas actualmente.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {diasOrdenados.map((fecha, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(fecha)}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${
                selected === fecha
                  ? 'bg-cyan-600 text-white border-cyan-600'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-cyan-100'
              }`}
            >
              {fecha}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
