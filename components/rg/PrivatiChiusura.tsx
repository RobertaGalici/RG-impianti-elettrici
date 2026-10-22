export function PrivatiChiusura() {
  return (
    <>
      <section className="section section--ampia sezione-scura final-cta" id="chiusura" data-sfondo="onda" data-sfondo-tono="scuro">
        <div className="container reading">
          <span className="sec-num reveal" style={{ textAlign: 'center', display: 'block' }}>L&rsquo;ultimo passo</span>
          <h2 className="reveal">Non aspettare di scoprire cosa manca al tuo impianto</h2>
          <p className="reveal" data-d="1">Con un <b className="key">sopralluogo gratuito</b> ti diciamo se la tua casa è <strong>protetta dagli sbalzi di tensione</strong>, se l&rsquo;impianto è <strong>in regola</strong> e se qualcuno potrebbe entrare senza che tu lo sappia. Ti risponde Roberto o Luca, di persona.</p>
          <div className="reveal" data-d="2" style={{ marginTop: '2.2rem', display: 'flex', justifyContent: 'center' }}>
            <a className="btn btn--primary btn--lg btn--magnetico" href="#preventivo">Richiedi il preventivo gratuito
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
          <p className="switch-path reveal" data-d="2" style={{ marginTop: '2.2rem' }}><a href="/aziende-enti/">Rappresenti un&rsquo;azienda o un ente? Vai alla sezione dedicata →</a></p>
        </div>
      </section>
    </>
  );
}
