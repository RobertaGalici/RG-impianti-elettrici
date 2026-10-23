export function AziendeProblema() {
  return (
    <>
      <div className="contesto">
        <div className="container">
          <span className="contesto__qui">Stai leggendo la parte per aziende ed enti</span>
          <span className="contesto__altro">Cerchi impianti per casa tua? <a href="/privati/">Vai alla parte per la casa →</a></span>
        </div>
      </div>
      <section className="section section--tint" id="problema" data-sfondo="onda">
        <div className="container">
          <div className="section-head reveal">
            <span className="sec-num">Il problema</span>
            <h2>Ogni ora di fermo ha un prezzo</h2>
          </div>
          <div className="chain">

            <div className="chain-item reveal">
              <span className="chain-item__dot">1</span>
              <h3>Fai il conto: cosa succede alla tua attività se salta la corrente alle 9 del mattino?</h3>
              <p>Quanto fatturi in un&rsquo;ora? Quante persone paghi che restano ferme? Quanti clienti non riesci a servire? Reti dati, sistemi di sicurezza, videosorveglianza, climatizzazione: in una struttura ogni impianto deve funzionare e <strong>deve lavorare insieme agli altri</strong>. Un guasto non è un fastidio. <b className="key">Sono migliaia di euro persi.</b></p>
              <a className="read-cue" href="#az2">Dove finiscono i tuoi soldi</a>
            </div>

            <div className="chain-item reveal" id="az2">
              <span className="chain-item__dot">2</span>
              <h3>La riparazione è la voce più piccola</h3>
              <p>Il <strong>costo vero di un fermo</strong> è tutto il resto:</p>
              <ul className="chain-item__lista">
                <li>stipendi pagati a chi non può lavorare</li>
                <li>ordini e clienti persi</li>
                <li>apparecchiature e dati messi a rischio</li>
                <li>un intervento d&rsquo;urgenza, pagato più di un intervento programmato</li>
              </ul>
              <p>Un quadro elettrico <strong>mal dimensionato o mal realizzato</strong> non si vede <b className="key">finché non va in crisi nel momento sbagliato</b>.</p>
              <a className="read-cue" href="#az3">Perché succede</a>
            </div>

            <div className="chain-item reveal" id="az3">
              <span className="chain-item__dot">3</span>
              <h3>Risparmiare sull&rsquo;impianto è il modo più caro di risparmiare</h3>
              <p>Il preventivo più basso <b className="key">taglia dove non si vede</b>: <strong>dimensionamento, protezioni, documentazione</strong>. Quel risparmio lo paghi al primo fermo. E un impianto senza documentazione di conformità non è solo un rischio tecnico: è <strong>una responsabilità che resta a te</strong>.</p>
              <a className="read-cue" href="#az4">Come lavoriamo</a>
            </div>

            <div className="chain-item chain-item--turn reveal" id="az4">
              <span className="chain-item__dot">4</span>
              <h3>Più fornitori, nessun responsabile: il fermo dura di più</h3>
              <p>Un referente per l&rsquo;elettrico, uno per la sicurezza, uno per la manutenzione. Quando qualcosa si ferma, ognuno rimanda all&rsquo;altro, e <b className="key">ogni ora di rimpallo è un&rsquo;ora persa</b>.</p>
              <a className="read-cue" href="#az5">Un solo referente</a>
            </div>

            <div className="chain-item reveal" id="az5">
              <span className="chain-item__dot">5</span>
              <h3>Fermare l&rsquo;attività per fare i lavori costa. Farli male costa di più.</h3>
              <p>Molte aziende rimandano interventi necessari perché immaginano disagi lunghi. Un intervento organizzato male <strong>costa più in fermo che in lavoro</strong>. Organizzato attorno alla tua operatività, <b className="key">il fermo si riduce al minimo</b>.</p>
              <a className="read-cue" href="#come">Come interveniamo su una struttura già operativa</a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
