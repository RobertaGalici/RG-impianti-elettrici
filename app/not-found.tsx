import type { Metadata } from "next";
import { PaginaRg } from "@/components/rg/PaginaRg";
import { SiteHeader } from "@/components/rg/SiteHeader";
import { LegalFooter } from "@/components/rg/LegalFooter";
import { NonTrovataContenuto } from "@/components/rg/NonTrovataContenuto";

export const metadata: Metadata = {
  title: "Roberto Galici Impianti Elettrici — pagina non trovata | Cagliari",
};

export default function NonTrovata() {
  return (
    <>
      <PaginaRg percorso="legal" />
      <SiteHeader percorso="legal" cta={null} />
      <main className="notfound">
        <NonTrovataContenuto />
      </main>
      <LegalFooter />
    </>
  );
}
