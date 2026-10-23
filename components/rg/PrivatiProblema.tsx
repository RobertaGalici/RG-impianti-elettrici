export function PrivatiProblema() {
  return (
    <>
      {/* riga di contesto: dice in quale metà del sito sei e come passare all'altra */}
      <div className="contesto">
        <div className="container">
          <span className="contesto__qui">Stai leggendo la parte per la casa</span>
          <span className="contesto__altro">Cerchi impianti per un&rsquo;attività o un ente? <a href="/aziende-enti/">Vai alla parte per le aziende →</a></span>
        </div>
      </div>
      <section className="section section--tint" id="problema" data-sfondo="onda">
        <div className="container">
          <div className="section-head reveal">
            <span className="sec-num">Il problema</span>
            <h2>Cosa rischi con un impianto fatto male</h2>
          </div>

          {/* I quattro rischi stavano nell'hero, sopra il modulo: erano il
               riassunto di quello che si legge qui sotto, scritto due volte a
               due centimetri di distanza. Qui fanno da indice. */}
          <ul className="rischi reveal">
            <li>Migliaia di euro di elettrodomestici, per un componente da 100 € che manca</li>
            <li>Preventivi che lievitano e lavori da rifare</li>
            <li>Una casa sottosopra, e poi di nuovo</li>
            <li>Un&rsquo;intrusione che nessuno ti segnala</li>
          </ul>

          <div className="chain">

            <div className="chain-item reveal">
              <span className="chain-item__dot">1</span>
              <h3>Migliaia di euro, in un secondo</h3>
              <p>Televisore, computer, PlayStation, elettrodomestici, climatizzatori: in casa hai <b className="key">migliaia di euro di elettronica</b>. Uno <strong>sbalzo di tensione</strong> può bruciarli in un attimo. Lo <strong>scaricatore di sovratensione</strong> è il componente che ne limita i danni: costa circa <b className="num">100 euro</b> ed è spesso il primo a sparire da un preventivo, perché non si vede.</p>
              <p className="evidenza evidenza--forte">100 € oggi, o migliaia di euro domani.</p>
              <a className="read-cue" href="#pr2">Quanto rischi ancora</a>
            </div>

            <div className="chain-item reveal" id="pr2">
              <span className="chain-item__dot">2</span>
              <h3>I soldi che spendi due volte</h3>
              <p>Un preventivo generico, «a corpo», senza <strong>il numero di prese e di punti luce</strong>, sembra il più conveniente. Poi arrivano le voci aggiuntive. Poi il lavoro fatto male da rifare. <b className="key">Risparmiare oggi su una parte dell&rsquo;impianto può voler dire spendere molto di più domani.</b></p>
              <a className="read-cue" href="#pr3">Come si evita</a>
            </div>

            <div className="chain-item reveal" id="pr3">
              <span className="chain-item__dot">3</span>
              <h3>La casa sottosopra. Due volte.</h3>
              <p>Polvere ovunque, mobili da spostare, cartoni e attrezzi sparsi. È <strong>la paura più comune</strong> quando si fanno lavori: «Quanto casino mi ritroverò quando avranno finito?». E se il lavoro va rifatto, lo vivi di nuovo.</p>
              <a className="read-cue" href="#pr4">Come lavoriamo</a>
            </div>

            <div className="chain-item chain-item--turn reveal" id="pr4">
              <span className="chain-item__dot">4</span>
              <h3>Il ladro che entra e tu non lo sai</h3>
              <p>Il problema non è solo quello che può rubare: è che potresti non accorgerti di niente. Una telecamera da sola ti mostra <strong>quello che è già successo</strong>. Un sistema progettato per la tua casa <b className="key">ti fa sapere che sta succedendo, mentre succede</b>.</p>
              <a className="read-cue" href="#pr5">Cosa ti serve davvero</a>
            </div>

            <div className="chain-item reveal" id="pr5">
              <span className="chain-item__dot">5</span>
              <h3>Se non sai se il tuo impianto è protetto, non aspettare di scoprirlo</h3>
              <p>Non aspettare il giorno in cui qualcosa si rompe. A occuparsi del tuo impianto, dal primo sopralluogo alla consegna, sono <strong>Roberto e Luca Galici, padre e figlio</strong>.</p>
              <a className="read-cue" href="#preventivo">Cosa ricevi quando ci contatti</a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
