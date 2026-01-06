"use client";
import React from 'react';
import Image from 'next/image';
import banca from '../img/loghi/banca-di-cagliari.png';
import acentro from '../img/loghi/Acentro.jpg';
import universita from '../img/loghi/universita.png';
import carabinieri from '../img/loghi/carabinieri.png';
import acentrass from '../img/loghi/acentrass.png';
import guardiafinanza from '../img/loghi/guardia-finanza.png';
import canottieri from '../img/loghi/canottieri.png';
import leganav from '../img/loghi/lega navale.jpg';


export function ClientsCarousel() {
  const logos = [
    { src: acentro, alt: 'Acentro', href: 'https://gruppoacentro.it/' },
    { src: acentrass, alt: 'Acentrass', href: 'https://www.acentrass.it/' },
    { src: banca, alt: 'Banca di Cagliari', href: 'https://www.bancadicagliari.it/' },
    { src: canottieri, alt: 'Canottieri Cagliari', href: 'https://www.canottierichnusa.it/' },
    { src: carabinieri, alt: 'Carabinieri', href: 'https://www.carabinieri.it/' },
    { src: guardiafinanza, alt: 'Guardia di Finanza', href: 'https://www.gdf.gov.it/' },
    { src: leganav, alt: 'Lega Navale Italiana', href: 'https://www.leganavale.it/cagliari' },
    { src: universita, alt: 'Università', href: 'https://www.unica.it/it' }
  ];

  return (
    <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Titolo + descrizione */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
        Affidabilità riconosciuta
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Partner e committenti per i nostri maggiori lavori
      </p>
    </div>

    {/* Loghi */}
    <div className="flex flex-wrap items-center justify-center gap-8">
      {logos.map((logo, idx) => (
        <a
          key={idx}
          href={logo.href}
          target="_blank"
          rel="noreferrer"
          className="flex-shrink-0 w-40 h-20 flex items-center justify-center opacity-90 hover:opacity-100 transition"
        >
          <div className="relative w-full h-full">
            <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
          </div>
        </a>
      ))}
    </div>

  </div>
</section>

  );
}
