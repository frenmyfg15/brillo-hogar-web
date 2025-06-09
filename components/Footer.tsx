import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/image/logo.webp";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="Brillo Hogar Logo" width={80} height={80} className="mb-4" />
          <p className="text-sm">
            Servicios de limpieza profesional en Valdemoro. Confianza, puntualidad y resultados impecables.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaPhoneAlt className="text-cyan-500" />
              <a href="tel:+34617547481">617 547 481</a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaEnvelope className="text-cyan-500" />
              <a href="mailto:info@brillohogar.es">info@brillohogar.es</a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-cyan-500" />
              Valdemoro, Madrid
            </li>
          </ul>
        </div>

        {/* Enlaces legales */}
        <div>
          <h3 className="font-semibold mb-4">Información legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacidad" className="hover:underline">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:underline">
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link href="/politica" className="hover:underline">
                Política de la Empresa
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Brillo Hogar. Todos los derechos reservados.
      </div>
    </footer>
  );
};
