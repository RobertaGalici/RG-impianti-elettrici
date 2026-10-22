export function HomeLavori() {
  return (
    <>
      <section className="section" id="lavori" data-sfondo="onda">
        <span id="referenze" className="ancora" aria-hidden="true"></span>
        <div className="container wide">
          <div className="section-head reveal">
            <span className="sec-num">Prova sociale</span>
            <h2>Chi si è già affidato a noi</h2>
            <p className="lead">Forze dell&rsquo;ordine, banche, università, aziende e associazioni: realtà che non possono permettersi un impianto che non funziona. Apri una scheda per leggere cosa abbiamo fatto.</p>
          </div>

          <div className="strizza strizza--clienti reveal" data-strizza data-auto="0">

            <button className="strizza__p" type="button" aria-expanded="true">
              <span className="strizza__barra"></span>
              <img src="/assets/img/foto-extra/concessionaria.jpg" alt="Salone di una concessionaria con illuminazione a binario sul controsoffitto" loading="lazy" />
              <span className="strizza__vert">Acentro</span>
              <span className="strizza__testo">
                <span className="strizza__marchio" data-logo="acentro.jpg"></span>
                <span className="strizza__eti">Concessionaria</span>
                <span className="strizza__tit">Acentro</span>
                <p>Per le nuove zone Jeep, Fiat, Peugeot e Citroën e per gli uffici abbiamo rifatto gli <strong>impianti elettrici</strong>, dalle prese all&rsquo;illuminazione, fino alle <strong>linee dati</strong> di tutte le postazioni di lavoro. In una struttura così l&rsquo;impianto non deve solo funzionare: deve permettere a tutti di lavorare ogni giorno, senza sorprese.</p>
              </span>
            </button>

            <button className="strizza__p" type="button" aria-expanded="false">
              <span className="strizza__barra"></span>
              <img src="/assets/img/foto/rack.jpg" alt="Armadio di rete con i cavi attestati e pettinati sul pannello" loading="lazy" />
              <span className="strizza__vert">Banca di Cagliari</span>
              <span className="strizza__testo">
                <span className="strizza__marchio" data-logo="banca-di-cagliari.png"></span>
                <span className="strizza__eti">Istituto bancario</span>
                <span className="strizza__tit">Banca di Cagliari</span>
                <p>Siamo intervenuti in <b className="num">quattro sedi</b>: <strong>impianti elettrici, reti dati, videosorveglianza, allarmi e rivelazione fumi</strong>. Dove sicurezza e continuità sono fondamentali non si lascia nulla al caso, e il nostro lavoro prosegue anche dopo la consegna.</p>
              </span>
            </button>

            <button className="strizza__p" type="button" aria-expanded="false">
              <span className="strizza__barra"></span>
              <img src="/assets/img/foto/soffitto-led.jpg" alt="Binari di illuminazione su un controsoffitto" loading="lazy" />
              <span className="strizza__vert">Università di Cagliari</span>
              <span className="strizza__testo">
                <span className="strizza__marchio" data-logo="universita-cagliari.jpg"></span>
                <span className="strizza__eti">Ente universitario</span>
                <span className="strizza__tit">Università di Cagliari</span>
                <p>Per <b className="num">dieci anni</b> ci siamo occupati della <strong>manutenzione degli impianti</strong>. Una struttura grande, con esigenze diverse, che non può fermarsi.</p>
              </span>
            </button>

            <button className="strizza__p" type="button" aria-expanded="false">
              <span className="strizza__barra"></span>
              <img src="/assets/img/foto/quadri-muro.jpg" alt="Due quadri elettrici installati a parete" loading="lazy" />
              <span className="strizza__vert">Carabinieri</span>
              <span className="strizza__testo">
                <span className="strizza__marchio" data-logo="carabinieri.png"></span>
                <span className="strizza__eti">Forze dell&rsquo;ordine</span>
                <span className="strizza__tit">Carabinieri</span>
                <p className="strizza__manca">Testo da scrivere: cosa avete fatto per loro, in tre righe.</p>
              </span>
            </button>

            <button className="strizza__p" type="button" aria-expanded="false">
              <span className="strizza__barra"></span>
              <img src="/assets/img/foto/quadro-esterno.jpg" alt="Quadro elettrico da esterno aperto" loading="lazy" />
              <span className="strizza__vert">Guardia di Finanza</span>
              <span className="strizza__testo">
                <span className="strizza__marchio" data-logo="guardia-di-finanza.jpg"></span>
                <span className="strizza__eti">Forze dell&rsquo;ordine</span>
                <span className="strizza__tit">Guardia di Finanza</span>
                <p className="strizza__manca">Testo da scrivere: cosa avete fatto per loro, in tre righe.</p>
              </span>
            </button>

            <button className="strizza__p" type="button" aria-expanded="false">
              <span className="strizza__barra"></span>
              <img src="/assets/img/foto-extra/canottieri.jpg" alt="Telecamera installata sotto la gronda della sede della Canottieri Ichnusa" loading="lazy" />
              <span className="strizza__vert">Canottieri Cagliari</span>
              <span className="strizza__testo">
                <span className="strizza__marchio" data-logo="canottieri-cagliari.jpg"></span>
                <span className="strizza__eti">Associazione sportiva</span>
                <span className="strizza__tit">Canottieri Cagliari</span>
                <p className="strizza__manca">Testo da scrivere: cosa avete fatto per loro, in tre righe.</p>
              </span>
            </button>

            <button className="strizza__p" type="button" aria-expanded="false">
              <span className="strizza__barra"></span>
              <img src="/assets/img/foto-extra/marina.jpg" alt="Pontile di un porto turistico con le colonnine di banchina lungo il camminamento" loading="lazy" />
              <span className="strizza__vert">Lega Navale</span>
              <span className="strizza__testo">
                <span className="strizza__marchio" data-logo="lega-navale.jpg"></span>
                <span className="strizza__eti">Associazione nautica</span>
                <span className="strizza__tit">Lega Navale</span>
                <p className="strizza__manca">Testo da scrivere: cosa avete fatto per loro, in tre righe.</p>
              </span>
            </button>

          </div>

          <p className="strizza__nota reveal">Le foto sono quelle che abbiamo in archivio: per un blocco così servirebbe una foto per cliente, presa nel cantiere vero.</p>
        </div>
      </section>
    </>
  );
}
