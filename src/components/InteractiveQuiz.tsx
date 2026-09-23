import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/treatments';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, MessageCircle, ShieldCheck } from 'lucide-react';
import { OFFICIAL_PHONE } from '../data/links';

export const InteractiveQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    const updated = { ...answers, [questionId]: optionIndex };
    setAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Generate recommendation based on selected answers
  const currentQ = QUIZ_QUESTIONS[currentStep];

  const getResultRecommendation = () => {
    const ans1 = answers[1] ?? 0;
    const ans2 = answers[2] ?? 0;
    const ans3 = answers[3] ?? 0;

    let protocolTitle = 'Protocolo Personalizado Dra. Paula Fischer';
    let protocolSummary = 'Combinação sob medida para reestruturação dérmica e vitalidade.';
    let estimatedDuration = '45 a 60 minutos';
    let keyPillars = ['Análise Facial Tridimensional', 'Reposição Anatômica de Vetores', 'Home Care Biocompatível'];

    if (ans1 === 1) {
      protocolTitle = 'Protocolo Bio-Lifting & Banco de Colágeno';
      protocolSummary = 'Estímulo de fibroblastos com Radiesse ou Sculptra associado a micro-pontos de sustentação.';
      keyPillars = ['Bioestimulador de Longa Duração', 'Recuperação do Turgor', 'Sérum Reparador Roberta'];
    } else if (ans1 === 2) {
      protocolTitle = 'Protocolo Expressão Serena (Toxina de Alta Precisão)';
      protocolSummary = 'Tratamento de terço superior sem rigidez muscular, preservando a mímica autêntica.';
      keyPillars = ['Mapeamento Individual de Mímica', 'Dosagem Fracionada Anti-Vincos', 'Efeito Descanso Imediato'];
    } else if (ans1 === 0) {
      protocolTitle = 'Harmonização Full Face Sutil (Método Invisível)';
      protocolSummary = 'Restauração de volume nas maçãs do rosto e ângulo mandibular para efeito lifting sutil.';
      keyPillars = ['Sustentação Estrutural Óssea', 'Definição Discreta de Ângulos', 'Naturalidade Absoluta'];
    } else {
      protocolTitle = 'Protocolo Glow & Renovação Biológica';
      protocolSummary = 'Peelings biomédicos combinados com ativos regenerativos e hidratação profunda.';
      keyPillars = ['Renovação Celular Não Agressiva', 'Clareamento & Uniformização', 'Sérum Roberta Home Care'];
    }

    const selectedQ1 = QUIZ_QUESTIONS[0].options[ans1]?.label || 'Queixa facial';
    const selectedQ2 = QUIZ_QUESTIONS[1].options[ans2]?.label || 'Naturalidade';
    const selectedQ3 = QUIZ_QUESTIONS[2].options[ans3]?.label || 'Faixa etária';

    const whatsappMessage = encodeURIComponent(
      `Olá, Dra. Paula Fischer! Fiz o Simulador de Protocolo no site:\n\n` +
      `📌 *Queixa principal:* ${selectedQ1}\n` +
      `📌 *Objetivo:* ${selectedQ2}\n` +
      `📌 *Faixa etária:* ${selectedQ3}\n` +
      `💡 *Recomendação:* ${protocolTitle}\n\n` +
      `Gostaria de agendar minha avaliação clínica para analisar este protocolo.`
    );

    const whatsappUrl = `https://wa.me/55${OFFICIAL_PHONE}?text=${whatsappMessage}`;

    return {
      protocolTitle,
      protocolSummary,
      estimatedDuration,
      keyPillars,
      selectedQ1,
      selectedQ2,
      selectedQ3,
      whatsappUrl,
    };
  };

  return (
    <section id="diagnostico" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#8C6D3A]">
            Ferramenta Interativa de Análise
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            Simulador de Protocolo <span className="italic font-medium text-[#A87932]">Personalizado</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Responda 3 perguntas rápidas para descobrir qual abordagem biomédica respeita a anatomia do seu rosto e traz o melhor resultado.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-2xl border border-[#E5DFD5] shadow-lg p-6 sm:p-10 relative">
          
          {!isCompleted ? (
            <div>
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
                  <span>Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                  <span className="text-[#8C6D3A] font-semibold">{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% concluído</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#A87932] h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Header */}
              <div className="space-y-2 mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-medium leading-snug">
                  {currentQ.question}
                </h3>
                <p className="text-sm text-slate-500 font-sans">
                  {currentQ.subtext}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = answers[currentQ.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQ.id, idx)}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-start justify-between group ${
                        isSelected
                          ? 'border-[#A87932] bg-[#FAF8F5] shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="space-y-1 pr-4">
                        <div className="font-medium text-slate-900 text-base group-hover:text-[#A87932] transition-colors">
                          {option.label}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                          {option.description}
                        </div>
                      </div>
                      <div className="shrink-0 mt-1">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#A87932] bg-[#A87932]' : 'border-slate-300'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Back / Skip navigation */}
              {currentStep > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    ← Voltar pergunta anterior
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Results View
            (() => {
              const res = getResultRecommendation();
              return (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="text-center space-y-2 pb-4 border-b border-slate-100">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Diagnóstico Concluído</span>
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-slate-900">
                      {res.protocolTitle}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-xl mx-auto font-sans">
                      {res.protocolSummary}
                    </p>
                  </div>

                  {/* Diagnostic Insights */}
                  <div className="bg-[#FAF8F5] p-5 rounded-xl border border-slate-200/80 space-y-3">
                    <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                      Resumo das Suas Preferências
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-lg border border-slate-100">
                        <span className="text-slate-400 block mb-0.5">Queixa Principal</span>
                        <span className="font-medium text-slate-800">{res.selectedQ1}</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-100">
                        <span className="text-slate-400 block mb-0.5">Expectativa</span>
                        <span className="font-medium text-slate-800">{res.selectedQ2}</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-100">
                        <span className="text-slate-400 block mb-0.5">Faixa Etária</span>
                        <span className="font-medium text-slate-800">{res.selectedQ3}</span>
                      </div>
                    </div>
                  </div>

                  {/* Treatment Pillars */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Pilares Recomendados na Sua Avaliação:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {res.keyPillars.map((pillar, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-800">
                          <Sparkles className="w-3.5 h-3.5 text-[#A87932] shrink-0" />
                          <span>{pillar}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <a
                      href={res.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold text-white bg-[#1A1E24] hover:bg-[#A87932] transition-colors rounded-xl shadow-md group"
                    >
                      <MessageCircle className="w-5 h-5 text-[#E8D8B8] group-hover:scale-110 transition-transform" />
                      <span>Enviar Diagnóstico para a Dra. Paula no WhatsApp</span>
                    </a>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Avaliação presencial minuciosa no Tatuapé - SP</span>
                      </div>
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Refazer teste</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })()
          )}

        </div>

      </div>
    </section>
  );
};
