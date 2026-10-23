export function AziendeChiusura() {
  return (
    <>
      <section className="section section--ampia sezione-scura final-cta" id="chiusura" data-sfondo="onda" data-sfondo-tono="scuro">
        <div className="container reading">
          <span className="sec-num reveal" style={{ textAlign: 'center', display: 'block' }}>L&rsquo;ultimo passo</span>
          <h2 className="reveal">Parliamo della vostra struttura</h2>
          <p className="reveal" data-d="1">Raccontateci la situazione: <strong>un impianto da rifare, un ampliamento o solo un secondo parere</strong>. <b className="key">La valutiamo insieme, senza impegno.</b></p>
          <div className="reveal" data-d="2" style={{ marginTop: '2.2rem', display: 'flex', justifyContent: 'center' }}>
            <a className="btn btn--primary btn--lg btn--magnetico" href="#contatto">Scrivici in privato
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
          <p className="switch-path reveal" data-d="2" style={{ marginTop: '2.2rem' }}><a href="/privati/">Cerchi soluzioni per la tua casa? Vai alla sezione privati →</a></p>
        </div>
      </section>
    </>
  );
}
