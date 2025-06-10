'use client';

import { useState, useEffect } from 'react';

import { Cita } from '../types';
import { obtenerCitasCompletas, obtenerDiasConCitas } from '../services/reservas';
import ListaCitas from '@/components/panel/ListaCitas';
import DiasConCitaLista from '@/components/panel/DiasConCitaLista';
import SeleccionarDia from '@/components/reserva/SeleccionarDia';
import { format } from 'date-fns/fp';


export default function PanelCitas() {
    const [fechaSeleccionada, setFechaSeleccionada] = useState<Date>(new Date());
    const [citas, setCitas] = useState<Cita[]>([]);
    const [diasConCita, setDiasConCita] = useState<string[]>([]);

    useEffect(() => {
        obtenerDiasConCitas().then(setDiasConCita);
    }, []);


    useEffect(() => {
        if (fechaSeleccionada) {
            const fechaStr = format('yyyy-MM-dd')(fechaSeleccionada);
            obtenerCitasCompletas(fechaStr).then(setCitas);
        }
    }, [fechaSeleccionada]);

    return (
        <div className="flex bg-amber-50 min-h-screen items-center justify-center gap-16 flex-wrap pt-40">
            <div>
                <h1 className="text-3xl font-bold mb-6">Panel de Citas</h1>
                <SeleccionarDia
                    selectedDate={fechaSeleccionada}
                    onSelectDate={setFechaSeleccionada}
                    diasConCita={diasConCita}
                    mostrarDiasConCita={true}
                />
            </div>
            <div className='p-5'>
                <ListaCitas citas={citas} fecha={fechaSeleccionada ? fechaSeleccionada.toLocaleDateString('es-ES') : ''} />
                <DiasConCitaLista
                    dias={diasConCita}
                    onSelect={(fechaStr) => {
                        const partes = fechaStr.split('-').map(Number);
                        const nuevaFecha = new Date(partes[0], partes[1] - 1, partes[2], 12);
                        setFechaSeleccionada(nuevaFecha);
                    }}
                />
            </div>

        </div>
    );
}
