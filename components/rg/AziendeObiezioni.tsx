export function AziendeObiezioni() {
  return (
    <>
      <section className="section section--tint" id="obiezioni">
        <div className="container duo-affianco">
          <div className="section-head reveal">
            <span className="sec-num">Obiezioni</span>
            <h2>Le domande che ci fanno prima di scriverci</h2>
            <p className="lead">Sono le stesse in quasi tutte le trattative, e sono domande legittime. Qui ci sono le risposte per intero.</p>
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

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Abbiamo già un fornitore e un manutentore.<span className="bolla__ora">10:04 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Non chiediamo di sostituire nulla in blocco.<span className="bolla__ora">10:05</span></p>
              <p className="bolla bolla--loro">Valutiamo insieme dove un confronto ha senso, per esempio su un ampliamento o un progetto specifico. Un parere tecnico in più non costa nulla.<span className="bolla__ora">10:05</span></p>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Non possiamo fermare l’attività per un intervento.<span className="bolla__ora">10:07 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Organizziamo il lavoro attorno alla vostra operatività, concordando tempi e modalità con chi gestisce la struttura.<span className="bolla__ora">10:08</span></p>
              <p className="bolla bolla--loro">L’attività continua, l’impianto si aggiorna.<span className="bolla__ora">10:08</span></p>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Siete abilitati a lavorare con enti pubblici?<span className="bolla__ora">10:10 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Sì. Siamo iscritti alla CCIAA per impianti elettrici e possiamo partecipare ad appalti pubblici fino a 150.000 €.<span className="bolla__ora">10:11</span></p>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>Un impianto fatto bene però costa di più.<span className="bolla__ora">10:13 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Costa una volta. Un fermo costa ogni volta che succede: stipendi, ordini persi, interventi d’urgenza.<span className="bolla__ora">10:14</span></p>
              <p className="bolla bolla--loro">Un impianto progettato bene è la voce che vi fa spendere meno nel tempo.<span className="bolla__ora">10:14</span></p>

              <p className="bolla bolla--io bolla--coda"><span className="solo-vocale">Tu: </span>E dopo la consegna, chi ci segue?<span className="bolla__ora">10:16 <svg viewBox="0 0 18 12" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.6 4.3 10 9.6 2.6" /><path d="M8 9.9 8.9 11l5.9-8.4" /></svg></span></p>

              <p className="bolla bolla--loro bolla--coda"><span className="solo-vocale">RG Impianti: </span>Il nostro lavoro non finisce quando consegniamo l’impianto. Continuiamo a seguire il cliente nel tempo, perché un impianto fatto bene deve funzionare negli anni.<span className="bolla__ora">10:17</span></p>
            </div>

            {/* non è un campo di testo: è il link al modulo, vestito da chat */}
            <a className="chat__scrivi" href="#contatto">
              <span className="chat__campo">Fate la vostra domanda…</span>
              <span className="chat__invia" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2.4 20.4 22 12 2.4 3.6 2.4 10.2 16.3 12 2.4 13.8z" /></svg></span>
              <span className="solo-vocale">Vai al modulo per farci la vostra domanda</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
