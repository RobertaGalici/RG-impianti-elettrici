import type { Metadata } from "next";
import { PrivacyPage } from "@/components/rg/PrivacyPage";

export const metadata: Metadata = {
  title: "Roberto Galici Impianti Elettrici — informativa privacy | Cagliari",
  description: "Informativa sul trattamento dei dati personali del sito di Roberto Galici Impianti Elettrici, Cagliari.",
};

export default function Page() {
  return <PrivacyPage />;
}
