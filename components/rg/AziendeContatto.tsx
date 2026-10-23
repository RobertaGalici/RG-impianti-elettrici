export function AziendeContatto() {
  return (
    <>
      <section className="section" id="contatto" data-sfondo="polvere">
        <div className="container">
          <div className="duo-modulo">
            <div>
              <div className="section-head reveal">
                <span className="sec-num">Il primo passo</span>
                <h2>Cosa ricevi quando ci scrivi</h2>
              </div>
              <div className="offer reveal" data-d="1">
                <p><strong>Un referente diretto.</strong> Un sopralluogo tecnico per capire <b className="key">dove la tua struttura rischia di perdere soldi</b> e come intervenire <strong>senza fermare l&rsquo;attività</strong>. Un preventivo scritto, con materiali e tempi chiari.</p>
                <span className="offer__free">Sopralluogo gratuito e senza impegno.</span>
              </div>
            </div>

            <form className="lead-form reveal" data-d="2" noValidate>
              <div className="form-body">
                <div className="field">
                  <label htmlFor="a-nome">Nome e cognome <span className="req">*</span></label>
                  <input type="text" id="a-nome" name="nome" autoComplete="name" required={true} />
                </div>
                <div className="field">
                  <label htmlFor="a-ruolo">Ruolo <span className="req">*</span></label>
                  <select id="a-ruolo" name="ruolo" required={true} defaultValue="">
                    <option value="" disabled={true}>Seleziona…</option>
                    <option>Titolare</option>
                    <option>Facility manager</option>
                    <option>Amministratore o gestore di struttura</option>
                    <option>Ufficio tecnico di un ente</option>
                    <option>Altro</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="a-az">Nome azienda o ente <span className="req">*</span></label>
                  <input type="text" id="a-az" name="azienda" autoComplete="organization" required={true} />
                </div>
                <div className="field">
                  <label htmlFor="a-tel">Telefono <span className="req">*</span></label>
                  <input type="tel" id="a-tel" name="telefono" autoComplete="tel" required={true} />
                </div>
                <div className="field">
                  <label htmlFor="a-mail">Email aziendale <span className="req">*</span></label>
                  <input type="email" id="a-mail" name="email" autoComplete="email" required={true} />
                </div>
                <div className="field">
                  <label htmlFor="a-tipo">Di cosa hai bisogno <span className="req">*</span></label>
                  <select id="a-tipo" name="tipo_intervento" required={true} defaultValue="">
                    <option value="" disabled={true}>Seleziona…</option>
                    <option>Quadro elettrico</option>
                    <option>Impianto elettrico</option>
                    <option>Videosorveglianza</option>
                    <option>Manutenzione</option>
                    <option>Secondo parere tecnico</option>
                    <option>Altro</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="a-msg">Racconta la situazione <span className="form-opz">facoltativo</span></label>
                  <textarea id="a-msg" name="messaggio" placeholder="Es. capannone di 600 mq, quadro generale da rifare senza fermare la produzione"></textarea>
                </div>
                <div className="field field--check">
                  <input type="checkbox" id="a-privacy" name="privacy" required={true} />
                  <label htmlFor="a-privacy">Ho letto l&rsquo;<a href="/privacy/">informativa privacy</a> e acconsento al trattamento dei miei dati per essere ricontattato su questa richiesta. <span className="req">*</span></label>
                </div>
                <button type="submit" className="btn btn--primary btn--lg btn--block">Scrivici in privato
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
                <p className="form-note">Risponde direttamente uno dei due titolari. I dati servono solo a risponderti.</p>
              </div>
              <div className="form-success" role="status">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                <h3>Richiesta inviata</h3>
                <p>Vi ricontattiamo noi, di persona.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
