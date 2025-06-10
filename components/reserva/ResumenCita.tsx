'use client';

import React, { useRef } from 'react';
import { Cita } from '@/app/types';
import { formatearFecha, generarPDFInformeCita } from '@/app/util/reserva';
import Link from 'next/link';

interface Props {
    cita: Cita;
}

export default function ResumenCita({ cita }: Props) {
    const resumenRef = useRef<HTMLDivElement>(null);

    function ResumenItem({ label, value }: { label: string; value: string }) {
        return (
            <div className="flex justify-between border-b pb-2 text-gray-700">
                <span className="font-medium">{label}:</span>
                <span>{value}</span>
            </div>
        );
    }


    return (
        <>
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 border" ref={resumenRef}>
                <h2 className="text-2xl font-bold text-cyan-700 mb-4 text-center">Cita confirmada</h2>

                <div className="space-y-4">
                    <ResumenItem label="Nombre" value={cita.nombre} />
                    <ResumenItem label="Teléfono" value={cita.telf} />
                    <ResumenItem label="Correo" value={cita.correo} />
                    <ResumenItem label="Fecha" value={formatearFecha(cita.fecha)} />
                    <ResumenItem label="Hora" value={`${cita.horaInicio} - ${cita.horaFin}`} />
                </div>

                <div className="mt-6 space-y-4 text-sm text-gray-600 text-center leading-relaxed">
                    <p>Le llamaremos en la mayor brevedad posible para <strong>rectificar y confirmar su cita</strong>.</p>
                    <p>Si necesita <strong>modificar</strong> o <strong>cancelar</strong> la cita, puede contactarnos a través de:</p>
                    <div className="font-medium">
                        <p>📞 Teléfono: <a href="tel:+34123456789" className="text-cyan-600 hover:underline">+34 123 456 789</a></p>
                        <p>✉️ Email: <a href="mailto:contacto@ejemplo.com" className="text-cyan-600 hover:underline">contacto@ejemplo.com</a></p>
                    </div>
                </div>

                <div className="mt-6 text-center space-y-2">
                    <button
                        onClick={() => generarPDFInformeCita(cita)}
                        className="bg-cyan-600 text-white px-4 py-2 rounded-lg shadow hover:bg-cyan-700 transition"
                    >
                        Descargar resumen en PDF
                    </button>
                    <p className="text-xs text-gray-400">Gracias por confiar en nosotros.</p>
                </div>


            </div>
            <div className="mt-10 flex sm:flex-row justify-center items-center gap-4">
                <Link href="/reservar" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-md font-semibold shadow transition">
                    Crear otra cita
                </Link>
                <Link href="/" className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-2 rounded-md font-semibold shadow transition">
                    Volver al inicio
                </Link>
            </div>
        </>
    );
}
