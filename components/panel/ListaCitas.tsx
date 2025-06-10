// app/panel/components/ListaCitas.tsx
'use client';

import { Cita } from "@/app/types";

interface ListaCitasProps {
  citas: Cita[];
  fecha: string;
}

export default function ListaCitas({ citas, fecha }: ListaCitasProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Citas para el {fecha}</h2>

      {citas.length === 0 ? (
        <p className="text-gray-600">No hay citas para este día.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {citas.map((cita, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[250px] max-w-sm p-4 rounded-2xl shadow-sm bg-white hover:shadow-md transition"
            >
              <p className="text-lg font-semibold text-gray-800">{cita.nombre}</p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Tel:</strong> {cita.telf}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Correo:</strong> {cita.correo}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Hora:</strong> {cita.horaInicio} - {cita.horaFin}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
