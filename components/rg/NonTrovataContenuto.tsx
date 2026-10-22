export function NonTrovataContenuto() {
  return (
    <>

      <div className="container">
        <span className="notfound__code">404</span>
        <h1>Questa pagina non c’è</h1>
        <p>Può darsi che l’indirizzo sia cambiato, o che il link fosse sbagliato in partenza.
        Da qui puoi ripartire.</p>
        <div className="gate__choices" style={{ marginTop: '1.4rem' }}>
          <a className="choice-card" href="/privati/">
            <span className="choice-card__label">Per la casa
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
            <span className="choice-card__sub">Casa, appartamento, villa</span>
          </a>
          <a className="choice-card" href="/aziende-enti/">
            <span className="choice-card__label">Per aziende ed enti
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
            <span className="choice-card__sub">Attività, ufficio, ente pubblico</span>
          </a>
        </div>
        <p className="switch-path" style={{ marginTop: '.6rem' }}><a href="tel:+390701234567">Oppure chiamaci: 070 123 4567 →</a></p>
      </div>

    </>
  );
}
