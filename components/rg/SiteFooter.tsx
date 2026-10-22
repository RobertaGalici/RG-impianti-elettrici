export function SiteFooter() {
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
        <a href="tel:+390701234567">070 123 4567</a>
        <a href="mailto:info@galicimpianti.it">info@galicimpianti.it</a>
        <p style={{ marginTop: '.6rem' }}>Cagliari e provincia</p>
      </div>
      <div className="footer-col">
        <h4>Il sito</h4>
        <a href="/privati/">Per la casa</a>
        <a href="/aziende-enti/">Per aziende ed enti</a>
        <a href="/chi-siamo/">Chi siamo</a>
        <a href="/#lavori">Lavori</a>
      </div>
    </div>

    <div className="footer-legal">
      <span>© <span data-year>2026</span> Roberto Galici Impianti Elettrici · P.IVA da inserire · Iscrizione CCIAA per impianti elettrici</span>
      <span><a href="/privacy/">Privacy</a> · <a href="/cookie-policy/">Cookie</a> · <a href="/note-legali/">Note legali</a></span>
    </div>
  </div>
</footer>
  );
}
