export function AziendeCasi() {
  return (
    <>
      <section className="section section--compatta" id="casi" data-sfondo="onda">
        <div className="container">
          <div className="section-head reveal">
            <span className="sec-num">I casi</span>
            <h2>Cosa abbiamo fatto per chi non può permettersi errori</h2>
          </div>
          <div className="casi">
            <article className="caso reveal">
              <h3>Acentro</h3>
              <p>Rifacimento completo degli impianti elettrici per le nuove zone Jeep, Fiat, Peugeot e Citroën e per gli uffici: prese, illuminazione e linee dati di tutte le postazioni di lavoro. Un impianto progettato per far lavorare tutti ogni giorno, senza sorprese.</p>
            </article>
            <article className="caso reveal" data-d="1">
              <h3>Banca di Cagliari</h3>
              <p><b className="num">Quattro sedi</b>: <strong>impianti elettrici, reti dati, videosorveglianza, allarmi e rivelazione fumi</strong>. Dove sicurezza e continuità sono fondamentali non si lascia nulla al caso.</p>
            </article>
            <article className="caso reveal" data-d="2">
              <h3>Università di Cagliari</h3>
              <p><b className="num">Dieci anni</b> di <strong>manutenzione degli impianti</strong> di una struttura grande, che non può fermarsi.</p>
            </article>
          </div>
          <p className="steps-note reveal" data-d="2">Su richiesta indichiamo referenze contattabili per il tipo di impianto che vi interessa.</p>
        </div>
      </section>
    </>
  );
}
