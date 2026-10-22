import type { CSSProperties } from "react";

export function HomeChiSiamo() {
  return (
    <>
      <section className="esp" id="chi-siamo">
        <div className="esp__pista" data-esp style={{ '--p': '0' } as CSSProperties}>
          <div className="esp__palco">

            <div className="esp__parole" aria-hidden="true">
              <span className="esp__parola esp__parola--sx">Roberto</span>
              <span className="esp__parola esp__parola--dx">e Luca</span>
            </div>

            <figure className="esp__media">
              <img src="/assets/img/foto/titolari.jpg" alt="Roberto e Luca Galici davanti al capannone" style={{ objectPosition: '50% 18%' }} loading="lazy" />
            </figure>

            <div className="esp__dentro">
              <span className="sec-num">Chi siamo</span>
              <h2>Due generazioni, una squadra</h2>
            </div>

            <div className="esp__invito" aria-hidden="true">Scorri <span></span></div>

          </div>
        </div>
      </section>
    </>
  );
}
