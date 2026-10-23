export function HomeContatti() {
  return (
    <>
      {/* CONTATTI */}
      <section className="section section--compatta sezione-scura" id="contatti">
        <div className="container">
          <div className="section-head reveal">
            <span className="sec-num">Contatti</span>
            <h2>Tre modi per parlare con noi</h2>
          </div>
          <div className="contact-grid">
            <a className="contact-card reveal" href="tel:+393389723178">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1.2.4 2.4.8 3.5a2 2 0 0 1-.5 2.1L8.1 10.5a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1.1.4 2.3.7 3.5.8a2 2 0 0 1 1.7 2Z" /></svg>
              <span className="contact-card__label">Telefono</span>
              <span className="contact-card__value">338 9723178</span>
              <span className="contact-card__note">Rispondono Roberto o Luca (366 4175399). Se non rispondiamo siamo in cantiere: richiamiamo noi.</span>
            </a>
            <a className="contact-card reveal" data-d="1" href="mailto:galicirob@tiscali.it">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
              <span className="contact-card__label">Email</span>
              <span className="contact-card__value">galicirob@tiscali.it</span>
              <span className="contact-card__note">Utile se vuoi allegare foto o planimetrie.</span>
            </a>
            <a className="contact-card reveal" data-d="2" href="#richiesta">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15h6M9 11h3" /></svg>
              <span className="contact-card__label">Modulo</span>
              <span className="contact-card__value">Preventivo gratuito</span>
              <span className="contact-card__note">Due minuti, poi ti richiamiamo noi.</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
