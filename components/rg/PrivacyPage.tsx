import { PaginaRg } from "./PaginaRg";
import { SiteHeader } from "./SiteHeader";
import { LegalFooter } from "./LegalFooter";

import { PrivacyContenuto } from "./PrivacyContenuto";

export function PrivacyPage() {
  return (
    <>
          <PaginaRg percorso="legal" />
          <SiteHeader percorso="legal" cta={null} />
          <main className="legal">
            <PrivacyContenuto />
          </main>
          <LegalFooter />
    </>
  );
}
