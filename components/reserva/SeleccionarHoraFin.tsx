'use client';

import React, { useState } from 'react';

interface SeleccionarHoraFinProps {
  horaInicio: string;
  rangosOcupados: { inicio: string; fin: string }[];
  onSelectHoraFin: (hora: string) => void;
}

const HORAS_DEL_DIA = Array.from({ length: 24 * 2 }, (_, i) => {
  const h = Math.floor(i / 2).toString().padStart(2, '0');
  const m = i % 2 === 0 ? '00' : '30';
  return `${h}:${m}`;
});

function agregarMinutos(hora: string, minutos: number): string {
  const [h, m] = hora.split(':').map(Number);
  const date = new Date();
  date.setHours(h);
  date.setMinutes(m + minutos);
  return date.toTimeString().slice(0, 5);
}

function hayColision(horaInicio: string, horaFin: string, rangos: { inicio: string; fin: string }[]) {
  return rangos.some(({ inicio, fin }) => {
    const margenInicio = agregarMinutos(inicio, -20);
    const margenFin = agregarMinutos(fin, 20);
    return (
      (horaInicio >= margenInicio && horaInicio < margenFin) ||
      (horaFin > margenInicio && horaFin <= margenFin) ||
      (horaInicio <= margenInicio && horaFin >= margenFin)
    );
  });
}

export default function SeleccionarHoraFin({
  horaInicio,
  rangosOcupados,
  onSelectHoraFin
}: SeleccionarHoraFinProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const indexInicio = HORAS_DEL_DIA.indexOf(horaInicio);
  const opcionesFin = HORAS_DEL_DIA.slice(indexInicio + 2).filter((hora) => hora <= '20:00');

  const opcionesValidas = opcionesFin.filter((fin) => {
    return !hayColision(horaInicio, fin, rangosOcupados);
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto border border-cyan-100">
      <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
        Selecciona la hora de finalización
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {opcionesValidas.map((hora) => (
          <button
            key={hora}
            onClick={() => {
              setSelected(hora);
              onSelectHoraFin(hora);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              selected === hora
                ? 'bg-cyan-500 text-white border-cyan-500'
                : 'bg-white hover:bg-cyan-100 text-gray-700 border-gray-300'
            }`}
          >
            {hora}
          </button>
        ))}
        {opcionesValidas.length === 0 && (
          <p className="text-sm text-gray-500 col-span-full text-center mt-4">
            No hay horas disponibles después de la hora seleccionada.
          </p>
        )}
      </div>
    </div>
  );
}
