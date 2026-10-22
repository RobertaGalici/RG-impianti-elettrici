export function HomeProblema() {
  return (
    <>
      <section className="section section--tint" id="problema" data-sfondo="onda">
        <div className="container">
          <div className="section-head reveal">
            <span className="sec-num">Il problema</span>
            <h2>Un impianto fatto male sembra uguale a uno fatto bene. Fino al giorno in cui si rompe.</h2>
          </div>
          <div className="chain">
            <div className="chain-item reveal">
              <span className="chain-item__dot">1</span>
              <h3>Da fuori sono identici</h3>
              <p>Prese, luci e interruttori funzionano. Sembra tutto a posto. Ma la differenza tra un impianto fatto bene e uno fatto male <b className="key">non sta in quello che vedi</b>: sta <strong>nel quadro, nei cavi, nei componenti di sicurezza</strong>. E salta fuori solo il giorno in cui qualcosa va storto.</p>
              <a className="read-cue" href="#p2">Cosa c’è dietro</a>
            </div>
            <div className="chain-item chain-item--turn reveal" id="p2">
              <span className="chain-item__dot">2</span>
              <h3>E quel giorno il conto lo paghi tu</h3>
              <p>Preventivi generici «a corpo» che poi lievitano. Componenti di sicurezza tagliati per abbassare la cifra. Un pezzo da <b className="num">100 euro</b>, come lo <strong>scaricatore contro gli sbalzi di tensione</strong>, può evitarti di perdere <b className="key">migliaia di euro</b> di elettrodomestici. Se manca, lo scopri quando è già troppo tardi.</p>
              <a className="read-cue" href="#p3">Come lavoriamo noi</a>
            </div>
            <div className="chain-item reveal" id="p3">
              <span className="chain-item__dot">3</span>
              <h3>Chi arriva davvero a lavorare da te?</h3>
              <p>Un’impresa manda un operaio. Un’altra promette e sparisce. Quando qualcosa non funziona, di chi è la responsabilità? Da noi la risposta è una sola: <b className="key">a lavorare arrivano Roberto e Luca</b>.</p>
              <a className="read-cue" href="#chi-siamo">Conosci chi ci lavorerà</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
