export function HomePercorsi() {
  return (
    <>
      <section className="section" id="percorsi">
        <div className="container">
          <div className="section-head reveal">
            <span className="sec-num">Cosa facciamo</span>
            <h2>Un solo team per tutto l’impianto</h2>
            <p className="lead">Elettrico, sicurezza e domotica seguiti <b className="key">dalle stesse persone</b>. Puoi far installare più soluzioni <strong>nello stesso cantiere</strong>.</p>
          </div>
          <div className="percorsi">
            <a className="percorso reveal" href="/privati/">
              <span className="percorso__foto"><img src="/assets/img/foto/hero-quadro.jpg" alt="Quadro elettrico installato a parete in un'abitazione" loading="lazy" /></span>
              <span className="percorso__corpo">
                <span className="percorso__occhiello">Privati</span>
                <h3>Casa, appartamento, villa, condominio</h3>
                <ul>
                  <li>Impianti elettrici e rifacimenti</li>
                  <li>Videosorveglianza</li>
                  <li>Allarme, pronto in un giorno</li>
                  <li>Domotica, anche su impianti esistenti</li>
                  <li>Video-citofonia condominiale</li>
                </ul>
                <span className="percorso__cta">Vai alla sezione privati
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </span>
            </a>
            <a className="percorso reveal" data-d="1" href="/aziende-enti/">
              <span className="percorso__foto"><img src="/assets/img/foto/rack.jpg" alt="Armadio di cablaggio strutturato in una struttura aziendale" loading="lazy" /></span>
              <span className="percorso__corpo">
                <span className="percorso__occhiello">Aziende ed enti</span>
                <h3>Attività, uffici, strutture, enti pubblici</h3>
                <ul>
                  <li>Quadri elettrici BT/MT</li>
                  <li>Impianti civili e industriali</li>
                  <li>Videosorveglianza per attività</li>
                  <li>Manutenzione e pronto intervento</li>
                  <li>Certificazioni e messa a norma</li>
                </ul>
                <span className="percorso__cta">Vai alla sezione aziende
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </span>
            </a>
          </div>

          <div className="dati reveal" data-d="2">
            <div><b data-conta="1992">1992</b><span>l&rsquo;anno in cui Roberto ha aperto</span></div>
            <div><b data-conta="2020">2020</b><span>l&rsquo;anno in cui è entrato Luca</span></div>
            <div><b>40+</b><span>anni di esperienza nel settore</span></div>
            <div><b>Sempre</b><span>certificazione inclusa in ogni impianto</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
