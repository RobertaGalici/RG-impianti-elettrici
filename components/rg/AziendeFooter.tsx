export function AziendeFooter() {
  return (
<footer className="site-footer" data-sfondo="stelle" data-sfondo-tono="scuro">
  <div className="container wide">
    <div className="footer-grid">
      <div className="footer-col footer-brand">
        <a className="brand" href="/" aria-label="Roberto Galici Impianti Elettrici — home">
          <img className="brand__logo" src="/assets/img/logo-rg.png" alt="" />
        </a>
        <p>Roberto e Luca Galici, padre e figlio. Impianti elettrici, quadri, sicurezza e manutenzione per aziende ed enti a Cagliari e provincia.</p>
      </div>
      <div className="footer-col">
        <h4>Contatti</h4>
        <a href="tel:+393389723178">Roberto · 338 9723178</a>
        <a href="tel:+393664175399">Luca · 366 4175399</a>
        <a href="mailto:galicirob@tiscali.it">galicirob@tiscali.it</a>
        <a href="mailto:lucagalici66@icloud.com">lucagalici66@icloud.com</a>
        <p style={{ marginTop: '.6rem' }}>Cagliari e provincia</p>
      </div>
      <div className="footer-col">
        <h4>Sezioni</h4>
        <a href="/privati/">Privati</a>
        <a href="/aziende-enti/">Aziende ed enti</a>
        <a href="/chi-siamo/">Chi siamo</a>
        <a href="#contatto">Scrivici in privato</a>
      </div>
    </div>

    <div className="footer-refs">
      <p className="footer-refs__label">Hanno lavorato con noi</p>
      <div className="footer-refs__list">
        <span>Carabinieri</span>
        <span>Guardia di Finanza</span>
        <span>Università di Cagliari</span>
        <span>Banca di Cagliari</span>
        <span>Banca di Sardegna</span>
        <span>Acentro</span>
        <span>Canottieri Cagliari</span>
        <span>Lega Navale</span>
      </div>
    </div>

    <div className="footer-legal">
      <span>© <span data-year>2026</span> Roberto Galici Impianti Elettrici · P.IVA 01817270927 · Iscrizione CCIAA per impianti elettrici · Appalti pubblici fino a 150.000 €</span>
      <span><a href="/privacy/">Privacy</a> · <a href="/cookie-policy/">Cookie</a> · <a href="/note-legali/">Note legali</a></span>
    </div>
  </div>
</footer>
  );
}
