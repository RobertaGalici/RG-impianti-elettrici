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
    { src: banca, alt: 'Banca di Cagliari', href: 'https://www.bancadicagliari.it/' },
    { src: acentro, alt: 'Acentro', href: 'https://gruppoacentro.it/' },
    { src: universita, alt: 'Università', href: 'https://www.unica.it/it' },
    { src: carabinieri, alt: 'Carabinieri', href: 'https://www.carabinieri.it/' },
    { src: acentrass, alt: 'Acentrass', href: 'https://www.acentrass.it/' },
    { src: guardiafinanza, alt: 'Guardia di Finanza', href: 'https://www.gdf.gov.it/' },
    { src: canottieri, alt: 'Canottieri Cagliari', href: 'hhttps://www.canottierichnusa.it/' },
    { src: leganav, alt: 'Lega Navale Italiana', href: 'https://www.leganavale.it/cagliari' }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">Affidabilità riconosciuta</h3>
        <p className="text-center text-sm text-gray-500 mb-6">Partner e committenti per i nostri maggiori lavori</p>

        <div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo, idx) => (
              <a key={idx} href={logo.href} target="_blank" rel="noreferrer" className="flex-shrink-0 w-40 h-20 flex items-center justify-center opacity-90 hover:opacity-100 transition">
                <div className="relative w-full h-full">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
