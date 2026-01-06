"use client";
import React from 'react';
export function Footer() {
  return <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Roberto Galici Impianti Elettrici</h3>
            <p className="text-sm">
              Soluzioni elettriche professionali per privati e aziende. Qualità
              e sicurezza al primo posto.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contatti</h3>
            <ul className="space-y-2 text-sm">
              <li>Tel: +39 338 97 23178</li>
              <li>Tel: +39 366 417 5399</li>
              <li>Email: galicirob@tiscali.it</li>
              <li>Email: lucagalici66@icloud.com</li>
              <li>Cagliari e provincia</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Dati Aziendali
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Roberto Galici Impianti Elettrici</li>
              <li>P.IVA 01817270927</li>
              <li>Luca Galici Impianti Elettrici</li>
              <li>P.IVA 04160440923</li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Roberto Galici Impianti Elettrici.
            Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>;
}