import React, { useState } from 'react';
import { Star, ChevronDown, MessageCircle, Quote, ShieldCheck } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from '../data/links';

interface Testimonial {
  name: string;
  age: string;
  procedure: string;
  comment: string;
  source: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Camila Mendonça',
    age: '38 anos',
    procedure: 'Bioestimulador de Colágeno & Toxina Preventiva',
    comment: 'Eu tinha pavor de ficar com cara de boneca de cera. A Dra. Paula me explicou cada detalhe anatômico na consulta de avaliação. O resultado ficou tão sutil e perfeito que no meu trabalho só me perguntaram se eu tinha voltado de férias!',
    source: 'Avaliação verificada no Google'
  },
  {
    name: 'Renata Albuquerque',
    age: '46 anos',
    procedure: 'Harmonização Sutil & Fios de Sustentação',
    comment: 'Recuperei a linha da mandíbula que estava sumindo. Sem dor alguma durante a aplicação porque a anestesia local foi impecável. O atendimento é extremamente humano, sem pressa. Recomendo de olhos fechados.',
    source: 'Paciente da clínica há 2 anos'
  },
  {
    name: 'Luciana Ferreira',
    age: '32 anos',
    procedure: 'Preenchimento Labial Discreto & Sérum Roberta',
    comment: 'Meus lábios estavam finos e ressecados. A Dra. Paula desenhou um contorno milimétrico apenas para hidratar e dar sustentação. O sérum que ela indicou para pós-cuidado acelerou a recuperação em 48 horas.',
    source: 'Avaliação no Google Maps'
  }
];

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: 'Os procedimentos doem ou deixam marcas visíveis?',
    answer: 'Trabalhamos com anestésicos tópicos hospitalares de alta potência e, quando indicado, anestesia infiltrativa local com cânulas de ponta atraumática (que não cortam vasos sanguíneos). A grande maioria dos pacientes relata desconforto mínimo ou nulo. Qualquer leve rubor costuma desaparecer em poucas horas.'
  },
  {
    question: 'Qual a diferença entre a harmonização da Dra. Paula e a tradicional?',
    answer: 'A abordagem da Dra. Paula Fischer prioriza sustentação óssea e estímulo do próprio colágeno dérmico, em vez de injetar altas doses de preenchedor que pesam o rosto. O objetivo é a beleza invisível: ninguém aponta o que foi feito, mas todos percebem o frescor e a harmonia.'
  },
  {
    question: 'Como funciona o parcelamento e contratação pelo Mercado Livre?',
    answer: 'Disponibilizamos mais de 40 tipos de protocolos no Mercado Livre Serviços, onde você pode parcelar seu procedimento com segurança em até 12 vezes e contar com a garantia da plataforma. O agendamento também pode ser feito diretamente pelo nosso WhatsApp.'
  },
  {
    question: 'Quanto tempo duram os resultados?',
    answer: 'Varia conforme o procedimento: a toxina botulínica dura em média de 4 a 6 meses; os bioestimuladores de colágeno geram resultados progressivos com pico em 90 dias e sustentação por até 24 meses; o ácido hialurônico de sustentação dura entre 12 e 18 meses.'
  },
  {
    question: 'Como devo me preparar para a primeira consulta de avaliação?',
    answer: 'A primeira consulta é uma anamnese aprofundada de cerca de 1 hora. Não é necessário nenhum preparo específico prévio. Traga suas dúvidas e fotos antigas se desejar demonstrar como seus traços naturais eram anos atrás.'
  }
];

export const SocialProofFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Section */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#8C6D3A]">
              Depoimentos Reais & Transformações
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
              O que dizem os pacientes que escolheram a <span className="italic font-medium text-[#A87932]">elegância</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans">
              Histórias de autoestima restabelecida com segurança, naturalidade e respeito à individualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#C5A059]/40" />
                  </div>

                  <p className="text-sm text-slate-700 italic leading-relaxed font-serif text-base">
                    "{t.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-1">
                  <div className="text-sm font-semibold text-slate-900 font-sans">
                    {t.name} <span className="text-xs font-normal text-slate-400">· {t.age}</span>
                  </div>
                  <div className="text-xs text-[#8C6D3A] font-medium font-sans">
                    {t.procedure}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#8C6D3A]">
              Esclarecimento de Dúvidas
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal">
              Perguntas Frequentes
            </h3>
            <p className="text-slate-600 text-sm font-sans">
              Transparência científica total para você tomar sua decisão com tranquilidade.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#E5DFD5] bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-medium text-slate-900 hover:text-[#A87932] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#A87932]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick FAQ CTA */}
          <div className="p-6 rounded-2xl bg-white border border-[#C5A059]/40 text-center space-y-3">
            <div className="font-serif text-xl font-semibold text-slate-900">
              Ainda tem alguma pergunta específica sobre o seu caso?
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Nossa recepção clínica está à disposição para tirar dúvidas e verificar a agenda da Dra. Paula.
            </p>
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#1A1E24] hover:bg-[#A87932] rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#E8D8B8]" />
              <span>Tirar Dúvidas com a Recepção no WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
