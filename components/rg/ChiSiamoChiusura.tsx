export function ChiSiamoChiusura() {
  return (
    <>
      {/* CTA */}
      <section className="section section--ampia section--surface final-cta">
        <div className="container reading">
          <span className="sec-num reveal" style={{ textAlign: 'center', display: 'block' }}>Parliamone</span>
          <h2 className="reveal">Raccontaci cosa ti serve</h2>
          <p className="reveal" data-d="1">Sopralluogo e preventivo sono gratuiti e senza impegno, che si tratti di una casa o di un’attività.</p>
          <div className="gate__choices reveal" data-d="2" style={{ marginTop: '2.4rem' }}>
            <a className="choice-card" href="/privati/#preventivo">
              <span className="choice-card__label">Sono un privato
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
              <span className="choice-card__sub">Casa, appartamento, villa</span>
            </a>
            <a className="choice-card" href="/aziende-enti/#contatto">
              <span className="choice-card__label">Azienda o ente
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
              <span className="choice-card__sub">Attività, ufficio, ente pubblico</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
