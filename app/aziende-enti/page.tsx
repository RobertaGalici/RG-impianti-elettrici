import type { Metadata } from "next";
import { AziendePage } from "@/components/rg/AziendePage";

export const metadata: Metadata = {
  title: "Roberto Galici Impianti Elettrici — impianti e quadri per aziende ed enti | Cagliari",
  description: "Progettazione e realizzazione di impianti elettrici, quadri BT/MT, videosorveglianza e manutenzione per aziende ed enti a Cagliari e provincia. Un referente diretto, dal 1992.",
};

export default function Page() {
  return <AziendePage />;
}
