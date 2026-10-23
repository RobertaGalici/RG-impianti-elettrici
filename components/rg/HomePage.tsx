import { PaginaRg } from "./PaginaRg";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { StickyCta } from "./StickyCta";

import { HomeHero } from "./HomeHero";
import { HomeNastro } from "./HomeNastro";
import { HomeProblema } from "./HomeProblema";
import { HomeChiSiamo } from "./HomeChiSiamo";
import { HomeStoria } from "./HomeStoria";
import { HomePerche } from "./HomePerche";
import { HomePercorsi } from "./HomePercorsi";
import { HomeZone } from "./HomeZone";
import { HomeLavori } from "./HomeLavori";
import { HomeObiezioni } from "./HomeObiezioni";
import { HomeDomande } from "./HomeDomande";
import { HomeContatti } from "./HomeContatti";
import { HomeRichiesta } from "./HomeRichiesta";

/**
 * La home, nello stesso ordine del copy del cliente: hero con la scelta
 * fra i due percorsi, nastro dei loghi, il problema, chi siamo, la
 * storia, perché noi, i due percorsi, la mappa, i clienti, le obiezioni,
 * le domande, i contatti e il modulo.
 */
export function HomePage() {
  return (
    <>
          <PaginaRg percorso="home" heroScuro />
          <SiteHeader percorso="home" />
          <main>
            <HomeHero />
            <HomeNastro />
            <HomeProblema />
            <HomeChiSiamo />
            <HomeStoria />
            <HomePerche />
            <HomePercorsi />
            <HomeZone />
            <HomeLavori />
            <HomeObiezioni />
            <HomeDomande />
            <HomeContatti />
            <HomeRichiesta />
          </main>
          <SiteFooter />
          <StickyCta />
    </>
  );
}
