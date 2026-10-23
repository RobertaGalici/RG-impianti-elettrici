export function PrivatiPreventivo() {
  return (
    <>
      <section className="section" id="preventivo" data-sfondo="polvere">
        <div className="container">
          <div className="duo-modulo">
            <div>
              <div className="section-head reveal">
                <span className="sec-num">Il primo passo</span>
                <h2>Cosa ricevi quando richiedi un preventivo</h2>
              </div>
              <div className="offer reveal" data-d="1">
                <p>Un sopralluogo fatto <strong>di persona</strong>. Un <b className="key">preventivo scritto e dettagliato</b>, con materiali, quantità e marche. Un <strong>referente diretto, sempre lo stesso</strong>, dal primo contatto alla consegna.</p>
                <span className="offer__free">Sopralluogo e preventivo gratuiti, senza impegno.</span>
              </div>
            </div>

            <form className="lead-form reveal" data-d="2" noValidate>
              <div className="form-body">
                <div className="field">
                  <label htmlFor="p-nome">Nome e cognome <span className="req">*</span></label>
                  <input type="text" id="p-nome" name="nome" autoComplete="name" required={true} />
                </div>
                <div className="field">
                  <label htmlFor="p-tel">Telefono <span className="req">*</span></label>
                  <input type="tel" id="p-tel" name="telefono" autoComplete="tel" required={true} />
                </div>
                <div className="field">
                  <label htmlFor="p-comune">Comune <span className="req">*</span></label>
                  <input type="text" id="p-comune" name="comune" autoComplete="address-level2" required={true} />
                </div>
                <div className="field">
                  <label htmlFor="p-tipo">Cosa ti serve <span className="req">*</span></label>
                  <select id="p-tipo" name="tipo_intervento" required={true} defaultValue="">
                    <option value="" disabled={true}>Seleziona…</option>
                    <option>Impianto elettrico o rifacimento</option>
                    <option>Videosorveglianza</option>
                    <option>Allarme</option>
                    <option>Domotica</option>
                    <option>Video-citofono condominiale</option>
                    <option>Altro</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="p-msg">Messaggio <span className="form-opz">facoltativo</span></label>
                  <textarea id="p-msg" name="messaggio" placeholder="Es. appartamento di 90 mq a Quartu, impianto da rifare completamente"></textarea>
                </div>
                <div className="field field--check">
                  <input type="checkbox" id="p-privacy" name="privacy" required={true} />
                  <label htmlFor="p-privacy">Ho letto l&rsquo;<a href="/privacy/">informativa privacy</a> e acconsento al trattamento dei miei dati per essere ricontattato su questa richiesta. <span className="req">*</span></label>
                </div>
                <button type="submit" className="btn btn--primary btn--lg btn--block">Richiedi il preventivo gratuito
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
                <p className="form-note">Ti ricontattiamo noi, di persona. I dati servono solo a risponderti: nessuna newsletter, nessun giro di terzi.</p>
              </div>
              <div className="form-success" role="status">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                <h3>Richiesta inviata</h3>
                <p>Ti ricontattiamo noi, di persona.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
