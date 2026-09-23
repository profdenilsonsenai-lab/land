import React from 'react';
import { MapPin, Star, ShieldCheck, Clock, Navigation, ExternalLink, MessageCircle } from 'lucide-react';
import { NETWORK_LINKS, WHATSAPP_DEFAULT_URL } from '../data/links';

export const ClinicAmbience: React.FC = () => {
  const mapsLink = NETWORK_LINKS.find((l) => l.id === 'google-maps')?.url || '#';

  return (
    <section id="clinica" className="py-20 bg-white border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Asset of the Clinic Interior */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5DFD5]">
              <img
                src="/src/assets/images/clinic_interior_luxury_1790122063313.jpg"
                alt="Consultório de atendimento privativo da Dra. Paula Fischer"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center"
                referrerPolicy="no-referrer"
              />

              {/* Location Badge over photo */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                <MapPin className="w-3.5 h-3.5 text-rose-600" />
                <span>São Paulo · Região do Tatuapé</span>
              </div>

              {/* Rating Card over photo */}
              <div className="absolute bottom-4 right-4 bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-lg text-white flex items-center gap-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white">5.0</span>
                  <span className="text-slate-300 ml-1 font-normal">no Google Maps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Clinic Credentials & Map CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#8C6D3A]">
                Ambiente de Alto Padrão
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal">
                Estrutura pensada para o seu <span className="italic font-medium text-[#A87932]">conforto, sigilo e segurança</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Esqueça salas impessoais e barulhentas. O consultório da Dra. Paula Fischer foi planejado sob a ótica da neuroarquitetura: iluminação difusa acolhedora, cromatismo suave que reduz o estresse pré-procedimento e equipamentos com certificação sanitária rigorosa.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Máxima Biossegurança</span>
                </div>
                <p className="text-slate-500 text-xs">
                  Materiais 100% descartáveis, insumos originais rastreados e esterilização de grau hospitalar.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                  <Clock className="w-4 h-4 text-[#A87932]" />
                  <span>Tempo Dedicado Sem Pressa</span>
                </div>
                <p className="text-slate-500 text-xs">
                  Intervalos amplos entre consultas para garantir atenção exclusiva e total privacidade.
                </p>
              </div>
            </div>

            {/* Direct Google Maps & Booking Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-800 bg-[#FAF8F5] hover:bg-[#FAF1E3] border border-slate-300 hover:border-[#C5A059] rounded-lg transition-colors"
              >
                <Navigation className="w-4 h-4 text-rose-600" />
                <span>Traçar Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>

              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-[#1A1E24] hover:bg-[#A87932] rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#E8D8B8]" />
                <span>Agendar Horário Presencial</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
