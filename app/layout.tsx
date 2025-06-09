import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import CookiesBanner from "@/components/CookiesBanner";

export const metadata: Metadata = {
  title: "Brillo Hogar | Servicio de Limpieza Profesional en Valdemoro",
  description: "Servicios de limpieza para hogares y empresas en Valdemoro y alrededores. Limpieza profunda, mantenimiento y confianza con personal capacitado. ¡Presupuesto sin compromiso!",
  keywords: [
    "limpieza Valdemoro",
    "servicio de limpieza",
    "Brillo Hogar",
    "limpieza profunda",
    "limpieza profesional",
    "limpieza ecológica",
    "hogares",
    "oficinas",
    "empresas"
  ],
  authors: [{ name: "Brillo Hogar", url: "https://brillohogar.es" }],
  robots: "index, follow",
  themeColor: "#22d3ee",
  openGraph: {
    title: "Brillo Hogar | Servicio de Limpieza Profesional",
    description: "Expertos en limpieza para hogares y empresas en Valdemoro. Atención personalizada y resultados impecables.",
    url: "https://brillohogar.es",
    siteName: "Brillo Hogar",
    images: [
      {
        url: "/image/logo.webp",
        width: 1200,
        height: 630,
        alt: "Logotipo Brillo Hogar",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <WhatsAppButton />
        <CookiesBanner />
      </body>
    </html>
  );
}
