export function ChiSiamoPersone() {
  return (
    <>
      {/* LE PERSONE */}
      <section className="section section--tint" id="persone">
        <div className="container">
          <div className="section-head reveal">
            <span className="sec-num">Chi trovi in cantiere</span>
            <h2>Nessun tecnico anonimo: o l’uno o l’altro</h2>
          </div>
          <div className="foto-larga reveal">
            <img src="/assets/img/foto/titolari.jpg" alt="Roberto e Luca Galici" style={{ aspectRatio: '16/10', objectPosition: '50% 25%' }} />
          </div>
          <p className="foto-didascalia reveal">Roberto e Luca Galici. In cantiere arriva uno dei due — non un tecnico mandato da qualcun altro.</p>
          <div className="people" style={{ marginTop: 'clamp(2rem,5vw,3rem)' }}>
            <div className="person reveal">
              <div className="person__body">
                <span className="person__role">Prima generazione · dal 1992</span>
                <h3 className="person__name">Roberto Galici</h3>
                <p>Si occupa di impianti elettrici civili e industriali e, soprattutto, di quadri: è la specialità tecnica della casa.</p>
                <div className="person__skills">
                  <span>Impianti civili e industriali</span>
                  <span>Quadri BT/MT</span>
                  <span>Messa a norma</span>
                </div>
              </div>
            </div>
            <div className="person reveal" data-d="1">
              <div className="person__body">
                <span className="person__role">Seconda generazione</span>
                <h3 className="person__name">Luca Galici</h3>
                <p>Segue la parte dell’impianto che negli ultimi anni è cambiata di più: allarme, videosorveglianza e domotica.</p>
                <div className="person__skills">
                  <span>Allarme</span>
                  <span>Videosorveglianza</span>
                  <span>Domotica</span>
                </div>
              </div>
            </div>
          </div>
          {/* Una foto dei due insieme, in cantiere, vale più di tutta questa pagina:
               è l'unica immagine davvero non copiabile dai concorrenti. */}
        </div>
      </section>
    </>
  );
}
