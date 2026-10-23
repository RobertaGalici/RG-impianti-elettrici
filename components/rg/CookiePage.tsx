import { PaginaRg } from "./PaginaRg";
import { SiteHeader } from "./SiteHeader";
import { LegalFooter } from "./LegalFooter";

import { CookieContenuto } from "./CookieContenuto";

export function CookiePage() {
  return (
    <>
          <PaginaRg percorso="legal" />
          <SiteHeader percorso="legal" cta={null} />
          <main className="legal">
            <CookieContenuto />
          </main>
          <LegalFooter />
    </>
  );
}
