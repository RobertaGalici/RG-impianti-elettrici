/* Roberto Galici Impianti Elettrici — interazioni */
(function () {
  'use strict';

  /* ---- Header: stato "stuck" allo scroll ---- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Menu mobile ---- */
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    /* Con la tendina aperta la pagina dietro non deve scorrere: oltre a essere
       fastidioso, scorrere mentre il menu è aperto era il modo per incappare
       nel bug del backdrop-filter (vedi il commento nel CSS). */
    var setNav = function (open) {
      document.body.classList.toggle('nav-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    toggle.addEventListener('click', function () {
      setNav(!document.body.classList.contains('nav-open'));
    });
    document.querySelectorAll('.site-nav a').forEach(function (a) {
      a.addEventListener('click', function () { setNav(false); });
    });
    /* un tocco fuori dalla tendina la richiude: sul telefono e' il gesto
       che tutti provano per primo, prima ancora di cercare la X */
    document.addEventListener('click', function (e) {
      if (!document.body.classList.contains('nav-open')) return;
      if (e.target.closest('.site-nav') || e.target.closest('.nav-toggle')) return;
      setNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) { setNav(false); }
    });
  }

  /* ---- Reveal on scroll ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revs = document.querySelectorAll('.reveal');
  var revealAll = function () { revs.forEach(function (el) { el.classList.add('in'); }); };

  /* Rivela solo ciò che è davvero sullo schermo adesso. La vecchia rete di
     sicurezza rivelava TUTTA la pagina dopo 2,6 secondi: le sezioni dieci
     schermate più sotto si animavano a vuoto, e arrivandoci scorrendo erano
     già ferme. Ora quelle restano in attesa del loro turno. */
  var rivelaInVista = function () {
    var h = window.innerHeight;
    revs.forEach(function (el) {
      if (el.classList.contains('in')) return;
      var r = el.getBoundingClientRect();
      if (r.top < h * .92 && r.bottom > 0) el.classList.add('in');
    });
  };

  if (reduced || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revs.forEach(function (el) { io.observe(el); });

    /* Doppia rete, senza bruciare le animazioni di chi sta più in basso:
       una passata sul visibile dopo il caricamento, e una a ogni scorrimento
       nel caso l'observer non scatti. Se l'observer funziona, qui non si fa
       altro che riaggiungere una classe già presente. */
    setTimeout(rivelaInVista, 2600);
    var inAttesa = false;
    window.addEventListener('scroll', function () {
      if (inAttesa) return;
      inAttesa = true;
      requestAnimationFrame(function () { inAttesa = false; rivelaInVista(); });
    }, { passive: true });
    window.addEventListener('pageshow', function (e) { if (e.persisted) rivelaInVista(); });
  }

  /* ---- Sticky CTA (mobile): compare dopo l'hero, si nasconde sul footer ---- */
  var sticky = document.querySelector('.sticky-cta');
  if (sticky) {
    var hero = document.querySelector('[data-hero]');
    var foot = document.querySelector('.site-footer');
    var sentAfter = hero || document.body;
    var check = function () {
      var pastHero = hero ? (hero.getBoundingClientRect().bottom < 0) : (window.scrollY > 600);
      var atFooter = foot ? (foot.getBoundingClientRect().top < window.innerHeight) : false;
      sticky.classList.toggle('is-visible', pastHero && !atFooter);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
  }

  /* ---- Form: invio simulato (da collegare a backend / servizio email) ---- */
  document.querySelectorAll('.lead-form').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      /* TODO backend: sostituire con fetch() verso endpoint reale o servizio (Formspree, ecc.) */
      form.classList.add('is-sent');
      var ok = form.querySelector('.form-success');
      if (ok) { ok.setAttribute('tabindex', '-1'); ok.focus(); }
    });
  });

  /* ---- Anno corrente nel footer ---- */
  var y = document.querySelector('[data-year]');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

/* =================================================================
   Blocchi aggiunti — galleria/lightbox e consenso cookie
   ================================================================= */
(function () {
  'use strict';

  /* ---- Lightbox della galleria ---- */
  var items = document.querySelectorAll('.gallery__item[data-full]');
  if (items.length) {
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Immagine ingrandita');
    box.innerHTML =
      '<button class="lightbox__close" type="button" aria-label="Chiudi">&times;</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(box);

    var img = box.querySelector('img');
    var cap = box.querySelector('figcaption');
    var closeBtn = box.querySelector('.lightbox__close');
    var lastFocus = null;

    var open = function (el) {
      lastFocus = el;
      img.src = el.getAttribute('data-full');
      img.alt = el.getAttribute('data-alt') || '';
      cap.textContent = el.getAttribute('data-cap') || '';
      box.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    };
    var close = function () {
      box.classList.remove('is-open');
      document.body.style.overflow = '';
      img.src = '';
      if (lastFocus) { lastFocus.focus(); }
    };

    items.forEach(function (el) {
      el.addEventListener('click', function () { open(el); });
    });
    closeBtn.addEventListener('click', close);
    box.addEventListener('click', function (e) { if (e.target === box) { close(); } });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box.classList.contains('is-open')) { close(); }
    });
  }

  /* ---- Consenso cookie ----------------------------------------------
     Oggi il sito non installa nessun cookie non essenziale, quindi il
     banner NON compare: un banner che chiede il consenso per niente è
     solo rumore. Il giorno in cui si aggiunge Analytics, il pixel di Meta
     o una mappa Google, si mette questa costante a true: il banner appare
     e "Rifiuta" ha lo stesso peso visivo di "Accetta" (btn--ghost e
     btn--primary hanno la stessa dimensione), come richiede SICUREZZA.md
     §10.2. Gli script vanno agganciati dentro attiva().
     ------------------------------------------------------------------ */
  var STRUMENTI_NON_ESSENZIALI = false;
  var CHIAVE = 'rg-consenso';

  var attiva = function () {
    /* TODO: qui dentro va il codice degli strumenti non essenziali
       (es. inserimento dello script di Analytics). Finché la costante
       sopra è false questa funzione non viene mai chiamata. */
  };

  if (STRUMENTI_NON_ESSENZIALI) {
    var scelta = null;
    try { scelta = localStorage.getItem(CHIAVE); } catch (e) { scelta = null; }

    if (scelta === 'si') {
      attiva();
    } else if (scelta !== 'no') {
      var banner = document.querySelector('.cookie-banner');
      if (banner) {
        banner.classList.add('is-open');
        banner.addEventListener('click', function (e) {
          var btn = e.target.closest('[data-consenso]');
          if (!btn) { return; }
          var val = btn.getAttribute('data-consenso');
          try { localStorage.setItem(CHIAVE, val); } catch (err) {}
          if (val === 'si') { attiva(); }
          banner.classList.remove('is-open');
        });
      }
    }
  }
})();


/* =================================================================
   Effetti presi da Websites/_kit/effects.html
   Stagger parole · conteggio numeri · bottone magnetico · parallax.
   Con prefers-reduced-motion attivo non parte niente.
   ================================================================= */
(function () {
  'use strict';
  var fermi = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Titolo dell'hero: le parole risalgono da una maschera ---- */
  document.querySelectorAll('[data-parole]').forEach(function (el) {
    if (fermi) { return; }
    var parole = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    parole.forEach(function (p, i) {
      var s = document.createElement('span');
      s.className = 'parola';
      s.style.setProperty('--i', i);
      var inner = document.createElement('i');
      inner.textContent = p;
      s.appendChild(inner);
      el.appendChild(s);
      if (i < parole.length - 1) { el.appendChild(document.createTextNode(' ')); }
    });
  });

  /* ---- Conteggio numeri (dal kit: risalita con easing cubico) ---- */
  function conta(el) {
    var meta = +el.dataset.conta, dur = 1100, t0 = performance.now();
    if (!isFinite(meta)) { return; }
    (function passo(now) {
      var p = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(meta * (1 - Math.pow(1 - p, 3)));
      if (p < 1) { requestAnimationFrame(passo); }
    })(performance.now());
  }
  var numeri = document.querySelectorAll('[data-conta]');
  if (numeri.length && !fermi && 'IntersectionObserver' in window) {
    var ioN = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { conta(v.target); ioN.unobserve(v.target); } });
    }, { threshold: .4 });
    numeri.forEach(function (n) { n.textContent = "0"; ioN.observe(n); });
    /* Rete di sicurezza, come per lo scroll-reveal: se l osservatore non
       scatta (scheda in secondo piano, blocco gia a schermo al caricamento)
       i numeri non devono restare a zero per sempre. */
    setTimeout(function () {
      numeri.forEach(function (n) {
        if (n.textContent === "0" && n.dataset.conta !== "0") { n.textContent = n.dataset.conta; }
      });
    }, 3000);
  }

  /* ---- Bottone magnetico sulla CTA principale ---- */
  if (!fermi && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.btn--magnetico').forEach(function (b) {
      b.addEventListener('mousemove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .22) + 'px,' +
                                           ((e.clientY - r.top - r.height / 2) * .3) + 'px)';
      });
      b.addEventListener('mouseleave', function () { b.style.transform = ''; });
    });
  }

  /* ---- Parallax allo scroll sulle foto grandi ---- */
  var parallasse = document.querySelectorAll('.par-box img');
  if (parallasse.length && !fermi) {
    var tick = false;
    var muovi = function () {
      parallasse.forEach(function (img) {
        var r = img.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) { return; }
        var off = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        img.style.transform = 'translateY(' + (off * 26) + 'px) scale(1.12)';
      });
      tick = false;
    };
    muovi();
    window.addEventListener('scroll', function () {
      if (!tick) { tick = true; requestAnimationFrame(muovi); }
    }, { passive: true });
    window.addEventListener('resize', muovi);
  }
})();

/* ---- Nastro delle referenze -------------------------------------------
   Nel nastro scorrono solo i loghi, senza nomi scritti. L'elenco sta qui
   e non nell'HTML perché il nastro va duplicato per girare senza stacco:
   scriverlo due volte a mano vorrebbe dire doverlo correggere due volte.
   ---------------------------------------------------------------------- */
(function () {
  'use strict';
  /* I file arrivano dal vecchio sito dei Galici, ripresi in originale e
     normalizzati a 160 px d'altezza — quattro volte la misura a cui si
     vedono, quindi nitidi anche sugli schermi densi. Chi ha il fondo già
     bianco sta in JPEG, chi ha la trasparenza in PNG: da qui la terza
     colonna con l'estensione.
     ACENTRASS compare fra i clienti della prima versione del sito. */
  var enti = [
    ['Acentro',                'acentro.jpg'],
    ['Acentrass V.I.',         'acentrass.png'],
    ['Carabinieri',            'carabinieri.png'],
    ['Guardia di Finanza',     'guardia-di-finanza.jpg'],
    ['Banca di Cagliari',      'banca-di-cagliari.png'],
    ['Università di Cagliari', 'universita-cagliari.jpg'],
    ['Canottieri Cagliari',    'canottieri-cagliari.jpg'],
    ['Lega Navale Italiana',   'lega-navale.jpg']
  ];

  document.querySelectorAll('[data-nastro]').forEach(function (gruppo, i) {
    enti.forEach(function (e) {
      var voce = document.createElement('span');
      voce.className = 'nastro__voce';

      var img = document.createElement('img');
      img.src = '/assets/img/loghi/' + e[1];
      /* Il secondo giro del nastro è un duplicato visivo: lì l'alt resta
         vuoto, altrimenti chi usa un lettore di schermo sente due volte
         la stessa lista. */
      img.alt = i === 0 ? e[0] : '';
      img.loading = 'lazy';
      img.decoding = 'async';

      /* se un file manca o non si carica, al suo posto torna il nome:
         meglio una parola che un riquadro vuoto */
      img.onerror = function () {
        voce.textContent = e[0];
        voce.classList.add('senza-logo');
      };

      voce.appendChild(img);
      gruppo.appendChild(voce);
    });
  });
})();


/* ---------------------------------------------------------------------
   ESPANSIONE ALLO SCORRIMENTO
   Una sola variabile `--p` (0 → 1) scritta sulla pista: ci pensa il CSS a
   trasformarla in larghezza della foto, spostamento delle parole e
   comparsa del testo. Niente rotella intercettata, niente pagina bloccata:
   si legge solo quanto si e' scesi.
   --------------------------------------------------------------------- */
(function () {
  var pista = document.querySelector('[data-esp]');
  if (!pista) return;

  /* chi ha chiesto meno animazioni vede direttamente il fotogramma finale */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    pista.style.setProperty('--p', '1');
    return;
  }

  var atteso = false;
  function calcola() {
    atteso = false;
    var corsa = pista.offsetHeight - window.innerHeight;
    var p = corsa > 0 ? -pista.getBoundingClientRect().top / corsa : 1;
    pista.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(4));
  }
  function chiedi() { if (!atteso) { atteso = true; requestAnimationFrame(calcola); } }

  window.addEventListener('scroll', chiedi, { passive: true });
  window.addEventListener('resize', chiedi);
  calcola();
})();


/* ---------------------------------------------------------------------
   CAROSELLO STRIZZATO
   Le larghezze le calcola il CSS: qui si decide solo quale pannello e'
   aperto. L'autoplay si ferma per sempre al primo clic — un carosello che
   riparte mentre stai leggendo una didascalia e' solo fastidioso.
   --------------------------------------------------------------------- */
(function () {
  var box = document.querySelector('[data-strizza]');
  if (!box) return;
  var pannelli = Array.prototype.slice.call(box.querySelectorAll('.strizza__p'));
  if (!pannelli.length) return;

  var DURATA = 5000;
  var lento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timer = null, attivo = 0;

  function apri(i) {
    attivo = i;
    pannelli.forEach(function (p, k) {
      p.setAttribute('aria-expanded', k === i ? 'true' : 'false');
      /* la barra dell'autoplay riparte da zero solo se la rianimiamo */
      var barra = p.querySelector('.strizza__barra');
      if (barra) { barra.style.animation = 'none'; void barra.offsetWidth; barra.style.animation = ''; }
    });
  }

  function fermaAuto() {
    box.setAttribute('data-auto', '0');
    if (timer) { clearInterval(timer); timer = null; }
  }
  function sospendi() { if (timer) { clearInterval(timer); timer = null; } }
  function avviaAuto() {
    if (lento || timer || box.getAttribute('data-auto') === '0') return;
    timer = setInterval(function () { apri((attivo + 1) % pannelli.length); }, DURATA);
  }

  pannelli.forEach(function (p, i) {
    p.addEventListener('click', function () { fermaAuto(); apri(i); });
    p.addEventListener('focus', function () { sospendi(); apri(i); });
  });

  box.addEventListener('keydown', function (e) {
    var passo = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1
              : e.key === 'ArrowLeft'  || e.key === 'ArrowUp'   ? -1 : 0;
    if (!passo) return;
    e.preventDefault();
    fermaAuto();
    var i = (attivo + passo + pannelli.length) % pannelli.length;
    apri(i);
    pannelli[i].focus();
  });

  box.addEventListener('pointerenter', sospendi);
  box.addEventListener('pointerleave', avviaAuto);

  /* fuori schermo non gira: non ha senso e consuma batteria */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { v.isIntersecting ? avviaAuto() : sospendi(); });
    }, { threshold: .25 }).observe(box);
  } else { avviaAuto(); }

  box.style.setProperty('--durata', (DURATA / 1000) + 's');
  box.style.setProperty('--n', pannelli.length);
  apri(0);
})();

/* ---------------------------------------------------------------------
   LOGHI: LI METTE IL FILE, NON L'HTML
   Vale per qualunque elemento con data-logo: le targhette dentro il
   carosello dei clienti, e il nastro in cima alla home. Lo slot resta
   vuoto finche' il file non esiste, poi il logo ci entra dentro: basta
   copiare un file in /assets/img/loghi/, niente da toccare nell'HTML.
   --------------------------------------------------------------------- */
(function () {
  'use strict';
  document.querySelectorAll('[data-logo]').forEach(function (slot) {
    var url = '/assets/img/loghi/' + slot.getAttribute('data-logo');
    var prova = new Image();
    prova.onload = function () {
      var img = document.createElement('img');
      img.src = url;
      img.alt = '';
      slot.appendChild(img);
      slot.classList.add('ha-logo');
    };
    prova.src = url;
  });
})();


/* =====================================================================
   SFONDI ANIMATI
   Quattro fondali rifatti in vanilla da 21st.dev (kinetic-grid,
   gradient-wave, fluid-particles, starfield). Stanno al posto di un
   rettangolo di colore pieno: devono farsi notare meno del contenuto,
   non di più.

   Si attivano mettendo su una sezione:
     data-sfondo="griglia|onda|polvere|stelle"
     data-sfondo-tono="scuro"      (opzionale: fondo scuro invece che chiaro)

   Un solo requestAnimationFrame per tutta la pagina, e disegna solo le
   sezioni che sono davvero sullo schermo. Con prefers-reduced-motion
   attivo viene disegnato un fotogramma fermo e il loop non parte.
   ===================================================================== */
(function () {
  'use strict';

  var sezioni = Array.prototype.slice.call(document.querySelectorAll('[data-sfondo]'));
  if (!sezioni.length || !document.createElement('canvas').getContext) return;

  var lento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var TAU = Math.PI * 2;

  /* ---- i quattro motori. Ognuno torna la funzione che disegna un frame ---- */
  var motori = {

    /* GRIGLIA (kinetic-grid) — crocette allineate, come su un foglio da
       disegno tecnico. Si piegano verso il cursore e ondeggiano al clic.
       Le crocette invece dei pallini servono anche a non far somigliare
       questo fondale agli altri due. */
    griglia: function (s) {
      var PASSO = 40, RAGGIO = 160, SPINTA = 8;
      s.onde = [];
      s.sez.addEventListener('pointerdown', function (e) {
        var r = s.cv.getBoundingClientRect();
        s.onde.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0, a: 1 });
        if (s.onde.length > 3) s.onde.shift();
      });
      return function (ctx, w, h) {
        /* su schermo stretto le crocette finiscono addosso al titolo:
           più rade e più chiare */
        if (w < 560) { PASSO = 54; } else { PASSO = 40; }
        var base = w < 560 ? (s.scuro ? .08 : .14) : (s.scuro ? .11 : .20);
        var punta = .3;
        var i, o, od, fronte, g;
        for (i = 0; i < s.onde.length; i++) { o = s.onde[i]; o.r += 7; o.a -= .012; }
        s.onde = s.onde.filter(function (o) { return o.a > 0; });

        ctx.lineCap = 'round';
        for (var x = PASSO / 2; x < w; x += PASSO) {
          for (var y = PASSO / 2; y < h; y += PASSO) {
            var dx = x - s.mx, dy = y - s.my;
            var d = Math.sqrt(dx * dx + dy * dy) || 1;
            var f = Math.max(0, 1 - d / RAGGIO);
            var ox = (dx / d) * f * SPINTA, oy = (dy / d) * f * SPINTA;

            for (i = 0; i < s.onde.length; i++) {
              o = s.onde[i];
              od = Math.sqrt((x - o.x) * (x - o.x) + (y - o.y) * (y - o.y)) || 1;
              fronte = o.r - od;
              if (fronte > -44 && fronte < 44) {
                g = Math.cos(fronte / 44 * (Math.PI / 2)) * o.a * 7;
                ox += (x - o.x) / od * g;
                oy += (y - o.y) / od * g;
              }
            }

            var a = base + f * punta;
            var br = 3 + f * 2.4;                     /* braccio della crocetta */
            ctx.strokeStyle = s.scuro ? 'rgba(255,255,255,' + a + ')' : 'rgba(22,24,27,' + a + ')';
            ctx.lineWidth = 1 + f * .5;
            ctx.beginPath();
            ctx.moveTo(x + ox - br, y + oy); ctx.lineTo(x + ox + br, y + oy);
            ctx.moveTo(x + ox, y + oy - br); ctx.lineTo(x + ox, y + oy + br);
            ctx.stroke();
          }
        }
      };
    },

    /* ONDA (gradient-wave) — tre creste che scorrono a velocità diverse,
       riempite con sfumature calde. Deve leggersi come un'onda: la prima
       versione era un velo al 7% e non si vedeva proprio. */
    onda: function (s) {
      var fasce = s.scuro
        ? [{ y: .52, amp: .20, per: 1.25, vel: .00020, c: '226,116,58',  a: .17 },
           { y: .70, amp: .14, per: .85,  vel: -.00029, c: '226,116,58', a: .11 },
           { y: .86, amp: .09, per: .62,  vel: .00037,  c: '255,255,255', a: .05 }]
        : [{ y: .52, amp: .20, per: 1.25, vel: .00020, c: '168,73,26',   a: .17 },
           { y: .70, amp: .14, per: .85,  vel: -.00029, c: '201,155,118', a: .30 },
           { y: .86, amp: .09, per: .62,  vel: .00037,  c: '22,24,27',   a: .09 }];

      return function (ctx, w, h, t) {
        for (var i = 0; i < fasce.length; i++) {
          var f = fasce[i];
          /* L'ampiezza smette di seguire l'altezza oltre una certa misura:
             su una sezione molto alta l'onda diventava una collina. */
          var hRif = Math.min(h, 700);
          var cy = h * f.y, amp = hRif * f.amp, per = w * f.per;
          var grad = ctx.createLinearGradient(0, cy - amp, 0, cy + amp * 2.4);
          grad.addColorStop(0, 'rgba(' + f.c + ',' + f.a + ')');
          grad.addColorStop(.75, 'rgba(' + f.c + ',' + (f.a * .35) + ')');
          grad.addColorStop(1, 'rgba(' + f.c + ',0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.moveTo(0, h);
          for (var x = 0; x <= w; x += 7) {
            /* due seni sovrapposti: la cresta non si ripete uguale */
            /* `t` è in millisecondi: con vel ~0.0002 la fase avanza di circa
               un quinto di radiante al secondo, cioè un'onda intera ogni
               mezzo minuto. Deve respirare, non correre. */
            ctx.lineTo(x,
              cy + Math.sin(x / per * TAU + t * f.vel) * amp
                 + Math.sin(x / (per * .41) * TAU - t * f.vel * .62) * amp * .3);
          }
          ctx.lineTo(w, h);
          ctx.closePath();
          ctx.fill();
        }
      };
    },

    /* POLVERE (fluid-particles) — macchie morbide che si muovono piano,
       più qualche granello. Niente ragnatela di linee fra i punti: era il
       cliché da landing page di un software, e per di più somigliava alle
       stelle del piè di pagina. */
    polvere: function (s) {
      var macchie = [], granelli = [], i;
      for (i = 0; i < 5; i++) {
        macchie.push({
          x: Math.random(), y: Math.random(),
          r: .18 + Math.random() * .22,
          vx: (Math.random() - .5) * .018, vy: (Math.random() - .5) * .012,
          fase: Math.random() * TAU
        });
      }
      for (i = 0; i < 26; i++) {
        granelli.push({
          x: Math.random(), y: Math.random(),
          vx: (Math.random() - .5) * .09, vy: (Math.random() - .5) * .09,
          r: .7 + Math.random() * 1.3
        });
      }
      return function (ctx, w, h, t) {
        var tinta = s.scuro ? '226,116,58' : '168,73,26';
        var lato = Math.min(Math.max(w, h), 820);   /* stesso motivo dell'onda */
        var j, m, px, py, rr, grad, dx, dy, d;

        for (j = 0; j < macchie.length; j++) {
          m = macchie[j];
          m.x += m.vx / 100; m.y += m.vy / 100;
          if (m.x < -.3) m.x = 1.3; if (m.x > 1.3) m.x = -.3;
          if (m.y < -.3) m.y = 1.3; if (m.y > 1.3) m.y = -.3;

          px = m.x * w; py = m.y * h;
          /* il cursore spinge via la macchia, piano */
          dx = px - s.mx; dy = py - s.my;
          d = Math.sqrt(dx * dx + dy * dy) || 1;
          if (d < 320) { px += dx / d * (320 - d) * .14; py += dy / d * (320 - d) * .14; }

          rr = lato * m.r * (1 + Math.sin(t * .0004 + m.fase) * .12);
          grad = ctx.createRadialGradient(px, py, 0, px, py, rr);
          grad.addColorStop(0, 'rgba(' + tinta + ',' + (s.scuro ? .085 : .07) + ')');
          grad.addColorStop(1, 'rgba(' + tinta + ',0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, rr, 0, TAU);
          ctx.fill();
        }

        for (j = 0; j < granelli.length; j++) {
          m = granelli[j];
          m.x += m.vx / w; m.y += m.vy / h;
          if (m.x < 0) m.x += 1; if (m.x > 1) m.x -= 1;
          if (m.y < 0) m.y += 1; if (m.y > 1) m.y -= 1;
          px = m.x * w; py = m.y * h;
          dx = px - s.mx; dy = py - s.my;
          d = Math.sqrt(dx * dx + dy * dy) || 1;
          if (d < 140) { px += dx / d * (140 - d) * .3; py += dy / d * (140 - d) * .3; }
          ctx.fillStyle = s.scuro ? 'rgba(255,255,255,.22)' : 'rgba(22,24,27,.17)';
          ctx.beginPath();
          ctx.arc(px, py, m.r, 0, TAU);
          ctx.fill();
        }
      };
    },

    /* STELLE (starfield) — punti minuti che pulsano e scorrono pianissimo.
       Solo su fondo scuro: su carta non si vedrebbero. */
    stelle: function (s) {
      var p = [], N = 110;
      for (var i = 0; i < N; i++) {
        p.push({
          x: Math.random(), y: Math.random(),
          r: .5 + Math.random() * 1.1,
          vel: .004 + Math.random() * .012,
          fase: Math.random() * TAU,
          rame: Math.random() < .14
        });
      }
      return function (ctx, w, h, t) {
        for (var i = 0; i < N; i++) {
          var a = p[i];
          a.x -= a.vel / w * 16;
          if (a.x < -.02) a.x += 1.04;
          var luce = .18 + (Math.sin(t * .0012 + a.fase) + 1) * .22;
          ctx.fillStyle = a.rame
            ? 'rgba(226,116,58,' + (luce * .9) + ')'
            : 'rgba(255,255,255,' + luce + ')';
          ctx.beginPath();
          ctx.arc(a.x * w, a.y * h, a.r, 0, TAU);
          ctx.fill();
        }
      };
    }
  };

  /* ---- montaggio ---- */
  var vive = [];

  sezioni.forEach(function (sez) {
    var tipo = sez.getAttribute('data-sfondo');
    if (!motori[tipo]) return;

    var cv = document.createElement('canvas');
    cv.className = 'sfondo';
    cv.setAttribute('aria-hidden', 'true');
    sez.insertBefore(cv, sez.firstChild);

    var s = {
      sez: sez, cv: cv, ctx: cv.getContext('2d'),
      w: 0, h: 0, mx: -9999, my: -9999,
      scuro: sez.getAttribute('data-sfondo-tono') === 'scuro',
      visibile: false
    };
    s.disegna = motori[tipo](s);

    sez.addEventListener('pointermove', function (e) {
      var r = cv.getBoundingClientRect();
      s.mx = e.clientX - r.left;
      s.my = e.clientY - r.top;
    });
    sez.addEventListener('pointerleave', function () { s.mx = s.my = -9999; });

    vive.push(s);
  });

  if (!vive.length) return;

  function misura(s) {
    var r = s.sez.getBoundingClientRect();
    s.w = Math.max(1, Math.round(r.width));
    s.h = Math.max(1, Math.round(r.height));
    s.cv.width = Math.round(s.w * DPR);
    s.cv.height = Math.round(s.h * DPR);
    s.ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    /* senza animazioni il frame è uno solo: va ridisegnato a ogni misura */
    if (lento) { s.ctx.clearRect(0, 0, s.w, s.h); s.disegna(s.ctx, s.w, s.h, 0); }
  }

  function frame(t) {
    for (var i = 0; i < vive.length; i++) {
      var s = vive[i];
      if (!s.visibile) continue;
      s.ctx.clearRect(0, 0, s.w, s.h);
      s.disegna(s.ctx, s.w, s.h, t);
    }
    requestAnimationFrame(frame);
  }

  vive.forEach(misura);

  /* Con prefers-reduced-motion il disegno lo fa già misura(), a ogni
     cambio di dimensione: niente osservatore di visibilità, niente loop. */
  if (!lento && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        for (var i = 0; i < vive.length; i++) {
          if (vive[i].sez === v.target) vive[i].visibile = v.isIntersecting;
        }
      });
    }, { rootMargin: '120px' });
    vive.forEach(function (s) { io.observe(s.sez); });
  } else {
    vive.forEach(function (s) { s.visibile = true; });
  }

  /* Il canvas va rimisurato ogni volta che cambia il box della sezione, non
     solo quando cambia la finestra: al primo caricamento la sezione può
     essere ancora larga zero (succede nei pannelli di anteprima nascosti),
     e con il solo evento di resize il fondale resterebbe grande un dito. */
  if ('ResizeObserver' in window) {
    var ro = new ResizeObserver(function (voci) {
      voci.forEach(function (v) {
        for (var i = 0; i < vive.length; i++) {
          if (vive[i].sez === v.target) misura(vive[i]);
        }
      });
    });
    vive.forEach(function (s) { ro.observe(s.sez); });
  } else {
    var attesa;
    window.addEventListener('resize', function () {
      clearTimeout(attesa);
      attesa = setTimeout(function () { vive.forEach(misura); }, 160);
    });
  }

  if (!lento) requestAnimationFrame(frame);
})();

/* ---------------------------------------------------------------------
   I PUNTINI DELLA MAPPA
   La mappa dice DOVE lavoriamo, non quanti lavori abbiamo fatto: un
   puntino per comune, nessun conteggio.
   I comuni sono quelli veri, nelle loro coordinate (fonte: elenco ISTAT
   dei comuni con latitudine e longitudine), proiettate nello stesso
   sistema del contorno dell'isola. Restano quelli entro una cinquantina
   di chilometri dalla base, cioè la zona dichiarata: Cagliari e
   provincia.
   --------------------------------------------------------------------- */
(function () {
  'use strict';
  var gruppi = document.querySelectorAll('[data-pin]');
  if (!gruppi.length) return;

  /* i comuni sardi, in coordinate del viewBox 420x800 */
  var COMUNI = [[229.6,134],[292.2,219.8],[55.5,251.3],[227.9,283.7],[169.5,228.1],[306.2,87.6],[143.2,244.1],[254.2,279.9],[253.2,178],[150.2,249.1],[159.4,256.3],[221.6,291.9],[159.9,291.9],[224.7,145.5],[154.1,259.4],[216.2,300],[276.1,242],[229,279.5],[174.4,158.9],[213,300],[259.9,135.8],[124,214.6],[146.9,138],[149.7,264.4],[172.1,188.6],[139.1,217.5],[146.7,287.4],[212.3,301.5],[135.7,220.7],[155.7,281.1],[215,311.2],[191.4,252.7],[112.8,237.2],[175.8,168.1],[310.5,46.4],[263,96.4],[255.8,131.7],[128.9,293.8],[169.4,180.3],[110.7,275],[291.4,172.2],[175.3,251],[123.8,211],[219.7,248.9],[258.7,278.3],[154.3,179.7],[333.7,135.7],[68.9,220],[237.8,198.6],[137,191],[118,211.9],[214.2,240.1],[127.3,297.7],[304.9,57.2],[241,240.7],[187,164.4],[155.4,215.2],[73.3,162.3],[133.5,297.3],[87.3,247],[117,271.1],[241.2,86.9],[259,38.1],[110.6,196.4],[171.4,158.3],[149.9,297.7],[119,177.4],[149.8,242.5],[114.9,174.7],[238.9,141.9],[148.6,259.5],[111.3,211.1],[158.4,261.9],[194.2,116.5],[211.4,194.2],[93.4,223.7],[106.1,215.8],[89.6,265.2],[172.6,134.3],[297.7,150.3],[186,122],[189.7,137.6],[361.4,111.6],[332.1,160.8],[285.6,114.8],[146.7,154.3],[182.2,141.6],[200.8,176.4],[32,131.5],[337.8,183.9],[379.6,202.5],[373.1,182.6],[261.2,433],[339.2,445.7],[232.5,423.1],[235.4,398.6],[366.9,469.8],[371.1,410.7],[258,432.3],[171,338.4],[304.5,274],[204.8,319.4],[168.1,354.1],[176,333.2],[268.5,417.1],[353.3,331.3],[191,349.5],[339.9,451.4],[274.1,383.5],[257.7,447.4],[334,467.5],[360.1,301.3],[260.5,371.5],[370.6,434.9],[342.4,453.3],[363.3,294.3],[336.9,484.4],[342.5,458.5],[195.7,325.7],[351.9,464.7],[358.7,295],[341.8,238.1],[370.9,430],[329,275.1],[163.2,338.8],[281.5,354.4],[230.8,436.7],[195.7,351.2],[292.5,320.8],[310.3,336.8],[257.3,368.3],[249.7,364.1],[318.6,271.1],[368.2,294.9],[254.7,336.6],[256.4,343.4],[298.4,357.2],[379,303.7],[241,327.1],[211.1,409.4],[301.8,295.2],[266.2,258.8],[331.9,475.4],[225.3,348],[252.5,390.8],[318.7,519.8],[383.9,225.2],[253.7,349.9],[188.5,330.9],[134.2,329.2],[378.4,243.1],[239,411.9],[331.8,407.8],[350.7,514],[242.7,390.8],[249.7,399.7],[255.5,412.9],[374.6,226.6],[369.6,443.5],[365.8,409.1],[332.5,478.6],[334.2,391.6],[307.4,478.9],[334,432.3],[362.1,483.5],[266.3,374.9],[216,639.6],[240.6,662.6],[208.5,675.3],[206.4,633],[268.4,641],[214.7,725.7],[258.3,654.6],[217.2,709.4],[253.6,650.7],[236.2,636.3],[258,639],[263,637.2],[203.4,638.6],[213.4,718.5],[257,650.5],[226.1,645.4],[248.4,650.6],[172.3,382.3],[180.7,367.5],[181.7,485.8],[171.1,491.7],[181.4,433.5],[116,490.4],[193.6,393.6],[194.6,478.9],[202.2,460],[190.4,506.1],[109.5,422.6],[184.8,508.5],[137,414.4],[199.2,385.7],[133,389.4],[183.8,385.7],[190.5,410.2],[103.9,442.1],[112.7,362],[169.2,422.1],[175.5,383],[175.8,512.8],[184.3,494.5],[174.8,519.2],[128.7,498],[162.5,512.6],[128.9,405.3],[181.1,462.7],[161.4,518],[159.7,498.8],[114.3,405.8],[201.3,401.5],[175,379.2],[203.8,389],[106,428.6],[208.4,474.8],[151.9,435.6],[118.1,450.2],[130.9,458.8],[168.1,484.5],[158,393.8],[166.3,505.4],[105.6,421.6],[190.1,449.6],[200.3,436.8],[131.2,517.6],[122.2,458],[191.2,464.3],[132.4,378.2],[120,416.6],[116.3,353.6],[195.9,366.6],[122.9,395.6],[200.3,475.5],[109.8,355],[128.7,436.3],[157.8,445.1],[174.3,507.1],[141.6,442],[192.4,496.9],[161.4,509.1],[136.9,435],[198.7,387.6],[186.8,386.4],[128.7,506.8],[131.6,419.6],[101,343.1],[192.2,406.6],[144,513.6],[179.8,479.7],[156.2,423.7],[162.2,455.6],[172.3,483.4],[119.1,423.7],[145.5,433.5],[158.3,443.2],[174.8,498.8],[185.6,380.7],[96.1,328.2],[106.4,338.1],[226.9,465.6],[102.6,339],[103.1,336],[96.5,305.2],[115,340],[108.4,334.2],[107.9,337.5],[120.2,565.8],[304.2,568.1],[299.4,559.8],[238.7,582.2],[215.2,511.6],[73.2,606.5],[299.9,622.1],[64.8,695.9],[102.8,677.6],[50.7,684],[338.1,644],[176,531.3],[195.4,625.6],[256,613.1],[182.4,745.7],[132.8,629.9],[244.3,595.6],[298.3,535.8],[243.7,513.3],[281.8,488.2],[96.1,594.4],[201.3,555.3],[216.9,483.9],[196.4,499.8],[238.5,513.2],[239.6,539.2],[219.9,502.8],[128.7,707],[282.1,550.6],[89.8,647.2],[134.7,576.8],[231.9,554.1],[225.3,555.8],[126.6,562.8],[104,633.4],[239.7,500.2],[210.7,519.7],[191.6,528.8],[245.2,526.3],[127.4,713.1],[224.9,609.5],[350.1,598.9],[136,635.7],[138.4,677.3],[223.7,489.4],[233,483.8],[217.7,592.7],[268.5,509.7],[153.2,681.1],[274,514.9],[234.7,563.5],[148.3,545.2],[196.3,525.3],[122.5,679.2],[230,579.5],[135.7,705.7],[68,666.1],[278.9,477.8],[192.7,580.3],[222.5,581],[261.3,563.2],[165.5,559.7],[101.8,695],[285.6,576.1],[216.1,618.9],[342.3,592.8],[190.7,555.7],[147.6,700.1],[255.4,581.1],[130.1,727.4],[86,708.4],[172.2,539.7],[210.6,555],[239.1,553.6],[245.7,564.5],[251.6,613.7],[196,598],[208.6,577],[249.4,512.7],[200.3,505.7],[291,469.9],[270.8,461.2],[188.5,522.3],[169.5,636.5],[284.3,569.3],[258.2,544.1],[257.3,621.6],[245.7,555.6],[160.9,738.8],[114.9,697.2],[205.1,508.5],[195.2,512.1],[232.9,607.8],[193.4,515.7],[166.5,617],[151.3,588.3],[205.6,538.4],[129.7,644],[265.3,488.4],[183.5,533.8],[214.9,530],[137.2,694.6],[350.2,593.2],[306.3,576.7],[337.3,685.1],[200.5,611.5],[197.3,632.5]];

  /* Cagliari e provincia: restano i comuni entro una cinquantina di
     chilometri dalla base, non tutta l'isola. */
  var CAGLIARI = [240.6, 662.6], RAGGIO = 150;
  var ZONA = COMUNI.filter(function (c) {
    var dx = c[0] - CAGLIARI[0], dy = c[1] - CAGLIARI[1];
    return Math.sqrt(dx * dx + dy * dy) <= RAGGIO;
  });

  var RAME = '#a8491a', BLU = '#1f5c8b';
  var ns = 'http://www.w3.org/2000/svg';

  /* Il colore segue la pagina (data-pin-filtro): rame per i privati,
     blu per aziende ed enti. */
  Array.prototype.forEach.call(gruppi, function (g) {
    var colore = g.getAttribute('data-pin-filtro') === 'aziende' ? BLU : RAME;
    var frammento = document.createDocumentFragment();

    for (var n = 0; n < ZONA.length; n++) {
      var p = document.createElementNS(ns, 'circle');
      p.setAttribute('cx', ZONA[n][0].toFixed(1));
      p.setAttribute('cy', ZONA[n][1].toFixed(1));
      p.setAttribute('fill', colore);
      p.style.setProperty('--i', n);
      frammento.appendChild(p);
    }
    g.appendChild(frammento);
  });
})();


/* ---------------------------------------------------------------------
   LE OBIEZIONI CHE ARRIVANO COME MESSAGGI
   Quando la conversazione entra in vista, le bolle compaiono una alla
   volta. Prima di ogni risposta della ditta spuntano i tre puntini, il
   tempo di leggerli: senza, i messaggi sembrerebbero apparire tutti
   insieme e l'effetto chat si perderebbe.
   Lo spazio delle bolle è riservato dal CSS fin dall'inizio (restano
   invisibili ma occupano il posto), quindi i puntini si posizionano
   esattamente dove uscirà il messaggio e la pagina non si allunga mai
   sotto a chi sta scorrendo.
   --------------------------------------------------------------------- */
(function () {
  'use strict';
  var chat = document.querySelectorAll('[data-chat]');
  if (!chat.length) return;

  var fermi = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  Array.prototype.forEach.call(chat, function (c) {
    var corpo = c.querySelector('.chat__corpo');
    if (!corpo) return;
    var bolle = Array.prototype.slice.call(corpo.querySelectorAll('.bolla'));
    if (!bolle.length) return;

    if (fermi || !('IntersectionObserver' in window)) {
      bolle.forEach(function (b) { b.classList.add('ok'); });
      return;
    }

    var puntini = document.createElement('span');
    puntini.className = 'chat__scrive';
    puntini.setAttribute('aria-hidden', 'true');
    puntini.innerHTML = '<i></i><i></i><i></i>';

    var i = 0, avviata = false;

    var mostra = function () {
      if (puntini.parentNode) puntini.parentNode.removeChild(puntini);
      if (i >= bolle.length) return;
      bolle[i].classList.add('ok');
      i++;
      setTimeout(prossima, 520);
    };

    var prossima = function () {
      if (i >= bolle.length) return;
      var b = bolle[i];
      /* i puntini valgono solo per chi risponde: il proprio messaggio
         lo si è appena scritto, non lo si aspetta */
      if (b.classList.contains('bolla--loro')) {
        puntini.style.top = b.offsetTop + 'px';
        puntini.style.left = b.offsetLeft + 'px';
        corpo.appendChild(puntini);
        setTimeout(mostra, 680);
      } else {
        mostra();
      }
    };

    var vedetta = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (!v.isIntersecting || avviata) return;
        avviata = true;
        vedetta.disconnect();
        setTimeout(prossima, 260);
      });
    }, { threshold: .2 });
    vedetta.observe(c);
  });
})();
