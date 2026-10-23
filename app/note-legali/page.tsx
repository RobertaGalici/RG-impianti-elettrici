import type { Metadata } from "next";
import { NoteLegaliPage } from "@/components/rg/NoteLegaliPage";

export const metadata: Metadata = {
  title: "Roberto Galici Impianti Elettrici — note legali | Cagliari",
  description: "Note legali e dati identificativi di Roberto Galici Impianti Elettrici, Cagliari: titolare del sito, responsabilità e proprietà dei contenuti.",
};

export default function Page() {
  return <NoteLegaliPage />;
}
