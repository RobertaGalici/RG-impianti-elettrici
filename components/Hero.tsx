"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import homeImg from '../img/home1.png';
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gray-900">

      {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
  <div className="relative h-full w-full">
    <Image
      src={homeImg}
      alt="Cavi elettrici e cablaggio"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-gray-900/70" />
  </div>
</div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* logo removed from Hero; kept only in Navbar */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Impianti elettrici <br className="hidden sm:block" />
            <span className="text-blue-400">industriali e civili</span>
          </h1>
        </motion.div>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut'
      }} className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
          Installazione, manutenzione e pronto intervento. Professionalità e
          sicurezza al tuo servizio.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut'
      }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => scrollToSection('#contatti')} className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors flex items-center justify-center group">
            Richiedi un preventivo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          {/* <button onClick={() => scrollToSection('#lavori')} className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-md transition-colors">
            Vedi i lavori
          </button> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2,
      duration: 1
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button onClick={() => scrollToSection('#servizi')} className="text-white/50 hover:text-white transition-colors animate-bounce" aria-label="Scorri in basso">
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>;
}