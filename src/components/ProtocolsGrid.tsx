import React from 'react';
import { TREATMENTS } from '../data/treatments';
import { Sparkles, MessageCircle, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { OFFICIAL_PHONE } from '../data/links';

export const ProtocolsGrid: React.FC = () => {
  const getProtocolWhatsAppUrl = (protocolName: string) => {
    const text = encodeURIComponent(
      `Olá, Dra. Paula Fischer! Gostaria de entender mais sobre o protocolo "${protocolName}" e verificar disponibilidade para consulta de avaliação.`
    );
    return `https://wa.me/55${OFFICIAL_PHONE}?text=${text}`;
  };

  return (
    <section id="protocolos" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#8C6D3A]">
            Protocolos de Alta Performance Clínica
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            Tratamentos que restauram a vitalidade <span className="italic font-medium text-[#A87932]">de dentro para fora</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Cada protocolo une substâncias aprovadas pela Anvisa, rigor científico biomédico e a dosimetria exata para realçar seus traços característicos.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Harmonização Facial Sutil (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DFD5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-[#C5A059] tabular-nums">01</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Restauração Estrutural
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-semibold">
                Harmonização Facial Sutil & Proporção Áurea
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Restauração precisa de volume nas maçãs do rosto, arco zigomático e ângulo mandibular. Cria um efeito lifting natural e sustentação duradoura sem aumentar o tamanho do rosto.
              </p>
              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <span className="font-semibold text-slate-900 block">Princípio de Neuromarketing:</span>
                O cérebro identifica proporções harmoniosas como sinal de saúde e jovialidade plena, sem detectar intervenções evidentes.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Duração média: 60 min · Recuperação imediata
              </span>
              <a
                href={getProtocolWhatsAppUrl('Harmonização Facial Sutil')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1A1E24] hover:bg-[#A87932] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Consultar Disponibilidade</span>
                <MessageCircle className="w-3.5 h-3.5 text-[#E8D8B8]" />
              </a>
            </div>
          </div>

          {/* Bento Item 2: Bioestimuladores de Colágeno (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DFD5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-[#C5A059] tabular-nums">02</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Banco de Colágeno
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-semibold">
                Bioestimuladores de Colágeno
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Aplicação de Radiesse, Sculptra ou Elleva para induzir a síntese natural de colágeno novo tipo I e III. Trata flacidez facial, pescoço e colo com durabilidade de até 24 meses.
              </p>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Combate à perda de 1% de colágeno ao ano</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Efeito gradual e cumulativo
              </span>
              <a
                href={getProtocolWhatsAppUrl('Bioestimuladores de Colágeno')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C6D3A] hover:text-[#5e4925]"
              >
                <span>Saiba mais</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Item 3: Toxina Botulínica de Precisão (Span 4) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DFD5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-[#C5A059] tabular-nums">03</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Prevenção & Serenidade
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-semibold">
                Toxina Botulínica Estratégica
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Modulação da musculatura hipercinética na testa, glabela e olhos. Alivia a expressão de cansaço ou preocupação sem paralisar o rosto.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Retorno para retoque em 15 dias
              </span>
              <a
                href={getProtocolWhatsAppUrl('Toxina Botulínica')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#8C6D3A] hover:text-[#5e4925]"
              >
                Agendar sessão →
              </a>
            </div>
          </div>

          {/* Bento Item 4: Fios de PDO & Sustentação (Span 4) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DFD5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-[#C5A059] tabular-nums">04</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Tração Vetorial
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-semibold">
                Fios de Sustentação & PDO
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Efeito lifting mecânico instantâneo associado à indução de colágeno ao longo do trajeto do fio. Ideal para contorno e elevação do terço médio.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                100% reabsorvível e seguro
              </span>
              <a
                href={getProtocolWhatsAppUrl('Fios de PDO')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#8C6D3A] hover:text-[#5e4925]"
              >
                Detalhes do protocolo →
              </a>
            </div>
          </div>

          {/* Bento Item 5: Sérum Roberta & Home Care (Span 4) with image */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#FAF8F5] to-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-[#C5A059] tabular-nums">05</span>
                <span className="text-xs font-semibold text-[#8C6D3A] uppercase tracking-wider">
                  Dermocosmético Oficial
                </span>
              </div>
              
              <div className="rounded-xl overflow-hidden h-32 border border-slate-200">
                <img
                  src="/src/assets/images/serum_product_showcase_1790122082835.jpg"
                  alt="Sérum Roberta pré e pós procedimento estético"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-semibold">
                Sérum Roberta Pré e Pós
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Fórmula de alta compatibilidade dérmica para acelerar a regeneração e manter a barreira cutânea fortalecida.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href="https://www.magazineluiza.com.br/serum-pre-e-pos-procedimento-estetico-roberta/p/gkkajee29k/li/lmdc/?srsltid=AU7gw4Ur0EQkwSxMir-AAyrqSlZhE7-CL35JIFGjAEPP9mtzDoXFQ0Tr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-[#A87932] transition-colors"
              >
                <span>Comprar no Magazine Luiza</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
