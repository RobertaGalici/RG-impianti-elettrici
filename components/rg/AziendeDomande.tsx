export function AziendeDomande() {
  return (
    <>
      <section className="section section--compatta" id="domande" data-sfondo="polvere">
        <div className="container duo-affianco">
          <div className="section-head reveal">
            <span className="sec-num">FAQ</span>
            <h2>Il resto in due righe</h2>
            <p className="lead">Le cose pratiche che ci chiedete prima di affidarci una struttura.</p>
          </div>
          <div className="faq reveal">
            <details><summary>In quali zone lavorate?</summary><p><strong>Cagliari e provincia.</strong> La base è a Cagliari: lavoriamo in città e nei comuni intorno.</p></details>
            <details><summary>Fate manutenzione ricorrente o solo interventi singoli?</summary><p><strong>Tutti e due</strong>, soprattutto per strutture con sistemi complessi da tenere in efficienza.</p></details>
            <details><summary>Il sopralluogo è gratuito e senza impegno?</summary><p>Sì.</p></details>
            <details><summary>Potete darci un secondo parere su un progetto già avviato?</summary><p>Sì. Guardiamo il progetto e vi diciamo cosa ne pensiamo, anche se il lavoro non lo facciamo noi.</p></details>
            <details><summary>Potete lavorare per un ente pubblico?</summary><p><strong>Sì.</strong> Siamo iscritti alla CCIAA per impianti elettrici e possiamo partecipare ad appalti pubblici fino a <b className="num">150.000 €</b>.</p></details>
          </div>
        </div>
      </section>
    </>
  );
}
