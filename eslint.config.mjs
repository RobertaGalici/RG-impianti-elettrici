import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Lo script del sito è un file statico servito così com'è, non
    // sorgente del progetto: non va passato al linter.
    "public/**",
  ]),
  {
    rules: {
      // Le immagini sono dimensionate dal CSS del sito (object-fit,
      // aspect-ratio, dimensioni fluide). next/image le avvolgerebbe in
      // un contenitore suo e andrebbe riscritto il foglio di stile.
      "@next/next/no-img-element": "off",
      // I collegamenti fra le pagine sono <a> e non <Link> di proposito:
      // ogni pagina deve ricaricarsi da capo, così lo script del sito
      // (mappa, carosello, chat, sfondi) riparte. Con la navigazione
      // lato client gli effetti andrebbero reinizializzati a ogni rotta.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]);

export default eslintConfig;
