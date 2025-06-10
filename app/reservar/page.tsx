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
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
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

  // Define the steps for the progress bar
  const steps = ['Fecha', 'Hora Inicio', 'Hora Fin', 'Tus Datos', 'Confirmar'];

  // Determine the current step index
  const currentStepIndex = steps.indexOf(
    componente === 'dia' ? 'Fecha' :
    componente === 'horaInicio' ? 'Hora Inicio' :
    componente === 'horaFin' ? 'Hora Fin' :
    componente === 'datos' ? 'Tus Datos' : 'Confirmar'
  );

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
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-900 text-center">
        Agenda tu cita
      </h1>

      {/* Global Trust Banner */}
      <div className="w-full max-w-2xl bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg flex items-center justify-center gap-3 shadow-md my-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.944 12c0 3.076 1.15 5.922 3.04 8.618A11.955 11.955 0 0112 21.056a11.955 11.955 0 018.618-3.04A12.001 12.001 0 0021.056 12c0-3.076-1.15-5.922-3.04-8.618z"
          />
        </svg>
        <span className="text-lg font-semibold">¡Tu información está 100% segura y protegida!</span>
      </div>
      {/* End Global Trust Banner */}

      {/* Barra de Progreso Moderna */}
      <div className="w-full max-w-md flex justify-between items-center my-8">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className={`flex flex-col items-center relative ${index <= currentStepIndex ? 'text-cyan-600' : 'text-gray-400'}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-colors duration-300
                  ${index <= currentStepIndex ? 'bg-cyan-500' : 'bg-gray-300'}
                  ${index === currentStepIndex && 'ring-2 ring-cyan-500 ring-opacity-50'}
                `}
              >
                {index + 1}
              </div>
              <span className="text-sm mt-2 hidden md:block">{step}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 rounded-full mx-2 transition-colors duration-300
                  ${index < currentStepIndex ? 'bg-cyan-500' : 'bg-gray-300'}
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {componente === 'dia' && (
        <SeleccionarDia
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      )}

      {componente === 'dia' && selectedDate && (
        <p className="text-center text-gray-700">
          Has seleccionado el **{formatearFecha(selectedDate)}**
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