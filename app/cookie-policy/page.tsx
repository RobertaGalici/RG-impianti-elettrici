import type { Metadata } from "next";
import { CookiePage } from "@/components/rg/CookiePage";

export const metadata: Metadata = {
  title: "Roberto Galici Impianti Elettrici — cookie policy | Cagliari",
  description: "Cookie policy del sito di Roberto Galici Impianti Elettrici, Cagliari: quali cookie e strumenti sono usati e come revocare il consenso.",
};

export default function Page() {
  return <CookiePage />;
}
