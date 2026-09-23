import React, { useState } from 'react';
import { Check, X, ShieldAlert, Sparkles, HeartHandshake, Eye, Award } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from '../data/links';

export const NaturalHarmonisation: React.FC = () => {
  const [activeComparison, setActiveComparison] = useState<'convencional' | 'dra-paula'>('dra-paula');

  return (
    <section id="metodo" className="py-20 bg-white border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#8C6D3A]">
            Neuromarketing da Autoestima & Segurança
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            Você tem medo de fazer procedimentos e <span className="italic font-medium text-[#A87932]">ficar artificial</span>?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Esse é o receio número 1 de mulheres e homens sofisticados. Entenda por que o método biomédico da Dra. Paula Fischer entrega exatamente o contrário: rejuvenescimento elegante onde as pessoas notam que você está radiante, mas ninguém descobre o que você fez.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Visual Proof */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5DFD5]">
              <img
                src="/src/assets/images/natural_beauty_result_1790122073444.jpg"
                alt="Resultado de rejuvenescimento natural e harmonização sutil"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8D8B8] mb-1">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Filosofia da Clínica</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                  "Menos volume, mais sustentação e estímulo celular."
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 font-sans max-w-lg">
                  A beleza atemporal não vem de inflar compartimentos com excesso de produto, mas de devolver a estrutura óssea e o colágeno que o tempo consumiu.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Comparative Neuromarketing Matrix */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Toggle Switch */}
            <div className="flex p-1 bg-[#FAF8F5] border border-slate-200 rounded-lg max-w-sm">
              <button
                onClick={() => setActiveComparison('dra-paula')}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                  activeComparison === 'dra-paula'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Método Dra. Paula Fischer
              </button>
              <button
                onClick={() => setActiveComparison('convencional')}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                  activeComparison === 'convencional'
                    ? 'bg-white text-rose-700 shadow-xs border border-slate-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Estética Genérica Comum
              </button>
            </div>

            {/* Detailed comparison card */}
            {activeComparison === 'dra-paula' ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#C5A059]/40 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D3A] uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Abordagem de Excelência Clínica</span>
                </div>
                <h3 className="font-serif text-2xl text-slate-900 font-semibold">
                  A Anatomia e a Identidade em Primeiro Lugar
                </h3>
                
                <ul className="space-y-4 text-sm text-slate-700 font-sans">
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Anamnese Tridimensional de 1h30:</strong>
                      Estudo minucioso dos seus ângulos faciais, expressões dinâmicas e histórico clínico antes de encostar qualquer cânula.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Estímulo do Próprio Organismo:</strong>
                      Priorização de bioestimuladores de colágeno (Radiesse, Sculptra) e microagulhamento de alta precisão.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Micro-doses Estratégicas:</strong>
                      Sem o aspecto "rosto congelado" ou lábios desproporcionais. O objetivo é descanso e harmonia.
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={WHATSAPP_DEFAULT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#8C6D3A] hover:text-[#5e4925] uppercase tracking-wider"
                  >
                    <span>Quero agendar essa avaliação minuciosa →</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-8 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>O Perigo da Padronização Excessiva</span>
                </div>
                <h3 className="font-serif text-2xl text-slate-900 font-semibold">
                  O Modelo "Esteira de Procedimentos"
                </h3>
                
                <ul className="space-y-4 text-sm text-slate-700 font-sans">
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-rose-100 text-rose-800 shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Consultas Rápidas de 15 Minutos:</strong>
                      Aplicação padronizada sem analisar a dinâmica muscular individual ou contraindicações.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-rose-100 text-rose-800 shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Excesso de Ácido Hialurônico:</strong>
                      Efeito "pillow face" (rosto estufado e pesado), perda dos contornos originais e migração de produto.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-rose-100 text-rose-800 shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Rostos Iguais no Feed:</strong>
                      Sensação incômoda de ter perdido sua própria identidade visual e expressividade.
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {/* Neuromarketing Loss Aversion Note */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <Eye className="w-4 h-4 text-[#A87932] shrink-0 mt-0.5" />
              <span>
                <strong>Você sabia?</strong> A partir dos 25 anos, a produção natural de colágeno cai cerca de 1% a cada ano. Preservar as estruturas profundas agora evita intervenções agressivas no futuro.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
