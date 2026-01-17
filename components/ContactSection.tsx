"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setIsSuccess(false);
  setErrorMsg(null);
  try {
    const res = await fetch("https://www.robertogaliciimpiantielettrici.it/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      message: formState.message,
    }),
});

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data?.error || "Invio fallito");
    }

    if (data?.ok !== true) {
      throw new Error(data?.error || "Invio fallito");
    }

    setIsSuccess(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
    });

    setTimeout(() => setIsSuccess(false), 5000);
  } catch (err) {
    setErrorMsg(err instanceof Error ? err.message : "Errore durante l'invio. Puoi scriverci via WhatsApp o email.");
  } finally {
    setIsSubmitting(false);
  }
};

  return <section id="contatti" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Contattaci per un preventivo
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Siamo a tua disposizione per sopralluoghi gratuiti e consulenze
              tecniche. Compila il modulo o contattaci direttamente.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-blue-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Telefono</h3>
                  <p className="mt-1 text-gray-400">+39 338 9723178</p>
                  <p className="mt-1 text-gray-400">+39 366 4175399</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-blue-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-400">
                    galicirob@tiscali.it
                  </p>
                  <p className="mt-1 text-gray-400">
                    lucagalici66@icloud.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">
                    Zona Servita
                  </h3>
                  <p className="mt-1 text-gray-400">Cagliari e provincia</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href="https://wa.me/393389723178?text=Buongiorno!%20Vorrei%20un%20preventivo%20per..."
target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E] transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Scrivici su WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl">
            {isSuccess ? <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Messaggio Inviato!
                </h3>
                <p className="text-gray-600">
                  Grazie per averci contattato. Ti risponderemo il prima
                  possibile.
                </p>
              </motion.div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome e Cognome *
                  </label>
                  <input type="text" id="name" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border" value={formState.name} onChange={e => setFormState({
                ...formState,
                name: e.target.value
              })} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input type="email" id="email" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border" value={formState.email} onChange={e => setFormState({
                ...formState,
                email: e.target.value
              })} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefono
                  </label>
                  <input type="tel" id="phone" className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border" value={formState.phone} onChange={e => setFormState({
                ...formState,
                phone: e.target.value
              })} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Messaggio *
                  </label>
                  <textarea id="message" rows={4} required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border" value={formState.message} onChange={e => setFormState({
                ...formState,
                message: e.target.value
              })} />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="privacy" name="privacy" type="checkbox" required className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" checked={formState.privacy} onChange={e => setFormState({
                  ...formState,
                  privacy: e.target.checked
                })} />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-gray-700">
                      Accetto la privacy policy
                    </label>
                    <p className="text-gray-500">
                      I tuoi dati saranno trattati secondo la normativa privacy
                      vigente.
                    </p>
                  </div>
                </div>
                {errorMsg && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
                  {errorMsg}
                </p>
                )}
                <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors">
                  {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
                </button>
              </form>}
          </div>
        </div>
      </div>
    </section>;
}