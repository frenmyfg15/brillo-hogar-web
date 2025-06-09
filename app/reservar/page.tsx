'use client';

import React, { useEffect, useRef, useState } from 'react';
import SeleccionarDia from '@/components/reserva/SeleccionarDia';
import SelectorHora from '@/components/reserva/SelectorHora';
import SeleccionarHoraFin from '@/components/reserva/SeleccionarHoraFin';
import FormularioDatos from '@/components/reserva/FormularioDatos';
import ResumenCita from '@/components/reserva/ResumenCita';
import { Cita } from '../types';
import { agregar, obtenerCitas } from '../services/reservas';

const formatearFecha = (fecha: Date): string =>
  fecha.toISOString().split('T')[0];

export default function Page() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectHoraInicio, setSelectHoraInicio] = useState<string | null>(null);
  const [selectHoraFin, setSelectHoraFin] = useState<string | null>(null);
  const [datos, setDatos] = useState({ nombre: '', telf: '', correo: '' });
  const [rangosOcupados, setRangosOcupados] = useState<{ inicio: string; fin: string }[]>([]);

  const citaRef = useRef<Cita>({
    nombre: '',
    telf: '',
    correo: '',
    fecha: '',
    horaInicio: '',
    horaFin: ''
  });

  const [componente, setComponente] = useState<'dia' | 'horaInicio' | 'horaFin' | 'datos' | 'resumen'>('dia');

  useEffect(() => {
    if (!selectedDate) return;

    const fetchCitas = async () => {
      const fechaFormateada = formatearFecha(selectedDate);
      try {
        const citas = await obtenerCitas(fechaFormateada);
        setRangosOcupados(citas);
      } catch (error) {
        console.error('Error al obtener citas:', error);
      }
    };

    fetchCitas();
  }, [selectedDate]);

  const handleNext = async () => {
    if (componente === 'dia' && selectedDate) {
      setComponente('horaInicio');
    } else if (componente === 'horaInicio' && selectHoraInicio) {
      setComponente('horaFin');
    } else if (componente === 'horaFin' && selectHoraFin) {
      setComponente('datos');
    } else if (componente === 'datos' && selectedDate) {
      citaRef.current = {
        ...datos,
        fecha: formatearFecha(selectedDate),
        horaInicio: selectHoraInicio || '',
        horaFin: selectHoraFin || ''
      };

      try {
        await agregar(citaRef.current);
        setComponente('resumen');
      } catch (error) {
        console.error('Error al agregar cita:', error);
      }
    }
  };

  const handleBack = () => {
    if (componente === 'horaInicio') setComponente('dia');
    else if (componente === 'horaFin') setComponente('horaInicio');
    else if (componente === 'datos') setComponente('horaFin');
  };

  const isNextDisabled = () => {
    if (componente === 'dia') return !selectedDate;
    if (componente === 'horaInicio') return !selectHoraInicio;
    if (componente === 'horaFin') return !selectHoraFin;
    if (componente === 'datos') {
      return !datos.nombre.trim() || !datos.telf.trim() || !datos.correo.trim();
    }
    return false;
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen gap-8 px-4 py-10 mt-20">

      {componente === 'dia' && (
        <SeleccionarDia
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      )}

      {componente === 'dia' && selectedDate && (
        <p className="text-center text-gray-700">
          Has seleccionado el <strong>{formatearFecha(selectedDate)}</strong>
        </p>
      )}

      {componente === 'horaInicio' && selectedDate && (
        <SelectorHora
          label="Selecciona la hora de inicio"
          selected={selectHoraInicio}
          onSelect={setSelectHoraInicio}
          selectedDate={selectedDate}
          rangosOcupados={rangosOcupados}
        />
      )}

      {componente === 'horaFin' && selectHoraInicio && (
        <SeleccionarHoraFin
          horaInicio={selectHoraInicio}
          rangosOcupados={rangosOcupados}
          onSelectHoraFin={setSelectHoraFin}
        />
      )}

      {componente === 'datos' && (
        <FormularioDatos
          datos={datos}
          onChange={(e) => setDatos({ ...datos, [e.target.name]: e.target.value })}
        />
      )}

      {componente === 'resumen' && (
        <ResumenCita cita={citaRef.current} />
      )}

      {/* Controles */}
      {componente !== 'resumen' && (
        <div className="flex gap-4 mt-4">
          {componente !== 'dia' && (
            <button
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-5 rounded-lg shadow"
            >
              Volver
            </button>
          )}
          
          <button
            onClick={handleNext}
            disabled={isNextDisabled()}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow disabled:opacity-50"
          >
            {componente === 'datos' ? 'Confirmar' : 'Continuar'}
          </button>
        </div>
      )}
    </section>
  );
}
