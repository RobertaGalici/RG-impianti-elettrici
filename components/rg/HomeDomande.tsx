export function HomeDomande() {
  return (
    <>
      <section className="section section--compatta section--tint" id="domande" data-sfondo="onda">
        <div className="container duo-affianco">
          <div className="section-head reveal">
            <span className="sec-num">FAQ</span>
            <h2>Il resto in due righe</h2>
            <p className="lead">Le cose pratiche che ci chiedete al telefono, con la risposta corta.</p>
          </div>
          <div className="faq reveal">
            <details><summary>In quali zone lavorate?</summary><p><strong>In tutta la Sardegna.</strong> La base è a Cagliari, e la maggior parte dei cantieri è fra Cagliari e provincia.</p></details>
            <details><summary>Sopralluogo e preventivo sono gratuiti?</summary><p><strong>Sì, tutti e due</strong>, e senza impegno.</p></details>
            <details><summary>Lavorate sia con privati sia con aziende?</summary><p>Sì. Le due sezioni del sito sono scritte per esigenze diverse: casa da una parte, attività ed enti dall&rsquo;altra.</p></details>
            <details><summary>Posso far installare più servizi nello stesso cantiere?</summary><p>Sì, ed è il momento più comodo per farlo: si fa tutto con un cantiere solo.</p></details>
            <details><summary>Chi viene a fare il lavoro?</summary><p><strong>Roberto e Luca</strong>, padre e figlio: gli stessi che rispondono al telefono.</p></details>
          </div>
        </div>
      </section>
    </>
  );
}
