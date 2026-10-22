/**
 * La barra in alto, uguale su tutte le pagine tranne due cose: quale
 * voce è quella che si sta leggendo, e cosa chiede il bottone. Sulle
 * pagine legali il bottone non c'è proprio.
 * Il telefono è ancora quello finto del nostro sito: i numeri veri
 * stanno nel sito della prima versione (338 9723178 e 366 4175399), ma
 * vanno confermati prima di pubblicarli —.
 */
export type Percorso = "home" | "privati" | "aziende" | "chi-siamo" | "legal";

export function SiteHeader({
  percorso = "home",
  cta = { href: "#contatti", testo: "Contattaci" },
}: {
  percorso?: Percorso;
  cta?: { href: string; testo: string } | null;
}) {
  const attiva = (p: Percorso) => (percorso === p ? "page" : undefined);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Roberto Galici Impianti Elettrici — home">
        <img className="brand__logo" src="/assets/img/logo-rg.png" alt="" />
      </a>
      <nav className="site-nav" aria-label="Navigazione principale">
        <span className="path-switch">
          <a href="/privati/" aria-current={attiva("privati")}>Per la casa</a>
          <a href="/aziende-enti/" aria-current={attiva("aziende")}>Per aziende ed enti</a>
        </span>
        <a href="/#lavori">Lavori</a>
        <a href="/chi-siamo/" aria-current={attiva("chi-siamo")}>Chi siamo</a>
        <a href="/#contatti">Contatti</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone" href="tel:+390701234567">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1.2.4 2.4.8 3.5a2 2 0 0 1-.5 2.1L8.1 10.5a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1.1.4 2.3.7 3.5.8a2 2 0 0 1 1.7 2Z" />
          </svg>
          <span>070 123 4567</span>
        </a>
        {cta && <a className="btn btn--primary" href={cta.href}>{cta.testo}</a>}
        <button className="nav-toggle" aria-label="Apri il menu" aria-expanded="false">
          <span></span>
        </button>
      </div>
    </header>
  );
}
