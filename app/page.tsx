import { Cobertura } from "@/components/Cobertura";
import { Confianza } from "@/components/Confianza";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import ProductosTools from "@/components/ProductosTools";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <Services/>
    <HowWeWork/>
    <ProductosTools/>
    <Cobertura/>
    <Confianza/>
    <Footer/>
    </>
  );
}
