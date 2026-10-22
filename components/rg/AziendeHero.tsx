import type { CSSProperties } from "react";

export function AziendeHero() {
  return (
    <>
      <section className="hero--foto" data-hero>
        <img src="/assets/img/foto/hero-cablaggio.jpg" alt="Armadio di cablaggio strutturato" fetchPriority="high" />
        {/* Il palazzo, grande, a destra: stesso volume delle schede di scelta
             in home, ingrandito. Gira, galleggia, i piani si illuminano a uno a
             uno, e si inclina seguendo il mouse sull'hero. */}
        <span className="hero__volume volume volume--palazzo" aria-hidden="true">
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
        <div className="container">
          <p className="eyebrow reveal">Aziende ed enti · Cagliari e provincia</p>
          <h1 className="reveal" data-d="1">Per la tua attività, un guasto elettrico non è un fastidio. <em>Sono migliaia di euro persi.</em></h1>
          <p className="lead reveal" data-d="2">Progettiamo e realizziamo <strong>quadri elettrici, impianti e sistemi di sicurezza</strong> per aziende ed enti dal 1992. <b className="key">Un referente diretto, non un call center.</b></p>
          <ul className="hero__bullets reveal" data-d="3">
            {/* L'elenco per esteso dei sette clienti sta nel primo pilastro
                 poco sotto: qui occupava quattro righe e ingolfava l'hero. */}
            <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Ci hanno scelto forze dell&rsquo;ordine, banche, università e aziende</li>
            <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Iscrizione CCIAA per impianti elettrici, con possibilità di partecipare ad appalti pubblici fino a 150.000 €</li>
            <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Lavoriamo attorno alla tua operatività, non il contrario</li>
          </ul>
          <div className="hero__cta reveal" data-d="3">
            <a className="btn btn--primary btn--lg btn--magnetico" href="#contatto">Scrivici in privato
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">Scorri<span></span></div>
      </section>
    </>
  );
}
