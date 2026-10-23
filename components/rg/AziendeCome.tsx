export function AziendeCome() {
  return (
    <>
      <section className="section section--tint" id="come" data-sfondo="polvere">
        <div className="container">
          <div className="section-head reveal">
            <span className="sec-num">Come lavoriamo</span>
            <h2>Come lavoriamo su una struttura già attiva</h2>
          </div>
          <div className="steps reveal">
            <div className="step">
              <span className="step__n">01</span>
              <h3>Sopralluogo tecnico</h3>
              <p>Capiamo la struttura, gli impianti esistenti e cosa non può fermarsi.</p>
            </div>
            <div className="step">
              <span className="step__n">02</span>
              <h3>Progetto e preventivo scritto</h3>
              <p>Materiali, quantità e tempi chiari prima di iniziare.</p>
            </div>
            <div className="step">
              <span className="step__n">03</span>
              <h3>Intervento organizzato attorno alla tua operatività</h3>
              <p>Concordiamo modalità e tempi con chi gestisce la struttura.</p>
            </div>
            <div className="step">
              <span className="step__n">04</span>
              <h3>Certificazione e assistenza nel tempo</h3>
              <p>Documentazione inclusa e un referente sempre raggiungibile.</p>
            </div>
          </div>
          <div className="reveal" data-d="2" style={{ marginTop: '2.2rem' }}>
            <a className="btn btn--primary" href="#contatto">Scrivici in privato
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
