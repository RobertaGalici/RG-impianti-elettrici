export function PrivatiIncluso() {
  return (
    <>
      {/* Non è un elenco qualsiasi: sono le quattro cose che il cliente si
           porta a casa comunque, quindi stanno in una fascia a sé. */}
      <section className="section section--compatta" id="incluso">
        <div className="container">
          <div className="garanzie reveal">
            <h2 className="garanzie__titolo">Per ogni impianto,<span>sempre incluso</span></h2>
            <ul className="garanzie__lista">
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6 20 6v6.1c0 4.6-3.2 7.8-8 9.3-4.8-1.5-8-4.7-8-9.3V6z" /><path d="M8.6 12.1 11 14.5l4.6-4.8" /></svg>
                <b>Certificazione di conformità</b>
                <span>Sempre inclusa, mai una voce a parte.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2.8H6.4A1.6 1.6 0 0 0 4.8 4.4v15.2a1.6 1.6 0 0 0 1.6 1.6h11.2a1.6 1.6 0 0 0 1.6-1.6V7.8z" /><path d="M14 2.8v5h5.2" /><path d="M8.4 12.4h7.2M8.4 16h5.2" /></svg>
                <b>Preventivo scritto e dettagliato</b>
                <span>Materiali, quantità e marche, prima di iniziare.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 20.6v-1.8a3.6 3.6 0 0 0-3.6-3.6H7.6A3.6 3.6 0 0 0 4 18.8v1.8" /><circle cx="12" cy="7.4" r="3.8" /></svg>
                <b>Un referente diretto</b>
                <span>Roberto o Luca, sempre la stessa persona.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20.4 7.6-8.4-4.8-8.4 4.8v8.8l8.4 4.8 8.4-4.8z" /><path d="m3.8 7.7 8.2 4.7 8.2-4.7M12 21.3v-8.9" /></svg>
                <b>Materiali di marca</b>
                <span>Nessun prodotto anonimo nell&rsquo;impianto.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
