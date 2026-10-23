import type { CSSProperties } from "react";

export function PrivatiHero() {
  return (
    <>
      <section className="hero--foto" data-hero>
        <img src="/assets/img/foto/hero-quadro.jpg" alt="Quadro elettrico installato a parete" fetchPriority="high" />
        {/* La casa, grande, a destra: è lo stesso volume delle schede di scelta
             in home, solo ingrandito. Gira, galleggia, le finestre si accendono
             una a una, e si inclina seguendo il mouse sull'hero. */}
        <span className="hero__volume volume volume--casa" aria-hidden="true">
          <span className="volume__incl">
            <span className="volume__ombra"></span>
            <span className="volume__gira">
              <i className="mur mur--n"></i><i className="mur mur--e"></i><i className="mur mur--s"></i><i className="mur mur--o"></i>
              <i className="fal fal--n"></i><i className="fal fal--e"></i><i className="fal fal--s"></i><i className="fal fal--o"></i>
              <i className="sole" style={{ '--x': '-8px' } as CSSProperties}></i><i className="sole" style={{ '--x': '8px' } as CSSProperties}></i>
              <i className="cam cam--n"></i><i className="cam cam--e"></i><i className="cam cam--s"></i><i className="cam cam--o"></i><i className="cam-top"></i>
              <i className="su porta" style={{ '--y': '9px', '--n': '0' } as CSSProperties}></i>
              <i className="su lamp" style={{ '--y': '-4px' } as CSSProperties}></i>
              <i className="su fin" style={{ '--x': '-15px', '--y': '-7px', '--n': '1' } as CSSProperties}></i><i className="su fin" style={{ '--x': '15px', '--y': '-7px', '--n': '2' } as CSSProperties}></i>
              <i className="su fin f-e" style={{ '--x': '-10px', '--y': '-7px', '--n': '3' } as CSSProperties}></i><i className="su fin f-e" style={{ '--x': '10px', '--y': '8px', '--n': '4' } as CSSProperties}></i>
              <i className="su fin f-s" style={{ '--x': '-14px', '--y': '-7px', '--n': '5' } as CSSProperties}></i><i className="su fin f-s" style={{ '--x': '0', '--y': '8px', '--n': '6' } as CSSProperties}></i><i className="su fin f-s" style={{ '--x': '14px', '--y': '-7px', '--n': '7' } as CSSProperties}></i>
              <i className="su fin f-o" style={{ '--x': '9px', '--y': '-7px', '--n': '8' } as CSSProperties}></i><i className="su fin f-o" style={{ '--x': '-9px', '--y': '8px', '--n': '9' } as CSSProperties}></i>
            </span>
          </span>
        </span>
        <div className="container">
          <p className="eyebrow reveal">Privati · Cagliari e provincia</p>
          <h1 className="reveal" data-d="1">Un impianto fatto male non ti avvisa. <em>Ti presenta il conto.</em></h1>
          <p className="lead reveal" data-d="2">Elettrodomestici bruciati, lavori da rifare, casa sottosopra due volte, un ladro che entra senza che nessuno se ne accorga. Roberto e Luca Galici fanno <strong>impianti elettrici, videosorveglianza, allarme e domotica</strong> <b className="key">di persona</b>, dal 1992, perché a casa tua non succeda. <strong>Preventivo gratuito, senza impegno.</strong></p>
          <div className="hero__cta reveal" data-d="3">
            <a className="btn btn--primary btn--lg btn--magnetico" href="#preventivo">Richiedi il preventivo gratuito
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">Scorri<span></span></div>
      </section>
    </>
  );
}
