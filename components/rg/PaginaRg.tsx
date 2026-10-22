"use client";

import { useEffect } from "react";

import type { Percorso } from "./SiteHeader";

/**
 * Due cose che il nostro sito si aspetta dal <body> e che in Next non
 * possono stare nel markup della pagina, perché il body lo scrive il
 * layout:
 *   data-path       dice al CSS quale dei due percorsi colorare
 *   data-hero-scuro dice alla testata di partire in bianco sul fondo scuro
 * Le mette questo componente appena la pagina è montata, e le toglie
 * quando si esce: così passando da una pagina all'altra non restano
 * attaccate quelle di prima.
 */
export function PaginaRg({
  percorso,
  heroScuro = false,
}: {
  percorso: Percorso;
  heroScuro?: boolean;
}) {
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-path", percorso);
    if (heroScuro) body.setAttribute("data-hero-scuro", "");
    return () => {
      body.removeAttribute("data-path");
      body.removeAttribute("data-hero-scuro");
    };
  }, [percorso, heroScuro]);

  return null;
}
