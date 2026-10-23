export function NoteLegaliContenuto() {
  return (
    <>

      <div className="container reading">
        <h1>Note legali</h1>
        <p className="legal__updated">Ultimo aggiornamento: ottobre 2026</p>

        <h2>Dati identificativi</h2>
        <p>Questo sito è di Roberto Galici Impianti Elettrici, impresa attiva a Cagliari e
        provincia nella realizzazione di impianti elettrici, sistemi di sicurezza e domotica.
        P.IVA 01817270927.</p>
        {/* Da completare prima della pubblicazione: Mancano ancora, e sono obbligatori: ragione sociale completa, indirizzo della sede, numero REA e PEC. La P.IVA è quella della ditta di Roberto; se il sito è intestato a entrambe le ditte va indicata anche la seconda (04160440923). */}

        <h2>Contatti</h2>
        <p>Roberto Galici — telefono <a href="tel:+393389723178">338 9723178</a> · email{" "}
        <a href="mailto:galicirob@tiscali.it">galicirob@tiscali.it</a></p>
        <p>Luca Galici — telefono <a href="tel:+393664175399">366 4175399</a> · email{" "}
        <a href="mailto:lucagalici66@icloud.com">lucagalici66@icloud.com</a></p>

        <h2>Contenuti del sito</h2>
        <p>Testi, fotografie e grafica presenti sul sito appartengono al titolare o sono usati
        con la sua autorizzazione, e non possono essere riprodotti senza consenso scritto.</p>
        <p>Le informazioni sui servizi hanno scopo descrittivo e non costituiscono un’offerta
        contrattuale: ogni lavoro viene definito nel preventivo scritto consegnato al cliente
        dopo il sopralluogo.</p>
        {/* Da completare prima della pubblicazione: Verificare che ogni foto pubblicata sia di proprietà dell’impresa e che i clienti ripresi o citati abbiano dato autorizzazione scritta. Vale in particolare per enti, forze dell’ordine e istituti di credito. */}

        <h2>Preventivi e tempi indicati</h2>
        <p>Tempistiche, modalità di intervento e caratteristiche tecniche descritte nelle pagine
        del sito si riferiscono a lavori tipici e possono variare in base al sopralluogo.</p>

        <h2>Link esterni</h2>
        <p>Il sito non ospita link verso siti di terzi, a esclusione del collegamento a WhatsApp
        per i contatti, dei siti dei clienti citati nella sezione lavori e dei riferimenti normativi e
        istituzionali eventualmente citati nelle pagine legali.</p>

        <p style={{ marginTop: '3rem' }}><a href="/">Torna alla home</a></p>
      </div>

    </>
  );
}
