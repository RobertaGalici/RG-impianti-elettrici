export function ChiSiamoFooter() {
  return (
<footer className="site-footer" data-sfondo="stelle" data-sfondo-tono="scuro">
  <div className="container wide">
    <div className="footer-grid">
      <div className="footer-col footer-brand">
        <a className="brand" href="/" aria-label="Roberto Galici Impianti Elettrici — home">
          <img className="brand__logo" src="/assets/img/logo-rg.png" alt="" />
        </a>
        <p>Roberto e Luca Galici, padre e figlio. Impianti elettrici, sicurezza e domotica a Cagliari e provincia.</p>
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
      </div>
    </div>

    <div className="footer-legal">
      <span>© <span data-year>2026</span> Roberto Galici Impianti Elettrici · P.IVA 01817270927</span>
      <span><a href="/privacy/">Privacy</a> · <a href="/cookie-policy/">Cookie</a> · <a href="/note-legali/">Note legali</a></span>
    </div>
  </div>
</footer>
  );
}
