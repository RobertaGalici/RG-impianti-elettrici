import { PaginaRg } from "./PaginaRg";
import { SiteHeader } from "./SiteHeader";
import { PrivatiFooter } from "./PrivatiFooter";
import { StickyCta } from "./StickyCta";

import { PrivatiHero } from "./PrivatiHero";
import { PrivatiProblema } from "./PrivatiProblema";
import { PrivatiPreventivo } from "./PrivatiPreventivo";
import { PrivatiPerche } from "./PrivatiPerche";
import { PrivatiServizi } from "./PrivatiServizi";
import { PrivatiApprofondimenti } from "./PrivatiApprofondimenti";
import { PrivatiIncluso } from "./PrivatiIncluso";
import { PrivatiZone } from "./PrivatiZone";
import { PrivatiObiezioni } from "./PrivatiObiezioni";
import { PrivatiDomande } from "./PrivatiDomande";
import { PrivatiChiusura } from "./PrivatiChiusura";

export function PrivatiPage() {
  return (
    <>
          <PaginaRg percorso="privati" heroScuro />
          <SiteHeader percorso="privati" cta={{ href: "#preventivo", testo: "Preventivo gratuito" }} />
          <main>
            <PrivatiHero />
            <PrivatiProblema />
            <PrivatiPreventivo />
            <PrivatiPerche />
            <PrivatiServizi />
            <PrivatiApprofondimenti />
            <PrivatiIncluso />
            <PrivatiZone />
            <PrivatiObiezioni />
            <PrivatiDomande />
            <PrivatiChiusura />
          </main>
          <PrivatiFooter />
          <StickyCta href="#preventivo" testo="Preventivo gratuito" />
    </>
  );
}
