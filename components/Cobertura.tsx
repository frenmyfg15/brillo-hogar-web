"use client";

import { useInView } from "react-intersection-observer";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const Cobertura = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const zonasValdemoro = [
    "Valdemoro Norte",
    "Valdemoro Sur",
    "Valdemoro Este",
    "Valdemoro Oeste",
    "Centro de Valdemoro",
  ];

  return (
    <section
      ref={ref}
      className={`bg-gray-50 py-12 px-4 md:px-10 lg:px-20 my-10 transition-all duration-700 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Zona de Cobertura</h2>
        <p className="text-gray-600 mb-8">
          Brillo Hogar ofrece <strong>servicios de limpieza profesional</strong> en todo Valdemoro, garantizando puntualidad, confianza y resultados impecables en cada zona.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {zonasValdemoro.map((ciudad) => (
            <button
              key={ciudad}
              className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm border rounded-full text-gray-700 hover:scale-110 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              type="button"
              aria-label={`Servicio disponible en ${ciudad}`}
            >
              <FaMapMarkerAlt className="text-cyan-400" aria-hidden="true" />
              <span>{ciudad}</span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto text-center border">
          <p className="text-gray-700 text-lg mb-4">
            ¿Estás en otra zona de Madrid? Consulta disponibilidad y condiciones especiales.
          </p>
          <a
            href="tel:+34617547481"
            className="inline-flex items-center gap-2 bg-cyan-400 text-white px-6 py-3 rounded-lg hover:scale-110 hover:bg-cyan-700 transition"
          >
            <FaPhoneAlt />
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
};
