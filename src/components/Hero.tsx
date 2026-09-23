import React from 'react';
import { MessageCircle, Sparkles, Star, ShieldCheck, MapPin, ChevronRight } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from '../data/links';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-[#FAF8F5]">
      {/* Subtle radial champagne glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none bg-champagne-radial" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Neuromarketing Pitch & CTA */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Trust Kicker: Unboxed clean metadata (zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6D3A]">
              <span>Biomedicina Estética de Alta Precisão</span>
              <span aria-hidden="true">·</span>
              <span>São Paulo (Tatuapé)</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-amber-600">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>5.0 Avaliações Verificadas</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 font-normal leading-[1.15] tracking-tight">
              Rejuvenesça com elegância, sem abrir mão da sua <span className="italic font-medium text-[#A87932]">expressão natural</span>.
            </h1>

            {/* Subtitle addressing core emotional pain & desired state */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
              Esqueça rostos transformados e exageros artificiais. Na Clínica Dra. Paula Fischer, cada protocolo é desenhado para restaurar os vetores de sustentação, estimular seu próprio colágeno e devolver o viço que o cansaço e o tempo esconderam.
            </p>

            {/* Action Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-[#1A1E24] hover:bg-[#A87932] transition-all duration-300 rounded-lg shadow-sm hover:shadow-lg group tracking-wide"
              >
                <MessageCircle className="w-5 h-5 text-[#E8D8B8] group-hover:scale-110 transition-transform" />
                <span>Agendar Avaliação no WhatsApp</span>
              </a>

              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
              >
                <span>Descubra seu Protocolo Ideal</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Claim-to-Proof Adjacency: 3 concrete proofs */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tabular-nums">
                  +40
                </div>
                <div className="text-xs text-slate-500 mt-1 font-sans">
                  Protocolos faciais e injetáveis avançados
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tabular-nums">
                  5.0 ★
                </div>
                <div className="text-xs text-slate-500 mt-1 font-sans">
                  Avaliações máximas no Google Maps
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tabular-nums">
                  100%
                </div>
                <div className="text-xs text-slate-500 mt-1 font-sans">
                  Foco em harmonia invisível e anatomia real
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dominant Portrait Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#C5A059]/20 via-transparent to-[#1A1E24]/10 blur-sm -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5DFD5] bg-white aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="/src/assets/images/hero_dra_paula_clinic_1790122052857.jpg"
                  alt="Dra. Paula Fischer em seu consultório de estética avançada"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Confidence Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-100 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-serif font-semibold text-slate-900">
                        Dra. Paula Fischer
                      </div>
                      <div className="text-xs text-slate-500">
                        Biomédica Esteta · Membro Ativo & Docente
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Atendimento Seguro</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
