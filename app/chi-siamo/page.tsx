import type { Metadata } from "next";
import { ChiSiamoPage } from "@/components/rg/ChiSiamoPage";

export const metadata: Metadata = {
  title: "Roberto Galici Impianti Elettrici — chi siamo, due generazioni | Cagliari",
  description: "Roberto e Luca Galici, padre e figlio: la storia dell'impresa dal 1992 a oggi, chi si occupa di cosa e come lavoriamo in cantiere.",
};

export default function Page() {
  return <ChiSiamoPage />;
}
