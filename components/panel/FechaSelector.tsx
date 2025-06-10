// app/panel/components/FechaSelector.tsx
'use client';

interface FechaSelectorProps {
  fecha: string;
  onChange: (fecha: string) => void;
}

export default function FechaSelector({ fecha, onChange }: FechaSelectorProps) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Selecciona una fecha:</label>
      <input
        type="date"
        value={fecha}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded"
      />
    </div>
  );
}
