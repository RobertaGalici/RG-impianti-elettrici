import { PaginaRg } from "./PaginaRg";
import { SiteHeader } from "./SiteHeader";
import { AziendeFooter } from "./AziendeFooter";
import { StickyCta } from "./StickyCta";

import { AziendeHero } from "./AziendeHero";
import { AziendeProblema } from "./AziendeProblema";
import { AziendeContatto } from "./AziendeContatto";
import { AziendePerche } from "./AziendePerche";
import { AziendeCasi } from "./AziendeCasi";
import { AziendeServizi } from "./AziendeServizi";
import { AziendeCome } from "./AziendeCome";
import { AziendeZone } from "./AziendeZone";
import { AziendeObiezioni } from "./AziendeObiezioni";
import { AziendeDomande } from "./AziendeDomande";
import { AziendeChiusura } from "./AziendeChiusura";

export function AziendePage() {
  return (
    <>
          <PaginaRg percorso="aziende" heroScuro />
          <SiteHeader percorso="aziende" cta={{ href: "#contatto", testo: "Scrivici in privato" }} />
          <main>
            <AziendeHero />
            <AziendeProblema />
            <AziendeContatto />
            <AziendePerche />
            <AziendeCasi />
            <AziendeServizi />
            <AziendeCome />
            <AziendeZone />
            <AziendeObiezioni />
            <AziendeDomande />
            <AziendeChiusura />
          </main>
          <AziendeFooter />
          <StickyCta href="#contatto" testo="Scrivici in privato" />
    </>
  );
}
