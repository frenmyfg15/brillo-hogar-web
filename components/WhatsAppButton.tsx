"use client";

import Image from "next/image";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34617547481?text=Hola%2C%20estoy%20interesado%2Fa%20en%20los%20servicios%20de%20limpieza%20de%20Brillo%20Hogar.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%20y%20un%20presupuesto%20por%20favor%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      style={{
        animationDuration: "1s",
        animationIterationCount: "7",
        animationFillMode: "forwards",
      }}
      aria-label="WhatsApp"
    >
      <Image
        src="/svg/whatsapp.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        className="w-6 h-6 invert"
      />
    </a>
  );
};
