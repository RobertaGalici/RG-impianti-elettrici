export function PrivacyContenuto() {
  return (
    <>

      <div className="container reading">
        <h1>Informativa privacy</h1>
        <p className="legal__updated">Ultimo aggiornamento: ottobre 2026</p>

        <p>Questa informativa spiega come vengono trattati i dati personali di chi visita questo
        sito o compila uno dei moduli di richiesta preventivo, ai sensi del Regolamento UE
        2016/679 (GDPR).</p>

        <h2>1. Titolare del trattamento</h2>
        <p>Il titolare del trattamento è Roberto Galici Impianti Elettrici, con sede a Cagliari,
        P.IVA 01817270927. Per esercitare i diritti descritti al punto 6 puoi scrivere a{" "}
        <a href="mailto:galicirob@tiscali.it">galicirob@tiscali.it</a>.</p>
        {/* Da completare prima della pubblicazione: Mancano ancora la ragione sociale esatta e l’indirizzo completo della sede. */}

        <h2>2. Quali dati raccogliamo</h2>
        <p>Dai moduli di contatto presenti nelle pagine «Privati» e «Aziende ed enti»:</p>
        <ul>
          <li>nome e cognome;</li>
          <li>numero di telefono;</li>
          <li>nome dell’azienda o dell’ente e ruolo, solo nel modulo dedicato ad aziende ed enti;</li>
          <li>tipo di intervento richiesto e l’eventuale descrizione che scrivi tu nel campo libero.</li>
        </ul>
        <p>Non chiediamo dati non necessari a ricontattarti e non usiamo sistemi di intelligenza
        artificiale per elaborare le richieste ricevute.</p>
        <p>Dalla semplice navigazione, il server che ospita il sito registra i dati tecnici
        tipici di ogni sito web (indirizzo IP, data e ora della richiesta, pagina richiesta,
        tipo di browser), nei log di sistema del fornitore di hosting.</p>

        <h2>3. Perché li trattiamo e su quale base</h2>
        <ul>
          <li><strong>Rispondere alla tua richiesta</strong> di sopralluogo o preventivo: la base
          giuridica è l’esecuzione di misure precontrattuali che richiedi tu (art. 6.1.b GDPR),
          insieme al consenso che spunti nel modulo.</li>
          <li><strong>Sicurezza e funzionamento del sito</strong>: legittimo interesse del
          titolare a mantenere il servizio funzionante e protetto (art. 6.1.f GDPR).</li>
        </ul>
        <p>I dati non vengono usati per newsletter, profilazione o invio di materiale
        pubblicitario, e non vengono ceduti o venduti a terzi.</p>

        <h2>4. A chi vengono comunicati</h2>
        <p>I dati possono essere trattati, per nostro conto e come responsabili del trattamento,
        dai fornitori tecnici necessari a far funzionare il sito e la posta:</p>
        <ul>
          <li><strong>Fornitore di hosting</strong> del sito e delle caselle email;</li>
          <li><strong>Servizio di invio dei moduli</strong>, che recapita il contenuto del form
          alla nostra casella;</li>
          <li><strong>Google Ireland Ltd.</strong>, per il caricamento dei caratteri tipografici
          (Google Fonts): all’apertura della pagina il tuo browser richiede i font ai server di
          Google, che in quel momento vedono il tuo indirizzo IP.</li>
        </ul>
        {/* Da completare prima della pubblicazione: Indicare per nome hosting e servizio di invio dei moduli una volta scelti (es. Hostinger e il provider del form), e firmare con ciascuno un accordo sul trattamento dei dati (DPA). Se si preferisce evitare del tutto il passaggio a Google, i font vanno caricati dal nostro stesso server. */}

        <h2>5. Per quanto tempo li conserviamo</h2>
        <p>Le richieste di preventivo restano archiviate per il tempo necessario a gestire il
        contatto e l’eventuale lavoro che ne deriva, e comunque non oltre i termini previsti per
        la documentazione fiscale e contrattuale. I log tecnici del server seguono i tempi di
        conservazione del fornitore di hosting.</p>

        <h2>6. I tuoi diritti</h2>
        <p>Puoi chiedere in qualsiasi momento di accedere ai tuoi dati, correggerli, cancellarli,
        limitarne il trattamento, riceverli in formato leggibile o opporti al trattamento, oltre
        a revocare il consenso prestato. Per farlo basta scrivere all’indirizzo email del
        titolare indicato al punto 1.</p>
        <p>Se ritieni che il trattamento violi la normativa, puoi rivolgerti al Garante per la
        protezione dei dati personali (<a href="https://www.garanteprivacy.it" rel="noopener">garanteprivacy.it</a>).</p>

        <h2>7. Cookie</h2>
        <p>Il sito non installa cookie di profilazione. I dettagli sono nella
        <a href="/cookie-policy/">cookie policy</a>.</p>

        <p style={{ marginTop: '3rem' }}><a href="/">Torna alla home</a></p>
      </div>

    </>
  );
}
