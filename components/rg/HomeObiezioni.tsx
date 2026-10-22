export function HomeObiezioni() {
  return (
    <>
      <section className="section section--compatta" id="obiezioni" data-sfondo="polvere">
        <div className="container duo-affianco">
          <div className="section-head reveal">
            <span className="sec-num">Obiezioni</span>
            <h2>Le domande che ci fanno prima di chiamarci</h2>
            <p className="lead">Sono quasi sempre le stesse tre, e sono domande giuste. Le risposte qui sotto sono le stesse che diamo al telefono.</p>
          </div>

          {/* La conversazione è vista dalla parte di chi legge: i messaggi a
               destra sono i suoi, quelli a sinistra le risposte della ditta.
               Nessun cliente inventato, nessuna faccia finta: solo le domande
               che arrivano davvero. */}
          <div className="chat reveal" data-chat>
            <div className="chat__testa">
              <img className="chat__foto" src="/assets/img/logo-rg.png" alt="" aria-hidden="true" width="40" height="40" />
              <span className="chat__chi">
                <b>RG Impianti</b>
                <span className="chat__stato">online</span>
              </span>
            </div>

            <div className="chat__corpo">
              <span className="chat__giorno">Oggi</span>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Non voglio spendere più del necessario.<span className="bolla__ora">9:41 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Hai ragione a pensarci.<span className="bolla__ora">9:42</span></p>
              <p className="bolla bolla--loro">Per questo ogni preventivo è scritto e dettagliato: materiali, quantità e marche. Sai cosa paghi prima di iniziare, e nessuna voce spunta dopo.<span className="bolla__ora">9:42</span></p>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Non vi conosco, come faccio a fidarmi?<span className="bolla__ora">9:44 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>È la domanda giusta.<span className="bolla__ora">9:45</span></p>
              <p className="bolla bolla--loro">Lavoriamo dal 1992, sempre con la stessa famiglia in cantiere, e tra i nostri clienti ci sono realtà che controllano con attenzione chi far lavorare per loro.<span className="bolla__ora">9:45</span></p>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Come faccio a sapere che è tutto a norma?<span className="bolla__ora">9:47 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Ogni impianto che realizziamo viene certificato, e la certificazione è sempre inclusa.<span className="bolla__ora">9:48</span></p>
              <p className="bolla bolla--loro">Hai un documento, non solo una promessa.<span className="bolla__ora">9:48</span></p>
            </div>

            {/* non è un campo di testo: è il link al modulo, vestito da chat */}
            <a className="chat__scrivi" href="#richiesta">
              <span className="chat__campo">Fai la tua domanda…</span>
              <span className="chat__invia" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2.4 20.4 22 12 2.4 3.6 2.4 10.2 16.3 12 2.4 13.8z" /></svg></span>
              <span className="solo-vocale">Vai al modulo per farci la tua domanda</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
