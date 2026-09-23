import React, { useState } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from '../data/links';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex flex-col justify-center"
          aria-label="Dra. Paula Fischer - Início"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-wide text-slate-900 font-semibold group-hover:text-[#A87932] transition-colors">
            Dra. Paula Fischer
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-[#8C6D3A]">
            Biomedicina Estética Avançada
          </span>
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#rede-oficial" className="hover:text-[#A87932] transition-colors">
            Rede Oficial
          </a>
          <a href="#protocolos" className="hover:text-[#A87932] transition-colors">
            Protocolos
          </a>
          <a href="#diagnostico" className="hover:text-[#A87932] transition-colors">
            Diagnóstico Express
          </a>
          <a href="#metodo" className="hover:text-[#A87932] transition-colors">
            Método Natural
          </a>
          <a href="#clinica" className="hover:text-[#A87932] transition-colors">
            A Clínica
          </a>
          <a href="#duvidas" className="hover:text-[#A87932] transition-colors">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1A1E24] hover:bg-[#A87932] transition-all duration-300 rounded-lg shadow-sm hover:shadow-md tracking-wide whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#E8D8B8]" />
            <span>Agendar Consulta</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-900 bg-[#FAF1E3] rounded-lg hover:bg-[#E8D8B8] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-[#8C6D3A]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E5DFD5] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-700">
            <a 
              href="#rede-oficial" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A87932]"
            >
              Rede Oficial & Links
            </a>
            <a 
              href="#protocolos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A87932]"
            >
              Protocolos & Tratamentos
            </a>
            <a 
              href="#diagnostico" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A87932]"
            >
              Diagnóstico Express Interativo
            </a>
            <a 
              href="#metodo" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A87932]"
            >
              Método Naturalidade Consciente
            </a>
            <a 
              href="#clinica" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A87932]"
            >
              A Clínica em São Paulo
            </a>
            <a 
              href="#duvidas" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A87932]"
            >
              Perguntas Frequentes
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1A1E24] hover:bg-[#A87932] rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#E8D8B8]" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
