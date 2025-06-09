import jsPDF from 'jspdf';
import { Cita } from '@/app/types';

export const generarPDFInformeCita = (cita: Cita) => {
  const doc = new jsPDF();
  const fechaActual = new Date().toLocaleDateString('es-ES');

  // Encabezado
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('Solicitud de Servicio de Limpieza', 105, 20, { align: 'center' });

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Emitido el: ${fechaActual}`, 105, 28, { align: 'center' });

  // Datos del solicitante
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('Datos del solicitante', 20, 45);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Nombre completo: ${cita.nombre}`, 20, 55);
  doc.text(`Teléfono de contacto: ${cita.telf}`, 20, 63);
  doc.text(`Correo electrónico: ${cita.correo}`, 20, 71);

  // Detalles del servicio solicitado
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('Detalles del servicio solicitado', 20, 88);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Fecha solicitada: ${formatearFecha(cita.fecha)}`, 20, 98);
  doc.text(`Horario: ${cita.horaInicio} - ${cita.horaFin}`, 20, 106);

  // Instrucciones
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Información importante', 20, 125);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(
    'Le llamaremos lo antes posible para confirmar los detalles de su solicitud y coordinar el servicio.',
    20,
    135,
    { maxWidth: 170 }
  );
  doc.text(
    'Para modificar o cancelar su cita, puede contactarnos a través de los siguientes medios:',
    20,
    145,
    { maxWidth: 170 }
  );
  doc.text('Teléfono: +34 123 456 789', 25, 154);
  doc.text('Email: contacto@ejemplo.com', 25, 162);

  // Nota final
  doc.setFontSize(10);
  doc.text(
    'Gracias por confiar en nuestro servicio de limpieza. Este informe ha sido generado automáticamente.',
    105,
    185,
    { align: 'center' }
  );

  // Pie
  doc.setLineWidth(0.5);
  doc.line(20, 195, 190, 195);
  doc.setFontSize(9);
  doc.text('Servicios de Limpieza • www.servicioslimpieza.com', 105, 202, {
    align: 'center',
  });

  doc.save(`solicitud-limpieza-${cita.fecha}.pdf`);
};

export function formatearFecha(fecha: string) {
  const d = new Date(fecha);
  return d.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
