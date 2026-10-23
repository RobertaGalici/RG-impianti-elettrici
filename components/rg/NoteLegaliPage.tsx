import { PaginaRg } from "./PaginaRg";
import { SiteHeader } from "./SiteHeader";
import { LegalFooter } from "./LegalFooter";

import { NoteLegaliContenuto } from "./NoteLegaliContenuto";

export function NoteLegaliPage() {
  return (
    <>
          <PaginaRg percorso="legal" />
          <SiteHeader percorso="legal" cta={null} />
          <main className="legal">
            <NoteLegaliContenuto />
          </main>
          <LegalFooter />
    </>
  );
}
