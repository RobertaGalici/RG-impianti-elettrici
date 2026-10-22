import type { Metadata } from "next";
import { PrivatiPage } from "@/components/rg/PrivatiPage";

export const metadata: Metadata = {
  title: "Roberto Galici Impianti Elettrici — impianti, allarme e domotica per la casa | Cagliari",
  description: "Impianto elettrico, videosorveglianza, allarme e domotica per la tua casa a Cagliari e provincia. Preventivo scritto e sopralluogo gratuito, con Roberto e Luca Galici in cantiere.",
};

export default function Page() {
  return <PrivatiPage />;
}
