/**
 * Il bottone che resta in basso sul telefono. Compare dopo un po' di
 * scorrimento: ad accenderlo è assets/js/main.js, qui c'è solo il markup.
 */
export function StickyCta({
  href = "#contatti",
  testo = "Contattaci",
}: {
  href?: string;
  testo?: string;
}) {
  return (
    <div className="sticky-cta">
      <a className="btn btn--primary" href={href}>
        {testo}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}
