export function HomeRichiesta() {
  return (
    <>
      <section className="section section--ampia section--surface final-cta" id="richiesta" data-sfondo="polvere">
        <div className="container reading">
          <span className="sec-num reveal" style={{ textAlign: 'center', display: 'block' }}>Il primo passo</span>
          <h2 className="reveal">Raccontaci cosa ti serve</h2>
          <p className="reveal" data-d="1">Ti rispondono Roberto o Luca, <strong>di persona</strong>. <b className="key">Preventivo gratuito e senza impegno.</b></p>
          <div className="gate__choices reveal" data-d="2" style={{ marginTop: '2.4rem' }}>
            <a className="choice-card" href="/privati/#preventivo">
              <span className="choice-card__label">Sono un privato
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
              <span className="choice-card__sub">Ti richiamiamo noi, di persona</span>
            </a>
            <a className="choice-card" href="/aziende-enti/#contatto">
              <span className="choice-card__label">Rappresento un&rsquo;azienda o un ente
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
              <span className="choice-card__sub">Niente centralino: risponde un titolare</span>
            </a>
          </div>
          {/* Il copy prevede qui il rimando a WhatsApp: manca il numero.. */}
          <p className="form-note reveal" data-d="2" style={{ textAlign: 'center', marginTop: '1.6rem' }}>Preferisci scriverci su WhatsApp? Il numero è da inserire.</p>
        </div>
      </section>
    </>
  );
}
