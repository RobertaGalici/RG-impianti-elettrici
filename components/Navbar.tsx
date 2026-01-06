"use client";
import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logo from '../img/logo2.png';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Servizi',
    href: '#servizi'
  // }, {
  //   name: 'Lavori',
  //   href: '#lavori'
  }, {
    name: 'Contatti',
    href: '#contatti'
  }, {
    name: 'Storia',
    href: '#storia'
  }];
  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-md py-4`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" onClick={e => {
            e.preventDefault();
            scrollToSection('#home');
          }} className={`flex items-center text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              <Image src={logo} alt="Roberto Galici Impianti Elettrici" width={48} height={48} className="mr-3 object-contain" />
              <span className="flex items-baseline">
                <span style={{ color: '#09204f' }}>Roberto Galici</span>
                <span className="ml-2" style={{ color: '#a60000' }}>Impianti Elettrici</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className={`text-sm font-medium transition-colors hover:text-blue-500 text-gray-700`}>
                {link.name}
              </a>)}
            <a href="#contatti" onClick={e => {
              e.preventDefault();
              scrollToSection('#contatti');
            }} className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              Richiedi Preventivo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-md focus:outline-none text-gray-900`} aria-label="Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className="block px-3 py-4 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md border-b border-gray-100 last:border-0">
                  {link.name}
                </a>)}
              <div className="pt-4 px-3">
                <a href="#contatti" onClick={e => {
              e.preventDefault();
              scrollToSection('#contatti');
            }} className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Richiedi Preventivo
                </a>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}