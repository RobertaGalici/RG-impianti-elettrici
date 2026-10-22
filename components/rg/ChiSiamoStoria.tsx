export function ChiSiamoStoria() {
  return (
    <>
      {/* LA STORIA */}
      <section className="section" id="storia">
        <div className="container">
          <div className="section-head reveal">
            <span className="sec-num">La storia</span>
            <h2>Dal 1992 a oggi, senza passaggi di mano</h2>
          </div>

          {/* Gli anni segnati "20—" sono buchi veri: vanno chiesti a Roberto e Luca
               insieme a un paio di episodi concreti (la prima commessa importante,
               il primo impianto di domotica, il primo cantiere fatto insieme).
               Sono i dettagli che rendono credibile una storia: i siti che abbiamo
               guardato come riferimento hanno tutti date ed episodi, non aggettivi. */}
          <div className="timeline">
            <div className="tl-item reveal">
              <span className="tl-item__year">1992</span>
              <h3>Roberto apre l’attività</h3>
              <p>Impianti elettrici civili e industriali a Cagliari.</p>
            </div>
            <div className="tl-item reveal">
              <span className="tl-item__year">20—</span>
              <h3><span className="tl-todo">Da raccogliere</span>Una tappa scelta da Roberto</h3>
              <p>Un passaggio che ha cambiato il lavoro: la prima commessa importante, il primo quadro per un ente, il momento in cui l’attività è cresciuta. Anno e fatto vanno chiesti a lui.</p>
            </div>
            <div className="tl-item reveal">
              <span className="tl-item__year">20—</span>
              <h3><span className="tl-todo">Da raccogliere</span>L&rsquo;ingresso di Luca</h3>
              <p>In che anno è entrato, e cosa è cambiato da allora nel modo di lavorare. Anche qui servono parole loro, non una ricostruzione plausibile.</p>
            </div>
            <div className="tl-item reveal">
              <span className="tl-item__year">Oggi</span>
              <h3>Due specializzazioni, un solo referente</h3>
              <p>Roberto segue impianti e quadri, Luca sicurezza e domotica. Il cliente però ha sempre e solo un numero da chiamare — e dall’altra parte c’è chi ha fatto il lavoro.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
