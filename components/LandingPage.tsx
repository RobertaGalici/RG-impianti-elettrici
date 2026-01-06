"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
//import { Portfolio } from "@/components/Portfolio";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { ContactSection } from "@/components/ContactSection";
import { Storia } from "@/components/Storia";
import { Footer } from "@/components/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        {/* <Portfolio /> */}
        <ClientsCarousel />
        <ContactSection />
        <Storia />
      </main>
      <Footer />
    </div>
  );
}
