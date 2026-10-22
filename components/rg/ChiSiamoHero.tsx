export function ChiSiamoHero() {
  return (
    <>
      <section className="page-hero" data-hero>
        <div className="hero__bg" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: '1' }}>
          <p className="eyebrow reveal">Chi siamo</p>
          <h1 className="reveal" data-d="1" data-parole>Due generazioni, la stessa faccia in cantiere.</h1>
          <p className="lead reveal" data-d="2">Roberto ha aperto nel 1992 e oggi lavora insieme al figlio Luca. Non siamo un&rsquo;impresa che manda qualcuno: l&rsquo;impresa siamo noi due.</p>
        </div>
      </section>
    </>
  );
}
