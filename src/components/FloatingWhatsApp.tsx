import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { FORMATTED_PHONE, WHATSAPP_DEFAULT_URL } from '../data/links';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      
      {/* Small popover prompt on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs px-3 py-2 rounded-xl shadow-lg border border-slate-200 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-medium">Dúvidas? Fale direto no WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)} 
            className="text-slate-400 hover:text-slate-700 ml-1 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={WHATSAPP_DEFAULT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
        aria-label="Atendimento no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366] group-hover:rotate-6 transition-transform" />
        <span className="font-semibold text-xs tracking-wide hidden sm:inline-block">
          Agendar no WhatsApp
        </span>
      </a>

    </div>
  );
};
