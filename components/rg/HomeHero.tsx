import type { CSSProperties } from "react";

export function HomeHero() {
  return (
    <>
      <section className="hero--centro hero--scuro" data-hero data-sfondo="griglia" data-sfondo-tono="scuro">
        <div className="container">
          <p className="eyebrow reveal">Dal 1992 · Roberto e Luca Galici</p>
          <h1 className="reveal" data-d="1">Ci chiami <em>una volta sola</em>. Poi non pensi più al tuo impianto.</h1>
          <p className="lead reveal" data-d="2">Casa o azienda: <strong>impianti elettrici, videosorveglianza, allarme e domotica</strong> <b className="key">fatti bene al primo colpo</b>, così non devi richiamare nessuno per sistemare o rifare. Li seguono <strong>di persona</strong> Roberto e Luca Galici, due generazioni della stessa famiglia, dal 1992.</p>

          <p className="hero__domanda reveal" data-d="3">Per cosa hai bisogno di noi?</p>
          <div className="gate__choices reveal" data-d="3">
            {/* Le due iconine sono volumi veri in CSS 3D (nessuna libreria):
                 girano piano e si inclinano seguendo il mouse sulla scheda.
                 Sono decorative, quindi nascoste ai lettori di schermo. */}
            <a className="choice-card" href="/privati/">
              <span className="volume volume--casa" aria-hidden="true">
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
              <span className="choice-card__label">Sono un privato
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
              <span className="choice-card__sub">Casa, appartamento, villa, condominio</span>
            </a>
            <a className="choice-card" href="/aziende-enti/">
              <span className="volume volume--palazzo" aria-hidden="true">
                <span className="volume__incl">
                  <span className="volume__ombra"></span>
                  <span className="volume__gira">
                    <i className="mur mur--n"></i><i className="mur mur--e"></i><i className="mur mur--s"></i><i className="mur mur--o"></i>
                    <i className="par par--n"></i><i className="par par--e"></i><i className="par par--s"></i><i className="par par--o"></i><i className="cop"></i>
                    <i className="unit unit--f" style={{ '--x': '-8px' } as CSSProperties}></i><i className="unit unit--l" style={{ '--x': '-8px' } as CSSProperties}></i><i className="unit unit--t" style={{ '--x': '-8px' } as CSSProperties}></i>
                    <i className="unit unit--f" style={{ '--x': '5px' } as CSSProperties}></i><i className="unit unit--l" style={{ '--x': '5px' } as CSSProperties}></i><i className="unit unit--t" style={{ '--x': '5px' } as CSSProperties}></i>
                    <i className="antenna"></i><i className="parab"></i>
                    <i className="su piano" style={{ '--y': '-24px', '--n': '0' } as CSSProperties}></i><i className="su piano" style={{ '--y': '-10px', '--n': '4' } as CSSProperties}></i><i className="su piano" style={{ '--y': '4px', '--n': '8' } as CSSProperties}></i>
                    <i className="su piano f-e" style={{ '--y': '-24px', '--n': '1' } as CSSProperties}></i><i className="su piano f-e" style={{ '--y': '-10px', '--n': '5' } as CSSProperties}></i><i className="su piano f-e" style={{ '--y': '4px', '--n': '9' } as CSSProperties}></i><i className="su piano f-e" style={{ '--y': '18px', '--n': '12' } as CSSProperties}></i>
                    <i className="su piano f-s" style={{ '--y': '-24px', '--n': '2' } as CSSProperties}></i><i className="su piano f-s" style={{ '--y': '-10px', '--n': '6' } as CSSProperties}></i><i className="su piano f-s" style={{ '--y': '4px', '--n': '10' } as CSSProperties}></i><i className="su piano f-s" style={{ '--y': '18px', '--n': '13' } as CSSProperties}></i>
                    <i className="su piano f-o" style={{ '--y': '-24px', '--n': '3' } as CSSProperties}></i><i className="su piano f-o" style={{ '--y': '-10px', '--n': '7' } as CSSProperties}></i><i className="su piano f-o" style={{ '--y': '4px', '--n': '11' } as CSSProperties}></i><i className="su piano f-o" style={{ '--y': '18px', '--n': '14' } as CSSProperties}></i>
                    <i className="balc" style={{ '--y': '-6px' } as CSSProperties}></i><i className="ring" style={{ '--y': '-6px' } as CSSProperties}></i>
                    <i className="balc f-s" style={{ '--y': '-6px' } as CSSProperties}></i><i className="ring f-s" style={{ '--y': '-6px' } as CSSProperties}></i>
                    <i className="balc" style={{ '--y': '8px' } as CSSProperties}></i><i className="ring" style={{ '--y': '8px' } as CSSProperties}></i>
                    <i className="su ingr" style={{ '--y': '27px' } as CSSProperties}></i>
                    <i className="pens" style={{ '--y': '19px' } as CSSProperties}></i>
                    <i className="su insegna" style={{ '--y': '16px', '--n': '15' } as CSSProperties}></i>
                  </span>
                </span>
              </span>
              <span className="choice-card__label">Rappresento un’azienda o un ente
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
              <span className="choice-card__sub">Attività, uffici, strutture, enti pubblici</span>
            </a>
          </div>

          {/* Numero e area sono provvisori: da confermare prima di pubblicare */}
          <p className="hero__fiducia reveal" data-d="3">Oltre <b>400 interventi</b> in tutta la Sardegna</p>
        </div>
      </section>
    </>
  );
}
