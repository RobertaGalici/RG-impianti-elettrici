"use client";
import React, { Children } from 'react';
import { Home, Factory, Wrench, FileCheck, Phone, BoxIcon, Camera, ShieldCheck, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
const services = [
  {
  title: 'Impianti industriali',
  description: 'Soluzioni per banche, università, enti pubblici, uffici e attività commerciali.',
  icon: Factory
},
  {
  title: 'Impianti civili',
  description: 'Progettazione e installazione per abitazioni e condomini.',
  icon: Home
},  {
  title: 'Quadri elettrici',
  description: 'Realizzazione e manutenzione quadri di distribuzione BT-MT e quadri di rifasamento.',
  icon: BoxIcon
}, 
{
  title: 'Impianti di video sorveglianza',
  description: 'Progettazione, installazione e monitoraggio remoto di sistemi di videosorveglianza.',
  icon: Camera
}, 
{
  title: 'Impianti antintrusione',
  description: 'Sistemi antintrusione su misura per interni ed esterni e supervisione, il tutto gestito tramite app mobile.',
  icon: ShieldCheck
}, 

{
  title: 'Domotica',
  description: 'Integrazione e automazione intelligente per scenari luci, clima e varie, con controllo remoto e gestione semplificata tramite app.',
  icon: Smartphone
}, 
{
  title: 'Certificazioni',
  description: 'Rilascio certificazioni di conformità e pratiche.',
  icon: FileCheck
}, {
  title: 'Pronto intervento',
  description: 'Servizio di emergenza per guasti urgenti.',
  icon: Phone
},
{
  title: 'Manutenzione',
  description: 'Controlli periodici e manutenzione programmata su tutti i nostri impianti.',
  icon: Wrench
}
];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
export function Services() {
  return <section id="servizi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Offriamo soluzioni complete per ogni esigenza elettrica, dal piccolo
            intervento domestico ai grandi impianti industriali.
          </p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true,
        margin: '-100px'
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={service.title} variants={item} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}