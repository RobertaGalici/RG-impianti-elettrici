export function HomeStoria() {
  return (
    <>
      {/* La storia non sta più in un blocco di testo sospeso fra la foto e le
           due schede: ogni pezzo è andato dove parla di qualcuno. Il 1992 di
           Roberto sta nella scheda di Roberto, gli anni di Luca nella sua, e
           quello che li riguarda tutti e due chiude sotto, con la firma. */}
      <section className="section section--compatta section--tint" data-sfondo="polvere">
        <div className="container">
          <div className="people">
            <div className="person reveal">
              <div className="person__body">
                <span className="person__role">Prima generazione · dal 1992</span>
                <h3 className="person__name">Roberto Galici</h3>
                <p><strong>Nel 1992</strong> decide di mettersi in proprio. Ha già lavorato come elettricista per altri e sente il bisogno di costruire qualcosa di suo.</p>
                <div className="person__skills">
                  <span>Impianti civili e industriali</span>
                  <span>Quadri BT/MT</span>
                  <span>Messa a norma</span>
                </div>
              </div>
            </div>
            <div className="person reveal" data-d="1">
              <div className="person__body">
                <span className="person__role">Seconda generazione · dal 2020</span>
                <h3 className="person__name">Luca Galici</h3>
                <p>Cresce dentro l&rsquo;azienda di famiglia e, già alle superiori, inizia a formarsi come elettricista. <strong>Nel 2020</strong> entra a lavorare con il padre. <strong>Nel 2022</strong> fa un passo in più: vuole costruire qualcosa che sia anche suo.</p>
                <div className="person__skills">
                  <span>Allarme</span>
                  <span>Videosorveglianza</span>
                  <span>Domotica</span>
                </div>
              </div>
            </div>
          </div>

          <p className="storia-chiusa reveal" data-d="2">Oggi lavorano insieme e imparano l&rsquo;uno dall&rsquo;altro. Le tecnologie, le case e le esigenze sono cambiate tanto. <b className="key">La voglia di fare il lavoro bene, no.</b></p>
          <p className="firma-testo firma-testo--centro reveal" data-d="2">Roberto e Luca Galici</p>

          <p className="read-cue-wrap reveal" data-d="3"><a className="read-cue" href="#perche">Cosa ci distingue</a></p>
        </div>
      </section>
    </>
  );
}
