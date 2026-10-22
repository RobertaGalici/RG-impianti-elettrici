export function HomeNastro() {
  return (
    <>
      {/* NASTRO — «Hanno scelto noi» come da copy. I nomi stanno in main.js
           perché il nastro va duplicato per girare senza stacco. Ogni targa ha
           lo spazio del logo, vuoto finché il file non arriva. */}
      <section className="nastro nastro--scuro" aria-label="Enti e aziende che hanno scelto RG Impianti">
        <span className="nastro__eti">Hanno scelto noi</span>
        <div className="nastro__pista">
          <div className="nastro__gruppo" data-nastro></div>
          <div className="nastro__gruppo" data-nastro aria-hidden="true"></div>
        </div>
      </section>
    </>
  );
}
