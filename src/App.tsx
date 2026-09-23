import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EcosystemNetwork } from './components/EcosystemNetwork';
import { NaturalHarmonisation } from './components/NaturalHarmonisation';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { ProtocolsGrid } from './components/ProtocolsGrid';
import { ClinicAmbience } from './components/ClinicAmbience';
import { SocialProofFAQ } from './components/SocialProofFAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex flex-col antialiased selection:bg-[#E8D8B8] selection:text-[#382b17]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EcosystemNetwork />
        <NaturalHarmonisation />
        <InteractiveQuiz />
        <ProtocolsGrid />
        <ClinicAmbience />
        <SocialProofFAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
