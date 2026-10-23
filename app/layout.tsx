import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/**
 * I due caratteri del sito, caricati da Next invece che con un <link> a
 * Google: stessi pesi di prima, compreso il corsivo che serve alle
 * parole in arancione dei titoli.
 */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roberto Galici Impianti Elettrici — impianti, sicurezza e domotica | Cagliari",
  description:
    "Impianti elettrici, videosorveglianza, allarme e domotica a Cagliari e provincia. Roberto e Luca Galici, padre e figlio dal 1992: in cantiere ci vanno loro.",
  icons: { icon: "/assets/img/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${archivo.variable} ${publicSans.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Va eseguito prima che il CSS dipinga: tutte le regole delle
          animazioni stanno sotto `html.js`, e senza questa classe il
          contenuto resterebbe visibile e fermo invece di entrare.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        {children}
        {/*
          Il nostro JavaScript, lo stesso file del sito statico. Gira dopo
          che la pagina è interattiva. I collegamenti fra le pagine sono
          <a> normali, quindi ogni pagina si carica da capo e lo script
          riparte: non serve rifare gli effetti a ogni cambio di rotta.
        */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
