'use client';

import React from 'react';

interface RangoOcupado {
  inicio: string;
  fin: string;
}

interface Props {
  label: string;
  selected: string | null;
  onSelect: (hora: string) => void;
  selectedDate: Date;
  rangosOcupados: RangoOcupado[];
}

const horasDisponibles = Array.from({ length: 13 }, (_, i) => {
  const hora = 8 + i;
  return `${hora.toString().padStart(2, '0')}:00`;
});

const toMinutos = (h: string) => {
  const [hh, mm] = h.split(':').map(Number);
  return hh * 60 + mm;
};

const estaOcupada = (hora: string, rangos: RangoOcupado[]) => {
  const minutos = toMinutos(hora);

  return rangos.some(({ inicio, fin }) => {
    const minInicio = toMinutos(inicio) - 20; // 20 minutos antes
    const minFin = toMinutos(fin) + 20;       // 20 minutos después
    return minutos >= minInicio && minutos < minFin;
  });
};

export default function SelectorHora({
  label,
  selected,
  onSelect,
  selectedDate,
  rangosOcupados,
}: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto border border-cyan-100">
      <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
        {label}
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {horasDisponibles.map((hora) => {
          const ocupada = estaOcupada(hora, rangosOcupados);

          return (
            <button
              key={hora}
              onClick={() => !ocupada && onSelect(hora)}
              disabled={ocupada}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                ocupada
                  ? 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed'
                  : selected === hora
                  ? 'bg-cyan-500 text-white border-cyan-500'
                  : 'bg-white hover:bg-cyan-100 text-gray-700 border-gray-300'
              }`}
            >
              {hora}
            </button>
          );
        })}
      </div>
    </div>
  );
}
