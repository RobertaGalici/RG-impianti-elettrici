export function CookieContenuto() {
  return (
    <>

      <div className="container reading">
        <h1>Cookie policy</h1>
        <p className="legal__updated">Ultimo aggiornamento: ottobre 2026</p>

        <h2>In breve</h2>
        <p>Questo sito <strong>non installa cookie di profilazione, di marketing o di
        statistica</strong>. Non c’è nessun pixel pubblicitario, nessun sistema di analytics e
        nessun tracciamento della navigazione tra siti diversi. Per questo non trovi nessun
        banner che ti chiede di accettare: non ci sarebbe niente da accettare.</p>

        <h2>Cosa viene salvato sul tuo dispositivo</h2>
        <p>Nessun cookie tecnico viene impostato dal sito per funzionare. Le pagine sono statiche
        e non prevedono area riservata né carrello.</p>

        <h2>Servizi di terze parti</h2>
        <p>Le pagine non caricano nulla da fornitori esterni: i caratteri tipografici sono
        serviti dal nostro stesso sito. Restano soltanto l’hosting e il servizio che recapita i
        moduli, descritti nella <a href="/privacy/">informativa privacy</a>.</p>
        {/* Da completare prima della pubblicazione: Se in futuro si aggiungono Google Analytics, il pixel di Meta, una mappa Google incorporata o video YouTube, questa pagina va riscritta e va attivato il banner di consenso già predisposto nel codice: in `assets/js/main.js` basta mettere a `true` la costante `STRUMENTI_NON_ESSENZIALI`. Il pulsante «Rifiuta» deve restare identico per dimensione ed evidenza ad «Accetta». */}

        <h2>Come gestire i cookie dal browser</h2>
        <p>Indipendentemente da questo sito, puoi bloccare o cancellare i cookie dalle
        impostazioni del tuo browser: la voce si trova di solito sotto «Privacy e sicurezza».</p>

        <p style={{ marginTop: '3rem' }}><a href="/">Torna alla home</a></p>
      </div>

    </>
  );
}
