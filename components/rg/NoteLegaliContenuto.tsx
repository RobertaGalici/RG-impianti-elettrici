export function NoteLegaliContenuto() {
  return (
    <>

      <div className="container reading">
        <h1>Note legali</h1>
        <p className="legal__updated">Ultimo aggiornamento: da compilare alla pubblicazione</p>

        <h2>Dati identificativi</h2>
        <p>Questo sito è di Roberto Galici Impianti Elettrici, impresa attiva a Cagliari e
        provincia nella realizzazione di impianti elettrici, sistemi di sicurezza e domotica.</p>
        <span className="todo">Inserire ragione sociale completa, indirizzo della sede, P.IVA, numero REA e indirizzo PEC. Sono obbligatori e vanno ripetuti anche nel footer del sito.</span>

        <h2>Contatti</h2>
        <p>Telefono <a href="tel:+390701234567">070 123 4567</a> · email
        <a href="mailto:info@galicimpianti.it">info@galicimpianti.it</a></p>
        <span className="todo">Sostituire numero e indirizzo email con quelli reali: al momento sono segnaposto.</span>

        <h2>Contenuti del sito</h2>
        <p>Testi, fotografie e grafica presenti sul sito appartengono al titolare o sono usati
        con la sua autorizzazione, e non possono essere riprodotti senza consenso scritto.</p>
        <p>Le informazioni sui servizi hanno scopo descrittivo e non costituiscono un’offerta
        contrattuale: ogni lavoro viene definito nel preventivo scritto consegnato al cliente
        dopo il sopralluogo.</p>
        <span className="todo">Verificare che ogni foto pubblicata sia di proprietà dell’impresa e che i clienti ripresi o citati abbiano dato autorizzazione scritta. Vale in particolare per enti, forze dell’ordine e istituti di credito.</span>

        <h2>Preventivi e tempi indicati</h2>
        <p>Tempistiche, modalità di intervento e caratteristiche tecniche descritte nelle pagine
        del sito si riferiscono a lavori tipici e possono variare in base al sopralluogo.</p>

        <h2>Link esterni</h2>
        <p>Il sito non ospita link verso siti di terzi, a esclusione dei riferimenti normativi e
        istituzionali eventualmente citati nelle pagine legali.</p>

        <p style={{ marginTop: '3rem' }}><a href="/">Torna alla home</a></p>
      </div>

    </>
  );
}
