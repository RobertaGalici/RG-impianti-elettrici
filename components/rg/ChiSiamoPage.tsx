import { PaginaRg } from "./PaginaRg";
import { SiteHeader } from "./SiteHeader";
import { ChiSiamoFooter } from "./ChiSiamoFooter";

import { ChiSiamoHero } from "./ChiSiamoHero";
import { ChiSiamoCitazione } from "./ChiSiamoCitazione";
import { ChiSiamoStoria } from "./ChiSiamoStoria";
import { ChiSiamoPersone } from "./ChiSiamoPersone";
import { ChiSiamoPilastri } from "./ChiSiamoPilastri";
import { ChiSiamoChiusura } from "./ChiSiamoChiusura";

export function ChiSiamoPage() {
  return (
    <>
          <PaginaRg percorso="chi-siamo" />
          <SiteHeader percorso="chi-siamo" cta={{ href: "/#contatti", testo: "Contattaci" }} />
          <main>
            <ChiSiamoHero />
            <ChiSiamoCitazione />
            <ChiSiamoStoria />
            <ChiSiamoPersone />
            <ChiSiamoPilastri />
            <ChiSiamoChiusura />
          </main>
          <ChiSiamoFooter />
    </>
  );
}
