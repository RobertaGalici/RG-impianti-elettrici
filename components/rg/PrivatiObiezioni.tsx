export function PrivatiObiezioni() {
  return (
    <>
      <section className="section" id="obiezioni">
        <div className="container duo-affianco">
          <div className="section-head reveal">
            <span className="sec-num">Obiezioni</span>
            <h2>Le domande che ci fanno prima di chiamarci</h2>
            <p className="lead">Arrivano quasi tutte prima del sopralluogo, e sono domande giuste. Le risposte sono le stesse che diamo al telefono.</p>
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

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Non voglio spendere più del necessario.<span className="bolla__ora">17:12 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Il prezzo è quasi sempre il primo pensiero, ed è giusto.<span className="bolla__ora">17:13</span></p>
              <p className="bolla bolla--loro">Ogni preventivo indica materiali, quantità e marche: sai cosa paghi prima di iniziare. Nessuna voce spunta in corso d’opera.<span className="bolla__ora">17:13</span></p>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Non vi conosco, come faccio a fidarmi?<span className="bolla__ora">17:15 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Lavoriamo dal 1992, sempre con la stessa famiglia in cantiere.<span className="bolla__ora">17:16</span></p>
              <p className="bolla bolla--loro">Tra le nostre referenze ci sono Carabinieri, Guardia di Finanza, Università di Cagliari e banche: realtà che non possono permettersi di sbagliare fornitore.<span className="bolla__ora">17:16</span></p>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Chi mi assicura che l’impianto sia a norma?<span className="bolla__ora">17:18 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Ogni impianto viene certificato, senza costi nascosti. Hai un documento a garanzia, non solo la nostra parola.<span className="bolla__ora">17:19</span></p>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>E non voglio la casa sottosopra.<span className="bolla__ora">17:21 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Quando entriamo in una casa, per noi resta la casa del cliente, non un cantiere qualsiasi. Proteggiamo mobili e spazi prima di iniziare.<span className="bolla__ora">17:22</span></p>
              <p className="bolla bolla--loro">Il lavoro non finisce quando l’impianto è pronto: finisce quando abbiamo pulito tutto, come vorremmo trovare noi la nostra casa.<span className="bolla__ora">17:22</span></p>
            </div>

            {/* non è un campo di testo: è il link al modulo, vestito da chat */}
            <a className="chat__scrivi" href="#preventivo">
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
